import { useState, useCallback, useEffect } from 'react';

export function useMusic() {
  const [isPlaying, setIsPlaying] = useState(false);

  const fade = (audio: HTMLAudioElement, targetVolume: number, duration: number = 2000) => {
    const steps = 20;
    const interval = duration / steps;
    const volumeStep = (targetVolume - audio.volume) / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const newVolume = audio.volume + volumeStep;
      
      if (newVolume >= 0 && newVolume <= 1) {
        audio.volume = newVolume;
      }

      if (currentStep >= steps) {
        audio.volume = targetVolume;
        if (targetVolume === 0) {
          audio.pause();
        }
        clearInterval(timer);
      }
    }, interval);
    
    return timer;
  };

  const playMusic = useCallback(() => {
    const audio = document.getElementById('bg-music') as HTMLAudioElement | null;
    if (!audio) return;

    if (audio.paused) {
      audio.volume = 0;
      audio.play().then(() => {
        setIsPlaying(true);
        fade(audio, 1);
      }).catch((err) => {
        console.warn('Autoplay blocked:', err);
      });
    }
  }, []);

  const stopMusic = useCallback(() => {
    const audio = document.getElementById('bg-music') as HTMLAudioElement | null;
    if (!audio || audio.paused) return;

    fade(audio, 0);
    setIsPlaying(false);
  }, []);

  const toggleMusic = useCallback(() => {
    const audio = document.getElementById('bg-music') as HTMLAudioElement | null;
    if (!audio) return;
    
    if (audio.paused) {
      playMusic();
    } else {
      stopMusic();
    }
  }, [playMusic, stopMusic]);

  // Sync state with audio element (in case it's controlled elsewhere)
  useEffect(() => {
    const audio = document.getElementById('bg-music') as HTMLAudioElement | null;
    if (!audio) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);

    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
    };
  }, []);

  return { isPlaying, toggleMusic, playMusic, stopMusic };
}
