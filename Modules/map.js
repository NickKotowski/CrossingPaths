exports.CalculateDistanceTwoPersons = function(person1,person2){
	//check valid input
	if(!person1.latitude || !person1.longitude || !person2.latitude || !person2.longitude){
		console.error("Invalid Input. Must have longitude and lattitude properties");
		return;
	}

	//define contants
	const EarthRadius = 6371e3; // in meters
	const PI = 3.14;

	//convert to radian
	let lat1 = person1.latitude * PI / 180;
	let lat2 = person2.latitude * PI / 180;

	let long1 = person1.longitude * PI / 180;
	let long2 = person2.longitude * PI / 180;

	let delta = long1 - long2;

	let distance = Math.acos(Math.sin(lat1)*Math.sin(lat2) + Math.cos(lat1)*Math.cos(lat2)*Math.cos(delta)) * EarthRadius; 

	//convert metres to kilometres
	distance /= 1000;

	return distance;
}