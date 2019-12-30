var userLogin = 'user@gmail.com';
var adminLogin = 'admin@gmail.com';
var inputLogin = prompt("Enter your login!");
if (inputLogin === '' || inputLogin === null){
	alert('Canceled');
} else if (inputLogin.length < 5){
	alert('I don\'t know any emails having name length less than 5 symbols');
} else if (inputLogin === userLogin || inputLogin === adminLogin){
	var inputPass = prompt("Enter your password");
	if (inputPass === '' || inputPass === null){
	alert('Canceled');
	} else if (inputLogin === userLogin && inputPass === 'UserPass' || inputLogin === adminLogin && inputPass === 'AdminPass') {
		var changePass = confirm('Change password?');
		if (changePass === true){
			var oldPass = prompt('Enter old password:');
			if (oldPass === inputPass){
				var newPass = prompt('Enter new password:');
                if (newPass === '' || newPass === null) {
                    alert('Password change canceled.');
                } else if (newPass.length < 6) {
                    alert('Your new password is to short. Sorry.');
                } else if (prompt('Please enter your new password again:') === newPass ) {
                    alert('You have successfully changed your password.');
                } else {
                    alert('Your password doesn\'t match.');
                }
			} else {
				alert('Wrong new password');
			}
		} else {
			alert('Failed change');
		} 
	} else {
		alert('Wrong password');
	}
} else {
	alert('I don\'t know you');
}