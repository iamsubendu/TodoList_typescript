import { useReducer } from 'react';
import { Todo } from './model';

type Actions =
  | {
      type: 'Add';
      payload: string;
      //only text is required
    }
  | {
      type: 'Done';
      payload: number;
      //as we want only id
    }
  | {
      type: 'Delete';
      payload: number;
      //as we want only id
    }
  | {
      type: 'Edit';
      payload: {
        id: number;
        todo: string;
      };
    };

const TodoReducer = (state: Todo[], action: Actions) => {
  switch (action.type) {
    case 'Add':
      return [
        ...state,
        { id: Date.now(), todo: action.payload, isDone: false },
      ];
    case 'Done':
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: true } : todo
      );
    case 'Delete':
      return state.filter((todo) => todo.id !== action.payload);
    case 'Edit':
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, todo: action.payload.todo }
          : todo
      );
    default:
      return state;
  }
};
