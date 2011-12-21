// JavaScript Document
$(
 function(){
 	$('.ad_index li').mouseenter(function(){
									 clearInterval(handler);
									 handler = setInterval(function(){start++;var collection = $('.ad_index li');$(collection[start%collection.length]).mouseenter();}, 5000);
									 $('.ad_index li.index_on').removeClass('index_on');
									 $(this).addClass('index_on');
									 var index = parseInt($(this).text());
									 start = index-1;
									 var showElement = $('.flash li')[index-1];
									 $('.flash li.show').fadeOut(500, function(){$(showElement).fadeIn(500, function(){$(this).addClass('show')});$(this).removeClass('show')});
									 
									// $('.flash li.show').slideUp(500, function(){ $(showElement).slideDown(500, function(){$(this).addClass('show')});$(this).removeClass('show')});
									
									 }// click funciton
									 
									 ); 
	var start =0;
	var handler = setInterval(function(){start++;var collection = $('.ad_index li');$(collection[start%collection.length]).mouseenter();}, 6000);
	
 }// ready function 
)