<?php
	$connect = new mysqli("localhost", "admin", "admin", "order");
	if(!$connect) {
		echo "Cannoct connect to server!";
		exit();
	}