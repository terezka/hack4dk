import BaseStore from './BaseStore';
import Constants from 'constants';
let Actions = Constants.Actions;

class ImageStore extends BaseStore {
    constructor() {
        super();
        this.subscribe(() => this._registerToActions.bind(this));
        this._comments = [];
    }

    getComments() {
        return this._comments;
    }

    handleRetrival(data) {
        this._comments = data;
    }

    _registerToActions(action) {
        switch(action.type) {

        case Actions.RECEIVE_INSTAGRAM:
            this.handleRetrival(action.data);
            this.emitChange();
            break;

        default:
            break;
        };
    }
};

export default new ImageStore();