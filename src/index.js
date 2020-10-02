import store from './customStore';
import * as actions from './actions';

const unsubscribe = store.subscribe(() => {
    console.log("Store Changed!", store.getState());
});

store.dispatch(actions.bugAdded("Bug1"));
store.dispatch(actions.bugAdded("Bug2"));
store.dispatch(actions.bugAdded("Bug3"));

// unsubscribe();

store.dispatch(actions.bugResolved(1))

store.dispatch(actions.bugRemoved(1));

console.log(store.getState());