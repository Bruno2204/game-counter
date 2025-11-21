import { ControlsSection } from './components/ControlsSection';
import { PlayersList } from './components/PlayersList';
import { useGameStore } from './game/store/game';

export function StartBoard() {
  const changeGameStarted = useGameStore((s) => s.changeGameStarted);

  return (
    <>
      <ControlsSection />
      <PlayersList />
      <button onClick={changeGameStarted}>Iniciar</button>
    </>
  );
}
