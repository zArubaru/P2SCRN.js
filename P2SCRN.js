function P2SCRN (typeSpeed, title, gameTree) {
	var self = this;
	// fill title and define variables
	this.init = function init () {
		this.title = document.getElementById('title');
		this.title.textContent = title || "The Game";
		this.spd = typeSpeed || 10;
		this.scrn = document.getElementById('screen');
		this.crsr = this.scrn.appendChild(document.createElement('p'));
		this.crsr.id = "cursor";
		this.crsr.textContent = " _";
		this.emTgl = false;
		this.tree = gameTree || [];
		this.tree ? this.chain = this.tree.start : [];
		this.scrn.onclick = function () {
			if (gameTree) {
				p.start();
				self.scrn.onclick = null;
			}
			else{
				self.title.textContent = "NO GAMETREE";
				console.log("NO GAMETREE");
			}
		};
	};
	// type to screen
	this.prnt = function prnt (text, index) {
		/* Start from the beginning of text by default.
		 * I don't recommend touching index at this time,
		 * if you do, you might need to manually set this
		 * line, if not set:
		 * self.crnt = self.scrn.insertBefore(document.createElement('p'), self.crsr);
		 */
		if (!index) {
			index = 0;
			// check for object
			if (typeof(text) === "object") {
				this.crsr.textContent = "";
				// add selections for next branches
				this.scrn.insertBefore(document.createElement('br'), self.crsr);
				this.crnt = self.scrn.insertBefore(document.createElement('span'), self.crsr);
				this.crnt.textContent = text.optn;
				this.crnt.onclick = function () {
					[].forEach.call(self.scrn.getElementsByTagName('span'), function (span) {
						span.onclick = null;
					});
					self.chain = self.tree[text.next];
					self.start();
				};
				// scroll container
				self.scrn.scrollTop = self.scrn.scrollHeight;
				if (this.start.isRun) {
					this.chain.shift();
					if (this.chain[0]) {
						setTimeout(function () {
							self.start();
						}, this.spd + 100);
						return;
					}
				}
				return;
			}
			// by default, create a p element for strings
			else {
				this.crnt = this.scrn.insertBefore(document.createElement('p'), self.crsr);
				this.crsr.textContent = " _";
			}
		}
		// when nothing more to type, continue down chain
		else if (!text[index]) {
			if (this.start.isRun === true) {
				this.chain.shift();
				if (this.chain[0]) {
					this.start();
				}
				else {
					this.start.isRun = false;
				}
			}
			return;
		}
		// default typing part
		setTimeout(function () {
			// check for stars, which indicate en <em> text section
			if (text[index] === '*') {
				if (!self.emTgl) {
					self.crnt = self.scrn.insertBefore(document.createElement('em'), self.crsr);
				}
				else {
					self.crnt = self.scrn.insertBefore(document.createElement('p'), self.crsr);
				}
				self.emTgl = !self.emTgl;
			}
			// default type
			else {
				self.crnt.textContent += text[index];
			}
			// scroll container
			self.scrn.scrollTop = self.scrn.scrollHeight;
			self.prnt(text, ++index);
		}, this.spd + Math.floor( Math.random() * 21));
	};
	// start a chain, usually by providing a gameTree
	this.start = function start () {
		self.start.isRun = true;
		self.prnt(p.chain[0]);
	};
	// clear screen and add a cursor
	this.clr = function clr () {
		while (this.scrn.firstChild && this.scrn.firstChild.id !== "cursor") {
			this.scrn.removeChild(this.scrn.firstChild);
		}
		if (this.crsr.textContent === "") {
			this.crsr.textContent = " _";
		}
	}
}