import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import { fadeIn } from "../../variants";
import { useCloudinaryVideos } from "../../hooks/useCloudinaryVideos";

// Format vertical reel Instagram, slider circulaire custom

const Work = () => {
  // Liste complète des vidéos avec leurs tâches respectives
  const videosData = [
    { 
      src: "/01.mp4", 
      thumbnail: "/thumb1.jpg", 
      description: "Reel Canva", 
      fullTitle: "Reel informatif sur Canva",
      link: "https://www.instagram.com/reel/DHCHso5I2iO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      tasks: [
        "Storyboarding et conception visuelle",
        "Montage et post-production",
        "Sound design et mixage audio",
        "Tournage et réalisation",
        "Direction artistique"
      ]
    },
    { 
      src: "/02.mp4", 
      thumbnail: "/thumb1.jpg", 
      description: "Vidéo 2", 
      fullTitle: "Reel promotionelle pour un podcast",
      link: "https://www.instagram.com/reel/DFyN3kuIuLD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      tasks: [
        "Direction artistique complète",
        "Animation de textes et typographie",
        "Montage vidéo",
        "Colorimétrie et étalonnage",
        "Direction artistique",
        "Réalisation du podcast",
        "Tournage et réalisation",
        "Mixage et réglage Audio"
      ]
    },
    { 
      src: "/03.mp4", 
      thumbnail: "/thumb1.jpg", 
      description: "Vidéo 3", 
      fullTitle: "Reel promotionnel en arabe pour le salon de l'emploie de l'esi",
      link: "https://www.instagram.com/reel/DImWN6IIZNg/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      tasks: [
        "Tournage et réalisation",
        "Montage vidéo",
        "Gestion du sponsoring",
        "Post-production et finalisation"
      ]
    },
    { 
      src: "/04.mp4", 
      thumbnail: "/thumb1.jpg", 
      description: "Concept Week Ramadan", 
      fullTitle: "Teaser pour une serie de vidéos sur le ramadan",
      link: "https://www.instagram.com/reel/DHZTgHVADVT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      tasks: [
        "Concept créatif spécial Ramadan",
        "Montage vidéo",
        "Tournage et réalisation ( Reel avec figurants )",
        "Montage rythmique et synchronisation",
        "Scripting et narration"
      ]
    },
    { 
      src: "/05.mp4", 
      thumbnail: "/thumb2.jpg", 
      description: "BIMO Communication", 
      fullTitle: "Reel informatif sur BIMO",
      link: "https://www.instagram.com/reel/DE0bhquokNc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      tasks: [
        "Analyse de la stratégie de marque",
        "Création d'éléments visuels corporate",
        "Animation de logo et motion branding",
        "Montage promotionnel dynamique"
      ]
    },
    { 
      src: "/06.mp4", 
      thumbnail: "/thumb2.jpg", 
      description: "Essai 4", 
      fullTitle: "Interview de Meziane Dahou",
      link: "https://www.instagram.com/reel/DAtqjTloCOy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      tasks: [
        "Tests de concepts visuels",
        "Scripting et écriture des questions"
      ]
    },
    { 
      src: "/07.mp4", 
      thumbnail: "/thumb2.jpg", 
      description: "ETIC Surprise", 
      fullTitle: "Teaser pour la sortie d'un test de QI version étudiant algerien",
      link: "https://www.instagram.com/reel/DA1cZC0ol9S/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      tasks: [
        "Teaser et effet de surprise",
        "Montage vidéo",
        "Tournage et réalisation",
        "Scripting et narration"
      ]
    },
    { 
      src: "/08.mp4", 
      thumbnail: "/thumb3.jpg", 
      description: "Podcast S2EE", 
      fullTitle: "Reel promotionelle pour un podcast",
      link: "https://www.instagram.com/reel/DJZ7BrDoe8C/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      tasks: [
        "Direction artistique complète",
        "Animation de textes et typographie",
        "Montage vidéo",
        "Colorimétrie et étalonnage",
        "Direction artistique",
        "Réalisation du podcast",
        "Tournage et réalisation",
        "Mixage et réglage Audio"
      ]
    },
    { 
      src: "/09.mp4", 
      thumbnail: "/thumb3.jpg", 
      description: "Learning By Doing", 
      fullTitle: "Reel sur le concept du : Learning By Doing",
      link: "https://www.instagram.com/reel/DDKs-SdORgP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      tasks: [
        "Concept pédagogique visuel",
        "Design d'infographies animées",
        "Apparition dans le reel ( Mehdi Medjani )"
      ]
    },
    { 
      src: "/10.mp4", 
      thumbnail: "/thumb3.jpg", 
      description: "Emploitic", 
      fullTitle: "Reel sur Emploitic",
      link: "https://www.instagram.com/reel/DFlQNaPozCA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      tasks: [
        "Storytelling entrepreneurial",
        "Tournage et réglage audio",
        "Montage et rythme dynamique",
        "Réalisation du projet"
      ]
    },
    { 
      src: "/11.mp4", 
      thumbnail: "/thumb4.jpg", 
      description: "TC XI", 
      fullTitle: "Reel promotionelle pour le TC XI",
      link: "https://www.instagram.com/reel/DDIJgtooLJx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      tasks: [
        "Capture d'événement",
        "Montage immersif",
        "Animation de textes et données",
        "Sound design d'ambiance",
        "Réalisation du projet",
        "Tournage et réalisation"
      ]
    },
    { 
      src: "/12.mp4", 
      thumbnail: "/thumb4.jpg", 
      description: "Reel Août", 
      fullTitle: "Reel Informatif pour l'entreprise Safir",
      link: "https://www.instagram.com/safir.consulting",
      tasks: [
        "Scripting et narration",
        "Apparition ( Sid Jamyl )",
        "Montage dynamique",
        "Colorimétrie harmonisée",
        "Apparition ( Sid Jamyl )"
      ]
    },
    { 
      src: "/13.mp4", 
      thumbnail: "/thumb4.jpg", 
      description: "Reel Explicatif", 
      fullTitle: "Reel Explicatif pour l'événement S2EE",
      link: "https://www.instagram.com/reel/DIemG7UIABt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      tasks: [
        "Scripting et narration",
        "Apparition ( Sid Jamyl )",
        "Montage dynamique",
        "Colorimétrie harmonisée"
      ]
    },
    { 
      src: "/14.mp4", 
      thumbnail: "/thumb1.jpg", 
      description: "Reel Touria", 
      fullTitle: "Reel promotionnel pour l'entrepreneuriat",
      link: "https://www.instagram.com/reel/DChisZaIvFx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      tasks: [
        "Direction artistique",
        "Tournage et réalisation",
        "Montage vidéo",
        "Effets visuels subtils"
      ]
    },
    { 
      src: "/15.mov", 
      thumbnail: "/thumb1.jpg", 
      description: "Teaser S2EE16", 
      fullTitle: "Interview S2EE",
      link: "https://www.instagram.com/reel/DIzSQclggtK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      tasks: [
        "Ecriture des questions",
        "Tournage avec fond vert",
        "Montage vidéo"
      ]
    },
    { 
      src: "/16.mp4", 
      thumbnail: "/thumb2.jpg", 
      description: "Tournage + Montage", 
      fullTitle: "Teaser pour le S2EE",
      link: "https://www.instagram.com/reel/DIW4FRkIhw2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      tasks: [
        "Direction de tournage",
        "Cadrage et composition",
        "Montage et assemblage",
        "Post-production et finalisation",
        "Réalisation du projet"
      ]
    },
    { 
      src: "/17.mp4", 
      thumbnail: "/thumb3.jpg", 
      description: "VF Pot", 
      fullTitle: "Récapitulatif de conférence",
      link: "https://www.instagram.com/reel/DAomwsVi_zd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      tasks: [
        "Adaptation version française",
        "Synchronisation labiale",
        "Mixage audio multilingue",
        "Montage et ajustements techniques"
      ]
    },
    { 
      src: "/20.mp4", 
      thumbnail: "/thumb1.jpg", 
      description: "Motion Design", 
      fullTitle: "Reel sur Duolingo",
      link: "https://www.instagram.com/reel/DE284yFoQJi/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      tasks: [
        "réalisation du projet",
        "Montage vidéo",
        "Tournage et réalisation"
      ]
    },
    { 
      src: "/19.mp4", 
      thumbnail: "/thumb2.jpg", 
      description: "Présentation Startup", 
      fullTitle: "Teaser pour l'évenement Before S2EE",
      link: "https://www.instagram.com/reel/DI67dcHowc8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      tasks: [
        "Écriture du script ",
        "Direction du Tournage",
        "Montage dynamique",
        "réalisation du projet"
      ]
    },
    { 
      src: "/18.mp4", 
      thumbnail: "/thumb3.jpg", 
      description: "Reel sur l'Analyse Pestel", 
      fullTitle: "Reel sur l'Analyse Pestel",
      link: "https://www.instagram.com/reel/DCkMeFCo7Bt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      tasks: [
        "Tournage et réalisation",
        "Montage vidéo",
        "Création d'animations graphiques"
      ]
    },
    
    { 
      src: "/24.mp4", 
      thumbnail: "/thumb2.jpg", 
      description: "Publicité Produit", 
      fullTitle: "Récapitulatif de l'évenement S2EE ",
      link: "https://www.instagram.com/reel/DD5IgJnoJap/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      tasks: [
        "Direction artistique ",
        "Tournage et réalisation",
        "Montage vidéo",
        "Ecriture du script"
      ]
    },
    { 
      src: "/25.mp4", 
      thumbnail: "/thumb4.jpg", 
      description: "Documentaire Court", 
      fullTitle: "Mini Court metrage pour promouvoir un Article",
      link: "https://www.instagram.com/reel/DAg68H8obmc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      tasks: [
        "Recherche et développement narratif",
        "Tournage en conditions réelles",
        "Montage documentaire avec narration",
        "Colorimétrie cinématographique"
      ]
    },
    { 
      src: "/27.mp4", 
      thumbnail: "/thumb2.jpg", 
      description: "Interview Expert", 
      fullTitle: "Reel informatif pour SAFIR",
      link: "https://www.instagram.com/safir.consulting",
      tasks: [
       "Direction artistique minimaliste",
        "Éclairage studio professionnel",
        "Tournage et réalisation",
        "Montage vidéo",
        "Ecriture du script",
        "Apparition dans la vidéo (Medjani Mehdi)"
      ]
    },
    { 
      src: "/28.mp4", 
      thumbnail: "/thumb3.jpg", 
      description: "Demo Logiciel", 
      fullTitle: "Reel informatif pour Safir",
      link: "https://www.instagram.com/safir.consulting",
      tasks: [
        "Direction artistique minimaliste",
        "Éclairage studio professionnel",
        "Tournage et réalisation",
        "Montage vidéo",
        "Ecriture du script",
        "Apparition dans la vidéo (Sid Jamyl)"
      ]
    },
    { 
      src: "/29.mp4", 
      thumbnail: "/thumb4.jpg", 
      description: "Aftermovie Festival", 
      fullTitle: "Teaser pour l'événement Algiers UP",
      link: "https://www.instagram.com/reel/DFa6uykoIF-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      tasks: [
        "Montage synchronisé à la musique",
        "Colorimétrie créative et artistique",
        "Transitions dynamiques entre séquences",
        "Intégration d'effets visuels atmosphériques",
        "Tournage professionnel"
      ]
    },
    { 
      src: "/30.mp4", 
      thumbnail: "/thumb1.jpg", 
      description: "Projet Fin d'Études", 
      fullTitle: "Reel informatif pour SAFIR ",
      link: "https://www.instagram.com/safir.consulting",
      tasks: [
       "Direction artistique minimaliste",
        "Éclairage studio professionnel",
        "Tournage et réalisation",
        "Montage vidéo",
        "Ecriture du script",
        "Apparition dans la vidéo (Sid Jamyl)"
      ]
    }
  ];

  // Utiliser le hook personnalisé pour charger les vidéos de Cloudinary
  const { videos: allVideos, isLoading } = useCloudinaryVideos(videosData);

  // Utilisation de useState pour la vidéo actuellement affichée
  const [currentVideo, setCurrentVideo] = React.useState(null);
  const [videoIndex, setVideoIndex] = React.useState(0);
  
  // Navigation
  const goLeft = () => {
    if (!allVideos || allVideos.length === 0) return;
    const newIndex = (videoIndex - 1 + allVideos.length) % allVideos.length;
    setVideoIndex(newIndex);
    setCurrentVideo(allVideos[newIndex]);
  };
  
  const goRight = () => {
    if (!allVideos || allVideos.length === 0) return;
    const newIndex = (videoIndex + 1) % allVideos.length;
    setVideoIndex(newIndex);
    setCurrentVideo(allVideos[newIndex]);
  };

  // Si les données sont en cours de chargement, afficher un indicateur
  React.useEffect(() => {
    if (!isLoading && allVideos && allVideos.length > 0) {
      setCurrentVideo(allVideos[videoIndex]);
    }
  }, [isLoading, allVideos, videoIndex]);

  // Slider custom
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #0c0c14 0%, #1a1a2e 100%)', 
      color: 'var(--color-darkest)', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'flex-start', 
      position: 'relative', 
      padding: '0 0 4rem 0',
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232a2a3d' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      backgroundAttachment: 'fixed'
    }}>
      {/* Overlay circulaire avec gradient au centre */}
      <div style={{
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(196,130,252,0.05) 0%, rgba(138,97,255,0.03) 40%, rgba(0,0,0,0) 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 0
      }}></div>
      
      <Circles />
      
      {/* Titre de la section en haut avec éléments décoratifs */}
      <div style={{ width: '100%', textAlign: 'center', marginBottom: '30px', marginTop: '30px', position: 'relative' }}>
        {/* Élément décoratif du haut */}
        <div style={{
          position: 'absolute',
          top: '-20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60px',
          height: '3px',
          background: 'linear-gradient(90deg, rgba(196,130,252,0) 0%, rgba(196,130,252,1) 50%, rgba(196,130,252,0) 100%)'
        }}></div>
        
        {/* Label "Featured" */}
        <div style={{
          display: 'inline-block',
          padding: '5px 15px',
          background: 'rgba(196,130,252,0.15)',
          borderRadius: '20px',
          fontSize: '0.85rem',
          color: '#c482fc',
          marginBottom: '15px',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          fontWeight: '600'
        }}>
          Featured
        </div>
        
        <h1 style={{ 
          fontSize: '3.5rem', 
          fontWeight: 'bold', 
          color: 'white', 
          marginBottom: '15px',
          background: 'linear-gradient(90deg, #c482fc, #8a61ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '1px'
        }}>Mes Projets</h1>
        
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#b8b8b8', 
          maxWidth: '600px', 
          margin: '0 auto',
          lineHeight: '1.7'
        }}>
          Découvrez mes dernières créations vidéo et productions audiovisuelles
          de qualité professionnelle
        </p>
        
        {/* Élément décoratif du bas */}
        <div style={{
          position: 'absolute',
          bottom: '-15px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '120px',
          height: '1px',
          background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)'
        }}></div>
      </div>
      <div id="videoPlayer" style={{ 
        width: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        position: 'relative', 
        minHeight: '600px', 
        marginTop: '20px',
        padding: '0 20px'
      }}>
        {/* Indicateur de chargement global */}
        {isLoading && (
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(10, 10, 26, 0.8)',
            zIndex: 1000,
            borderRadius: '20px'
          }}>
            <div style={{ 
              width: '60px', 
              height: '60px', 
              border: '4px solid rgba(196,130,252,0.3)',
              borderTop: '4px solid rgba(196,130,252,1)',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              marginBottom: '20px'
            }}></div>
            <p style={{ color: 'white', fontSize: '18px' }}>Chargement des vidéos...</p>
            <style jsx>{`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        )}
        
        {/* Éléments décoratifs autour de la vidéo */}
        <div style={{ 
          position: 'absolute', 
          width: '150px', 
          height: '150px', 
          borderRadius: '50%', 
          background: 'rgba(255, 255, 255, 0.03)', 
          top: '50px', 
          left: '20%',
          zIndex: 1
        }}></div>
        <div style={{ 
          position: 'absolute', 
          width: '100px', 
          height: '100px', 
          borderRadius: '50%', 
          background: 'rgba(255, 255, 255, 0.03)', 
          bottom: '100px', 
          right: '20%',
          zIndex: 1
        }}></div>

        {/* Boutons de navigation repositionnés pour la nouvelle mise en page */}
        {allVideos && allVideos.length > 0 && (
          <>
            <button
              onClick={goLeft}
              aria-label="Précédent"
              style={{
                position: 'absolute',
                left: '25%',
                top: '280px',
                transform: 'translateX(-50%)',
                zIndex: 100,
                background: 'rgba(0,0,0,0.5)',
                border: 'none',
                width: 54,
                height: 54,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                outline: 'none',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(196,130,252,0.3)';
                e.currentTarget.style.transform = 'translateX(-50%) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0,0,0,0.5)';
                e.currentTarget.style.transform = 'translateX(-50%) scale(1)';
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={goRight}
              aria-label="Suivant"
              style={{
                position: 'absolute',
                right: '25%',
                top: '280px',
                transform: 'translateX(50%)',
                zIndex: 100,
                background: 'rgba(0,0,0,0.5)',
                border: 'none',
                width: 54,
                height: 54,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                outline: 'none',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(196,130,252,0.3)';
                e.currentTarget.style.transform = 'translateX(50%) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0,0,0,0.5)';
                e.currentTarget.style.transform = 'translateX(50%) scale(1)';
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </button>

            {/* Mise en page pour le lecteur principal et les détails */}
            <div style={{ 
              width: '100%', 
              maxWidth: '800px', 
              display: 'flex', 
              flexDirection: 'row', 
              alignItems: 'center', 
              justifyContent: 'center', 
              flexWrap: 'wrap',
              gap: '30px'
            }}>
              {/* Vidéo centrale */}
              <div style={{ width: 320, height: 560, position: 'relative', zIndex: 2 }}>
                <CarouselVideo
                  video={currentVideo}
                  isActive={true}
                  style={{ width: 320, height: 560, boxShadow: '0 8px 32px rgba(52,58,64,0.18)' }}
                />
              </div>
              
              {/* Section des détails du projet */}
              <div style={{ 
                width: '300px', 
                padding: '25px', 
                background: 'rgba(15,15,26,0.5)', 
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                color: 'white'
              }}>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold', 
                  marginBottom: '15px',
                  color: '#c482fc'
                }}>
                  {currentVideo?.fullTitle || currentVideo?.description || 'Projet vidéo'}
                </h3>
                
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '15px 0' }}></div>
                
                <h4 style={{ 
                  fontSize: '1.1rem', 
                  fontWeight: 'bold', 
                  marginBottom: '10px',
                  color: '#ffffff'
                }}>
                  Tâches réalisées:
                </h4>
                
                <ul style={{ 
                  listStyleType: 'none', 
                  padding: '0', 
                  margin: '0' 
                }}>
                  {/* Tâches spécifiques à la vidéo actuelle */}
                  {currentVideo?.tasks && currentVideo?.tasks.map((task, index) => (
                    <li key={index} style={{ 
                      margin: '8px 0', 
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px'
                    }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c482fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '3px', flexShrink: 0 }}>
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                      </svg>
                      <span style={{ fontSize: '0.95rem', color: '#e0e0e0' }}>{task}</span>
                    </li>
                  ))}
                </ul>
                
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '20px 0' }}></div>
                
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginTop: '15px'
                }}>
                  <div style={{ 
                    fontSize: '0.9rem', 
                    color: '#b8b8b8',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {videoIndex + 1} / {allVideos.length}
                  </div>
                  
                  <a 
                    href={currentVideo?.link || '#'} 
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: 'rgba(196,130,252,0.2)',
                      color: '#c482fc',
                      padding: '8px 15px',
                      borderRadius: '8px',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(196,130,252,0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(196,130,252,0.2)';
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Voir plus
                  </a>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Message si aucune vidéo n'est disponible */}
        {!isLoading && (!allVideos || allVideos.length === 0) && (
          <div style={{
            textAlign: 'center',
            padding: '30px',
            background: 'rgba(15,15,26,0.5)',
            borderRadius: '20px',
            maxWidth: '400px',
            margin: '0 auto'
          }}>
            <h3 style={{ color: '#c482fc', marginBottom: '10px' }}>Aucune vidéo disponible</h3>
            <p style={{ color: '#b8b8b8' }}>Les vidéos n'ont pas pu être chargées depuis Cloudinary. Veuillez réessayer plus tard.</p>
          </div>
        )}
      </div>
      
      {/* Grille de toutes les vidéos */}
      {allVideos && allVideos.length > 0 && (
        <div style={{ width: '100%', maxWidth: '1200px', marginTop: '80px', padding: '0 20px', position: 'relative' }}>
          {/* Titre de section avec élément décoratif */}
          <div style={{ textAlign: 'center', position: 'relative', marginBottom: '3rem' }}>
            <div style={{
              position: 'absolute',
              top: '-15px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '40px',
              height: '2px',
              background: 'rgba(196,130,252,0.5)'
            }}></div>
            
            <h2 style={{ 
              color: 'white', 
              fontSize: '2.25rem', 
              marginBottom: '1rem', 
              fontWeight: '600',
              letterSpacing: '1px'
            }}>
              Tous les projets
            </h2>
            
            <p style={{
              color: '#b8b8b8',
              fontSize: '1rem',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Cliquez sur une vignette pour afficher la vidéo dans le lecteur principal
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', 
            gap: '2rem',
            width: '100%'
          }}>
            {allVideos.map((video, idx) => (
              <div 
                key={idx} 
                onClick={() => {
                  // Afficher directement la vidéo sélectionnée dans le carousel
                  setCurrentVideo(video);
                  setVideoIndex(idx);
                  
                  // Scroll to top to see the video - plus précis avec l'ID
                  document.getElementById('videoPlayer').scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                  });
                }}
                style={{
                  cursor: 'pointer',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background: '#181818',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  height: '380px', // Format vertical
                  transform: 'translateY(0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.3)';
                  // Trouver la vidéo et la jouer
                  const videoElement = e.currentTarget.querySelector('video');
                  if (videoElement) videoElement.play();
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
                  // Trouver la vidéo et la mettre en pause
                  const videoElement = e.currentTarget.querySelector('video');
                  if (videoElement) videoElement.pause();
                }}
              >
                {/* Numéro de projet */}
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  left: '15px',
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  color: 'white',
                  borderRadius: '50%',
                  width: '30px',
                  height: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  zIndex: 2
                }}>
                  {idx + 1}
                </div>
                
                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                  <video
                    src={video.cloudinarySrc}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      borderRadius: '16px'
                    }}
                    poster={video.cloudinaryThumbnail}
                    muted
                    loop
                    playsInline
                  />
                  
                  {/* Overlay au survol avec effet de transition */}
                  <div style={{ 
                    position: 'absolute', 
                    bottom: 0, 
                    left: 0, 
                    right: 0,
                    top: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0) 100%)',
                    borderRadius: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '20px'
                  }}>
                    <h3 style={{
                      color: 'white',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '5px'
                    }}>
                      {video.fullTitle || video.description}
                    </h3>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginTop: '8px'
                    }}>
                      <div style={{
                        backgroundColor: 'rgba(196,130,252,0.2)',
                        color: '#c482fc',
                        borderRadius: '4px',
                        padding: '4px 8px',
                        fontSize: '0.75rem',
                        marginRight: '8px'
                      }}>
                        Vidéo
                      </div>
                      
                      <div style={{
                        color: '#b8b8b8',
                        fontSize: '0.8rem',
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        {idx + 1} / {allVideos.length}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Section CTA (Call to Action) */}
      <div style={{
        width: '100%',
        maxWidth: '900px',
        margin: '100px auto 20px',
        background: 'linear-gradient(90deg, rgba(196,130,252,0.1) 0%, rgba(138,97,255,0.1) 100%)',
        borderRadius: '24px',
        padding: '50px 30px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
      }}>
        {/* Élément décoratif */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196,130,252,0.1) 0%, rgba(138,97,255,0.05) 50%, rgba(0,0,0,0) 70%)',
          zIndex: 0
        }}></div>
        
        <h2 style={{
          color: 'white',
          fontSize: '2.5rem',
          marginBottom: '20px',
          position: 'relative',
          zIndex: 1
        }}>
          Un projet en tête ?
        </h2>
        
        <p style={{
          color: '#b8b8b8',
          fontSize: '1.1rem',
          maxWidth: '600px',
          margin: '0 auto 30px',
          lineHeight: '1.7',
          position: 'relative',
          zIndex: 1
        }}>
          Je suis disponible pour des collaborations et projets créatifs.
          N'hésitez pas à me contacter pour discuter de votre projet.
        </p>
        
        <a 
          href="/contact" 
          style={{
            display: 'inline-block',
            background: 'linear-gradient(90deg, #c482fc 0%, #8a61ff 100%)',
            color: 'white',
            padding: '14px 32px',
            borderRadius: '30px',
            fontSize: '1rem',
            fontWeight: '600',
            textDecoration: 'none',
            boxShadow: '0 10px 25px rgba(138,97,255,0.3)',
            transition: 'all 0.3s ease',
            position: 'relative',
            zIndex: 1,
            border: 'none',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 15px 30px rgba(138,97,255,0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 25px rgba(138,97,255,0.3)';
          }}
        >
          Contactez-moi
        </a>
      </div>
      
      <Bulb />
    </div>
  );
};

// Composant vidéo du carrousel
function CarouselVideo({ video, isActive, style }) {
  // Si la vidéo est indéfinie, retourner un placeholder
  if (!video) {
    return (
      <div style={{
        borderRadius: 24,
        overflow: 'hidden',
        background: '#0f0f1a',
        boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
        position: 'relative',
        display: 'block',
        transition: 'all 0.4s ease',
        ...style
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          color: '#ffffff',
          fontSize: '14px'
        }}>
          Chargement...
        </div>
      </div>
    );
  }

  const videoRef = React.useRef(null);
  const [hovered, setHovered] = React.useState(false);
  const prevSrcRef = React.useRef(video.cloudinarySrc);
  const [loading, setLoading] = React.useState(true);
  
  // Déterminer la source vidéo à utiliser (Cloudinary uniquement)
  const videoSrc = video?.cloudinarySrc;

  // Maintenir l'état de lecture de la vidéo lors des changements
  React.useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;
    
    // Si la source a changé, réinitialiser
    if (prevSrcRef.current !== videoSrc) {
      prevSrcRef.current = videoSrc;
      setLoading(true);
      videoElement.currentTime = 0;
      videoElement.play().catch(e => console.log("Autoplay prevented:", e));
    } else if (isActive) {
      // Assurer que les vidéos actives jouent sans interruption
      const playPromise = videoElement.play();
      if (playPromise !== undefined) {
        playPromise.catch(e => console.log("Autoplay prevented:", e));
      }
    }
  }, [videoSrc, isActive]);

  return (
    <a
      href={video?.link || '#'}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        borderRadius: 24,
        overflow: 'hidden',
        background: '#0f0f1a',
        boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
        position: 'relative',
        display: 'block',
        transition: 'all 0.4s ease',
        ...style
      }}
      tabIndex={0}
      aria-label={video.description}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Badge "Regarder" - uniquement affiché au survol */}
      {isActive && hovered && (
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'rgba(196,130,252,0.8)',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '20px',
          fontSize: '0.8rem',
          fontWeight: '600',
          zIndex: 10,
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          transition: 'all 0.3s ease',
          transform: 'translateY(0)'
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          Regarder
        </div>
      )}
      
      {/* Loader pendant le chargement */}
      {loading && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0f0f1a',
          zIndex: 3,
          borderRadius: 24
        }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            border: '3px solid rgba(196,130,252,0.3)',
            borderTop: '3px solid rgba(196,130,252,1)',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}></div>
          <style jsx>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      )}
      
      {/* Ombre décorative au bas de la vidéo */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '100px',
        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
        zIndex: 2,
        pointerEvents: 'none'
      }}></div>
      
      {/* Vidéo */}
      <video
        ref={videoRef}
        src={videoSrc}
        poster={video.cloudinaryThumbnail}
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover', 
          borderRadius: 24, 
          background: 'black',
          transition: 'all 0.4s ease'
        }}
        muted={!isActive}
        loop
        playsInline
        autoPlay
        controls={isActive}
        onLoadedData={() => setLoading(false)}
        onError={(e) => {
          console.error("Erreur de chargement vidéo:", e);
          // Noter l'erreur mais continuer avec la source Cloudinary actuelle
          setLoading(false);
        }}
      />
    </a>
  );
}

export default Work;
