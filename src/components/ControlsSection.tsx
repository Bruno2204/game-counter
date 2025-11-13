import { useState } from 'react';
import { useGameStore } from '../players/store/game';

export function ControlsSection() {
  const resetGame = useGameStore((s) => s.resetGame);
  const addPlayer = useGameStore((state) => state.addPlayer);
  const changeEditPlayers = useGameStore((s) => s.changeEditPlayers);

  const [playerName, setPlayerName] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (playerName.trim() === '') return;
    addPlayer(playerName);
    setPlayerName('');
  };

  return (
    <section className='controls'>
      <form onSubmit={handleSubmit} className='add_player'>
        <input
          type='text'
          name='player_name'
          id='player_name'
          placeholder='Nombre del Jugador'
          autoFocus={true}
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)} />
        <button type='submit'>+</button>
      </form>
      <button onClick={resetGame}>Reiniciar</button>
      <button onClick={changeEditPlayers}>Editar</button>
    </section>
  );
}
