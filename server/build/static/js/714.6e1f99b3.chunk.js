"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[714],{23433:function(e,t,n){var r=n(1413),a=n(74165),i=n(15861),o=n(70885),s=n(47313),l=n(69099),c=n(20209),d=n(57829),u=n(56778),p=n(61113),m=n(9019),f=n(82295),h=n(90108),Z=n(19537),x=n(85554),g=n(50443),v=n(75627),b=n(33419),j=n(70816),k=n.n(j),y=n(46417),C={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"50rem",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:2,margin:"auto",overflowY:"scroll",height:"500px"};t.Z=function(e){var t,n,j=e.open,T=e.handleClose,S=e.taskId,D=JSON.parse(localStorage.getItem("userToken")),w=s.useState({}),I=(0,o.Z)(w,2),O=I[0],M=I[1],Y=s.useState(!1),P=(0,o.Z)(Y,2),F=P[0],V=P[1],B=s.useState(""),L=(0,o.Z)(B,2),q=L[0],W=L[1],N=(0,x.I0)(),R=(0,x.v9)((function(e){return e.task})).singleTask;s.useEffect((function(){function e(){return(e=(0,i.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return V(!0),e.prev=1,e.next=4,h.Z.get("/getSingleTaskDetails/".concat(S)).then((function(e){console.log(e.data),M(e.data[0]),V(!1)}));case 4:return e.abrupt("return",e.sent);case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[S,R]);function H(){var e=s.useState(!1),t=(0,o.Z)(e,2),n=t[0],a=t[1],i=function(){a(!1)},p=(0,v.cI)(),m=p.register,f=p.handleSubmit;p.formState.errors;return(0,y.jsxs)(s.Fragment,{children:[(0,y.jsx)(l.Z,{onClick:function(){a(!0)},children:"Create"}),(0,y.jsx)(c.Z,{hideBackdrop:!0,open:n,onClose:i,"aria-labelledby":"child-modal-title","aria-describedby":"child-modal-description",children:(0,y.jsxs)(d.Z,{sx:(0,r.Z)((0,r.Z)({},C),{},{width:200,height:260}),component:"form",onSubmit:f((function(e){console.log(e,"subtask data");var t={subtask:e.subTask,taskId:O._id,createdOn:k()().format("DD-MM-YYYY"),createdBy:D._id};console.log("details",t),N((0,g.y3)(t))})),children:[(0,y.jsx)("h4",{id:"child-modal-title",children:"SubTask Description"}),(0,y.jsx)(u.Z,(0,r.Z)({name:"subTask",id:"subTask"},m("subTask",{required:!0}))),(0,y.jsx)(l.Z,{type:"submit",children:"Add"}),(0,y.jsx)(l.Z,{onClick:i,children:"Close"})]})})]})}return(0,y.jsx)("div",{children:(0,y.jsx)(c.Z,{open:j,onClose:T,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,y.jsxs)(d.Z,{sx:C,xs:8,md:12,children:[F&&(0,y.jsx)(Z.Z,{}),(0,y.jsx)(p.Z,{id:"modal-modal-title",variant:"h6",component:"h2",mb:3,children:O.taskTitle}),(0,y.jsxs)(m.ZP,{container:!0,children:[(0,y.jsxs)(m.ZP,{item:!0,md:6,children:[(0,y.jsx)("h4",{children:"Description:"}),(0,y.jsx)("p",{style:{width:"180px",overflowWrap:"break-word"},children:O.taskDescription}),(0,y.jsx)("hr",{style:{marginTop:"1.2rem",width:"50%",marginRight:"10rem"}}),(0,y.jsxs)("h4",{style:{marginTop:"0.5rem"},children:["SubTasks ",(0,y.jsx)(H,{})]}),(0,y.jsx)(b.ZP,{columns:[{selector:function(e){return e.subtask}}],data:null===(t=O.subTasks)||void 0===t?void 0:t.reverse(),highlightOnHover:!0,noHeader:!0})]}),(0,y.jsxs)(m.ZP,{item:!0,md:6,children:[(0,y.jsx)("h4",{children:"comments"}),(0,y.jsx)(u.Z,{margin:"normal",fullWidth:!0,multiline:!0,name:"comment",rows:4,onChange:function(e){W(e.target.value)},value:q}),(0,y.jsx)(l.Z,{onClick:function(){console.log(q,"comment");var e={commentBody:q,taskinfo:S,userName:D.name,Date:k()().format("DD-MM-YYYY"),Time:k()().format("hh:mm")};console.log(e,"body"),N((0,g.Ir)(e)),W("")},children:"Comment"}),(0,y.jsx)("div",{style:{height:"150px",overflowY:"scroll"},children:null===(n=O.comments)||void 0===n?void 0:n.slice(0).reverse().map((function(e,t){return(0,y.jsxs)(f.Z,{style:{marginTop:"10px",width:"350px",overflowWrap:"break-word"},elevation:5,children:[(0,y.jsx)("h4",{style:{fontSize:"20px",margin:"0",marginLeft:"5px"},children:e.userName}),(0,y.jsxs)("h6",{style:{fontSize:"13px",margin:"0",marginLeft:"5px"},children:[e.Date,"(",e.Time,")"]}),(0,y.jsx)("p",{style:{marginTop:"10px",padding:"2px"},children:e.commentBody})]},t)}))})]})]})]})})})}},17714:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var r=n(47313),a=n(74165),i=n(45987),o=n(1413),s=n(15861),l=n(70885),c=n(69099),d=n(20209),u=n(57829),p=n(61113),m=n(9019),f=n(56778),h=n(35898),Z=n(51405),x=n(75627),g=n(43394),v=n(18849),b=n(93190),j=n(85554),k=n(90108),y=n(10658),C=n.n(y),T=n(70816),S=n.n(T),D=n(50443),w=n(46417),I=["ref"],O=["ref"],M=["onChange"],Y=["onChange"],P=["onChange"],F={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"400",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,pt:2,px:4,pb:3},V=function(){var e=JSON.parse(localStorage.getItem("projectId")),t=JSON.parse(localStorage.getItem("userToken")),n=(0,j.I0)(),y=(0,r.useState)([]),T=(0,l.Z)(y,2),V=T[0],B=T[1],L=(0,r.useState)(""),q=(0,l.Z)(L,2),W=q[0],N=q[1],R=(0,r.useState)(!1),H=(0,l.Z)(R,2),A=H[0],G=H[1],_=r.useState(C()()),Q=(0,l.Z)(_,2),z=Q[0],E=Q[1],J=r.useState(C()()),K=(0,l.Z)(J,2),U=K[0],X=K[1];function $(){return($=(0,s.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,k.Z.get("/getTeam/".concat(e)).then((function(e){B(e.data[0].projectmems),console.log(V,"memss")}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var ee=function(){G(!1)},te=(0,x.cI)(),ne=te.control,re=te.handleSubmit,ae=te.formState.errors;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(c.Z,{onClick:function(){!function(){$.apply(this,arguments)}(),G(!0)},children:"Create Task"}),(0,w.jsx)(d.Z,{open:A,onClose:ee,children:(0,w.jsxs)(u.Z,{sx:(0,o.Z)((0,o.Z)({},F),{},{width:"auto"}),xs:8,md:12,children:[(0,w.jsx)(p.Z,{id:"parent-modal-title",variant:"h6",component:"h2",children:"Create Task"}),(0,w.jsx)(u.Z,{component:"form",onSubmit:re((function(r){console.log("soefd"),console.log(r,"");var a={taskTitle:r.taskTitle,taskDescription:r.taskDescription,startDate:S()(r.startDate).format("YYYY-MM-DD"),endDate:S()(r.endDate).format("YYYY-MM-DD"),assigned:r.assigned,createdBy:t._id,projectId:e};ee(),n((0,D.Ef)(a))})),children:(0,w.jsxs)(m.ZP,{container:!0,style:{justifyContent:"space-around"},children:[(0,w.jsx)(m.ZP,{item:!0,xs:5,m:2,children:(0,w.jsx)(x.Qr,{name:"taskTitle",control:ne,rules:{required:!0},defaultValue:"",render:function(e){var t=e.field,n=t.ref,r=(0,i.Z)(t,I);return(0,w.jsx)(f.Z,(0,o.Z)((0,o.Z)({},r),{},{inputRef:n,id:"taskTitle",variant:"outlined",fullWidth:!0,error:!!ae.taskTitle,helperText:ae.taskTitle?"please enter task title":"",label:"Task Title"}))}})}),(0,w.jsx)(m.ZP,{item:!0,xs:5,m:2,children:(0,w.jsx)(x.Qr,{name:"taskDescription",control:ne,rules:{required:!0},render:function(e){var t=e.field,n=t.ref,r=(0,i.Z)(t,O);return(0,w.jsx)(f.Z,(0,o.Z)((0,o.Z)({},r),{},{inputRef:n,id:"taskDescription",variant:"outlined",fullWidth:!0,multiline:!0,error:!!ae.taskDescription,helperText:ae.taskDescription?"please enter the task description":"",label:"Task Description"}))}})}),(0,w.jsx)(m.ZP,{item:!0,xs:5,m:2,children:(0,w.jsx)(x.Qr,{name:"startDate",defaultValue:z,control:ne,rules:{required:!0},render:function(e){var t=e.field,n=t.onChange,r=(0,i.Z)(t,M);return(0,w.jsx)(g._,{dateAdapter:b.Z,children:(0,w.jsx)(h.Z,{children:(0,w.jsx)(v.O,(0,o.Z)({label:"Start Date",onChange:function(e){n(e),E(e)},renderInput:function(e){return(0,w.jsx)(f.Z,(0,o.Z)({},e))}},r))})})}})}),(0,w.jsx)(m.ZP,{item:!0,xs:5,m:2,children:(0,w.jsx)(x.Qr,{name:"endDate",control:ne,defaultValue:U,rules:{required:!0},render:function(e){var t=e.field,n=t.onChange,r=(0,i.Z)(t,Y);return(0,w.jsx)(g._,{dateAdapter:b.Z,children:(0,w.jsx)(h.Z,{children:(0,w.jsx)(v.O,(0,o.Z)({label:"End Date",onChange:function(e){n(e),X(e)},renderInput:function(e){return(0,w.jsx)(f.Z,(0,o.Z)({},e))}},r))})})}})}),(0,w.jsx)(m.ZP,{item:!0,xs:5,m:2,children:(0,w.jsx)(x.Qr,{name:"assigned",control:ne,rules:{required:!0},render:function(e){var t=e.field,n=t.onChange,r=(0,i.Z)(t,P);return(0,w.jsx)(f.Z,(0,o.Z)((0,o.Z)({},r),{},{id:"outlined-select-currency",select:!0,value:W,fullWidth:!0,label:"assign",onChange:function(e){n(e),N(e.target.value),console.log(W,"iii")},error:!!ae.assigned,helperText:ae.assigned?"please select a memeber to assign":"",children:V.map((function(e){return(0,w.jsx)(Z.Z,{value:e.email,children:e.name},e.email)}))}))}})}),(0,w.jsx)(c.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"create"})]})})]})})]})},B=n(33419),L=n(97890),q=n(23433),W=function(){var e=(0,j.v9)((function(e){return e.task})).taskDetails,t=JSON.parse(localStorage.getItem("projectId")),n=(0,L.TH)(),i=(0,r.useState)([]),o=(0,l.Z)(i,2),d=o[0],u=o[1],p=r.useState(!1),m=(0,l.Z)(p,2),f=m[0],h=m[1],Z=r.useState(""),x=(0,l.Z)(Z,2),g=x[0],v=x[1];(0,r.useEffect)((function(){function e(){return(e=(0,s.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.Z.get("/viewAllTasks/".concat(t)).then((function(e){u(e.data)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n,e,t]);var b=[{name:"Title",selector:function(e){return e.taskTitle}},{name:"Description",selector:function(e){return e.taskDescription}},{name:"StartDate",selector:function(e){return e.startDate}},{name:"endDate",selector:function(e){return e.endDate}},{name:"status",selector:function(e){return e.status}},{name:"Details",cell:function(e){return(0,w.jsx)(c.Z,{style:{backgroundColor:"White",color:"Blue",border:"1px solid blue"},onClick:function(){var t;t=e._id,v(t),h(!0)},children:"open"})}}];return(0,w.jsxs)(w.Fragment,{children:[f?(0,w.jsx)(q.Z,{open:f,handleClose:function(){return h(!1)},taskId:g}):"",(0,w.jsx)(B.ZP,{title:"All Tasks",columns:b,data:d,pagination:!0,fixedHeader:!0,highlightOnHover:!0})]})},N=function(){return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(V,{}),(0,w.jsx)(W,{})]})}},99273:function(e,t,n){n.d(t,{V:function(){return a}});var r=n(32298);function a(e){return(0,r.Z)("MuiDivider",e)}var i=(0,n(77430).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=i},37363:function(e,t,n){n.d(t,{f:function(){return a}});var r=n(32298);function a(e){return(0,r.Z)("MuiListItemIcon",e)}var i=(0,n(77430).Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);t.Z=i},11081:function(e,t,n){n.d(t,{L:function(){return a}});var r=n(32298);function a(e){return(0,r.Z)("MuiListItemText",e)}var i=(0,n(77430).Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);t.Z=i},51405:function(e,t,n){n.d(t,{Z:function(){return T}});var r=n(4942),a=n(63366),i=n(87462),o=n(47313),s=n(83061),l=n(21921),c=n(17551),d=n(17592),u=n(77342),p=n(51195),m=n(71848),f=n(24993),h=n(86983),Z=n(99273),x=n(37363),g=n(11081),v=n(32298);function b(e){return(0,v.Z)("MuiMenuItem",e)}var j=(0,n(77430).Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),k=n(46417),y=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],C=(0,d.ZP)(m.Z,{shouldForwardProp:function(e){return(0,d.FO)(e)||"classes"===e},name:"MuiMenuItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]}})((function(e){var t,n=e.theme,a=e.ownerState;return(0,i.Z)({},n.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!a.disableGutters&&{paddingLeft:16,paddingRight:16},a.divider&&{borderBottom:"1px solid ".concat((n.vars||n).palette.divider),backgroundClip:"padding-box"},(t={"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,r.Z)(t,"&.".concat(j.selected),(0,r.Z)({backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,c.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(j.focusVisible),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.focusOpacity,"))"):(0,c.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,r.Z)(t,"&.".concat(j.selected,":hover"),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.hoverOpacity,"))"):(0,c.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,c.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),(0,r.Z)(t,"&.".concat(j.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,r.Z)(t,"&.".concat(j.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),(0,r.Z)(t,"& + .".concat(Z.Z.root),{marginTop:n.spacing(1),marginBottom:n.spacing(1)}),(0,r.Z)(t,"& + .".concat(Z.Z.inset),{marginLeft:52}),(0,r.Z)(t,"& .".concat(g.Z.root),{marginTop:0,marginBottom:0}),(0,r.Z)(t,"& .".concat(g.Z.inset),{paddingLeft:36}),(0,r.Z)(t,"& .".concat(x.Z.root),{minWidth:36}),t),!a.dense&&(0,r.Z)({},n.breakpoints.up("sm"),{minHeight:"auto"}),a.dense&&(0,i.Z)({minHeight:32,paddingTop:4,paddingBottom:4},n.typography.body2,(0,r.Z)({},"& .".concat(x.Z.root," svg"),{fontSize:"1.25rem"})))})),T=o.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiMenuItem"}),r=n.autoFocus,c=void 0!==r&&r,d=n.component,m=void 0===d?"li":d,Z=n.dense,x=void 0!==Z&&Z,g=n.divider,v=void 0!==g&&g,j=n.disableGutters,T=void 0!==j&&j,S=n.focusVisibleClassName,D=n.role,w=void 0===D?"menuitem":D,I=n.tabIndex,O=(0,a.Z)(n,y),M=o.useContext(p.Z),Y={dense:x||M.dense||!1,disableGutters:T},P=o.useRef(null);(0,f.Z)((function(){c&&P.current&&P.current.focus()}),[c]);var F,V=(0,i.Z)({},n,{dense:Y.dense,divider:v,disableGutters:T}),B=function(e){var t=e.disabled,n=e.dense,r=e.divider,a=e.disableGutters,o=e.selected,s=e.classes,c={root:["root",n&&"dense",t&&"disabled",!a&&"gutters",r&&"divider",o&&"selected"]},d=(0,l.Z)(c,b,s);return(0,i.Z)({},s,d)}(n),L=(0,h.Z)(P,t);return n.disabled||(F=void 0!==I?I:-1),(0,k.jsx)(p.Z.Provider,{value:Y,children:(0,k.jsx)(C,(0,i.Z)({ref:L,role:w,tabIndex:F,component:m,focusVisibleClassName:(0,s.Z)(B.focusVisible,S)},O,{ownerState:V,classes:B}))})}))}}]);