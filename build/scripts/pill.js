webpackJsonp([13],{0:function(e,l,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var n=t(3),i=a(n),s=t(10),d=a(s),c=t(12),u=t(16),r=a(u),o=t(632),p={className:"[Optional] - Include additional class name(s)",disabled:"[Optional] - Pill is disabled",onClick:"[Required] - Include click function for Pill",label:"[Required] - Include label for Pill",type:"[Optional] - Pill type, as a string -  [default | neutral]"},m={React:i["default"],ReactDOM:d["default"],Pill:c.Pill},f=function(){return i["default"].createElement("div",null,i["default"].createElement("h1",{className:"site-headline"},"Pills"),i["default"].createElement("section",{className:"site-section"},i["default"].createElement("h3",{className:"site-subheadline"},"Pills"),i["default"].createElement("p",{className:"site-text-lead"},"The Pill component is used to display current filters or selections.")),i["default"].createElement("section",null,i["default"].createElement("h3",{className:"site-subheadline"},"Playground"),i["default"].createElement(r["default"],{docClass:c.Pill,propDescriptionMap:p,codeText:o,scope:m,noRender:!1})))};d["default"].render(i["default"].createElement(f,null),document.getElementById("js-app"))},632:function(e,l){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-pills">\n        <Pill label="Default Pill" />\n        <Pill label="Default Pill" />\n        <Pill label="Default Pill Disabled" disabled />\n        <Pill label="Neutral Pill" type="neutral" />\n        <Pill label="Neutral Pill" type="neutral" />\n        <Pill label="Neutral Pill Disabled" type="neutral" disabled />\n        <br />\n        <Pill label="Click Me" onClick={() => alert(\'clicked!\')} />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});