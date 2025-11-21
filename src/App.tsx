import './App.css';
import { ControlsSection } from './components/ControlsSection.tsx';
import { useGameStore } from './game/store/game.ts';
import { PlayersList } from './components/PlayersList.tsx';
import { GameBoard } from './components/GameBoard.tsx';

function App() {
  const gameStarted = useGameStore((s) => s.gameStarted);
  const changeGameStarted = useGameStore((s) => s.changeGameStarted);
  return (
    <>
      <header>
        <h1>Contador de Puntos</h1>
      </header>
      <main>
        {gameStarted ? (
          <GameBoard />
        ) : (
          <>
            <ControlsSection />
            <PlayersList />
            <button onClick={changeGameStarted}>Iniciar Juego</button>
          </>
        )}
      </main>
    </>
  );
}

export default App;


