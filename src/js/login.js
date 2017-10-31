$(function(){
	// 登录前切换登录方式
	$('#divLoginQR').click(function(){
		$('#divPC').hide();
		$('#divQR').fadeIn();
	});
	$('#divLoginPC').click(function(){
		$('#divQR').hide();
		$('#divPC').fadeIn();
	});




	var $loginname = $('#loginname');
	var $loginpwd = $('#loginpwd');
	var $validationCode = $('#txtValidationCode').val();
	var $chkremenberMe = '';

	// 登录按钮
	$('#btn-login').click(function(){
		// 重置错误提示
		$('#loginname').parent().children('div.error').html('');
		$('#loginpwd').parent().children('div.error').html('');

		// 判断用户名和密码是否与cookie匹配
			if($('#loginname').val() != $.cookie('username')){
				$('#loginname').parent().children('div.error').html('用户名不存在，请注册')
			}else if($('#loginpwd').val() != $.cookie('password')){
				$('#loginpwd').parent().children('div.error').html('密码错误，请重新输入');
			}else{
				$('.myCenter-before').hide(300);
				$('.myCenter-after').show(300);
				$('.deep-orange').html($.cookie('username'));
			}

	});
	// 点击进入个人中心返回普通登录
	$('#toLogin').click(function(){
		$('.myCenter-after').hide(300);
		$('.myCenter-before').show(300);

		// 重置用户名密码输入框
		$loginname.val('');
		$loginpwd.val('');
		// 重置错误提示
		$loginname.parent().children('div.error').html('');
		$loginpwd.parent().children('div.error').html('');
	})




	// 按回车键提交登录
	$('#loginname, #loginpwd, #txtValidationCode').bind('keyup',function(e){
		if(e.keyCode == 13){
			$('#btn-login').click();
		}
	});





	// 用户名获得焦点时
	$('#loginname').focus(function(){
		$('#loginname').parent().children('div.error').html('');
	});
	// 用户名失去焦点时
	$('#loginname').blur(function(){
		// 判断是否存在或为空
		if($('#loginname').val() == true || $('#loginname').val() == ''){
			$('#loginname').parent().children('div.error').html('请输入用户名');
		}
	});

	// 密码获得焦点时
	$('#loginpwd').focus(function(){
		$('#loginpwd').parent().children('div.error').html('');
	})
	// 密码失去焦点时
	$('#loginpwd').blur(function(){
		// 判断是否存在或为空
		if($('#loginpwd').val() == true || $('#loginpwd').val() == ''){
			$('#loginpwd').parent().children('div.error').html('请输入密码');
		}
	})
})