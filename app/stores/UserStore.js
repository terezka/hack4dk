import BaseStore from './BaseStore';
import Constants from 'constants';
let Actions = Constants.Actions;

class UserStore extends BaseStore {
    constructor() {
        super();
        this.subscribe(() => this._registerToActions.bind(this));
        let savedToken = localStorage.getItem('instagram_user_token');
        let token = (savedToken) ? savedToken : null;
        this._User = {
            token: token
        };
    }

    get user() {
        return this._User;
    }

    setUser(prop, value) {
        this._User[prop] = value;
    }

    authorizeUser(token) {
        this._User.token = token;
        localStorage.setItem('instagram_user_token', token);
    }

    unauthorizeUser() {
        this._User = {};
        localStorage.removeItem('instagram_user_token');
    }

    _registerToActions(action) {
        switch(action.type) {

        case Actions.RECEIVE_INSTAGRAM: 
            this.setUser(action.dataName, action.data);
            this.emitChange();
            break;

        case Actions.AUTHORIZE_USER:
            this.authorizeUser(action.token);
            this.emitChange();
            break;

        case Actions.UNAUTHORIZE_USER:
            this.unauthorizeUser();
            this.emitChange();
            break;

        default:
            break;
        };
    }
};

export default new UserStore();