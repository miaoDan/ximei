;$(function() {
	//吸顶效果
	$(window).scroll(function() {
		if($(window).scrollTop()>=$(".banner").offset().top){
			$(".xiding").fadeIn(500);
		}else{
			$(".xiding").fadeOut(500);
		}
	})
	$(".xiding .topcont span").mouseenter(function() {
		$(".xiding .topcont .xilist").show();
	})
	$(".xiding .topcont span").mouseleave(function() {
		$(".xiding .topcont .xilist").hide();
	})
	//楼梯效果
	var isClick=false;
	$(".floor ul li:not(:last)").click(function() {
		isClick=true;
		$(this).find("span").addClass("active").parent().siblings().find("span").removeClass("active");
		var height=$(".content").eq($(this).index()).offset().top;
		$("html body").stop().animate({scrollTop:height},500,function() {
			isClick=false;
		});
	});
	$(".floor ul li:last").click(function() {
		isClick=true;
		$(".floor ul li").find("span").removeClass("active");
		$("html body").stop().animate({scrollTop:0},500,function() {
			isClick=false;
		});
	});	
	$(window).scroll(function() {
		if(!isClick){
			var height=$(window).scrollTop();
			$(".content").each(function() {
				if(height>=$(this).offset().top-$(".content").eq($(this).index()-1).outerHeight(true)/2){
					$(".floor ul li").eq($(this).index()).find("span").addClass("active").parent().siblings().find("span").removeClass("active");
				}else if(height<=$(".content").eq(0).offset().top){
					$(".floor ul li").find("span").removeClass("active");
				}
			})
		}
	})
});
