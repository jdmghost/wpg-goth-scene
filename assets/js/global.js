function toggleNavigation() {
    let navModal = document.querySelector('.header__nav__modal');
    let navButton = document.querySelector('#siteNavToggle');
    let state = navButton.getAttribute("aria-expanded");

    if (state == "true") {
        state = "false"
    } else {
        state = "true"
    }

    navButton.setAttribute("aria-expanded", state);
    navModal.classList.toggle('open');
}

window.addEventListener('DOMContentLoaded', () => {
    let navButton = document.querySelector('#siteNavToggle');

    // Execute toggleNavigation() function on menu button click
    navButton.addEventListener("click", function () {
        toggleNavigation();
    });

    // Close navigation menu when:
    // - its open and clicked outside of
    // - its open and focus is not on it 
    // - its open and the escape key is hit 

    document.addEventListener("click", (event) => {
        let state = navButton.getAttribute("aria-expanded");

        if (event.target == navButton) {
            // do nothing
        } else if (
            !event.target.classList.contains("header__nav__modal") 
            && !event.target.offsetParent.classList.contains("header__nav__modal")
            && !event.target.parentElement.classList.contains("header__nav__modal")
            && state == "true"
        ) {
            toggleNavigation();
        }
    });

    document.addEventListener("keyup", (event) => {
        let navButton = document.querySelector('#siteNavToggle');
        let state = navButton.getAttribute("aria-expanded");

        if ( state == "true" && event.key == "Escape" ) {
            toggleNavigation();
        } else if (event.target == navButton) {
            // do nothing
        } else if (
            state == "true" 
            && event.key == "Tab" 
            && !event.target.offsetParent.classList.contains("header__nav__modal") 
        ) {
            toggleNavigation();
        }
    });
});