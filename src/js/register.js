$(function(){
	var $txtUserName = $('#txtUserName');
	// var $_txtUserName = $('#txtUserName').val();
	var $txtPassword = $('#txtPassword');
	// var $_txtPassword = $('#txtPassword').val();
	var $txtRePassword = $('#txtRePassword');
	// var $_txtRePassword = $('#txtRePassword').val();
	var $txtValidationCode1 = $('#txtValidationCode1');

// ========提示信息========
// 用户名
	$txtUserName.focus(function(){
		$('.usererr').html('请输入注册的手机号').css('color','#000');
	}).blur(function(){
		$('.usererr').html('');
		if($txtUserName.val()){
			if(!/^.{4,50}$/gi.test($txtUserName.val())){
				$('.usererr').html('用户名长度只能在4-50位字符之间').css('color','red');
				return false;
			}
			else if(!/^\d{11}$/gi.test($txtUserName.val())){
				$('.usererr').html('账号暂时只开放手机号注册,请输入11位数字').css('color','red');
				return false;
			}
		}
	})
// 输入密码
	$txtPassword.focus(function(){
		$('.pwderr').html('6-20位字符,可使用字母、数字或字符的组合').css('color','#000');
	}).blur(function(){
		$('.pwderr').html('');
		if($txtPassword.val()){
			if(/^.{1,5}$/gi.test($txtPassword.val())){
				$('.pwderr').html('密码长度只能在6-20位之间').css('color','red');
				return false;
			}
			else if(!/^[\da-z]{6,20}$/gi.test($txtPassword.val())){
				$('.pwderr').html('密码含有非法字符!').css('color','red');
				return false;
			}
		}
	})
// 确认密码
	$txtRePassword.focus(function(){
		$('.repwderr').html('请再次输入密码').css('color','#000');
	}).blur(function(){
		$('.repwderr').html('');
		if($txtRePassword.val() != $txtPassword.val()){
			$('.repwderr').html('两次输入密码不一致').css('color','red');
			// return $txtRePassword.val() = false;
		}
		else if($txtRePassword.val() == $txtPassword.val() || $txtRePassword.val('')){
			$('.repwderr').html('');
		}
		/*else if($txtRePassword.val('')){
			$('.repwderr').html('');
		}*/
	})
// 图形验证码
	$txtValidationCode1.focus(function(){
		$('.autherr1').html('输入验证码').css('color','#000');
	}).blur(function(){
		if($txtValidationCode1.val() == false){
			$('.autherr1').html('请输入验证码').css('color','red');
		}else{
			$('.autherr1').html('');
		}
	})
// ========提示信息========


// ========验证码图片 start========
	var $imgValidCode = $('#imgValidCode');
	$imgValidCode.click(function(){
		this.src='http://member.aolaigo.com/handlers/validcode.ashx?r=' + Math.random();
		// 清空输入框
		$txtValidationCode1.val('');
	})
// ========验证码图片 end========


// ========按回车提交注册 start========
	/*$('#txtUserName, #txtPassword, #txtRePassword, #txtValidationCode1').bind('keyup',function(e){
		if(e.keyCode == 13){
			$('#btnSubmit').click();
		}
	})*/

	$(document).keyup(function(e){
		if(e.keyCode == 13){
			$('#btnSubmit').click();
		}
	})
// ========按回车提交注册 end========



// ========利用cookie保存注册信息========
	$('#btnSubmit').click(function(){
		// 获取cookie
		var $username = $.cookie('username',$('#txtUserName').val(),{expires:7},{path:"/"});
		var $password = $.cookie('password',$('#txtPassword').val(),{expires:7},{path:"/"});
		console.log($username,$password);
		// 当输入的注册信息无误后保存cookie
		if($('#txtUserName').val() == false || $('#txtPassword').val() == false || $('#txtRePassword').val() == false || $('#txtValidationCode1').val() == false){
			$.cookie('username', '', {expires:-1});
			$.cookie('password', '', {expires:-1});
			// location.href = '';
			return;
		}
		/*if($('.usererr').html('') || $('.pwderr').html('') || $('.repwderr').html('') || $('.autherr1').html('')){
			$.cookie('usernmae', '', {expires:-1});
			$.cookie('password', '', {expires:-1});
			return;
		}*/

		else{
			if($username != null && $password != null){
				location.href = '../html/login.html';
			}
		}
	})
// ========利用cookie保存注册信息========



})