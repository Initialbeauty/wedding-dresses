$(function(){
	$(".li-span").mouseenter(function(){
		$(".bg1").css("display","block")
	})
	$(".li-span").mouseleave(function(){
		$(".bg1").css("display","none")
	})
	$(".a").click(function(){
		$(this).attr("class","fanye-active").siblings().attr("class","a");
		index = $(this).index()-1;
		$(".wz1").css("display","none");
		$(".wz1").eq(index).css("display","block");
	})
	
	$(".previous").click(function(){
		$(".a").eq($(".fanye-active").index()-1).attr("class","fanye-active").siblings().attr("class","a");
		if($(".fanye-active").index()-1<0){
			$(".a").eq(0).attr("class","fanye-active").siblings().attr("class","a");
		}
		$(".wz1").css("display","none");
		$(".wz1").eq($(".fanye-active").index()-1).css("display","block");
	})
	$(".next").click(function(){
		$(".a").eq($(".fanye-active").index()).attr("class","fanye-active").siblings().attr("class","a");
		if($(".fanye-active").index()>3){
			$(".a").eq(3).attr("class","fanye-active").siblings().attr("class","a");
		}
		$(".wz1").css("display","none");
		$(".wz1").eq($(".fanye-active").index()-1).css("display","block");
	})
	$(".navbar-nav li").click(function(){
	  	$(this).eq(0).addClass("nav-add").siblings().removeClass("nav-add")
	  	$("#nav-1 >li>a").eq($(this).index()).addClass("nav-a").parent().siblings("#nav-1 >li").children().removeClass("nav-a")
	  })
	 
	$(".logo").parent().mouseenter(function(){
			
			 $(".logo").css("transform","rotateY(360deg)")
			 $(".logo").css("transform-origin","50% 50%")
			 $(".logo").css("transition","all 2s")

	})
	$(".logo").parent().mouseleave(function(){
		 $(".logo").css("transform","rotateY(0deg)")
		 $(".logo").css("transition","all 0s")

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
			 	   
		   
			 	if(screenTop>100){
			 	$("#ul-box1").css("margin-left","0%").css("transition","all 2s")	
			 	$("#ul-box2").css("margin-left","0%").css("transition","all 2s")	
			 	}
			 	if(screenTop>80){
			 		
			 		$(".idd").css("margin-top","0px").css("transition","all 2s")
			 	}
			 	
			 	
	            }
		
			 
	
})