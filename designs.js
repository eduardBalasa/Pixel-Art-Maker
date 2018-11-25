// Select canvas table
let tableEl = $("#pixel_canvas");

let isDown = false; // mouse is clicked and not released yet

// When size is submitted by the user, call makeGrid()
$("#sizePicker").children().last().click(function makeGrid(evt){
	evt.preventDefault(); // stop submitting data
	// Select size input
	let height = $("#input_height").val();
	let width = $("#input_width").val();
	if(height > 20) height = 20;
	if(width > 100) width = 100;

	tableEl.children().each(function(){
		$(this).remove();
	});

	for(let i = 0; i < height; i++){
		tableEl.append("<tr></tr>");
	}

	tableEl.children().each(function(){
		for(let j = 0; j < width; j++){
			$(this).append("<td> </td>");
		}
	});

	$("td").on("mousedown",function(e){
		$(this).css("background-color", $("#colorPicker").val());
		e.preventDefault();
		isDown = true;
	});

	$("body").on("mouseup",function(e){ // event on body for if the mousedown inside table and the mouseup outside table
		isDown = false;
	});

	$("td").on("mouseover",function(e){
		if(isDown){
			$(this).css("background-color", $("#colorPicker").val());
		}
	});

	$("td").on("dblclick", function() { // erase color on double click
	$(this).css("background-color", "white");
	});

});
