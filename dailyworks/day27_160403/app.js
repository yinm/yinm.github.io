'use strict';

window.onload = function() {
  var dprice = document.getElementById('price');
	var dtaxRate = document.getElementById('taxRate');
	var dtaxAmount = document.getElementById('taxAmount');
	var dtaxIncluded = document.getElementById('taxIncluded');
	var btnExec = document.getElementById('btnExec');

	// 計算処理
	var calcTax = function() {
		var price = dprice.value * 1;
		var taxRate = dtaxRate.value * 1;

		var amount = Math.floor(price * taxRate / 100);
		var included = price + amount;

		dtaxAmount.value = amount;
		dtaxIncluded.value = included;
	};

	// ボタンクリック時に計算処理の実行
		btnExec.addEventListener('click', calcTax);
};
