    var c = document.getElementById("myCanvas");
    var HEIGHT = c.height;
    var WIDTH = c.width;
    var draw = c.getContext('2d');
    //var ctx = c.getContext("2d");

// this is the object constructor for the tiles
// representing the days of the month
var Tile = function(x,y){
    this.x = x;
    this.y = y;
    this.width = 100;
    this.today = "";
    this.event = [];
    this.selected = false;
    this.clickposition = '';
    this.color = "";
    this.eventID = 0;
    
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
 var tiles = [];

var arr_Days =[];

var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";


// track mouse clicks
let mouse_click_count = 0;

// used for click events don't remove them
let first;
let second;

// Build some date vars for use later
let my_date = new Date();


//Dont this this gets used
function day_of_week(){
    return my_date.getDay();
}


// This returns the first day of given month.
// used in mouseevent.js and createcalendar.js
// example if day is monday this will return 1
// if friday this will return 5
function firstDay (){
    x = new Date(my_date.getFullYear(), my_date.getMonth(), 1); 
return x; 
} 

//Note to self year must come before month
function daysInMonth(){
    x = new Date(my_date.getFullYear(), my_date.getMonth()+1, 0).getDate();
    //console.log("daysInMonth returns " + x)
return x;
}
// lastDay is the last day of the month
//var lastDay = new Date(my_date.getFullYear(), my_date.getMonth()+1, 0);

    // this_month is the current month
function this_month(){
    return my_date.getMonth() + 1;
}

// this year is the current year
function this_year(){
    return my_date.getYear() + 1900;
}
    
function clear(){
    draw.clearRect(0, 0, WIDTH, HEIGHT);
    
}
//function to return the number of days in a given month.


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
        if(tiles[i].selected == false){
            ctx.strokeStyle = "black";
        }else{
            ctx.strokeStyle = "yellow";   
        }
        
        ctx.font = "24px Arial";
        ctx.fillText(this.today, x+70, y+20);
        ctx.rect(this.x,this.y,this.width, this.width);
    }
    if(this.event.length != 0){
        ctx.font = "10px Arial";
        for(i= 0; i < this.event.length; i ++){
            y = y + 10;
            
        ctx.fillText(this.event[i].eventname, x+2, y);
        }
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


//This function just draws the calendar
// The calendar objects are created in createcalendar.js
 
function drawCalendar(){
    //draw the days
    for (var i =0; i < arr_Days.length; i++){
    arr_Days[i].draw(arr_Days[i].x, arr_Days[i].y, i);
    
}
    for (var i = 0; i < tiles.length; i++){
    for (var i = 0; i < tiles.length; i++){
    tiles[i].draw(tiles[i].x, tiles[i].y, i);
    }
}
}
//////////////////////////////////////////////////////////
// form events section

// increments the month
function nextmonth(){
 let i = my_date.getMonth();
    i++;
    my_date.setMonth(i);
    clearEvent()
    clear();
    init();

    
}

// work on this.
function prevmonth(){
   let i = my_date.getMonth();
    i--;
    my_date.setMonth(i);
    clearEvent()
    clear();
    init();
}


// handles the form visiblity
function Event_Scheduler_Menu(){
    document.getElementById("myForm").style.display = "block";
}

function closeForm(){
    document.getElementById("myForm").style.display = "none"
}

function clearEvent(){
    for(let i = 0; i < tiles.length; i++){
        tiles[i].selected = false;
        clear();
        drawCalendar();
        mouse_click_count = 0;
        second = 0;
        first = 0;
    }
}

function submitForm(){
    for(let i = 0; i < tiles.length; i++){
        if(tiles[i].selected ==true){
            var myevent = new eventschedule(document.getElementById("eventname").value);
            tiles[i].event.push(myevent);
            //document.getElementById("eventname").value
            //tiles.push(new Tile(tilex, tiley, this.width, this.width));
            clear();
            drawCalendar();
            mouse_click_count = 0;
        }
    }
}

    
function fillCalendar(x, y){
   
    if (x <= y){
        
        let i = x;
        
        while(i <= y){
            tiles[i].selected = true;            
            i++;
            }
        }
    
    if(x >= y){
        let i = y;
    
        while(i <= x){
            tiles[i].selected = true; 
            i++;  
            }
        }
    
    
    
    clear();
    drawCalendar();
    getStartEnd();
    }


function getStartEnd(){
let xmonth = this_month();

// this year is the current year
let xyear = this_year();
    
for(let i = 0; i < tiles.length; i++){
    if(tiles[i].selected==true){
        let startdate = tiles[i].today;
        document.getElementById("start_date").value =  xmonth + "/" + startdate + "/" + xyear;
        break;
    }
      
}    

for(let i = 0; i < tiles.length; i++){
   if((tiles[i].selected==true)&&(tiles[i+1].selected ==false)){
        let enddate = tiles[i].today;
        document.getElementById("end_date").value =  xmonth + "/" + enddate + "/" + xyear;
        break;

   }
}
}

function init(){
    // this_month is the current month


// this year is the current year

    
var nameOfMonth = month[my_date.getMonth()];
document.getElementById("whichmonth").innerHTML =  nameOfMonth;
clear();
tiles.length = 0;
    //console.log(tiles.length);
createCalendar();
drawCalendar();
    //console.log(tiles.length);
}
// main function to create calendar

