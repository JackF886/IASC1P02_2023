/* Clock */

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Format the time as HH:MM:SS
    var formattedTime = padZero(hours) + ":" + padZero(minutes) + ":" + padZero(seconds);

    // Update the clock element
    document.getElementById("clock").textContent = formattedTime;
}

function padZero(value) {
    return value < 10 ? "0" + value : value;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial update when the page loads
updateClock();


/* Search Bar */

function searchText() {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();
    var content = document.getElementById("wrapper");
    var paragraphs = content.getElementsByTagName("p");
    var headers = content.getElementsByTagName("h3");
    var lists = content.getElementsByTagName("li");


    // Loop through paragraphs to find matches
    for (var i = 0; i < paragraphs.length; i++) {
        var paragraphText = paragraphs[i].textContent.toLowerCase();

        // Check if the paragraph contains the search term
        if (paragraphText.includes(searchTerm)) {
            // Highlight the matching text
            highlightText(paragraphs[i], searchTerm);
        } else {
            // Reset styling for non-matching paragraphs
            resetHighlight(paragraphs[i]);
        }
    }

    for (var j = 0; j < headers.length; j++) {
        var headerText = headers[j].textContent.toLowerCase();

        // Check if the paragraph contains the search term
        if (headerText.includes(searchTerm)) {
            // Highlight the matching text
            highlightText(headers[j], searchTerm);
        } else {
            // Reset styling for non-matching paragraphs
            resetHighlight(headers[j]);
        }
    }

    for (var k = 0; k < lists.length; k++) {
        var listText = lists[k].textContent.toLowerCase();

        // Check if the paragraph contains the search term
        if (listText.includes(searchTerm)) {
            // Highlight the matching text
            highlightText(lists[j], searchTerm);
        } else {
            // Reset styling for non-matching paragraphs
            resetHighlight(lists[j]);
        }
    }

}

function highlightText(element, term) {
    var innerHTML = element.innerHTML;
    var index = innerHTML.toLowerCase().indexOf(term);
    var highlightedHTML =
        innerHTML.substring(0, index) +
        "<span class='highlight'>" +
        innerHTML.substring(index, index + term.length) +
        "</span>" +
        innerHTML.substring(index + term.length);

    element.innerHTML = highlightedHTML;
}

function resetHighlight(element) {
    // Reset styling by removing the 'highlight' span
    element.innerHTML = element.textContent;
}


/* Progress Bar */

function startProgress() {
    var progressBar = document.getElementById("progress-bar");

    // Reset progress bar width
    progressBar.style.width = "0";

    // Start the progress animation
    animateProgressBar();
}

function animateProgressBar() {
    var progressBar = document.getElementById("progress-bar");

    // Set the duration of the progress animation (in milliseconds)
    var duration = 4000; // 5 seconds

    // Set the update interval for the progress animation (in milliseconds)
    var interval = 50;

    var start = null;
    function step(timestamp) {
        if (!start) start = timestamp;

        var progress = timestamp - start;
        progressBar.style.width = (progress / duration) * 100 + "%";

        if (progress < duration) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}

