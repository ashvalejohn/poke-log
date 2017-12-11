const nullUser = {
  currentUser: null,
};

const sessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  const currentUser = { currentUser: action.currentUser };
  switch (action.type) {
    default:
      return state;
  }
};

export default sessionReducer;