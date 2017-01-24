<?php
	include 'connect.php';
	$result["message"] = "";

	$productName = $_POST["productName"];
	$description = $_POST["description"];
	$price = $_POST["price"];

	if($productName == "") {
		$result["message"] = "Product Name must be filled";
	} else if ($description == "") {
		$result["message"] = "Description must be filled";
	} else if ($price == "") {
		$result["message"] = "Price must be filled";
	} else {
		$queryResult = $connect->query("INSERT INTO products VALUES (null,'".$productName."','".$description."','".$price."')");

		if ($queryResult) {
			$result["message"] = "Successfully added new data! Refresh page";
		} else {
			$result["message"] = "Failed added new data";
		}
	}

	echo json_encode($result);










