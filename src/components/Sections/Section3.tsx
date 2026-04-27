import { useSearchParams } from 'react-router-dom';
import { WEDDING_INVITATION } from '../../config/wedding';


export default function Section3() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');

  return (
    <div id="SECTION3" className="ladi-section">
      <div className="ladi-section-background"></div>
      <div className="ladi-container">
        <div id="IMAGE22" className="ladi-element">
          <div className="ladi-image ladi-transition">
            <div className="ladi-image-background"></div>
          </div>
        </div>
        <div 
          data-action="true" 
          id="GROUP14" 
          className="ladi-element" 
          style={{ top: '986px', cursor: 'pointer' }}
          onClick={() => {
            document.getElementById('SECTION8_WRAPPER')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
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
                {WEDDING_INVITATION.bride.address}
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
                {WEDDING_INVITATION.groom.address}
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
                    V&nbsp;&nbsp;<br />
                  </h3>{" "}
                </div>
                <div id="HEADLINE18" className="ladi-element">
                  <h3 className="ladi-headline ladi-transition">
                    H<br />
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
            {WEDDING_INVITATION.bride.fullName}
            <br />
          </h3>{" "}
        </div>
        <div id="HEADLINE21" className="ladi-element">
          <h3 className="ladi-headline">
            {WEDDING_INVITATION.groom.fullName}
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
                {type === 'bride' ? WEDDING_INVITATION.bride.time : WEDDING_INVITATION.groom.time}
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
        
        {/* Nhà Trai */}
        {(!type || type === 'groom') && (
          <>
            <div id="HEADLINE28" className="ladi-element" style={{ top: '828px' }}>
              <h3 className="ladi-headline ladi-transition" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                <span style={{ color: '#8b0000', fontWeight: 'bold' }}>TIỆC NHÀ TRAI</span>
                <br />{WEDDING_INVITATION.groomLocation.name}
              </h3>{" "}
            </div>
            <div id="HEADLINE29" className="ladi-element" style={{ top: '893px' }}>
              <h3 className="ladi-headline ladi-transition" style={{ fontSize: '13px', textTransform: 'none', lineHeight: '1.6' }}>
                {WEDDING_INVITATION.groomLocation.address}
              </h3>{" "}
            </div>
            <a
              href={WEDDING_INVITATION.groomLocation.mapLink}
              target="_blank"
              id="HEADLINE30"
              className="ladi-element"
              style={{ top: '938px', border: '1px solid #38511f', borderRadius: '4px', height: '35px' }}
            >
              <h3 className="ladi-headline" style={{ fontSize: '12px', lineHeight: '35px' }}>CHỈ ĐƯỜNG NHÀ TRAI</h3>{" "}
            </a>
          </>
        )}

        {/* Nhà Gái */}
        {(!type || type === 'bride') && (
          <>
            <div className="ladi-element" style={{ top: type === 'bride' ? '828px' : '998px', width: '473px', left: '-26.625px' }}>
              <h3 className="ladi-headline ladi-transition" style={{ fontSize: '16px', textAlign: 'center', color: 'rgb(56, 81, 31)', textTransform: 'uppercase', fontFamily: 'TESQSSRUdVTEFSLlRURg', lineHeight: '1.6' }}>
                <span style={{ color: '#8b0000', fontWeight: 'bold' }}>TIỆC NHÀ GÁI</span> 
                <br />
                <b>{WEDDING_INVITATION.brideLocation.name}</b>
              </h3>{" "}
            </div>
            <div className="ladi-element" style={{ top: type === 'bride' ? '893px' : '1063px', width: '395px', left: '12.625px' }}>
              <h3 className="ladi-headline ladi-transition" style={{ fontSize: '13px', textAlign: 'center', color: 'rgb(56, 81, 31)', fontFamily: 'TESQSSRUdVTEFSLlRURg', textTransform: 'none', lineHeight: '1.6' }}>
                {WEDDING_INVITATION.brideLocation.address}
              </h3>{" "}
            </div>
            <a
              href={WEDDING_INVITATION.brideLocation.mapLink}
              target="_blank"
              id="HEADLINE30_GIRL"
              className="ladi-element"
              style={{ top: type === 'bride' ? '938px' : '1108px', width: '196px', left: '110.5px', border: '1px solid #38511f', borderRadius: '4px', height: '35px' }}
            >
              <h3 className="ladi-headline" style={{ fontSize: '12px', lineHeight: '35px', textAlign: 'center', color: 'rgb(56, 81, 31)' }}>CHỈ ĐƯỜNG NHÀ GÁI</h3>{" "}
            </a>
          </>
        )}
      </div>
    </div>
  );
}
