// good luck !
//var color= $(this).attr('data-color');
	$(':input').each(function(index){
	$(this).css('background-color',$(this).attr('data-color'));
	console.log($(this).attr('data-color'));
});

	$(':input').click(function(){
		if ($('#modify-texte').is(':checked')==false){
		$('body').css('background-color',$(this).attr('data-color'))
	}
		if ($('#modify-texte').is(':checked')==true){
			$('p').css('color',$(this).attr('data-color'))
		}
	})
