// hooks/useCloudinaryVideos.js
import { useState, useEffect } from 'react';

// Hook personnalisé pour charger les données de mapping des vidéos
export function useCloudinaryVideos(videosData) {
  const [videos, setVideos] = useState(videosData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadVideoMapping() {
      try {
        // Essayer de charger le fichier de mapping
        const response = await fetch('/video-mapping.json');
        
        if (!response.ok) {
          // Si le fichier n'existe pas, continuer avec les données locales
          console.log('Fichier de mapping non trouvé, utilisation des sources locales');
          setIsLoading(false);
          return;
        }
        
        const videoMapping = await response.json();
        
        // Mettre à jour les sources de vidéo avec les URLs Cloudinary
        const updatedVideos = videosData.map(video => {
          const mapping = videoMapping.find(m => m.originalName === video.src.substring(1));
          if (mapping) {
            return {
              ...video,
              cloudinarySrc: mapping.cloudinaryUrl,
              // Garder la source originale comme fallback
              src: video.src
            };
          }
          return video;
        });
        
        setVideos(updatedVideos);
      } catch (err) {
        console.error('Erreur lors du chargement du mapping des vidéos:', err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    
    loadVideoMapping();
  }, [videosData]);
  
  return { videos, isLoading, error };
}
