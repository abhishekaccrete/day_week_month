mainView = {};

//this rules the week's start date, initialized to current week's start date
mainView.currentDateInfo = new Date();

mainView.open = function(config)
{
	var tbGroup = UIComp.tabGroup();
	var winWeek = UIComp.window({title: 'Week', backgroundColor: 'white'});
	//set the current date
	var today = new Date();
	mainView.currentDateInfo.date = today;
	var parentView = mainView.getView(config);
	winWeek.add(parentView);
	var tbWeek = UIComp.tab({window: winWeek});
	tbGroup.addTab(tbWeek);
	tbGroup.open();
};

mainView.getView = function(config)
{
	var parentView = UIComp.view({left: 0, top: 0, width: Ti.UI.FILL, height: Ti.UI.FILL, layout: 'vertical'});
	var topView = UIComp.view({left: 0, top: 0, width: Ti.UI.FILL, height: '10%', backgroundColor: 'gray'});
	//get the navigable view
	var navView = mainView.getNavView(config);
	topView.add(navView);
	//view for table view
	var calendarView = UIComp.view({left: 0, top: 0, width: Ti.UI.FILL, height: Ti.UI.FILL, backgroundColor: 'silver'});
	//get current week's dates
	var dateInfo = mainView.getCurrentWeekDates(config);
	var dayIndexView = mainView.getHeaderViewBasedOnWeek(config, dateInfo);
	var tblData = model.parseInspectionsForWeek(config);
	tblViewInspections = UIComp.tableView({left: 0, backgroundColor: 'white', data: tblData, style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	headerView: dayIndexView});
	calendarView.add(tblViewInspections);
	parentView.add(topView);
	parentView.add(calendarView);
	return parentView;
};

mainView.getNavView = function(config)
{
	var navView = UIComp.view({left: 10, top: 5, width: Ti.UI.SIZE, height: Ti.UI.SIZE, layout: 'horizontal'});
	var btnPrevious = UIComp.button({left: 0, top: 0, width: Ti.UI.SIZE, height: Ti.UI.SIZE, title: '<', 
	borderRadius: '3px', borderColor: 'blue', backgroundColor: 'white'});
	var btnToday = UIComp.button({left: 1, top: 0, width: Ti.UI.SIZE, height: Ti.UI.SIZE, title: 'Today',
	borderRadius: '3px', borderColor: 'blue', backgroundColor: 'white'});
	var btnNext = UIComp.button({left: 1, top: 0, width: Ti.UI.SIZE, height: Ti.UI.SIZE, title: '>',
	borderRadius: '3px', borderColor: 'blue',backgroundColor: 'white'});
	var currentWeekStartDate = new Date();
	currentWeekStartDate.setMonth(currentWeekStartDate.getMonth(), currentWeekStartDate.getDate()-currentWeekStartDate.getDay());
	mainView.currentDateInfo = currentWeekStartDate;
	navView.add(btnPrevious);
	navView.add(btnToday);
	navView.add(btnNext);
	btnNext.addEventListener('click',function(e)
	{
		var nextWeekStartDate = new Date();
		nextWeekStartDate.setMonth(mainView.currentDateInfo.getMonth(), mainView.currentDateInfo.getDate()+7);
		for(var iCount = 0; iCount < 7; iCount ++)
		{
			var day = new Date();
			day.setMonth(nextWeekStartDate.getMonth(),nextWeekStartDate.getDate()+iCount);
			e.source.parent.parent.parent.children[1].children[0].headerView.children[iCount].setText(day.getDate()+' '+config.week[iCount]);
		}
		mainView.currentDateInfo = nextWeekStartDate;
		var tblData = model.parseInspectionsForWeek(config);
		tblViewInspections.setData(tblData);
	});
	btnPrevious.addEventListener('click',function(e)
	{
		var previousWeekStartDate = new Date();
		var dayPrevious = mainView.currentDateInfo.getDate()-7;
		previousWeekStartDate.setFullYear(mainView.currentDateInfo.getFullYear(), mainView.currentDateInfo.getMonth(), mainView.currentDateInfo.getDate()-7);
		for(var iCount = 0; iCount < 7; iCount ++)
		{
			var day = new Date();
			day.setMonth(previousWeekStartDate.getMonth(),previousWeekStartDate.getDate()+iCount);
			e.source.parent.parent.parent.children[1].children[0].headerView.children[iCount].setText(day.getDate()+' '+config.week[iCount]);
		}
		mainView.currentDateInfo = previousWeekStartDate;
		var tblData = model.parseInspectionsForWeek(config);
		tblViewInspections.setData(tblData);
	});
	btnToday.addEventListener('click',function(e)
	{
		var currentWeekStartDate = new Date();
		currentWeekStartDate.setMonth(currentWeekStartDate.getMonth(), currentWeekStartDate.getDate()-currentWeekStartDate.getDay());
		for(var iCount = 0; iCount < 7; iCount ++)
		{
			var day = new Date();
			day.setMonth(currentWeekStartDate.getMonth(),currentWeekStartDate.getDate()+iCount);
			e.source.parent.parent.parent.children[1].children[0].headerView.children[iCount].setText(day.getDate()+' '+config.week[iCount]);
		}
		mainView.currentDateInfo = currentWeekStartDate;
		var tblData = model.parseInspectionsForWeek(config);
		tblViewInspections.setData(tblData);
	});
	return navView;
};

mainView.getHeaderViewBasedOnWeek = function(config, dateInfo)
{
	var dayIndexView = UIComp.view({left: 0, top: 0, width: Ti.UI.SIZE, height: Ti.UI.SIZE, layout: 'horizontal', 
	backgroundColor: 'brown'});
	for(day in config.week)
	{
		var lblDay = UIComp.label({left: 0, top: 0, width: '13%', height: Ti.UI.SIZE, text: dateInfo[day]+' '+config.week[day]});
		dayIndexView.add(lblDay);
	}
	return dayIndexView;
};

mainView.getCurrentWeekDates = function(config, weekStartDate)
{
	//get today's date
	var todayDate = new Date();
	//get today's day index of the week sunday = 0
	var dayIndex = todayDate.getDay();
	//current week's start date
	var currentWeekStartDate = new Date();
	currentWeekStartDate.setMonth(currentWeekStartDate.getMonth(),todayDate.getDate()-dayIndex);
	var currentWeekEndDate = new Date();
	currentWeekEndDate.setMonth(currentWeekEndDate.getMonth(), todayDate.getDate()+6-dayIndex);
	var dateArray = [];
	for(var iCount = 0; iCount < 7; iCount++)
	{
		var day1 = new Date();
		day1.setMonth(day1.getMonth(),currentWeekStartDate.getDate()+iCount);
		dateArray[iCount] = day1.getDate();
	}
	return dateArray;
};
