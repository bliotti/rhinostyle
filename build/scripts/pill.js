webpackJsonp([7],{0:function(e,l,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var a=t(4),c=n(a),s=t(16),i=n(s),d=t(22),u=t(23),r=n(u),m=t(657),o={React:c["default"],ReactDOM:i["default"],Pill:d.Pill},f=function(){return c["default"].createElement("div",null,c["default"].createElement("h1",{className:"site-headline"},"Pills"),c["default"].createElement("section",{className:"site-section"},c["default"].createElement("h3",{className:"site-subheadline"},"Pill Types"),c["default"].createElement("div",{className:"site-example-pills"},c["default"].createElement(d.Pill,{label:"Ben Bruning"}),c["default"].createElement(d.Pill,{label:"Craig Anthony"}))),c["default"].createElement("section",null,c["default"].createElement("h3",{className:"site-subheadline"},"Playground"),c["default"].createElement(r["default"],{codeText:m,scope:o,noRender:!1})))};i["default"].render(c["default"].createElement(f,null),document.getElementById("js-app"))},657:function(e,l){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-pills">\n        <Pill label="Ben" />\n        <Pill label="Click Me" click={() => alert(\'clicked!\')} />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});