dblayer = {};

dblayer.getAreas = function(config)
{
	var sSql = 'select * from Area a';
	return config.db.execute(sSql);
};


dblayer.getInspectionForWeek = function(config, weekStartDate, weekEndDate)
{
	var sSql = 'select * from inspection insp join area ar on insp.areaid = ar.areaid where '
	+'substr(insp.scheduleDate,7,4)||substr(insp.scheduleDate,4,2)||substr(insp.scheduleDate,1,2) BETWEEN '+weekStartDate
	+' AND '+weekEndDate;
	return config.db.execute(sSql);
};

dblayer.getInspectionForDay = function(config, dateFormatted, areaid)
{
	var sSql = 'select * from inspection insp join area ar on insp.areaid = ar.areaid'
	+' join areaImage ar_image on insp.inspectionnumber = ar_image.inspectionnumber'
	+' left outer join inspectiondetail insp_detail on insp_detail.inspectionNumber = insp.inspectionNumber'
	+' left outer join inspectionimage insp_image on  insp_image.inspectionNumber = insp.inspectionNumber and insp_detail.quesnumber = insp_image.quesnumber'
	+' where substr(insp.scheduleDate,7,4)||substr(insp.scheduleDate,4,2)||substr(insp.scheduleDate,1,2) = "'+dateFormatted+'"'
	+' and insp.areaid = '+areaid;
	Ti.API.info(sSql);
	return config.db.execute(sSql);
	
};
