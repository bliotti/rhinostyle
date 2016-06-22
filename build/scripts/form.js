webpackJsonp([2],{0:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}var n=a(4),c=l(n),i=a(16),m=l(i),o=a(21),d=a(22),r=l(d),s=a(653),u={addon:"[Optional] - Display an add-on on the input, as a string - [left | right | both]",label:"[Optional] - A label for the input",name:"[Optional] - An id for the label and the input, use if you want clicking the label to activate the input",placeholder:"[Optional] - Any placeholder text you want in the input",type:"[Optional] - As a string, what type of input you are creating - [email | password] - defaults to text",initialValue:"[Optional] - Any initial value for the input"},p={React:c["default"],ReactDOM:m["default"],Icon:o.Icon,Input:o.Input},h=a(661),f={label:"[Optional] - A label for the select",name:"[Optional] - An id for the label and the select, use if you want clicking the label to activate the select",options:"[Required] - Array of objects that contain the values and text for the options, with an optional selected key, {value:string, text:string, selected:bool}"},E={React:c["default"],ReactDOM:m["default"],Select:o.Select},x=[{value:"1",text:"Option One"},{value:"2",text:"Option Two"},{value:"3",text:"Option Three",selected:!0},{value:"4",text:"Option Four"}],b=a(663),N={label:"[Optional] - A label for the textarea",name:"[Optional] - An id for the label and the textarea, use if you want clicking the label to activate the textarea",placeholder:"[Optional] - Any placeholder text you want in the textarea",initialValue:"[Optional] - Any initial value for the textarea"},k={React:c["default"],ReactDOM:m["default"],Textarea:o.Textarea},v=function(){return c["default"].createElement("div",null,c["default"].createElement("h1",{className:"site-headline"},"Forms"),c["default"].createElement("section",{className:"site-section"},c["default"].createElement("h3",{className:"site-subheadline"},"Form Example"),c["default"].createElement("form",{className:"form"},c["default"].createElement(o.Input,{name:"exampleInputEmail1",label:"Email Address",placeholder:"Email",type:"email"}),c["default"].createElement(o.Input,{name:"exampleInputPassword1",label:"Password",placeholder:"Password",type:"password"}),c["default"].createElement(o.Select,{name:"exampleSelect1",label:"Select",options:x}),c["default"].createElement(o.Textarea,{label:"Text Area",name:"exampleTextarea1",placeholder:"Enter some text"}),c["default"].createElement("div",{className:"form__group"},c["default"].createElement("label",{htmlFor:"",className:"u-block"},"Checkboxes"),c["default"].createElement(o.Checkbox,{inline:!0,name:"exampleCheckbox1"},"Checkbox One"),c["default"].createElement(o.Checkbox,{inline:!0,name:"exampleCheckbox2"},"Checkbox Two"),c["default"].createElement(o.Checkbox,{inline:!0,name:"exampleCheckbox3"},"Checkbox Three")),c["default"].createElement("div",{className:"form__group"},c["default"].createElement("label",{htmlFor:"",className:"u-block"},"Radios"),c["default"].createElement("div",{className:"rhinodio rhinodio--inline"},c["default"].createElement("input",{type:"radio",name:"exampleRadio",id:"exampleRadio1"}),c["default"].createElement("label",{htmlFor:"exampleRadio1"},"Radio One")),c["default"].createElement("div",{className:"rhinodio rhinodio--inline"},c["default"].createElement("input",{type:"radio",name:"exampleRadio",id:"exampleRadio2",checked:!0}),c["default"].createElement("label",{htmlFor:"exampleRadio2"},"Radio Two")),c["default"].createElement("div",{className:"rhinodio rhinodio--inline"},c["default"].createElement("input",{type:"radio",name:"exampleRadio",id:"exampleRadio3"}),c["default"].createElement("label",{htmlFor:"exampleRadio3"},"Radio Three"))),c["default"].createElement("div",{className:"form__group"},c["default"].createElement("label",{htmlFor:"",className:"u-block"},"Switcher"),c["default"].createElement("div",{className:"rhinoswitcher"},c["default"].createElement("input",{type:"checkbox",checked:!0,className:"rhinoswitcher__input",id:"exampleSwitcher1"}),c["default"].createElement("label",{className:"rhinoswitcher__label",htmlFor:"exampleSwitcher1"},c["default"].createElement("div",{className:"rhinoswitcher__inner"},c["default"].createElement("div",{className:"rhinoswitcher__on"},c["default"].createElement("svg",{className:"rhinoswitcher__icon icon icon-checkmark"},c["default"].createElement("use",{xlinkHref:"#icon-checkmark"}))),c["default"].createElement("div",{className:"rhinoswitcher__off"},c["default"].createElement("svg",{className:"rhinoswitcher__icon icon icon-close"},c["default"].createElement("use",{xlinkHref:"#icon-close"}))))))),c["default"].createElement("div",{className:"u-text-right"},c["default"].createElement(o.Button,{type:"secondary"},"Submit Form")))),c["default"].createElement("section",{className:"site-section"},c["default"].createElement("h3",{className:"site-subheadline"},"Form Modifiers"),c["default"].createElement("div",{className:"u-m-b-md"},c["default"].createElement("h5",{className:"site-miniheadline"},"Inline Form"),c["default"].createElement("p",{className:"site-copy"},"Add the ",c["default"].createElement("code",null,"form--inline")," modifier to ",c["default"].createElement("code",null,"form"),"."),c["default"].createElement("form",{className:"form form--inline"},c["default"].createElement(o.Input,{name:"exampleEmail2",label:"Email Address",placeholder:"Enter email",type:"email"}),c["default"].createElement(o.Input,{name:"examplePassword2",label:"Password",placeholder:"Password",type:"password"}),c["default"].createElement(o.Button,{type:"secondary"},"Sign In")))),c["default"].createElement("section",{className:"site-section"},c["default"].createElement("h3",{className:"site-subheadline"},"Form Input"),c["default"].createElement("div",{className:"u-m-b-md"},c["default"].createElement("h5",{className:"site-miniheadline"},"Basic Input"),c["default"].createElement("div",{className:"site-copy"},c["default"].createElement("p",null,"Basic form inputs. Use ",c["default"].createElement("code",null,"label, name, placeholder, type and initialValue"),".")),c["default"].createElement(o.Input,{name:"exampleInputEmail31",label:"Email Address",type:"email"}),c["default"].createElement(o.Input,{name:"exampleInputName31",label:"First Name",placeholder:"First Name",type:"email",initialValue:"Ian"}),c["default"].createElement(o.Input,{name:"exampleInputPassword31",placeholder:"Password",type:"password"}),c["default"].createElement("div",{className:"u-m-b-md"},c["default"].createElement("h5",{className:"site-miniheadline"},"Input Add-On"),c["default"].createElement("div",{className:"site-copy"},c["default"].createElement("p",null,"Use the ",c["default"].createElement("code",null,"addon")," property on Inputs with add-ons. Pass the addons as renderable nodes."))),c["default"].createElement(o.Input,{addon:"left",type:"text",placeholder:"Encrypted"},c["default"].createElement(o.Icon,{icon:"lock"})),c["default"].createElement(o.Input,{addon:"right",type:"text"},c["default"].createElement("a",{href:"javascript:void(0)"},"Go For It!")),c["default"].createElement(o.Input,{addon:"both",type:"text",placeholder:"Lorem ipsum dolor sit"},c["default"].createElement("span",null,"Amount $"),c["default"].createElement("span",null,".00")))),c["default"].createElement("section",null,c["default"].createElement("h3",{className:"site-subheadline"},"Playground"),c["default"].createElement(r["default"],{docClass:o.Input,propDescriptionMap:u,codeText:s,scope:p,noRender:!1})),c["default"].createElement("section",{className:"site-section"},c["default"].createElement("div",{className:"u-m-b-md"},c["default"].createElement("h5",{className:"site-miniheadline"},"Text Area"),c["default"].createElement("div",{className:"site-copy"},c["default"].createElement("p",null,"Our textareas."))),c["default"].createElement(o.Textarea,{label:"Text Area",name:"exampleTextarea2",placeholder:"Enter some text"})),c["default"].createElement("section",null,c["default"].createElement("h3",{className:"site-subheadline"},"Playground"),c["default"].createElement(r["default"],{docClass:o.Textarea,propDescriptionMap:N,codeText:b,scope:k,noRender:!1})),c["default"].createElement("section",{className:"site-section"},c["default"].createElement("h3",{className:"site-subheadline"},"Form Checkbox"),c["default"].createElement("div",{className:"u-m-b-md"},c["default"].createElement("h5",{className:"site-miniheadline"},"Rhinobox"),c["default"].createElement("p",{className:"site-copy"},"Our custom checkbox element is called ",c["default"].createElement("code",null,"rhinobox"),". By default, these are stacked."),c["default"].createElement(o.Checkbox,{isChecked:!0,name:"exampleCheckbox11"},"Checkbox One"),c["default"].createElement(o.Checkbox,{name:"exampleCheckbox12"},"Checkbox Two"),c["default"].createElement(o.Checkbox,{name:"exampleCheckbox13"},"Checkbox Three")),c["default"].createElement("div",{className:"u-m-b-md"},c["default"].createElement("h5",{className:"site-miniheadline"},"Inline Rhinobox"),c["default"].createElement("p",{className:"site-copy"},"Add the ",c["default"].createElement("code",null,"inline")," modifier to create inline checkboxes."),c["default"].createElement(o.Checkbox,{inline:!0,name:"exampleCheckbox21"},"Checkbox One"),c["default"].createElement(o.Checkbox,{inline:!0,isChecked:!0,name:"exampleCheckbox22"},"Checkbox Two"),c["default"].createElement(o.Checkbox,{inline:!0,isChecked:!0,name:"exampleCheckbox23"},"Checkbox Three"))),c["default"].createElement("section",{className:"site-section"},c["default"].createElement("h3",{className:"site-subheadline"},"Form Radio"),c["default"].createElement("div",{className:"u-m-b-md"},c["default"].createElement("h5",{className:"site-miniheadline"},"Rhinodio"),c["default"].createElement("p",{className:"site-copy"},"Our custom radio element is called ",c["default"].createElement("code",null,"rhinodio"),". By default, these are stacked."),c["default"].createElement("div",{className:"rhinodio"},c["default"].createElement("input",{type:"radio",name:"exampleRadio1",id:"exampleRadio11"}),c["default"].createElement("label",{htmlFor:"exampleRadio11"},"Radio One")),c["default"].createElement("div",{className:"rhinodio"},c["default"].createElement("input",{type:"radio",name:"exampleRadio1",id:"exampleRadio12",checked:!0}),c["default"].createElement("label",{htmlFor:"exampleRadio12"},"Radio Two")),c["default"].createElement("div",{className:"rhinodio"},c["default"].createElement("input",{type:"radio",name:"exampleRadio1",id:"exampleRadio13"}),c["default"].createElement("label",{htmlFor:"exampleRadio13"},"Radio Three"))),c["default"].createElement("div",{className:"u-m-b-md"},c["default"].createElement("h5",{className:"site-miniheadline"},"Inline Rhinodio"),c["default"].createElement("p",{className:"site-copy"},"Add the ",c["default"].createElement("code",null,"rhinodio--inline")," modifier to create inline radios."),c["default"].createElement("div",{className:"rhinodio rhinodio--inline"},c["default"].createElement("input",{type:"radio",name:"exampleRadio2",id:"exampleRadio21"}),c["default"].createElement("label",{htmlFor:"exampleRadio21"},"Radio One")),c["default"].createElement("div",{className:"rhinodio rhinodio--inline"},c["default"].createElement("input",{type:"radio",name:"exampleRadio2",id:"exampleRadio22"}),c["default"].createElement("label",{htmlFor:"exampleRadio22"},"Radio Two")),c["default"].createElement("div",{className:"rhinodio rhinodio--inline"},c["default"].createElement("input",{type:"radio",name:"exampleRadio2",id:"exampleRadio23",checked:!0}),c["default"].createElement("label",{htmlFor:"exampleRadio23"},"Radio Three")))),c["default"].createElement("section",{className:"site-section"},c["default"].createElement("h3",{className:"site-subheadline"},"Form Select"),c["default"].createElement("div",{className:"u-m-b-md"},c["default"].createElement("h5",{className:"site-miniheadline"},"Rhinoselect"),c["default"].createElement("p",{className:"site-copy"},"Our custom select element is called ",c["default"].createElement("strong",null,"rhinoselect"),". Simply wrap a ",c["default"].createElement("code",null,"select")," element (containing the standard ",c["default"].createElement("code",null,"form__control")," className) in a container and give it the ",c["default"].createElement("code",null,"rhinoselect")," className."),c["default"].createElement(o.Select,{name:"exampleSelect2",label:"Select",options:x}))),c["default"].createElement("section",null,c["default"].createElement("h3",{className:"site-subheadline"},"Playground"),c["default"].createElement(r["default"],{docClass:o.Select,propDescriptionMap:f,codeText:h,scope:E,noRender:!1})),c["default"].createElement("section",{className:"site-section"},c["default"].createElement("h3",{className:"site-subheadline"},"Form Switcher"),c["default"].createElement("div",{className:"u-m-b-md"},c["default"].createElement("h5",{className:"site-miniheadline"},"Rhinoswitcher"),c["default"].createElement("p",{className:"site-copy"},"Our custom radio element is called ",c["default"].createElement("code",null,"rhinoswitcher"),". Disable the switcher using the ",c["default"].createElement("code",null,"rhinoswitcher--disabled")," modifer className."),c["default"].createElement("div",{className:"rhinoswitcher"},c["default"].createElement("input",{type:"checkbox",checked:!0,className:"rhinoswitcher__input",id:"exampleSwitcher2"}),c["default"].createElement("label",{className:"rhinoswitcher__label",htmlFor:"exampleSwitcher2"},c["default"].createElement("div",{className:"rhinoswitcher__inner"},c["default"].createElement("div",{className:"rhinoswitcher__on"},c["default"].createElement("svg",{className:"rhinoswitcher__icon icon icon-checkmark"},c["default"].createElement("use",{xlinkHref:"#icon-checkmark"}))),c["default"].createElement("div",{className:"rhinoswitcher__off"},c["default"].createElement("svg",{className:"rhinoswitcher__icon icon icon-close"},c["default"].createElement("use",{xlinkHref:"#icon-close"})))))),c["default"].createElement("div",{className:"rhinoswitcher rhinoswitcher--disabled"},c["default"].createElement("input",{type:"checkbox",checked:!0,className:"rhinoswitcher__input",id:"exampleSwitcher2"}),c["default"].createElement("label",{className:"rhinoswitcher__label",htmlFor:"exampleSwitcher2"},c["default"].createElement("div",{className:"rhinoswitcher__inner"},c["default"].createElement("div",{className:"rhinoswitcher__on"},c["default"].createElement("svg",{className:"rhinoswitcher__icon icon icon-checkmark"},c["default"].createElement("use",{xlinkHref:"#icon-checkmark"}))),c["default"].createElement("div",{className:"rhinoswitcher__off"},c["default"].createElement("svg",{className:"rhinoswitcher__icon icon icon-close"},c["default"].createElement("use",{xlinkHref:"#icon-close"})))))))))};m["default"].render(c["default"].createElement(v,null),document.getElementById("js-app"))},653:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-inputs">\n        <Input name="exampleInputName31" label="First Name" placeholder="First Name" type="email" value="Ian" />\n        <Input name="exampleInputPassword31" placeholder="Password" type="password" />\n        <Input addon="both" type="text" placeholder="Lorem ipsum dolor sit">\n          <span>Amount $</span>\n          <span>.00</span>\n        </Input>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},661:function(e,t){e.exports="var selectOpts = [\n  { value: '1', text: 'Option One' }, \n  { value: '2', text: 'Option Two' }, \n  { value: '3', text: 'Option Three', selected: true }, \n  { value: '4', text: 'Option Four' },\n];\n\nclass ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className=\"site-example-selects\">\n        <Select name=\"mySelect\" label=\"Choose One\" options={selectOpts} />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n"},663:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-textareas">\n        <Textarea label="Bio" name="biography" rows={5} placeholder="I like pizza!" />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});