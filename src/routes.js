import React from 'react';
import {Switch, Route} from 'react-router-dom';

import NewSong from './components/NewSong/NewSong';
import Songs from './components/Songs/Songs';

export default (
    <Switch> 
        <Route path="/newsong" component={NewSong} />
        <Route path="/songs" component={Songs} />
    </Switch>
);

