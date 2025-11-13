import './App.css';
import { ControlsSection } from './components/ControlsSection.tsx';
import { RoundsSection } from './components/RoundsSection.tsx';
import { PlayersTable } from './components/PlayersTable.tsx';
import { useGameStore } from './players/store/game.ts';
import { PlayersList } from './components/PlayersList.tsx';

function App() {
  const gameStarted = useGameStore((s) => s.gameStarted);
  const changeGameStarted = useGameStore((s) => s.changeGameStarted);
  return (
    <>
      <header>
        <h1>Contador de Puntos</h1>
      </header>
      <main>
        <ControlsSection />
        {gameStarted ? (
          <GameBoard />
        ) : (
          <>
            <PlayersList />
            <button onClick={changeGameStarted}>Iniciar Juego</button>
          </>
        )}
      </main>
    </>
  );
}

export default App;

export function GameBoard() {
  return (
    <>
      <PlayersTable />
      <RoundsSection />
    </>
  );
}


