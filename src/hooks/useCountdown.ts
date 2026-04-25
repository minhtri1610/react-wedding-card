import { useState, useEffect } from 'react';

export function useCountdown(targetDateStr: string, timeStr: string) {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    // Parse "16.07.2026" and "17 giờ 30"
    const [day, month, year] = targetDateStr.split('.').map(Number);
    const timeMatch = timeStr.match(/(\d+)\s*giờ\s*(\d+)/);
    const hours = timeMatch ? parseInt(timeMatch[1]) : 0;
    const minutes = timeMatch ? parseInt(timeMatch[2]) : 0;
    
    const targetDate = new Date(year, month - 1, day, hours, minutes, 0).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }

      const d = Math.floor(distance / (1000 * 60 * 60 * 24));
      const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: d.toString().padStart(2, '0'),
        hours: h.toString().padStart(2, '0'),
        minutes: m.toString().padStart(2, '0'),
        seconds: s.toString().padStart(2, '0')
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDateStr, timeStr]);

  return timeLeft;
}
