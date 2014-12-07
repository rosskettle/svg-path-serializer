var serializer = require('./src/svg-path-serializer.js');

var parsed = [
  { code:'M', command:'moveto', x:3, y:7 },
  { code:'L', command:'lineto', x:5, y:-6 },
  { code:'L', command:'lineto', x:1, y:7 },
  { code:'L', command:'lineto', x:100, y:-0.4 },
  { code:'m', command:'moveto', relative:true, x:-10, y:10 },
  { code:'l', command:'lineto', relative:true, x:10, y:0 },
  { code:'V', command:'vertical lineto', y:27 },
  { code:'V', command:'vertical lineto', y:89 },
  { code:'H', command:'horizontal lineto', x:23 },
  { code:'v', command:'vertical lineto', relative:true, y:10 },
  { code:'h', command:'horizontal lineto', relative:true, x:10 },
  { code:'C', command:'curveto', x1:33, y1:43, x2:38, y2:47, x:43, y:47 },
  { code:'c', command:'curveto', relative:true, x1:0, y1:5, x2:5, y2:10, x:10, y:10 },
  { code:'S', command:'smooth curveto', x2:63, y2:67, x:63, y:67 },
  { code:'s', command:'smooth curveto', relative:true, x2:-10, y2:10, x:10, y:10 },
  { code:'Q', command:'quadratic curveto', x1:50, y1:50, x:73, y:57 },
  { code:'q', command:'quadratic curveto', relative:true, x1:20, y1:-5, x:0, y:-10 },
  { code:'T', command:'smooth quadratic curveto', x:70, y:40 },
  { code:'t', command:'smooth quadratic curveto', relative:true, x:0, y:-15 },
  { code:'A', command:'elliptical arc', rx:5, ry:5, xAxisRotation:45, largeArc:true, sweep:false, x:40, y:20 },
  { code:'a', command:'elliptical arc', relative:true, rx:5, ry:5, xAxisRotation:20, largeArc:false, sweep:true, x:-10, y:-10 },
  { code:'Z', command:'closepath' }
];

var pathString = serializer(parsed);


var oneIPreparedEarlier = 'M3,7L5,-6L1,7L100,-0.4m-10,10l10,0V27 89H23v10h10C33,43 38,47 43,47c0,5 5,10 10,10S63,67 63,67s-10,10 10,10Q50,50 73,57q20,-5 0,-10T70,40t0,-15A5,5 45 1 0 40,20a5,5 20 0 1 -10,-10Z';

if (pathString !== oneIPreparedEarlier) {
  throw new Error('Path string did not serialize as expected.');
} else {
  console.log ('Path string serialized as expected.')
}

console.log (pathString);