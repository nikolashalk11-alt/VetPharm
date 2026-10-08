import { useState } from 'react';

interface LogoProps {
  className?: string;
  isFooter?: boolean;
}

export default function Logo({ className = '', isFooter = false }: LogoProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* 
        The image looks for /logo.png in the public folder.
        If the file fails to load, it falls back to the typographic brand mark.
      */}
      {!imageError ? (
        <div className={`flex items-center ${isFooter ? 'bg-white/95 px-3 py-1.5 rounded-md shadow-xs' : ''}`}>
          <img
            src="/logo.png"
            alt="VetPharm Κτηνιατρείο & Φαρμακείο"
            className="h-10 sm:h-11 w-auto max-h-12 max-w-[220px] object-contain transition-all"
            onError={() => setImageError(true)}
            onLoad={(e) => {
              if (e.currentTarget.naturalWidth === 0) {
                setImageError(true);
              }
            }}
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        <div className="flex items-center gap-2.5">
          <div
            className={`w-9 h-9 rounded-md flex items-center justify-center font-heading font-bold shadow-xs ${
              isFooter ? 'bg-white text-[#1B7A77]' : 'bg-[#1B7A77] text-white'
            }`}
          >
            {/* Medical Cross & Care Icon */}
            <svg
              className="w-5 h-5 text-current"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 4v16" />
              <path d="M4 12h16" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span
              className={`font-heading font-bold text-2xl leading-none ${
                isFooter ? 'text-[#FAFAF8]' : 'text-[#1B7A77]'
              }`}
            >
              vet<span className={isFooter ? 'text-[#8CE0DC]' : 'text-[#1B7A77]'}>pharm</span>
            </span>
            <span
              className={`font-heading text-[10px] tracking-wider font-semibold uppercase leading-none mt-1 ${
                isFooter ? 'text-[#FAFAF8]/70' : 'text-[#1B7A77]/70'
              }`}
            >
              Κτηνιατρειο & Φαρμακειο
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
