import $ from 'jquery';
//import _ from 'lodash';
import ServerActions from 'actions/ServerActions.js';
import Constants from 'constants';
let Const = Constants.Various;

/*
let getInstagramToken = (userID) => {
	$.ajax({
		method: 'GET',
		url: Const.Instagram.tokenURL,
		dataType: 'jsonp',
		data: {
			client_id: Const.Instagram.clientID,
			redirect_uri: 'http://localhost:8080/instagram',
			response_type: 'token'
		},
		success: function(data) {
			console.log(data);
            ServerActions.RecieveInstagram(data, dataName);
        },
        error: function(error) {
        	console.log(error);
            ServerActions.ReceiveError(error);
        }
	})
}; */

let callInstagram = (query, dataName, token) => {
	console.log('token', token, Const.Instagram.URL, query)
	$.ajax({
		method: 'GET',
		url: Const.Instagram.URL+query,
		dataType: 'jsonp',
		data: {
			access_token: token
		},
		success: function(data) {
			console.log(data);
            ServerActions.RecieveInstagram(data, dataName);
        },
        error: function(error) {
        	console.log(error)
            ServerActions.ReceiveError(error);
        }
	});
};

export { callInstagram };