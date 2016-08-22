var domCv=document.getElementsByClassName('runner-canvas')[0];
var ctx=domCv.getContext('2d');
var xChouffeMax=130;
var xChouffeMin=90;
var yChouffeMin=100;//123;
var yChouffeMax=123;

var zou=function() {
  var iData=ctx.getImageData(0,0,domCv.width, domCv.height).data,x,y,alpha;
  
  for (y=yChouffeMin; y<=yChouffeMax; ++y){
    for (x=xChouffeMin; x<=xChouffeMax; ++x){
      alpha=iData[4*(x+y*domCv.width)+3];
      if (alpha!==0) {
	Runner.instance_.tRex.startJump(100);
	return;
      }
    }
  }
  
};

setInterval(zou, 1);