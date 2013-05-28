jquery.stripmodal
=================

A jQuery plugin for displaying various types of modal messages as a stripe across the screen.

index.html contains an example of how to call the plugin (it's embedded in a script element near the top of the page).

However, some basic instructions:

$().stripModal({
	type: "alert type",
	title: "Title to use",
	text: "Text to display"
});

The possible values for the parameters are:

* action: (show|hide). If 'hide', it will cause the modal strip to be dismissed. Otherwise, 'show' is used as the default. Currently 'hide' is used when clicking the white overlay that appears when the strip is on screen.

* type: (alert|success|error|caution|info). Each of these refers to a different coloured strip. The colours are grey, green, red, orange and blue respectively. The default is alert (grey).

* title: The text to display for the title.

* text: The text to display.

It's not currently possible (by design) to have more than one modal on screen at once. If you call the plugin while a modal is already displayed, the current one will first be dismissed.
