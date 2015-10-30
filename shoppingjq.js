
$(document).ready(function(){

$('.done').on('click', function(event){

	$(this).parent().removeClass('need')
	.addClass('got');
});

$('.addtolist').on('click', function(event){


console.log($('.inputitem').text());
});


} ); 












