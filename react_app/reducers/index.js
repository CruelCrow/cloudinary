import { combineReducers }  from 'redux';
import video from './video';
import loading from './loading';
import user from './user';

const appReducer = combineReducers({
    video: video,
    loading: loading,
    user: user
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
