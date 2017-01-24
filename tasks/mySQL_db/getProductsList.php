<?php
	include 'connect.php';

	$queryResult = $connect->query("SELECT * FROM products");
	
	$result = array();
	while($fethData = $queryResult->fetch_assoc()) {
		$result[] = $fethData;
	}

	echo json_encode($result);