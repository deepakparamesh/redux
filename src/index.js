import configureStore from './store/configureStore';
import { bugAdded, bugRemoved, bugResolved, bugAssignedToUser, getUnresolvedBugs, getBugsByUser } from './store/bugs';
import * as projectActions from './store/projects';
import { userAdded } from './store/users';
import * as actions from './store/api';
import api from './store/middleware/api';

const store = configureStore();

const unsubscribe = store.subscribe(() => {
    console.log("Store Changed!");
});
 
// store.dispatch(userAdded({ name: "User 1" }));
// store.dispatch(userAdded({ name: "User 2" }));

// store.dispatch(projectActions.projectAdded({name: "Project 1"}));

// store.dispatch(bugAdded({description: "Bug1"}));
// store.dispatch(bugAdded({description: "Bug2"}));
// store.dispatch(bugAdded({description: "Bug3"}));

// // unsubscribe();
// store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1}));

// store.dispatch(bugResolved({id: 2}))
// store.dispatch(bugRemoved({id: 1}));

// const unresolvedBugs = getUnresolvedBugs(store.getState());

// const bugByUser = getBugsByUser(1)(store.getState());

// console.log(store.getState());
// store.dispatch((dispatch, getState) => {
//     // call an api
//     // when the promise is resolved : dispatch action
//     store.dispatch({ type: 'bugsReceived', bugs: [1,2,3]});
//     // if the promise is rejected
// });

/** sample code to show the middleware */
// store.dispatch({
//     type: "error",
//     payload: { message: "An Error Occured" }
// })

store.dispatch({ 
    type: actions.apiCallBegan.type,
    payload: { 
        url: "/bugs",
        onSuccess: "bugs/bugsReceived",
    }
});

// store.dispatch(
//     action.apiCallBegan({
//         url: "/bugs",
//         onSuccess: "bugs/bugsReceived"
//     })
// );

// store.dispatch(actions.apiCallBegan( {
//     payload: {
//         url: "/bugs",
//         onSuccess: "bugsReceived",
//     }
// }
// ));