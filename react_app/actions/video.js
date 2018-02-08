import {Consts} from './../constants';
import CloudinaryApi from './../utils/CloudinaryApi';

export default {
    [Consts.ACTIONS.LIST_VIDEOS]: function() {
        let request = CloudinaryApi.listVideos();

        return {
            type: Consts.ACTIONS.LIST_VIDEOS,
            payload: request
        }
    },

    [Consts.ACTIONS.GET_VIDEO]: function(url) {
        let request = CloudinaryApi.getVideo(url);

        return {
            type: Consts.ACTIONS.GET_VIDEO,
            payload: request
        }
    },

    [Consts.ACTIONS.CLEAR_VIDEO]: function() {
        return {
            type: Consts.ACTIONS.CLEAR_VIDEO
        }
    }
}