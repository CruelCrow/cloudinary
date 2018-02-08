class VideoPreview {
    constructor(vp = {}) {
        this.name = vp.name || null;
        this.videoDataUrl = vp.url || null;
        this.imageUrl = vp.image || null;
    }

    get videoDataUrlEncoded() {
        return btoa(this.videoDataUrl);
    }
}

export default VideoPreview;