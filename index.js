// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation){
    if (pickupLocation == 42){
        return 0;
    }else if (pickupLocation > 42){
        return pickupLocation - 42;
    }else{
        return 42-pickupLocation;
    }
}


function distanceFromHqInFeet(pickupLocation){
    var block_distance = distanceFromHqInBlocks(pickupLocation);
    if (block_distance == 1){
        return 264;
    }else if (block_distance <= 0){
        return 0;
    }else{
        return block_distance * 264;
    }
}


function distanceTravelledInFeet(startLocation, endLocation){
    let block_distance;
    if (startLocation > endLocation){
        block_distance = startLocation -endLocation;
        return block_distance *264;
    }else if (startLocation < endLocation){
        block_distance = endLocation -startLocation;
        return block_distance *264;
    }else{
        return 0;
    }
}

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let distance = distanceTravelledInFeet(start, destination);
    console.log(distance);
    let fare;
    if(distance > 400 && distance < 2000){
        distance = distance - 400;
        fare = distance * 0.02;
        return fare;
    }else if(distance > 2000 && distance <= 2500){
        fare = 25;
        return fare;
    }else if(distance > 2500){
        return "cannot travel that far";
    }else{
        return 0;
    }
 
}
