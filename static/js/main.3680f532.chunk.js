(this["webpackJsonprobofriends-app-hooks"]=this["webpackJsonprobofriends-app-hooks"]||[]).push([[0],{25:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),s=n(2),c=n.n(s),a=n(5),i=n(8),h=n(12),u=n(13),b=(n(25),n(3)),d=n(4),l=n(7),j=n(6),p=n(1),O=function(e){var t=e.name,n=e.email,r=e.id;return Object(p.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(p.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?200x200")}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:t}),Object(p.jsx)("p",{children:n})]})]})},g=function(e){var t=e.robots;return Object(p.jsx)("div",{children:t.map((function(e,n){return Object(p.jsx)(O,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},f=function(e){e.searchfield;var t=e.searchChange;return Object(p.jsx)("div",{className:"pa2",children:Object(p.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},v=function(e){return Object(p.jsx)("div",{style:{overflowY:"scroll",border:"3px solid Blue",height:"800px"},children:e.children})},x=(n(27),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(b.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(d.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(p.jsx)("h1",{children:" Oooops That is not good "}):this.props.children}}]),n}(r.Component)),m="CHANGE_SEARCH_FIELD",y="REQUEST_ROBOTS_PENDING",R="REQUEST_ROBOTS_SUCCESS",C="REQUEST_ROBOTS_FAILED",E=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,o=e.isPending,s=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o?Object(p.jsx)("h1",{children:" loading "}):Object(p.jsxs)("div",{className:"tc",children:[Object(p.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(p.jsx)(f,{searchChange:n}),Object(p.jsx)(v,{children:Object(p.jsx)(x,{children:Object(p.jsx)(g,{robots:s})})})]})}}]),n}(o.a.Component),S=Object(a.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:m,payload:n}));var n},onRequestRobots:function(){return e((function(e){e({type:y}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:R,payload:t})})).catch((function(t){return e({type:C,payload:t})}))}))}}}))(E),F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),o(e),s(e),c(e)}))},P=(n(28),{searchField:""}),w={isPending:!1,robots:[],error:""},T=Object(h.createLogger)(),k=Object(i.b)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.type===m?Object.assign({},e,{searchField:t.payload}):e},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case y:return Object.assign({},e,{isPending:!0});case R:return Object.assign({},e,{robots:t.payload,isPending:!1});case C:return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),N=Object(i.c)(k,Object(i.a)(u.a,T));c.a.render(Object(p.jsx)(a.a,{store:N,children:Object(p.jsx)(S,{})}),document.getElementById("root")),F()}},[[29,1,2]]]);
//# sourceMappingURL=main.3680f532.chunk.js.map