export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,

    //remove after developing
    //  token: "BQCVwzJjGCh_d-E0u6XAXhCjIitzARSAP9nNsqZcsRaKEQyLcTEWR-dDiAZK2ljWJLw856wrPmnYxNwelvGjcnF5JzLwwdWLvoa7z7krfRDsVPTzjNqX1VIGU-lobqdkdI1_WtjgzM0jCS_SgZ0vyIya0_LZ5QDiaR-ADVrNUIXQkCll",
};

const reducer = (state, action) => {
  console.log(action);

  //setting the action / changing
  switch(action.type) {
     case 'SET_USER':
        return {
            ...state,
            user: action.user
        };
      case 'SET_TOKEN':
          return {
              ...state,
              token: action.token
          };
      case 'SET_PLAYLISTS':
           return {
             ...state,
             playlists: action.playlists
           };  
      case 'SET_DISCOVER_WEEKLY':
        return {
          ...state,
          discover_weekly: action.discover_weekly
        };       

        default:
            return state 
  }
}

export default reducer;