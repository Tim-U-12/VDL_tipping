function updateSection(color) {
    let blueSection = document.getElementById('blueSection')
    let purpleSection = document.getElementById('purpleSection')
    let redSection = document.getElementById('redSection')

    if (color) {
        let key = color + "Clicks";
        let currentClicks = localStorage.getItem(key) || 0;
        currentClicks = parseInt(currentClicks) + 1;
        localStorage.setItem(key, currentClicks);
    }

    let blueClicks = getClicks('blue');
    let purpleClicks = getClicks('purple');
    let redClicks = getClicks('red');

    let totalClicks = blueClicks + purpleClicks + redClicks;

    blueSection.style.width = (blueClicks/totalClicks) * 100 + "%";
    purpleSection.style.width = (purpleClicks/totalClicks) * 100 + "%";
    redSection.style.width = (redClicks/totalClicks) * 100 + "%";

    // There is only one section
    let sections = [blueClicks, purpleClicks, redClicks]
    adjustSingleButtonStyling(sections)
    
    // Purple and any other colour
    if (purpleClicks > 0 && blueClicks > 0 && redClicks < 1) {
        purpleSection.classList.add('rightRounded')
    } else {
        purpleSection.classList.remove('rightRounded')
    }

    if (purpleClicks > 0 && redClicks > 0 && blueClicks < 1) {
        purpleSection.classList.add('leftRounded')
    } else {
        purpleSection.classList.remove('leftRounded')
    }
      
}

function adjustSingleButtonStyling (sections) {
    let nonZeroSections = sections.filter(clicks => clicks > 0).length;

    let sectionElements = document.querySelectorAll('.section');

    sectionElements.forEach(element => {
        if (nonZeroSections === 1 && parseInt(element.style.width) > 0) {
            element.classList.add('singleSection')
        } else {
            element.classList.remove('singleSection')
        }
    })

}

function getClicks(color) {
    return parseInt(localStorage.getItem(color + "Clicks") || 0);
}

updateSection();
