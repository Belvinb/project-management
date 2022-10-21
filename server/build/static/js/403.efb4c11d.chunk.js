(self.webpackChunkclient=self.webpackChunkclient||[]).push([[403],{35403:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return G}});var r=t(74165),o=t(15861),i=t(47313),a=t(57829),u=t(69099),c=t(73428),s=t(63366),l=t(87462),d=t(83061),f=t(21921),p=t(17592),m=t(77342),v=t(32298),h=t(77430);function Z(e){return(0,v.Z)("MuiCardActions",e)}(0,h.Z)("MuiCardActions",["root","spacing"]);var g=t(46417),x=["disableSpacing","className"],y=(0,p.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,!t.disableSpacing&&n.spacing]}})((function(e){var n=e.ownerState;return(0,l.Z)({display:"flex",alignItems:"center",padding:8},!n.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),b=i.forwardRef((function(e,n){var t=(0,m.Z)({props:e,name:"MuiCardActions"}),r=t.disableSpacing,o=void 0!==r&&r,i=t.className,a=(0,s.Z)(t,x),u=(0,l.Z)({},t,{disableSpacing:o}),c=function(e){var n=e.classes,t={root:["root",!e.disableSpacing&&"spacing"]};return(0,f.Z)(t,Z,n)}(u);return(0,g.jsx)(y,(0,l.Z)({className:(0,d.Z)(c.root,i),ownerState:u,ref:n},a))})),S=t(93405),w=t(4942),j=t(61113);function C(e){return(0,v.Z)("MuiCardHeader",e)}var M=(0,h.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),P=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],k=(0,p.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,n){var t;return(0,l.Z)((t={},(0,w.Z)(t,"& .".concat(M.title),n.title),(0,w.Z)(t,"& .".concat(M.subheader),n.subheader),t),n.root)}})({display:"flex",alignItems:"center",padding:16}),z=(0,p.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,n){return n.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),R=(0,p.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,n){return n.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),T=(0,p.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,n){return n.content}})({flex:"1 1 auto"}),_=i.forwardRef((function(e,n){var t=(0,m.Z)({props:e,name:"MuiCardHeader"}),r=t.action,o=t.avatar,i=t.className,a=t.component,u=void 0===a?"div":a,c=t.disableTypography,p=void 0!==c&&c,v=t.subheader,h=t.subheaderTypographyProps,Z=t.title,x=t.titleTypographyProps,y=(0,s.Z)(t,P),b=(0,l.Z)({},t,{component:u,disableTypography:p}),S=function(e){var n=e.classes;return(0,f.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},C,n)}(b),w=Z;null==w||w.type===j.Z||p||(w=(0,g.jsx)(j.Z,(0,l.Z)({variant:o?"body2":"h5",className:S.title,component:"span",display:"block"},x,{children:w})));var M=v;return null==M||M.type===j.Z||p||(M=(0,g.jsx)(j.Z,(0,l.Z)({variant:o?"body2":"body1",className:S.subheader,color:"text.secondary",component:"span",display:"block"},h,{children:M}))),(0,g.jsxs)(k,(0,l.Z)({className:(0,d.Z)(S.root,i),as:u,ref:n,ownerState:b},y,{children:[o&&(0,g.jsx)(z,{className:S.avatar,ownerState:b,children:o}),(0,g.jsxs)(T,{className:S.content,ownerState:b,children:[w,M]}),r&&(0,g.jsx)(R,{className:S.action,ownerState:b,children:r})]}))})),N=t(62481),I=t(9019),A=t(78941),B=t(70499),E=t(70178),V=t(31881),F=t.n(V),H=t(97890),L=(t(90108),t(85554)),D=[{title:"Free",price:"0",description:["plan details","plan details","plan details","plan details"],buttonText:"Continue",buttonVariant:"outlined"},{title:"Pro",subheader:"Most popular",price:"500",description:["plan details","plan details","plan details","plan details"],buttonText:"Continue",buttonVariant:"contained"},{title:"Enterprise",price:"800",description:["plan details","plan details","plan details","plan details"],buttonText:"Continue",buttonVariant:"outlined"}],G=function(){var e=(0,L.v9)((function(e){return e.user})).signupInfo;console.log(e,"info user");var n=(0,H.s0)();function t(e){return new Promise((function(n){var t=document.createElement("script");t.src=e,t.onload=function(){n(!0)},t.onerror=function(){n(!1)},document.body.appendChild(t)}))}var s=function(e){"Free"===e?n("/login"):function(){l.apply(this,arguments)}()};function l(){return l=(0,o.Z)((0,r.Z)().mark((function i(){var a,u,c;return(0,r.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,t("https://checkout.razorpay.com/v1/checkout.js");case 3:if(i.sent){i.next=7;break}return alert("Razorpay SDK failed to load. Are you online?"),i.abrupt("return");case 7:return console.log("sdfdsf"),i.next=10,F().post("http://127.0.0.1:5000/subscription");case 10:if(a=i.sent,console.log(a),a){i.next=15;break}return alert("Server error. Are you online?"),i.abrupt("return");case 15:u=a.data.id,c={key:"rzp_test_MkOPieSMPDcB0n",subscription_id:u,amount:"500",name:"Aventur",description:"Monthly subscription plans",image:"",handler:function(){var t=(0,o.Z)((0,r.Z)().mark((function t(o){var i,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(o,"responsefdf"),i={paymentId:o.razorpay_payment_id,subscriptionId:o.razorpay_subscription_id,signature:o.razorpay_signature,userId:e._id},t.next=4,F().post("http://127.0.0.1:5000/subSuccess",i);case 4:(a=t.sent)&&(console.log(a,"detailss"),n("/login"));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),prefill:{name:"Aventure ",email:"contact.aventure@aventure.com",contact:"+919876543210"},notes:{note_key_1:"Tea. Earl Grey. Hot",note_key_2:"Make it so."},theme:{color:"#F37254"}},new window.Razorpay(c).open(),i.next=24;break;case 21:i.prev=21,i.t0=i.catch(0),console.log(i.t0,"rrrrr");case 24:case"end":return i.stop()}}),i,null,[[0,21]])}))),l.apply(this,arguments)}return(0,g.jsxs)(i.Fragment,{children:[(0,g.jsx)(B.Z,{styles:{ul:{margin:0,padding:0,listStyle:"none"}}}),(0,g.jsx)(N.ZP,{}),(0,g.jsxs)(E.Z,{disableGutters:!0,maxWidth:"sm",component:"main",sx:{pt:2,pb:6},children:[(0,g.jsx)(j.Z,{component:"h1",variant:"h3",align:"center",color:"text.primary",gutterBottom:!0,children:"Pricing"}),(0,g.jsx)(j.Z,{variant:"h5",align:"center",color:"text.secondary",component:"p"})]}),(0,g.jsx)(E.Z,{maxWidth:"md",component:"main",children:(0,g.jsx)(I.ZP,{container:!0,spacing:5,alignItems:"flex-end",children:D.map((function(e){return(0,g.jsx)(I.ZP,{item:!0,xs:12,sm:"Enterprise"===e.title?12:6,md:4,children:(0,g.jsxs)(c.Z,{children:[(0,g.jsx)(_,{title:e.title,subheader:e.subheader,titleTypographyProps:{align:"center"},action:"Pro"===e.title?(0,g.jsx)(A.Z,{}):null,subheaderTypographyProps:{align:"center"},sx:{backgroundColor:"#44A08D",color:"white"}}),(0,g.jsxs)(S.Z,{children:[(0,g.jsxs)(a.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"baseline",mb:2},children:[(0,g.jsxs)(j.Z,{component:"h2",variant:"h4",color:"text.primary",children:["Rs",e.price]}),(0,g.jsx)(j.Z,{variant:"h6",color:"text.secondary",children:"/mo"})]}),(0,g.jsx)("ul",{children:e.description.map((function(e){return(0,g.jsx)(j.Z,{component:"li",variant:"subtitle1",align:"center",children:e},e)}))})]}),(0,g.jsx)(b,{children:(0,g.jsx)(u.Z,{fullWidth:!0,variant:e.buttonVariant,onClick:function(){return s(e.title)},children:e.buttonText})})]})},e.title)}))})})]})}},78941:function(e,n,t){"use strict";var r=t(64836);n.Z=void 0;var o=r(t(45045)),i=t(46417),a=(0,o.default)((0,i.jsx)("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");n.Z=a},45045:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=t(86415)},81171:function(e,n,t){"use strict";t.d(n,{Z:function(){return g}});var r=t(87462),o=t(47313),i=t(63366),a=t(83061),u=t(21921),c=t(91615),s=t(77342),l=t(17592),d=t(32298);function f(e){return(0,d.Z)("MuiSvgIcon",e)}(0,t(77430).Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var p=t(46417),m=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],v=(0,l.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,"inherit"!==t.color&&n["color".concat((0,c.Z)(t.color))],n["fontSize".concat((0,c.Z)(t.fontSize))]]}})((function(e){var n,t,r,o,i,a,u,c,s,l,d,f,p,m,v,h,Z,g=e.theme,x=e.ownerState;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(n=g.transitions)||null==(t=n.create)?void 0:t.call(n,"fill",{duration:null==(r=g.transitions)||null==(o=r.duration)?void 0:o.shorter}),fontSize:{inherit:"inherit",small:(null==(i=g.typography)||null==(a=i.pxToRem)?void 0:a.call(i,20))||"1.25rem",medium:(null==(u=g.typography)||null==(c=u.pxToRem)?void 0:c.call(u,24))||"1.5rem",large:(null==(s=g.typography)||null==(l=s.pxToRem)?void 0:l.call(s,35))||"2.1875"}[x.fontSize],color:null!=(d=null==(f=(g.vars||g).palette)||null==(p=f[x.color])?void 0:p.main)?d:{action:null==(m=(g.vars||g).palette)||null==(v=m.action)?void 0:v.active,disabled:null==(h=(g.vars||g).palette)||null==(Z=h.action)?void 0:Z.disabled,inherit:void 0}[x.color]}})),h=o.forwardRef((function(e,n){var t=(0,s.Z)({props:e,name:"MuiSvgIcon"}),o=t.children,l=t.className,d=t.color,h=void 0===d?"inherit":d,Z=t.component,g=void 0===Z?"svg":Z,x=t.fontSize,y=void 0===x?"medium":x,b=t.htmlColor,S=t.inheritViewBox,w=void 0!==S&&S,j=t.titleAccess,C=t.viewBox,M=void 0===C?"0 0 24 24":C,P=(0,i.Z)(t,m),k=(0,r.Z)({},t,{color:h,component:g,fontSize:y,instanceFontSize:e.fontSize,inheritViewBox:w,viewBox:M}),z={};w||(z.viewBox=M);var R=function(e){var n=e.color,t=e.fontSize,r=e.classes,o={root:["root","inherit"!==n&&"color".concat((0,c.Z)(n)),"fontSize".concat((0,c.Z)(t))]};return(0,u.Z)(o,f,r)}(k);return(0,p.jsxs)(v,(0,r.Z)({as:g,className:(0,a.Z)(R.root,l),ownerState:k,focusable:"false",color:b,"aria-hidden":!j||void 0,role:j?"img":void 0,ref:n},z,P,{children:[o,j?(0,p.jsx)("title",{children:j}):null]}))}));h.muiName="SvgIcon";var Z=h;function g(e,n){var t=function(t,o){return(0,p.jsx)(Z,(0,r.Z)({"data-testid":"".concat(n,"Icon"),ref:o},t,{children:e}))};return t.muiName=Z.muiName,o.memo(o.forwardRef(t))}},88706:function(e,n,t){"use strict";var r=t(34312);n.Z=r.Z},86415:function(e,n,t){"use strict";t.r(n),t.d(n,{capitalize:function(){return o.Z},createChainedFunction:function(){return i},createSvgIcon:function(){return a.Z},debounce:function(){return u.Z},deprecatedPropType:function(){return c},isMuiElement:function(){return s.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return f},setRef:function(){return p},unstable_ClassNameGenerator:function(){return b},unstable_useEnhancedEffect:function(){return m.Z},unstable_useId:function(){return v.Z},unsupportedProp:function(){return h},useControlled:function(){return Z.Z},useEventCallback:function(){return g.Z},useForkRef:function(){return x.Z},useIsFocusVisible:function(){return y.Z}});var r=t(41271),o=t(91615),i=t(84246).Z,a=t(81171),u=t(88706);var c=function(e,n){return function(){return null}},s=t(27816),l=t(6106),d=t(23533);t(87462);var f=function(e,n){return function(){return null}},p=t(89265).Z,m=t(24993),v=t(17677);var h=function(e,n,t,r,o){return null},Z=t(30522),g=t(73236),x=t(86983),y=t(59127),b={configure:function(e){console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),r.Z.configure(e)}}},27816:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(47313);var o=function(e,n){return r.isValidElement(e)&&-1!==n.indexOf(e.type.muiName)}},6106:function(e,n,t){"use strict";var r=t(49081);n.Z=r.Z},23533:function(e,n,t){"use strict";var r=t(93282);n.Z=r.Z},30522:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(70885),o=t(47313);var i=function(e){var n=e.controlled,t=e.default,i=(e.name,e.state,o.useRef(void 0!==n).current),a=o.useState(t),u=(0,r.Z)(a,2),c=u[0],s=u[1];return[i?n:c,o.useCallback((function(e){i||s(e)}),[])]}},24993:function(e,n,t){"use strict";var r=t(2678);n.Z=r.Z},17677:function(e,n,t){"use strict";var r=t(33362);n.Z=r.Z},84246:function(e,n,t){"use strict";function r(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.reduce((function(e,n){return null==n?e:function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];e.apply(this,r),n.apply(this,r)}}),(function(){}))}t.d(n,{Z:function(){return r}})},34312:function(e,n,t){"use strict";function r(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=this,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];var u=function(){e.apply(r,i)};clearTimeout(n),n=setTimeout(u,t)}return r.clear=function(){clearTimeout(n)},r}t.d(n,{Z:function(){return r}})},49081:function(e,n,t){"use strict";function r(e){return e&&e.ownerDocument||document}t.d(n,{Z:function(){return r}})},93282:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(49081);function o(e){return(0,r.Z)(e).defaultView||window}},33362:function(e,n,t){"use strict";var r;t.d(n,{Z:function(){return c}});var o=t(70885),i=t(47313),a=0;var u=(r||(r=t.t(i,2))).useId;function c(e){if(void 0!==u){var n=u();return null!=e?e:n}return function(e){var n=i.useState(e),t=(0,o.Z)(n,2),r=t[0],u=t[1],c=e||r;return i.useEffect((function(){null==r&&u("mui-".concat(a+=1))}),[r]),c}(e)}},64836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);