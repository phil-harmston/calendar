<?php
include("dbconnection.php");

$month = $_POST['CurrentMonth'];
$year = $_POST['CurrentYear'];




function retrieveEvent($con, $month, $year){
    $search = "SELECT * FROM calendar.Events WHERE `Month` = '" .$month ."' AND `Year` = '" .$year ."';";
    //echo $search ."<br>";
    $result = $con -> query($search);
    //echo $result;
    $dbdata = array();
    if ($result ==FALSE){
        $failmess = "Whole query: " .$insert ."<br>";
        echo $failmess;
        print ('Invalid query: ' .mysqli_error($con) ."<br>");
    } else {
       while ($row = mysqli_fetch_array($result)){
           $dbdata[] = $row; 
    
} 
    }

echo json_encode($dbdata);

}
//The month comes in as one off because it comes from an array.
// just add 1 to make it correct and use it to search.

//echo $currentmonth ."<br>";
retrieveEvent($con, $month, $year);

?>
