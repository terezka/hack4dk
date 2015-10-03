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
        this._postKey = 0;
        this._commentKey = null;
    }

    get comment() {
        var currentPost = this._comments[this._postKey];
        var currentComment = currentPost && currentPost[this._commentKey];
        return (currentComment) ? currentComment : null;
    }

    get comments() {
        return this._comments;
    }

    get pagination() {
        return this._pagination;
    }

    get postKey() {
        return this._postKey;
    }

    handlePickComment(postKey, commentKey) {
        this._postKey = postKey;
        this._commentKey = commentKey;
    }

    handleRetrival(response) {
        var comments = response.data.map((post, key) => {
            if (post.caption || post.comments.data.length > 0) {
                return _.compact([post.caption].concat(post.comments.data));
            }
        });
        this._postKey = this._comments.length;
        this._comments = this._comments.concat(_.compact(comments));
        this._pagination = response.pagination && response.pagination.next_url;
    }

    _registerToActions(action) {
        switch(action.type) {

        case Actions.ADD_COMMENTS:
            this.handleRetrival(action.response);
            this.emitChange();
            break;

        case Actions.PICK_COMMENT:
            this.handlePickComment(action.postKey, action.commentKey);
            this.emitChange();
            break;

        default:
            break;
        };
    }
};

export default new ContentStore();