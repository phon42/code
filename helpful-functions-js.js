var Canvas = {};
class Canvas {
	constructor (id) {
		if (typeof id === "string") { // id = id of the canvas element
			this.canvas = document.getElementById(id);
		} else if (typeof id === "object") { // id = canvas element object
			this.canvas = id;
		} else {
			this.canvas = document.createElement("CANVAS");
		}
		this.context = this.canvas.getContext("2d");
		this.viewX = this.canvas.width;
		this.viewY = this.canvas.height;
	}
	convert (x, y) {
    y *= -1;
    
    return [x, y];
  }
  dot (x, y) {
    var a = this.convert(x, y);
    
    x = a[0];
    y = a[1];
    this.context.beginPath();
    this.context.arc(x, y, viewZ / 500, 0, 2 * Math.PI);
    this.context.fill();
  };
  line (x1, y1, x2, y2) {
    var a1 = this.convert(x1, y1);
    var a2 = this.convert(x2, y2);
    
    x1 = a1[0];
    y1 = a1[1];
    x2 = a2[0];
    y2 = a2[1];
    this.context.beginPath();
    this.context.moveTo(x1, y1);
    this.context.lineTo(x2, y2);
    this.context.stroke();
  };
  rect (x, y, width, height, center) {
    // x, y = topleft corner unless center === true
    var a;
    
    if (center === true) {
      x -= width / 2;
      y += height / 2;
    }
    // regardless of whether center is true, x, y will always = topleft corner
    a = this.convert(x, y);
    x = a[0];
    y = a[1];
    this.context.beginPath();
    this.context.rect(x, y, width, height);
    this.context.stroke();
  };
  roundRect (x, y, width, height, radius, center) {
    // draws a rectangle with rounded corners
    // corners are of radius `radius`
    // the rounded corners only remove material from the corners
    // x, y = topleft corner unless center === true
    var x1;
    var y1;
    var x2;
    var y2;
    var x3;
    var y3;
    var x4;
    var y4;
    var x5;
    var y5;
    var x6;
    var y6;
    var x7;
    var y7;
    var x8;
    var y8;
    var x9;
    var y9;
    var a1;
    var a2;
    var a3;
    var a4;
    var a5;
    var a6;
    var a7;
    var a8;
    var a9;
    
    if (center === true) {
      x -= width / 2;
      y += height / 2;
    }
    // regardless of whether center is true, x, y will always = topleft corner
    x1 = x + radius;
    y1 = y;
    x2 = x - radius + width;
    y2 = y;
    x3 = x - radius + width;
    y3 = y - radius;
    x4 = x + width;
    y4 = y + radius - height;
    x5 = x - radius + width;
    y5 = y + radius - height;
    x6 = x + radius;
    y6 = y - height;
    x7 = x + radius;
    y7 = y + radius - height;
    x8 = x;
    y8 = y - radius;
    x9 = x + radius;
    y9 = y - radius;
    radius = Math.min(width / 2, height / 2, radius); // `radius` must be <= half the length of the smallest side
    a1 = this.convert(x1, y1);
    a2 = this.convert(x2, y2);
    a3 = this.convert(x3, y3);
    a4 = this.convert(x4, y4);
    a5 = this.convert(x5, y5);
    a6 = this.convert(x6, y6);
    a7 = this.convert(x7, y7);
    a8 = this.convert(x8, y8);
    a9 = this.convert(x9, y9);
    x1 = a1[0];
    y1 = a1[1];
    x2 = a2[0];
    y2 = a2[1];
    x3 = a3[0];
    y3 = a3[1];
    x4 = a4[0];
    y4 = a4[1];
    x5 = a5[0];
    y5 = a5[1];
    x6 = a6[0];
    y6 = a6[1];
    x7 = a7[0];
    y7 = a7[1];
    x8 = a8[0];
    y8 = a8[1];
    x9 = a9[0];
    y9 = a9[1];
    this.context.beginPath();
    this.context.moveTo(x1, y1);
    this.context.lineTo(x2, y2);
    this.context.arc(x3, y3, radius, 3 * Math.PI / 2, 0);
    this.context.lineTo(x4, y4);
    this.context.arc(x5, y5, radius, 0, Math.PI / 2);
    this.context.lineTo(x6, y6);
    this.context.arc(x7, y7, radius, Math.PI / 2, Math.PI);
    this.context.lineTo(x8, y8);
    this.context.arc(x9, y9, radius, Math.PI, 3 * Math.PI / 2);
    this.context.stroke();
  };
  fillRect (x, y, width, height, center) {
    // x, y = topleft corner unless center === true
    var a;
    
    if (center === true) {
      x -= width / 2;
      y += height / 2;
    }
    // regardless of whether center is true, x, y will always = topleft corner
    a = this.convert(x, y);
    x = a[0];
    y = a[1];
    this.context.beginPath();
    this.context.rect(x, y, width, height);
    this.context.fill();
  };
  fillRoundRect (x, y, width, height, radius, center) {
    // draws a filled rectangle for rounded corners
    // corners are of radius `radius`
    // the rounded corners only remove material from the corners
    // x, y = topleft corner unless center === true
    var x1;
    var y1;
    var x2;
    var y2;
    var x3;
    var y3;
    var x4;
    var y4;
    var x5;
    var y5;
    var x6;
    var y6;
    var x7;
    var y7;
    var x8;
    var y8;
    var x9;
    var y9;
    var a1;
    var a2;
    var a3;
    var a4;
    var a5;
    var a6;
    var a7;
    var a8;
    var a9;
    
    if (center === true) {
      x -= width / 2;
      y += height / 2;
    }
    // regardless of whether center is true, x, y will always = topleft corner
    x1 = x + radius;
    y1 = y;
    x2 = x - radius + width;
    y2 = y;
    x3 = x - radius + width;
    y3 = y - radius;
    x4 = x + width;
    y4 = y + radius - height;
    x5 = x - radius + width;
    y5 = y + radius - height;
    x6 = x + radius;
    y6 = y - height;
    x7 = x + radius;
    y7 = y + radius - height;
    x8 = x;
    y8 = y - radius;
    x9 = x + radius;
    y9 = y - radius;
    radius = Math.min(width / 2, height / 2, radius); // `radius` must be <= half the length of the smallest side
    a1 = this.convert(x1, y1);
    a2 = this.convert(x2, y2);
    a3 = this.convert(x3, y3);
    a4 = this.convert(x4, y4);
    a5 = this.convert(x5, y5);
    a6 = this.convert(x6, y6);
    a7 = this.convert(x7, y7);
    a8 = this.convert(x8, y8);
    a9 = this.convert(x9, y9);
    x1 = a1[0];
    y1 = a1[1];
    x2 = a2[0];
    y2 = a2[1];
    x3 = a3[0];
    y3 = a3[1];
    x4 = a4[0];
    y4 = a4[1];
    x5 = a5[0];
    y5 = a5[1];
    x6 = a6[0];
    y6 = a6[1];
    x7 = a7[0];
    y7 = a7[1];
    x8 = a8[0];
    y8 = a8[1];
    x9 = a9[0];
    y9 = a9[1];
    this.context.beginPath();
    this.context.moveTo(x1, y1);
    this.context.lineTo(x2, y2);
    this.context.arc(x3, y3, radius, 3 * Math.PI / 2, 0);
    this.context.lineTo(x4, y4);
    this.context.arc(x5, y5, radius, 0, Math.PI / 2);
    this.context.lineTo(x6, y6);
    this.context.arc(x7, y7, radius, Math.PI / 2, Math.PI);
    this.context.lineTo(x8, y8);
    this.context.arc(x9, y9, radius, Math.PI, 3 * Math.PI / 2);
    this.context.fill();
  };
  circle (x, y, radius) {
    var a = this.convert(x, y);
    
    x = a[0];
    y = a[1];
    this.context.beginPath();
    this.context.arc(x, y, radius, 0, 2 * Math.PI);
    this.context.stroke();
  };
  fillCircle (x, y, radius) {
    var a = this.convert(x, y);
    
    x = a[0];
    y = a[1];
    this.context.beginPath();
    this.context.arc(x, y, radius, 0, 2 * Math.PI);
    this.context.fill();
  };
  arc (x, y, radius, startAngle, endAngle, angleType) {
    // defaults to taking input in degrees
    // when angle = 0, canvas output = directly to the right from origin point
    // it moves clockwise from there
    var a = this.convert(x, y);
    
    if ((angleType === undefined)||(angleType === "deg")||(angleType === "degs")||(angleType === "degree")||(angleType === "degrees")) {
      startAngle = degreesToRads(startAngle);
      endAngle = degreesToRads(endAngle);
    }
    x = a[0];
    y = a[1];
    this.context.beginPath();
    this.context.arc(x, y, radius, startAngle, endAngle);
    this.context.stroke();
  };
  fillArc (x, y, radius, startAngle, endAngle, angleType) {
    // defaults to taking input in degrees
    // when angle = 0, canvas output = directly to the right from origin point
    // it moves clockwise from there
    var a = this.convert(x, y);
    
    if ((angleType === undefined)||(angleType === "deg")||(angleType === "degs")||(angleType === "degree")||(angleType === "degrees")) {
      startAngle = degreesToRads(startAngle);
      endAngle = degreesToRads(endAngle);
    }
    x = a[0];
    y = a[1];
    this.context.beginPath();
    this.context.arc(x, y, radius, startAngle, endAngle);
    this.context.lineTo(x, y);
    this.context.closePath();
    this.context.fill();
  };
  clearRect (x, y, width, height, center) {
    // x, y = topleft corner unless center === true
    var a;
    
    if (center === true) {
      x -= width / 2;
      y += height / 2;
    }
    a = this.convert(x, y);
    x = a[0];
    y = a[1];
    this.context.clearRect(x, y, width, height);
  };
  clearCanvas () {
    this.clearRect(- this.viewX / 2, this.viewY / 2, this.viewX, this.viewY);
  };
  dot3D (x, y, z) {
    var c;
    var cX;
    var cY;
    
    if (z === undefined) {
      y = x[1];
      z = x[2];
      x = x[0];
    }
    c = this.flatten(x, y, z);
    c = this.convert(c);
    cX = c[0];
    cY = c[1];
    this.dot(cX, cY);
  };
  line3D (x1, y1, z1, x2, y2, z2) {
    var a1;
    var a2;
    
    if (z2 === undefined) {
      if (y2 === undefined) {
        if (z1 === undefined) {
          z1 = x1[2];
          x2 = y1[0];
          y2 = y1[1];
          z2 = y1[2];
          y1 = x1[1];
          x1 = x1[0];
        } else {
          if (typeof x1 === "object") {
            x2 = y1;
            y2 = z1;
            z2 = x2;
            y1 = x1[1];
            z1 = x1[2];
            x1 = x1[0];
          } else {
            y2 = x2[1];
            z2 = x2[2];
            x2 = x2[0];
          }
        }
      } else {
        z1 = x1[2];
        x2 = y1[0];
        y2 = y1[1];
        z2 = y1[2];
        y1 = x1[1];
        x1 = x1[0];
      }
    }
    a1 = this.flatten(x1, y1, z1);
    a1 = this.convert(a1);
    a2 = this.flatten(x2, y2, z2);
    a2 = this.convert(a2);
    x1 = a1[0];
    y1 = a1[1];
    x2 = a2[0];
    y2 = a2[1];
    this.context.beginPath();
    this.context.moveTo(x1, y1);
    this.context.lineTo(x2, y2);
    this.context.stroke();
  };
  drawImage (image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {
    var a1;
    var a2;

    if (dHeight === undefined) {
      if (sHeight === undefined) { // format: ctx.drawImage(image, dx, dy);
        a1 = this.convert(sx, sy);
        sx = a1[0];
        sy = a1[1];
        this.drawImage(image, sx, sy);
      } else { // format: ctx.drawImage(image, dx, dy, dWidth, dHeight);
        a1 = this.convert(sx, sy);
        sx = a1[0];
        sy = a1[1];
        this.drawImage(image, sx, sy, sWidth, sHeight);
      }
    } else { // format: ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
      a1 = this.convert(sx, sy);
      a2 = this.convert(dx, dy);
      sx = a1[0];
      sy = a1[1];
      dx = a2[0];
      dy = a2[1];
      this.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    }
  };
  getImageData (x, y, width, height, center) {
    var a;
    var data;
    
    if (center === true) {
    // x, y = the CENTER of the rectangle
      x -= width / 2;
      y += height / 2;
    }
    a = this.convert(x, y);
    x = a[0];
    y = a[1];
    data = this.getImageData(x, y, width, height);
    
    return data;
  };
  getImageDataArray (x, y, width, height, center) {
    var data;
    var arr = [];
    var orderedArr = [];
    
    data = this.getImageData(x, y, width, height, center);
    for (var i = 0; i < data.width * data.height; i += 4) {
      arr.push([]);
      arr[i / 4][0] = data.data[i];
      arr[i / 4].push(data.data[i + 1]);
      arr[i / 4].push(data.data[i + 2]);
      arr[i / 4].push(data.data[i + 3]);
    }
    for (var i = 0; i < data.height; i++) {
      orderedArr.push([]);
      for (var ii = 0; ii < data.width; ii++) {
        orderedArr[i][ii] = arr[arr.length - ((i + 1) * data.width) + ii];
      }
    }
    
    return orderedArr;
  }
  getFullCanvasImageData () {
    var data;
    
    data = this.getImageData(- this.viewX / 2, this.viewY / 2, this.viewX, this.viewY);
    
    return data;
  }
  getFullCanvasImageDataArray () {
    var data;
    
    data = this.getImageDataArray(- this.viewX / 2, this.viewY / 2, this.viewX, this.viewY);
    
    return data;
  }
  putImageData (data, x, y, center) {
    var a;
    
    if (center === true) {
    // x, y = the CENTER of the rectangle
      x -= data.width / 2;
      y += data.height / 2;
    }
    a = this.convert(x, y);
    x = a[0];
    y = a[1];
    this.putImageData(data, x, y);
  }
}
var CanvasObj = {};
var Code = {};

CanvasObj.drawRect = function (x, y, width, height, id) {
  var canvas = document.getElementById(id);
  var ctx = canvas.getContext("2d");
  
  ctx.beginPath();
  ctx.rect(x, y, x + width, y + height);
  ctx.stroke();
};
CanvasObj.drawCircle = function (x, y, radius, context, id) {
  var canvas = document.getElementById("box1");
  var ctx = Canvas.context;
  
  ctx.beginPath();
  ctx.arc(x, y, 2, 0, 2 * Math.PI); //ctx.arc(95, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();
};
CanvasObj.drawArc = function (x, y, radius, startAngle, endAngle, context, canvas) {
  // startAngle and endAngle should be in degrees
  var canvas = document.getElementById("box1");
  var ctx = canvas.getContext("2d");
  
  startAngle = degreesToRads(startAngle);
  endAngle = degreesToRads(endAngle);
  ctx.beginPath();
  ctx.arc(x, y, 2, startAngle, endAngle); //ctx.arc(95, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();
};
CanvasObj.drawLine = function (x1, y1, x2, y2, id) {
  // line
  var c = document.getElementById(id);
  var ctx = c.getContext("2d");
  
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
};
/*
CanvasObj.drawLine = function (x1, y1, x2, y2, context, canvas) {
context.beginPath();
context.moveTo(x1, y1);
context.lineTo(x2, y2);
context.stroke();
};
*/
function degreesToRads (x) {
  //returns the number of radians equal to x degrees
  //(xπ/180)° = y radians
  //(180y/π) radians = x°
  x /= 180;
  x *= Math.PI;
  
  return x;
}
function getPair (variable) {
  //turns a pair of values into an array with [x, y]
  //may be used for getting the property of an object later
  var a;
  var x; //saves the val of x
  var y; //saves the val of y
  var type = (typeof variable).toString(); //get the type of the input
  if (type === "Array") { //it's already in the correct format
    return variable; //so return the input unmodified
  } else if (type === "Object") { //then it does need to be modified
    if (variable.x === undefined) {
      //it's using variable.(value of x) = (value of y) as the syntax
      for (a in variable) { //gets the properties of the variable
        x = a; //saves the val of x
        y = variable[x]; //saves the val of y
      }
    } else if (variable.x !== undefined) {
      //uses variable.x = (value of x) and variable.y = (value of y) syntax
      x = variable.x; //saves the val of x
      y = variable.y; //saves the val of y
    }
  }
  return [x, y];
}
function loopArrayIndex (index, length) {
/*
Given an array index, it transforms it into a "looped" array index
If {index} is more than (the array length - 1) or less than 0 it gets flipped to the other side (as in modular arithmetic)

(the array index) = {size}
*/
  
  while (index < 0) {
    index += length;
  }
  index %= length;
  
  return index;
}
function arraySum (arr) {
// From https://codeburst.io/javascript-arrays-finding-the-minimum-maximum-sum-average-values-f02f1b0ce332
  var sum;
  var sumFunc;
  
  sumFunc = function (a, b) {
    return a + b;
  };
  sum = arr.reduce(sumFunc, 0);
  
  return sum;
}
function arrayAverage (arr) {
  var average;
  var sum;
  var length;
  
  length = arr.length;
  sum = arraySum(arr);
  average = sum / length;
  
  return average;
}
function getHTMLText (url, callback) {
  // Retrieves the HTML content of a page as text
  // This text is passed to the callback function and can be retrieved by referring to this.responseText in the callback function
  var oReq;
  
  oReq = new XMLHttpRequest();
  oReq.addEventListener("load", callback);
  oReq.open("GET", url);
  oReq.send();
}
/*
var contextBool = false; //whether the function should return the context object
if (context === undefined) { //if the context object is included
//the context object is not included or is in canvas as an object
if (canvas.context === undefined) { //if the canvas object isn't included
//the context object isn't included
context = canvas.getContext("2d");
contextBool = true;
} else { //the context object is included
context = canvas.context;
}
} else if (y2 === undefined) {
//the context object is there and x and y values are stored in a denser format
context = x2;
x2 = (getPair(y1))[0]; //moves x2 and y2 to their values
y2 = (getPair(y1))[1]; //moves x2 and y2 to their values
y1 = [(getPair(x1))[0], (getPair(x1))[1]]; //moves x1 and y2 to the y1 value
x1 = y1[0]; //moves x1 to its' value
y1 = y1[1]; //moves y1 to its' value
} else if ((x2 === undefined) && (y2 === undefined)) {
//context is not there and x and y values are stored in a denser format
context = canvas.getContext("2d");
contextBool = true;
x2 = (getPair(y1))[0]; //moves x2 and y2 to their values
y2 = (getPair(y1))[1]; //moves x2 and y2 to their values
y1 = [(getPair(x1))[0], (getPair(x1))[1]]; //moves x1 and y2 to y1 value
x1 = y1[0]; //moves x1 to its' value
y1 = y1[1]; //moves y1 to its' value
}
canvasAction(); //draw the line
if (contextBool) { //if the context wasn't included
return context; //return it
}
*/
Canvas.createCanvas = function (divname, idname, canvastext, canvaswidth, canvasheight) {
  // Creates a canvas element with id as idname, in a div with id divname
  // The text for the canvas is canvastext
  // The width is canvaswidth
  // The height is canvasheight
  var canvas = document.createElement("canvas");
  var element;
  
  canvas.id = idname;
  canvas.width = canvaswidth;
  canvas.height = canvasheight;
  canvas.style = "border:1px solid #000000;";
  var node = document.createTextNode(canvastext);
  canvas.appendChild(node);
  element = document.getElementById(divname);
  element.appendChild(canvas);
  
  return document.getElementById(idname);
};

class Audio {
  getNote (note, base) {
    // the one the only the AMAZING
    // *FORMULA FOR THE FREQUENCY OF A MUSICAL NOTE*
    // In Hz
    // from http://pages.mtu.edu/~suits/NoteFreqCalcs.html
    // fn = f0 * Math.pow(a, n)
    // a = Math.pow(2, 1/12)
    // base = the frequency (in Hz) of one fixed note which must be defined
    // default of base is 440 Hz - A4
    // number = number of notes above (positive) or below (negative) base note
    // middle C is C4
    // A (440 Hz) is A4
    // octaves switch over at C; e.g. A4, B4, B#4, C5
    // goes down to C0 according to #
    // A0 = 27.5 Hz
    if (base === undefined) {
      base = ["A0", 27.5];
    }

    //var a = Math.pow(2, 1/16);
    var errorBool = false;
    var errorMessage = "Error: Note not recognized.";

    /*
	if(note.length <= 1) {
	if ((note.length === 1) && (!((note.toUpperCase === "A")||(note.toUpperCase === "B")||(note.toUpperCase === "C")||(note.toUpperCase === "D")||(note.toUpperCase === "E")||(note.toUpperCase === "F")||(note.toUpperCase === "G"))) && (!((note === note.toUpperCase()) && (note === note.toLowerCase())))) {
	errorMessage = errorMessage + " The note name you have entered is not part of the eight-note scale used in conventional music.";
	} else if ((note.length === 1) && ((note.toUpperCase === "A")||(note.toUpperCase === "B")||(note.toUpperCase === "C")||(note.toUpperCase === "D")||(note.toUpperCase === "E")||(note.toUpperCase === "F")||(note.toUpperCase === "G"))) {
	errorMessage = errorMessage + " Please add an octave number.";
	} else if ((note === note.toUpperCase()) && (note === note.toLowerCase())) {
	errorMessage = errorMessage + " Please add a note name.";
	}
	return errorMessage;
	} else {
	*/

    var noteName = note[0];
    var baseName = base[0][0];
    var noteOctaveNum = note[note.length - 1];
    var baseOctaveNum = base[0][base.length - 1];
    var octave = ["c", "d", "e", "f", "g", "a", "b"];
    var noteNum = octave.indexOf(noteName.toLowerCase());
    var baseNum = octave.indexOf(baseName.toLowerCase());
    var noteDistance = noteNum - baseNum;
    if (Math.abs(noteDistance) !== noteDistance) {
      noteDistance -= 1;
    }
    var octaveDistance = noteOctaveNum - baseOctaveNum;
    var totalDistance = (octaveDistance *8) + noteDistance;
    var baseHalf = base[0].slice(1, base.length - 1);
    var noteHalf = note.slice(1, note.length - 1);
    if (baseHalf === "#") {
      baseHalf = 0.5;
    } else if (baseHalf === "b") {
      baseHalf = -0.5;
    } else {
      baseHalf = 0;
    }

    if (noteHalf === "#") {
      noteHalf = 0.5;
    } else if (noteHalf === "b") {
      noteHalf = -0.5;
    } else {
      noteHalf = 0;
    }
    totalDistance += noteHalf - baseHalf;
    totalDistance *= 2;
    
    return base[1]*(Math.pow(2, totalDistance/16));
    //}
  }
  /*
	var a = Math.pow(2, 1/12);
	var errorBool = false;
	var errorMessage = "Error: Note not recognized.";
	var octaveNumber;
	var tempNumber = 0;
	var noteDistance = 0;
	var octave = ["c", "d", "e", "f", "g", "a", "b"];
	var noteName;
	if (note[0].length <= 1) {
		if ((note[0].length === 1) && (!((note[0].toUpperCase === "A")||(note[0].toUpperCase === "B")||(note[0].toUpperCase === "C")||(note[0].toUpperCase === "D")||(note[0].toUpperCase === "E")||(note[0].toUpperCase === "F")||(note[0].toUpperCase === "G"))) && (!((note[0] === note[0].toUpperCase()) && (note[0] === note[0].toLowerCase())))) {
			errorMessage = errorMessage + " The note name you have entered is not part of the eight-note scale used in conventional music.";
		} else if ((note[0].length === 1) && ((note[0].toUpperCase === "A")||(note[0].toUpperCase === "B")||(note[0].toUpperCase === "C")||(note[0].toUpperCase === "D")||(note[0].toUpperCase === "E")||(note[0].toUpperCase === "F")||(note[0].toUpperCase === "G"))) {
			errorMessage = errorMessage + " Please add an octave number.";
		} else if ((note[0] === note[0].toUpperCase()) && (note[0] === note[0].toLowerCase())) {
			errorMessage = errorMessage + " Please add a note name.";
		}
		return errorMessage;
	} else {
		if (base === undefined) {
			base = ["A4", 440];
		}
		noteName = octave.indexOf(note[0][0].toLowerCase());
		octaveNumber = parseInt(note[0].slice(-1, note[0].length));
		octaveNumber -= parseInt(base[0].slice(-1, base[0].length));
		octaveNumber *= 10 * 2;
		octaveNumber = reverseString(String(octaveNumber));
		for (i in octaveNumber) {
			tempNumber += parseInt(octaveNumber[i]) * Math.pow(8, i);
		}
		noteDistance = tempNumber;
		console.log(tempNumber);
		console.log(noteName);
		return base[1]*(Math.pow(a, note[1]));
	}
}
*/
}

Math.degreesToRads = function (x) {
  // returns the number of radians equal to x degrees
  // (x * π / 180)° = y radians
  // (180 * y / π) radians = x°
  x /= 180;
  x *= Math.PI;
  
  return x;
};
Math.radsToDegrees = function (x) {
  // returns the number of degrees equal to x radians
  // (x * π / 180)° = y radians
  // (180 * y / π) radians = x°
  x *= 180;
  x /= Math.PI;
  
  return x;
};
Math.degSin = function (x) {
  // returns sin(x) where x is in degrees
  // sin = opposite/hypotenuse
  // (x * π / 180)° = y radians
  // (180 * y / π) radians = x°
  // Math.sin(x) returns the sine of x where x is in radians
  x = degreesToRads(x);
  x = Math.sin(x);
  
  return x;
};
Math.degCos = function (x) {
  // returns cos(x) where x is in degrees
  // (x * π / 180)° = y radians
  // (180 * y / π) radians = x°
  // Math.cos(x) returns the cosine of x where x is in radians
  x = degreesToRads(x);
  x = Math.cos(x);
  
  return x;
};
Math.degTan = function (x) {
  // returns tan(x) where x is in degrees
  // tan = opposite/adjacent
  // (x * π / 180)° = y radians
  // (180 * y / π) radians = x°
  // Math.tan(x) returns the tangent of x where x is in radians
  x = degreesToRads(x);
  x = Math.tan(x);
  
  return x;
};
Math.degArcsin = function (x) {
  // returns sin-1(x) in degrees
  // sin = opposite/hypotenuse
  // Math.asin(x) returns sin-1(x) in radians
  // (x * π / 180)° = y radians
  // (180 * y / π) radians = x°
  x = Math.asin(x);
  x = Math.radsToDegrees(x);
  
  return x;
};
function arccos(x) {
  //returns cos-1(x) in degrees
  //cos = adjacent/hypotenuse
  //Math.acos(x) returns cos-1(x) in radians
  //(xπ/180)° = y radians
  //(180y/π) radians = x°
  x = Math.acos(x);
  x = Math.radsToDegrees(x);
  
  return x;
}
function arctan(x) {
  //returns tan-1(x) in degrees
  //tan = opposite/adjacent
  //Math.atan(x) returns tan-1(x) in radians
  //(xπ/180)° = y radians
  //(180y/π) radians = x°
  x = Math.atan(x);
  x = Math.radsToDegrees(x);
  
  return x;
}
Math.logarithm = function (argument, base) {
  var x;
  
  if (base === undefined) {
    base = 10;
  }
  x = Math.log(argument);
  x /= Math.log(base);
  
  return x;
};
function formatNumberSemiScientific (num, degree) { // degree = number of digits to round to
  var m;
  var result;
  
  if (degree === undefined) {
    degree = 2;
  }
  degree = Math.pow(10, degree);
  m = Math.logarithm(num);
  m = Math.floor(m);
  num /= Math.pow(10, m - 1);
  num *= degree;
  num = Math.round(num);
  num /= degree;
  result = String(num);
  if (m === 2) {
    result = result + " * 10";
  } else if (m !== 1) {
    result = result + " * 10^" + String(m);
  }

  return result;
}
String.prototype.getIndicesOf = function (searchStr, str, caseSensitive) {
  // get all indices of a search string
  var searchStrLen = searchStr.length;
  if (searchStrLen == 0) {
    return [];
  }
  var startIndex = 0, index, indices = [];
  if (!caseSensitive) {
    str = str.toLowerCase();
    searchStr = searchStr.toLowerCase();
  }
  while ((index = str.indexOf(searchStr, startIndex)) > -1) {
    indices.push(index);
    startIndex = index + searchStrLen;
  }
  return indices;
};
String.prototype.remove = function (a, b) {
  return this.slice(0, a) + this.slice(b, this.length);
};
function processFile (file) {
  if (file.indexOf("{") !== -1) {
    file = [file.slice(file.indexOf("{") + 1, file.lastIndexOf("}")), file.remove(file.indexOf("{"), file.lastIndexOf("}") + 1)];
    file[0] = processFile(file[0]);
  }
  
  return file;
}
function findDay (date, month, year) {
  //gets the day of the week of an inputted date using the Murderous Maths method
  //link here: http://www.murderousmaths.co.uk/az.htm
  //on pages 95-100 of The Perfect Sausage
  //ISBN 978-1-407107-16-5
  var f = ((14 - month) % 12);
  var y = year - f;
  var m = month + (12 * f) - 2;
  var day = (date + y + ((31 * m) % 12) + (y % 4) - (y % 100) + (y % 400)) % 7;
  if (day === 0) {
    day = "Sunday";
  } else if (day === 1) {
    day = "Monday";
  } else if (day === 2) {
    day = "Tuesday";
  } else if (day === 3) {
    day = "Wednesday";
  } else if (day === 4) {
    day = "Thursday";
  } else if (day === 5) {
    day = "Friday";
  } else if (day === 6) {
    day = "Saturday";
  } else {
    //use try and stuff
  }
  return day;
}
Date.prototype.findDay = function () {
  var day = this.getDay();
  if (day === 0) {
    day = "Sunday";
  } else if (day === 1) {
    day = "Monday";
  } else if (day === 2) {
    day = "Tuesday";
  } else if (day === 3) {
    day = "Wednesday";
  } else if (day === 4) {
    day = "Thursday";
  } else if (day === 5) {
    day = "Friday";
  } else if (day === 6) {
    day = "Saturday";
  }// else {
  //use try and other keywords to find the error
  //this part doesn't work yet
  /*
var error = "";
try {
this.getDay();
}
catch(err) {
error = err.message;
document.getElementById("demo").innerHTML = err.message;
}
document.getElementById("demo").innerHTML = f.toString();
if (error.indexOf(" is not defined") !== -1){
console.error("Input variable is not defined");
day = "Input variable is not defined";
*/
  //}
  return day;
};
/*
function getVariableName(unknownVariableInAHash){
//from https://stackoverflow.com/questions/3404057/determine-original-name-of-variable-after-its-passed-to-a-function#answer-46230373
//of questionable use
return Object.keys(unknownVariableInAHash)[0];
}
*/
function arrayToObject (variable) { //variable[0] becomes variable.0
  var transfer = {};
  for (var i = 0; i < variable.length; i++) {
    transfer.i = variable[i];
  }
}
function objectToArray (variable) {
  //variable's properties are ordered in an array by alphabetical order
  var prop; //will be used for a 'for in' loop
  var propArray = []; //will be used to save all the properties of variable
  
  for (prop in variable) { //for each property variable has
    propArray.push(prop); //add it to propArray
  }
  propArray = sortAlphabetical(propArray, false); //sort propArray alphabetically
  propArray.forEach(function(value, index) { //for each item in propArray
    propArray[index] = variable.value; //set it to the value of the property that goes there
  });
}
function sortAlphabetical (array, returnBool) { //may not work
  //sorts an array alphabetically and can return it as an array or modify the original
  var newArray = []; //the new array
  
  if (returnBool === undefined) { //if the return method is undefined
    returnBool = true; //set it to the default - return as array
  }
  for (var i = 0; i < array.length; i++) { //for each item
    for (var ii = 0; ii < (array.length + 1); ii++) { //put it where it should be
      //place it in the correct place in newArray
      if (newArray[ii].localeCompare(array[i]) > 0) { //the string goes before
        array.unshift(newArray[ii]); //so insert it there
        break;
      } else if ((newArray[ii].localeCompare(array[i]) === 0)||(newArray[ii].localeCompare(array[i]) < 0)) { //the strings are the same or the string goes after
        array.splice((i + 1), 0, newArray[ii]); //so insert it there
        break; 
      }
    }
  }
}
function getNote(note, base) { //number, base) {
  //the one the only the AMAZING
  // *FORMULA FOR THE FREQUENCY OF A MUSICAL NOTE*
  // In Hz
  // from http://pages.mtu.edu/~suits/NoteFreqCalcs.html
  // fn = f0 * Math.pow(a, n)
  // a = Math.pow(2, 1/12)
  // base = the frequency (in Hz) of one fixed note which must be defined
  // default of base is 440 Hz - A4
  // number = number of notes above (positive) or below (negative) base note
  // middle C is C4
  // A (440 Hz) is A4
  // octaves switch over at C; e.g. A4, B4, B#4, C5
  // goes down to C0 according to #
  // A0 = 27.5 Hz
  var a = Math.pow(2, 1/12);
  if (base === undefined) {
    base = ["A4", 440];
  }
  //number = number * 2;
  return base[1]*(Math.pow(a, note));
}
function createNoteTable (letterBool) { // creates a table of notes with their Hz frequencies
  function incrementLetter (input) { // for moving up one half step
    var letterIndex = ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"]; // the array of half steps
    
    if (input === "G#") { // wraps back to A if it goes too far
      return "A";
    } else { // otherwise go up one half step
      return letterIndex[1 + letterIndex.indexOf(input)]; // in the array
    }
  }
  if (letterBool === undefined) { // if the parameter is not included
    letterBool = true; // set it to default - return array[octave #][note]
  }
  var noteFreq = []; // define the array
  
  for (var i = 0; i < 9; i++) { // add octaves
    noteFreq[i] = []; // for each of those add space for notes
  }
  var a = 0; // current octave #
  var b; // current note
  if (letterBool) { // if the array is to be one of letter notes
    b = "A"; // initial value
  } else { // if the array is to be one of number notes
    b = 0; // initial value
  }
  for (var ii = 0; ii < 88; ii++) { //for each note
    noteFreq[a][b] = getNote(ii, 55); //set it to its' frequency in Hz
    if (letterBool) { //if the array is to be one of letter notes
      b = incrementLetter(b); //increment b
      if (b === "C") { //if b is at the point to turnover to a new octave
        a++; //increment a
      }
    } else { //if the array is to be one of number notes
      if (b === 11) { //if b is at the number equivalent of G#
        b = 0; //wrap it to the number equivalent of A just as you would with a note
      } else if (b === 3) { //if b is at the point to turnover to a new octave
        a++; //increment a
        b++; //increment b
      } else { //otherwise
        b++; //just increment b
      }
    }	
  }
  return noteFreq;
}

Code.encode = {};
Code.decode = {};
Code.encode.plainToBinaryCode = function (string) {
  var plaintext = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890, .@#$%&-+()*\"':;!?~`|•√π÷×¶∆£¢€¥^°={}\©®™℅[]¹½⅓¼⅛²⅔³⅜¾⁴⅝⅞∅ⁿ₱€¢£¥‰—_–·±<{[>}]★†‡„“”«»‚‘’‹›¡¿…♣♠♪♥♦Π§←↑↓→′\″∞≠≈‹≤«›≥»";
  var ciphertext = "1100001 1100010 1100011 1100100 1100101 1100110 1100111 1101000 1101001 1101010 1101011 1101100 1101101 1101110 1101111 1110000 1110001 1110010 1110011 1110100 1110101 1110110 1110111 1111000 1111001 1111010 1000001 1000010 1000011 1000100 1000101 1000110 1000111 1001000 1001001 1001010 1001011 1001100 1001101 1001110 1001111 1010000 1010001 1010010 1010011 1010100 1010101 1010110 1010111 1011000 1011001 1011010 110001 110010 110011 110100 110101 110110 110111 111000 111001 110000 101100 100000 101110 1000000 100011 100100 100101 100110 101101 101011 101000 101001 101010 100010 100111 111010 111011 100001 111111 1111110 1100000 1111100 10000000100010 10001000011010 1111000000 11110111 11010111 10110110 10001000000110 10100011 10100010 10000010101100 10100101 1011110 10110000 111101 1111011 1111101 1011100 10101001 10101110 10000100100010 10000100000101 1011011 1011101 10111001 10111101 10000101010011 10111100 10000101011011 10110010 10000101010100 10110011 10000101011100 10111110 10000001110100 10000101011101 10000101011110 10001000000101 10000001111111 10000010110001 10000010101100 10100010 10100011 10100101 10000000110000 10000000010100 1011111 10000000010011 10110111 10110001 111100 1111011 1011011 111110 1111101 1011101 10011000000101 10000000100000 10000000100001 10000000011110 10000000011100 10000000011101 10101011 10111011 10000000011010 10000000011000 10000000011001 10000000111001 10000000111010 10100001 10111111 10000000100110 10011001100011 10011001100000 10011001101010 10011001100101 10011001100110 1110100000 10100111 10000110010000 10000110010001 10000110010011 10000110010010 10000000110010 10000000110011 10001000011110 10001001100000 10001001001000 10000000111001 10001001100100 10101011 10000000111010 10001001100101 10111011";
  var code = "";
  var ii = 0;
  var error = [false, ""];
  plaintext = plaintext.split("");
  ciphertext = ciphertext.split(" ");
  for (var i = 0; i < string.length; i++) {
    ii = plaintext.indexOf(string[i]);
    if (ii === -1) {
      error[0] = true;
      error[1] = string[i];
    }
    if (i !== 0) {
      code = code + " ";
    }
    code = code + ciphertext[ii];
  }
  if (error[0]) {
    code = "Error: Character \"" + error[1] + "\" is not recognized.";
  }
  return code;
};
Code.decode.binaryCodeToPlain = function (string) {
  var plaintext = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890, .@#$%&-+()*\"':;!?~`|•√π÷×¶∆£¢€¥^°={}\©®™℅[]¹½⅓¼⅛²⅔³⅜¾⁴⅝⅞∅ⁿ₱€¢£¥‰—_–·±<{[>}]★†‡„“”«»‚‘’‹›¡¿…♣♠♪♥♦Π§←↑↓→′\″∞≠≈‹≤«›≥»";
  var ciphertext = "1100001 1100010 1100011 1100100 1100101 1100110 1100111 1101000 1101001 1101010 1101011 1101100 1101101 1101110 1101111 1110000 1110001 1110010 1110011 1110100 1110101 1110110 1110111 1111000 1111001 1111010 1000001 1000010 1000011 1000100 1000101 1000110 1000111 1001000 1001001 1001010 1001011 1001100 1001101 1001110 1001111 1010000 1010001 1010010 1010011 1010100 1010101 1010110 1010111 1011000 1011001 1011010 110001 110010 110011 110100 110101 110110 110111 111000 111001 110000 101100 100000 101110 1000000 100011 100100 100101 100110 101101 101011 101000 101001 101010 100010 100111 111010 111011 100001 111111 1111110 1100000 1111100 10000000100010 10001000011010 1111000000 11110111 11010111 10110110 10001000000110 10100011 10100010 10000010101100 10100101 1011110 10110000 111101 1111011 1111101 1011100 10101001 10101110 10000100100010 10000100000101 1011011 1011101 10111001 10111101 10000101010011 10111100 10000101011011 10110010 10000101010100 10110011 10000101011100 10111110 10000001110100 10000101011101 10000101011110 10001000000101 10000001111111 10000010110001 10000010101100 10100010 10100011 10100101 10000000110000 10000000010100 1011111 10000000010011 10110111 10110001 111100 1111011 1011011 111110 1111101 1011101 10011000000101 10000000100000 10000000100001 10000000011110 10000000011100 10000000011101 10101011 10111011 10000000011010 10000000011000 10000000011001 10000000111001 10000000111010 10100001 10111111 10000000100110 10011001100011 10011001100000 10011001101010 10011001100101 10011001100110 1110100000 10100111 10000110010000 10000110010001 10000110010011 10000110010010 10000000110010 10000000110011 10001000011110 10001001100000 10001001001000 10000000111001 10001001100100 10101011 10000000111010 10001001100101 10111011";
  var decoded = "";
  var ii = 0;
  var error = [false, ""];
  string = string.split(" ");
  plaintext = plaintext.split("");
  ciphertext = ciphertext.split(" ");
  for (var i = 0; i < string.length; i++) {
    ii = ciphertext.indexOf(string[i]);
    if (ii === -1) {
      error[0] = true;
      error[1] = string[i];
    }
    decoded = decoded + plaintext[ii];
  }
  if (error[0]) {
    decoded = "Error: Binary sequence \"" + error[1] + "\" is not recognized.";
  }
  return decoded;
};
Code.encode.plainToCaesarCipher = function (string, shiftNum) {
  var dict = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var ii;
  var code = "";
  for (var i = 0; i < string.length; i++) {
    ii = dict.indexOf(string[i]);
    if (ii + shiftNum > 25) {
      ii += shiftNum - 26;
    } else {
      ii += shiftNum;
    }
    code = code + dict[ii];
  }
  return code;
};
Code.decode.caesarCipherToPlain = function (string, shiftNum) {
  var dict = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var ii;
  var code = "";
  for (var i = 0; i < string.length; i++) {
    ii = dict.indexOf(string[i]);
    if (ii - shiftNum < 0) {
      ii -= shiftNum + 26;
    } else {
      ii -= shiftNum;
    }
    code = code + dict[ii];
  }
  return code;
};
function loadScript (src, f) { //loads a script then executes code
  //possibly could be done with promises?
  //from https://stackoverflow.com/questions/2145914/including-a-js-file-within-a-js-file#answer-2145947
  var head = document.getElementsByTagName("head")[0];
  var script = document.createElement("script");
  script.src = src;
  var done = false;
  script.onload = script.onreadystatechange = function() { 
    // attach to both events for cross browser finish detection:
    if ( !done && (!this.readyState ||
                   this.readyState == "loaded" || this.readyState == "complete") ) {
      done = true;
      if (typeof f == 'function') f();
      // cleans up a little memory:
      script.onload = script.onreadystatechange = null;
      head.removeChild(script);
    }
  };
  head.appendChild(script);
}
/*
usage for the above function in loading this file to a script so it can be used:
(assuming this file is in the root folder)
requires the existence of the file in the first place
<script type="text/JavaScript">
function loadScript(src, f) {
// from https://stackoverflow.com/questions/2145914/including-a-js-file-within-a-js-file#answer-2145947
  var head = document.getElementsByTagName("head")[0];
  var script = document.createElement("script");
  script.src = src;
  var done = false;
  script.onload = script.onreadystatechange = function() { 
    // attach to both events for cross browser finish detection:
    if ( !done && (!this.readyState ||
      this.readyState == "loaded" || this.readyState == "complete") ) {
      done = true;
      if (typeof f == 'function') f();
      // cleans up a little memory:
      script.onload = script.onreadystatechange = null;
      head.removeChild(script);
    }
  };
  head.appendChild(script);
}

// then:
loadScript("/Helpful%20functions.js", function() {
// EVERYTHING YOU WANT TO DO GOES HERE
});
// < / script>
*/
// from https://stackoverflow.com/questions/1337419/how-do-you-convert-numbers-between-different-bases-in-javascript
function convertBase(str, fromBase, toBase) {

    const DIGITS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/";

    const add = (x, y, base) => {
        let z = [];
        const n = Math.max(x.length, y.length);
        let carry = 0;
        let i = 0;
        while (i < n || carry) {
            const xi = i < x.length ? x[i] : 0;
            const yi = i < y.length ? y[i] : 0;
            const zi = carry + xi + yi;
            z.push(zi % base);
            carry = Math.floor(zi / base);
            i++;
        }
        return z;
    }

    const multiplyByNumber = (num, x, base) => {
        if (num < 0) return null;
        if (num == 0) return [];

        let result = [];
        let power = x;
        while (true) {
            num & 1 && (result = add(result, power, base));
            num = num >> 1;
            if (num === 0) break;
            power = add(power, power, base);
        }

        return result;
    }

    const parseToDigitsArray = (str, base) => {
        const digits = str.split('');
        let arr = [];
        for (let i = digits.length - 1; i >= 0; i--) {
            const n = DIGITS.indexOf(digits[i])
            if (n == -1) return null;
            arr.push(n);
        }
        return arr;
    }

    const digits = parseToDigitsArray(str, fromBase);
    if (digits === null) return null;

    let outArray = [];
    let power = [1];
    for (let i = 0; i < digits.length; i++) {
        digits[i] && (outArray = add(outArray, multiplyByNumber(digits[i], power, toBase), toBase));
        power = multiplyByNumber(fromBase, power, toBase);
    }

    let out = '';
    for (let i = outArray.length - 1; i >= 0; i--)
        out += DIGITS[outArray[i]];

    return out;
}
var loadJS = function (url, implementationCode, location){
    //url is URL of external file, implementationCode is the code
    //to be called from the file, location is the location to 
    //insert the <script> element

    var scriptTag = document.createElement('script');
    scriptTag.src = url;

    scriptTag.onload = implementationCode;
    scriptTag.onreadystatechange = implementationCode;

    location.appendChild(scriptTag);
};
// var callback = function(){
// your code goes here
// }
// loadJS('yourcode.js', callback, document.body);


function signOf (n) {
// returns the sign of {n}:
/*
n > 0: returns + 1
n = 0: returns 0
n < 0: returns - 1
*/
  if (n === 0) {
    return 0;
  } else {
    if (n > 0) {
      return 1;
    } else if (n < 0) {
      return - 1;
    }
  }
}
