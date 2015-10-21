(function($) {
	if (!data) {
		return;
	}
	var step = 0;
	
	$(function() {
		createForm();
		initClasses();
	});
	function createForm() {
		var parent = $('#fields');
		
		data.forEach(function(item, i, arr) {
			var holder = $('<div class="field" id="'+'field' + i +'"></div>');
			var label = $('<label>'+ item.desc +'</label>');
			var field = $('<input name="'+ item.value +'" type="text"/>');
			
			holder.append(label).append(field).appendTo(parent);
		});
	}

	function initClasses() {
		var submit = $('#submit');
		
		submit.on('click', function(e){
			hideError();
			
			if (step === 0) {
				quantityValidate()
				e.preventDefault();
			} else if (step === 1) {
				questionValidate();
				e.preventDefault();
			}
		});
		
	}

	function questionValidate(){
		var fields = $('.field');
		
		step = 2;
		fields.removeClass('success').removeClass('fail');
		
		data.forEach(function(item, i, arr) {
			var field = $('#field'+i);
			var value = field.find(':text').val().trim(); 
			if (value === item.value) {
				field.addClass('success');
			} else {
				field.addClass('fail');
			}
		});
	}

	function quantityValidate(){
		var errorsQty = 0;
		
		step = 1;
		data.forEach(function(item, i, arr) {
			var value = $('#field'+i).find(':text').val().trim();
			if (value !== item.value) {
				errorsQty++;
			}
		});
		if (errorsQty) {
			showError(errorsQty);
		}	
	}
	function showError(quantity) {
		var message = $('#error');
		var quantityHolder = $('#quantity');
		
		quantityHolder.text(quantity);
		message.show();
		
	}
	function hideError() {
		$('#error').hide();
	}	
})(jQuery);


