(this["webpackJsonpForms-assignment"]=this["webpackJsonpForms-assignment"]||[]).push([[0],{16:function(e,a,n){e.exports=n(28)},21:function(e,a,n){},22:function(e,a,n){},23:function(e,a,n){},24:function(e,a,n){},27:function(e,a,n){},28:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),i=n(2),r=n.n(i),o=(n(21),n(15)),u=n(6),c=n(1),s=n(7),d=n(8),m=n(10),p=n(9),v=(n(22),function(e){return l.a.createElement("button",{className:"Button "+e.btnType,disabled:e.disabled,onClick:e.clicked},e.children)}),g=(n(23),n(24),n(14)),h=function(e){var a=null,n=["InputElement"];switch(e.inValid&&e.touched&&n.push("Invalid"),e.elementtype){case"input":a=l.a.createElement("input",Object.assign({className:n.join(" ")},e.elementconfig,{value:e.value,onChange:e.changed,onBlur:e.blur}));break;case"textarea":a=l.a.createElement("textarea",Object.assign({className:n.join(" ")},e.elementconfig,{value:e.value,onChange:e.changed,onBlur:e.blur}));break;case"select":a=l.a.createElement("select",{className:n.join(" "),value:e.value,onChange:e.changed,multiple:e.multiple,onBlur:e.blur},l.a.createElement("option",{value:"",disabled:!0},"Select an option"),e.elementconfig.options.map((function(e,a){return l.a.createElement("option",{key:a,value:e.value},e.displayValue)})));break;case"radio":a=l.a.createElement(t.Fragment,null,e.elementconfig.options.map((function(a,n){return l.a.createElement(t.Fragment,{key:n},l.a.createElement("input",{type:"radio",value:a.value,name:e.elementconfig.name,onBlur:e.blur,onChange:e.changed}),l.a.createElement("label",null,a.displayValue))})));break;case"checkbox":a=l.a.createElement(t.Fragment,null,e.elementconfig.options.map((function(a,n){return l.a.createElement(t.Fragment,{key:n},l.a.createElement("input",{type:"checkbox",value:a.value,onBlur:e.blur,onChange:e.changed}),l.a.createElement("label",null,a.displayValue))})));break;case"SearchableSelect":a=l.a.createElement(g.a,{options:e.elementconfig.options,onBlur:e.blur,onChange:e.changed,className:e.elementconfig.className});break;default:a=l.a.createElement("input",Object.assign({className:n.join(" ")},e.elementconfig,{value:e.value}))}return l.a.createElement("div",{className:"Input",style:{display:e.display?"none":"block"}},l.a.createElement("label",{className:"Label"},e.label),a)},f={name:{label:"Name",elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0,valid:!1,pattern:"^[a-zA-Z ]*$"}},email:{label:"Email",elementType:"input",elementConfig:{type:"email",placeholder:"Your Email"},value:"",validation:{required:!0,valid:!1,pattern:"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$"},touched:!1},PhoneNumber:{label:"Phone Number",elementType:"input",elementConfig:{type:"number",placeholder:"Your Mobile Number"},value:"",validation:{required:!0,valid:!1},touched:!1},country:{label:"Country",elementType:"input",elementConfig:{type:"text",placeholder:"Your Country"},value:"",validation:{required:!0,valid:!1},touched:!1},gender:{label:"Gender",elementType:"radio",elementConfig:{name:"gender",options:[{value:"Male",displayValue:"Male"},{value:"Female",displayValue:"Female"},{value:"Other",displayValue:"Other"}]},value:"",validation:{required:!0,valid:!1}},card:{label:"Select your accounts",elementType:"checkbox",elementConfig:{type:"checkbox",options:[{value:"Credit card",displayValue:"Credit card"},{value:"Debit Card",displayValue:"Debit Card"},{value:"Net banking",displayValue:"Net banking"}]},value:"",validation:{required:!0,valid:!1}},city:{label:"Select City",elementType:"select",elementConfig:{options:[{value:"Panipat",displayValue:"Panipat"},{value:"Karnal",displayValue:"Karnal"},{value:"Sonipat",displayValue:"Sonipat"}]},value:"",validation:{required:!0,valid:!0}},location:{label:"Select Loction",elementType:"select",elementConfig:{options:[{value:"Panipat",displayValue:"Panipat"},{value:"Karnal",displayValue:"Karnal"},{value:"Sonipat",displayValue:"Sonipat"}]},value:[],validation:{required:!0,valid:!0}},addAddress:{elementType:"checkbox",isChecked:!1,elementConfig:{show:["currentAddress","permanentAddress","ispermanentAddress"],options:[{value:"yes",displayValue:"Do you want to add address"}]},value:"",validation:{required:!0,valid:!0}},currentAddress:{label:"Current address",elementType:"textarea",display:!0,elementConfig:{row:"4",column:"50",placeholder:"Enter address"},value:"",validation:{required:!0,valid:!0}},ispermanentAddress:{elementType:"checkbox",display:!0,isChecked:!0,elementConfig:{show:["permanentAddress"],options:[{value:"yes",displayValue:"Is your current address same as permanent address"}]},value:"",validation:{required:!0,valid:!0}},permanentAddress:{label:"permanent address",elementType:"textarea",display:!0,elementConfig:{row:"4",column:"50",placeholder:"Enter address"},value:"",validation:{required:!0,valid:!0}}},y=function(e,a){var n=!0;return a.required&&(n=""!==e.trim()&&n),a.minLength&&(n=e.length>=a.minLength&&n),a.maxLength&&(n=e.length<=a.maxLength&&n),a.pattern&&(n=null!==e.match(a.pattern)&&n),n},b=function(e){Object(m.a)(n,e);var a=Object(p.a)(n);function n(){var e;Object(s.a)(this,n);for(var t=arguments.length,l=new Array(t),i=0;i<t;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).state={sampleForm:Object(c.a)({},f)},e.inputChangedHandler=function(a,n){var t=Object(c.a)({},e.state.sampleForm),l=Object(c.a)({},t[n]);if("addAddress"===n||"ispermanentAddress"===n){var i,r=Object(u.a)(l.elementConfig.show);try{for(r.s();!(i=r.n()).done;){var s=i.value,d=Object(c.a)({},e.state.sampleForm),m=Object(c.a)({},d[s]);m.display=l.isChecked,d[s]=m,t[s]=m}}catch(v){r.e(v)}finally{r.f()}l.isChecked=!l.isChecked}if("location"===n){console.log(a.target.value);var p=Object(o.a)(l.value);p.push(a.target.value),l.value=p,console.log(l.value)}else console.log("Data"),l.value=a.target.value;l.validation.valid=y(a.target.value,l.validation),l.touched=!0,t[n]=l,e.setState({sampleForm:t})},e.inputBlurHandler=function(a,n){console.log(e.state.sampleForm[n]),"location"===n&&console.log(e.state.sampleForm[n].value),console.log(a.target.value)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,a=[];for(var n in this.state.sampleForm)a.push({id:n,config:this.state.sampleForm[n]});var t=l.a.createElement("form",null,a.map((function(a){return l.a.createElement(h,{key:a.id,elementtype:a.config.elementType,label:a.config.label,elementconfig:a.config.elementConfig,value:a.config.value,inValid:!a.config.validation.valid,touched:a.config.touched,changed:function(n){return e.inputChangedHandler(n,a.id)},blur:function(n){return e.inputBlurHandler(n,a.id)},display:a.config.display,multiple:a.config.multiple})})),l.a.createElement(v,{btnType:"Success"},"SUBMIT"));return l.a.createElement("div",{className:"ContactData"},l.a.createElement("h4",null,"Enter your Contact Data"),t)}}]),n}(t.Component),C=(n(27),{worldRegions:{label:"World Regions",elementType:"select",elementConfig:{placeholder:"data",options:[{value:"Select One",displayValue:"Select One",disabled:"disabled"},{value:"asia",displayValue:"Asia"},{value:"africa",displayValue:"Africa"},{value:"americas",displayValue:"Americas"},{value:"europe",displayValue:"Europe"},{value:"oceania",displayValue:"Oceania"}]},value:"",validation:{required:!0,valid:!0}},countries:{label:"countries   ",elementType:"SearchableSelect",elementConfig:{options:[{value:"",label:"Select One"}]},value:"",validation:{required:!0,valid:!0}}}),E=function(e){Object(m.a)(n,e);var a=Object(p.a)(n);function n(){var e;Object(s.a)(this,n);for(var t=arguments.length,l=new Array(t),i=0;i<t;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).state={sampleForm:Object(c.a)({},C)},e.getCountriesHandler=function(a){fetch("https://restcountries.eu/rest/v2/region/".concat(a),{method:"GET"}).then((function(e){return e.json()})).then((function(a){var n,t=[],l=Object(u.a)(a);try{for(l.s();!(n=l.n()).done;){var i=n.value.name;t.push({value:i,label:i})}}catch(d){l.e(d)}finally{l.f()}var r=Object(c.a)({},e.state.sampleForm),o=Object(c.a)({},r.countries),s=[].concat(t);o.elementConfig.options=s,r.countries=o,e.setState({sampleForm:r})}))},e.inputChangedHandler=function(a,n){console.log(a);var t=Object(c.a)({},e.state.sampleForm),l=Object(c.a)({},t[n]);"worldRegions"===n&&e.getCountriesHandler(a.target.value),l.value="countries"===n?a.value:a.target.value,l.validation.valid=y("countries"===n?a.value:a.target.value,l.validation),l.touched=!0,t[n]=l,e.setState({sampleForm:t})},e.inputBlurHandler=function(e){console.log(e)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,a=[];for(var n in this.state.sampleForm)a.push({id:n,config:this.state.sampleForm[n]});var t=l.a.createElement("form",null,a.map((function(a){return l.a.createElement(h,{key:a.id,elementtype:a.config.elementType,label:a.config.label,elementconfig:a.config.elementConfig,value:a.config.value,inValid:!a.config.validation.valid,touched:a.config.touched,changed:function(n){return e.inputChangedHandler(n,a.id)},blur:function(n){return e.inputBlurHandler(n,a.id)},display:a.config.display})})),l.a.createElement(v,{btnType:"Success"},"SUBMIT"));return l.a.createElement("div",{className:"BonusAssignment"},l.a.createElement("h4",null,"Enter Data"),t)}}]),n}(t.Component);var k=function(){return l.a.createElement("div",null,l.a.createElement(b,null),l.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.d7bbc419.chunk.js.map