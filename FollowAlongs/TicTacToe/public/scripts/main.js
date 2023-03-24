var rhit = rhit || {};
/** function and class syntax examples */
rhit.functionName = function () {
	/** function body */
};

rhit.PageController = class {
	constructor() {

	}

	methodName() {
		//default method
	}
}

rhit.Game = class {
	constructor() {

	}

	pressedButtonAtIndex(buttonIndex) {

	}

	getmarkAtIndex(buttonIndex){
		return "X";//TODO Implement
	}

	getState(){
		return "X's Turn"; //TODO Implement
	}
}

/* Main */
/** function and class syntax examples */
rhit.main = function () {
	console.log("Ready");
	new rhit.PageController();
};

rhit.main();
