$(function(){
	$(".logo").parent().mouseenter(function(){
			 $(".logo").css("transform","rotateY(360deg)")
			 $(".logo").css("transform-origin","50% 50%")
			 $(".logo").css("transition","all 2s")
	})
	$(".logo").parent().mouseleave(function(){
		 $(".logo").css("transform","rotateY(0deg)")
		 $(".logo").css("transition","all 0s")
	})   
	
	
	$(".met-4 ").click(function(){
		
		$(".box-3").css("display","none")
		$(".box1-4").css("display","block")
		
	})
	
	$(".met-1 ").click(function(){
		
		$(".box-3").css("display","block")
		$(".box1-4").css("display","none")
		
	})
	
	
	$(".met-3 ").click(function(){
		
		$(".box-3").css("display","none")
		$(".box1-4").css("display","block")
		
		$(".met-3").attr("id","yanse")
		$(".met-2").attr("id","")
	})
	
	$(".met-2").click(function(){
		
		$(".box-3").css("display","block")
		$(".box1-4").css("display","none")
		$(".met-2").attr("id","yanse")
		$(".met-3").attr("id","")
	})
	$(".met a").click(function(){
		$(this).attr("id","yanse").siblings().attr("id","")
	})
	
	
	
	
		var  btn=document.querySelector('.huidao');
			 var screenTop=null, te=null; 
	
			 
			 window.onscroll = function(){
			 var	screenTop = document.documentElement.scrollTop ||document.body.scrollTop;
			 	if(screenTop>0 ){
			 		btn.style.display="block";
			 	}else{
			 		
			 		btn.style.display="none";
			 		
			 	}
			 	   btn.onclick=function(){
			 	   	 clearInterval(te);
			 	   	 te=setInterval(function( ){
			 	   	 screenTop=screenTop-50;
			 	   	 window.scrollTo(0,screenTop);
			 	   	 if(screenTop<=0 ){
			 	   	 	clearInterval(te);
			 	   	 }
			 	   	 	
			 	   	 },20);
			 	   	
			 	   }
			 	var  divli=document.querySelectorAll("#ul-1 li")
			 	
			 	   if (screenTop>100 ) {
			 	   	
			 	   	for (let i=0;i<divli.length;i++) {
			 	   		setTimeout(function(){	
			 	   		divli[i].style.marginTop="0px";
			 	   		divli[i].style.transition="all 2s";
			 	   		
			 	   		},200*i)
			 	   	}
			 	 
			 	   	
			 	   }
			 	   
	
	            }
	
	
	
	
})