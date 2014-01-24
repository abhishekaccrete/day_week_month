config = 
{
	osname: Ti.Platform.osname,
	resPath: Ti.Filesystem.resourcesDirectory,
	platformWidth: Ti.Platform.displayCaps.platformWidth,
	platformHeight: Ti.Platform.displayCaps.platformHeight,
	resPath: Ti.Filesystem.resourcesDirectory,
	viewPath: Ti.Filesystem.resourcesDirectory+'views/',
	modelPath: Ti.Filesystem.resourcesDirectory+'model/',
	dbPath: Ti.Filesystem.resourcesDirectory+'Inspections.db',
	cloud: require('ti.cloud'),
	week:{
		0: 'Sunday',
		1: 'Monday',
		2: 'Tuesday',
		3: 'Wednesday',
		4: 'Thursday',
		5: 'Friday',
		6: 'Saturday'
	},
	month: {
		0: '01',
		1: '02',
		2: '03',
		3: '04',
		4: '05',
		5: '06',
		6: '07',
		7: '08',
		8: '09',
		9: '10',
		10: '11',
		11: '12',
	}
	,
	
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
	Ti.include(config.modelPath+'dblayer.js');
	Ti.include(config.modelPath+'model.js');
	Ti.include(config.viewPath+'mainView.js');
	
	config.db = Ti.Database.install(config.dbPath,'Inspections_app');
	mainView.open(config);
}
catch(e)
{
	alert(e);
}
