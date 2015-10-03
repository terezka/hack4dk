import { dispatch, dispatchAsync } from 'stores/_Dispatcher.js';
import Constants from 'constants';
let Actions = Constants.Actions;

export default {
	RetriveImages: (property, value) => {
		dispatch(Actions.ADD_IMAGE, {
			property: property,
			value: value
		});
	},
	RetriveComments: (response) => {
		dispatch(Actions.ADD_COMMENTS, {
			response: response,
		});
	}
}