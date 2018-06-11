$(window).scroll(function(){
		var scroll = document.body.scrollTop || document.documentElement.scrollTop;
		
		if(scroll>=79){
			var w = $('#logmiddle').width()/2;
			$('#logmiddle').css({position:"fixed",top:"0",left:"50%",marginLeft:-w+"px",zIndex:10000});
			
		}else{
			$('#logmiddle').css("position","relative");
		}
	});