$(document).ready(function() {

	var url = "getOrderList.php";
	var cartTotalPrice = 0;
	var orderStr = "";

	loadProductsList();
	loadList();


		$('.nav li').click(function() {
		$('.nav li').removeClass("active");
		url = $(this).attr('id') + ".php";

		loadList();
		$(this).addClass("active");
	});

	$('#add_toProductList').click(addToProductList);


	$(document).on("click", ".add-to-cart", addToCart);
	$(document).on("click", ".cart-row", delFromCart);


// ==============================
// ======= CART FUNCTIONs =======
// ==============================

	$('#add_order').click(function() {
		var date = $("[name='date']").val();
		
		addToOrderList(orderStr.slice(0, -2), date, cartTotalPrice);

		cartTotalPrice = 0;
		orderStr = "";
		$("#cart_body").html('');
		$('#total_price').html(cartTotalPrice);
		
	});

	function addToCart () {
		var productId = $(this).attr('id');
		var productName = $('#productName' + productId).text();
		var productPrice = $('#productPrice' + productId).text();
		
		var newRow = $('<tr class="cart-row">');
		newRow.html('<td>' + productName + '</td><td>' + productPrice + '</td><td><button type="button" id="del-from-cart' + productId + '" class="btn btn-danger del-product"><span class="glyphicon glyphicon-remove"></span></button></td>');
		$('#cart_body').append(newRow);

		orderStr += productName + ", ";
		cartTotalPrice += parseInt(productPrice);
		$('#total_price').html(cartTotalPrice);
	}

	function delFromCart() {
		var price = parseInt($(this).find('td:eq(1)').text());
		var productName = $(this).find('td:eq(0)').text();

		orderStr = orderStr.replace(productName+', ', "");
		cartTotalPrice -= price;

		$('#total_price').html(cartTotalPrice);
		$(this).remove();
	}

	$(document).on("click", ".del-btn", function() {
		var orderId = $(this).attr('id');

		$.ajax({
			type: "POST",
			data: "orderId=" + orderId,
			url: "delOrder.php",
			success: function(result) {
				loadList();
			}
		});

	});

// ==============================
// ======= LOAD FUNCTIONs =======
// ==============================

	function loadProductsList() {
		var dataHendler = $('#load_products');
		dataHendler.html("");

		$.ajax({
			type: "GET",
			data: "",
			url: "getProductsList.php",
			success: function(result) {
				var resultObj = JSON.parse(result);
				$.each(resultObj, function(key, val) {
					var newRow = $('<tr>');
					newRow.html('<td>' + val.id + '</td><td id="productName' + val.id + '">' + val.productName + '</td><td>' + val.description + '</td><td id="productPrice' + val.id + '">' + val.price + '</td><td><button type="button" id="' + val.id + '" class="add-to-cart btn btn-success"><span class="glyphicon glyphicon-shopping-cart"></span></button></td>');

					dataHendler.append(newRow);
				});
			}
		});
	}

	function loadList() {
		var dataHendler = $('#load_data');
		dataHendler.html("");

		$.ajax({
			type: "GET",
			data: "",
			url: url,
			success: function(result) {
				var resultObj = JSON.parse(result);
				$.each(resultObj, function(key, val) {
					var newRow = $('<tr>');
					newRow.html('<td>' + val.ID + '</td><td>' + val.ShopingList + '</td><td>' + val.Date + '</td><td>' + val.TotalPrice + '</td><td><button type="button" id="' + val.ID + '" class="del-btn btn btn-danger"><span class="glyphicon glyphicon-trash"></span></button></td>');

					dataHendler.append(newRow);
				});
			}
		});
	}


// ==============================
// ===== ADD TO DB FUNCTIONs ====
// ==============================

		function addToProductList() {
			var productName = $("[name='productName']").val();
			var description = $("[name='description']").val();
			var price = $("[name='price']").val();

		$.ajax({
			type: "POST",
			data: "productName=" + productName + "&description=" + description + "&price=" + price,
			url: "insertToProducts.php",
			success: function(result) {
				var resultObj = JSON.parse(result);
				$('#errorMessage').html(resultObj.message);

				loadProductsList();
			}
		});
	};


		function addToOrderList(products, date, totalPrice) {

		$.ajax({
			type: "POST",
			data: "products=" + products + "&date=" + date + "&totalPrice=" + totalPrice,
			url: "insertToOrders.php",
			success: function(result) {
				var resultObj = JSON.parse(result);
				$('#errorMessage').html(resultObj.message);

				loadList();
			}
		});
	};

});





