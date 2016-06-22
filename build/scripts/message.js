webpackJsonp([9],{0:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}var l=a(4),n=s(l),r=a(16),c=s(r),i=a(22),m=a(23),d=s(m),o=a(655),u={className:"[Optional] - Include additional class name(s)",type:"[Optional] - Message type -  [primary | note]",direction:"[Optional] - Message direction -  [to | from]"},f={React:n["default"],ReactDOM:c["default"],Message:i.Message},g=function(){return n["default"].createElement("div",null,n["default"].createElement("h1",{className:"site-headline"},"Messages"),n["default"].createElement("section",{className:"site-section"},n["default"].createElement("h3",{className:"site-subheadline"},"Message Types"),n["default"].createElement("p",{className:"site-copy"},n["default"].createElement("code",null,'type="default | primary | note"')),n["default"].createElement("div",{className:"site-example-messages u-bg-gray-lighter u-p-a"},n["default"].createElement(i.Message,null,"Default Message ",n["default"].createElement("a",{href:"#"},"www.linktosomething.com")),n["default"].createElement(i.Message,{type:"primary"},"Primary Message ",n["default"].createElement("a",{href:"#"},"www.linktosomething.com")),n["default"].createElement(i.Message,{type:"note"},"Note Message ",n["default"].createElement("a",{href:"#"},"www.linktosomething.com")))),n["default"].createElement("section",{className:"site-section"},n["default"].createElement("h3",{className:"site-subheadline"},"Message Direction"),n["default"].createElement("div",{className:"u-m-b-md"},n["default"].createElement("h5",{className:"site-miniheadline"},"From Message"),n["default"].createElement("p",{className:"site-copy"},n["default"].createElement("code",null,'direction="from"')),n["default"].createElement("div",{className:"site-example-messages u-bg-gray-lighter u-p-a"},n["default"].createElement(i.Message,{direction:"from"},"Default Message"),n["default"].createElement(i.Message,{direction:"from",type:"primary"},"Primary Message"),n["default"].createElement(i.Message,{direction:"from",type:"note"},"Note Message"))),n["default"].createElement("div",{className:"u-m-b-md"},n["default"].createElement("h5",{className:"site-miniheadline"},"To Message"),n["default"].createElement("p",{className:"site-copy"},n["default"].createElement("code",null,'direction="to"')),n["default"].createElement("div",{className:"site-example-messages u-bg-gray-lighter u-p-a"},n["default"].createElement(i.Message,{direction:"to"},"Default Message"),n["default"].createElement(i.Message,{direction:"to",type:"primary"},"Primary Message"),n["default"].createElement(i.Message,{direction:"to",type:"note"},"Note Message")))),n["default"].createElement("section",null,n["default"].createElement("h3",{className:"site-subheadline"},"Playground"),n["default"].createElement(d["default"],{docClass:i.Message,propDescriptionMap:u,codeText:o,scope:f,noRender:!1})))};c["default"].render(n["default"].createElement(g,null),document.getElementById("js-app"))},655:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-messages u-bg-gray-lighter u-p-a">\n        <Message direction="to">\n          This is a default message.\n        </Message>\n        <Message direction="from" type="note">\n          This is a note.\n        </Message>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});