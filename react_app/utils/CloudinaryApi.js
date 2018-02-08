import axios from 'axios';
import CloudinaryApiError from './CloudinaryApiError';
import JSON5 from 'json5';

export default class CloudinaryApi {

    static _rootAPIUrl(path = '') {
        if (path.startsWith('http://') || path.startsWith('https://')) {
            return path;
        }
        return `${API_SERVER_URL}${path}`;
    }

    static _get(url) {
        let req =
            axios.get(this._rootAPIUrl(url))
                .then((res) => {
                    if (res && res.data && (typeof res.data === 'string' || res.data instanceof String)) {
                        res.data = JSON5.parse(res.data); //JSON returned from API may be misformatted, so use more advanced JSON parser
                    }
                    return res;
                })
                .catch((err) => {
                    throw new CloudinaryApiError(err.response);
                });
        return req;
    }

    static listVideos() {
        return this._get('/video-list-home-task.json');
    }

    static getVideo(url) {
        return this._get(url);
    }
}