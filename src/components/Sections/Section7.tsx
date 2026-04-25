import { useState } from 'react';

export default function Section7() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = 7;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
  };

  return (
    <div id="SECTION7" className="ladi-section">
      <div className="ladi-section-background"></div>
      <div className="ladi-container">
        <div id="IMAGE19" className="ladi-element">
          <div className="ladi-image ladi-transition">
            <div className="ladi-image-background"></div>
          </div>
        </div>
        <div id="BOX20" className="ladi-element">
          <div className="ladi-box"></div>
        </div>
        <div id="HEADLINE92" className="ladi-element">
          <h3 className="ladi-headline ladi-transition">
            Our Memories
            <br />
          </h3>{" "}
        </div>
        <div id="GALLERY1" className="ladi-element">
          <div className="ladi-gallery ladi-gallery-bottom">
            <div className="ladi-gallery-view">
              <div 
                className="ladi-gallery-view-arrow ladi-gallery-view-arrow-left" 
                onClick={handlePrev}
                style={{ cursor: 'pointer', zIndex: 2 }}
              ></div>
              <div 
                className="ladi-gallery-view-arrow ladi-gallery-view-arrow-right" 
                onClick={handleNext}
                style={{ cursor: 'pointer', zIndex: 2 }}
              ></div>
              {[...Array(totalItems)].map((_, i) => (
                <div
                  key={`view-${i}`}
                  className={`ladi-gallery-view-item ${activeIndex === i ? 'selected' : ''}`}
                  data-index={i}
                ></div>
              ))}
            </div>
            <div className="ladi-gallery-control">
              <div className="ladi-gallery-control-box">
                {[...Array(totalItems)].map((_, i) => (
                  <div
                    key={`control-${i}`}
                    className={`ladi-gallery-control-item ${activeIndex === i ? 'selected' : ''}`}
                    data-index={i}
                    onClick={() => setActiveIndex(i)}
                    style={{ cursor: 'pointer' }}
                  ></div>
                ))}
              </div>
              <div 
                className="ladi-gallery-control-arrow ladi-gallery-control-arrow-left"
                onClick={handlePrev}
                style={{ cursor: 'pointer' }}
              ></div>
              <div 
                className="ladi-gallery-control-arrow ladi-gallery-control-arrow-right"
                onClick={handleNext}
                style={{ cursor: 'pointer' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

