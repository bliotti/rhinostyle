webpackJsonp([4],{0:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(7),i=a(u),f=n(26),s=a(f),p=n(38),d=n(39),b=a(d),m=n(426),y={React:i["default"],ReactDOM:s["default"],Label:p.Label},h=function(e){function t(){return l(this,t),r(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),c(t,[{key:"render",value:function(){return i["default"].createElement("div",null,i["default"].createElement("h1",{className:"site-headline"},"Labels"),i["default"].createElement("section",{className:"site-section"},i["default"].createElement("h3",{className:"site-subheadline"},"Label Types"),i["default"].createElement(p.Label,{label:"default label"}),i["default"].createElement(p.Label,{type:"primary",label:"primary label"}),i["default"].createElement(p.Label,{type:"secondary",label:"secondary label"}),i["default"].createElement(p.Label,{type:"accent",label:"accent label"})),i["default"].createElement("section",null,i["default"].createElement("h3",{className:"site-subheadline"},"Playground"),i["default"].createElement(b["default"],{codeText:m,scope:y,noRender:!1})))}}]),t}(i["default"].Component);h.displayName="Rhinostyle Label Example",s["default"].render(i["default"].createElement(h,null),document.getElementById("js-app"))},426:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div>\n        <Label label="ben bruning" />\n        <Label type="primary" label="craig anthony" />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});