export const HairyWaterLilyLogo = ({ className }: { className?: string }) => (
  <svg 
    viewBox="-50 -50 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    // Removed hardcoded sizes and margins to let the prop take over
    className={className || "w-12 h-12 text-zinc-900 dark:text-white"}
  >
    {/* Top Petal */}
    <path d="M0 -40C0 -40 -15 -10 0 0C15 -10 0 -40 0 -40Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    
    {/* Top Right Petal */}
    <path d="M28 -28C28 -28 10 -10 0 0C25 5 28 -28 28 -28Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    
    {/* Top Left Petal */}
    <path d="M-28 -28C-28 -28 -10 -10 0 0C-25 5 -28 -28 -28 -28Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    
    {/* Right Petal */}
    <path d="M40 0C40 0 10 0 0 0C10 20 40 0 40 0Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    
    {/* Left Petal */}
    <path d="M-40 0C-40 0 -10 0 0 0C-10 20 -40 0 -40 0Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);