// Code your solution in this file!
function distanceFromHqInBlocks(distance){
  return Math.abs(distance-42);
}

function distanceFromHqInFeet(distance){
  return (distanceFromHqInBlocks(distance) * 264)
}

function distanceTravelledInFeet(pointA, pointB){
  let blocks = Math.abs(pointA - pointB)
  return (blocks*264)
}

function calculatesFarePrice(start, destination){
  if (distanceTravelledInFeet(start, destination) <= 400) {
    return 0;
  } else if (distanceTravelledInFeet(start, destination) <= 2000) {
    return (distanceTravelledInFeet(start, destination) - 400) * 0.02;
  } else if (distanceTravelledInFeet(start, destination) <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
