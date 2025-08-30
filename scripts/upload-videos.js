// scripts/upload-videos.js
require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Configuration Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});

// Dossier contenant les vidéos
const videoFolder = path.join(__dirname, '../public');

// Liste des vidéos à télécharger (correspond à votre structure actuelle)
const videos = [
  '01.mp4', '02.mp4', '03.mp4', '04.mp4', '05.mp4',
  '06.mp4', '07.mp4', '08.mp4', '09.mp4', '10.mp4',
  '11.mp4', '12.mp4', '13.mp4', '14.mp4', '15.mov',
  '16.mp4', '17.mp4', '18.mp4', '19.mp4', '20.mp4',
  '24.mp4', '25.mp4', '27.mp4', '28.mp4', '29.mp4', '30.mp4'
];

// Fonction pour télécharger une vidéo
async function uploadVideo(filename) {
  try {
    const filePath = path.join(videoFolder, filename);
    
    // Vérifier si le fichier existe
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️ Fichier introuvable: ${filePath}`);
      return null;
    }
    
    console.log(`📤 Téléchargement de ${filename} vers Cloudinary...`);
    
    // Options de téléchargement
    const options = {
      resource_type: 'video',
      folder: 'portfolio-videos',
      public_id: path.parse(filename).name, // Utilise le nom du fichier sans extension
      overwrite: true,
      quality: 'auto', // Optimisation automatique
      eager_async: true,
    };
    
    // Télécharger la vidéo
    const result = await cloudinary.uploader.upload(filePath, options);
    
    console.log(`✅ ${filename} téléchargé avec succès! URL: ${result.secure_url}`);
    
    return {
      originalName: filename,
      cloudinaryUrl: result.secure_url
    };
  } catch (error) {
    console.error(`❌ Erreur lors du téléchargement de ${filename}:`, error);
    return null;
  }
}

// Fonction principale pour télécharger toutes les vidéos
async function uploadAllVideos() {
  console.log('🚀 Début du téléchargement des vidéos vers Cloudinary...');
  
  const results = [];
  
  for (const video of videos) {
    const result = await uploadVideo(video);
    if (result) {
      results.push(result);
    }
  }
  
  // Créer un fichier JSON avec les URLs Cloudinary
  const mappingFile = path.join(__dirname, '../public/video-mapping.json');
  fs.writeFileSync(mappingFile, JSON.stringify(results, null, 2));
  
  console.log(`\n📋 Téléchargement terminé! ${results.length}/${videos.length} vidéos téléchargées.`);
  console.log(`📄 Mapping des vidéos sauvegardé dans: ${mappingFile}`);
}

// Exécuter le script
uploadAllVideos().catch(console.error);
