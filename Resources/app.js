config = 
{
	osname: Ti.Platform.osname,
	resPath: Ti.Filesystem.resourcesDirectory,
	platformWidth: Ti.Platform.displayCaps.platformWidth,
	platformHeight: Ti.Platform.displayCaps.platformHeight,
	resPath: Ti.Filesystem.resourcesDirectory,
	viewPath: Ti.Filesystem.resourcesDirectory+'views/',
	modelPath: Ti.Filesystem.resourcesDirectory+'model/',
	cloud: require('ti.cloud'),
	week:{
		0: 'Monday',
		1: 'Tuesday',
		2: 'Wednesday',
		3: 'Thursday',
		4: 'Friday',
		5: 'Saturday',
		6: 'Sunday'
	},
	year: {
		0: 31,
		1: 28,
		2: 31,
		3: 30,
		4: 31,
		5: 30,
		6: 31,
		7: 31,
		8: 30,
		9: 31,
		10: 30,
		11: 31
	}
};

try
{
	Ti.include(config.viewPath+'commonUI/UIParams.js');
	Ti.include(config.viewPath+'commonUI/UIComp.js');
	Ti.include(config.modelPath+'model.js');
	Ti.include(config.viewPath+'mainView.js');
	mainView.open(config);
}
catch(e)
{
	alert(e);
}
