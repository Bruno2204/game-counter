import { create } from 'zustand';
import type { Player } from '../../types';
import { persist } from 'zustand/middleware';

type State = {
  players: Player[];
  round: number;
  lastID: number;
  editPlayers: boolean;
  gameStarted: boolean;
  addPlayer: (name: string) => void;
  deletePlayer: (index: number) => void;
  setPointsForRound: (id: number, points: number) => void;
  nextRound: () => void;
  prevRound: () => void;
  resetGame: () => void;
  hardResetGame: () => void;
  changeEditPlayers: () => void;
  changePlayerName: (id: number, name: string) => void;
  changeGameStarted: () => void;
};

export const useGameStore = create(
  persist<State>(
    (set) => ({
      round: 0,
      lastID: 0,
      players: [],
      editPlayers: false,
      gameStarted: false,

      changeEditPlayers: () =>
        set((state) => ({ editPlayers: !state.editPlayers })),

      addPlayer: (name: string) =>
        set((state) => ({
          players: [
            ...state.players,
            {
              id: state.lastID + 1,
              name,
              points: Array(state.round + 1).fill(0),
              totals: Array(state.round + 1).fill(0),
            },
          ],
          lastID: state.lastID + 1,
        })),

      deletePlayer: (id) =>
        set((state) => ({
          players: state.players.filter((player) => player.id !== id),
        })),

      setPointsForRound: (id, points) =>
        set((state) => ({
          players: state.players.map((p) => {
            if (p.id !== id) return p;

            const newPoints = [...p.points];
            newPoints[state.round] = points;

            const newTotals = newPoints.reduce<number[]>((acc, curr, i) => {
              acc.push((acc[i - 1] ?? 0) + curr);
              return acc;
            }, []);

            return { ...p, points: newPoints, totals: newTotals };
          }),
        })),

      nextRound: () =>
        set((state) => ({
          round: state.round + 1,
          players: state.players.map((p) => {
            if (p.points.length > state.round + 1) return p;

            const newPoints = [...p.points];
            const newTotals = [...p.totals];

            newPoints.push(0);
            newTotals.push(p.totals[state.round]);
            return { ...p, points: newPoints, totals: newTotals };
          }),
        })),

      prevRound: () =>
        set((state) => ({
          round: Math.max(state.round - 1, 0),
        })),

      resetGame: () =>
        set((state) => ({
          players: state.players.map((p) => ({
            ...p,
            points: [0],
            totals: [0],
          })),
          round: 0,
        })),

      hardResetGame: () =>
        set(() => ({
          players: [],
          round: 0,
          lastID: 0,
        })),
      changePlayerName: (id, name) =>
        set((state) => ({
          players: state.players.map((p) => {
            if (id !== p.id) return p;
            return { ...p, name };
          }),
        })),
      changeGameStarted: () =>
        set((s) => ({
          gameStarted: !s.gameStarted,
          players: s.players.map((p) => ({
            ...p,
            points: [0],
            totals: [0],
          })),
          round: 0,
        })),
    }),
    { name: 'game-storage' }
  )
);
