import React from 'react';
import {Switch, Route} from 'react-router-dom';

import NewSong from './components/NewSong/NewSong';

export default (
    <Switch> 
        <Route path="/newsong" component={NewSong} />
    </Switch>
);

