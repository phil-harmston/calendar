var Tile = function(x,y){
    this.x = x;
    this.y =y;
    this.width = 100;
}


var DayOfWeek = function(x,y){
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 20;
}

var my_date = new Date();
var day_of_week = my_date.getDay()
var firstDay = new Date(my_date.getFullYear(), my_date.getMonth(), 1);
var lastDay = new Date(my_date.getFullYear(), my_date.getMonth()+1, 0);

Tile.prototype.draw = function(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle="red";
    ctx.rect(this.x,this.y,this.width, this.width);
    ctx.stroke();   
}

Tile.prototype.changeColor = function(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle="green";
    ctx.rect(this.x,this.y,this.width, this.width);
    ctx.stroke();
    
}

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

console.log(day_of_week)


///////////////////////////////////////////////////////////////////////////////
var arr_Days =[];
 var hcols = 7;
    var hrows = 1;

for (var i = 0; i< hcols; i++){
    for (var j = 0; j < hrows; j++){
        var headerx = i * 104 + 20;
        var headery = j * 104 + 40;
        arr_Days.push(new DayOfWeek(headerx, headery, this.width, this.width))
    }
}


for (var i =0; i < arr_Days.length; i++){
    arr_Days[i].draw(arr_Days[i].x, arr_Days[i].y, i);
    console.log(this.x)
}

////////////////////////////////////////////////////////////////////////////////////////

  var tiles = [];
    var cols = 7;
    var rows = 6;

    for (var i=0; i < cols; i++){
        for (var j = 0; j < rows; j++){
            var tilex = i * 104 +5;
            var tiley = j * 104 +40;
            tiles.push(new Tile(tilex, tiley, this.width, this.width));
        }
    }

    for (var i =0; i < tiles.length; i++){
    tiles[i].draw();
    }
//////////////////////////////////////////////////////////////////////////////////////






function openForm(){
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
    console.log(mousePos.x + ',' + mousePos.y);
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

mouseClicked = function(mouseX, mouseY) {
    // check if mouse was inside a tile
    for (var i = 0; i < tiles.length; i++) {
        if (tiles[i].isUnderMouse(mouseX, mouseY)) {
        tiles[i].changeColor();
        openForm();
        
        }
    }
}