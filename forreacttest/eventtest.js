!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.tools=t():e.tools=t()}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=5)}({5:function(e,t,n){"use strict";var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={dt:new Date},n.tid=setInterval(n.updatetime.bind(n),1e3),n}i(t,React.Component),o(t,[{key:"updatetime",value:function(){this.setState({dt:new Date})}},{key:"endtime",value:function(){clearInterval(this.tid)}},{key:"render",value:function(){return React.createElement("div",null,this.state.dt.toLocaleTimeString())}}])})(),function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={name:"zsp",sex:"man",age:"32"},n}i(t,React.Component),o(t,[{key:"clickHandler",value:function(){this.setState({name:"赵四平"})}},{key:"render",value:function(){return console.log("render"),React.createElement("div",null,React.createElement("p",{onClick:this.clickHandler.bind(this)},"大家好，我是",this.state.name,",今年",this.state.age,"岁，",this.state.sex),React.createElement("p",null,"我的属性是",this.props.data.name,",dt:",this.props.data.dt))}},{key:"componentDidMount",value:function(){this.props.data.name="didMount"}}])}(),function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={value:"Hello Runoob!"},n.handleChange=n.handleChange.bind(n),n}i(t,React.Component),o(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){var e=this.state.value;return React.createElement("div",null,React.createElement("input",{ref:"ipt",type:"text",value:e,onChange:this.handleChange}),React.createElement("h4",{ref:"hf"},e))}}])}();window.onload=function(){}}})});