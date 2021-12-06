function prompt() {
	alert(
		"Hello,这使我们团队写的第一个前端页面，谢谢支持\n布局优化:JanYork                       内嵌页面:其他组员\n\n                                                    ——By 云深团队")
}

// JavaScript禁用F12与返回顶部
$(function(){
	$(window).scroll(function(){
		var _top = $(window).scrollTop();
		if(_top>300){
			$('.formtop').fadeIn(500);
		}else{
			$('.formtop').fadeOut(500);
		}
	});
	$(".formtop").click(function(){
		$("html,body").animate({scrollTop:0},500);
	});
});

// 底部伸缩主体
$(document).ready(function(){
$(".flip").click(function(){
    $(".panel").slideToggle("slow");
  });
});
