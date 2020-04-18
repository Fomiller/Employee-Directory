(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{30:function(e){e.exports=JSON.parse('[{"id":1,"name":"Saif Mcdaniel ","role":"Fry Cook","age":23,"gender":"Male"},{"id":2,"name":"Usamah Mclean","role":"Restaurant Owner","age":36,"gender":"Male"},{"id":3,"name":"Etta Beaumont","role":"Cashier","age":21,"gender":"Female"},{"id":4,"name":"Catherine Frost","role":"Cashier","age":19,"gender":"Female"},{"id":5,"name":"Shyam Joyner","role":"Server","age":19,"gender":"Male"},{"id":6,"name":"Caspian Waller","role":"Server","age":25,"gender":"Male"},{"id":7,"name":"Ibrahim Timms","role":"Janitor","age":48,"gender":"Male"},{"id":8,"name":"Abigail Mckenna","role":"Line Cook","age":22,"gender":"Female"},{"id":9,"name":"Latoya Needham","role":"Manager","age":32,"gender":"Female"},{"id":10,"name":"Millie Stubbs","role":"Assistant Manager","age":28,"gender":"Female"},{"id":11,"name":"Ammar Suarez","role":"Busser","age":17,"gender":"Male"},{"id":12,"name":"Ciara Hardy","role":"Busser","age":16,"gender":"Female"}]')},45:function(e,a,t){e.exports=t(54)},50:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),o=t.n(l),i=(t(50),t(36)),c=t(37),s=t(40),m=t(39),u=t(96),g=t(101),d=t(105),h=t(104),p=t(99),y=t(102),E=t(103),f=t(55),v=Object(u.a)({tableCell:{fontWeight:"bold"},table:{minWidth:300,maxWidth:1080}});function b(e){var a=v();return r.a.createElement(p.a,{className:a.table,component:f.a},r.a.createElement(g.a,{className:a.table,"aria-label":"simple table"},r.a.createElement(y.a,null,r.a.createElement(E.a,null,r.a.createElement(h.a,{className:a.tableCell},"Name"),r.a.createElement(h.a,{className:a.tableCell,align:"right"},"Role"),r.a.createElement(h.a,{className:a.tableCell,align:"right"},"Age"),r.a.createElement(h.a,{className:a.tableCell,align:"right"},"Gender"))),r.a.createElement(d.a,null,e.employees.map((function(e){return r.a.createElement(E.a,{key:e.name},r.a.createElement(h.a,{component:"th",scope:"row"},e.name),r.a.createElement(h.a,{align:"right"},e.role),r.a.createElement(h.a,{align:"right"},e.age),r.a.createElement(h.a,{align:"right"},e.gender))})))))}var C=t(106),S=t(107);function w(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,null),r.a.createElement(S.a,Object.assign({maxWidth:"sm"},e)))}var B=t(108),N=t(109),k=t(110),M=Object(u.a)((function(e){return{root:{flexGrow:1,marginBottom:e.spacing(5)},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function x(){var e=M();return r.a.createElement("div",{className:e.root},r.a.createElement(B.a,{position:"static"},r.a.createElement(N.a,null,r.a.createElement(w,null,r.a.createElement(k.a,{variant:"h6",className:e.title},"Employee Directory")))))}var j=t(112);function F(e){return r.a.createElement("form",{noValidate:!0,autoComplete:"off",onSubmit:e.handleFormSubmit},r.a.createElement(j.a,{id:"searchField",placeholder:"Search Employees",value:e.search,onChange:e.handleChange,fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0}}))}var O=t(30),R=t(111),W=t(113),L=Object(u.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));function A(e){var a=L();return r.a.createElement("div",{className:a.root},r.a.createElement(R.a,{container:!0,spacing:3},r.a.createElement(R.a,{justify:"center",item:!0,xs:6},r.a.createElement(W.a,{variant:"contained",color:"primary",onClick:e.sortByName},"Sort By Name alphabetically")),r.a.createElement(R.a,{justify:"center",item:!0,xs:6},r.a.createElement(W.a,{variant:"contained",color:"primary",onClick:e.sortByRole},"Sort By Role alphabetically")),r.a.createElement(R.a,{justify:"center",item:!0,xs:12},r.a.createElement(W.a,{variant:"contained",color:"primary",onClick:e.resetEmployees},"Reset Employees"))))}var J=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={employees:O,search:""},e.sortByName=function(){var a=e.state.employees.sort((function(e,a){var t=e.name.toLowerCase(),n=a.name.toLowerCase();return t<n?-1:t>n?1:0}));e.setState(a)},e.sortByRole=function(){var a=e.state.employees.sort((function(e,a){var t=e.role.toLowerCase(),n=a.role.toLowerCase();return t<n?-1:t>n?1:0}));e.setState(a)},e.resetEmployees=function(){e.setState({employees:O}),e.setState({search:""})},e.handleChange=function(a){e.setState({search:a.target.value});var t=e.state.employees.filter((function(a){return a.name.includes(e.state.search)||a.role.includes(e.state.search)}));e.setState({employees:t}),""===a.target.value&&e.setState({employees:O})},e}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(x,null),r.a.createElement(w,null,r.a.createElement(F,{handleChange:this.handleChange,search:this.state.search}),r.a.createElement(A,{sortByName:this.sortByName,sortByRole:this.sortByRole,resetEmployees:this.resetEmployees}),r.a.createElement(b,{employees:this.state.employees})))}}]),t}(r.a.Component);var G=function(){return r.a.createElement(J,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.0904ea73.chunk.js.map