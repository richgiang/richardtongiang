 // Slide out

changePickupStoreMenu();

function assignSlideoutToTrigger(trigger, slideoutSelector){
    trigger.addEventListener("mouseover", function(){
        $(slideoutSelector).css("left", "-25%");
    } );
}

function addHidingAbilityToSlideout(listOfSlideouts){
    $(document).on('mouseout', ".dish", function(el,i){
        for (var i=0; i < listOfSlideouts.length; i++){
            $(listOfSlideouts[i]).css("left", "-50%");
        }
    });

}

function changePickupStoreMenu(){
    var toggleSlideLeft;
    var body = $('body'),
    mask = $('<div class="mask"></div>');

        // ICON/TRIGGER
        var dish1 = document.querySelector("#dish1"),
        dish2 = document.querySelector("#dish2"),
        dish3 = document.querySelector("#dish3"),
        dish4 = document.querySelector("#dish4"),
        dish5 = document.querySelector("#dish5");
        
        // SLIDEOUTs
        var whyIdeo =  "#why-ideo",
        whyStorytelling = "#why-storytelling",
        aboutMe = "#about-me",
        relevantWork = "#work",
        demonstration = "#demonstration";
     
    
        /* slide menu right */
        assignSlideoutToTrigger(dish1, whyIdeo);
        assignSlideoutToTrigger(dish2, whyStorytelling);
        assignSlideoutToTrigger(dish3, aboutMe);
        assignSlideoutToTrigger(dish4, relevantWork);
        assignSlideoutToTrigger(dish5, demonstration);

    
    
        var allSlideouts = [whyIdeo, whyStorytelling, aboutMe, relevantWork, demonstration]

    addHidingAbilityToSlideout(allSlideouts)
    /* hide active menu if close menu button is clicked */

 
}





