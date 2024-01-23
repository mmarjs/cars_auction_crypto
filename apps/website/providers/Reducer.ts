import { IState, IAction } from '../types';

const Reducer = (state: IState, action: IAction) => {
	switch (action.type) {
		case 'LOGIN': {
			return { ...state, logged: null };
		}
	}
	return state;
};

export default Reducer;
