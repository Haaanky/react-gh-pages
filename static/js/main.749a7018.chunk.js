(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/Henryiii.3ce87bb4.jpg"},24:function(e,t,a){e.exports=a(39)},29:function(e,t,a){},30:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),i=(a(29),a(2)),o=a(3),s=a(5),u=a(4),h=a(6),m=a(12),p=(a(30),a(11)),d=a(10),b=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"Nav-header App-header"},r.a.createElement("h1",null,"Checkpoint 2"),r.a.createElement("div",{className:"Nav-div"},r.a.createElement("nav",{className:"Nav-menu"},r.a.createElement("ul",{className:"Nav-list"},r.a.createElement("li",null,r.a.createElement(d.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/Person/"+this.props.name},"Person"))))))}}]),t}(n.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("input",{className:this.props.className,type:this.props.type,value:this.props.value,name:this.props.name,onChange:this.props.changeHandler})}}]),t}(n.Component),j=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{className:this.props.Button,onClick:this.props.clickHandler},"Jag \xe4r en knapp")}}]),t}(n.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Main-page"},r.a.createElement("h2",null,"Main page"),r.a.createElement("div",null,r.a.createElement(f,{type:"text",name:"TextInput",value:this.props.value,changeHandler:this.props.changeHandlerText}),r.a.createElement(j,{className:"Button",clickHandler:this.props.clickHandler})))}}]),t}(n.Component),E=a(23),y=a.n(E),g=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Page"},r.a.createElement("h2",null,this.props.match.params.text),r.a.createElement("a",{href:"https://www.totallytimelines.com/henry-iii-1207-1272/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:y.a,alt:"henry the 3rd of England",className:"App-logo"})),r.a.createElement(d.b,{to:"/"},"Back"),r.a.createElement("p",null,"Henry III (1 October 1207 \u2013 16 November 1272), also known as Henry of Winchester, was King of England, Lord of Ireland, and Duke of Aquitaine from 1216 until his death. The son of King John and Isabella of Angoul\xeame, Henry assumed the throne when he was only nine in the middle of the First Barons' War. Cardinal Guala declared the war against the rebel barons to be a religious crusade and Henry's forces, led by William Marshal, defeated the rebels at the battles of Lincoln and Sandwich in 1217. Henry promised to abide by the Great Charter of 1225, which limited royal power and protected the rights of the major barons. His early rule was dominated first by Hubert de Burgh and then Peter des Roches, who re-established royal authority after the war. In 1230, the King attempted to reconquer the provinces of France that had once belonged to his father, but the invasion was a debacle. A revolt led by William Marshal's son, Richard, broke out in 1232, ending in a peace settlement negotiated by the Church."))}}]),t}(n.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"BiggestH"},"Error: 404"),r.a.createElement("h1",{className:"BiggestH"},"Page not found"))}}]),t}(n.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"Academy 2019"))}}]),t}(n.Component),H=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={value:"Henry the III of England"},a.changeHandlerText=a.changeHandlerText.bind(Object(m.a)(Object(m.a)(a))),a.clickHandler=a.clickHandler.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"changeHandlerText",value:function(e){this.setState({value:e.target.value})}},{key:"clickHandler",value:function(e){alert("hej")}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{name:this.state.value}),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(O,Object.assign({},t,{value:e.state.value,changeHandlerText:e.changeHandlerText,clickHandler:e.clickHandler}))}}),r.a.createElement(p.a,{exact:!0,path:"/:text",component:O}),r.a.createElement(p.a,{path:"/Person/:text",component:g}),r.a.createElement(p.a,{component:v})),r.a.createElement(k,null))}}]),t}(n.Component);l.a.render(r.a.createElement(d.a,null,r.a.createElement(H,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.749a7018.chunk.js.map