import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Calculate from './pages/Calculate'
import Results from './pages/Results'

function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/calculate" component={Calculate} />
            <Route path="/results" component={Results} />
        </BrowserRouter>
    );
}

export default Routes;