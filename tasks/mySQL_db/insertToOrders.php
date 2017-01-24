<?php
	include 'connect.php';
	$result["message"] = "";

	$ShopingList = $_POST["products"];
	$Date = $_POST["date"];
	$TotalPrice = $_POST["totalPrice"];

	if($ShopingList == "") {
		$result["message"] = "Products must be filled";
	} else if ($Date == "") {
		$result["message"] = "Date must be filled";
	} else if ($TotalPrice == "") {
		$result["message"] = "TotalPrice must be filled";
	} else {
		$queryResult = $connect->query("INSERT INTO orderTable VALUES (null,'".$ShopingList."','".$Date."','".$TotalPrice."')");

		if ($queryResult) {
			$result["message"] = "Successfully added new data! Refresh page";
		} else {
			$result["message"] = "Failed added new data";
		}
	}

	echo json_encode($result);










