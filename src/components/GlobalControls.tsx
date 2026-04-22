import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function GlobalControls() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Đồng bộ trạng thái ban đầu và lắng nghe sự kiện từ audio
  useEffect(() => {
    const audioEl = document.getElementById('bg-music') as HTMLAudioElement;
    if (audioEl) {
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      audioEl.addEventListener('play', handlePlay);
      audioEl.addEventListener('pause', handlePause);
      
      // Khởi tạo state theo state của thẻ audio
      setIsPlaying(!audioEl.paused);

      return () => {
        audioEl.removeEventListener('play', handlePlay);
        audioEl.removeEventListener('pause', handlePause);
      };
    }
  }, []);

  const toggleMusic = () => {
    const audioEl = document.getElementById('bg-music') as HTMLAudioElement;
    if (audioEl) {
      if (audioEl.paused) {
        audioEl.play().catch(e => console.error(e));
      } else {
        audioEl.pause();
      }
    }
  };

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50">
      <Link 
        to="/" 
        className="w-12 h-12 bg-white/80 backdrop-blur-md rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.1)] flex items-center justify-center text-rose-500 hover:bg-rose-50 hover:scale-115 hover:text-rose-600 transition-all border border-rose-100"
        title="Trang chủ"
      >
        {/* Nút Home (House Icon) */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      </Link>
      
      <button 
        onClick={toggleMusic}
        className="relative w-12 h-12 bg-white/80 backdrop-blur-md rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.1)] flex items-center justify-center text-rose-500 hover:bg-rose-50 hover:scale-115 hover:text-rose-600 transition-all border border-rose-100"
        title="Bật/Tắt Nhạc"
      >
        {isPlaying && (
          // Vòng tròn lan tỏa mờ phía sau
          <span 
            className="absolute inset-0 rounded-full animate-ping bg-rose-300 opacity-30"
            style={{ animationDuration: '2.5s' }}
          ></span>
        )}
        
        {isPlaying ? (
          // Icon Nốt nhạc đang phát (Music Note)
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="w-6 h-6 relative z-10 animate-pulse">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v13.063a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66A2.25 2.25 0 009 14.553z" />
          </svg>
        ) : (
          // Icon Nốt nhạc bị tắt (Music Note with Slash)
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="w-6 h-6 relative z-10 opacity-60">
             <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v13.063a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 14.553z" />
             <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
          </svg>
        )}
      </button>
    </div>
  );
}
