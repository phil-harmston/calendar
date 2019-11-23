<?php
include("dbconnection.php");

$name = $_POST['itemName'];
$quantity = $_POST['itemQuantity'];




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

function add_Item($con, $name, $quantity){
    $insert = "INSERT INTO calendar.ItemTable (`itemName`, `itemQuantity`) "
        ."VALUES('" .$name ."', '" .$quantity ."');";

    $con -> query($insert);
    //echo $results;
    $query = "SELECT * FROM calendar.ItemTable WHERE `itemID` =(SELECT MAX(itemID) FROM calendar.ItemTable)";
    $results = $con -> query($query);
    $value = mysqli_fetch_object($results);
    $ID = $value->itemID;
    $response = json_encode($value);

    echo $response;
}

function delete_Item($con, $id){
    $remove = "DELETE FROM calendar.ItemTable WHERE `itemID` ='" .$id ."';";    //echo $insert ."<br>";
    $success = $con -> query($remove);

}

add_Item($con, $name, $quantity);