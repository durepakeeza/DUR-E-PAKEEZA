interface MonogramLogoProps {
  variant?: 'dark' | 'light';
  showWordmark?: boolean;
  className?: string;
}

export function MonogramLogo({
  variant = 'dark',
  showWordmark = true,
  className = '',
}: MonogramLogoProps) {
  const primaryColor = variant === 'dark' ? '#FAF8F5' : '#141416';
  const accentColor = variant === 'dark' ? '#C8A96A' : '#9B7B3E';
  const borderColor = variant === 'dark' ? 'rgba(200, 169, 106, 0.4)' : 'rgba(155, 123, 62, 0.45)';

  return (
    <span className={`inline-flex items-center gap-3 whitespace-nowrap shrink-0 ${className}`}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect
          x="2"
          y="2"
          width="60"
          height="60"
          rx="6"
          stroke={borderColor}
          strokeWidth="1.5"
        />
        <path
          d="M17 19H27.5C34.4 19 39 23.8 39 32C39 40.2 34.4 45 27.5 45H17V19ZM20.5 22V42H27.2C32.3 42 35.4 38.4 35.4 32C35.4 25.6 32.3 22 27.2 22H20.5Z"
          fill={primaryColor}
        />
        <path
          d="M32 19H42.2C47.3 19 50.5 22 50.5 26.8C50.5 31.6 47.3 34.6 42.2 34.6H35.5V45H32V19ZM35.5 22V31.6H41.9C45.1 31.6 47 29.8 47 26.8C47 23.8 45.1 22 41.9 22H35.5Z"
          fill={accentColor}
        />
      </svg>
      {showWordmark && (
        <span
          className={`font-display text-[17px] sm:text-[18px] font-semibold tracking-[0.14em] whitespace-nowrap shrink-0 ${
            variant === 'dark' ? 'text-[#FAF8F5]' : 'text-[#141416]'
          }`}
        >
          DUR E PAKEEZA
        </span>
      )}
    </span>
  );
}
