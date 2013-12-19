model = {};

model.createUser = function(config, userInfo, callBack)
{
	var user = config.cloud.Users.create(userInfo, function(e)
	{
		callBack(e);
	});
};

model.loginUser = function(config, userInfo, callBack)
{
	var user = config.cloud.Users.login(userInfo, function(e)
	{
		callBack(e);
	});
};

model.saveImgToAndroidGallery = function(config, blob, fileName)
{
	var parentPath = Ti.Filesystem.getExternalStorageDirectory();
	var file = Ti.Filesystem.getFile(Titanium.Filesystem.externalStorageDirectory + "/" + fileName);
	try
	{
		file.write(blob);
		alert('File saved successfully');
	}
	catch(e)
	{
		alert('Error occured while saving file:'+e);
	}
};

model.saveImageToPhotoGallery = function(config, blobImage)
{
	var parentPath = Ti.Filesystem.getApplicationDataDirectory();
	var file = Ti.Filesystem.getFile(parentPath,'autograph.png');
	
	file.write(blobImage);
	try
	{
		Ti.Media.saveToPhotoGallery(file,
		{
			success: function(e) 
			{
				Titanium.UI.createAlertDialog(
					{
						title:'Photo Gallery',
						message:'Autograph saved'
					}).show();		
			},
			error: function(e) 
			{
				Titanium.UI.createAlertDialog(
				{
					title:'Error saving autograph',
					message:e.error
				}).show();
			}
		});
	}
	catch(e)
	{
		alert(e);
	}
};

model.getFileExtFromMimeType = function(config, mimeType)
{
	var mimeTypeArray = mimeType.split("/");
	if(mimeTypeArray[1]== 'jpeg')
		return 'jpg';
	else
		return mimeTypeArray[1];
};

model.getFieldCount = function(resultSet)
{
	var totalFields = 0;
	if(config.osname == 'android')
	{
		totalFields = resultSet.fieldCount;
	}
	else
	{
		totalFields = resultSet.fieldCount();
	}
	return totalFields;
};


model.parseSettings = function(config)
{
	var settingsDB = dblayer.getSettings(config);
	var totalField = model.getFieldCount(settingsDB);
	var jsonSettings = {};
	while(settingsDB.isValidRow())
	{
		for(var iFieldCount = 0; iFieldCount < totalField; iFieldCount++)
		{
			jsonSettings[settingsDB.fieldName(iFieldCount)] = settingsDB.field(iFieldCount);
		}
		settingsDB.next();
	}
	return jsonSettings;
};

model.saveSettings = function(config, settings)
{
	dblayer.saveSettings(config, settings);
};

//For todays date;
Date.prototype.today = function()
{
	return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"
	+(((this.getMonth()+1) < 10)?"0":"") 
	+ (this.getMonth()+1) +"/"+ this.getFullYear(); 
};

//For the time now
Date.prototype.timeNow = function()
{
	return ((this.getHours() < 10)?"0":"") + this.getHours() +":"
	+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"
	+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
};

model.getTodayDay = function(config)
{
	var today = new Date();
	return {
		date: today.getDate(),
		day: config.week[today.getDay()-1],
		dayIndex: today.getDay()-1
	};
	//config.week[today.getDay()];
};

model.getTableViewRows = function(config)
{
	
};
