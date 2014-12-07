var pathString = '';

var serialize = function(commands, commandDelimiter) {
	var _ = ' ';
	var c = ',';
	var previousItem = 'dummy';
	var axisAlignedLineCommands = ['V', 'v', 'H', 'h'];

	for (var i = 0; i < commands.length; i++) {
		item = commands[i];

		if (item.code === previousItem.code && axisAlignedLineCommands.indexOf(item.code) !== -1) {
			pathString += _;
		} else {
			pathString += item.code;
		}

		switch (item.code) {
		  case 'M' :
		  case 'L' :
		  case 'm' :
		  case 'l' :
		  case 'T' :
		  case 't' :
		    pathString +=
		    	item.x + c +
		    	item.y;
		    break;
		  case 'V' :
		  case 'v' :
		  	pathString +=
		  		item.y;
		  	break;
		  case 'H' :
		  case 'h' :
		  	pathString +=
		  		item.x;
		  	break;
		  case 'C' :
		  case 'c' :
		  	pathString +=
		  		item.x1 + c +
		  		item.y1 + _ +
		  		item.x2 + c +
		  		item.y2 + _ +
		  		item.x  + c  +
		  		item.y;
		 	break;
		  case 'S' :
		  case 's' :
		  	pathString +=
		  		item.x2 + c +
		  		item.y2 + _ +
		  		item.x  + c +
		  		item.y
		  	break;
		  case 'Q' :
		  case 'q' :
		  	pathString +=
		  		item.x1 + c +
		  		item.y1 + _ +
		  		item.x  + c +
		  		item.y;
		  	break;
		  case 'A' :
		  case 'a' :
			pathString +=
				item.rx + c +
				item.ry + _ +
				item.xAxisRotation + _ +
				(item.largeArc ? 1 : 0) + _ +
				(item.sweep    ? 1 : 0) + _ +
				item.x  + c +
		  		item.y;
		  	break;
		  case 'Z' :
		  	break;

		  default :
		  	throw new Error('Unknown SVG path command "' + item.code + '"');

		}
		if (commandDelimiter) {
			pathString += commandDelimiter;
		}
		previousItem = item;

	}
	return pathString;
}

module.exports = serialize
