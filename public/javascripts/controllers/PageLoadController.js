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
	var plcInstance = this;

	this.ajaxPostRequest(url, data, function(data) { 
          successCallback(data); 
          plcInstance.hidePageLoader(); 
        }, function(data) {
          failCallback(data);
          plcInstance.hidePageLoader(); 
        });

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
	var plcInstance = this;

        this.ajaxGetRequest(url, data, function(data) { 
            successCallback(data); 
            plcInstance.hidePageLoader(); 
        }, function(data) {
            failCallback(data);
            plcInstance.hidePageLoader();
        });
    };

    this.showPageLoader = function() {
	$("div#loader-dim").fadeIn();
	$("div#loader").fadeIn();
    };

    this.hidePageLoader = function() {
	$("div#loader-dim").fadeOut();
	$("div#loader").fadeOut();
    };

    
};
