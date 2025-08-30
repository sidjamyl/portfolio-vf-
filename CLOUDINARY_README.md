# Guide pour la gestion des vidéos avec Cloudinary

Ce guide explique comment migrer les vidéos de votre portfolio vers Cloudinary pour alléger le dépôt Git.

## Pourquoi utiliser Cloudinary ?

- **Réduction de la taille du dépôt Git** : Les fichiers vidéo peuvent être volumineux et ralentir les opérations Git.
- **Optimisation des vidéos** : Cloudinary optimise automatiquement les vidéos pour différents appareils et connexions.
- **Transformations à la volée** : Redimensionnement, recadrage et autres transformations sans modifier les fichiers d'origine.
- **CDN mondial** : Diffusion rapide des vidéos partout dans le monde.

## Configuration initiale

1. Créez un compte sur [Cloudinary](https://cloudinary.com/users/register/free) (gratuit pour commencer)
2. Récupérez vos identifiants (Cloud Name, API Key, API Secret)
3. Configurez les variables d'environnement dans le fichier `.env` :

```
CLOUDINARY_CLOUD_NAME=votre_cloud_name
CLOUDINARY_API_KEY=votre_api_key
CLOUDINARY_API_SECRET=votre_api_secret
```

## Téléchargement des vidéos vers Cloudinary

Exécutez la commande suivante pour télécharger toutes vos vidéos vers Cloudinary :

```bash
npm run upload-videos
```

Cette commande :
- Télécharge toutes les vidéos du dossier `public/` vers Cloudinary
- Crée un fichier `public/video-mapping.json` qui fait correspondre les noms de fichiers locaux aux URLs Cloudinary

## Comment ça fonctionne

Le site essaie de charger les vidéos dans cet ordre :
1. D'abord depuis Cloudinary (si disponible)
2. Si l'étape 1 échoue, utilise la source locale
3. Si l'étape 2 échoue, affiche l'image de vignette

## Suppression des vidéos du dépôt Git

Une fois que vous avez vérifié que les vidéos Cloudinary fonctionnent correctement, vous pouvez supprimer les fichiers vidéo du dépôt Git :

```bash
# Pour supprimer les vidéos du suivi Git sans les supprimer du système de fichiers
git rm --cached public/*.mp4 public/*.mov

# Commit des changements
git commit -m "Removed video files from Git tracking, now using Cloudinary"
```

Les fichiers vidéo resteront dans votre dossier local mais ne seront plus suivis par Git.

## Ressources utiles

- [Documentation Cloudinary](https://cloudinary.com/documentation)
- [API vidéo Cloudinary](https://cloudinary.com/documentation/video_manipulation_and_delivery)
- [SDK Node.js Cloudinary](https://cloudinary.com/documentation/node_integration)
