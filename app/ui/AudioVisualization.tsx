export function AudioVisualization({ amplitude, height = 46 }: { amplitude: number; height?: number }) {
  // Calculate the height of each bar based on amplitude
  const maxHeight = height;
  const minHeight = Math.floor(height / 6);
  const barWidth = Math.floor(minHeight);

  // Boost amplitude by 10 and ensure it's between 0 and 1
  const normalizedAmplitude = Math.min(Math.max(amplitude * 10, 0), 1);

  // Calculate face dimensions based on amplitude
  const faceSize = 120;
  const eyeSize = 12;
  const mouthWidth = 40 + normalizedAmplitude * 20;
  const mouthHeight = 5 + normalizedAmplitude * 25;
  const mouthRadius = 20 + normalizedAmplitude * 10;

  return (
    <div className="w-full flex items-center justify-center" style={{ height: `${height}px` }}>
      <div className="relative" style={{ width: `${faceSize}px`, height: `${faceSize}px` }}>
        {/* Holographic scan lines */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,_rgba(74,26,108,0.1)_50%,_transparent_100%)] bg-[length:100%_8px] animate-[scan_2s_linear_infinite]" />
        
        {/* Outer glow ring */}
        <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#4a1a6c] via-[#1a4a6c] to-[#4a1a6c] opacity-30 blur-md animate-[pulse_2s_ease-in-out_infinite]" />
        
        {/* Face outline with holographic effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#2a1a4c] to-[#1a1a3a] border-2 border-[#4a1a6c] shadow-[0_0_15px_rgba(74,26,108,0.3)] overflow-hidden">
          {/* Digital noise effect */}
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
          
          {/* Holographic grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,_transparent_0%,_rgba(74,26,108,0.1)_50%,_transparent_100%)] bg-[length:20px_100%]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,_transparent_0%,_rgba(74,26,108,0.1)_50%,_transparent_100%)] bg-[length:100%_20px]" />
        </div>
        
        {/* Face highlight with digital effect */}
        <div className="absolute top-0 left-0 w-full h-1/2 rounded-t-full bg-gradient-to-b from-[#4a1a6c22] to-transparent">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_0%,_rgba(74,26,108,0.2)_50%,_transparent_100%)] animate-[shine_2s_ease-in-out_infinite]" />
        </div>
        
        {/* Eyes container */}
        <div className="absolute top-[35%] left-0 w-full flex justify-between px-[25%]">
          {/* Left eye */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#4a1a6c] to-[#1a4a6c] shadow-[0_0_10px_rgba(74,26,108,0.5)] border border-[#a1a1ff]" 
                 style={{ width: `${eyeSize}px`, height: `${eyeSize}px` }} />
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#a1a1ff] to-[#4a1a6c] opacity-70 animate-[pulse_1s_ease-in-out_infinite]" 
                 style={{ width: `${eyeSize * 0.6}px`, height: `${eyeSize * 0.6}px`, top: '20%', left: '20%' }} />
          </div>
          
          {/* Right eye */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#4a1a6c] to-[#1a4a6c] shadow-[0_0_10px_rgba(74,26,108,0.5)] border border-[#a1a1ff]" 
                 style={{ width: `${eyeSize}px`, height: `${eyeSize}px` }} />
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#a1a1ff] to-[#4a1a6c] opacity-70 animate-[pulse_1s_ease-in-out_infinite]" 
                 style={{ width: `${eyeSize * 0.6}px`, height: `${eyeSize * 0.6}px`, top: '20%', left: '20%' }} />
          </div>
        </div>
        
        {/* Mouth with holographic effect */}
        <div 
          className="absolute top-[65%] left-1/2 bg-gradient-to-b from-[#4a1a6c] to-[#1a4a6c] shadow-[0_0_10px_rgba(74,26,108,0.5)] border border-[#a1a1ff] transition-all duration-100"
          style={{
            width: `${mouthWidth}px`,
            height: `${mouthHeight}px`,
            borderRadius: `0 0 ${mouthRadius}px ${mouthRadius}px`,
            opacity: normalizedAmplitude > 0.1 ? 1 : 0.5,
            transform: `translateX(-50%) scaleY(${normalizedAmplitude > 0.1 ? 1 : 0.3})`,
          }}
        >
          {/* Mouth scan lines */}
          <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,_rgba(161,161,255,0.1)_50%,_transparent_100%)] bg-[length:100%_4px] animate-[scan_1s_linear_infinite]" />
        </div>

        {/* Cheeks with holographic effect */}
        <div className="absolute top-[45%] left-[15%] w-[20px] h-[10px] rounded-full bg-gradient-to-br from-[#4a1a6c22] to-transparent border border-[#a1a1ff22]" />
        <div className="absolute top-[45%] right-[15%] w-[20px] h-[10px] rounded-full bg-gradient-to-bl from-[#4a1a6c22] to-transparent border border-[#a1a1ff22]" />

        {/* Nose with holographic effect */}
        <div className="absolute top-[45%] left-1/2 w-[4px] h-[15px] bg-gradient-to-b from-[#4a1a6c22] to-transparent -translate-x-1/2 border border-[#a1a1ff22]" />

        {/* Eyebrows with holographic effect */}
        <div className="absolute top-[25%] left-[25%] w-[20px] h-[4px] rounded-full bg-gradient-to-b from-[#4a1a6c] to-[#1a4a6c] transform -rotate-12 border border-[#a1a1ff22]" />
        <div className="absolute top-[25%] right-[25%] w-[20px] h-[4px] rounded-full bg-gradient-to-b from-[#4a1a6c] to-[#1a4a6c] transform rotate-12 border border-[#a1a1ff22]" />

        {/* Data particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#a1a1ff] rounded-full animate-[float_3s_ease-in-out_infinite]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.5,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
