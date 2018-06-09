$(window).scroll(function(){
		var scroll = document.body.scrollTop || document.documentElement.scrollTop;
		
		if(scroll>=70){
			$('#box1').css({position:"fixed",margin:"0 auto",top:"0"});
			
		}else{
			$('#box1').css("position","relative");
		}
	});


