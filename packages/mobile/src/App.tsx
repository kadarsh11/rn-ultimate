import { store } from "@app/core/redux";
import { Home } from "@app/core/screen";
import React from 'react';
import { Provider } from 'react-redux';


const App = () => {
    return (
        <Provider store={store}>
            <Home/>
        </Provider>
    )
}

export default App