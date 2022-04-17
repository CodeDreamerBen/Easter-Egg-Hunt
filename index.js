window.alert("Welcome! Find easter eggs in this page. Click on it and answer a simple question correctly to collect the egg! You are require to scroll around the page to search the egg!")
		var easterEgg = document.getElementById("easterEgg");
		var score = 0;
		easterEgg.addEventListener("click", e => {
			var left = Math.floor(Math.random() * (5000 - 1 + 1) + 1)
			var top = Math.floor(Math.random() * (5000 - 1 + 1) + 1)
			easterEgg.style.left = left + "px";
            easterEgg.style.top = top + "px";
            var first = Math.floor(Math.random() * (100 - 1 + 1) + 1)
            var second = Math.floor(Math.random() * (100 - 1 + 1) + 1)
            var answer = window.prompt(`Answer this question to collect the egg: ${first} + ${second} = ?`)
			if(answer == first + second) {
				score++
				document.getElementById("score").innerText = score;
				window.alert("Correct! You just collected an egg!");
			} else {
				window.alert("Wrong! You failed to collect an egg!");
			}
		})