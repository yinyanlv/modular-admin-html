//LoginForm validation
$(function() {
	if (!$('#login-form').length) {
        return false;
    }

    var loginValidationSettings = {
	    rules: {
	        username: {
	            required: true
	        },
	        password: "required",
	        agree: "required"
	    },
	    messages: {
	        username: {
	            required: "请输入用户名"
	        },
	        password:  "请输入密码",
	        agree: "请同意我们的条款"
	    },
	    invalidHandler: function() {
			animate({
				name: 'shake',
				selector: '.auth-container > .card'
			});
		}
	}

	$.extend(loginValidationSettings, config.validations);

    $('#login-form').validate(loginValidationSettings);
})
