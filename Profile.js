var socket = io.connect("http://localhost:5555");

var saveBtn = document.getElementById('profileSaveBtn'); 

saveBtn.addEventListener('click',function(){
	var obj = saveProfileInfo();
	socket.emit("PROFILE_DATA",obj);
});

// $('#profileSaveBtn').on('click',saveProfileInfo);
function saveProfileInfo(){
	var profileObj={};
	profileObj.userName = $('#profileUserName').val();
	profileObj.emailId = $('#profileEmail').val();
	profileObj.DOB = $('#profileDOB').val();
	return profileObj;
}