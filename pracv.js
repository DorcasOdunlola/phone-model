




		// forcalls.style.display = "none";


		// let d = new Date();
		// displaydate.innerHTML = d.toDateString();

		displayy.style.display = "none";

		function displayMe() {
			displayy.style.display = "block"; 
		}


		

		function generate() {
			var array = [];
	
			// result.innerHTML = " ";

			if (nocard.value == "" && selectcard.value == "Select Card" && amount.value == "Select Amount") {
				alert("Please fill out the empty spaces");
			}
				
			for (var i = 0; i < nocard.value; i++) {
					var divDiv = document.createElement("div");	
					var anotherdiv = document.createElement("div");
					var myText = selectcard.value + amount.value;
					var textFormFF = document.createTextNode(myText);												
				if (selectcard.value == "MTN") {
				 	for (var j = 0; j < 17; j++) {
				 		
				 		var b = Math.floor(Math.random() * 10);	
				 		
				 		var textFormF = document.createTextNode(b);


				 		divDiv.appendChild(textFormF);
				 		anotherdiv.appendChild(textFormFF);
				 		console.log(b);
				 		// localStorage.setItem("NO", JSON.stringify(obj));

				 	} 
				}
					// array.push(obj);
				 	// localStorage.setItem("Another", JSON.stringify(array));
	
				document.querySelector("#result").appendChild(anotherdiv);
				document.querySelector("#result").appendChild(divDiv);				 	
			}
		}

		// function displayCall() {
		// 	forcalls.style.display = "block";
	
		// }

		// function goBack() {
		// 	forcalls.style.display = "none";
		// }

		// function showNumbers(num) {
		// 	displaynumber.value += num;

		// }


		// function deleteMe() {
		// 	displaynumber.value = displaynumber.value.substr(0,displaynumber.value.length-1)
		// }