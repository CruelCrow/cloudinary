import {Consts} from './../constants';

export default {
    [Consts.ACTIONS.ADD_VIDEO_TO_HISTORY]: function(video) {
        return {
            type: Consts.ACTIONS.ADD_VIDEO_TO_HISTORY,
            payload: video
        }
    },

    [Consts.ACTIONS.LOG_OUT]: function() {
        return {
            type: Consts.ACTIONS.LOG_OUT
        }
    }
}