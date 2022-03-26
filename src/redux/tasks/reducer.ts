import { IAction } from '../../types/reducer';

const init = {
  // TODO
};

export default function tasks(state = init, { type, payload }: IAction) {
  switch (type) {
    case 'NEW_TASK':
      return {
        ...state,
        payload,
      };

    default:
      return state;
  }
}
