// components/VideoDetail.jsx
import React from 'react';

/**
 * Composant pour afficher les détails d'une vidéo
 * @param {Object} props - Propriétés du composant
 * @returns {JSX.Element} - Élément JSX
 */
const VideoDetail = ({ video, onClose }) => {
  if (!video) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.85)',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '24px'
    }}>
      {/* Bouton de fermeture */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'none',
          border: 'none',
          color: 'white',
          fontSize: '24px',
          cursor: 'pointer',
          zIndex: 1001
        }}
      >
        ✕
      </button>

      <div style={{
        display: 'flex',
        maxWidth: '1200px',
        width: '100%',
        height: '80vh',
        borderRadius: '16px',
        overflow: 'hidden',
        backgroundColor: '#1a1a1a',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)'
      }}>
        {/* Côté gauche: Vidéo */}
        <div style={{
          flex: '0 0 60%',
          position: 'relative',
          backgroundColor: 'black'
        }}>
          <video
            src={video.videoUrl}
            poster={video.thumbnailUrl}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
            controls
            autoPlay
            muted
          />
        </div>

        {/* Côté droit: Informations */}
        <div style={{
          flex: '0 0 40%',
          padding: '30px',
          overflowY: 'auto'
        }}>
          <h2 style={{
            color: 'white',
            fontSize: '1.8rem',
            marginBottom: '16px'
          }}>
            {video.fullTitle || video.title}
          </h2>

          {/* Badges */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '24px'
          }}>
            <span style={{
              backgroundColor: 'rgba(196,130,252,0.2)',
              color: '#c482fc',
              borderRadius: '4px',
              padding: '4px 12px',
              fontSize: '0.8rem'
            }}>
              Vidéo
            </span>
            
            <span style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              color: '#e1e1e1',
              borderRadius: '4px',
              padding: '4px 12px',
              fontSize: '0.8rem'
            }}>
              ID: {video.id}
            </span>
          </div>

          {/* Liste des tâches */}
          <div>
            <h3 style={{
              color: '#c482fc',
              fontSize: '1.1rem',
              marginBottom: '12px',
              fontWeight: '500'
            }}>
              Réalisations
            </h3>
            
            <ul style={{
              listStyleType: 'none',
              padding: 0,
              margin: 0
            }}>
              {video.tasks && video.tasks.map((task, idx) => (
                <li 
                  key={idx}
                  style={{
                    color: '#b8b8b8',
                    padding: '8px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '0.9rem'
                  }}
                >
                  <span style={{
                    display: 'inline-block',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(196,130,252,0.2)',
                    color: '#c482fc',
                    fontSize: '0.8rem',
                    marginRight: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {idx + 1}
                  </span>
                  {task}
                </li>
              ))}
            </ul>
          </div>

          {/* Lien Instagram */}
          {video.link && (
            <a 
              href={video.link} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#E1306C', // Couleur Instagram
                color: 'white',
                padding: '12px 20px',
                borderRadius: '8px',
                textDecoration: 'none',
                marginTop: '30px',
                fontWeight: '500',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#C13584';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#E1306C';
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              Voir sur Instagram
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
