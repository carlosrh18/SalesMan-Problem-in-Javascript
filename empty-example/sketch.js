//sales person algorithm
const bikingPoints = [];
const numberBikingPoints = 4;

let recordDistance=0;
let bestEver;

let vals = [0,1,2];

function setup() {
  createCanvas(800, 800);
  //Uncomment the next line to stop the animation
  //noLoop();

  
  for(let i=0;i<numberBikingPoints;i++){
    var v = createVector(random(width),random(height));
    bikingPoints[i] = v;
  }


  let d = calcDistance(bikingPoints);
  recordDistance = d;
  bestEver = bikingPoints.slice();
  
}

function draw() {
  background(0);
  console.log(vals);
  //Step 1
  let largestI = -1;
  let flagLargest = [];
  let trueLargest = 0;
  for(let i=0;i<vals.length;i++){
    if(vals[i] < vals[i+1]){
      largestI = i;
      flagLargest.push(i);
     // console.log(flagLargest);
    }
  }

  trueLargest = Math.max(...flagLargest);
  //console.log(trueLargest);

  if(trueLargest == -1){
    //noLoop();
    console.log('finished');
  }

  //Step 2
  
  let largestJ = -1;
  for (let j =0;j <vals.length; j++){

    if(vals[j] > vals[largestI]){
      largestJ = j;
    }

  }


  //Step 3
  swap(vals,largestI,largestJ);

  //step 4 reverse from lARGESTi +1 TO THE END
  let endArray = vals.splice(largestI+1);
  endArray.reverse();
  vals = vals.concat(endArray);

  fill(255);
  for(let i=0;i<numberBikingPoints;i++){
    ellipse(bikingPoints[i].x,bikingPoints[i].y,25,25);
  }

  stroke(255);
  strokeWeight(1);
  noFill();
  beginShape();
  for(let i=0;i<numberBikingPoints;i++){
    vertex(bikingPoints[i].x,bikingPoints[i].y);
  }
  endShape();


  stroke(255,0,255);
  strokeWeight(5);
  noFill();
  beginShape();
  for(let i=0;i<numberBikingPoints;i++){
    vertex(bestEver[i].x,bestEver[i].y);
  }
  endShape();
  let i = floor(random(bikingPoints.length));
  let j = floor(random(bikingPoints.length));

  swap(bikingPoints,i,j);

  var d = calcDistance(bikingPoints);
  if(d < recordDistance){
    recordDistance = d;
    bestEver = bikingPoints.slice();
    console.log(`The record is: ${recordDistance}`);
  }
 
}

function swap(a, i, j){
  //Algorithm here [a][b][c]
  let temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

function calcDistance(points){
  let sum = 0;
  for(let i = 0; i < points.length-1;i++){

    let d = dist(points[i].x,points[i].y,points[i+1].x,points[i+1].y);
    sum +=d;
  }
  return sum;
}

