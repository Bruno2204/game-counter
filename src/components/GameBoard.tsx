import { useGameStore } from '../game/store/game';
import { AddPlayerForm } from './AddPlayerForm';
import { PlayersTable } from './PlayersTable';
import { RoundsSection } from './RoundsSection';


export function GameBoard() {
  const editPlayers = useGameStore(s => s.editPlayers)
  return (
    <>
      {editPlayers && <AddPlayerForm />}
      <PlayersTable />
      <RoundsSection />
    </>
  );
}
