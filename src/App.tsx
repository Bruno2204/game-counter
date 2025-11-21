import './App.css';
import { useGameStore } from './game/store/game.ts';
import { GameBoard } from './components/GameBoard.tsx';
import { StartBoard } from './StartBoard.tsx';

function App() {
  const gameStarted = useGameStore((s) => s.gameStarted);
  return (
    <>
      <header>
        <h1>Contador de Puntos</h1>
      </header>
      <main>{gameStarted ? <GameBoard /> : <StartBoard />}</main>
    </>
  );
}

export default App;
