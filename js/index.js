//header 划过效果
$(function(){
	$(".shopSort").hover(
		function(over){
			$(".dis_shop").css("display","block");
			$(".shopSort").css("background","white");
			$("#nav_list_1").css({color:"#10a0d5",background:"url(img/dot_down_blue.jpg) no-repeat 92px center"});
		},
		function(out){
			$(".dis_shop").css("display","none");
			$(".shopSort").css("background","black");
			$("#nav_list_1").css({color:"white",background:"url(img/dot_down_black.jpg) no-repeat 92px center"});
		}
	)
})
$(function(){
	$(".shopList li").hover(
		function(){
			$(this).children(".content_right").css("display","block");
			$(this).children("span").children("a").css("color","#10a0d5");
		},
		function(){
			$(this).children(".content_right").css("display","none");
			$(this).children("span").children("a").css("color","#000");
		}
	)
})
$(function(){
	$(".siteNav").hover(
		function(over){
			$(".dis_nav").css("display","block");
			$(".siteNav").css("background","white");
			$("#nav_list_2").css({color:"#10a0d5",background:"url(img/dot_down_blue.jpg) no-repeat 92px center"});
		},
		function(out){
			$(".dis_nav").css("display","");
			$(".siteNav").css("background","");
			$("#nav_list_2").css({color:"",background:""});
		}
	)
})

$(function(){
	$(".search_input").focus(
		function(){
			$(this).attr("placeholder","");
			$(".recommond").css("display","block");
		}
	)
	$(".search_input").blur(
		function(){
			$(this).attr("placeholder","IER-Z1R 旗舰入耳式立体声耳机");
			$(".recommond").css("display","none");
		}
	)
})

$(function(){
	$(".mySony").hover(
		function(){
			$(this).children(".dis_list").css("display","block");
			$(this).css("background","white");
			$(this).children("a").css({color:"#10a0d5",background:"url(img/dot_down_blue.jpg) no-repeat 92px center"});
		},
		function(){
			$(this).children(".dis_list").css("display","none");
			$(this).css("background","black");
			$(this).children("a").css({color:"",background:""});
		}
	)
	$(".myServer").hover(
		function(){
			$(this).children(".dis_list").css("display","block");
			$(this).css("background","white");
			$(this).children("a").css({color:"#10a0d5",background:"url(img/dot_down_blue.jpg) no-repeat 92px center"});
		},
		function(){
			$(this).children(".dis_list").css("display","");
			$(this).css("background","");
			$(this).children("a").css({color:"",background:""});
		}
	)
	$(".dis_list a").hover(
		function(){
			$(this).css("color","#10a0d5");
		},
		function(){
			$(this).css("color","#646464");
		}
	)
})
//底部tbboder 划过效果
$(function(){
	$(".tbboder").children("li").hover(
		function(){
			$(this).children(".normal").css("display","none");
			$(this).children(".on").css("display","table-cell");
		},
		function(){
			$(this).children(".normal").css("display","");
			$(this).children(".on").css("display","");
		}
	)
})
//底部划过
$(function(){
	$(".footer_list1 a").hover(
		function(){
			$(this).css("color","#10a0d5")
		},
		function(){
			$(this).css("color","");
		}
	)
	$(".nearby_query").hover(
		function(){
			$(this).css({background:"url(img/footer-icon-on03_03.png) right center no-repeat",backgroundPosition:"88px"})
		},
		function(){
			$(this).css("background","")
		}
	)

	$(".wx_box").hover(
		function(){
			$(this).css("background","#009ffb")
			$(this).children("a").css("color","white")
		},
		function(){
			$(this).css("background","")
			$(this).children("a").css("color","")
		}
	)
	$(".phone").hover(
		function(){
			$(this).css({color:"white",background:"url(img/footer-icon_07on.png) right center no-repeat",backgroundPosition:"65px"})
		},
		function(){
			$(this).css({color:"",background:""})
		}
	)

	$(".footer_list3_list li a").hover(
		function(){
			$(this).css("color","#10a0d5")
		},
		function(){
			$(this).css("color","")
		}
	)
})

//回到顶部
$(function(){
	$(".backToHead").click(function(){
		$("body,html").animate({
			scrollTop: 0
		},1000)
	})
})
//侧边栏
$(function(){
	$(window).scroll(function(){
	   var h= $(this).scrollTop();//获得滚动条距top的高度
	    if(h>1600){
	    	$(".RightFixNav").fadeIn();
	    }else{
	    	$(".RightFixNav").fadeOut();
	    }
	})
	// 定义一个获取所有div的距离高度
	var arrOffsetTop = [
         $('.playTechnology').offset().top,
         $('.movieRecreation').offset().top,
         $('.digital').offset().top,
         $('.portableAudio').offset().top,
         $('.sonyClub').offset().top
    ];
    //页面滚动事件
    $(window).scroll(function() {
        for(var i=0; i<5; i++) {
            if($(this).scrollTop() > arrOffsetTop[i]-1) {  //大于自身距离顶部距离显示
	            $(".RightFixNav ul li").eq(i).children(".Rtitle").css("display","block")
	            $(".RightFixNav ul li").eq(i).siblings().children(".Rtitle").css("display","none")
	            $(".RightFixNav ul li").eq(i).children(".Rtitle").children(".navword").css("display","block")
	            $(".RightFixNav ul li").eq(i).siblings().children(".Rtitle").children(".navword").css("display","none")
         	}
     	}
    });
    //点击事件
    $('.RightFixNav ul li').click(function() {
         $('body, html').animate({scrollTop: arrOffsetTop[$(this).index()]}, 500);
      });
});
//轮播图
$(function(){
  
  var i=0;
  var timer=null;
  $('.num li').first().addClass('active'); //给第一个圆点添加样式
  
  var firstimg=$('.img li').first().clone(); //复制第一张图片
  $('.img').append(firstimg).width($('.img li').length*($('.img img').width())); //将第一张图片放到最后一张图片后，设置ul的宽度为图片张数*图片宽度
  
  
  // 下一个按钮
  $('.next').click(function(){
   i++;
   if (i==$('.img li').length) {
    i=1; //这里不是i=0
    $('.img').css({left:0}); //保证无缝轮播，设置left值
   };
  
   $('.img').stop().animate({left:-i*1519},1000);
   if (i==$('.img li').length-1) {  //设置小圆点指示
    $('.num li').eq(0).addClass('active').siblings().removeClass('active');
   }else{
    $('.num li').eq(i).addClass('active').siblings().removeClass('active');
   }
     
  })
  
  // 上一个按钮
  $('.prev').click(function(){
   i--;
   if (i==-1) {
    i=$('.img li').length-2;
    $('.img').css({left:-($('.img li').length-1)*1300});
   }
   $('.img').stop().animate({left:-i*1519},1000);
   $('.num li').eq(i).addClass('active').siblings().removeClass('active');
  })
  
  //设置按钮的显示和隐藏
  $('.banner').hover(function(){
   $('.btn').show();
  },function(){
   $('.btn').hide();
  })
  
  //鼠标划入圆点
  $('.num li').mouseover(function(){
   var _index=$(this).index();
   $('.img').stop().animate({left:-_index*1519},1000);
   $('.num li').eq(_index).addClass('active').siblings().removeClass('active');
  })
  
  //定时器自动播放
  timer=setInterval(function(){
   i++;
   if (i==$('.img li').length) {
    i=1;
    $('.img').css({left:0});
   };
  
   $('.img').stop().animate({left:-i*1519},1000);
   if (i==$('.img li').length-1) { 
    $('.num li').eq(0).addClass('active').siblings().removeClass('active');
   }else{
    $('.num li').eq(i).addClass('active').siblings().removeClass('active');
   }
  },3000)
  
  //鼠标移入，暂停自动播放，移出，开始自动播放
  $('.banner').hover(function(){ 
   clearInterval(timer);
  },function(){
   timer=setInterval(function(){
   i++;
   if (i==$('.img li').length) {
    i=1;
    $('.img').css({left:0});
   };
  
   $('.img').stop().animate({left:-i*1519},1000);
   if (i==$('.img li').length-1) { 
    $('.num li').eq(0).addClass('active').siblings().removeClass('active');
   }else{
    $('.num li').eq(i).addClass('active').siblings().removeClass('active');
   }
  },3000)
  })
  
 })

//小轮播
$(function(){
  
  var i=0;
  var timer=null;
  // for (var j = 0; j < $('.img li').length; j++) { //创建圆点
  //  $('.num').append('<li></li>')
  // }
  $('.pagination span').first().addClass('activel'); //给第一个圆点添加样式
  
  var firstimg=$('.imglittel li').first().clone(); //复制第一张图片
  $('.imglittel').append(firstimg).width($('.imglittel li').length*1220); //将第一张图片放到最后一张图片后，设置ul的宽度为图片张数*图片宽度
  
  // 下一个按钮
  $('.next').click(function(){
   i++;
   if (i==$('.imglittel li').length) {
    i=1; //这里不是i=0
    $('.imglittel').css({left:0}); //保证无缝轮播，设置left值
   };
  
   $('.imglittel').stop().animate({left:-i*1220},1500);
   if (i==$('.img li').length-1) {  //设置小圆点指示
    $('.pagination span').eq(0).addClass('activel').siblings().removeClass('activel');
   }else{
    $('.pagination span').eq(i).addClass('activel').siblings().removeClass('activel');
   }
     
  })
  
  // 上一个按钮
  $('.prev').click(function(){
   i--;
   if (i==-1) {
    i=$('.imglittel li').length-2;
    $('.imglittel').css({left:-($('.imglittel li').length-1)*1220});
   }
   $('.imglittel').stop().animate({left:-i*1220},1500);
   $('.pagination span').eq(i).addClass('activel').siblings().removeClass('activel');
  })
  
  //设置按钮的显示和隐藏
  $('.bannerlittle').hover(function(){
   $('.btn').show();
  },function(){
   $('.btn').hide();
  })
  
  //鼠标划入圆点
  $('.pagination span').mouseover(function(){
   var _index=$(this).index();
   $('.imglittel').stop().animate({left:-_index*1220},1500);
   $('.imglittel li').eq(_index).addClass('active').siblings().removeClass('active');
  })
  
  //定时器自动播放
  timer=setInterval(function(){
   i++;
   if (i==$('.imglittel li').length) {
    i=1;
    $('.imglittel').css({left:0});
   };
  
   $('.imglittel').stop().animate({left:-i*1220},1500);
   if (i==$('.imglittel li').length-1) { 
    $('.pagination span').eq(0).addClass('activel').siblings().removeClass('activel');
   }else{
    $('.pagination span').eq(i).addClass('activel').siblings().removeClass('activel');
   }
  },3500)
  
  //鼠标移入，暂停自动播放，移出，开始自动播放
  $('.banner').hover(function(){ 
   clearInterval(timer);
  },function(){
   timer=setInterval(function(){
   i++;
   if (i==$('.imglittel li').length) {
    i=1;
    $('.imglittel').css({left:0});
   };
  
   $('.imglittel').stop().animate({left:-i*1220},1500);
   if (i==$('.imglittel li').length-1) { 
    $('.pagination span').eq(0).addClass('activel').siblings().removeClass('activel');
   }else{
    $('.pagination span').eq(i).addClass('activel').siblings().removeClass('activel');
   }
  },3500)
  })
  
 });

//登录框
$(function(){
	$(".loginBtn").click(function(){
		$(".loginDis").css({display:"block"});
		$(".mask").css("display","block");
	});
	$(".close").click(function(){
		$(".loginDis").css("display","");
		$(".mask").css("display","");
    $(".zhuce").css("display","")
	});
	$(window).scroll(function(){
   	var h= $(this).scrollTop();
   	hh=h+100
   	$(".loginDis").animate({top:hh},60);
	});
  $(window).scroll(function(){
    var h= $(this).scrollTop();
    dd=h+10
    $(".zhuce").animate({top:dd},60);
  })
  $(".zhuceBtn").click(function(){
      $(".zhuce").css({display:"block"});
      $(".mask").css("display","block");
  })
  $(".changel").click(function(){
      $(".zhuce").css({display:"block"});
      $(".loginDis").css("display","none");
  })
  $(".changer").click(function(){
      $(".loginDis").css({display:"block"});
      $(".zhuce").css({display:"none"});
  })
})



