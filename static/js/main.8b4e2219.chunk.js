(this["webpackJsonpadmin-ui-geektrust"]=this["webpackJsonpadmin-ui-geektrust"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(14),s=n.n(a),i=(n(25),n(26),n(15)),u=n(16),o=n(20),l=n(18),j=(n(27),n(0)),d=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).state={hasError:!1},c}return Object(u.a)(n,[{key:"componentDidCatch",value:function(e,t){var n;n=t,console.log((new Date).toISOString()+" --- "+n)}},{key:"render",value:function(){return this.state.hasError?Object(j.jsx)("div",{className:"error center",children:"Something went wrong."}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(r.a.Component),b=n(13),h=n.n(b),O=n(3),f=n(17),p=n(4),m=n(7),x=n(19),v=function(e,t){var n=e.toLowerCase();return t.email.toLowerCase().includes(n)||t.name.toLowerCase().includes(n)||t.role.toLowerCase().includes(n)},g=function(e,t,n){var c=e.filter((function(e){return v(n,e)}));return c.length<=10?c:c.slice(10*(t-1)+1,10*t+1)},k=n(6),N=n(5),C=(n(35),function(e){var t=e.result,n=Object(c.useState)(t),r=Object(p.a)(n,2),a=r[0],s=r[1],i=function(e,t){s(Object(O.a)(Object(O.a)({},a),{},Object(m.a)({},e,t)))};return Object(j.jsx)("div",{className:"resultRowWrapper center",children:e.editable?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("span",{className:"checkbox",children:Object(j.jsx)("input",{type:"checkbox",checked:t.checked,onChange:function(n){return e.UpdateResult(t.id,{checked:n.target.checked})}})}),Object(j.jsx)("input",{value:a.name,placeholder:"Name",onChange:function(e){return i("name",e.target.value)}}),Object(j.jsx)("input",{value:a.email,placeholder:"Email",onChange:function(e){return i("email",e.target.value)}}),Object(j.jsx)("input",{value:a.role,placeholder:"Role",onChange:function(e){return i("role",e.target.value)}}),Object(j.jsxs)("span",{className:"buttons",children:[Object(j.jsx)("span",{className:"saveButton button",onClick:function(){e.editRow(t.id,!1),e.UpdateResult(t.id,a)},children:Object(j.jsx)(N.a,{icon:k.a})}),Object(j.jsx)("span",{className:"deleteButton button",onClick:function(){return e.DeleteRecord(t.id)},children:Object(j.jsx)(N.a,{icon:k.d})})]})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("span",{children:Object(j.jsx)("input",{type:"checkbox",checked:t.checked,onChange:function(n){return e.UpdateResult(t.id,{checked:n.target.checked})}})}),Object(j.jsx)("span",{children:t.name}),Object(j.jsx)("span",{children:t.email}),Object(j.jsx)("span",{children:t.role}),Object(j.jsxs)("span",{className:"buttons",children:[Object(j.jsx)("span",{className:"editButton button",onClick:function(){return e.editRow(t.id,!0)},children:Object(j.jsx)(N.a,{icon:k.b})}),Object(j.jsx)("span",{className:"deleteButton button",onClick:function(){return e.DeleteRecord(t.id)},children:Object(j.jsx)(N.a,{icon:k.d})})]})]})},e.index)}),S=(n(36),function(e){var t=Object(c.useState)({}),n=Object(p.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(1),i=Object(p.a)(s,2),u=i[0],o=i[1],l=function(t,n){e.updateResults((function(e){var c=JSON.parse(JSON.stringify(e)),r=c.findIndex((function(e){return e.id==t}));return c[r]=Object(O.a)(Object(O.a)({},c[r]),n),c}))},d=function(e,t){a(Object(O.a)(Object(O.a)({},r),{},Object(m.a)({},e,t)))},b=function(t){e.updateResults((function(e){return e.filter((function(e){return e.id!=t}))}))};return Object(c.useEffect)((function(){o(1)}),[e.serachString]),Object(j.jsx)(j.Fragment,{children:e.results?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"resultsWrapper",children:[Object(j.jsxs)("div",{className:"resultHeading center",children:[Object(j.jsx)("input",{type:"checkbox",onClick:function(t){e.updateResults((function(e){return Object(x.a)(e.map((function(e,n){var c;return n>=10*(u-1)&&n<=10*u?Object(O.a)(Object(O.a)({},e),{},{checked:null===t||void 0===t||null===(c=t.target)||void 0===c?void 0:c.checked}):e})))}))},id:"allselectedButton"}),Object(j.jsx)("span",{children:" Name "}),Object(j.jsx)("span",{children:" Email "}),Object(j.jsx)("span",{children:" Role "}),Object(j.jsx)("span",{children:" Actions "})]}),g(e.results,u,e.serachString).map((function(e,t){return Object(j.jsx)(C,{editable:r[e.id]||!1,UpdateResult:l,index:t,result:e,editRow:d,DeleteRecord:b},t)}))]}),Object(j.jsxs)("div",{className:"pagination",children:[Object(j.jsx)("div",{className:"deltedSeletecd button center",onClick:function(){e.updateResults((function(e){return e.filter((function(e){return!e.checked}))})),document.getElementById("allselectedButton").checked=!1,o((function(t){return t<e.results.length/10-1?t:1}))},children:"Delete Selected"}),Object(j.jsx)("div",{className:"pageNumbers center",children:function(){var t,n,c=[],r=(t=e.results,n=e.serachString,t.filter((function(e){return v(n,e)}))).length;console.log(r),r>0&&c.push(Object(j.jsxs)("span",{className:"button center",onClick:function(){return o(1)},children:[" ","<<"," "]}));for(var a=function(e){c.push(Object(j.jsx)("span",{className:e==u-1?"button activePage center":"button center",onClick:function(){return o(e+1)},children:e+1}))},s=0;s<r/10;s++)a(s);return c}()})]})]}):Object(j.jsx)("div",{className:"noResults center",children:" Loading results......"})})}),R=(n(37),function(e){var t=Object(c.useRef)(null);return Object(j.jsxs)("div",{className:"searchBarWrapper",children:[Object(j.jsx)("input",{type:"search",placeholder:"Search By name, email or role",ref:t}),Object(j.jsxs)("div",{className:"button searchButton center",onClick:function(){var n;e.handleSearchProps((null===(n=t.current)||void 0===n?void 0:n.value)||"")},children:[Object(j.jsx)(N.a,{icon:k.c}),"Search"]})]})}),w=(n(38),function(){var e=Object(c.useState)(""),t=Object(p.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),s=Object(p.a)(a,2),i=s[0],u=s[1];return Object(c.useEffect)((function(){fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json",{method:"get"}).then(function(){var e=Object(f.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,u(n.map((function(e){return Object(O.a)(Object(O.a)({},e),{},{checked:!1})})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch()}),[]),Object(j.jsx)("section",{className:"containerWrapper",children:Object(j.jsxs)("div",{className:"container center",children:[Object(j.jsx)(R,{handleSearchProps:r}),Object(j.jsx)(S,{serachString:n,results:i,updateResults:u})]})})});var y=function(){return Object(j.jsx)(d,{children:Object(j.jsx)(w,{})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),B()}},[[39,1,2]]]);
//# sourceMappingURL=main.8b4e2219.chunk.js.map