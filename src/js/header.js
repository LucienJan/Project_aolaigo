$(function(){
	// top-bar鼠标移入奥特莱斯购物中心li显示列表
	$('.top-tips-aolaigou').on('mouseenter',function(){
		$('.com-tips-box').css('display','block');
	}).on('mouseleave',function(){
		$('.com-tips-box').css('display','none');
	})

	// 鼠标移入全部商品时显示左侧列表
	$('.top-select').mouseover(function(){
		if($(this).hasClass("closed") == true){
			$('.top-select-cont').css('display','block');
			$('.top-select').removeClass('closed');
		}
		// 显示全部列表
		$('.top-select-bar li').mouseover(function(){
			$(this).addClass('active').siblings().removeClass('active');
			$(this).children('.books').css('display','block').parent().siblings().children('.books').css('display','none');
			// 鼠标移出时隐藏
			$(this).children('.books').mouseout(function(){
				$('.top-select-cont').css('display','none');
				$('.top-select').addClass('closed');
			})
		}).mouseout(function(){
			// 鼠标移出时隐藏
			$('.top-select-cont').css('display','none');
			$('.top-select').addClass('closed');
		})
	}).mouseout(function(){
		// 鼠标移出时隐藏
		$('.top-select-cont').css('display','none');
		$('.top-select').addClass('closed');
	})

	// 鼠标移出隐藏列表


	/*$('.top-select').mouseout(function(){
		if($('.top-select').hasClass("closed") == false)
		$('.top-select-cont').css('display','none');
		$('.top-select').addClass('closed');
	})*/

})