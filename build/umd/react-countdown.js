(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactCountdown"] = factory(require("react"));
	else
		root["ReactCountdown"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	exports.Normal = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);

	var CountdownNormal = React.createClass({displayName: "CountdownNormal",
	  getInitialState: function() {
	    return {
	      runningTime: 0
	    };
	  },
	  componentDidUpdate: function() {
	    var runningTime = this.state.runningTime;
	    if (!runningTime) clearTimeout(this.timer);
	    runningTime--;
	    this.timer = setTimeout(function() {
	      this.setState({runningTime: runningTime});

	      if (!runningTime) clearTimeout(this.timer);
	    }.bind(this), 1000);
	  },
	  handleClick: function(event) {
	    if (this.state.runningTime) return;
	    this.setState({runningTime: this.props.time});
	  },
	  render: function() {
	    var text = this.state.runningTime ? 
	               this.props.tpl.replace(/\?time/, this.state.runningTime)
	             : this.props.placeholder;
	    return (
	      React.createElement("button", {onClick: this.handleClick}, text)
	    );
	  }
	});

	module.exports = CountdownNormal;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;