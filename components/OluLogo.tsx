// components/OluLogo.tsx
export const OluLogo = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    {/* Minimalist Water Lily (Olu) abstraction */}
    <path 
      d="M50 10C50 10 35 40 10 50C35 60 50 90 50 90C50 90 65 60 90 50C65 40 50 10 50 10Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
    <circle cx="50" cy="50" r="5" fill="currentColor" />
  </svg>
);