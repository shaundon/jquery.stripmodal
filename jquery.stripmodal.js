(function($){ 

   	var defaults = {  
   		action: 'show', 	
	   	type: 'alert',
	   	title: 'Alert!',
	   	text: ''
   	};

   $.fn.stripModal = function(options) {

	  var settings = $.extend({}, defaults, options);	  
	  
	  if (settings.action == "hide")     	
      	DismissModals();
      else
      	DisplayAlert(settings.type, settings.title, settings.text);
      	
   };

   
function DisplayAlert(type, title, text) {

	// Validate the type of modal.
	type = ValidateModalType(type);

	
	var html = "<div class='strip-modal-container " + (type) + "'>";		
	html += "<div class='strip-modal-inner'>";			
	html += "<div class='strip-modal-title'>";
	html += title;
	html += "</div>";				
	html +=			"<div class='strip-modal-text'>";
	html +=	text;
	html +=		"</div>";						
	html += "</div>";
	html += "</div>";
		
	// Remove any existing modals from the page.
	RemoveModals();
	
	// Make the overlay appear.
	CreatePageOverlay();
			
	// Add the new modal to the page.
	// It's initially invisible.
	$("body").append(html);
	
	// Make it visible.
	$(".strip-modal-container").animate({'marginTop': '0%'}, 250);

}

function CreatePageOverlay() {

	// If there's not already an overlay.
	if ($(".strip-modal-page-overlay").length == 0) {
	
		var html = "";
		html += "<div class='strip-modal-page-overlay' style='display:none;' onclick=\"$().stripModal({action:'hide'});\"></div>";
		
		// Add the overlay to the page.
		// It's initially invisible.
		$("body").append(html);
		
		// Make it visible.
		$(".strip-modal-page-overlay").fadeIn();
	}
}

function RemovePageOverlay() {
	
	$(".strip-modal-page-overlay").fadeOut(function () {
		
		$(this).remove();
	});
}

function RemoveModals() {
	
	$(".strip-modal-container").animate({'marginTop': '100%'}, 250, function() { 
	
		$(this).remove();
	 });
}

function DismissModals() {
	
	RemoveModals();
	RemovePageOverlay();
}

function ValidateModalType(typeParam) {

	var validatedType = "alert";
	
	switch (typeParam) {
		
		case "alert":
			validatedType = "alert";
			break;
		
		case "success":
			validatedType = "success";
			break;
			
		case "error":
			validatedType = "error";
			break;
			
		case "caution":
			validatedType = "caution";
			break;
			
		case "info":
			validatedType = "info";
			break;
			
		default:
			validatedType = "alert";
	}
	
	return validatedType;
}
   
   
   
}(jQuery));
