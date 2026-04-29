import { useEffect } from 'react';

export default function useAutoScroll() {
    useEffect(() => {
        let scrollInterval: NodeJS.Timeout;
        
        const autoScroll = () => {
            // Adjust speed here: scroll 2px every 20ms
            scrollInterval = setInterval(() => {
                const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
                if (window.scrollY < maxScroll) {
                    window.scrollBy(0, 1);
                } else {
                    clearInterval(scrollInterval);
                }
            }, 15);
        };

        // Pause auto scroll if user touches or scrolls manually
        const handleUserInteraction = () => {
            if (scrollInterval) {
                clearInterval(scrollInterval);
            }
        };

        // Start auto scroll after initial load and a short delay
        const timer = setTimeout(() => {
            if (document.readyState === 'complete') {
                autoScroll();
            } else {
                window.addEventListener('load', autoScroll);
            }
        }, 3000);

        window.addEventListener('wheel', handleUserInteraction, { passive: true });
        window.addEventListener('touchstart', handleUserInteraction, { passive: true });
        window.addEventListener('mousedown', handleUserInteraction, { passive: true });
        window.addEventListener('keydown', handleUserInteraction, { passive: true });

        return () => {
            clearTimeout(timer);
            if (scrollInterval) clearInterval(scrollInterval);
            window.removeEventListener('load', autoScroll);
            window.removeEventListener('wheel', handleUserInteraction);
            window.removeEventListener('touchstart', handleUserInteraction);
            window.removeEventListener('mousedown', handleUserInteraction);
            window.removeEventListener('keydown', handleUserInteraction);
        };
    }, []);
}
