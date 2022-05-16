 // Slide out

changePickupStoreMenu();

function assignSlideoutToTrigger(trigger, slideoutSelector){
    trigger.addEventListener("mouseover", function(){
        $(slideoutSelector).css("left", "-20%");
    } );
}

function addHidingAbilityToSlideout(listOfSlideouts){
    $(document).on('mouseout', ".design", function(el,i){
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
        var design1 = document.querySelector("#design1"),
        design2 = document.querySelector("#design2"),
        design3 = document.querySelector("#design3");
        
        // SLIDEOUTs
        var carmen =  "#carmen",
        crash = "#crash",
        kroger = "#kroger";
     
    
        /* slide menu right */
        assignSlideoutToTrigger(design1, carmen);
        assignSlideoutToTrigger(design2, crash);
        assignSlideoutToTrigger(design3, kroger);
    
    
        var allSlideouts = [carmen, crash, kroger]

    addHidingAbilityToSlideout(allSlideouts)
    /* hide active menu if close menu button is clicked */

 
}





