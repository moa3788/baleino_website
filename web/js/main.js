$(function(){
	Baleino.parse(document);
});

Baleino = {};
/*
 * Method used to parse a part of html and map event to it
 */
Baleino.parse = function(component){
	$(component).on("click", "[data-command]", function(){
		var command = $(this).data("command");
		var attrs = $(this).data();
		var params = {};
		var finder = "command_"+command+"_";
		console.log(attrs);
		for (var cle in attrs){
			if (cle.substring(0, finder.length) === finder){
				var key = cle.substring(finder.length);
				var value = attrs[cle];
				params[key] = value;
			}


		}
		console.log($(this));
		Baleino.command("popup", params);
	});
};
/*
 * Execute a command 
 */
Baleino.command = function(command, params){
	window["Baleino"][command](params);
};
/*
 * show a popup
 */
Baleino.popup = function(args){
	// text you get from Ajax
    var popupId = Baleino.uniqId();
    var content = '<div id="'+popupId+'"><div class="progress"><div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 100%"><span class="sr-only">Loading</span></div></div>';

    // Popup body - set width is optional - append button and Ajax msg
    var popup = $("<div/>", {
        "data-role": "popup"
    }).css({
        "width": $(window).width() - 30 + "px"
    }).append(content);
    
    // Append it to active page
    $("body").append(popup);

    $("[data-role=popup]")
    	.popup({
        "dismissible": false,
            "history": false,
            "overlayTheme": "a",
            "y": 15,
            "x":15
    }).popup("open");
        
    $.ajax({
    	url : args.url,
    	complete: function(response){
    		$('#'+popupId).html(response.responseText);
    	}
    });
    
};

/*
 * Create a unique id (used for new added elements
 */
Baleino.uniqId = function() {
  return Math.round(new Date().getTime() + (Math.random() * 100));
};