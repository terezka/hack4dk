import { dispatch, dispatchAsync } from 'stores/_Dispatcher.js';
import Constants from 'constants';
let Actions = Constants.Actions;

let ServerActions = {
	RecieveInstagram: function(res, dataName) {
		dispatch(Actions.RECEIVE_INSTAGRAM, {
			dataName: dataName,
			data: res.data
		});
	},
	ReceiveError: function(error) {
		dispatch(Actions.RECEIVE_ERROR, {
			error: error
		});
	},
	RecieveUser: function(token) {
		dispatch(Actions.AUTHORIZE_USER, {
			token: token
		});
	}
}

export default ServerActions;
