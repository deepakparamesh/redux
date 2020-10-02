import configureStore from './store/configureStore';
import * as actions from './store/bugs';

const store = configureStore();

const unsubscribe = store.subscribe(() => {
    console.log("Store Changed!", store.getState());
});

store.dispatch(actions.bugAdded({description: "Bug1"}));
store.dispatch(actions.bugAdded({description: "Bug2"}));
store.dispatch(actions.bugAdded({description: "Bug3"}));

// unsubscribe();

store.dispatch(actions.bugResolved({id: 1}))

store.dispatch(actions.bugRemoved({id: 2}));

console.log(store.getState());