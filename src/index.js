import store from './store';
import { bugAdded, bugRemoved, bugResolved } from './actions';

const unsubscribe = store.subscribe(() => {
    console.log("Store Changed!", store.getState());
});

store.dispatch(bugAdded("Bug1"));
store.dispatch(bugAdded("Bug2"));
store.dispatch(bugAdded("Bug3"));

// unsubscribe();

store.dispatch(bugResolved(1))

store.dispatch(bugRemoved(1));

console.log(store.getState());