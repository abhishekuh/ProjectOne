$('#profileSaveBtn').on('click',saveProfileInfo);
function saveProfileInfo(){
	var profileObj={};
	profileObj.userName = $('#profileUserName').val();
	profileObj.emailId = $('#profileEmail').val();
	return profileObj;
}