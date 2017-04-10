$(function(){
	var $carousel = $('#indbig');
	var $ul = $carousel.children('ul');

	var len = $ul.children().length;
	var index = 0;

	// 自动轮播
	var timer;

	function showPic(){
		if(index < 0){
			index = len - 1;
		}else if(index > len - 1){
			index = 0;
		}

		$ul.children('li').eq(index).fadeIn().siblings().fadeOut();
	}

	// 鼠标移入移出轮播
	$carousel.on('mouseenter',function(){
		clearInterval(timer);
	}).on('mouseleave',function(){
		timer = setInterval(function(){
			index++;
			showPic();
		},3000)
	}).trigger('mouseleave');

	// 上一张/下一张
	$carousel.on('click','.prevv3',function(){
		index--;
		showPic();
	}).on('click','.nextv3',function(){
		index++;
		showPic();
	})




})