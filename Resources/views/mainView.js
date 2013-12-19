mainView = {};

mainView.open = function(config)
{
	var paramForWin = UIParams.paramForWin(config);
	var winWeek = UIComp.window(paramForWin);
	//var winMonth = UIComp.window(paramForWin);
	
	var viewWeek = mainView.getWeekView(config);
	winWeek.add(viewWeek);
	
	//var viewMonth = mainView.getMonthView(config);
	//winMonth.add(viewMonth);
	
	var tbGrp = UIComp.tabGroup();
	
	var tbWeek = UIComp.tab({title: 'Week', window: winWeek});
	//var tbMonth = UIComp.tab({title: 'Month', window: winMonth});
	
	tbGrp.addTab(tbWeek);
	//tbGrp.addTab(tbMonth);
	
	tbGrp.open();
};

mainView.getWeekView = function(config)
{
	var paramForMainView = UIParams.paramForParentView(config);
	var viewMain = UIComp.view(paramForMainView);
	var todayInfo = model.getTodayDay(config);
	var rowArray = [];
	for(var iRowCount = 0; iRowCount < 9; iRowCount++)
	{
		var row = Titanium.UI.createTableViewRow({
			height: Ti.UI.SIZE
		});
		var rowView = UIComp.view({left: 0, top: 0, width: Ti.UI.FILL, height: Ti.UI.SIZE, layout: 'horizontal'});
		row.add(rowView);
		for(day in config.week)
		{
			if(day == todayInfo['dayIndex'])
				var view = Titanium.UI.createView({
				  backgroundColor:'blue',
				  left: 5, top: 5, width: '13%', height: 50, borderRadius: '5px', 
				  borderColor: 'black'
				});
			else
				var view = Titanium.UI.createView({
				  left: 5, top: 5, width: '13%', height: 50, borderRadius: '5px', 
				  borderColor: 'black'
				});
			rowView.add(view);
		}
		rowArray.push(row);
	}
	var tblView = UIComp.tableView({
		left: '10%',
		top: 0,
		data: rowArray,
		style: Ti.UI.iPhone.TableViewStyle.GROUPED,
		backgroundColor: 'white'
	});
	
	var headerView = mainView.getHeaderView(config, todayInfo); 
	viewMain.add(headerView);
	viewMain.add(tblView);
	return viewMain;
};

mainView.getMonthView = function(config)
{
	for(var iRowWeek = 0; iRowWeek < 6; iRowWeek++)
	{
		var row = Titanium.UI.createTableViewRow({
			height: Ti.UI.SIZE
		});
		var rowView = UIComp.view({left: 0, top: 0, width: Ti.UI.FILL, height: Ti.UI.SIZE, layout: 'horizontal'});
		row.add(rowView);
		
	}
};

mainView.getHeaderView = function(config, todayInfo)
{
	var paramHeaderDayView = UIParams.paramForHeaderView(config);
	var headerView = UIComp.view(paramHeaderDayView);
	for(day in config.week)
	{
		if(day == todayInfo['dayIndex'])
			var paramLabelDayHeader = UIParams.paramForTodayLabelHeader(config);
		else
			var paramLabelDayHeader = UIParams.paramForDayLabelHeader(config);
		var sDateText = todayInfo.date - todayInfo.dayIndex+parseInt(day);
		paramLabelDayHeader.text = sDateText+' '+config.week[day];
		var lblDay = UIComp.label(paramLabelDayHeader);
		headerView.add(lblDay);
	}
	return headerView;
};

