// hooks/useCloudinaryVideos.js
import { useState, useEffect } from 'react';

// Hook personnalisé pour charger les vidéos depuis Cloudinary
export function useCloudinaryVideos(videosData) {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    function generateCloudinaryUrls() {
      try {
        // Nom du cloud Cloudinary (normalement stocké dans .env)
        const cloudName = 'dtjsggrqr'; // Le cloud_name de votre compte Cloudinary
        const folder = 'portfolio-videos'; // Le dossier où sont stockées vos vidéos

        // Générer les URLs Cloudinary pour chaque vidéo
        const videosWithCloudinaryUrls = videosData.map(video => {
          // Extraire le nom du fichier sans le slash initial et sans l'extension
          const fileName = video.src.substring(1);
          const fileNameWithoutExt = fileName.split('.')[0];
          
          // Générer l'URL Cloudinary
          const cloudinaryUrl = `https://res.cloudinary.com/${cloudName}/video/upload/${folder}/${fileNameWithoutExt}.mp4`;
          
          // Générer l'URL de la miniature (thumbnail)
          const thumbnailUrl = `https://res.cloudinary.com/${cloudName}/video/upload/c_fill,h_480,w_270/${folder}/${fileNameWithoutExt}.jpg`;
          
          return {
            ...video,
            cloudinarySrc: cloudinaryUrl,
            cloudinaryThumbnail: thumbnailUrl,
            // Nous gardons src comme référence, mais il ne sera plus utilisé
            src: video.src
          };
        });
        
        setVideos(videosWithCloudinaryUrls);
        setIsLoading(false);
      } catch (err) {
        console.error('Erreur lors de la génération des URLs Cloudinary:', err);
        setError(err);
        setIsLoading(false);
      }
    }
    
    // Lancer la génération des URLs
    generateCloudinaryUrls();
  }, [videosData]);
  
  return { videos, isLoading, error };
}
