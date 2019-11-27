<?php
include("dbconnection.php");
$id = $_POST['ID'];



function search_Item($con, $id){
    $search = "SELECT * FROM calendar.itemTable WHERE `itemID`='" .$id ."'";
    $results = $con -> query($search);

    if (!$results || mysqli_num_rows($results) == 0){
        delete_Item($con, $id);
        //$failmess = "Whole query: " . $search . "<br>";
        //echo $failmess;
        
        //print ('Invalid query: ' . mysqli_error($con) . "<br>");
    } else {

    }
    //echo $success;
}

function delete_Item($con, $id){
    $remove = "DELETE FROM calendar.ItemTable WHERE `itemID` ='" .$id ."';";    //echo $insert ."<br>";
    $success = $con -> query($remove);

}

search_Item($con, $id);
