var PageLoadController = function() {
    this.ajaxPostRequest = function(url, data, successCallback, failCallback) {
	$.ajax({
	    url: url,
	    type: 'POST',
	    data: data,
	    success: function(data){
		successCallback(data);
	    },
	    error: function(jqXHR) {
		failCallback(jqXHR);
	    }
	});
    };

    this.ajaxPostLoader = function(url, data, successCallback, failCallback) {
	this.showPageLoader();
	this.ajaxPostRequest(url, data, successCallback, failCallback);
	this.hidePageLoader();
    };
    
    this.ajaxGetRequest = function(url, data, successCallback, failCallback) {
	$.ajax({
	    url: url,
	    type: 'GET',
	    data: data,
	    success: function(data) {
		successCallback(data);
	    },
	    error: function(jqXHR) {
		failCallback(jqXHR);
	    }
	});
    };

    this.ajaxGetLoader = function(url, data, successCallback, failCallback) {
	this.showPageLoader();
	this.ajaxGetRequest(url, data, successCallback, failCallback);
	this.hidePageLoader();
    };

    this.showPageLoader = function() {

    };

    this.hidePageLoader = function() {

    };

    
};
