import { WEDDING_INVITATION } from '../../config/wedding';

export default function SectionPopup() {
  return (
    <div id="SECTION_POPUP" className="ladi-section">
      <div className="ladi-section-background">
        <div className="ladi-container">
          <div id="POPUP1" className="ladi-element">
            <div className="ladi-popup">
              <div className="ladi-popup-background"></div>
              <div id="BOX25" className="ladi-element">
                <div className="ladi-box ladi-transition"></div>
              </div>
              <div id="BOX24" className="ladi-element">
                <div className="ladi-box ladi-transition"></div>
              </div>
              <div id="IMAGE14" className="ladi-element">
                <div className="ladi-image">
                  <div className="ladi-image-background"></div>
                </div>
              </div>
              <div id="HEADLINE105" className="ladi-element">
                <h3 className="ladi-headline ladi-transition">
                  {WEDDING_INVITATION.date.dayStr}
                  <br />
                  {WEDDING_INVITATION.date.monthStr}
                  <br />
                  {WEDDING_INVITATION.date.yearStr}
                  <br />
                </h3>{" "}
              </div>
              <div id="PARAGRAPH1" className="ladi-element">
                <div className="ladi-paragraph ladi-transition">
                  Cảm ơn bạn đã dành thời gian phản hồi.
                  <br />
                  Chúng mình vô cùng trân quý sự quan tâm của bạn.
                  <br />
                </div>
              </div>
              <div id="HEADLINE103" className="ladi-element">
                <h3 className="ladi-headline ladi-transition">
                  Thank you!
                  <br />
                </h3>{" "}
              </div>
            </div>
          </div>
          <div id="POPUP2" className="ladi-element">
            <div className="ladi-popup">
              <div className="ladi-popup-background"></div>
              <div id="IMAGE24" className="ladi-element">
                <div className="ladi-image ladi-transition">
                  <div className="ladi-image-background"></div>
                </div>
              </div>
              <div id="HEADLINE106" className="ladi-element">
                <h3 className="ladi-headline ladi-transition">Cô dâu</h3>{" "}
              </div>
              <div id="HEADLINE107" className="ladi-element">
                <h3 className="ladi-headline ladi-transition">{WEDDING_INVITATION.bride.fullName}</h3>{" "}
              </div>
              <div id="HEADLINE108" className="ladi-element">
                <h3 className="ladi-headline ladi-transition">
                  {WEDDING_INVITATION.bride.bank.name}
                  <br />
                  {WEDDING_INVITATION.bride.bank.numberQR}
                </h3>{" "}
              </div>
              <div id="LINE9" className="ladi-element">
                <div className="ladi-line">
                  <div className="ladi-line-container"></div>
                </div>
              </div>
              <div id="IMAGE16" className="ladi-element">
                <div className="ladi-image ladi-transition">
                  <div className="ladi-image-background"></div>
                </div>
              </div>
              <div id="BOX27" className="ladi-element">
                <div className="ladi-box ladi-transition"></div>
              </div>
              <div id="BOX28" className="ladi-element">
                <div className="ladi-box ladi-transition"></div>
              </div>
            </div>
          </div>
          <div id="POPUP3" className="ladi-element">
            <div className="ladi-popup">
              <div className="ladi-popup-background"></div>
              <div id="IMAGE26" className="ladi-element">
                <div className="ladi-image ladi-transition">
                  <div className="ladi-image-background"></div>
                </div>
              </div>
              <div id="BOX29" className="ladi-element">
                <div className="ladi-box ladi-transition"></div>
              </div>
              <div id="GROUP38" className="ladi-element">
                <div className="ladi-group">
                  <div id="GROUP39" className="ladi-element">
                    <div className="ladi-group">
                      <div id="BOX30" className="ladi-element">
                        <div className="ladi-box ladi-transition"></div>
                      </div>
                      <div id="IMAGE29" className="ladi-element">
                        <div className="ladi-image">
                          <div className="ladi-image-background"></div>
                        </div>
                      </div>
                      <div id="HEADLINE109" className="ladi-element">
                        <h3 className="ladi-headline">{WEDDING_INVITATION.bride.bank.accountName}</h3>{" "}
                      </div>
                      <div id="HEADLINE110" className="ladi-element">
                        <h3 className="ladi-headline">{WEDDING_INVITATION.bride.bank.name}</h3>{" "}
                      </div>
                      <div id="HEADLINE111" className="ladi-element">
                        <h3 className="ladi-headline">{WEDDING_INVITATION.bride.bank.number}</h3>{" "}
                      </div>
                    </div>
                  </div>
                  <div id="GROUP40" className="ladi-element">
                    <div className="ladi-group">
                      <div id="BOX31" className="ladi-element">
                        <div className="ladi-box ladi-transition"></div>
                      </div>
                      <div id="IMAGE30" className="ladi-element">
                        <div className="ladi-image">
                          <div className="ladi-image-background"></div>
                        </div>
                      </div>
                      <div id="HEADLINE112" className="ladi-element">
                        <h3 className="ladi-headline">{WEDDING_INVITATION.groom.bank.accountName}</h3>{" "}
                      </div>
                      <div id="HEADLINE113" className="ladi-element">
                        <h3 className="ladi-headline">{WEDDING_INVITATION.groom.bank.name}</h3>{" "}
                      </div>
                      <div id="HEADLINE114" className="ladi-element">
                        <h3 className="ladi-headline">{WEDDING_INVITATION.groom.bank.number}</h3>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
