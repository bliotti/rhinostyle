webpackJsonp([3],{0:function(e,r,a){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}var s=a(15),l=t(s),n=a(23),o=t(n),c=a(!function(){var e=new Error('Cannot find module "../components"');throw e.code="MODULE_NOT_FOUND",e}()),u=a(25),m=t(u),d=a(411),p={React:l["default"],ReactDOM:o["default"],ProgressBar:c.ProgressBar},i=function(){return l["default"].createElement("div",null,l["default"].createElement("h1",{className:"site-headline"},"Progress Bars ",l["default"].createElement("small",null,"(pssst! click on progress bars!)")),l["default"].createElement("section",{className:"site-section"},l["default"].createElement("h3",{className:"site-subheadline"},"Progress Bar Types"),l["default"].createElement(c.ProgressBar,{progress:20,className:"u-m-b"}),l["default"].createElement(c.ProgressBar,{progress:40,type:"primary",className:"u-m-b"}),l["default"].createElement(c.ProgressBar,{progress:60,type:"secondary",className:"u-m-b"}),l["default"].createElement(c.ProgressBar,{progress:80,type:"temperature",className:"u-m-b"})),l["default"].createElement("section",{className:"site-section"},l["default"].createElement("h3",{className:"site-subheadline"},"Progress Bar Labels"),l["default"].createElement("p",{className:"site-copy"},"Include ",l["default"].createElement("code",null,"showLabel")," property to create progress bar label."),l["default"].createElement(c.ProgressBar,{progress:60,showLabel:!0,type:"primary"})),l["default"].createElement("section",null,l["default"].createElement("h3",{className:"site-subheadline"},"Playground"),l["default"].createElement(m["default"],{codeText:d,scope:p,noRender:!1})))};o["default"].render(l["default"].createElement(i,null),document.getElementById("js-app"))},411:function(e,r){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div>\n      	<ProgressBar progress={30} className="u-m-b" />\n        <ProgressBar progress={60} showLabel type="primary" className="u-m-b" />\n        <ProgressBar progress={90} showLabel type="temperature" />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});