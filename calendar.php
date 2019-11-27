<!DOCTYPE html>
<html>
    <head>

        <meta charset="UTF-8">
        <header class="header-navigation" id="header">
            <nav>
                <a id="Home" style="color: black" class="link" href="#" title="Home">Home</a>
                <a id="About" style="color: black" class="link" href="#" title="About">About</a>
                <a id="Calandar" style = "color: black" class="link" href="/calendar.php" title="Calandar">Calandar</a>
            </nav>
        </header>
    </head>
    <body onload = "init()">
    <link rel = "stylesheet" type = "text/css" href = "popup.css" />

        <canvas id="myCanvas" class="myCavas" width="1000" height="670" style="border:0px solid #d3d3d3;">
        </canvas>
    <br>
        <div class = "monthselector" id="monthselector" name="monthselector">
        <form class ="changemonth" id="changemonth" name="changemonth">
            <button type="button" class="prevmonth" onclick="prevmonth()">"Prev Month"</button>
            <label for = 'msg' id="whichmonth"><b>Month</b></label>
            <button type="button" class="nextmonth" onclick="nextmonth()">"Next Month"</button>
            </form>
        </div>
        <div class="event_maker" id="myForm">
            <form action="/action_page.php" class="form-container">
                <h2 class="title">Event Maker</h2>

                <ol class="list">
                    <li><label for="msg" class="labels"><b>Message</b></label> </li>
                    <input type="text" placeholder="Event Title" id="eventname" name="event_title" required>
                    <!--<textarea type="text" class="eventname" name="event_title" required>Enter message here...</textarea>-->
                     <li><label for="msg" class="labels"><b>Start Date</b></label></li>
                    <!--<input class="textarea" name="start_date" id="start_date" type="text" readonly><br>-->
                    <input name="start_date" id="start_date" type="text" readonly><br>
                     <li><label for="msg" class="labels"><b>End Date</b></label></li>
                    <!--<input class="textarea" name="end_date" id="eventname"  type="text" readonly>-->
                    <input name="end_date" id="end_date" type="text" readonly>

                </ol>

                <button type="button"  class="btn" id="submit" onclick="submitForm()">Register Event</button>
                <button type="button" class="btn" id="cancel" onclick="closeForm()">Close</button>
                <button type="button" class="btn" id=""clear" onclick="clearEvent()">Clear</button>
            </form>
        </div>
<--<script src = "createcalendar.js"></script>
<script src = "mousevents.js"></script>
<script src = "eventschedule.js"></script>
<script src = "calendar.js"></script>-->


</body>
</html>
