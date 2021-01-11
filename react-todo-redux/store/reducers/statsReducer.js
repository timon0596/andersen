import { CHANGE_AMOUNT, CHANGE_DONE } from '../types';

const initialStatistics = {
  amount: 0,
  done: 0,
};
export const statsReducer = (stats = initialStatistics, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_AMOUNT: {
      return { ...stats, amount: payload };
    }
    case CHANGE_DONE: {
      const done = stats.done + payload;
      return { ...stats, done };
    }
    default: {
      return stats;
    }
  }
};
