(this.webpackJsonpsolution=this.webpackJsonpsolution||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(5),d=a.n(n),l=a(3),o=a(6),i=a(7),c=a(1),r=a(9),s=a(8),h=a(2),m=a(0);var u=Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 30 30",children:Object(m.jsx)("path",{fill:"hsl(300, 100%, 100%)",fillRule:"evenodd",d:"M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"})}),b=Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 30 30",children:Object(m.jsx)("path",{fill:"hsl(0, 0%, 100%)",fillRule:"evenodd",d:"M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"})}),j=function(e){var t=e.darkMode,a=e.toggleMode,n=t?u:b;return Object(m.jsx)("div",{className:"mode-toggle-btn-container",onClick:a,children:n})};var p=function(e){var t=e.darkMode,a=e.toggleMode,n=t?"dark":"light";return Object(m.jsxs)("div",{id:"header",className:n,children:[Object(m.jsx)("h1",{children:"TODO"}),Object(m.jsx)(j,{darkMode:t,toggleMode:a})]})};var v=function(e){var t=e.input,a=e.handleInputChange,n=e.handleSubmit,d=e.darkMode?"tab tab-dark":"tab tab-light";return Object(m.jsxs)("form",{id:"new-item",className:d,onSubmit:n,children:[Object(m.jsx)("div",{className:"checkbox-container"}),Object(m.jsx)("input",{type:"text",value:t,onChange:a,placeholder:"Create a new todo..."})]})};var O=Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-5 -5 20 20",children:Object(m.jsx)("path",{fill:"none",stroke:"#FFF","stroke-width":"2",d:"M1 4.304L3.696 7l6-6"})}),x=Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 20 30",children:Object(m.jsx)("path",{fill:"hsl(252, 4%, 72%)",fillRule:"evenodd",d:"M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"})}),g=function(e){var t=e.id,a=e.name,n=e.completed,d=e.darkMode,l=e.handleCompleted,o=e.handleDeleteItem,i="tab",c="name-container";return i+=d?" tab-dark":" tab-light",c+=n?" completed":" not-completed",Object(m.jsxs)("div",{id:t,className:i+" todo-item",children:[Object(m.jsx)("div",{className:"checkbox-container",children:Object(m.jsxs)("label",{htmlFor:t+"-checkbox",children:[Object(m.jsx)("input",{id:t+"-checkbox",type:"checkbox",checked:n,onChange:l}),Object(m.jsx)("div",{className:"checkmark",children:O})]})}),Object(m.jsx)("label",{htmlFor:t+"-checkbox",className:c,children:a}),Object(m.jsx)("div",{className:"delete-btn",onClick:o,children:x})]})};var k=function(e){var t=e.count,a=e.darkMode,n=e.handleClearCompleted,d="tab";return d+=a?" tab-dark":" tab-light",Object(m.jsxs)("div",{id:"summary-tab",className:d,children:[Object(m.jsxs)("p",{className:"item-count",children:[t," items left"]}),Object(m.jsx)("button",{type:"button",className:"clear-btn",onClick:n,children:"Clear Completed"})]})};var C=function(e){var t=e.sort,a=e.darkMode,n=e.handleSortItem,d="tab";return d+=a?" tab-dark":" tab-light",Object(m.jsxs)("div",{id:"sort-tab",className:d,children:[Object(m.jsx)("input",{type:"radio",name:"sort",id:"all",onChange:n,checked:"all"===t}),Object(m.jsx)("label",{htmlFor:"all",children:"All"}),Object(m.jsx)("input",{type:"radio",name:"sort",id:"active",onChange:n,checked:"active"===t}),Object(m.jsx)("label",{htmlFor:"active",children:"Active"}),Object(m.jsx)("input",{type:"radio",name:"sort",id:"completed",onChange:n,checked:"completed"===t}),Object(m.jsx)("label",{htmlFor:"completed",children:"Completed"})]})};var f=function(e){var t=e.input,a=e.handleInputChange,n=e.sort,d=e.handleSortItem,l=e.handleCompleted,o=e.handleDeleteItem,i=e.handleSubmit,c=e.handleClearCompleted,r=e.todoList,s=e.darkMode,h=s?"dark-tab":"light-tab",u=r.filter((function(e){return!e.completed})).length,b="active"===n?r.filter((function(e){return!e.completed})).map((function(e){return Object(m.jsx)(g,{id:e.id,name:e.name,completed:e.completed,handleCompleted:l,handleDeleteItem:o,darkMode:s},e.id)})):"completed"===n?r.filter((function(e){return e.completed})).map((function(e){return Object(m.jsx)(g,{id:e.id,name:e.name,completed:e.completed,handleCompleted:l,handleDeleteItem:o,darkMode:s},e.id)})):r.map((function(e){return Object(m.jsx)(g,{id:e.id,name:e.name,completed:e.completed,handleCompleted:l,handleDeleteItem:o,darkMode:s},e.id)}));return Object(m.jsxs)("div",{id:"todo-container",className:h,children:[Object(m.jsx)(v,{input:t,handleInputChange:a,handleSubmit:i,darkMode:s}),Object(m.jsxs)("div",{className:"todo-list-container",children:[b,Object(m.jsx)(k,{count:u,handleClearCompleted:c,darkMode:s}),Object(m.jsx)(C,{sort:n,handleSortItem:d,darkMode:s})]})]})},M=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={darkMode:!0,input:"",idCount:"0",sort:"all",todoList:[]},e.toggleMode=e.toggleMode.bind(Object(c.a)(e)),e.handleInputChange=e.handleInputChange.bind(Object(c.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(c.a)(e)),e.handleCompleted=e.handleCompleted.bind(Object(c.a)(e)),e.handleDeleteItem=e.handleDeleteItem.bind(Object(c.a)(e)),e.handleClearCompleted=e.handleClearCompleted.bind(Object(c.a)(e)),e.handleSortItem=e.handleSortItem.bind(Object(c.a)(e)),e}return Object(i.a)(a,[{key:"toggleMode",value:function(){this.setState((function(e){return{darkMode:!e.darkMode}}))}},{key:"handleInputChange",value:function(e){this.setState({input:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState((function(t){var a=t.todoList,n=String(Number(t.idCount)+1);return{input:"",idCount:n,todoList:a.concat({id:n,name:e.target.lastChild.value,completed:!1})}}))}},{key:"handleCompleted",value:function(e){var t=e.target.parentElement.parentElement.parentElement.id;this.setState((function(e){return{todoList:Object(l.a)(e.todoList).map((function(e){return e.id===t&&(e.completed=!e.completed),e}))}}))}},{key:"handleDeleteItem",value:function(e){var t=e.currentTarget.parentElement.id;this.setState((function(e){return{todoList:Object(l.a)(e.todoList).filter((function(e){return e.id!==t}))}}))}},{key:"handleClearCompleted",value:function(){this.setState((function(e){return{todoList:Object(l.a)(e.todoList).filter((function(e){return!e.completed}))}}))}},{key:"handleSortItem",value:function(e){this.setState({sort:e.target.id})}},{key:"render",value:function(){var e=this.state.darkMode?"dark":"light";return Object(m.jsxs)("div",{id:"app-container",className:e,children:[Object(m.jsx)("div",{id:"cover-img",className:e,children:Object(m.jsx)(p,{darkMode:this.state.darkMode,toggleMode:this.toggleMode})}),Object(m.jsx)(f,{input:this.state.input,sort:this.state.sort,handleInputChange:this.handleInputChange,handleSubmit:this.handleSubmit,handleCompleted:this.handleCompleted,handleDeleteItem:this.handleDeleteItem,handleClearCompleted:this.handleClearCompleted,handleSortItem:this.handleSortItem,todoList:this.state.todoList,darkMode:this.state.darkMode})]})}}]),a}(h.Component);a(15);d.a.render(Object(m.jsx)(M,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.8eed4e31.chunk.js.map