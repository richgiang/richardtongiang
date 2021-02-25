document.addEventListener('wheel', function(e) {
    e.preventDefault();
    let scrollElem = $('.scrolling-wrapper-flexbox');
    let elemScrollPosition = scrollElem.scrollLeft(); // Get the current position of the scrolling element
    let updatedScrollPosition = elemScrollPosition + e.deltaY; // Add the delta from mouse wheel to current scroll position
    scrollElem.scrollLeft(updatedScrollPosition); // Update the scroll value of the element
    console.log('Mouse scroll: ', e.deltaY, "Scroll Position: ", updatedScrollPosition);
}, { passive: false });

let parallaxIntensity = -2.5;
let parallaxSelector = '.portfolio-image'

document.addEventListener('wheel', function(e) {
    e.preventDefault();
    let scrollElem = $('.scrolling-wrapper-flexbox');
    let elemScrollPosition = scrollElem.scrollLeft(); // Get the current position of the scrolling element
    let updatedScrollPosition = elemScrollPosition + e.deltaY; // Add the delta from mouse wheel to current scroll position
    scrollElem.scrollLeft(updatedScrollPosition); // Update the scroll value of the element
    // console.log('Mouse scroll: ', e.deltaY, "Scroll Position: ", updatedScrollPosition);

    // Everytime we scroll compute and translate for parallax effect
    $(parallaxSelector).each(function() {
        customParallax(this, e.deltaY);
    });

}, { passive: false });

$('document').ready(function() {
    // Go over all parallax elements and keep track of how much we have translated
    $(parallaxSelector).each(function() {
        $(this).attr('data-translate', 0); // sets 
    });
});

function customParallax(selector, deltaY) {
    let elementPosition = $(selector).offset().left;
    var isElementVisible = elementPosition < window.innerWidth && elementPosition > -$(selector).width();

    if (isElementVisible) {
        let currTranslate = parseFloat($(selector).attr('data-translate')); // Get the current translation
        let translateOffset = parallaxIntensity * Math.sign(deltaY);
        let newHorizTranslate = currTranslate + translateOffset; // Add offset to this
        let newVertTranslate = 0; // Set this to zero if you don't want vertical parallax
        $(selector).css('transform', `translate(${newHorizTranslate}px, ${newVertTranslate}px)`);
        $(selector).attr('data-translate', newHorizTranslate); // Store the current translation for track keeping back in data-translate
    } else {
        // $(this).attr('data-translate', 0); // If element is not in view reset the translatation
    }
}



