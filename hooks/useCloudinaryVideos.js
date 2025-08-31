// hooks/useCloudinaryVideos.js
import { useState, useEffect } from 'react';

// Hook personnalisé pour charger les vidéos depuis Cloudinary
export function useCloudinaryVideos(videosData) {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function generateCloudinaryUrls() {
      try {
        // Nom du cloud Cloudinary (normalement stocké dans .env)
        const cloudName = 'dtjsggrqr'; // Le cloud_name de votre compte Cloudinary
        const folder = 'portfolio-videos'; // Le dossier où sont stockées vos vidéos

        // Générer les URLs Cloudinary pour chaque vidéo
        const videosWithCloudinaryUrls = await Promise.all(
          videosData.map(async (video) => {
            // Extraire le nom du fichier sans le slash initial et sans l'extension
            const fileName = video.src.substring(1); // Enlève le "/"
            const fileNameWithoutExt = fileName.split('.')[0]; // Enlève l'extension
            const originalExtension = fileName.split('.')[1]; // Récupère l'extension originale
            
            // Essayer d'abord avec l'extension originale, puis avec .mp4
            const extensionsToTry = [originalExtension, 'mp4'];
            
            let workingUrl = null;
            let workingThumbnail = null;
            
            for (const ext of extensionsToTry) {
              const testUrl = `https://res.cloudinary.com/${cloudName}/video/upload/${folder}/${fileNameWithoutExt}.${ext}`;
              
              try {
                // Test si l'URL existe
                const response = await fetch(testUrl, { method: 'HEAD' });
                if (response.ok) {
                  workingUrl = testUrl;
                  workingThumbnail = `https://res.cloudinary.com/${cloudName}/video/upload/c_fill,h_480,w_270/${folder}/${fileNameWithoutExt}.jpg`;
                  console.log(`✅ Vidéo trouvée: ${fileNameWithoutExt}.${ext}`);
                  break;
                }
              } catch (e) {
                console.log(`❌ Erreur pour ${fileNameWithoutExt}.${ext}:`, e.message);
              }
            }
            
            // Si aucune URL ne fonctionne, essayer des variantes de nommage
            if (!workingUrl) {
              const namingVariants = [
                fileNameWithoutExt,
                `video_${fileNameWithoutExt}`,
                `reel_${fileNameWithoutExt}`,
                fileNameWithoutExt.padStart(3, '0'), // 01 devient 001
              ];
              
              for (const variant of namingVariants) {
                for (const ext of ['mp4', 'mov', 'avi']) {
                  const testUrl = `https://res.cloudinary.com/${cloudName}/video/upload/${folder}/${variant}.${ext}`;
                  
                  try {
                    const response = await fetch(testUrl, { method: 'HEAD' });
                    if (response.ok) {
                      workingUrl = testUrl;
                      workingThumbnail = `https://res.cloudinary.com/${cloudName}/video/upload/c_fill,h_480,w_270/${folder}/${variant}.jpg`;
                      console.log(`✅ Vidéo trouvée avec variante: ${variant}.${ext}`);
                      break;
                    }
                  } catch (e) {
                    // Continuer silencieusement
                  }
                }
                if (workingUrl) break;
              }
            }
            
            if (!workingUrl) {
              console.warn(`⚠️ Aucune vidéo trouvée pour: ${fileNameWithoutExt}`);
              // Utiliser une URL par défaut même si elle ne fonctionne pas
              workingUrl = `https://res.cloudinary.com/${cloudName}/video/upload/${folder}/${fileNameWithoutExt}.mp4`;
              workingThumbnail = `https://res.cloudinary.com/${cloudName}/video/upload/c_fill,h_480,w_270/${folder}/${fileNameWithoutExt}.jpg`;
            }
            
            return {
              ...video,
              cloudinarySrc: workingUrl,
              cloudinaryThumbnail: workingThumbnail,
              src: video.src,
              isAvailable: !!workingUrl
            };
          })
        );
        
        console.log(`📊 Résumé: ${videosWithCloudinaryUrls.filter(v => v.isAvailable).length}/${videosWithCloudinaryUrls.length} vidéos disponibles`);
        
        setVideos(videosWithCloudinaryUrls);
        setIsLoading(false);
      } catch (err) {
        console.error('Erreur lors de la génération des URLs Cloudinary:', err);
        setError(err);
        setIsLoading(false);
      }
    }
    
    if (videosData && videosData.length > 0) {
      generateCloudinaryUrls();
    }
  }, [videosData]);
  
  return { videos, isLoading, error };
}
