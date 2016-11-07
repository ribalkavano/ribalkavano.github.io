<?php
	include 'connect.php';

	$queryResult = $connect->query("SELECT * FROM orderTable WHERE Date >= DATE_SUB(CURDATE(),INTERVAL 6 DAY) AND TotalPrice > 500");

	$result = array();
	while($fethData = $queryResult->fetch_assoc()) {
		$result[] = $fethData;
	}

	echo json_encode($result);