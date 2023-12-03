/* CSS Animations */
document.getElementById("startAnimationButton").addEventListener("click", function() {
    var element = document.getElementById("ani-1");

    // Add the 'slide-animation' class to trigger the CSS animation
    element.classList.add("slide-animation");

    // Remove the 'slide-animation' class after the animation completes
    setTimeout(function() {
        element.classList.remove("slide-animation");
    }, 3000); // Adjust the timeout to match the duration of the CSS animation
});

document.getElementById("startAnimationButton2").addEventListener("click", function() {
    var element = document.getElementById("ani-2");

    // Add the 'slide-animation' class to trigger the CSS animation
    element.classList.add("grow-slide");

    // Remove the 'slide-animation' class after the animation completes
    setTimeout(function() {
        element.classList.remove("grow-slide");
    }, 3000); // Adjust the timeout to match the duration of the CSS animation
});

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