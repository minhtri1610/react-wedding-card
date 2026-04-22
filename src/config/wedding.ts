import bgMusicUrl from '../assets/mp3/Beautiful In White.mp3';

export const WEDDING_INVITATION = {
  music: {
    // Change the import above to switch background music
    backgroundUrl: bgMusicUrl,
  },
  groom: {
    fullName: 'ĐỨC HOÀNG',
    shortName: 'ĐỨC HOÀNG',
    fatherName: 'Ông. Ngô Văn A',
    motherName: 'Bà. Phạm Thị Thu B',
    bank: {
      name: 'VPBank',
      number: '113dfd045547',
      accountName: 'Ngo Van Minh Tri',
    }
  },
  bride: {
    fullName: 'THÚY VY',
    shortName: 'THÚY VY',
    fatherName: 'Ông. Phạm Tiến C',
    motherName: 'Bà. Nguyễn Thị D',
    bank: {
      name: 'Vietcombank',
      number: '00710342939389',
      numberQR: '007103300939389', // The one on line 64
      accountName: 'Pham Ly Ly',
    }
  },
  date: {
    dayMonthYear: '16.07.2026',
    dayStr: '16',
    monthStr: '07',
    yearStr: '26',
    yearFull: '2026',
    time: '17 giờ 30',
    dayOfWeek: 'thứ bảy',
    lunarDate: '(Tức ngày 11 tháng 06 năm Bính Ngọ)',
    calendarMonth: 'July',
  },
  location: {
    name: 'Holiday Inn & Suites Saigon Airport',
    address: 'Địa chỉ: 18E Đường Cộng Hòa, P. 4, Q. Tân Bình, TP. Hồ Chí Minh',
    mapLink: 'https://maps.app.goo.gl/EoKsSLhT3woFhtSZ6',
    city: 'TP. HCM',
  }
};
