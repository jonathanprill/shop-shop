// createContext creates the container to hold our global state data and functionality
// useContext is another React Hook that will allow us to use the state created from the createContext function.
import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';

// actually instantiate the global state object:
const StoreContext = createContext();
const { Provider } = StoreContext;

// state is the most up-to-date version of our global state object.
// dispatch is the method we execute to update our state
const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
        products: [],
        cart: [],
        cartOpen: false,
        categories: [],
        currentCategory: '',
    });
    // use this to confirm it works!
    console.log(state);
    // the StoreProvider function isn't as much of a function as it is our own custom <Provider> component!
    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };