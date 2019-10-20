daysInmonthArray = [31,28,31,30,31,30,31,31,30,31,30,31];



//This files takes in the current month and year it then draws all the calendar days
// and sets the correct days in the correct places.

function createCalendar(){
    let cols = 5;
    let rows = 6;
    let j = 1;
    
/*
rather than drawing the whole array at once we create one week at a time so the array is in order

*/
    for (let k = 0; k <= cols; k++){
        if (k == 0){
            for (let i=0; i <= rows; i++){
                let tilex = i * 103;
                let tiley = j * 50; // off set work
                
                tiles.push(new Tile(tilex, tiley, this.width, this.width));    
            }
        }
/*
creates week 2
*/
        if(k == 1){
            for (i =0; i <= rows; i++) {
                let tilex = i * 103;
                let tiley = j * 203-50;
                
                tiles.push(new Tile(tilex, tiley, this.width, this.width));
            }
        }
    
        /*
creates week 3
*/
        if(k == 2){
            for (i =0; i <= rows; i++) {
                let tilex = i * 103;
                let tiley = j * 303-47;
                
                tiles.push(new Tile(tilex, tiley, this.width, this.width));
            }   
        } 
        
        /*
creates week 4
*/
        if(k == 3){
            for (i =0; i <= rows; i++) {
                let tilex = i * 103;
                let tiley = j * 403-44;
                
                tiles.push(new Tile(tilex, tiley, this.width, this.width));
            }   
        } 
        
        /*
creates week 5
*/
        if(k == 4){
            for (i =0; i <= rows; i++) {

                let tilex = i * 103;
                let tiley = j * 503-41;
                
                tiles.push(new Tile(tilex, tiley, this.width, this.width));

            }   
        } 
        
        if(k == 5){
            for (i =0; i <= rows; i++) {

                let tilex = i * 103;
                let tiley = j * 603-38;
                
                tiles.push(new Tile(tilex, tiley, this.width, this.width));

            }   
        } 
    }//main for loop
    

    createWeekDays();
    setDaysInMonth();
    
}


// This block of code puts the days above the columns of our calendar
function createWeekDays(){

let hcols = 7;
let hrows = 1;


for (let i = 0; i< hcols; i++){
    for (let j = 0; j < hrows; j++){
        let headerx = i * 104 + 20;
        let headery = j * 104 + 40;
        arr_Days.push(new DayOfWeek(headerx, headery, this.width, this.width))
    }
}



}


// function iterates through tiles[] setting the date on each day so it can be drawn
function setDaysInMonth(){
   i = 1;
 let dayone = firstDay();
    
   
    
    //console.log("this first day " + thisFirstDay.getDay());
 let daysInThisMonth = daysInMonth();
// z =  thisFirstDay.getDay();
//console.log("days in this month " +daysInThisMonth);
//    console.log("get day: " + z);
   // console.log(my_date.getMonth());
    
for (let x = dayone.getDay(); i <= daysInThisMonth; ++x){
    tiles[x].today = i;
    i++;
    }
    
 

}
