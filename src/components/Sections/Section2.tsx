import { WEDDING_INVITATION } from '../../config/wedding';

export default function Section2() {
  return (
    <div id="SECTION2" className="ladi-section">
      <div className="ladi-section-background"></div>
      <div className="ladi-container">
        <div id="BOX2" className="ladi-element">
          <div className="ladi-box"></div>
        </div>
        <div id="BOX10" className="ladi-element">
          <div className="ladi-box"></div>
        </div>
        <div id="BOX5" className="ladi-element">
          <div className="ladi-box"></div>
        </div>
        <div id="HEADLINE7" className="ladi-element">
          <h3 className="ladi-headline">
            when two hearts
            <br />
            beat as one
            <br />
          </h3>{" "}
        </div>
        <div id="LINE1" className="ladi-element">
          <div className="ladi-line">
            <div className="ladi-line-container"></div>
          </div>
        </div>
        <div id="HEADLINE8" className="ladi-element">
          <h3 className="ladi-headline">
            &nbsp;They create a soul strong
            <br />
            enough to last forever
            <br />
          </h3>{" "}
        </div>
        <div id="GROUP6" className="ladi-element">
          <div className="ladi-group">
            <div id="BOX8" className="ladi-element">
              <div className="ladi-box ladi-transition"></div>
            </div>
            <div id="BOX9" className="ladi-element">
              <div className="ladi-box ladi-transition"></div>
            </div>
          </div>
        </div>
        <div id="GROUP7" className="ladi-element">
          <div className="ladi-group">
            <div id="HEADLINE11" className="ladi-element">
              <h3 className="ladi-headline ladi-transition">
                Chú rể
                <br />
              </h3>{" "}
            </div>
            <div id="HEADLINE12" className="ladi-element">
              <h3 className="ladi-headline ladi-transition">
                {WEDDING_INVITATION.groom.fullName}
                <br />
              </h3>{" "}
            </div>
          </div>
        </div>
        <div id="GROUP2" className="ladi-element">
          <div className="ladi-group">
            <div id="BOX6" className="ladi-element">
              <div className="ladi-box "></div>
            </div>
            <div id="BOX7" className="ladi-element">
              <div className="ladi-box ladi-transition"></div>
            </div>
          </div>
        </div>
        <div id="GROUP3" className="ladi-element">
          <div className="ladi-group">
            <div id="HEADLINE9" className="ladi-element">
              <h3 className="ladi-headline ladi-transition">
                Cô dâu
                <br />
              </h3>{" "}
            </div>
            <div id="HEADLINE10" className="ladi-element">
              <h3 className="ladi-headline ladi-transition">
                {WEDDING_INVITATION.bride.fullName}
                <br />
              </h3>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
