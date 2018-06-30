var genres = ["rock", "blues", "pop", "hip-hop", "electro"];
var filter = [];

// MAKE FILTER BUTTONS

function makeFilterButtons() {
	for (j = 0; j < genres.length; j++) {
		document.getElementById("filterButtons").innerHTML += "<button onclick='filterSongs(\"" + genres[j] + "\")'>" + genres[j] + "</button>";
	}
}

// WHEN A FILTER BUTTON IS PRESSED, SHOW OR HIDE DIFFERENT GENRES

function filterSongs(a) {

	// IF IT DOESN'T EXIST IN FILTER LIST, ADD IT, IF IT DOES, REMOVE IT

	if (filter.indexOf(a) === -1) {
		filter.push(a);
	} else {
		filter.splice(filter.indexOf(a), 1);
	}

	// HIDE ALL RESULTS

	for (i = 0; i < genres.length; i++) {
		$("."+genres[i]+"").css("display", "none");
	}

	// ... THEN SHOW ONLY THOSE WITH FILTER "ON"

	for (j = 0; j < filter.length; j++) {
		$("."+filter[j]+"").css("display", "block");
	}
}