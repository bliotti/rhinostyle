webpackJsonp([4],{0:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(3),r=a(c),u=n(13),d=a(u),m=n(19),f=n(20),p=a(f),y=n(546),h={body:"[Required] - Callout body text",className:"[Optional] - Include additional class name(s)",heading:"[Required] - Callout heading text",type:"[Optional] - Callout type, as a string -  [danger | info]"},b=n(564),g={body:"[Required] - Toast body text",className:"[Optional] - Include additional class name(s)",icon:"[Optional] - Include icon name",onDismiss:"[Required] - Include dismiss function",type:"[Optional] - Callout type, as a string -  [danger | secondary]"},E={React:r["default"],ReactDOM:d["default"],Toast:m.Toast,Icon:m.Icon},C={React:r["default"],ReactDOM:d["default"],Callout:m.Callout},w=function(e){function t(){var e,n,a,i;o(this,t);for(var s=arguments.length,c=Array(s),r=0;s>r;r++)c[r]=arguments[r];return n=a=l(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),a.onClick=function(e){e.preventDefault(),m.NotificationActions.addNotification({body:"This is an alert in a toast notification",icon:"warning",type:"danger",onDismiss:function(){console.log("I run when the notification was dismissed")}})},i=n,l(a,i)}return i(t,e),s(t,[{key:"render",value:function(){return r["default"].createElement("div",null,r["default"].createElement("h1",{className:"site-headline"},"Feedback"),r["default"].createElement("section",{className:"site-section"},r["default"].createElement("h3",{className:"site-subheadline"},"Callout"),r["default"].createElement("div",{className:"u-m-b-lg"},r["default"].createElement("div",{className:"site-example-callouts"},r["default"].createElement(m.Callout,{type:"danger",heading:"Callout Danger",body:"Rhinogram’s mission is to help you seamlessly communicate with your patients across all channels with one simple tool."}),r["default"].createElement(m.Callout,{type:"default",heading:"Callout Default",body:"Rhinogram’s mission is to help you seamlessly communicate with your patients across all channels with one simple tool."}),r["default"].createElement(m.Callout,{type:"info",heading:"Callout Info",body:"Rhinogram’s mission is to help you seamlessly communicate with your patients across all channels with one simple tool."}))),r["default"].createElement("h3",{className:"site-subheadline"},"Callout Playground"),r["default"].createElement(p["default"],{docClass:m.Callout,propDescriptionMap:h,codeText:y,scope:C,noRender:!1})),r["default"].createElement("section",null,r["default"].createElement("h3",{className:"site-subheadline"},"Toast"),r["default"].createElement("p",{className:"site-copy"},"To see a toast in action, ",r["default"].createElement("a",{href:"#",onClick:this.onClick},"click here"),"."),r["default"].createElement("div",{className:"site-example-toasts u-m-b-lg"},r["default"].createElement(m.Toast,{type:"default",body:"Default notification"}),r["default"].createElement(m.Toast,{type:"secondary",icon:"checkmark",body:"Default notification"}),r["default"].createElement(m.Toast,{type:"danger",body:"Danger notification"})),r["default"].createElement("h3",{className:"site-subheadline"},"Toast Playground"),r["default"].createElement(p["default"],{docClass:m.Toast,propDescriptionMap:g,codeText:b,scope:E,noRender:!1})))}}]),t}(r["default"].Component);w.displayName="Rhinostyle Feedback Examples",d["default"].render(r["default"].createElement(w,null),document.getElementById("js-app"))},546:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div>\n        <Callout heading="Default Callout" body="Rhinogram’s mission is to help you seamlessly communicate with your patients across all channels with one simple tool." />\n      </div>\n    );\n  }\n}\nReactDOM.render(<ComponentExample />, mountNode);'},564:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div>\n        <Toast type="secondary" icon="checkmark" body="Default notification" />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});