import { useGameStore } from '../game/store/game';
import { AddPlayerForm } from './AddPlayerForm';

export function ControlsSection() {
  const hardResetGame = useGameStore((s) => s.hardResetGame);
  const editPlayers = useGameStore((s) => s.editPlayers);
  const gameStarted = useGameStore((s) => s.gameStarted);

  return (
    <section className='controls'>
      {(editPlayers || !gameStarted) && <AddPlayerForm />}
      <button onClick={hardResetGame}>Eliminar Jugadores</button>
    </section>
  );
}


