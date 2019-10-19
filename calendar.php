<!DOCTYPE html>
<html>
    <head>
        
        <meta charset="UTF-8">

    </head>
    <body>
    <link rel = "stylesheet" type = "text/css" href = "popup.css" />
        <canvas id="myCanvas" width="1000" height="700" style="border:0px solid #d3d3d3;">
        </canvas>
        <div class="event_maker" id="myForm">
            <form action="/action_page.php" class="form-container">
                <h1>Event Maker</h1>

                <label for="msg"><b>Message</b></label>
                <input type="text" placeholder="Event Title" name="event_title" required><br>
                <label for="msg"><b>Start Date</b></label>
                <input name="start_date" id="start_date" type="text" readonly><br>
                <label for="msg"><b>End Date</b></label>
                <input name="end_date" id="end_date" type="text" readonly>
                <button type="button"  class="btn">Register</button>
                <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
                <button type="button" class="btn clear" onclick="clearEvent()">Clear</button>
            </form>
        </div> 
<script src = "calendar.js"></script>
</body>
</html>