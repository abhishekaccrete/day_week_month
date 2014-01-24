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
		day: config.week[today.getDay()],
		dayIndex: today.getDay(),
		dateObj: today,
		monthIndex: today.getMonth()
	};
};

model.getFirstDayInfo = function(config, dateObj)
{
	return {
		date: dateObj.getDate(),
		day: config.week[dateObj.getDay()],
		dayIndex: dateObj.getDay()
	};
};

model.getTableViewRows = function(config)
{
	
};

model.getAreas = function(config)
{
	var areas = dblayer.getAreas(config);
	var totalFields = model.getFieldCount(areas);
	var areasArray = [];
	for(var iRowCount = 0; iRowCount < areas.rowCount; iRowCount++)
	{
		var areaRow = [];
		for(var iFieldCount = 0; iFieldCount < totalFields; iFieldCount++)
		{
			areaRow[areas.fieldName(iFieldCount)] = areas.field(iFieldCount);
		}
		areasArray.push(areaRow);
		areas.next();
	}
	return areasArray;
};

model.getFormattedDate = function(config, date)
{
	var sYear = date.getFullYear();
	var sMonth = config.month[date.getMonth()];
	var sDate = date.getDate();
	return sYear+sMonth+sDate;
};

model.parseInspectionsForWeek = function(config)
{
	var tblViewData = [];
	//get the areas
	var areas = model.getAreas(config);
	for(var iRowCount = 0; iRowCount < areas.length; iRowCount++)
	{
		var tblViewRow = UIComp.tableViewRow({height: 50});
		var rowView = UIComp.view({left: 0, top: 0, width: Ti.UI.FILL, height: 50, 
			layout: 'horizontal', backgroundColor: 'gray'});
		var lblArea = UIComp.label({left: 5, width: 150, height: Ti.UI.SIZE, text: areas[iRowCount]['Area']});
		rowView.add(lblArea);
		tblViewRow.add(rowView);
		for(days in config.week)
		{
			var viewParams = model.inspection_existence(config, mainView.currentDateInfo, days, areas[iRowCount]);
			var dayView = UIComp.view(viewParams);
			dayView.addEventListener('click',function(e)
			{
				if(e.source.backgroundColor == 'blue')
				{
					var optionDialog = Ti.UI.createOptionDialog(
					{
						options: ['Process Inspection','Cancel']
					});
					optionDialog.addEventListener('click',function(e)
					{
						var winProcess = UIComp.window({title: 'Process', backgroundColor: 'white'});
						winProcess.open();
					});
					optionDialog.show();
				}
				else
				{
					var alertDialog = Ti.UI.createAlertDialog({
						title: 'test',
						view: e.source,
						buttonNames: ['Set', 'Cancel']
					});
					alertDialog.addEventListener('click',function(e)
					{
						if(e.index == 0)
						{
							e.source.view.setBackgroundColor('blue');
						}
					});
					alertDialog.show();					
				}
			});
			rowView.add(dayView);
		}
		tblViewData.push(tblViewRow);
	}
	return tblViewData;	
};

model.inspection_existence = function(config, weekStartDate, days, areaInfo)
{
	var dayViewParameters = [];
	var date = new Date();
	date.setMonth(weekStartDate.getMonth(), weekStartDate.getDate()+parseInt(days));
	var day = (date.getDate()<10) ? '0'+date.getDate():date.getDate();
	var dateFormatted = date.getFullYear()+ config.month[date.getMonth()]+day;
	var inspection = dblayer.getInspectionForDay(config, dateFormatted, areaInfo['AreaID']);
	var	inspection_result = {
		left: 5, top: 5, width: '11%', height: '85%', 
		borderWidth: '2px', borderRadius: '5px', borderColor: 'black',
		area: areaInfo,date: new Date(mainView.currentDateInfo.getMonth(),mainView.currentDateInfo.getDate()+parseInt(days)),
		data: []
	};
	//there will exist one inspection for an area and a day.
	//inspection will have multiple records depending on the questions.
	if(inspection.rowCount > 0)
	{
		inspection_result.backgroundColor = 'green'; 		
		var totalField = model.getFieldCount(inspection);
		while(inspection.isValidRow())
		{
			var inspection_row = [];
			for(var iFieldCount = 0; iFieldCount < totalField; iFieldCount++)
			{
				inspection_row[inspection.fieldName(iFieldCount)] = inspection.field(iFieldCount);
			}
			inspection_result.data.push(inspection_row);
			inspection.next();
		}		
		Ti.API.info(inspection_result);
	}
	else
	{
		inspection_result.backgroundColor = 'white';
	}
	return inspection_result;
};
