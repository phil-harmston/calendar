function mouseClicked(mouseX, mouseY) {
    // check if mouse was inside a tile

    if(mouse_click_count == 0){
       Event_Scheduler_Menu(); 
      
        for (let i = firstDay.getDay(); i < tiles.length; i++) {
            if(tiles[i].isUnderMouse(mouseX, mouseY)) {
                first = i;
                mouse_click_count = 1;
                tiles[i].changeColor('red');
                //console.log("First: " + first);
            }
        }
    }else{   
        for (let i = firstDay.getDay(); i < tiles.length; i++) {
            if (tiles[i].isUnderMouse(mouseX, mouseY)) {
                tiles[i].changeColor('red');
                second = i;
                mouse_click_count = 0;
                
                
                //console.log("Second: " + second);
            }
        }  
    }
    if ((first > 0) && (second > 0 )){
    fillCalendar(first, second);   
    }
    
}     


