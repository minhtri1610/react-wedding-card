import { WEDDING_INVITATION } from '../../config/wedding';

export default function Section4() {
  return (
    <div id="SECTION4" className="ladi-section">
      <div className="ladi-section-background"></div>
      <div className="ladi-container">
        <div data-action="true" id="GROUP48" className="ladi-element">
          <div className="ladi-group">
            <div id="GROUP15" className="ladi-element">
              <div className="ladi-group">
                <div id="BOX14" className="ladi-element">
                  <div className="ladi-box ladi-transition"></div>
                </div>
                <div id="BOX15" className="ladi-element">
                  <div className="ladi-box ladi-transition"></div>
                </div>
              </div>
            </div>
            <div id="HEADLINE33" className="ladi-element">
              <h3 className="ladi-headline ladi-transition">
                Just
                <br />
              </h3>{" "}
            </div>
            <a
              href={WEDDING_INVITATION.location.mapLink}
              target="_blank"
              id="HEADLINE34"
              className="ladi-element"
            >
              <h3 className="ladi-headline ladi-transition">married</h3>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
