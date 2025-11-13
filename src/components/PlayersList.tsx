import { useGameStore } from '../players/store/game';

export function PlayersList() {
  const players = useGameStore((s) => s.players);
  const deletePlayer = useGameStore((s) => s.deletePlayer);

  return (
    <table className='players-list'>
      <tbody>
        {players.map((p) => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>
              <button onClick={() => deletePlayer(p.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
