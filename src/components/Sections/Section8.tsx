import { useState } from 'react';
import { WEDDING_INVITATION } from '../../config/wedding';

export default function Section8() {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Add timestamp or other metadata if needed
    formData.append('date', new Date().toLocaleString());

    try {
      await fetch(WEDDING_INVITATION.googleSheetUrl, {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // Google Script usually requires no-cors for simple POST
      });

      alert('Cảm ơn bạn đã xác nhận tham dự! Chúc bạn một ngày tốt lành.');
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Có lỗi xảy ra khi gửi dữ liệu. Bạn vui lòng thử lại sau nhé!');
    } finally {
      setLoading(false);
    }
  };

  const groomQR = `https://img.vietqr.io/image/${WEDDING_INVITATION.groom.bank.name.toLowerCase()}-${WEDDING_INVITATION.groom.bank.number}-compact2.jpg?addInfo=Mung%20Cuoi%20Hoang%20Vy&accountName=${encodeURIComponent(WEDDING_INVITATION.groom.bank.accountName)}`;
  const brideQR = `https://img.vietqr.io/image/${WEDDING_INVITATION.bride.bank.name.toLowerCase()}-${WEDDING_INVITATION.bride.bank.number}-compact2.jpg?addInfo=Mung%20Cuoi%20Hoang%20Vy&accountName=${encodeURIComponent(WEDDING_INVITATION.bride.bank.accountName)}`;
  return (
    <div id="SECTION8" className="ladi-section">
      <div className="ladi-section-background"></div>
      <div className="ladi-container">
        <div id="IMAGE21" className="ladi-element">
          <div className="ladi-image ladi-transition">
            <div className="ladi-image-background"></div>
          </div>
        </div>
        <div
          id="FORM3"
          data-is-auto-funnel=""
          data-config-id="6635f69f2dbe070012bd1e29"
          className="ladi-element"
        >
          <form 
            autoComplete="off" 
            method="post" 
            className="ladi-form"
            onSubmit={handleSubmit}
          >
            <div id="BUTTON7" className="ladi-element" style={{ cursor: loading ? 'not-allowed' : 'pointer' }}>
              <div className="ladi-button ladi-transition">
                <div className="ladi-button-background"></div>
                <button 
                  type="submit" 
                  disabled={loading}
                  style={{
                    width: '100%',
                    height: '100%',
                    background: 'transparent',
                    border: 'none',
                    padding: 0,
                    margin: 0,
                    cursor: 'inherit',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 1
                  }}
                >
                  <div
                    id="BUTTON_TEXT7"
                    className="ladi-element ladi-button-headline"
                    style={{ position: 'relative', pointerEvents: 'none' }}
                  >
                    <p className="ladi-headline ladi-transition">
                      {loading ? 'ĐANG GỬI...' : 'GỬI LỜI NHẮN và xác nhận'}
                    </p>{" "}
                  </div>
                </button>
              </div>
            </div>
            <div id="FORM_ITEM6" className="ladi-element">
              <div className="ladi-form-item-container">
                <div className="ladi-form-item-background"></div>
                <div className="ladi-form-item">
                  <input
                    autoComplete="off"
                    tabIndex={1}
                    name="name"
                    required
                    className="ladi-form-control"
                    type="text"
                    placeholder="Tên của bạn"
                    defaultValue=""
                  />
                </div>
              </div>
            </div>
            <div id="FORM_ITEM7" className="ladi-element">
              <div className="ladi-form-item-container">
                <div className="ladi-form-item-background"></div>
                <div className="ladi-form-item">
                  <textarea
                    autoComplete="off"
                    tabIndex={4}
                    name="message"
                    required
                    className="ladi-form-control"
                    placeholder="Gửi lời nhắn đến cô dâu chú rể"
                  ></textarea>
                </div>
              </div>
            </div>
            <div id="FORM_ITEM8" className="ladi-element">
              <div className="ladi-form-item-container">
                <div className="ladi-form-item-background"></div>
                <div className="ladi-form-item">
                  <select
                    tabIndex={3}
                    name="attendance"
                    className="ladi-form-control ladi-form-control-select"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>Bạn sẽ đến chứ?</option>
                    <option value="Mình chắc chắn sẽ đến">
                      Mình chắc chắn sẽ đến
                    </option>
                    <option value="Xin lỗi mình bận rồi!">
                      Xin lỗi mình bận rồi!
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div id="FORM_ITEM9" className="ladi-element">
              <div className="ladi-form-item-container">
                <div className="ladi-form-item-background"></div>
                <div className="ladi-form-item">
                  <select
                    tabIndex={4}
                    name="guests"
                    className="ladi-form-control ladi-form-control-select"
                    defaultValue=""
                  >
                    <option value="" disabled>Bạn tham dự cùng ai?</option>
                    <option value="1 người">1 người</option>
                    <option value="2 người">2 người</option>
                    <option value="3 người">3 người</option>
                    <option value="4 người">4 người</option>
                  </select>
                </div>
              </div>
            </div>
            <div id="FORM_ITEM10" className="ladi-element">
              <div className="ladi-form-item-container">
                <div className="ladi-form-item-background"></div>
                <div className="ladi-form-item">
                  <select
                    tabIndex={5}
                    name="guest_of"
                    className="ladi-form-control ladi-form-control-select"
                    defaultValue=""
                  >
                    <option value="" disabled>Bạn là khách mời của ai?</option>
                    <option value="Khách mời cô dâu">Khách mời cô dâu</option>
                    <option value="Khách mời chú rể">Khách mời chú rể</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div 
          data-action="true" 
          id="GROUP35" 
          className="ladi-element"
          style={{ cursor: 'pointer' }}
          onClick={() => setShowModal(true)}
        >
          <div className="ladi-group">
            <div id="BOX21" className="ladi-element">
              <div className="ladi-box ladi-transition"></div>
            </div>
            <div id="HEADLINE99" className="ladi-element">
              <p className="ladi-headline">
                Quà MỪNG CƯỚI
                <br />
              </p>{" "}
            </div>
          </div>
        </div>
        <div id="HEADLINE100" className="ladi-element">
          <p className="ladi-headline ladi-transition">
            Hãy xác nhận sự có mặt của bạn để chúng mình chuẩn bị đón tiếp một
            cách chu đáo nhất.
            <br />
            Trân trọng!&nbsp;
          </p>{" "}
        </div>
      </div>

      {showModal && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.6)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 10000,
            backdropFilter: 'blur(5px)'
          }}
          onClick={() => setShowModal(false)}
        >
          <div 
            style={{
              backgroundColor: '#fff',
              padding: '25px',
              borderRadius: '20px',
              maxWidth: '90%',
              width: '450px',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowModal(false)}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                border: 'none',
                background: '#eee',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                cursor: 'pointer',
                fontSize: '18px'
              }}
            >
              &times;
            </button>
            
            <h3 style={{ textAlign: 'center', marginBottom: '20px', color: '#8b0000', fontFamily: 'TESQSSRUdVTEFSLlRURg' }}>MỪNG CƯỚI ĐỨC HOÀNG & THÚY VY</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              {/* Groom */}
              <div style={{ textAlign: 'center', border: '1px solid #eee', padding: '15px', borderRadius: '15px' }}>
                <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>CHÚ RỂ: {WEDDING_INVITATION.groom.fullName}</p>
                <img src={groomQR} alt="QR Chú Rể" style={{ marginBottom: '10px', borderRadius: '10px' }} />
                <p style={{ fontSize: '14px', color: '#666' }}>{WEDDING_INVITATION.groom.bank.name} - {WEDDING_INVITATION.groom.bank.number}</p>
              </div>

              {/* Bride */}
              <div style={{ textAlign: 'center', border: '1px solid #eee', padding: '15px', borderRadius: '15px' }}>
                <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>CÔ DÂU: {WEDDING_INVITATION.bride.fullName}</p>
                <img src={brideQR} alt="QR Cô Dâu" style={{ marginBottom: '10px', borderRadius: '10px' }} />
                <p style={{ fontSize: '14px', color: '#666' }}>{WEDDING_INVITATION.bride.bank.name} - {WEDDING_INVITATION.bride.bank.number}</p>
              </div>
            </div>
            
            <p style={{ textAlign: 'center', fontSize: '12px', color: '#999', marginTop: '20px', fontStyle: 'italic' }}>
              Cảm ơn lời chúc và món quà ý nghĩa của bạn!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}


