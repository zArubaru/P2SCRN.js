# P2SCRN.js

An interactive fiction engine, created as my final project for Harvard's CS50x.
I would like to continue developing this farther in the future. :-)

If you want to try messing around with the engine, I suggest starting at the file: gameFile.js.
For a very basic test, you can try subsituting the file's contents for this:


	var p;
	window.onload = function () {
		p = new P2SCRN(5, "hello, world");
		p.init(); 
		p.prnt("hello, world\n");
	}
