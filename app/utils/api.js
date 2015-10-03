import $ from 'jquery';
//import _ from 'lodash';
import ServerActions from 'actions/ServerActions.js';
import ContentActions from 'actions/ContentActions.js';
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

let getUserInfo = (query, dataName, token) => {
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

let getInstaVarious = (query, dataName, token) => {
	$.ajax({
		method: 'GET',
		url: query,
		dataType: 'jsonp',
		data: {
			access_token: token
		},
		success: function(data) {
			console.log(data);
            ContentActions.RetriveComments(data, dataName);
        },
        error: function(error) {
        	console.log(error)
            ServerActions.ReceiveError(error);
        }
	});
};

let getAagards = (query) => {
	$.ajax({
		method: 'GET',
		url: Const.Instagram.URL+query,
		dataType: 'jsonp',
		data: {
			access_token: token
		},
		success: function(data) {
			console.log(data);
        },
        error: function(error) {
        	console.log(error)
            ServerActions.ReceiveError(error);
        }
	});
};

let getSMK = (query, dataName) => {
	$.ajax({
		method: 'GET',
		url: Const.SMK.URL+query,
		dataType: 'json',
		success: function(data) {
			console.log(data);
        },
        error: function(error) {
        	console.log(error)
            ServerActions.ReceiveError(error);
        }
	});
};

export { getUserInfo, getInstaVarious, getSMK };