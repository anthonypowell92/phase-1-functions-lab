function distanceFromHqInBlocks(spotOne) {
  if (spotOne > 42)
    return spotOne - 42
  else (spotOne < 42)
    return 42 - spotOne
  }

function distanceFromHqInFeet(start){
  if (start > 42)
    return (start-42)*264;
  else (start < 42)
    return (42-start)*264;
}

function distanceTravelledInFeet (dest, dist){
  if (dest > dist)
    return (dest - dist)*264
  else (dest < dist)
    return (dist - dest)*264
}

function calculatesFarePrice(start, destination){
  let blockDistance = Math.abs(start - destination);
  let distanceTraveled = blockDistance * 264;
  if (distanceTraveled <= 400){
    console.log('give customers a free sample');
    return 0
  }
  else if (distanceTraveled >= 2500)
    return 'cannot travel that far'
  else if (distanceTraveled > 2000 && distanceTraveled <= 2500)
    return 25
  else if (distanceTraveled > 400 && distanceTraveled < 2000){
    distanceTraveled = distanceTraveled - 400;
}

    return (distanceTraveled * .02)
  }
