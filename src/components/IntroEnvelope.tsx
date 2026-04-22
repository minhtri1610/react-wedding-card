import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import flowerImg from '../assets/img/flower.webp';
import chuHyImg from '../assets/img/chu-hy.webp';
import { WEDDING_INFO } from '../config/wedding';

const LEAVES = [
    { left: '78.0096%', color: '#C8DFA0', size: '10.4752px', sway: '12.4027px', duration: '14.6911s', delay: '-2.5s' },
    { left: '88.4256%', color: '#6B8040', size: '22.5372px', sway: '1.7904px', duration: '20.2226s', delay: '-2.2s' },
    { left: '79.5594%', color: '#6B8040', size: '18.4905px', sway: '-11.4403px', duration: '20.4765s', delay: '-1.9s' },
    { left: '39.8956%', color: '#6B8040', size: '13.7692px', sway: '8.0866px', duration: '21.0643s', delay: '-1.6s' },
    { left: '92.4809%', color: '#A5C862', size: '18.3186px', sway: '-22.9713px', duration: '21.3139s', delay: '-1.3s' },
    { left: '27.6215%', color: '#C8DFA0', size: '22.0384px', sway: '12.4318px', duration: '13.759s', delay: '-1s' },
    { left: '14.1165%', color: '#8BC34A', size: '16.4903px', sway: '13.355px', duration: '14.2259s', delay: '-0.7s' },
    { left: '9.63759%', color: '#C8DFA0', size: '16.0082px', sway: '13.1254px', duration: '20.2005s', delay: '-0.4s' },
    { left: '92.4839%', color: '#C8DFA0', size: '19.9977px', sway: '-5.9676px', duration: '19.9535s', delay: '-0.1s' },
    { left: '11.966%', color: '#8BC34A', size: '23.6639px', sway: '17.0898px', duration: '19.5202s', delay: '0.2s' },
    { left: '32.3784%', color: '#C8DFA0', size: '16.247px', sway: '-24.6283px', duration: '19.4466s', delay: '0.5s' },
    { left: '86.8928%', color: '#6B8040', size: '10.0578px', sway: '14.3844px', duration: '20.1649s', delay: '0.8s' }
];

export default function IntroEnvelope() {
    const [isOpening, setIsOpening] = useState(false);
    const navigate = useNavigate();

    const handleOpen = () => {
        setIsOpening(true);
        
        // Bật nhạc khi click mở thiệp
        const audioEl = document.getElementById('bg-music') as HTMLAudioElement;
        if (audioEl) {
            audioEl.play().catch(e => console.error("Không thể tự động phát nhạc:", e));
        }

        // Chờ animation hoàn thành rồi chuyển trang
        setTimeout(() => {
            navigate('/content');
        }, 800);
    };

    return (
        <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#FFF8F5] via-[#FDF5E6] to-[#F2E8DF] overflow-hidden relative [perspective:1000px]">
            
            {/* Hiệu ứng lá rơi */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
                {LEAVES.map((leaf, index) => (
                    <div 
                        key={index}
                        className="absolute text-current"
                        style={{
                            left: leaf.left,
                            top: '-30px',
                            color: leaf.color,
                            fontSize: leaf.size,
                            '--sway': leaf.sway,
                            animation: `ambient-fall ${leaf.duration} ease-in-out ${leaf.delay} infinite`
                        } as React.CSSProperties}
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"></path></svg>
                    </div>
                ))}
            </div>

            {/* Bao thư */}
            <div 
                className={`relative z-10 transition-all duration-[800ms] transform ease-in-out ${
                    isOpening ? 'translate-y-[-120%] opacity-0 rotate-x-12 scale-110' : 'translate-y-0 opacity-100 rotate-x-0 scale-100'
                }`}
            >
                <div className="relative w-[310px] sm:w-[340px] md:w-[520px] lg:w-[600px]">
                    
                    {/* Con dấu */}
                    <div className="absolute inset-x-0 mx-auto top-[18px] w-16 h-16 rounded-full flex items-center justify-center bg-[radial-gradient(circle_at_30%_30%,#FFFFFF,#F0EBE1)] shadow-[0_4px_20px_rgba(48,83,15,0.4),inset_0_2px_4px_rgba(255,255,255,0.8)] border border-[rgba(107,128,64,0.2)] z-30 animate-[seal-pulse_2s_ease-in-out_infinite]">
                        <img 
                            src={chuHyImg} 
                            alt="Chữ hỷ" 
                            className="w-10 h-10 object-contain drop-shadow-sm"
                        />
                    </div>

                    {/* Nội dung thư (Card) */}
                    <div className="relative rounded-lg shadow-[0_25px_60px_-12px_rgba(0,0,0,0.45),0_8px_24px_rgba(0,0,0,0.2),0_0_40px_rgba(107,128,64,0.15)]">
                        <div className="relative rounded-lg overflow-hidden bg-[rgba(255,250,247,0.95)] border border-[rgba(107,128,64,0.15)] [clip-path:inset(0_round_8px)]">
                            
                            {/* Hoa văn */}
                            <img src={flowerImg} alt="" aria-hidden="true" className="absolute pointer-events-none w-[400px] md:w-[400px] -top-[40px] left-[calc(-30%-50px)] md:-top-[50px] md:left-[-30%] opacity-40" />
                            <img src={flowerImg} alt="" aria-hidden="true" className="absolute pointer-events-none w-[160px] md:w-[220px] -bottom-[40px] -right-[40px] md:-bottom-[60px] md:-right-[50px] opacity-30 rotate-[160deg]" />
                            
                            <div className="relative z-10 text-center px-6 pt-28 pb-14 md:pt-24 md:pb-8">
                                <h1 className="mb-2 flex flex-col items-center leading-tight text-3xl sm:text-4xl text-[#30530F] font-['Fz_Aghita','Baskerville','Times_New_Roman',serif]">
                                     <span className="block w-full text-center">{WEDDING_INFO.brideName}</span>
                                    <span className="block w-full text-center text-lg leading-none sm:text-xl font-['Lora','Times_New_Roman',serif]">&amp;</span>
                                    <span className="block w-full text-center">{WEDDING_INFO.groomName}</span>
                                   
                                </h1>
                                
                                <div className="flex items-center justify-center gap-3 mb-2">
                                    <div className="w-10 h-px bg-gradient-to-r from-transparent to-[#6B8040]"></div>
                                    <span className="text-[#6B8040] opacity-70 text-sm">❦</span>
                                    <div className="w-10 h-px bg-gradient-to-l from-transparent to-[#6B8040]"></div>
                                </div>
                                
                                <div className="text-[18px] mb-5 flex flex-col items-center text-[#30530F] opacity-70 font-['Lora','Times_New_Roman',serif]">
                                    <span>{WEDDING_INFO.weddingDate}</span>
                                    <span className="text-[14px] mt-0.5 opacity-80">{WEDDING_INFO.lunarDate}</span>
                                </div>
                                
                                <div className="mb-6">
                                    <p className="text-[18px] font-light mb-2 text-[#30530F] opacity-70 font-['Lora','Times_New_Roman',serif]">Thân Mời</p>
                                </div>
                                
                                <button 
                                    onClick={handleOpen}
                                    className="relative px-8 py-2.5 text-lg font-semibold sm:font-medium rounded-full overflow-hidden flex items-center justify-center mx-auto shadow-[0_4px_14px_rgba(48,83,15,0.35)] bg-[#30530F] text-[#FFFAF7] font-['Lora','Times_New_Roman',serif] disabled:cursor-not-allowed group hover:bg-[#203a0a] transition-colors"
                                >
                                    <span>Mở thiệp</span>
                                    <div className="absolute top-0 w-8 h-full bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.4)] to-transparent animate-[shine_3s_ease-in-out_infinite] pointer-events-none"></div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}