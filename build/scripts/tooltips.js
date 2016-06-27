webpackJsonp([6],{0:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var o=l(4),n=a(o),s=l(14),p=a(s),i=l(20),d=l(21),u=a(d),c=l(666),r={React:n["default"],ReactDOM:p["default"],Button:i.Button,Icon:i.Icon},m=function(){return n["default"].createElement("div",null,n["default"].createElement("h1",{className:"site-headline"},"Tooltips"),n["default"].createElement("section",{className:"site-section"},n["default"].createElement("h3",{className:"site-subheadline"},"About Tooltips"),n["default"].createElement("p",{className:"u-text-lead"},"Our tooltips are handled purely by CSS via data attributes. These ",n["default"].createElement("strong",null,"are not")," ReactJS components.")),n["default"].createElement("section",{className:"site-section"},n["default"].createElement("h3",{className:"site-subheadline"},"Tooltip Data Attributes"),n["default"].createElement("div",{className:"site-copy"},n["default"].createElement("p",null,"Pass tooltip text into any one of the following attributes."),n["default"].createElement("p",null,n["default"].createElement("code",null,"data-tooltip-top | data-tooltip-bottom | data-tooltip-left | data-tooltip-right")))),n["default"].createElement("section",{className:"site-section"},n["default"].createElement("h3",{className:"site-subheadline"},"Tooltips Playground"),n["default"].createElement(u["default"],{codeText:c,scope:r,noRender:!1})))};p["default"].render(n["default"].createElement(m,null),document.getElementById("js-app"))},666:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div>\n      	<p><span data-tooltip-top="Well hello there!">tooltip top</span> &nbsp;&nbsp; <span data-tooltip-bottom="Well hello there!">tooltip bottom</span> &nbsp;&nbsp; <span data-tooltip-left="Well hello there!">tooltip left</span> &nbsp;&nbsp; <span data-tooltip-right="Well hello there!">tooltip right</span></p>\n        <p><a href="#" data-tooltip-top="Well hello there!">link with tooltip</a></p>\n        <p>\n          <Button data-tooltip-top="Well hello there!">Button with Tooltip</Button>\n        </p>\n      </div>\n    );\n  }\n}\nReactDOM.render(<ComponentExample />, mountNode);'}});