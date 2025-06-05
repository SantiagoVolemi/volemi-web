import React from 'react';

interface Partner {
  id: number;
  name: string;
  logo: string;
  website?: string;
}

// Logos de partners
const partners: Partner[] = [
  {
    id: 1,
    name: "Queen's University Belfast",
    logo: "/images/partners/queens-university-belfast.svg",
    website: "https://www.qub.ac.uk/"
  },
  {
    id: 2,
    name: "Cardiff University",
    logo: "/images/partners/cardiff-university.svg",
    website: "https://www.cardiff.ac.uk/"
  },
  {
    id: 3,
    name: "Northumbria University London",
    logo: "https://via.placeholder.com/200x80/f0f0f0/666666?text=Imperial",
    website: "https://www.imperial.ac.uk"
  },
  {
    id: 4,
    name: "University of East Anglia",
    logo: "https://via.placeholder.com/200x80/f0f0f0/666666?text=King's",
    website: "https://www.kcl.ac.uk"
  },
  {
    id: 5,
    name: "University of Hull",
    logo: "https://via.placeholder.com/200x80/f0f0f0/666666?text=Edinburgh",
    website: "https://www.ed.ac.uk"
  },
  {
    id: 6,
    name: "De Montfort University",
    logo: "https://via.placeholder.com/200x80/f0f0f0/666666?text=Manchester",
    website: "https://www.manchester.ac.uk"
  },
  {
    id: 7,
    name: "University of Central Lancashire",
    logo: "https://via.placeholder.com/200x80/f0f0f0/666666?text=Warwick",
    website: "https://warwick.ac.uk"
  },
  {
    id: 8,
    name: "Hult Business School",
    logo: "https://via.placeholder.com/200x80/f0f0f0/666666?text=Bristol",
    website: "https://www.bristol.ac.uk"
  }
];

// Colores de Volemi
const colors = {
  purple: '#773FF0',
  black: '#000000',
  lilac: '#EDD7FF',
  red: '#FF786C',
  salmon: '#FF9B70',
  blue: '#5FA9F9',
  yellow: '#FCDD5B',
  green: '#B4E086',
  gray: '#E8E8E8'
};

const PartnersCarousel: React.FC = () => {
  // Duplicar el array para el efecto infinito
  const duplicatedPartners = [...partners, ...partners];

  const sectionStyle: React.CSSProperties = {
    backgroundColor: '#ffffff',
    padding: '4rem 0',
    overflow: 'hidden',
    borderTop: `1px solid ${colors.gray}`,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1.5rem',
    textAlign: 'center'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: '1rem'
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
    color: '#6b7280',
    marginBottom: '3rem',
    maxWidth: '600px',
    margin: '0 auto 3rem auto'
  };

  const carouselContainerStyle: React.CSSProperties = {
    width: '100%',
    overflow: 'hidden',
    position: 'relative'
  };

  const carouselTrackStyle: React.CSSProperties = {
    display: 'flex',
    animation: 'scroll 30s linear infinite',
    width: `${duplicatedPartners.length * 250}px`
  };

  const partnerItemStyle: React.CSSProperties = {
    flex: '0 0 250px',
    height: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    transition: 'all 0.3s ease'
  };

  const logoStyle: React.CSSProperties = {
    maxWidth: '180px',
    maxHeight: '80px',
    width: 'auto',
    height: 'auto',
    objectFit: 'contain',
    filter: 'grayscale(100%) opacity(0.7)',
    transition: 'all 0.3s ease'
  };

  const logoHoverStyle: React.CSSProperties = {
    filter: 'grayscale(0%) opacity(1)',
    transform: 'scale(1.05)'
  };

  const badgeStyle: React.CSSProperties = {
    display: 'inline-block',
    backgroundColor: colors.purple,
    color: 'white',
    padding: '0.5rem 1.5rem',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    fontWeight: '600',
    marginBottom: '2rem'
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={badgeStyle}>
          Nuestros Partners
        </div>
        
        <h2 style={titleStyle}>
          Universidades de prestigio mundial
        </h2>
        
        <p style={subtitleStyle}>
          Trabajamos con las mejores instituciones del Reino Unido para ofrecerte 
          programas académicos de excelencia y oportunidades únicas de crecimiento.
        </p>

        <div style={carouselContainerStyle}>
          <div style={carouselTrackStyle}>
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                style={partnerItemStyle}
                onMouseEnter={(e) => {
                  const img = e.currentTarget.querySelector('img') as HTMLImageElement;
                  if (img) {
                    Object.assign(img.style, logoHoverStyle);
                  }
                }}
                onMouseLeave={(e) => {
                  const img = e.currentTarget.querySelector('img') as HTMLImageElement;
                  if (img) {
                    Object.assign(img.style, logoStyle);
                  }
                }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  title={partner.name}
                  style={logoStyle}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Gradientes en los bordes para efecto fade */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100px',
          height: '100%',
          background: 'linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))',
          pointerEvents: 'none',
          zIndex: 1
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100px',
          height: '100%',
          background: 'linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0))',
          pointerEvents: 'none',
          zIndex: 1
        }}></div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${partners.length * 250}px);
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
        
        @media (max-width: 768px) {
          .partners-carousel {
            padding: 2rem 0;
          }
        }
      `}</style>
    </section>
  );
};

export default PartnersCarousel;