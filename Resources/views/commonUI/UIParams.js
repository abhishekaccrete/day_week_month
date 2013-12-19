/**
 * @author Abhishek
 */
UIParams = {};

UIParams.paramForTabCreate = function(config)
{
	return {
		title: 'Create'
	};
};

UIParams.paramForTabSettings = function(config)
{
	return {
		title: 'Settings'
	};
};

UIParams.paramForTabMyAutographs = function(config)
{
	return {
		title: 'My Autographs'
	};
};

UIParams.paramForTabUsers = function(config)
{
	return {
		title: 'Users'
	};
};

UIParams.paramForTabAbout = function(config)
{
	return {
		title: 'About Us'
	};
};

UIParams.paramForWin = function(config)
{	
	return {
		backgroundColor: 'white',
		exitOnClose: true,
		fullscreen: false,
		height: Ti.UI.FILL
	};
};

UIParams.paramForParentView = function(config)
{
	return {
		left: 0,
		top: 0,
		width: Ti.UI.FILL,
		height: Ti.UI.FILL,
		backgroundColor: 'gray',
		layout: 'vertical'
	};
};

UIParams.paramForTxtFldEmail = function(config)
{
	return {
		left: '10%',
		top: 20,
		width: '80%',
		height: Ti.UI.SIZE,
		hintText: 'Email',
		keyboardType: Ti.UI.KEYBOARD_EMAIL ,
		borderRadius: '2px',
		borderWidth: '2px',
		borderColor: 'black',
		backgroundColor: 'white',
		color: 'black'
	};
};

UIParams.paramForTxtFldFirstName = function(config)
{
	return {
		left: '10%',
		top: 20,
		width: '80%',
		height: Ti.UI.SIZE,
		hintText: 'First Name',
		borderRadius: '2px',
		borderWidth: '2px',
		borderColor: 'black',
		backgroundColor: 'white',
		color: 'black'
	};
};

UIParams.paramForTxtFldLastName = function(config)
{
	return {
		left: '10%',
		top: 20,
		width: '80%',
		height: Ti.UI.SIZE,
		hintText: 'Last Name',
		borderRadius: '2px',
		borderWidth: '2px',
		borderColor: 'black',
		backgroundColor: 'white',
		color: 'black'
	};
};

UIParams.paramForTxtFldUserName = function(config)
{
	return {
		left: '10%',
		top: 20,
		width: '80%',
		height: Ti.UI.SIZE,
		hintText: 'User name',
		borderRadius: '2px',
		borderWidth: '2px',
		borderColor: 'black',
		backgroundColor: 'white',
		color: 'black'	
	};
};

UIParams.paramForTxtFldPassword = function(config)
{
	return {
		left: '10%',
		top: 20,
		width: '80%',
		height: Ti.UI.SIZE,
		hintText: 'Password',
		passwordMask: true,
		borderRadius: '2px',
		borderWidth: '2px',
		borderColor: 'black',
		backgroundColor: 'white',
		color: 'black'
	};
};

UIParams.paramForTxtFldConfirmPassword = function(config)
{
	return {
		left: '10%',
		top: 20,
		width: '80%',
		height: Ti.UI.SIZE,
		hintText: 'Confirm Password',
		passwordMask: true,
		borderRadius: '2px',
		borderWidth: '2px',
		borderColor: 'black',
		backgroundColor: 'white',
		color: 'black'
	};
};


UIParams.paramForCreateUserButton = function(config)
{
	return {
		left: '10%',
		top: 5,
		width: '80%',
		height: Ti.UI.SIZE,
		title: 'Create User'
	};
};

UIParams.paramForButton = function(config)
{
	return {
		left: '10%',
		top: 10,
		width: '80%',
		height: Ti.UI.SIZE,
		borderColor: 'black',
		backgroundColor: 'white',
		borderRadius: '5px',
		color: 'blue'
	};
};

UIParams.paramForLabel = function(config)
{
	return {
		left: '10%',
		top: 5, 
		width: '80%',
		height: Ti.UI.SIZE
	};
};

UIParams.paramAlertDialogLogOut = function(config)
{
	return {
		cancel: 1,
    	buttonNames: ['Yes', 'No'],
    	message: 'Are you sure you want to log out?',
    	title: 'Log out'
	};
};

UIParams.paramForMapView = function(config)
{
	return {
		left: 0,
		top: 0,
		width: Ti.UI.FILL,
		height: '80%',
		userLocation: true,
		regionFit: true,
		mapType: Titanium.Map.STANDARD_TYPE
	};
};

UIParams.paramForBtnPhotoGallery = function(config)
{
	return {
		left: '10%',
		top: 5,
		width: '80%',
		height: Ti.UI.SIZE,
		title: 'Open Gallery',
		borderColor: 'black',
		backgroundColor: 'white',
		borderRadius: '5px',
		color: 'blue'
	};
};

UIParams.paramForBtnCamera = function(config)
{
	return {
		left: '10%',
		top: 5,
		width: '80%',
		height: Ti.UI.SIZE,
		title: 'Camera',
		borderColor: 'black',
		backgroundColor: 'white',
		borderRadius: '5px',
		color: 'blue'
	};
};

UIParams.paramForBottomView = function(config)
{
	return {
		left: 0,
		top: 0,
		width: Ti.UI.FILL,
		height: Ti.UI.FILL,
		backgroundColor: 'black',
		borderRadius: '2px',
		borderColor: 'white'
	};
};

UIParams.paramForPhotoGallery = function(config)
{
	return {
		allowEditing: true,
		saveToPhotoGallery:true,
		animated: true,
		autoHide: true,
		mediaTypes: Ti.Media.MEDIA_TYPE_PHOTO
	};
};

UIParams.paramForCamera = function(config)
{
	return {
		allowEditing: true,
		saveToPhotoGallery:true,
		animated: true,
		autoHide: true,
		mediaTypes: Ti.Media.MEDIA_TYPE_PHOTO
	};
};

UIParams.paramForImageView = function(config)
{
	return {
		left: 0,
		top: 0,
		width: Ti.UI.FILL,
		height: Ti.UI.FILL,
		borderRadius: '2px',
		borderColor: 'black'
	};
};

UIParams.paramForWebViewSettings = function(config)
{
	return {
		left: 0,
		top: 0,
		width: Ti.UI.FILL,
		height: Ti.UI.FILL
	};
};

UIParams.paramForWebViewAbout = function(config)
{
	return {
		left: 0,
		top: 0,
		width: Ti.UI.FILL,
		height: Ti.UI.FILL
	};	
};

UIParams.paramForHeaderView = function(config)
{
	return {
		left: '10%',
		top: 0,
		width: Ti.UI.FILL,
		height: '10%',
		layout: 'horizontal'
	};
};

UIParams.paramForDayLabelHeader = function(config)
{
	return {
		left: 5,
		top:5,
		width: '13%', 
		height: Ti.UI.SIZE,
		text: config.week[day],
		font: 
		{
			fontSize: 12
		}
	};
};

UIParams.paramForTodayLabelHeader = function(config)
{
	return {
		left: 5,
		top:5,
		width: '13%', 
		height: Ti.UI.SIZE,
		text: config.week[day],
		color: 'blue',
		font: 
		{
			fontSize: 12,
			fontWeight: 'bold'
		}
	};	
};
