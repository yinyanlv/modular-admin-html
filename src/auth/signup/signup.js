//SignupForm validation
$(function() {
	if (!$('#signup-form').length) {
        return false;
    }

    var signupValidationSettings = {
	    rules: {
			username: {
	    		required: true,
	    	},
	        email: {
	            required: true,
	            email: true
	        },
	        password: {
				required: true,
				minlength: 8
	        },
	        retype_password: {
				required: true,
				minlength: 8,
				equalTo: "#password"
			},
			agree: {
				required: true,
			}
	    },
	    groups: {
			pass: "password retype_password",
		},
		errorPlacement: function(error, element) {
			if (
				element.attr("name") == "password" ||
				element.attr("name") == "retype_password"
			) {
				error.insertAfter($("#retype_password").closest('.row'));
				element.parents("div.form-group")
				.addClass('has-error');
			}
			else if (element.attr("name") == "agree") {
				error.insertAfter("#agree-text");
			}
			else {
				error.insertAfter(element);
			}
		},
	    messages: {
	    	username: "请输入用户名",
	        email: {
	            required: "请输入邮箱",
	            email: "您输入的邮箱地址格式不正确"
	        },
	        password: {
	        	required: "请输入密码",
	        	minlength: "密码最少包含8个字符"
	        },
	        retype_password: {
	        	required: "请输入密码",
	        	minlength: "密码最少包含8个字符"
	        },
	        agree: "请同意条款和政策"
	    },
	    invalidHandler: function() {
			animate({
				name: 'shake',
				selector: '.auth-container > .card'
			});
		}
	}

	$.extend(signupValidationSettings, config.validations);

    $('#signup-form').validate(signupValidationSettings);
});
