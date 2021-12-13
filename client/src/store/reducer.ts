export const initialState = {
  id: 'kdkdkkdkkd',
  balance: 123,
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'SET_USER':
      return {
        id: action.id,
        balance: action.balance,
      };

    default:
      return state;
  }
}
export default reducer;
