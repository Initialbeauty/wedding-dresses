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
	
	  //回到顶部
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
			 	   if(screenTop>400 ){
			 	   	 $(".item-box").css("margin-left","0px").css("transition","all 2s")
			 	   }
			 	  if(screenTop>1000 ){
			 	   	 $(".p-box1").css("margin-top","0px").css("transition","all 2s")
			 	   } 
			
			 
			 }
			 
			 
			 // li点击切换
			$(".met-column-nav-ul li").click(function(e){
				$(".section-box-1").eq($(this).index()).css("display","block")
				.siblings().css("display","none")
				return false;
				
				
			})
			 
	$(".navbar-nav li").click(function(){
	  	$(this).eq(0).addClass("nav-add").siblings().removeClass("nav-add")
	  	$("#nav-1 >li>a").eq($(this).index()).addClass("nav-a").parent().siblings("#nav-1 >li").children().removeClass("nav-a")
	  })
	
})