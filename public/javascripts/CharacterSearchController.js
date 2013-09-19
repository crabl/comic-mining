var CharacterSearchController = function() {

    this.characterSearch = function() {
	$.ajax({
	    url: "/logout",
	    type: "POST",
	    data: {logout : true},
	    success: function(data) {
		this.showLockedAlert('You are now logged out.<br>Redirecting you back to the homepage.');
	    },
	    error: function(jqXHR) {
		console.log(jqXHR.responseText+' :: '+jqXHR.statusText);
	    }
	});
    };

};
