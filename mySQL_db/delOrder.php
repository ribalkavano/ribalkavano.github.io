<?php
	include 'connect.php';
	$orderId = $_POST["orderId"];

	$connect->query("DELETE FROM orderTable WHERE ID=".$orderId);