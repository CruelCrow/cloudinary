import {Consts} from './../constants';
import {VideoPreview, Video} from './../models';
import extend from './../utils/extend';

const initialState = {
    errorList: null,
    errorVideo: null,

    listOfVideos: [],
    currentVideo: null
};

export default function (state = initialState, action) {
    switch (action.type) {

        case Consts.ACTIONS.LIST_VIDEOS:
            if (action.error) {
                return extend({}, state, {
                    errorList: action.payload,
                    listOfVideos: []
                });
            } else {
                return extend({}, state, {
                    errorList: null,
                    listOfVideos: action.payload.data.map(v => new VideoPreview(v))
                });
            }
            break;

        case Consts.ACTIONS.GET_VIDEO:
            if (action.error) {
                return extend({}, state, {
                    errorVideo: action.payload,
                    currentVideo: null
                });
            } else {
                return extend({}, state, {
                    errorVideo: null,
                    currentVideo: new Video(action.payload.data)
                });
            }
            break;

        case Consts.ACTIONS.CLEAR_VIDEO:
            return extend({}, state, {
                errorVideo: null,
                currentVideo: null
            });
            break;

        default:
            return state;
    }
}