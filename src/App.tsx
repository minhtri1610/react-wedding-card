import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IntroEnvelope from './components/IntroEnvelope'
import ContentEnvelope from './components/ContentEnvelope'
import GlobalControls from './components/GlobalControls'
import './App.css'

import bgMusicUrl from './assets/mp3/Beautiful In White.mp3'

function App() {
  return (
    <>
      {/* 
        Thẻ audio chạy ẩn ở mức root app giúp nhạc không bị đứt đoạn.
        Khi file nhạc nằm trong thư mục src/assets, ta phải import file để Vite biên dịch ra đường dẫn đúng.
      */}
      <audio id="bg-music" src={bgMusicUrl} loop preload="auto" />

      <BrowserRouter>
        <GlobalControls />
        <Routes>
          <Route path="/" element={<IntroEnvelope />} />
          <Route path="/content" element={<ContentEnvelope />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
