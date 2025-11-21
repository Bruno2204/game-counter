import { useState } from 'react';
import { useGameStore } from '../game/store/game';

export function AddPlayerForm() {
  const addPlayer = useGameStore((state) => state.addPlayer);

  const [playerName, setPlayerName] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (playerName.trim() === '') return;
    addPlayer(playerName);
    setPlayerName('');
  };

  return (
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
  );
}
