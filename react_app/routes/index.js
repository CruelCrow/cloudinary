import React from 'react';
import {Route, IndexRoute, IndexRedirect} from 'react-router';

import App from '../components/App';
import PageNotFound from '../components/PageNotFound';
import VideoList from '../components/video/VideoList';
import {Consts} from '../constants';

export default (
    <Route path="/" component={App}>
        <IndexRedirect to="/video" />
        <Route path="/video" component={VideoList} />
        <Route path="/video/:vid" component={VideoList} />

        <Route path="*" component={PageNotFound}/>

    </Route>
);
