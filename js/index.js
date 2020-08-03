$(function() {
	$(".header").load("header.html");
	$(".menu").load("menu.html");
	$(".footer").load("footer.html");
	//鼠标进入轮播图出现按钮,厉害则隐藏
	$(".banner").hover(function() {
		$(this).find(".swiper-button-prev").css("display", "block");
		$(this).find(".swiper-button-next").css("display", "block");
	}, function() {
		$(this).find(".swiper-button-prev").css("display", "none");
		$(this).find(".swiper-button-next").css("display", "none");
	});
	//轮播图
	var mySwiper = new Swiper('.banner', {
		loop: true, // 循环模式选项
		autoplay: true,
		// effect: "coverflow",
		// 如果需要分页器
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		// 如果需要前进后退按钮
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	//定时器----第一层
	var starttime = new Date("2020/12/31");
	setInterval(function() {
		var nowtime = new Date();
		var time = starttime - nowtime;
		var hour = parseInt(time / 1000 / 60 / 60 % 12);
		var minute = parseInt(time / 1000 / 60 % 60);
		var seconds = parseInt(time / 1000 % 60);
		if (hour >= 10) {
			$(".floor1 .floor1-lft div:eq(3) span:eq(0)").text(hour);
		} else {
			$(".floor1 .floor1-lft div:eq(3) span:eq(0)").text("0" + hour);
		}
		if (minute >= 10) {
			$(".floor1 .floor1-lft div:eq(3) span:eq(1)").text(minute);
		} else {
			$(".floor1 .floor1-lft div:eq(3) span:eq(1)").text("0" + minute);
		}
		if (seconds >= 10) {
			$(".floor1 .floor1-lft div:eq(3) span:eq(2)").text(seconds);
		} else {
			$(".floor1 .floor1-lft div:eq(3) span:eq(2)").text("0" + seconds);
		}
	}, 1000);
	//第二层 鼠标滑过颜色变浅
	$(".item").find(".item-bottom").find("img").hover(function() {
		$(this).css("opacity", "0.85");
	}, function() {
		$(this).css("opacity", "1");
	});
	$(".item").find(".item-nav-top").children("div").hover(function() {
		$(this).css("opacity", "0.85");
	}, function() {
		$(this).css("opacity", "1");
	});
	$(".item").find(".item-nav-bottom").children("div").hover(function() {
		$(this).css("opacity", "0.85");
	}, function() {
		$(this).css("opacity", "1");
	});
	//第五层 鼠标滑过颜色变浅
	$(".items").find(".items-bottom").find("img").hover(function() {
		$(this).css("opacity", "0.85");
	}, function() {
		$(this).css("opacity", "1");
	});
	$(".items").find(".items-nav-top").children("div").hover(function() {
		$(this).css("opacity", "0.85");
	}, function() {
		$(this).css("opacity", "1");
	});
	$(".items").find(".items-nav-bottom").children("div").hover(function() {
		$(this).css("opacity", "0.85");
	}, function() {
		$(this).css("opacity", "1");
	});
	//鼠标滑过图标区域
	$(".icon ul a li").hover(function() {
		$(this).find("span").css("color", "#e1140a");
		$(this).find(".img2").css("display", "none");
		$(this).find(".img1").css("display", "block");
	}, function() {
		$(this).find("span").css("color", "#505050");
		$(this).find(".img2").css("display", "block");
		$(this).find(".img1").css("display", "none");
	});
	//左侧绝对定位----------------------------------------
		var $fixlft = $(".fixlft");
		var $nav = $(".fixlft ul li");
		var length = $nav.length;
		//用来存储高度
		var	item = new Array();
		for (var i = 0; i < length; i++) {
			//每一层距离浏览器的高度
			var top = $(".floor" + (i + 1)).offset().top;
			item[i + 1] = top;
		}
		console.log(item);
		$(window).scroll(function() {
			var $height = $(document).scrollTop(); //定义一个参数是滚动条距离top的高度为0
			//滚动条到达底部
			var $maxHeight = $(document).scrollTop() >= $(document).height() - $(window).height();
			if ($height > 450) {
				$fixlft.css("display", "block");
			} else {
				$fixlft.css("display", "none");
			}
			//到达底部删除
			if($maxHeight == true) {
				$fixlft.css("display", "none");
			}
			//联动
			var sTop = $(window).scrollTop(); //获取偏移的高度
			var k = 0;//定义一个数 来确定鼠标滑动式对应的楼层范围
			for (var i = 0; i < item.length; i++) { //数组的长度
				if (sTop >= item[i]) {
					k = i;
				}
			}
			//遍历li
			$nav.each(function(j) { //选择器的 j 位置
				//滑走变成楼层 去掉颜色
				$nav.eq(j).find("a").text($nav.eq(j).find("a").attr("original-title"));//添加定义的属性original-title 文字
				$nav.eq(j).find("a").removeClass('selected');//去掉颜色
			});
			//滑过变成字体而且有颜色
			$nav.eq(k).find("a").addClass("selected");//楼层滑过出现颜色
			$nav.eq(k).find("a").text($nav.eq(k).find("a").attr("title"));//划过内容变成字体
		});
		//value与title的交换
		$(".fixlft ul li").hover(function() {
			$word = $(this).find("a").prop("title"); //文字
			$title = $(this).find("a").prop("original-title"); //楼层
			//滑动出现的效果
			$(".fixlft ul li").each(function(i) {
				if (!$(this).eq(i).find("a").hasClass('selected')) {
					$(this).eq(i).find("a").text($(".fixlft ul li").eq(i).find("a").attr("original-title"));//显示的就是楼层
				}
			});
			if (!$(this).find("a").hasClass('selected')) {
				$(this).find("a").text($word);
			}
		}, function() {
			if ($(this).find("a").hasClass("selected")) {} else {
				$(this).find("a").text($(this).find("a").attr('original-title'));
			}
		});
		$(".fixlft ul li a").click(function(e) {
			e.preventDefault();//阻止其他默认动作
			$('html,body').animate({
				scrollTop: $(this.hash).offset().top//锚点开始对应的高度
			}, 400);
		});
	//二级菜单
	$(".banner .shop_banner_n .list_nav ul li .list_name").hover(function() {
		$(this).find(".list_cont").css("display", "block");
		$(this).siblings().find(".list_cont").css("display", "none");
	}, function() {
		$(this).find(".list_cont").css("display", "none");
	});
	//商品跳转页面
	$(".item .item-bottom .item-nav div").click(function(){
		//跳转到本地的 其他页面
		$(window).attr("location","productDetail.html");
	});
	//第五六九层 点击跳转到其他页面
	$(".items .items-bottom .items-nav div").click(function(){
		//跳转到本地的 其他页面
		$(window).attr("location","productdetails.html");
	});
});
