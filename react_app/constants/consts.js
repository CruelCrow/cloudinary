const Constants = {
    CLOUDINARY_API_ERRORS: {
        ERR_NETWORK: -1,
        ERR_GENERIC: 0,
    },

    CLOUDINARY_API_ERROR_MESSAGES: {
        '-1': 'Network error',
        '0': 'Unknown error',
        '404': 'Resource not found',
        '500': 'Server error'
        //TODO: more errors should be here
    },

    ACTIONS: {
        START_LOADING: Symbol(),
        END_LOADING: Symbol(),

        LIST_VIDEOS: Symbol(),
        GET_VIDEO: Symbol(),
        CLEAR_VIDEO: Symbol()
    }
};

export default Constants;
