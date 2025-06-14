import React, { useState, useEffect } from 'react';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
theme: 'purple' | 'blue' | 'salmon' | 'green';
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Transformamos sueños en realidades",
    subtitle: "Volemi - Tu guía al mundo",
    description: "Somos los chéveres, los amables. Con nuestro conocimiento y entrega, diseñamos de principio a fin esa experiencia mágica que todos quienes estudian en el exterior desean vivir.",
    buttonText: "Descubre más",
    buttonLink: "https://calendly.com/volemi",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop&crop=center",
    theme: 'purple'
  },
  {
    id: 2,
    title: "Alianzas que impulsan tu futuro",
    subtitle: "Conectamos con las mejores instituciones",
    description: "Nuestras alianzas corporativas te abren puertas a oportunidades únicas. Trabajamos con universidades de prestigio mundial para ofrecerte programas excepcionales.",
    buttonText: "Ver alianzas",
    buttonLink: "https://calendly.com/volemi",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop&crop=center",
    theme: 'blue'
  },
  {
    id: 3,
    title: "Aprende desde cualquier lugar",
    subtitle: "Webinars exclusivos",
    description: "Participa en nuestros webinars gratuitos y descubre todo lo que necesitas saber sobre estudiar en el Reino Unido. Experiencias reales, consejos prácticos.",
    buttonText: "Regístrate ahora",
    buttonLink: "https://my.demio.com/ref/XdbzY77H5I2a4PJJ",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&crop=center",
    theme: 'salmon'
  },
    {
    id: 4,
    title: "Study in UK Tour 2025",
    subtitle: "Octubre 2025",
    description: "Conoce universidades del Reino Unido en tu ciudad. Estaremos en Monterrey, CDMX, Bogotá, Medellín, Lima y Arequipa. Una oportunidad única para planear tu futuro académico.",
    buttonText: "Reserva tu lugar",
    buttonLink: "https://calendly.com/volemi",
    image: "/images/volemi/qub-evento-bogota-2024.png",
    theme: 'green'
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

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleNextSlide = (): void => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrevSlide = (): void => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsAnimating(false);
    }, 300);
  };

  const goToSlide = (index: number): void => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsAnimating(false);
    }, 300);
  };

  const getThemeColors = (theme: string) => {
    switch (theme) {
      case 'purple':
        return {
          bg: `linear-gradient(135deg, ${colors.lilac}20, ${colors.purple}10)`,
          accent: colors.purple,
          geometric1: colors.purple,
          geometric2: colors.lilac,
          geometric3: '#a855f7'
        };
      case 'blue':
        return {
          bg: `linear-gradient(135deg, #dbeafe, #bfdbfe)`,
          accent: colors.blue,
          geometric1: colors.blue,
          geometric2: '#bfdbfe',
          geometric3: '#93c5fd'
        };
case 'salmon':
        return {
          bg: `linear-gradient(135deg, #fed7aa, #fdba74)`,
          accent: colors.salmon,
          geometric1: colors.salmon,
          geometric2: '#fed7aa',
          geometric3: '#fdba74'
        };
      case 'green':
        return {
          bg: `linear-gradient(135deg, #dcfce7, #bbf7d0)`,
          accent: colors.green,
          geometric1: colors.green,
          geometric2: '#dcfce7',
          geometric3: '#86efac'
        };
      default:
        return {
          bg: `linear-gradient(135deg, ${colors.lilac}20, ${colors.purple}10)`,
          accent: colors.purple,
          geometric1: colors.purple,
          geometric2: colors.lilac,
          geometric3: '#a855f7'
        };
    }
  };

  const currentTheme = getThemeColors(slides[currentSlide].theme);

  const sectionStyle: React.CSSProperties = {
    position: 'relative',
    height: '100vh',
    background: currentTheme.bg,
    transition: 'all 0.5s ease',
    overflow: 'hidden',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1.5rem',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  };

  const contentStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '50%',
    zIndex: 10,
    opacity: isAnimating ? 0 : 1,
    transform: isAnimating ? 'translateX(2rem)' : 'translateX(0)',
    transition: 'all 0.5s ease'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '1.5rem',
    lineHeight: '1.2'
  };

  const subtitleStyle: React.CSSProperties = {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    backgroundColor: currentTheme.accent,
    color: 'white',
    fontSize: '0.875rem',
    fontWeight: '500',
    borderRadius: '9999px',
    marginBottom: '1.5rem'
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
    color: '#4b5563',
    marginBottom: '2rem',
    lineHeight: '1.6',
    maxWidth: '600px'
  };

  const buttonStyle: React.CSSProperties = {
    padding: '1rem 2rem',
    backgroundColor: currentTheme.accent,
    color: 'white',
    fontWeight: '600',
    borderRadius: '9999px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    transform: 'scale(1)',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
  };

  const imageContainerStyle: React.CSSProperties = {
    width: '50%',
    marginLeft: '3rem',
    zIndex: 10,
    opacity: isAnimating ? 0 : 1,
    transform: isAnimating ? 'translateX(2rem) scale(0.95)' : 'translateX(0) scale(1)',
    transition: 'all 0.5s ease',
    display: window.innerWidth > 1024 ? 'block' : 'none'
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    borderRadius: '1.5rem',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    transition: 'transform 0.3s ease'
  };

  const indicatorsStyle: React.CSSProperties = {
    display: 'flex',
    gap: '0.75rem',
    marginTop: '3rem'
  };

  const logoStyle: React.CSSProperties = {
    position: 'absolute',
    top: '2rem',
    left: '2rem',
    zIndex: 20,
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const controlsStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '2rem',
    right: '2rem',
    display: 'flex',
    gap: '1rem'
  };

  const controlButtonStyle: React.CSSProperties = {
    width: '3rem',
    height: '3rem',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease'
  };

  return (
    <section style={sectionStyle}>
      {/* Elementos geométricos decorativos */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute',
          top: '5rem',
          left: '2.5rem',
          width: '6rem',
          height: '6rem',
          backgroundColor: currentTheme.geometric2,
          borderRadius: '50%',
          opacity: 0.6,
          animation: 'pulse 2s infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '10rem',
          right: '5rem',
          width: '4rem',
          height: '4rem',
          backgroundColor: currentTheme.geometric3,
          borderRadius: '50%',
          opacity: 0.4
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '8rem',
          left: '5rem',
          width: '5rem',
          height: '5rem',
          backgroundColor: currentTheme.geometric1,
          borderRadius: '50%',
          opacity: 0.3
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '5rem',
          right: '10rem',
          width: '3rem',
          height: '3rem',
          backgroundColor: currentTheme.geometric2,
          borderRadius: '50%',
          opacity: 0.5
        }}></div>
      </div>

      <div style={containerStyle}>
        {/* Contenido del lado izquierdo */}
        <div style={contentStyle}>
          <div style={subtitleStyle}>
            {slides[currentSlide].subtitle}
          </div>
          
          <h1 style={titleStyle}>
            {slides[currentSlide].title}
          </h1>
          
          <p style={descriptionStyle}>
            {slides[currentSlide].description}
          </p>
          
<a 
  href={slides[currentSlide].buttonLink}
  target={slides[currentSlide].buttonLink.startsWith('http') ? '_blank' : '_self'}
  style={{ textDecoration: 'none' }}
>
  <button 
    style={buttonStyle}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'scale(1.05)';
      e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.2)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }}
  >
    {slides[currentSlide].buttonText}
  </button>
</a>

          {/* Indicadores de slide */}
          <div style={indicatorsStyle}>
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  width: '3rem',
                  height: '0.5rem',
                  borderRadius: '9999px',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: index === currentSlide ? currentTheme.accent : '#d1d5db',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>

        {/* Imagen del lado derecho */}
        <div style={imageContainerStyle}>
          <div style={{ position: 'relative' }}>
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              style={imageStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: currentTheme.accent,
              opacity: 0.1,
              borderRadius: '1.5rem',
              transition: 'opacity 0.3s ease'
            }}></div>
          </div>

          {/* Elementos decorativos alrededor de la imagen */}
          <div style={{
            position: 'absolute',
            top: '-1.5rem',
            right: '-1.5rem',
            width: '4rem',
            height: '4rem',
            backgroundColor: currentTheme.geometric1,
            borderRadius: '50%',
            opacity: 0.8
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '-1rem',
            left: '-1rem',
            width: '3rem',
            height: '3rem',
            backgroundColor: currentTheme.geometric2,
            borderRadius: '50%',
            opacity: 0.6
          }}></div>
        </div>
      </div>

      {/* Controles de navegación */}
      <div style={controlsStyle}>
        <button
          onClick={handlePrevSlide}
          disabled={isAnimating}
          style={{
            ...controlButtonStyle,
            opacity: isAnimating ? 0.5 : 1
          }}
          onMouseEnter={(e) => {
            if (!isAnimating) e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={handleNextSlide}
          disabled={isAnimating}
          style={{
            ...controlButtonStyle,
            opacity: isAnimating ? 0.5 : 1
          }}
          onMouseEnter={(e) => {
            if (!isAnimating) e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </section>
  );
}

export default HeroCarousel;