//myScript.js

$( document ).ready(function() {
	
	$('.part_1_hidden').hide();		
	$('.part_2_hidden').hide();		
	$('.part_3_hidden').hide();		
	$('.english_text').hide()

	$('#french_button').click(function(){
		$('.english_text').hide();
		$('.french_text').show();
		$('#part_1_button').text("Voir une autre");
		$('#part_2_button').text("Voir une autre");
		$('#part_3_button').text("voir précédente");
		$('#part_4_button').text("voir précédente");
		$('#part_5_button').text("voir précédente");
		$('#carousel_button').text("Voir une autre");				
	});

	$('#english_button').click(function(){
		$('.english_text').show();
		$('.french_text').hide();
		$('#part_1_button').text("View another");
		$('#part_2_button').text("View another");	
		$('#part_3_button').text("See previous");			
		$('#part_4_button').text("See previous");		
		$('#part_5_button').text("See previous");				
		$('#carousel_button').text("View another");						
	});

	$('#part_1_button').click(function(){
			//prompt('hi');
			$(document.body).css({'background-image':"url('image7.jpg')"});
			
			  $( ".part_1_hidden" ).fadeIn("slow");		

			//$('.part_1_hidden').show();					
			$('.part_1').hide();
			$('.part_2').hide();								
			$('#carousel_button').hide();
		});

	$('#part_3_button').click(function(){
			//$(document.body).css('background-image',"url('image6.jpg')");
			$(document.body).css({'background-image':"url('image6.jpg')"});			
			$('.part_1_hidden').hide();		

		    $( ".part_1" ).fadeIn("slow");					
			//$('.part_1').show();
		    $( ".part_2" ).fadeIn("slow");	
			//$('.part_2').show();	
			$('#carousel_button').show();												
		});


	$('#part_2_button').click(function(){
			//$(document.body).css('background-image',"url('image5.jpg')");

			$(document.body).css({'background-image':"url('image5.jpg')"});		
			$('.part_2_hidden').fadeIn("slow");					
			//$('.part_2_hidden').show();					
			$('.part_2').hide();
			$('.part_1').hide();										
			$('#carousel_button').hide();				
		});

	$('#part_4_button').click(function(){
	//		$(document.body).css('background-image',"url('image6.jpg')");
			$(document.body).css({'background-image':"url('image6.jpg')"});					
			$('.part_2_hidden').hide();					
			/*
			$('.part_1').show();
			$('.part_2').show();		
			*/
			$('.part_1').fadeIn("slow");
			$('.part_2').fadeIn("slow");		

			$('#carousel_button').show();						
		});

	$('#carousel_button').click(function(){

			$(document.body).css({'background-image':"url('image9.jpg')"});

			$('.part_3_hidden').fadeIn("slow");				

			$('.part_2').hide();
			$('.part_1').hide();
			$('#carousel_button').hide();										
		});

	$('#part_5_button').click(function(){
//			$(document.body).css('background-image',"url('image6.jpg')");

			$(document.body).css({'background-image':"url('image6.jpg')"});						
			$('.part_3_hidden').hide();	
			/*
			$('.part_1').show();
			$('.part_2').show();	
			*/
			
			$('.part_1').fadeIn("slow");
			$('.part_2').fadeIn("slow");	

			$('#carousel_button').show();												
		});

});
