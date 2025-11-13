import { useGameStore } from '../players/store/game';

export function RoundsSection() {
  const round = useGameStore((state) => state.round);
  const nextRound = useGameStore((state) => state.nextRound);
  const prevRound = useGameStore((state) => state.prevRound);
  const changeGameStarted = useGameStore((state) => state.changeGameStarted);

  return (
    <section className='round'>
      <h2>Ronda {round + 1}</h2>
      <div className='round-btns'>
        <button type='button' disabled={!round} onClick={prevRound}>
          {'<'}
        </button>
        <button type='button' onClick={nextRound}>
          {'>'}
        </button>
        <button onClick={changeGameStarted}>Finalizar juego</button>
      </div>
    </section>
  );
}
