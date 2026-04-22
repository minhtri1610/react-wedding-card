import { WEDDING_INVITATION } from '../../config/wedding';

export default function Section3() {
  return (
    <div id="SECTION3" className="ladi-section">
      <div className="ladi-section-background"></div>
      <div className="ladi-container">
        <div id="IMAGE22" className="ladi-element">
          <div className="ladi-image ladi-transition">
            <div className="ladi-image-background"></div>
          </div>
        </div>
        <div data-action="true" id="GROUP14" className="ladi-element">
          <div className="ladi-group">
            <div id="BOX11" className="ladi-element">
              <div className="ladi-box ladi-transition"></div>
            </div>
            <div id="HEADLINE32" className="ladi-element">
              <h3 className="ladi-headline ladi-transition">
                xác nhận tham dự
                <br />
              </h3>{" "}
            </div>
          </div>
        </div>
        <div id="BOX12" className="ladi-element">
          <div className="ladi-box ladi-transition"></div>
        </div>
        <div id="BOX13" className="ladi-element">
          <div className="ladi-box ladi-transition"></div>
        </div>
        <div id="IMAGE23" className="ladi-element">
          <div className="ladi-image ladi-transition">
            <div className="ladi-image-background"></div>
          </div>
        </div>
        <div id="HEADLINE22" className="ladi-element">
          <h3 className="ladi-headline">
            and
            <br />
          </h3>{" "}
        </div>
        <div id="GROUP9" className="ladi-element">
          <div className="ladi-group">
            <div id="HEADLINE13" className="ladi-element">
              <p className="ladi-headline">
                nhà gái
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE14" className="ladi-element">
              <p className="ladi-headline">
                {WEDDING_INVITATION.bride.fatherName}
                <br />
                {WEDDING_INVITATION.bride.motherName}
                <br />
                {WEDDING_INVITATION.location.city}
                <br />
              </p>{" "}
            </div>
          </div>
        </div>
        <div id="GROUP10" className="ladi-element">
          <div className="ladi-group">
            <div id="HEADLINE15" className="ladi-element">
              <p className="ladi-headline">
                nhà trai
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE16" className="ladi-element">
              <p className="ladi-headline">
                {WEDDING_INVITATION.groom.fatherName}
                <br />
                {WEDDING_INVITATION.groom.motherName}
                <br />
                {WEDDING_INVITATION.location.city}
                <br />
              </p>{" "}
            </div>
          </div>
        </div>
        <div id="GROUP12" className="ladi-element">
          <div className="ladi-group">
            <div id="IMAGE2" className="ladi-element">
              <div className="ladi-image">
                <div className="ladi-image-background"></div>
              </div>
            </div>
            <div id="GROUP11" className="ladi-element">
              <div className="ladi-group">
                <div id="HEADLINE17" className="ladi-element">
                  <h3 className="ladi-headline ladi-transition">
                    A<br />
                  </h3>{" "}
                </div>
                <div id="HEADLINE18" className="ladi-element">
                  <h3 className="ladi-headline ladi-transition">
                    B<br />
                  </h3>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="HEADLINE19" className="ladi-element">
          <h3 className="ladi-headline">
            Kính mời tham dự
            <br />
            tiệc thân mật của chúng tôi
            <br />
          </h3>{" "}
        </div>
        <div id="LINE2" className="ladi-element">
          <div className="ladi-line">
            <div className="ladi-line-container"></div>
          </div>
        </div>
        <div id="HEADLINE20" className="ladi-element">
          <h3 className="ladi-headline ladi-transition">
            {WEDDING_INVITATION.groom.fullName}
            <br />
          </h3>{" "}
        </div>
        <div id="HEADLINE21" className="ladi-element">
          <h3 className="ladi-headline">
            {WEDDING_INVITATION.bride.fullName}
            <br />
          </h3>{" "}
        </div>
        <div id="GROUP13" className="ladi-element">
          <div className="ladi-group">
            <div id="HEADLINE23" className="ladi-element">
              <h3 className="ladi-headline">
                {WEDDING_INVITATION.date.dayStr}
                <br />
                {WEDDING_INVITATION.date.monthStr}
                <br />
                {WEDDING_INVITATION.date.yearStr}
                <br />
              </h3>{" "}
            </div>
            <div id="LINE3" className="ladi-element">
              <div className="ladi-line">
                <div className="ladi-line-container"></div>
              </div>
            </div>
            <div id="LINE4" className="ladi-element">
              <div className="ladi-line">
                <div className="ladi-line-container"></div>
              </div>
            </div>
            <div id="HEADLINE24" className="ladi-element">
              <h3 className="ladi-headline">
                {WEDDING_INVITATION.date.time}
                <br />
              </h3>{" "}
            </div>
            <div id="HEADLINE25" className="ladi-element">
              <h3 className="ladi-headline">{WEDDING_INVITATION.date.dayOfWeek}</h3>{" "}
            </div>
          </div>
        </div>
        <div id="HEADLINE26" className="ladi-element">
          <h3 className="ladi-headline">{WEDDING_INVITATION.date.lunarDate}</h3>{" "}
        </div>
        <div id="HEADLINE27" className="ladi-element">
          <h3 className="ladi-headline">Địa điểm</h3>{" "}
        </div>
        <div id="HEADLINE28" className="ladi-element">
          <h3 className="ladi-headline ladi-transition">
            {WEDDING_INVITATION.location.name}
          </h3>{" "}
        </div>
        <div id="HEADLINE29" className="ladi-element">
          <h3 className="ladi-headline ladi-transition">
            {WEDDING_INVITATION.location.address}
          </h3>{" "}
        </div>
        <a
          href={WEDDING_INVITATION.location.mapLink}
          target="_blank"
          id="HEADLINE30"
          className="ladi-element"
        >
          <h3 className="ladi-headline">CHỈ ĐƯỜNG</h3>{" "}
        </a>
      </div>
    </div>
  );
}
