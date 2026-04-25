import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Content from './components/Content'
import { WEDDING_INVITATION } from './config/wedding';
import { useMusic } from './hooks/useMusic';

function App() {
  const { playMusic } = useMusic();

  useEffect(() => {
    const handleGlobalClick = () => {
      // Browser policies often block autoplay until the user interacts with the page.
      // This will attempt to play music on the first click anywhere.
      playMusic();
      // Remove listener after first interaction
      window.removeEventListener('click', handleGlobalClick);
      window.removeEventListener('touchstart', handleGlobalClick);
    };

    window.addEventListener('click', handleGlobalClick);
    window.addEventListener('touchstart', handleGlobalClick);

    return () => {
      window.removeEventListener('click', handleGlobalClick);
      window.removeEventListener('touchstart', handleGlobalClick);
    };
  }, [playMusic]);

  return (
    <>
      <audio id="bg-music" src={WEDDING_INVITATION.music.backgroundUrl} loop preload="auto" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
