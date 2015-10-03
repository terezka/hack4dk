import { dispatch, dispatchAsync } from 'stores/_Dispatcher.js';
import Constants from 'constants';
let Actions = Constants.Actions;

export default {
	RetriveImages: (property, value) => {
		dispatch(Actions.UPDATE_IMAGE, {
			property: property,
			value: value
		});
	}
}