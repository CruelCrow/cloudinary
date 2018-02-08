import {Consts} from './../constants';
import {VideoPreview, Video, User} from './../models';

const initialState = User.currentUser;

export default function (state = initialState, action) {
    switch (action.type) {

        case Consts.ACTIONS.ADD_VIDEO_TO_HISTORY:
            state.addToHistory(action.payload);
            return state;
            break;

        case Consts.ACTIONS.LOG_OUT:
            state.logOut();
            return state;
            break;

        default:
            return state;
    }
}