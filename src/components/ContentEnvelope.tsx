import { useEffect, useState } from 'react';

export default function ContentEnvelope() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen w-full bg-rose-50 flex items-center justify-center p-4">
            <div 
                className={`bg-white w-full max-w-2xl min-h-[80vh] shadow-xl rounded-2xl p-8 border border-rose-100 transition-all duration-1000 transform ${
                    isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
                }`}
            >
                {/* Header */}
                
            </div>
        </div>
    );
}
