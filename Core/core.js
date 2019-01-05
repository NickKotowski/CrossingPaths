function getOverlappingStays(stayToMatch,staysToScan) {
	const compareStays = (stay,stayToCompare,maxDistance){
		let map_module = require('../Modules/map');
		let time_module = require('../Modules/time');

		let distance = map_module.CalculateDistanceTwoPersons(stay.location,stayToCompare.location);
		if(distance > maxDistance) return false;

		let time1 = {
			start: stay.startTime,
			end: stay.endTime
		}

		let time2 = {
			start: stayToCompare.startTime,
			end: stayToCompare.endTime
		}

		let overlappingtime = time_module.CalculateOverlappingTime(time1,time2);

		if(overlappingtime == 0) return false;

		return {
			userID: stayToCompare.ID,
			userName: stayToCompare.Name,
			overlappingSpan: overlappingtime,
			distance: distance
		};


	}

	var maxDistance = 20; // in kilometres
	var matchs = [];

	for(var i = 0; i < staysToScan.length;i++){
		let match = compareStays(stayToMatch,staysToScan[i],maxDistance);

		if(match != false) {
			matchs.push(match);
		}
	}

	return matchs;
}