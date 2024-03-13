import { ADD_USER, GET_ALL_USERS } from "./types";

interface UserState {
  users: string[];
}

const initialState: UserState = {
  users: [],
};

function usersReducer(
  state = initialState,
  action: { type: string; payload: any }
): UserState {
  switch (action.type) {
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    case GET_ALL_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
}

export default usersReducer;
