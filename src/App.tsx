import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Content from './components/Content'
import { WEDDING_INVITATION } from './config/wedding';
import { useMusic } from './hooks/useMusic';

function App() {
  const { playMusic } = useMusic();

  useEffect(() => {
    const handleGlobalClick = async () => {
      // Browser policies often block autoplay until the user interacts with the page.
      // This will attempt to play music on the first click anywhere.
      const success = await playMusic();
      // Remove listener after first interaction if successful
      if (success) {
        window.removeEventListener('click', handleGlobalClick);
        window.removeEventListener('touchend', handleGlobalClick);
      }
    };

    window.addEventListener('click', handleGlobalClick);
    window.addEventListener('touchend', handleGlobalClick);

    return () => {
      window.removeEventListener('click', handleGlobalClick);
      window.removeEventListener('touchend', handleGlobalClick);
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
