import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Content from './components/Content'
import { WEDDING_INVITATION } from './config/wedding';

function App() {
  return (
    <>
      {/* 
        Thẻ audio chạy ẩn ở mức root app giúp nhạc không bị đứt đoạn.
        Link nhạc được cấu hình trong src/config/wedding.ts
      */}
      <audio id="bg-music" src={WEDDING_INVITATION.music.backgroundUrl} loop preload="auto" />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
