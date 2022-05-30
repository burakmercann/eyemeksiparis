export const initialState = {
    bag: null,
    total: null,
  };
  
  export const actionType = {
    SET_BAG: "SET_BAG",
    SET_TOTAL: "SET_TOTAL",
  };
  
  const reducer = (state, action) => {
    console.log(action);
  
    switch (action.type) {
      case actionType.SET_BAG:
        return {
          ...state,
          bag: action.bag,
        };
  
      case actionType.SET_TOTAL:
        return {
          ...state,
          total: action.total,
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;