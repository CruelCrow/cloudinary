class Video {
    constructor(v = {}) {
        this.name = v.name || null;
        this.url = v.url || null;
        this.description = v.description || null;
    }
}

export default Video;