console.log("Git LOC running...");

var cs_loc = 0;
setTimeout(function() {
	var allTitles = document.getElementsByTagName("A");

	for(var i=0; i < allTitles.length; i++) {
		var a = allTitles[i];
		var len = a.title.length;

		if(a.title.includes(".cs", len-3)) {
			//console.log(a.title);
			var start = a.parentElement.children[1].getAttribute("aria-label").indexOf(":")+1;
			var end = a.parentElement.children[1].getAttribute("aria-label").indexOf("addition");
			var final = a.parentElement.children[1].getAttribute("aria-label").slice(start, end);
			cs_loc = cs_loc + parseInt(final);
		}
	}
	console.log("C# LOC: " + cs_loc);
}, 3000)


