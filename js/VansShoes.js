$(window).scroll(function(){
		var scroll = document.body.scrollTop || document.documentElement.scrollTop;
		
		if(scroll>=79){
		
			
			$('.loglistbox').css({position:"fixed",top:"0",left:"0",zIndex:10000})
			// $('.redlog a img').css({width:"65px",height:"35px",lineHeight:"40px"});
			
		}else{
			// $('.redlog a img').css({width:"156px",height:"64px"})

			$('.loglistbox').css("position","relative");
		}
		if(scroll>=1){
		
			
			$('#gotop').css("display","block")
			
		}else{
			$('#gotop').css("display","none")
		}
	});
$(function(){
	$('.select').click(function(){
		$('.country').toggle();
	});


	$('#gotop').click(function(){
		$('html,body').animate({
			scrollTop:"0px"
		},500);
	});
})