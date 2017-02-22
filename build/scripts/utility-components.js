webpackJsonp([8],{0:function(t,n,e){"use strict";function l(t){return t&&t.__esModule?t:{default:t}}var a=e(15),o=l(a),i=e(3),c=l(i),s=e(9),u=l(s),r=e(8),d=e(667),m={align:"[Optional] - Align grid along x-axis (left by default) - [middle | right]",size:"[Optional] - Gutter size for list -  [small | large]"},p={React:c.default,ReactDOM:u.default,Button:r.Button,Icon:r.Icon,UtilityInlineGrid:r.UtilityInlineGrid},B=function(){return c.default.createElement("div",null,c.default.createElement("h1",{className:"site-headline"},"Utility Components"),c.default.createElement("section",{className:"site-section"},c.default.createElement("h3",{className:"site-subheadline"},"Utility Components"),c.default.createElement("p",{className:"site-text-lead"},"Helpers that can be used in conjunction with our components.")),c.default.createElement("section",{className:"site-section"},c.default.createElement("h3",{className:"site-subheadline"},"Inline Grid"),c.default.createElement("div",{className:"u-m-b-lg"},c.default.createElement("p",null,"Variable-width content; like buttons and/or list items, can wrap at certain widths within our app when placed next to each other. We can use the ",c.default.createElement("code",null,"u-inline-grid")," class to provide adequate spacing."),c.default.createElement("p",null,c.default.createElement("strong",null,"Note:")," This utility adds margin to each decendant of the class, so if the component you are interacting with has margin, wrap it in another element (such as a ",c.default.createElement("code",null,"<div>"),") to get around adverse spacing effects.")),c.default.createElement("h3",{className:"site-subheadline"},"Inline Grid Playground"),c.default.createElement(o.default,{docClass:r.UtilityInlineGrid,propDescriptionMap:m,codeText:d,scope:p,noRender:!1})))};u.default.render(c.default.createElement(B,null),document.getElementById("js-app"))},667:function(t,n){t.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div>\n        <UtilityInlineGrid>\n          <Button size="large">Large</Button>\n          <Button size="large"><Icon icon="cog" />&nbsp;Large</Button>\n          <Button size="large" iconOnly><Icon icon="cog" /></Button>\n          <Button>Default</Button>\n          <Button type="outline-primary">Outline Primary with Badge &nbsp;<span className="btn__badge">12</span></Button>\n          <Button><Icon icon="cog" />&nbsp;Default</Button>\n          <Button iconOnly><Icon icon="cog" /></Button>\n          <Button size="small">Small</Button>\n          <Button size="small"><Icon icon="cog" />&nbsp;Small</Button>\n          <Button size="small" iconOnly><Icon icon="cog" /></Button>\n        </UtilityInlineGrid>\n        <div className="u-m-t">\n          <UtilityInlineGrid size="large">\n            <Button size="large">Large</Button>\n            <Button size="large"><Icon icon="cog" />&nbsp;Large</Button>\n            <Button size="large" iconOnly><Icon icon="cog" /></Button>\n            <Button>Default</Button>\n            <Button type="outline-primary">Outline Primary with Badge &nbsp;<span className="btn__badge">12</span></Button>\n            <Button><Icon icon="cog" />&nbsp;Default</Button>\n            <Button iconOnly><Icon icon="cog" /></Button>\n            <Button size="small">Small</Button>\n            <Button size="small"><Icon icon="cog" />&nbsp;Small</Button>\n            <Button size="small" iconOnly><Icon icon="cog" /></Button>\n          </UtilityInlineGrid>\n        </div>\n      </div>\n    );\n  }\n}\nReactDOM.render(<ComponentExample />, mountNode);\n'}});