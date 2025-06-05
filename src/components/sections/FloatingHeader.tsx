import React, { useState, useEffect } from 'react';

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

const FloatingHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: 'all 0.3s ease',
    padding: isScrolled ? '0.75rem 0' : '1.25rem 0',
    backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
    borderBottom: isScrolled ? '1px solid rgba(0, 0, 0, 0.1)' : 'none',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  };

  const logoContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    cursor: 'pointer',
    transition: 'transform 0.2s ease'
  };

  const logoImageStyle: React.CSSProperties = {
    height: isScrolled ? '2rem' : '2.5rem',
    width: 'auto',
    transition: 'height 0.3s ease'
  };

  const navStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem'
  };

  const navLinksStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    listStyle: 'none',
    margin: 0,
    padding: 0
  };

  const navLinkStyle: React.CSSProperties = {
    color: isScrolled ? colors.black : '#ffffff',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '0.95rem',
    transition: 'all 0.2s ease',
    cursor: 'pointer'
  };

  const ctaButtonStyle: React.CSSProperties = {
    backgroundColor: colors.purple,
    color: 'white',
    padding: '0.75rem 1.5rem',
    borderRadius: '50px',
    border: 'none',
    fontWeight: '600',
    fontSize: '0.9rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    boxShadow: '0 4px 12px rgba(119, 63, 240, 0.3)'
  };

  const mobileMenuButtonStyle: React.CSSProperties = {
    display: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0.5rem',
    color: isScrolled ? colors.black : '#ffffff'
  };

  const mobileMenuStyle: React.CSSProperties = {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: 'white',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    borderRadius: '0 0 1rem 1rem',
    padding: '1.5rem',
    display: isMobileMenuOpen ? 'block' : 'none'
  };

  const mobileNavLinksStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '1.5rem'
  };

  const mobileNavLinkStyle: React.CSSProperties = {
    color: colors.black,
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '1rem',
    padding: '0.5rem 0',
    borderBottom: '1px solid #f0f0f0'
  };

  return (
    <>
      <header style={headerStyle}>
        <div style={containerStyle}>
          {/* Logo */}
          <div 
            style={logoContainerStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <img 
              src="/volemi-logo.svg" 
              alt="Volemi Logo" 
              style={logoImageStyle}
              onError={(e) => {
                // Fallback si no encuentra el SVG
                e.currentTarget.style.display = 'none';
                const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                if (nextElement) {
                  nextElement.style.display = 'flex';
                }
              }}
            />
            {/* Fallback logo */}
            <div style={{ 
              display: 'none', 
              alignItems: 'center', 
              gap: '0.5rem',
              height: logoImageStyle.height 
            }}>
              <div style={{
                width: '2rem',
                height: '2rem',
                backgroundColor: colors.purple,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: '1rem',
                  height: '1rem',
                  backgroundColor: 'white',
                  borderRadius: '50%'
                }}></div>
              </div>
              <span style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: isScrolled ? colors.black : '#ffffff'
              }}>volemi</span>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav style={{ ...navStyle, display: typeof window !== 'undefined' && window.innerWidth > 768 ? 'flex' : 'none' }}>
            {/* CTA Button */}
            <a 
              href="https://calendly.com/volemi" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <button 
                style={ctaButtonStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#6b2dd6';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(119, 63, 240, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = colors.purple;
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(119, 63, 240, 0.3)';
                }}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47z"/>
                </svg>
                Asesoría
              </button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            style={{ ...mobileMenuButtonStyle, display: typeof window !== 'undefined' && window.innerWidth <= 768 ? 'block' : 'none' }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div style={mobileMenuStyle}>
          <a 
            href="https://calendly.com/volemi" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <button style={{
              ...ctaButtonStyle,
              width: '100%',
              justifyContent: 'center'
            }}>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47z"/>
              </svg>
              Asesoría
            </button>
          </a>
        </div>
      </header>

      {/* Spacer para compensar el header fixed */}
      <div style={{ height: isScrolled ? '80px' : '100px', transition: 'height 0.3s ease' }}></div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-button {
            display: block !important;
          }
        }
        
        @media (min-width: 769px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-button {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default FloatingHeader;