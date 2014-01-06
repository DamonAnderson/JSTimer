var JSTimer = function(seconds, display, cb) {
	var self = this;
	this.seconds = seconds;
	var sec = seconds;
	this.display = display;
	this.cb = cb;
	this.running = false;
	var job = null;
	
	this.start = function() {
		if (!this.running) {
			this.running = true;
			run();
		}
	};
	
	this.stop = function() {
		clearTimeout(job);
		this.running = false;
	};
	
	this.reset = function() {
		sec = this.seconds;
		clearTimeout(job);
		this.running = true;
		run();
	};
	
	this.getTime = function() {
		return sec;
	};
	
	this.setSeconds = function(seconds) {
		this.seconds = seconds;
	};
	
	function run() {
		if (sec < 0) {
			self.cb();
		}
		else {
			self.display();
			sec--;
			job = setTimeout(run, 1000);
		}
	}
};
