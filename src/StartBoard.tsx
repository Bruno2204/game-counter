import { ControlsSection } from './components/ControlsSection';
import { PlayersList } from './components/PlayersList';
import { useGameStore } from './game/store/game';

export function StartBoard() {
  const changeGameStarted = useGameStore((s) => s.changeGameStarted);
  const players = useGameStore(s => s.players)

  return (
    <>
      <ControlsSection />
      <PlayersList />
      <button onClick={changeGameStarted} disabled={players.length < 2}>Iniciar</button>
    </>
  );
}
