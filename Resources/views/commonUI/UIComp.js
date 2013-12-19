UIComp = {};

UIComp.window = function(winParams)
{
	var w =  Ti.UI.createWindow(winParams);
	return w;
};

UIComp.scrollView = function()
{
	return Titanium.UI.createScrollView(
	{
		top:0,
		contentWidth:config.platformWidth,
		contentHeight:'auto',
		showVerticalScrollIndicator:true,
		layout: 'vertical'
	});
};

UIComp.navGroup = function(win)
{
	return Ti.UI.iPhone.createNavigationGroup({
		window: win
	});
};

UIComp.label = function(lblParams)
{
	return Ti.UI.createLabel(lblParams);
};


UIComp.tabGroup = function()
{
	return Ti.UI.createTabGroup();
};

UIComp.tab = function(tbParams)
{
	return Ti.UI.createTab(tbParams);
};

UIComp.textField = function(txtFldParams)
{
	return Ti.UI.createTextField(txtFldParams);;
};

UIComp.annotation = function(annotationParams)
{
	return Titanium.Map.createAnnotation(annotationParams);
};

UIComp.mapView = function(mapViewParams)
{
	return Ti.Map.createView(mapViewParams);
};

UIComp.view = function(viewParams)
{
	return Ti.UI.createView(viewParams);
};

UIComp.tableView = function(tblViewParams)
{
	return Ti.UI.createTableView(tblViewParams);
};

UIComp.button = function(btnParams)
{
	return Ti.UI.createButton(btnParams);
};

UIComp.optionDialog = function(optDlgParams)
{
	return Ti.UI.createOptionDialog(optDlgParams);
};

UIComp.tableViewRow = function(rowParams)
{
	return Titanium.UI.createTableViewRow(rowParams);
};

UIComp.tableViewSection = function()
{
	return Titanium.UI.createTableViewSection();
};

UIComp.picker = function()
{
	return Ti.UI.createPicker({
		selectionIndicator: true,
		width: 300
	});
};

UIComp.datePicker = function()
{
	return Ti.UI.createPicker({
		type: Ti.UI.PICKER_TYPE_DATE_AND_TIME,
		selectionIndicator: true,
		width: 300
	});
};

UIComp.pickerRow = function(sTitle)
{
	return Ti.UI.createPickerRow({
		title: sTitle,
		value: new Date()
	});
};

UIComp.textArea = function(txtAreaParams)
{
	return Ti.UI.createTextArea(txtAreaParams);
};

UIComp.scrollableView = function(scrViewParams)
{
	return Ti.UI.createScrollableView(scrViewParams);	
};

UIComp.popOver = function(sTitle, rWidth, rHeight)
{
	return Ti.UI.iPad.createPopover({
		width: rWidth,
		height: rHeight,
		title: sTitle
	});
};

UIComp.searchBar = function(rTop, rHeight, bolShowCancel)
{
	return Titanium.UI.createSearchBar(
	{
	    barColor:'#000', 
	    showCancel:bolShowCancel,
	    height:43,
	    top:rTop,
	    hintText: 'Search'
	});
};

UIComp.alertDialog = function(alertDlgParams)
{
	return Ti.UI.createAlertDialog(alertDlgParams);
};

UIComp.activityIndicator = function(actIndParams)
{
	return Ti.UI.createActivityIndicator(actIndParams);
};

UIComp.webview = function(webViewParams)
{
	return Ti.UI.createWebView(webViewParams);
};

UIComp.imageView = function(imgViewParams)
{
	return Ti.UI.createImageView(imgViewParams);
};

UIComp.photoGallery = function(phGalleryParams)
{
	return Ti.Media.openPhotoGallery(phGalleryParams);
};

UIComp.camera = function(paramCamera)
{
	return Ti.Media.showCamera(paramCamera);
};
