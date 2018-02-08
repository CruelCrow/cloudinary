import {Consts} from './../constants';

export default class CloudinaryApiError {
    constructor(response) {
        if (!response.data && !response.status) { //network error
            this._errorCode = Consts.CLOUDINARY_API_ERRORS.ERR_NETWORK;
        } else {
            this._errorCode = response.status;
        }
        this._errorText = Consts.CLOUDINARY_API_ERROR_MESSAGES[this._errorCode.toString()];
        if (!this._errorText) this._errorText = Consts.CLOUDINARY_API_ERROR_MESSAGES[Consts.CLOUDINARY_API_ERRORS.ERR_GENERIC.toString()];
    }

    get errorCode() {
        return this._errorCode;
    }

    get errorText() {
        return this._errorText;
    }

    toString() {
        return this.errorText;
    }
}