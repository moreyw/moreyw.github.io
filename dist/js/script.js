/*!

 */

$('#confirmPassword').change(function() {
		
        if(document.getElementById("confirmPassword").value == document.getElementById("inputPassword").value) {
            document.getElementById("confirmWarningIcon").style.display="none";
            document.getElementById("passwordWarning").style.display="none";
            document.getElementById('confirmPasswordForm').className = "form-group ";
            
        } else {
        	//document.getElementById("confirmPasswordForm").className = "form-group";
            document.getElementById('confirmPasswordForm').className = "form-group has-error has-feedback";
            document.getElementById("confirmWarningIcon").style.display="block";
            document.getElementById("passwordWarning").style.display="block";
        }
    });

$('#inputPassword').change(function() {
        if(document.getElementById("confirmPassword").value == document.getElementById("inputPassword").value) {
            document.getElementById("confirmWarningIcon").style.display="none";
            document.getElementById("passwordWarning").style.display="none";
            document.getElementById('confirmPasswordForm').className = "form-group ";
            
        } else {
        	//document.getElementById("confirmPasswordForm").className = "form-group";
            document.getElementById('confirmPasswordForm').className = "form-group has-error has-feedback";
            document.getElementById("confirmWarningIcon").style.display="block";
            document.getElementById("passwordWarning").style.display="block";
        }
    });