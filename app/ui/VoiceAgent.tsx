import { useLayercodePipeline } from '@layercode/react-sdk';
import { AudioVisualization } from './AudioVisualization';
import { MicrophoneIcon } from '../icons/MicrophoneIcon';
import { useState } from 'react';

export default function VoiceAgent() {
  const [isPaused, setIsPaused] = useState(false);
  
  const { 
    agentAudioAmplitude, 
    status, 
    triggerUserTurnStarted, 
    triggerUserTurnFinished
  } = useLayercodePipeline({
    pipelineId: process.env.NEXT_PUBLIC_LAYERCODE_PIPELINE_ID!,
    authorizeSessionEndpoint: '/api/authorize',
    onDataMessage: (data) => {
      console.log('Received data msg', data);
    },
  });

  const handleMicrophoneClick = () => {
    if (isPaused) {
      triggerUserTurnStarted();
      setIsPaused(false);
    } else {
      triggerUserTurnFinished();
      setIsPaused(true);
    }
  };

  const isEnabled = status === 'connected' || status === 'listening';
  const isListening = status === 'listening' && !isPaused;

  return (
    <div className="relative w-[500px] h-[600px] bg-[#1a1a3a]/50 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center p-8">
      {/* Holographic border with glow */}
      <div className="absolute inset-0 rounded-2xl border border-[#4a1a6c] shadow-[0_0_15px_rgba(74,26,108,0.3)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4a1a6c22] via-transparent to-[#1a4a6c22] animate-[borderGlow_2s_ease-in-out_infinite]" />
      </div>
      <div className="absolute inset-0 rounded-2xl border border-[#1a4a6c] shadow-[0_0_15px_rgba(26,74,108,0.3)]" />

      <h1 className="text-[#a1a1ff] text-2xl font-mono tracking-wider mb-12 relative">
        <span className="absolute -left-6 top-0 text-[#4a1a6c]">&gt;</span>
        VOICE INTERFACE
        <span className="absolute -right-6 top-0 text-[#1a4a6c]">&lt;</span>
      </h1>

      <div className="w-full max-w-[300px] mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4a1a6c22] via-transparent to-[#1a4a6c22] rounded-lg" />
        <AudioVisualization amplitude={agentAudioAmplitude} height={100} />
      </div>

      <div className="flex flex-col gap-6 items-center justify-center relative z-10">
        <div className="group relative">
          {/* Status ring */}
          <div className={`absolute -inset-1 rounded-full ${
            isEnabled 
              ? isListening
                ? 'bg-gradient-to-r from-[#00ff00] to-[#00cc00]'
                : isPaused
                  ? 'bg-gradient-to-r from-[#ff4d4d] to-[#ff6b6b]'
                  : 'bg-gradient-to-r from-[#4a1a6c] to-[#1a4a6c]'
              : 'bg-gradient-to-r from-[#4a1a6c33] to-[#1a4a6c33]'
          }`} />
          
          {/* Glow effect */}
          <div className={`absolute inset-0 rounded-full transition-opacity ${
            isListening
              ? 'bg-[#00ff00] opacity-30 group-hover:opacity-50'
              : isPaused
                ? 'bg-[#ff4d4d] opacity-30 group-hover:opacity-50'
                : isEnabled
                  ? 'bg-gradient-to-r from-[#4a1a6c] to-[#1a4a6c] opacity-30 group-hover:opacity-50'
                  : 'bg-gradient-to-r from-[#4a1a6c] to-[#1a4a6c] opacity-10'
          }`} />
          
          <button 
            onClick={handleMicrophoneClick}
            disabled={!isEnabled}
            className={`h-16 w-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
              isEnabled
                ? isListening
                  ? 'bg-[#1a1a3a] border-2 border-[#00ff00] hover:border-[#00cc00] hover:bg-[#2a2a4a] cursor-pointer'
                  : isPaused
                    ? 'bg-[#1a1a3a] border-2 border-[#ff4d4d] hover:border-[#ff6b6b] hover:bg-[#2a2a4a] cursor-pointer'
                    : 'bg-[#1a1a3a] border-2 border-[#4a1a6c] hover:border-[#1a4a6c] hover:bg-[#2a2a4a] cursor-pointer'
                : 'bg-[#1a1a3a] border-2 border-[#4a1a6c33] cursor-not-allowed'
            }`}
          >
            <MicrophoneIcon 
              className={`w-8 h-8 transition-colors duration-300 ${
                isListening
                  ? 'text-[#00ff00]'
                  : isEnabled
                    ? isPaused
                      ? 'text-[#ff4d4d]'
                      : 'text-[#a1a1ff]'
                    : 'text-[#4a1a6c33]'
              }`}
              isListening={isListening}
              isPaused={isPaused}
              isEnabled={isEnabled}
            />
          </button>
        </div>
        <div className="text-[#a1a1ff] text-sm font-mono">
          {isListening ? 'LISTENING...' : isPaused ? 'MICROPHONE OFF' : isEnabled ? 'READY' : 'CONNECTING...'}
        </div>
      </div>

      {/* Status text */}
      <div className="absolute bottom-4 left-4 text-[#a1a1ff] text-xs font-mono opacity-70">
        SYSTEM STATUS: {isPaused ? 'PAUSED' : status.toUpperCase()}
      </div>
    </div>
  );
}
