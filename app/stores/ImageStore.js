import BaseStore from './BaseStore';
import Constants from 'constants';
let Actions = Constants.Actions;

class ImageStore extends BaseStore {
    constructor() {
        super();
        this.subscribe(() => this._registerToActions.bind(this));
        this._ImageURLs = [];
    }

    getImage(key) {
        return this._ImageURLs[key];
    }

    addImageURLs(urls) {
        this._ImageURLs.concat(urls);
    }

    _registerToActions(action) {
        switch(action.type) {

        case Actions.ADD_IMAGES:
            this.addImageURLs(action.urls);
            this.emitChange();
            break;

        default:
            break;
        };
    }
};

export default new ImageStore();