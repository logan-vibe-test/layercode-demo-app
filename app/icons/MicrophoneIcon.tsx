interface MicrophoneIconProps {
  className?: string;
  isListening?: boolean;
  isPaused?: boolean;
  isEnabled?: boolean;
}

export const MicrophoneIcon = ({ className, isListening, isPaused, isEnabled }: MicrophoneIconProps) => (
  <div className="relative">
    {/* Base microphone icon */}
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>

    {/* Status indicator ring */}
    {isEnabled && (
      <div className={`absolute -inset-1 rounded-full border-2 transition-colors duration-300 ${
        isListening
          ? 'border-[#00ff00]'
          : isPaused
            ? 'border-[#ff4d4d]'
            : 'border-[#4a1a6c]'
      }`} />
    )}

    {/* Sound waves when listening */}
    {isListening && (
      <div className="absolute -inset-2">
        <div className="absolute inset-0 rounded-full border-2 border-[#00ff00] opacity-30" />
        <div className="absolute inset-0 rounded-full border-2 border-[#00ff00] opacity-20 scale-110" />
        <div className="absolute inset-0 rounded-full border-2 border-[#00ff00] opacity-10 scale-120" />
      </div>
    )}

    {/* X mark when paused */}
    {isPaused && (
      <svg
        className="absolute -top-1 -right-1 w-4 h-4 text-[#ff4d4d]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    )}
  </div>
);
