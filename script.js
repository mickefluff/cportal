

function handleButton1() {
    window.location.href = "https://www.youtube.com/";
    document.getElementById("Button1").style.backgroundImage = "url('youtube.png')"; // Update with the path to the new image
}

function handleButton2() {
    window.location.href = "https://github.com/mickefluff";
    document.getElementById("Button2").style.backgroundImage = "url('github.png')"; // Update with the path to the new image
}

function handleButton3() {
    window.location.href = "https://fmoviesz.to/home";
    document.getElementById("Button3").style.backgroundImage = "url('fmovies.png')"; // Update with the path to the new image// Handle button 3 logic here
}

function handleButton4() {
    // Handle button 4 logic here
}

function handleKeyPress(event, engine) {
    if (event.key === 'Enter') {
        let query = event.target.value;
        if (engine === 'google') {
            window.open("https://www.google.com/search?q=" + query, "_blank");
        } else if (engine === 'brave') {
            window.open("https://search.brave.com/search?q=" + query, "_blank");
        }
    }
}