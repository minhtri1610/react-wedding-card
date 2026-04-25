import { WEDDING_INVITATION } from '../../config/wedding';
import { useCountdown } from '../../hooks/useCountdown';

export default function Section5() {
  const { days, hours, minutes, seconds } = useCountdown(
    WEDDING_INVITATION.date.dayMonthYear,
    WEDDING_INVITATION.date.time
  );

  return (
    <div id="SECTION5" className="ladi-section">
      <div className="ladi-section-background"></div>
      <div className="ladi-container">
        <div id="IMAGE18" className="ladi-element">
          <div className="ladi-image">
            <div className="ladi-image-background"></div>
          </div>
        </div>
        <div id="HEADLINE35" className="ladi-element">
          <h3 className="ladi-headline">
            {WEDDING_INVITATION.date.yearFull}
            <br />
          </h3>{" "}
        </div>
        <div id="HEADLINE36" className="ladi-element">
          <h3 className="ladi-headline">
            {WEDDING_INVITATION.date.calendarMonth}
            <br />
          </h3>{" "}
        </div>
        <div id="HEADLINE71" className="ladi-element">
          <p className="ladi-headline ladi-transition">
            15
            <br />
          </p>{" "}
        </div>
        <div id="HEADLINE70" className="ladi-element">
          <p className="ladi-headline ladi-transition">
            14
            <br />
          </p>{" "}
        </div>
        <div id="HEADLINE69" className="ladi-element">
          <p className="ladi-headline ladi-transition">
            13
            <br />
          </p>{" "}
        </div>
        <div id="HEADLINE68" className="ladi-element">
          <p className="ladi-headline ladi-transition">
            26
            <br />
          </p>{" "}
        </div>
        <div id="HEADLINE67" className="ladi-element">
          <p className="ladi-headline ladi-transition">
            25
            <br />
          </p>{" "}
        </div>
        <div id="HEADLINE66" className="ladi-element">
          <p className="ladi-headline ladi-transition">
            24
            <br />
          </p>{" "}
        </div>
        <div id="HEADLINE65" className="ladi-element">
          <p className="ladi-headline ladi-transition">
            23
            <br />
          </p>{" "}
        </div>
        <div id="HEADLINE64" className="ladi-element">
          <p className="ladi-headline ladi-transition">22</p>{" "}
        </div>
        <div id="HEADLINE63" className="ladi-element">
          <p className="ladi-headline ladi-transition">21</p>{" "}
        </div>
        <div id="HEADLINE62" className="ladi-element">
          <p className="ladi-headline ladi-transition">
            20
            <br />
          </p>{" "}
        </div>
        <div id="HEADLINE54" className="ladi-element">
          <p className="ladi-headline ladi-transition">
            27
            <br />
          </p>{" "}
        </div>
        <div id="HEADLINE53" className="ladi-element">
          <p className="ladi-headline ladi-transition">
            12
            <br />
          </p>{" "}
        </div>
        <div id="HEADLINE52" className="ladi-element">
          <p className="ladi-headline ladi-transition">
            11
            <br />
          </p>{" "}
        </div>
        <div id="HEADLINE51" className="ladi-element">
          <p className="ladi-headline ladi-transition">
            10
            <br />
          </p>{" "}
        </div>
        <div id="HEADLINE50" className="ladi-element">
          <p className="ladi-headline ladi-transition">
            9<br />
          </p>{" "}
        </div>
        <div id="HEADLINE49" className="ladi-element">
          <p className="ladi-headline ladi-transition">
            8<br />
          </p>{" "}
        </div>
        <div id="HEADLINE48" className="ladi-element">
          <p className="ladi-headline ladi-transition">
            7<br />
          </p>{" "}
        </div>
        <div id="HEADLINE47" className="ladi-element">
          <p className="ladi-headline ladi-transition">
            6<br />
          </p>{" "}
        </div>
        <div id="HEADLINE46" className="ladi-element">
          <p className="ladi-headline ladi-transition">
            5<br />
          </p>{" "}
        </div>
        <div id="HEADLINE45" className="ladi-element">
          <p className="ladi-headline ladi-transition">
            4<br />
          </p>{" "}
        </div>
        <div id="HEADLINE44" className="ladi-element">
          <p className="ladi-headline ladi-transition">
            3<br />
          </p>{" "}
        </div>
        <div id="HEADLINE43" className="ladi-element">
          <p className="ladi-headline ladi-transition">
            2<br />
          </p>{" "}
        </div>
        <div id="HEADLINE42" className="ladi-element">
          <p className="ladi-headline ladi-transition">
            1<br />
          </p>{" "}
        </div>
        <div id="HEADLINE41" className="ladi-element">
          <p className="ladi-headline ladi-transition">
            &nbsp;
            <br />
          </p>{" "}
        </div>
        <div id="HEADLINE76" className="ladi-element">
          <p className="ladi-headline ladi-transition">
            28
            <br />
          </p>{" "}
        </div>
        <div id="HEADLINE77" className="ladi-element">
          <p className="ladi-headline ladi-transition">
            29
            <br />
          </p>{" "}
        </div>
        <div id="HEADLINE78" className="ladi-element">
          <p className="ladi-headline ladi-transition">
            30
            <br />
          </p>{" "}
        </div>
        {/* July has 31 days. Positioning it at Row 5, Friday (left: 235.628px) */}
        <div className="ladi-element" style={{ top: '393.795px', left: '235.628px', width: '43px' }}>
          <p className="ladi-headline ladi-transition" style={{ fontFamily: 'TESQSSRUdVTEFSLlRURg', fontSize: '16px', lineHeight: '1.6', color: 'rgb(78, 100, 55)', textAlign: 'center' }}>
            31
            <br />
          </p>{" "}
        </div>
        <div id="HEADLINE72" className="ladi-element">
          <p className="ladi-headline ladi-transition">
            <b>16</b>
            <br />
          </p>{" "}
        </div>
        <div id="HEADLINE73" className="ladi-element">
          <p className="ladi-headline ladi-transition">
            17
            <br />
          </p>{" "}
        </div>
        <div id="HEADLINE74" className="ladi-element">
          <p className="ladi-headline ladi-transition">
            18
            <br />
          </p>{" "}
        </div>
        <div id="HEADLINE75" className="ladi-element">
          <p className="ladi-headline ladi-transition">
            19
            <br />
          </p>{" "}
        </div>
        <div id="HEADLINE55" className="ladi-element">
          <p className="ladi-headline ladi-transition">
            mon
            <br />
          </p>{" "}
        </div>
        <div id="HEADLINE56" className="ladi-element">
          <p className="ladi-headline ladi-transition">
            tue
            <br />
          </p>{" "}
        </div>
        <div id="HEADLINE57" className="ladi-element">
          <p className="ladi-headline ladi-transition">wed</p>{" "}
        </div>
        <div id="HEADLINE58" className="ladi-element">
          <p className="ladi-headline ladi-transition">
            thu
            <br />
          </p>{" "}
        </div>
        <div id="HEADLINE59" className="ladi-element">
          <p className="ladi-headline ladi-transition">
            fri
            <br />
          </p>{" "}
        </div>
        <div id="HEADLINE60" className="ladi-element">
          <p className="ladi-headline ladi-transition">
            sat
            <br />
          </p>{" "}
        </div>
        <div id="HEADLINE61" className="ladi-element">
          <p className="ladi-headline ladi-transition">
            sun
            <br />
          </p>{" "}
        </div>
        <div id="HEADLINE79" className="ladi-element">
          <h3 className="ladi-headline ladi-transition">
            We’ll be sharing a home and a life
            <br />
            together in
          </h3>{" "}
        </div>
        <div id="GROUP25" className="ladi-element">
          <div className="ladi-group">
            <div id="COUNTDOWN1" className="ladi-element">
              <div className="ladi-countdown">
                <div id="COUNTDOWN_ITEM1" className="ladi-element">
                  <div className="ladi-countdown-background"></div>
                  <div className="ladi-countdown-text">
                    <p style={{ fontSize: '10px', marginTop: '-5px', fontWeight: 'normal', textTransform: 'uppercase' }}>Ngày</p>
                    <span>{days}</span>
                  </div>
                </div>
                <div id="COUNTDOWN_ITEM2" className="ladi-element">
                  <div className="ladi-countdown-background"></div>
                  <div className="ladi-countdown-text">
                    <p style={{ fontSize: '10px', marginTop: '-5px', fontWeight: 'normal', textTransform: 'uppercase' }}>Giờ</p>
                    <span>{hours}</span>
                  </div>
                </div>
                <div id="COUNTDOWN_ITEM3" className="ladi-element">
                  <div className="ladi-countdown-background"></div>
                  <div className="ladi-countdown-text">
                    <p style={{ fontSize: '10px', marginTop: '-5px', fontWeight: 'normal', textTransform: 'uppercase' }}>Phút</p>
                    <span>{minutes}</span>
                  </div>
                </div>
                <div id="COUNTDOWN_ITEM4" className="ladi-element">
                  <div className="ladi-countdown-background"></div>
                  <div className="ladi-countdown-text">
                    <p style={{ fontSize: '10px', marginTop: '-5px', fontWeight: 'normal', textTransform: 'uppercase' }}>Giây</p>
                    <span>{seconds}</span>
                  </div>
                </div>
              </div>
            </div>
            <div id="HEADLINE80" className="ladi-element">
              <h3 className="ladi-headline ladi-transition">
                :<br />
              </h3>{" "}
            </div>
            <div id="HEADLINE81" className="ladi-element">
              <h3 className="ladi-headline ladi-transition">
                :<br />
              </h3>{" "}
            </div>
            <div id="HEADLINE82" className="ladi-element">
              <h3 className="ladi-headline ladi-transition">
                :<br />
              </h3>{" "}
            </div>
          </div>
        </div>
        <div id="IMAGE25" className="ladi-element" style={{ top: '320.188px', left: '191.783px' }}>
          <div className="ladi-image">
            <div className="ladi-image-background"></div>
          </div>
        </div>
        <div id="GROUP46" className="ladi-element">
          <div className="ladi-group">
            <div id="HEADLINE156" className="ladi-element">
              <h3 className="ladi-headline">
                November
                <br />
              </h3>{" "}
            </div>
            <div id="HEADLINE157" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                16
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE158" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                15
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE159" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                14
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE160" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                13
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE161" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                12
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE162" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                11
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE163" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                10
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE164" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                23
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE165" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                22
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE166" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                21
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE167" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                20
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE168" className="ladi-element">
              <p className="ladi-headline ladi-transition">19</p>{" "}
            </div>
            <div id="HEADLINE169" className="ladi-element">
              <p className="ladi-headline ladi-transition">18</p>{" "}
            </div>
            <div id="HEADLINE170" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                17
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE171" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                24
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE172" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                9<br />
              </p>{" "}
            </div>
            <div id="HEADLINE173" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                8<br />
              </p>{" "}
            </div>
            <div id="HEADLINE174" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                7<br />
              </p>{" "}
            </div>
            <div id="HEADLINE175" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                6<br />
              </p>{" "}
            </div>
            <div id="HEADLINE176" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                5<br />
              </p>{" "}
            </div>
            <div id="HEADLINE177" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                4<br />
              </p>{" "}
            </div>
            <div id="HEADLINE178" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                3<br />
              </p>{" "}
            </div>
            <div id="HEADLINE179" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                2<br />
              </p>{" "}
            </div>
            <div id="HEADLINE180" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                1<br />
              </p>{" "}
            </div>
            <div id="HEADLINE181" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                30
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE182" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                29
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE183" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                28
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE184" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                25
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE185" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                26
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE186" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                27
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE187" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                mon
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE188" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                tue
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE189" className="ladi-element">
              <p className="ladi-headline ladi-transition">wed</p>{" "}
            </div>
            <div id="HEADLINE190" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                thu
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE191" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                fri
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE192" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                sat
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE193" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                sun
                <br />
              </p>{" "}
            </div>
            <div id="IMAGE35" className="ladi-element">
              <div className="ladi-image">
                <div className="ladi-image-background"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="GROUP50" className="ladi-element">
          <div className="ladi-group">
            <div id="HEADLINE194" className="ladi-element">
              <h3 className="ladi-headline">
                December
                <br />
              </h3>{" "}
            </div>
            <div id="HEADLINE195" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                21
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE196" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                20
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE197" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                19
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE198" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                18
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE199" className="ladi-element">
              <p className="ladi-headline ladi-transition">17</p>{" "}
            </div>
            <div id="HEADLINE200" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                16
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE201" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                15
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE202" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                28
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE203" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                27
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE204" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                26
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE205" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                25
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE206" className="ladi-element">
              <p className="ladi-headline ladi-transition">24</p>{" "}
            </div>
            <div id="HEADLINE207" className="ladi-element">
              <p className="ladi-headline ladi-transition">23</p>{" "}
            </div>
            <div id="HEADLINE208" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                22
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE209" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                29
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE210" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                14
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE211" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                13
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE212" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                12
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE213" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                11
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE214" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                10
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE215" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                9<br />
              </p>{" "}
            </div>
            <div id="HEADLINE216" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                8<br />
              </p>{" "}
            </div>
            <div id="HEADLINE217" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                7<br />
              </p>{" "}
            </div>
            <div id="HEADLINE218" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                6<br />
              </p>{" "}
            </div>
            <div id="HEADLINE219" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                30
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE220" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                mon
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE221" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                tue
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE222" className="ladi-element">
              <p className="ladi-headline ladi-transition">wed</p>{" "}
            </div>
            <div id="HEADLINE223" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                thu
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE224" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                fri
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE225" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                sat
                <br />
              </p>{" "}
            </div>
            <div id="HEADLINE226" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                sun
                <br />
              </p>{" "}
            </div>
            <div id="IMAGE36" className="ladi-element">
              <div className="ladi-image">
                <div className="ladi-image-background"></div>
              </div>
            </div>
            <div id="HEADLINE227" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                1<br />
              </p>{" "}
            </div>
            <div id="HEADLINE228" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                5<br />
              </p>{" "}
            </div>
            <div id="HEADLINE229" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                4<br />
              </p>{" "}
            </div>
            <div id="HEADLINE230" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                2<br />
              </p>{" "}
            </div>
            <div id="HEADLINE231" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                3<br />
              </p>{" "}
            </div>
            <div id="HEADLINE232" className="ladi-element">
              <p className="ladi-headline ladi-transition">
                31
                <br />
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
