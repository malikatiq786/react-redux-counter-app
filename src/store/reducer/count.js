import * as Actions from "../constants/index"
const initialState = {
  count: 0,
  users:[]
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.INC:
      return {
        count: state.count + 1,
      };

      case Actions.DEC:
        return{
          count:state.count -1
        }

        case Actions.SETUSERS:
          return{
            users: action.users,
          }

      case Actions.DELETEPOST:
        return {
            ...state,
            users: [...state.users.filter(item => item.id !== action.id)],

        };
    
    default:
      return state;
  }
};
export default Reducer;
