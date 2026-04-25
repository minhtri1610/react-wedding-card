import { useMusic } from '../../hooks/useMusic';

export default function Section9() {
  const { isPlaying, toggleMusic } = useMusic();


  return (
    <div id="SECTION9" className="ladi-section">
      <div className="ladi-section-background"></div>
      <div className="ladi-container">
        <div id="BOX22" className="ladi-element">
          <div className="ladi-box ladi-transition"></div>
        </div>
        <div id="HEADLINE101" className="ladi-element">
          <h3 className="ladi-headline ladi-transition">
            In you
            <br />
          </h3>{" "}
        </div>
        <div id="HEADLINE102" className="ladi-element">
          <h3 className="ladi-headline ladi-transition">
            I've found my home
            <br />
            my heart
            <br />
            and my forever
            <br />
          </h3>{" "}
        </div>
        <div
          id="GROUP42"
          className="ladi-element"
          onClick={toggleMusic}
          style={{ cursor: 'pointer' }}
        >
          <div className="ladi-group">
            <div id="BOX32" className="ladi-element">
              <div className="ladi-box ladi-transition"></div>
            </div>
            <div id="HEADLINE116" className="ladi-element">
              <p className="ladi-headline">
                {isPlaying ? 'pause music' : 'click music'}
                <br />
              </p>{" "}
            </div>
            <div id="IMAGE33" className="ladi-element">
              <div className="ladi-image">
                <div className="ladi-image-background"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
