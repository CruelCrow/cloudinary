class VideoPreview {
    constructor(vp = {}) {
        this.name = vp.name || null;
        this.url = vp.url || null;
        this.image = vp.image || null;
    }

    get videoDataUrlEncoded() {
        return btoa(this.url);
    }
}

export default VideoPreview;