import KeyMirror from 'keymirror';

let redirect_uri = encodeURIComponent('http://localhost:3000/instagram_token');

let Constants = {
	Actions : KeyMirror({
		UPDATE_IMAGE : null,
		RECEIVE_INSTAGRAM: null,
		ADD_COMMENTS: null,
		RECEIVE_ERROR: null,

		AUTHORIZE_USER: null,
		UNAUTHORIZE_USER: null
	})
};

Constants.ColumnWidth = 230;
Constants.Various = {
	Instagram: {
		URL: 'https://api.instagram.com/v1/',
		authURL: `https://api.instagram.com/oauth/authorize/?client_id=e69ed6c34abd4551b9ddeb22a233936b&redirect_uri=${redirect_uri}&response_type=token`,
		clientID: 'e69ed6c34abd4551b9ddeb22a233936b',
		selfURL: 'https://api.instagram.com/v1/users/{user-id}/?access_token=',
		searchURL: 'https://api.instagram.com/v1/media/search?'
	},
	SMK: {
		URL: 'http://solr.smk.dk:8080/solr/prod_all_dk/select'
	}
}

export default Constants;