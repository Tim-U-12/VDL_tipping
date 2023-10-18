function updateSection(color) {
    if (color) {
        let key = color + "Clicks"
        let currentClicks = localStorage.getItem(key) || 0;
        currentClicks = parseInt(currentClicks) + 1;
        localStorage.setItem(key, currentClicks);
    }

    let blueClicks = getClicks('blue');
    let drawClicks = getClicks('white');
    let greyClicks = getClicks('grey');

    let totalClicks = blueClicks + drawClicks + greyClicks;

    document.getElementById('blueSection').style.width = (blueClicks/totalClicks) * 100 + "%";
    document.getElementById('drawSection').style.width = (drawClicks/totalClicks) * 100 + "%";  // Notice 'drawClicks' instead of 'whiteClicks'
    document.getElementById('greySection').style.width = (greyClicks/totalClicks) * 100 + "%";
}

function getClicks(color) {
    return parseInt(localStorage.getItem(color + "Clicks") || 0);
}

updateSection();  // Initialize the widths based on stored counts
