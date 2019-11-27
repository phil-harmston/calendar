<?php
include("dbconnection.php");

$myjson = file_get_contents('php://input');


function searchEvent($con, $eventtitle, $day, $month, $year){
    $search = "SELECT * FROM calendar.Events WHERE `Day`=" .$day ." AND `Month`='" .$month ."' AND `Year`=" .$year .";";
    $results = $con -> query($search);
    //$rows = mysqli_num_rows($results);
    //echo "<br> rows is: " .$rows ."<br>";
    if (!$results || mysqli_num_rows($results) == 0){
        createEvent($con, $eventtitle, $day, $month, $year);
        //$failmess = "Whole query: " . $search . "<br>";
        //echo $failmess;
        
        //print ('Invalid query: ' . mysqli_error($con) . "<br>");
    } else {
        echo "Date is taken";
    }
    //echo $success;
}

function createEvent($con, $eventtitle, $day, $month, $year){
    $insert = "INSERT INTO calendar.Events (`EventTitle`, `Day`, `Month`, `Year`) "
        ."VALUES('" .$eventtitle ."', '" .$day ."', '" .$month ."', '" .$year ."');";
    //echo $insert ."<br>";
    $success = $con -> query($insert);
    
    if ($success ==FALSE){
        //$failmess = "Whole query: " . $insert . "<br>";
        //echo $failmess;
        
        print ('Invalid query: ' . mysqli_error($con) . "<br>");
    } else {
        echo "accepted.<br>";
    }
}

//function fixdate($mydate){
//$d = explode('/', $mydate);
//$da = mktime(0,0,0, $d[0], $d[1], $d[2]);
//$da = date("Y-m-d", $da);
   // return $da;
function isJSON($j){
   return is_string($j) && is_array(json_decode($j, true)) && (json_last_error() == JSON_ERROR_NONE) ? true : false;
}


echo "<br>";
if(isJSON($myjson)){
$data = json_decode($myjson);
    
foreach ($data as $obj){
    for($i = 0; $i<count($obj); $i++){
        $eventtitle = $obj[$i]->EventName;
        $day = $obj[$i]->EventDay;
        $month = $obj[$i]->Month;
        $year = $obj[$i]->Year;  
        searchEvent($con, $eventtitle, $day, $month, $year);
    }
}  
 
}else{
    echo "Error please pick a date.";
}


?>
