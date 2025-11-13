import { useState } from 'react';
import './App.css';
import { useGameStore } from './players/store/game';

function App() {
  const [playerName, setPlayerName] = useState('');


  const players = useGameStore((state) => state.players);
  const addPlayer = useGameStore((state) => state.addPlayer);
  const setPointsForRound = useGameStore((state) => state.setPointsForRound);
  const round = useGameStore(state => state.round)
  const nextRound = useGameStore(state => state.nextRound)
  const prevRound = useGameStore(state => state.prevRound)
  const resetGame = useGameStore(s => s.resetGame)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (playerName.trim() === '') return;
    addPlayer(playerName);
    setPlayerName('');
  };
  return (
    <>
      <header>
        <h1>Contador de Puntos</h1>
      </header>
      <section>
        <form onSubmit={handleSubmit} className='add_player'>
          <input
            type='text'
            name='player_name'
            id='player_name'
            placeholder='Nombre del Jugador'
            autoFocus={true}
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
          <button type='submit'>+</button>
        </form>
        <button onClick={resetGame}>Reiniciar</button>
      </section>
      <main>
        <table className='players'>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Puntos</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.id}>
                <td>{player.name}</td>
                <td>
                  <button
                    type='button'
                    onClick={() =>
                      setPointsForRound(player.id, player.points[round] - 1)
                    }
                  >
                    -
                  </button>
                  <input
                    type='number'
                    style={{ width: '40px' }}
                    value={player.points[round]}
                    onChange={(e) =>{
                      const value = Number(e.target.value || 0)
                      if (!Number.isFinite(value)) return
                      setPointsForRound(player.id, value)
                    }
                    }
                  />
                  <button
                    type='button'
                    onClick={() =>
                      setPointsForRound(player.id, player.points[round] + 1)
                    }
                  >
                    +
                  </button>
                </td>
                <td className='btn_cell'>{(player.totals[round])}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <section className='round'>
        <h2>Ronda {round + 1}</h2>
        <div className='round-btns'>
          <button type='button' disabled={!round} onClick={prevRound}>
            {'<'}
          </button>
          <button type='button'  onClick={nextRound}>
            {'>'}
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
