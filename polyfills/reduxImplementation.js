// Step 1: Define ActionTypes
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Step 2: Define Reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

// Step 3: Create Store
const createStore = (reducer) => {
  let state = undefined;
  const listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      if (index !== -1) {
        listeners.splice(index, 1);
      }
    };
  };

  // dispatch({ type: '@@redux/INIT' });

  return { getState, dispatch, subscribe };
};

// Step 4: Create Store with Reducer
const store = createStore(counterReducer);

// Step 5: Subscribe to Store Changes
const unsubscribe = store.subscribe(() => {
  console.log('Current State:', store.getState());
});

// Step 6: Dispatch Actions
store.dispatch({ type: INCREMENT });
store.dispatch({ type: INCREMENT });
store.dispatch({ type: DECREMENT });

// Step 7: Unsubscribe
unsubscribe();
