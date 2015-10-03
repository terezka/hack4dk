import { dispatch, dispatchAsync } from 'stores/_Dispatcher.js';
import Constants from 'constants';
let Actions = Constants.Actions;

let UserActions = {
	RecieveUser: function(token) {
		dispatch(Actions.AUTHORIZE_USER, {
			token: token
		});
	},
	logoutUser: function(token) {
		dispatch(Actions.UNAUTHORIZE_USER, {});
	}
}

export default UserActions;
