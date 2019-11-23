<?php
include("dbconnection.php");


function retrieve_db($con){
    $search = "SELECT * FROM calendar.ItemTable";
    //echo $search ."<br>";
    $result = $con -> query($search);
    //echo $result;
    $dbdata = array();
    if ($result == FALSE){
        $failmess = "Whole query: " .$result ."<br>";
        echo $failmess;
        print ('Invalid query: ' .mysqli_error($con) ."<br>");
    } else {
       while ($row = mysqli_fetch_array($result)){
           $dbdata[] = $row; 
    
} 
    }

echo json_encode($dbdata);

}

retrieve_db($con);

?>
