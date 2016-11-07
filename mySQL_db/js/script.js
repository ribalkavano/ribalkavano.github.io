$(document).ready(function() {

	loadOrderList();

	$('#show_orders').click(loadOrderList);
	$('#show_over500').click(loadOver500);
	$('#show_samsung').click(loadSamsung);

	$('.nav li').click(function() {
		$('.nav li').removeClass("active");
		$(this).addClass("active");
	});


	function loadOrderList() {
		var dataHendler = $('#load_data');
		dataHendler.html("");

		$.ajax({
			type: "GET",
			data: "",
			url: "getOrderList.php",
			success: function(result) {
				var resultObj = JSON.parse(result);
				$.each(resultObj, function(key, val) {
					var newRow = $('<tr>');
					newRow.html('<td>' + val.ID + '</td><td>' + val.ShopingList + '</td><td>' + val.Date + '</td><td>' + val.TotalPrice + '</td>');

					dataHendler.append(newRow);
				});
			}
		});
	}

	function loadOver500() {
		var dataHendler = $('#load_data');
		dataHendler.html("");

		$.ajax({
			type: "GET",
			data: "",
			url: "getOver500.php",
			success: function(result) {
				var resultObj = JSON.parse(result);
				$.each(resultObj, function(key, val) {
					var newRow = $('<tr>');
					newRow.html('<td>' + val.ID + '</td><td>' + val.ShopingList + '</td><td>' + val.Date + '</td><td>' + val.TotalPrice + '</td>');

					dataHendler.append(newRow);
				});
			}
		});
	}

	function loadSamsung() {
		var dataHendler = $('#load_data');
		dataHendler.html("");

		$.ajax({
			type: "GET",
			data: "",
			url: "getSamsung.php",
			success: function(result) {
				var resultObj = JSON.parse(result);
				$.each(resultObj, function(key, val) {
					var newRow = $('<tr>');
					newRow.html('<td>' + val.ID + '</td><td>' + val.ShopingList + '</td><td>' + val.Date + '</td><td>' + val.TotalPrice + '</td>');

					dataHendler.append(newRow);
				});
			}
		});
	}


	$('#add_btn').click(function() {
		var products = $("[name='products']").val();
		var date = $("[name='date']").val();
		var totalPrice = $("[name='totalPrice']").val();

		$.ajax({
			type: "POST",
			data: "products=" + products + "&date=" + date + "&totalPrice=" + totalPrice,
			url: "insert.php",
			success: function(result) {
				var resultObj = JSON.parse(result);
				$('#errorMessage').html(resultObj.message);

				loadOrderList();
			}
		});
	});

});





