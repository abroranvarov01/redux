const initialState = {
  user: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        user: [...state.user, action.value],
      };
    case "DELETE_USER":
      return {
        ...state,
        user: state.user.filter((user) => user.id !== action.id),
      };
    case "EDIT_USER":
      return {
        ...state,
        user: state.user.map((user) => {
          if (user.id === action.id) {
            return {
              ...user,
              ...action.value,
            };
          }
          return user;
        }),
      };
    default:
      return state;
  }
};
