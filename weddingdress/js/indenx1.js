$(function(){
			var $containerTop =1090;
			var $containerHeight = $("#box2").height();
				
			$(window).scroll(function(){
				if($(window).scrollTop()>=$containerTop-$containerHeight){
						$(".box2-ul li").eq(0).css("margin-left",0).css("transition","all 1s");
						$(".box2-ul li").eq(1).css("margin-left",0).css("transition","all 1s 1s");
						$(".box2-ul li").eq(2).css("margin-left",0).css("transition","all 1s 2s");
						setTimeout(function(){
						$(".box2-ul li").eq(0).css("margin-left",0).css("transition","");
						$(".box2-ul li").eq(1).css("margin-left",0).css("transition","");
						$(".box2-ul li").eq(2).css("margin-left",0).css("transition","");
						},5000)
				}
			
				
				
			})
			$(".span-right").click(function(){
				$(".box2-ul li").eq(0).css("display","none").animate({"margin-left":"0%"});	
				$(".box2-ul li").eq(3).css("display","block").animate({"margin-left":"0%"},1000)
				 setTimeout(function(){
						$(".box2-ul li").animate({"margin-left":"0%"})
						},2000)
    
			})	
			$(".span-left").click(function(){
				$(".box2-ul li").eq(0).css("display","block").animate({"margin-left":"0%"});	
				$(".box2-ul li").eq(3).css("display","none").animate({"margin-left":"0%"},1000)
				setTimeout(function(){
					$(".box2-ul li").eq(3).animate({"margin-left":"0%"})
						},2000)

			})
			
			
			
			
			
			
		})








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
	var windou = document.documentElement.offsetWidth;
		
	
	
//	
//	    window.onresize=function(){
//			windou=document.documentElement.offsetWidth
//	   		
//	    } 	
	   
	   
	  
		var  btn=document.querySelector('.huidao');
			 var screenTop=null, te=null; 
	
			 
			 window.onscroll = function(){
		  var	screenTop = document.documentElement.scrollTop||document.body.scrollTop;
			 	if(screenTop>0 ){
			 		btn.style.display="block";
			 		console.log(screenTop)
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
			 	   
			 		
			var  gaodu =document.querySelector(".box1-1-2-1-box1");	
//			if(windou>=992){
			if(screenTop>=gaodu.offsetTop-200 ){
				$(".box1-1-2-1").css("display","block")
				  setTimeout(function(){
				  	$(".box1-1-2-1-box1").attr("id","donghua")
				  },300)
				  setTimeout(function(){
				  	$(".box1-1-2-1-box2").attr("id","donghua")
				  },600)
				   setTimeout(function(){
				  	$(".box1-1-2-1-box3").attr("id","donghua")
				  },900)
				    setTimeout(function(){
				  	$(".box1-1-2-1-box4").attr("id","donghua")
				  },1200)
			}
			
			
			//文字上移动 动画
			 	var  gaodu1 =document.querySelector(".section-2-1");	
			 	$(".section-2-1").offset().top
			    if(screenTop>1200 ){
			 	$(".section-2-1-li-1").css("margin-top","4%").css("transition","all 2s")
			 	
			 }
			    if(screenTop>$(".section-2-1").offset().top+500){
			 	$(".section-2-1-li-1").css("margin-top","100px").css("transition","all 2s")
			}
			    
			   
			   	console.log($(window).scrollTop())
				if($(window).scrollTop()>=1700){
					
					$(".article-2").css("margin-left","0px").css("transition","2s")
					
				}
			   
			    
//			}//宽度结束括号
		
			
			  }//高度结束括号
			
			
			$(".box2-ul li").mousemove(function(){
				$(this).eq(0).css("background-color","black")
				$(".box2-ul-div1").eq($(this).index()).css("margin-top","0").css("opacity","1")
				$(".box2-ul-div3").eq($(this).index()).siblings($(".box2-ul-div3")).css("transform","scale(1)")
			})
			$(".box2-ul li").mouseout(function(){
				$(this).eq(0).css("background-color","")
				$(".box2-ul-div3").eq($(this).index()).css("transform","scale(1)").css("display","none")
			})
			
			
			 //foouter点击
			$(".article-2-span21").click(function(){
				$(".diyigel").css("display","none").css("opacity","0").css("transition","all 3s")
			})
			$(".article-2-span11").click(function(){
				$(".diyigel").css("display","block").css("opacity","1").css("transition","all 3s")
			})

	
})

           // 四图动画
		function abc(){
				setTimeout(function(){
			 			$(".box2-ul-li-1").css("margin-left","0").css("transition","all 2s")
			 	},0)
			 	setTimeout(function(){
			 			$(".box2-ul-li-2").css("margin-left","0").css("transition","all 2s")
			 	},500)
			 	setTimeout(function(){
			 			$(".box2-ul-li-3").css("margin-left","0").css("transition","all 2s")
			 	},1000);
			 	setTimeout(function(){
			 			$(".box2-ul-li-4").css("opacity","0").css("left","calc(100%)")
			 	},1000);
			 	
			 	
		
			
		
		
		

}
		
	$(function(){
						
	/*	$(".more-box").click(function(e){
			for(var i =0;i<$(".form-control").length;i++){
				if($(".form-control").eq(i).val().length ==0){
					$(".form-control").val("不能为空")
					$(".form-control").css("color","red")
					$(".more-box").prop("disabled","disabled")
					return false
					
				}
			
			}
			
		})
		*/
		
		
		$(".article-2-ul li .ul-div-2 ul >li ").mousemove(function(){
			$(this).css("margin-left","30px").css("transition","all 2s")
		})
			$(".article-2-ul li .ul-div-2 ul >li ").mouseout(function(){
			$(this).css("margin-left","0px").css("transition","all 2s")
		})
	  $(".navbar-nav li").click(function(){
	  	$(this).eq(0).addClass("nav-add").siblings().removeClass("nav-add")
	  	$("#nav-1 >li>a").eq($(this).index()).addClass("nav-a").parent().siblings("#nav-1 >li").children().removeClass("nav-a")
	  	
	  })
	  
	  $(".section-2-1 ul li ").mousemove(function(){
			$(this).css("margin-left","30px").css("transition","all 1s").siblings().css("margin-left","30px").css("transition","all 3s")
		})
	  $(".section-2-1 ul li ").mouseout(function(){
			$(this).css("margin-left","0px").css("transition","all 1s").siblings().css("margin-left","0px").css("transition","all 3s")
		})
})	