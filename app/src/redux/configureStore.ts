import { createStore, applyMiddleware, Store } from 'redux';

// We'll be using Redux Devtools. We can use the `composeWithDevTools()`
// directive so we can pass our middleware along with it
// import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

// Import the state interface and our combined reducers.
import { ApplicationState, reducers } from './index';


export default function configureStore(): Store<ApplicationState> {
    // create the composing function for our middlewares
    // const composeEnhancers = composeWithDevTools({});

    // We'll create our store with the combined reducers and the initial Redux state that
    // we'll be passing from our entry point.
    return createStore(
        reducers
        // composeEnhancers(),
    );
}