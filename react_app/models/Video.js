class Video {
    constructor(vp = {}) {
        this.name = vp.name || null;
        this.url = vp.url || null;
        this.description = vp.description || null;
    }
}

export default Video;