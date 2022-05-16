var lastTimestamp= 0;

function returnFrametime(){return performance.now()-lastTimestamp;}
function updateframetimeBuffer(){lastTimestamp= performance.now();}

//expected frametime val in msec
function returnFPS(frametime){return (Math.round(1000/frametime))}
