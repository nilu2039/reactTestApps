import React from 'react';
import {Route} from 'react-router-dom';




const select = () => {

    return (
        <div>
            <Route exact path="/game" component = {App}>
            </Route>
        </div>
    )
}


export default select;