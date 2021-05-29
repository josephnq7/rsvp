(this.webpackJsonprsvp=this.webpackJsonprsvp||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var i=n(1),s=n.n(i),r=n(5),u=n.n(r),d=(n(15),n(8)),c=n(3),o=n(2),a=n(6),l=n(7),g=n(10),j=n(9),m=(n(16),n(0)),b=function(t){return Object(m.jsxs)("form",{onSubmit:t.newGuestSubmitHandler,children:[Object(m.jsx)("input",{type:"text",onChange:t.handleNameInput,value:t.pendingGuest,placeholder:"Invite Someone"}),Object(m.jsx)("button",{type:"submit",name:"submit",value:"submit",children:"Submit"})]})},h=function(t){return Object(m.jsxs)("header",{children:[Object(m.jsx)("h1",{children:"RSVP"}),Object(m.jsx)("p",{children:"A Treehouse App"}),Object(m.jsx)(b,{newGuestSubmitHandler:t.newGuestSubmitHandler,pendingGuest:t.pendingGuest,handleNameInput:t.handleNameInput})]})},f=function(t){return t.isEditting?Object(m.jsx)("input",{type:"text",value:t.children,onChange:t.handleNameEdits}):Object(m.jsx)("span",{children:t.children})},p=function(t){return Object(m.jsxs)("li",{children:[Object(m.jsx)(f,{isEditting:t.isEditting,handleNameEdits:function(e){return t.setName(e.target.value)},children:t.name}),Object(m.jsxs)("label",{children:[Object(m.jsx)("input",{type:"checkbox",checked:t.isConfirmed,onChange:t.handleConfirmation})," Confirmed"]}),Object(m.jsx)("button",{onClick:t.handleToggleEditting,children:t.isEditting?"save":"edit"}),Object(m.jsx)("button",{onClick:t.handleRemove,children:"remove"})]})},O=function(t){return t.name?Object(m.jsx)("li",{className:"pending",children:Object(m.jsx)("span",{children:t.name})}):null},x=function(t){return Object(m.jsxs)("ul",{children:[Object(m.jsx)(O,{name:t.pendingGuest}),t.guests.filter((function(e){return!t.isFiltered||e.isConfirmed})).map((function(e,n){return Object(m.jsx)(p,{name:e.name,isConfirmed:e.isConfirmed,isEditting:e.isEditting,handleConfirmation:function(){return t.toggleConfirmationAt(e.id)},handleToggleEditting:function(){return t.toggleEdittingAt(e.id)},setName:function(n){return t.setNameAt(n,e.id)},handleRemove:function(){return t.removeGuestAt(e.id)}},n)}))]})},v=function(t){return Object(m.jsx)("table",{className:"counter",children:Object(m.jsxs)("tbody",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Attending:"}),Object(m.jsx)("td",{children:t.numberAttending})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Unconfirmed:"}),Object(m.jsx)("td",{children:t.numberUnconfirmed})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Total:"}),Object(m.jsx)("td",{children:t.totalInvited})]})]})})},A=function(t){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Invitees"}),Object(m.jsxs)("label",{children:[Object(m.jsx)("input",{type:"checkbox",onChange:t.toggleFilter,checked:t.isFiltered})," Hide those who haven't responded"]})]})},G=function(t){return Object(m.jsxs)("div",{className:"main",children:[Object(m.jsx)(A,{toggleFilter:t.toggleFilter,isFiltered:t.isFiltered}),Object(m.jsx)(v,{totalInvited:t.totalInvited,numberAttending:t.numberAttending,numberUnconfirmed:t.numberUnconfirmed}),Object(m.jsx)(x,{guests:t.guests,toggleConfirmationAt:t.toggleConfirmationAt,toggleEdittingAt:t.toggleEdittingAt,setNameAt:t.setNameAt,isFiltered:t.isFiltered,removeGuestAt:t.removeGuestAt,pendingGuest:t.pendingGuest})]})},C=function(t){Object(g.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(a.a)(this,n);for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={isFiltered:!1,pendingGuest:"",guests:[]},t.lastGuestId=0,t.newGuestId=function(){var e=t.lastGuestId;return t.lastGuestId+=1,e},t.toggleGuestPropertyAt=function(e,n){t.setState({guests:t.state.guests.map((function(t){return n===t.id?Object(o.a)(Object(o.a)({},t),{},Object(c.a)({},e,!t[e])):t}))})},t.toggleConfirmationAt=function(e){return t.toggleGuestPropertyAt("isConfirmed",e)},t.removeGuestAt=function(e){t.setState({guests:t.state.guests.filter((function(t){return e!==t.id}))})},t.toggleEdittingAt=function(e){return t.toggleGuestPropertyAt("isEditting",e)},t.setNameAt=function(e,n){t.setState({guests:t.state.guests.map((function(t){return t.id===n?Object(o.a)(Object(o.a)({},t),{},{name:e}):t}))})},t.toggleFilter=function(){return t.setState({isFiltered:!t.state.isFiltered})},t.handleNameInput=function(e){return t.setState({pendingGuest:e.target.value})},t.newGuestSubmitHandler=function(e){e.preventDefault();var n=t.newGuestId();t.setState({guests:[{name:t.state.pendingGuest,isConfirmed:!1,isEditting:!1,id:n}].concat(Object(d.a)(t.state.guests)),pendingGuest:""})},t.getTotalInvited=function(){return t.state.guests.length},t.getAttendingGuests=function(){return t.state.guests.reduce((function(t,e){return e.isConfirmed?t+1:t}),0)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.getTotalInvited(),e=this.getAttendingGuests(),n=t-e;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(h,{newGuestSubmitHandler:this.newGuestSubmitHandler,pendingGuest:this.state.pendingGuest,handleNameInput:this.handleNameInput}),Object(m.jsx)(G,{removeGuestAt:this.removeGuestAt,pendingGuest:this.state.pendingGuest,isFiltered:this.state.isFiltered,setNameAt:this.setNameAt,toggleEdittingAt:this.toggleEdittingAt,toggleConfirmationAt:this.toggleConfirmationAt,guests:this.state.guests,numberUnconfirmed:n,numberAttending:e,totalInvited:t,toggleFilter:this.toggleFilter})]})}}]),n}(i.Component),F=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,i=e.getFID,s=e.getFCP,r=e.getLCP,u=e.getTTFB;n(t),i(t),s(t),r(t),u(t)}))};u.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(C,{})}),document.getElementById("root")),F()}},[[18,1,2]]]);
//# sourceMappingURL=main.7c95f63a.chunk.js.map