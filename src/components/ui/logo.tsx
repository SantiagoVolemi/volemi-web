import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-2xl font-bold text-volemi-black">
        v
        <span className="relative inline-block mx-1">
          <span className="inline-block w-7 h-7 bg-volemi-purple rounded-full relative">
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-volemi-purple rounded-full opacity-80"></span>
          </span>
        </span>
        lemi
      </span>
    </div>
  );
};

export default Logo;