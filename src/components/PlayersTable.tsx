import { useGameStore } from '../game/store/game';
import { PlayerRow } from './PlayerRow';

export function PlayersTable() {
  const turnPlayer =  useGameStore(s => s.turnPlayer)
  const players = useGameStore((state) => state.players);

  return (
    <table className='players striped'>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Puntos</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player,i) => (
          <tr key={player.id}>
            <PlayerRow player={player} isTurnPlayer={i === turnPlayer} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}


