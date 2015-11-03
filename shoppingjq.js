
$(document).ready(function(){

/*	start mentor JS code  
	========================== */
	$('.js-check-item-button').on('click', function(event){
		$(this).parent().toggleClass('done');
	});
/*	end mentor JS code  
	========================== */

	$('.addtolist').on('click', function(event){
		// fetching input value
		var todoString = $('.inputitem').val();

		// fetching inout value
		var $listItem = $('<li></li>');
		$listItem.addClass('shopping-list__item');

		var $doneButton = $('<button></button>');
		$doneButton.addClass('shopping-list__item__button');
		$doneButton.addClass('js-check-item-button');
		$doneButton.text('Done');
		$doneButton.on('click', function(event){
			$(this).parent().toggleClass('done');
		});

		$listItem.text(todoString);
		$listItem.append($doneButton);

		$('.shopping-list').append($listItem);

		$('.inputitem').val('');
	});

// $('.done').on('click', function(event){

// 	$(this).parent().removeClass('need')
// 	.addClass('got');
// });

// $('.addtolist').on('click', function(event){
// 	console.log($('.inputitem').val());
// });


} ); 












