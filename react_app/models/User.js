/**
 * A sample class for a user: it will only store user history of videos
 */
class User {
    constructor(u = {}) {
        this.name = u.name || null;

        this.addToHistory = this.addToHistory.bind(this);
        this.clearHistory = this.clearHistory.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    get history() {
        let history = JSON.parse(localStorage.getItem('userHistory'));
        if (!history) history = {};
        return history;
    }

    addToHistory(videoPreview) {
        let history = this.history;
        history[Date.now()] = videoPreview;
        localStorage.setItem('userHistory', JSON.stringify(history));
    }

    clearHistory() {
        localStorage.removeItem('userHistory');
    }

    logOut() {
        this.clearHistory();
    }

    static get currentUser() {
        if (User._currentUser) return User._currentUser;
        this._currentUser = new User({name: 'John Doe'});
        return User._currentUser;
    }
}

export default User;