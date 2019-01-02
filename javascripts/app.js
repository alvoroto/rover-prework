// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: ["(0,0)"]
}
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }
  console.log("Rover is now facing: "+rover.direction);
}

function turnRight(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "W":
      rover.direction = "N";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "S";
      break;
  }
  console.log("Rover is now facing: "+rover.direction);
}

function moveForward(rover){
  console.log("moveForward was called");
  var isMoved = false;
  switch (rover.direction) {
    case "W":
      if (rover.x > 0) {
        rover.x = rover.x-1;
        isMoved = true;
        console.log("Rover move to position ("+rover.x+","+rover.y+")");
      } else{
        console.log("Rover can not move to this direction");
      }
      break;
    case "N":
    if (rover.y < 9) {
      rover.y = rover.y+1;
      isMoved = true;
      console.log("Rover move to position ("+rover.x+","+rover.y+")");
    } else{
      console.log("Rover can not move to this direction");
    }
      break;
    case "S":
    if (rover.y > 0) {
      rover.y = rover.y-1;
      isMoved = true;
      console.log("Rover move to position ("+rover.x+","+rover.y+")");
    } else{
      console.log("Rover can not move to this direction");
    }
      break;
    case "E":
    if (rover.x < 9) {
      rover.x = rover.x+1;
      isMoved = true;
      console.log("Rover move to position ("+rover.x+","+rover.y+")");
    } else{
      console.log("Rover can not move to this direction");
    }
      break;
  }
  if(isMoved){
    rover.travelLog.push("("+rover.x+","+rover.y+")");
    console.log("travel log: "+rover.travelLog);
  }
}

function moveBackwards(rover){
  console.log("moveForward was called");
  var isMoved = false;
  switch (rover.direction) {
    case "E":
      if (rover.x > 0) {
        rover.x = rover.x-1;
        isMoved = true;
        console.log("Rover move to position ("+rover.x+","+rover.y+")");
      } else{
        console.log("Rover can not move to this direction");
      }
      break;
    case "S":
    if (rover.y < 9) {
      rover.y = rover.y+1;
      isMoved = true;
      console.log("Rover move to position ("+rover.x+","+rover.y+")");
    } else{
      console.log("Rover can not move to this direction");
    }
      break;
    case "N":
    if (rover.y > 0) {
      rover.y = rover.y-1;
      isMoved = true;
      console.log("Rover move to position ("+rover.x+","+rover.y+")");
    } else{
      console.log("Rover can not move to this direction");
    }
      break;
    case "W":
    if (rover.x < 9) {
      rover.x = rover.x+1;
      isMoved = true;
      console.log("Rover move to position ("+rover.x+","+rover.y+")");
    } else{
      console.log("Rover can not move to this direction");
    }
      break;
  }
  if(isMoved){
    rover.travelLog.push("("+rover.x+","+rover.y+")");
    console.log("travel log: "+rover.travelLog);
  }
}

function moveCommands(rover, commands){
  for (var i=0; i<commands.length; i++){
    switch(commands[i]){
      case "f":
        moveForward(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      case "b":
        moveBackwards(rover);
        break;
    }
  }
}