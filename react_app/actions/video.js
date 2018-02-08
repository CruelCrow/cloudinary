import {Consts} from './../constants';
import CloudinaryApi from './../utils/CloudinaryApi';
import rootStore from './../utils/application_store';
import actions from "./index";
import VideoPreview from "../models/VideoPreview";

export default {
    [Consts.ACTIONS.LIST_VIDEOS]: function() {
        let request = CloudinaryApi.listVideos();

        return {
            type: Consts.ACTIONS.LIST_VIDEOS,
            payload: request
        }
    },

    [Consts.ACTIONS.GET_VIDEO]: function(url) {
        let videoPreview = new VideoPreview({url: url});
        let request = CloudinaryApi.getVideo(videoPreview.url);
        request.then((res)=>{
            if (res && res.data) {
                videoPreview.name = res.data.name;
                rootStore.dispatch(actions[Consts.ACTIONS.ADD_VIDEO_TO_HISTORY](videoPreview));
            }
        });

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