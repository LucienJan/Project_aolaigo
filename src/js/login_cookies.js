/*// ===========读取注册信息中的cookie========

	// 注册后显示已登录的页面
	var $username = $.cookie('username');
	var $password = $.cookie('password');
	console.log($username,$password);
	if($username != null && $password != null){
		$('.myCenter-before').hide();
		$('.myCenter-after').show();
	}

	// 登录后显示用户名(手机号)
	$('.deep-orange').html($username);


// ===========读取注册信息中的cookie========*/