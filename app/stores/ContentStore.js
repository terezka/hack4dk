import BaseStore from './BaseStore';
import Constants from 'constants';
import _ from 'lodash';
let Actions = Constants.Actions;

class ContentStore extends BaseStore {
    constructor() {
        super();
        this.subscribe(() => this._registerToActions.bind(this));
        this._comments = [];
        this._pagination = false;
    }

    get comments() {
        return this._comments;
    }

    get pagination() {
        return this._pagination;
    }

    handleRetrival(response) {
        var comments = response.data.map((post, key) => {
            if (post.caption) {
                return post.caption;
            }
        });
        this._comments = this._comments.concat(_.compact(comments));
        this._pagination = response.pagination && response.pagination.next_url;
    }

    _registerToActions(action) {
        switch(action.type) {

        case Actions.ADD_COMMENTS:
            this.handleRetrival(action.response);
            this.emitChange();
            break;

        default:
            break;
        };
    }
};

export default new ContentStore();