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
        dish3 = document.querySelector("#dish3"),
        dish4 = document.querySelector("#dish4"),
        dish5 = document.querySelector("#dish5"),
        dish6 = document.querySelector("#dish6");
        
        // SLIDEOUTs
        var designs =  "#designs",
        ideas = "#ideas",
        aboutMe = "#about-me",
        resume = "#resume",
        finishFood = "#finish-food";
     
    
        /* slide menu right */
        assignSlideoutToTrigger(dish1, designs);
        assignSlideoutToTrigger(dish3, ideas);
        assignSlideoutToTrigger(dish4, aboutMe);
        assignSlideoutToTrigger(dish5, resume);
        assignSlideoutToTrigger(dish6, finishFood);
    
    
        var allSlideouts = [designs, ideas, aboutMe, resume, finishFood]

    addHidingAbilityToSlideout(allSlideouts)
    /* hide active menu if close menu button is clicked */

 
}





