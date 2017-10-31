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