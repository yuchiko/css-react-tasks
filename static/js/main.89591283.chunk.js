(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{269:function(e,a,t){e.exports={header:"style_header__14a2R",back_link:"style_back_link__3eNy0"}},374:function(e,a,t){e.exports={radio_btn:"style_radio_btn__1_vtH"}},409:function(e,a,t){e.exports=t(711)},414:function(e,a,t){},416:function(e,a,t){},417:function(e,a,t){},711:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(70),o=t.n(l),c=(t(414),t(415),t(416),t(417),t(366)),i=t(201),s=t(367),m=t(368),u=t(403),E=t(369),p=t(111),d=t(404),h=t(307),b=t(308),g=t(199),S=t(57),k=t(304),C=t(265),w=t(266),y=t(267),v=t(382),f=[{key:"planting",text:"Planting",value:"planting"},{key:"preparation",text:"Preparation",value:"preparation"},{key:"transplanting",text:"Transplanting",value:"transplanting"}],F=[{key:"apples",text:"Apples",value:"apples"},{key:"pears",text:"Pears",value:"pears"},{key:"stone_fruits",text:"Stone fruits",value:"stone_fruits"},{key:"table_grape",text:"Table grape",value:"table_grape"},{key:"citrus",text:"Citrus",value:"citrus"}],N=t(38),_=t(108),R=t(269),q=t.n(R),P=function(e){var a=e.onFormSubmit;return r.a.createElement("div",{className:q.a.header},r.a.createElement("div",{className:"d_flex ai_center"},r.a.createElement("a",{href:"#back",className:q.a.back_link},r.a.createElement(N.a,{name:"angle left"})),r.a.createElement(k.a,{as:"h2",className:"atomic m_0"},"Add Block")),r.a.createElement(_.a,{secondary:!0,size:"large",floated:"right",onClick:a},"Add"))},x=t(374),O=t.n(x),z=function(e){var a=e.value,t=e.onChange,n=e.name,l=e.data,o=function(e){var a=e.target;t({},{name:n,value:a.name})};return r.a.createElement("div",null,l.map(function(e){return r.a.createElement(_.a,{key:e.key,basic:!0,type:"button",active:e.value===a,name:e.value,onClick:o,className:O.a.radio_btn},e.text)}))},j=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(u.a)(this,Object(E.a)(a).call(this,e))).state={blockName:"",blockSize:0,crop:"",date:"",noRows:"",rowSpacing:"",treeSpacing:"",actualTrees:0,age:0,blockNameError:!1,blockSizeError:!1,cropError:!1,noRowsError:!1,rowSpacingError:!1,treeSpacingError:!1},t.onFormSubmit=t.onFormSubmit.bind(Object(p.a)(t)),t.handleCalendarChange=t.handleCalendarChange.bind(Object(p.a)(t)),t.onFieldChange=t.onFieldChange.bind(Object(p.a)(t)),t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"onFieldChange",value:function(e,a){var t=e.target,n=a||t,r=n.name,l=n.value;this.setState(Object(i.a)({},r,l))}},{key:"handleCalendarChange",value:function(e,a){var t=a.value;this.setState({date:t})}},{key:"onFormSubmit",value:function(){var e,a=this.state,t=a.blockName,n=a.blockSize,r=a.crop,l=a.noRows,o=a.rowSpacing,i=a.treeSpacing;this.setState({blockNameError:!1,blockSizeError:!1,cropError:!1,noRowsError:!1,rowSpacingError:!1,treeSpacingError:!1}),t||this.setState({blockNameError:{content:"Please enter your block name"}}),n?(e=+n,!isNaN(e)&&Number(e)>0||this.setState({blockSizeError:{content:"Please enter positive float"}})):this.setState({blockSizeError:{content:"Please enter your block size"}}),r||this.setState({cropError:!0}),l||this.setState({noRowsError:{content:"Please enter your no.rows"}}),o||this.setState({rowSpacingError:{content:"Please enter your row spacing"}}),i||this.setState({treeSpacingError:{content:"Please enter your tree spacing"}}),console.log(Object(c.a)({},this.state))}},{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(P,{onFormSubmit:this.onFormSubmit}),r.a.createElement(b.a,null,r.a.createElement(g.a,null,r.a.createElement(g.a.Row,{columns:2},r.a.createElement(g.a.Column,null,r.a.createElement(b.a.Field,{required:!0},r.a.createElement(b.a.Input,{label:"Block name",name:"blockName",required:!0,onChange:this.onFieldChange,error:this.state.blockNameError}))),r.a.createElement(g.a.Column,null,r.a.createElement(b.a.Field,{required:!0},r.a.createElement(b.a.Input,{label:"Block's size",name:"blockSize",type:"number",required:!0,onChange:this.onFieldChange,error:this.state.blockSizeError})))),r.a.createElement(g.a.Row,null,r.a.createElement(g.a.Column,null,r.a.createElement(b.a.Field,{required:!0,className:"label--left"},r.a.createElement("label",null,"Select your crop"),r.a.createElement(z,{onChange:this.onFieldChange,name:"crop",value:this.state.crop,data:F}),this.state.cropError?r.a.createElement(S.a,{pointing:!0,prompt:!0},"Please select your crop"):""))),r.a.createElement(k.a,{as:"h3",className:"atomic fw_400"},"Block\u2019s structure"),r.a.createElement(g.a.Row,{columns:3},r.a.createElement(g.a.Column,null,r.a.createElement(b.a.Field,{required:!0},r.a.createElement(b.a.Input,{label:"No. Rows",name:"noRows",required:!0,onChange:this.onFieldChange,error:this.state.noRowsError}))),r.a.createElement(g.a.Column,null,r.a.createElement(b.a.Field,{className:this.state.rowSpacingError?"error":"",required:!0},r.a.createElement("label",null,"Row spacing"),r.a.createElement(C.a,{name:"rowSpacing",onChange:this.onFieldChange,error:this.state.rowSpacingError,type:"number",placeholder:"in meters",label:"m",labelPosition:"right"}),this.state.rowSpacingError?r.a.createElement(S.a,{pointing:!0,prompt:!0},this.state.rowSpacingError.content):"")),r.a.createElement(g.a.Column,null,r.a.createElement(b.a.Field,{className:this.state.treeSpacingError?"error":"",required:!0},r.a.createElement("label",null,"Tree spacing"),r.a.createElement(C.a,{name:"treeSpacing",onChange:this.onFieldChange,error:this.state.treeSpacingError,type:"number",placeholder:"in meters",label:"m",labelPosition:"right"}),this.state.treeSpacingError?r.a.createElement(S.a,{pointing:!0,prompt:!0},this.state.treeSpacingError.content):""))),r.a.createElement(g.a.Row,{columns:"equal"},r.a.createElement(g.a.Column,null,r.a.createElement(b.a.Field,{label:"Trees/Ha",control:"input",readOnly:!0})),r.a.createElement(g.a.Column,null,r.a.createElement(b.a.Field,{label:"Trees/Vines",control:"input",readOnly:!0})),r.a.createElement(g.a.Column,{only:"computer"},r.a.createElement(b.a.Field,{required:!0},r.a.createElement("label",null,"Actual No. of Trees"),r.a.createElement("input",null)))),r.a.createElement(g.a.Row,{only:"mobile tablet"},r.a.createElement(g.a.Column,{width:"8"},r.a.createElement(b.a.Field,{required:!0},r.a.createElement("label",null,"Actual No. of Trees"),r.a.createElement("input",null)))),r.a.createElement(g.a.Row,{columns:"equal"},r.a.createElement(g.a.Column,null,r.a.createElement(b.a.Field,null,r.a.createElement("label",null,"Date of Planting"),r.a.createElement(v.DateInput,{name:"date",placeholder:"DD  /  MM  /  YYYY",dateFormat:"DD  /  MM  /  YYYY",value:this.state.date,icon:"calendar outline",iconPosition:"right",onChange:this.handleCalendarChange}))),r.a.createElement(g.a.Column,null,r.a.createElement(b.a.Field,{label:"Age",readOnly:!0,control:"input",type:"number",value:this.state.age})),r.a.createElement(g.a.Column,{only:"computer"},r.a.createElement(b.a.Field,{required:!0},r.a.createElement("label",null,"Farm Status"),r.a.createElement(w.a,{value:this.state.status,placeholder:"Select your farm status",options:f})))),r.a.createElement(g.a.Row,{only:"mobile tablet"},r.a.createElement(g.a.Column,{width:"8"},r.a.createElement(b.a.Field,{required:!0},r.a.createElement("label",null,"Farm Status"),r.a.createElement(w.a,{placeholder:"Select your farm status",options:f})))),r.a.createElement(g.a.Row,null,r.a.createElement(g.a.Column,null,r.a.createElement(b.a.Field,null,r.a.createElement("label",null,"Commets & Notes"),r.a.createElement(y.a,null)))))))}}]),a}(r.a.Component),T=function(){return r.a.createElement(j,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[409,1,2]]]);
//# sourceMappingURL=main.89591283.chunk.js.map