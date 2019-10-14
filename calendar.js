// this is the object constructor for the tiles
// representing the days of the month
var Tile = function(x,y){
    this.x = x;
    this.y = y;
    this.width = 100;
    this.today = "";
    this.event = "";
    
}

// This is the object constructor for the days of the week at the
// top of the calendar
var DayOfWeek = function(x,y){
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 20;
}
// empty array of tiles
let tiles = [];

// track mouse clicks
let mouse_click_count = 0;

// Build some date vars for use later
let my_date = new Date();
let day_of_week = my_date.getDay()

// This returns the first day of given month.
let firstDay = new Date(my_date.getFullYear(), my_date.getMonth(), 1);

// lastDay is the last day of the month
let lastDay = new Date(my_date.getFullYear(), my_date.getMonth()+1, 0);

// this_month is the current month
let this_month = my_date.getMonth() + 1;

// this year is the current year
let this_year = my_date.getYear() + 1900;

//console.log("month: " + this_month + " year: " + this_year)
//console.log("Days in this month:"  + daysInMonth(this_month, this_year))


//function to return the number of days in a given month.
function daysInMonth(month, year){
    return new Date(year, month, 0).getDate();  
}

// function iterates through tiles[] setting the date on each day so it can be drawn
function setDaysInMonth(){
   i=0;
    for(let x = firstDay.getDate(); i <= daysInMonth(this_month, this_year); x++){
       tiles[x].today = i;
       i++;
   }

}


//console.log(day_of_week)

// Draws the calendar
Tile.prototype.draw = function(x, y, i){
    // if statement draws a different color for days not in month
    if (this.today ==""){
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.strokeStyle="green";
        this.today = "";
        ctx.rect(this.x,this.y,this.width, this.width);
   
    }else{
    //console.log(this.today);
    
    // draws all other days in month a different color
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.strokeStyle="black";
        ctx.font = "24px Arial";
        
        ctx.fillText(this.today, x+70, y+20);
        ctx.rect(this.x,this.y,this.width, this.width);
    }     
    ctx.stroke();   
}

// function is called on mouse click needs to be completed
Tile.prototype.changeColor = function(color){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.rect(this.x,this.y,this.width, this.width);
    ctx.stroke();
}

// function takes three params posx, posy, index used by case to fill the
// correct day.
DayOfWeek.prototype.draw = function(x ,y, index){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.font = "14px Arial";
    switch (index){
        case 0:
            ctx.fillText("Sunday", x, y);
            break;
        case 1:
            ctx.fillText("Monday", x, y);
            break;
        case 2:
            ctx.fillText("Tuesday", x, y); 
            break;
        case 3:
            ctx.fillText("Wednesday", x, y); 
            break;
        case 4:
            ctx.fillText("Thursday", x, y);
            break;
        case 5:
            ctx.fillText("Friday", x, y); 
            break;
        case 6:
            ctx.fillText("Saturday", x, y);        
    }    
}




///////////////////////////////////////////////////////////////////////////////
// This block of code puts the days above the columns of our calendar
let arr_Days =[];
let hcols = 7;
let hrows = 1;

// var j needs to be global to draw the board
for (let i = 0; i< hcols; i++){
    for (var j = 0; j < hrows; j++){
        let headerx = i * 104 + 20;
        let headery = j * 104 + 40;
        arr_Days.push(new DayOfWeek(headerx, headery, this.width, this.width))
    }
}


for (var i =0; i < arr_Days.length; i++){
    arr_Days[i].draw(arr_Days[i].x, arr_Days[i].y, i);
    
}

////////////////////////////////////////////////////////////////////////////////////////


let cols = 4;
let rows = 6;

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
                var tilex = i * 103;
                var tiley = j * 203-50;
                tiles.push(new Tile(tilex, tiley, this.width, this.width));
            }
        }
      
        if(k == 2){
            for (i =0; i <= rows; i++) {
                var tilex = i * 103;
                var tiley = j * 303-47;
                tiles.push(new Tile(tilex, tiley, this.width, this.width));
            }   
        } 
        if(k == 3){
            for (i =0; i <= rows; i++) {
                var tilex = i * 103;
                var tiley = j * 403-44;
                tiles.push(new Tile(tilex, tiley, this.width, this.width));
            }   
        } 
        if(k == 4){
            for (i =0; i <= rows; i++) {

                var tilex = i * 103;
                var tiley = j * 503-41;
                tiles.push(new Tile(tilex, tiley, this.width, this.width));

            }   
        } 
    }//main for loop
    
// now we can draw the array passing i to the draw function to see if the day is in the
// current month.
    setDaysInMonth();
    for (var i = 0; i < tiles.length; i++){
    tiles[i].draw(tiles[i].x, tiles[i].y, i);
    }
//////////////////////////////////////////////////////////////////////////////////////






function Event_Scheduler_Menu(){
    document.getElementById("myForm").style.display = "block";
}

function closeForm(){
    document.getElementById("myForm").style.display = "none"
}

Tile.prototype.isUnderMouse = function(x,y){
    return x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.width;  
}

//report the mouse position on click
myCanvas.addEventListener("click", function (evt) {
    var mousePos = getMousePos(myCanvas, evt);
    //console.log(mousePos.x + ',' + mousePos.y);
    mouseClicked(mousePos.x, mousePos.y)
}, false);

//Get Mouse Position
function getMousePos(canvas, evt){
    var rect = myCanvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    }
}


function mouseClicked(mouseX, mouseY) {
    // check if mouse was inside a tile
    if(mouse_click_count == 0){
       Event_Scheduler_Menu(); 
      
        for (let i = 0; i < tiles.length; i++) {
            if(tiles[i].isUnderMouse(mouseX, mouseY)) {
                let start_day = tiles[i].today;
                document.getElementById("start_date").value =  this_month + "/" + start_day + "/" + this_year;
                tiles[i].changeColor("red");
                mouse_click_count = 1;  
            }
        }
    }else{   
        for (let i = 0; i < tiles.length; i++) {
            if (tiles[i].isUnderMouse(mouseX, mouseY)) {
                let start_day = tiles[i].today;
                document.getElementById("end_date").value =  this_month + "/" + start_day + "/" + this_year;
                tiles[i].changeColor("blue");
                mouse_click_count = 0;      
            }
        }  
    }
   
    }

