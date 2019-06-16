  let state = {manageFriends: 0}
  let friends = {name: 'Avi', hometown: 'NYC', id: 100}

export function manageFriends(state, action){

    switch (action.type) {
    case 'ADD_FRIEND':
      return manageFriends, {...friends, friends.friend + 1}
    default:
      return state;
  }
  }
