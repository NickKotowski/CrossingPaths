exports.CalculateOverlappingTime = function(duration1,duration2){
	let startingDelta = Math.abs(duration1.start - duration2.start);
	let endingDelta = Math.abs(duration1.end - duration2.end);

	let durationAmount1 = duration1.end - duration1.start;
	let durationAmount2 = duration2.end - duration2.start;
    
    const dayInSeconds = 86400;

	let overlapping = durationAmount1 + durationAmount2 - (startingDelta + endingDelta) - dayInSeconds;
	
	overlapping = overlapping > 0 ? overlapping : 0;

	let overlappingTime = {
		overlappingSpan: overlapping
	}

	if(duration1.start > duration2.start){
		overlappingTime.startTime = duration1.start;
	}else{
		overlappingTime.startTime = duration2.start;
	}

	if(duration1.end > duration2.end){
		overlappingTime.endTime = duration2.end;
	}else{
		overlappingTime.endTime = duration1.end;
	}

	return overlappingTime;

}