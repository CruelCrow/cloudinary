import { combineReducers }  from 'redux';
import video from './video';
import loading from './loading';

const appReducer = combineReducers({
    video: video,
    loading: loading
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
