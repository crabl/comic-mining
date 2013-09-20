var CharacterSearchController = function() {
    this.showSearchResults = function(data) {
	for(i = 0; i < data.number_of_page_results; i++) {
	    $('div#results').append('<div>'
	    +'<h2>'+data.results[i].name+'</h2>'
	    +'<img class="search-icon-image" src="'+data.results[i].image.icon_url+'" />'
	    +'<p>Real Name: '+data.results[i].real_name+'</p>'
            +'<p>Appears in <strong>'+data.results[i].count_of_issue_appearances+'</strong> issues</p>'
            +'<p>First appeared in issue <a href="/issue/'+data.results[i].first_appeared_in_issue.id+'">"'+data.results[i].first_appeared_in_issue.name+'"</a></p>'
	    +'</div>');
	}
    };
};
