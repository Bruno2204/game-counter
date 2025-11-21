import { useGameStore } from '../game/store/game';
import type { Player } from '../types';

export function PlayerRow({ player, isTurnPlayer }: { player: Player; isTurnPlayer: boolean; }) {
  const editPlayers = useGameStore((s) => s.editPlayers);
  const round = useGameStore((state) => state.round);
  const setPointsForRound = useGameStore((state) => state.setPointsForRound);
  const changePlayerName = useGameStore(state => state.changePlayerName);
  const deletePlayer = useGameStore(state => state.deletePlayer);

  return (
    <>
      <td>
        {editPlayers ? (
          <input type='text' value={player.name} onChange={(e) => changePlayerName(player.id, e.target.value)} />
        ) : (
          <>{isTurnPlayer && '🟢'} {player.name} </>
        )}
      </td>
      <td>
        <button
          type='button'
          onClick={() => setPointsForRound(player.id, player.points[round] - 1)}
        >
          -
        </button>
        <input
          type='number'
          style={{ width: '40px' }}
          value={player.points[round]}
          onChange={(e) => {
            const value = Number(e.target.value || 0);
            if (!Number.isFinite(value)) return;
            setPointsForRound(player.id, value);
          }} />
        <button
          type='button'
          onClick={() => setPointsForRound(player.id, player.points[round] + 1)}
        >
          +
        </button>
      </td>
      <td>
        {editPlayers ? <><button type="button" className='dlt-btn' onClick={() => deletePlayer(player.id)}>🗑️</button></> : <>{player.totals[round]}</>}
      </td>
    </>
  );
}
