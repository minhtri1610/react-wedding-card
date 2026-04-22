import { WEDDING_INVITATION } from '../../config/wedding';

export default function Section1() {
  return (
    <div id="SECTION1" className="ladi-section">
      <div className="ladi-section-background"></div>
      <div className="ladi-container">
        <div id="BOX1" className="ladi-element">
          <div className="ladi-box ladi-transition"></div>
        </div>
        <div id="BOX3" className="ladi-element">
          <div className="ladi-box ladi-transition"></div>
        </div>
        <div id="HEADLINE5" className="ladi-element">
          <h3 className="ladi-headline">
            {WEDDING_INVITATION.groom.shortName} &amp; {WEDDING_INVITATION.bride.shortName}
            <br />
          </h3>{" "}
        </div>
        <div id="HEADLINE6" className="ladi-element">
          <h3 className="ladi-headline">
            {WEDDING_INVITATION.date.dayMonthYear}
            <br />
          </h3>{" "}
        </div>
        <div id="GROUP41" className="ladi-element">
          <div className="ladi-group">
            <div id="HEADLINE4" className="ladi-element">
              <h3 className="ladi-headline">
                <span style={{ fontSize: "72px" }}>ave our date</span>
                <br />
              </h3>{" "}
            </div>
            <div id="HEADLINE115" className="ladi-element">
              <h3 className="ladi-headline">
                S<br />
              </h3>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
