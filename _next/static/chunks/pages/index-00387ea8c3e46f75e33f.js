_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{RNiq:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return v}));var i=a("nKUr"),n=a("q1tI"),o=(a("8Kt/"),a("R/WZ")),r=a("wx14"),s=a("Ff2n"),c=a("rePB"),d=(a("17x9"),a("iuhU")),l=a("H2TA"),p=a("NqtD"),u=n.forwardRef((function(e,t){var a=e.classes,i=e.className,o=e.component,c=void 0===o?"div":o,l=e.disableGutters,u=void 0!==l&&l,b=e.fixed,m=void 0!==b&&b,j=e.maxWidth,g=void 0===j?"lg":j,f=Object(s.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return n.createElement(c,Object(r.a)({className:Object(d.a)(a.root,i,m&&a.fixed,u&&a.disableGutters,!1!==g&&a["maxWidth".concat(Object(p.a)(String(g)))]),ref:t},f))})),b=Object(l.a)((function(e){return{root:Object(c.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,a){var i=e.breakpoints.values[a];return 0!==i&&(t[e.breakpoints.up(a)]={maxWidth:i}),t}),{}),maxWidthXs:Object(c.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(c.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(c.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(c.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(c.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(u),m=a("tRbT"),j=a("sHTw"),g=a("iAln"),f=a("2Ch9"),x=a("Zb7+"),h=Object(o.a)((function(e){return{root:{flexGrow:1}}}));function v(){var e=h();return Object(i.jsxs)("div",{className:e.root,children:[Object(i.jsx)(j.default,{}),Object(i.jsx)(b,{maxWidth:"lg",children:Object(i.jsxs)(m.a,{container:!0,spacing:3,children:[Object(i.jsxs)(m.a,{item:!0,md:9,xs:12,children:[Object(i.jsx)(g.default,{}),Object(i.jsx)(f.default,{})]}),Object(i.jsx)(m.a,{item:!0,md:3,xs:12,children:Object(i.jsx)(x.default,{})})]})})]})}},"Zb7+":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return N}));var i=a("nKUr"),n=a("q1tI"),o=a("R/WZ"),r=a("kKAo"),s=a("hlFM"),c=a("wx14"),d=a("Ff2n"),l=(a("17x9"),a("iuhU")),p=a("H2TA");var u=n.createContext({}),b=n.forwardRef((function(e,t){var a=e.children,i=e.classes,o=e.className,r=e.component,s=void 0===r?"ul":r,p=e.dense,b=void 0!==p&&p,m=e.disablePadding,j=void 0!==m&&m,g=e.subheader,f=Object(d.a)(e,["children","classes","className","component","dense","disablePadding","subheader"]),x=n.useMemo((function(){return{dense:b}}),[b]);return n.createElement(u.Provider,{value:x},n.createElement(s,Object(c.a)({className:Object(l.a)(i.root,o,b&&i.dense,!j&&i.padding,g&&i.subheader),ref:t},f),g,a))})),m=Object(p.a)({root:{listStyle:"none",margin:0,padding:0,position:"relative"},padding:{paddingTop:8,paddingBottom:8},dense:{},subheader:{paddingTop:0}},{name:"MuiList"})(b),j=a("VD++");var g=a("bfFb"),f=a("i8i4"),x="undefined"===typeof window?n.useEffect:n.useLayoutEffect,h=n.forwardRef((function(e,t){var a=e.alignItems,i=void 0===a?"center":a,o=e.autoFocus,r=void 0!==o&&o,s=e.button,p=void 0!==s&&s,b=e.children,m=e.classes,h=e.className,v=e.component,O=e.ContainerComponent,k=void 0===O?"li":O,N=e.ContainerProps,y=(N=void 0===N?{}:N).className,w=Object(d.a)(N,["className"]),C=e.dense,R=void 0!==C&&C,B=e.disabled,S=void 0!==B&&B,W=e.disableGutters,E=void 0!==W&&W,I=e.divider,T=void 0!==I&&I,A=e.focusVisibleClassName,F=e.selected,_=void 0!==F&&F,L=Object(d.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),P=n.useContext(u),D={dense:R||P.dense||!1,alignItems:i},M=n.useRef(null);x((function(){r&&M.current&&M.current.focus()}),[r]);var G,K,V=n.Children.toArray(b),q=V.length&&(G=V[V.length-1],K=["ListItemSecondaryAction"],n.isValidElement(G)&&-1!==K.indexOf(G.type.muiName)),U=n.useCallback((function(e){M.current=f.findDOMNode(e)}),[]),H=Object(g.a)(U,t),z=Object(c.a)({className:Object(l.a)(m.root,h,D.dense&&m.dense,!E&&m.gutters,T&&m.divider,S&&m.disabled,p&&m.button,"center"!==i&&m.alignItemsFlexStart,q&&m.secondaryAction,_&&m.selected),disabled:S},L),Z=v||"li";return p&&(z.component=v||"div",z.focusVisibleClassName=Object(l.a)(m.focusVisible,A),Z=j.a),q?(Z=z.component||v?Z:"div","li"===k&&("li"===Z?Z="div":"li"===z.component&&(z.component="div")),n.createElement(u.Provider,{value:D},n.createElement(k,Object(c.a)({className:Object(l.a)(m.container,y),ref:H},w),n.createElement(Z,z,V),V.pop()))):n.createElement(u.Provider,{value:D},n.createElement(Z,Object(c.a)({ref:H},z),V))})),v=Object(p.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(h),O=a("wb2y"),k=Object(o.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper,padding:"0px"},inline:{display:"inline"},header:{fontSize:"1.6em",padding:"16px"},itemBase:{background:e.palette.background.paper},itemBaseSelected:{position:"relative",background:e.palette.primary.light},itemBaseSelectedBar:{position:"absolute",background:e.palette.primary.dark,width:"4px",height:"100%",left:"0px"},button:{width:"100%","&:hover, &$focusVisible":{"& $itemBase":{background:"#FCFCFC"}}}}}));function N(){var e=k(),t=function(t){return Object(i.jsx)(j.a,{focusRipple:!0,className:e.button,children:Object(i.jsxs)(v,{className:t?e.itemBaseSelected:e.itemBase,children:[Object(i.jsx)("div",{className:t?e.itemBaseSelectedBar:e.itemBase}),Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{children:"2020/01/01 11:22"}),Object(i.jsx)("p",{children:"#234lk2"}),Object(i.jsx)("p",{children:"commit comment"})]})]})})};return Object(i.jsx)(s.a,{p:0,my:3,children:Object(i.jsxs)(r.a,{elevation:3,children:[Object(i.jsx)("div",{className:e.header,children:"History"}),Object(i.jsx)(O.a,{}),Object(i.jsxs)(m,{className:e.root,children:[t(!0),Object(i.jsx)(O.a,{}),t(!1),Object(i.jsx)(O.a,{}),t(!1),Object(i.jsx)(O.a,{}),t(!1)]})]})})}},iAln:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return l}));var i=a("nKUr"),n=a("R/WZ"),o=a("kKAo"),r=a("hlFM"),s=a("tRbT"),c=a("ofer"),d=Object(n.a)((function(){return{logoContainer:{position:"relative"},logoImg:{position:"absolute",width:"50%",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}}}));function l(){var e=d();return Object(i.jsx)(o.a,{elevation:3,children:Object(i.jsx)(r.a,{p:3,my:3,children:Object(i.jsxs)(s.a,{container:!0,spacing:1,children:[Object(i.jsx)(s.a,{item:!0,xs:3,sm:4,className:e.logoContainer,children:Object(i.jsx)("img",{className:e.logoImg,src:"apricot_img.png"})}),Object(i.jsxs)(s.a,{item:!0,xs:!0,sm:!0,children:[Object(i.jsxs)(r.a,{component:"div",py:2,children:[Object(i.jsx)(c.a,{variant:"subtitle1",children:"tach.takenoko.sampleapp"}),Object(i.jsx)(c.a,{variant:"h3",children:"SampleApp"})]}),Object(i.jsxs)(r.a,{component:"div",py:2,children:[Object(i.jsx)(c.a,{variant:"body1",children:"Brunch: master"}),Object(i.jsx)(c.a,{variant:"body1",children:"Upload Date: 2020/01/01 11:22"})]})]})]})})})}},sHTw:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h}));var i=a("nKUr"),n=(a("8Kt/"),a("R/WZ")),o=a("wx14"),r=a("Ff2n"),s=a("q1tI"),c=(a("17x9"),a("iuhU")),d=a("H2TA"),l=a("NqtD"),p=a("kKAo"),u=s.forwardRef((function(e,t){var a=e.classes,i=e.className,n=e.color,d=void 0===n?"primary":n,u=e.position,b=void 0===u?"fixed":u,m=Object(r.a)(e,["classes","className","color","position"]);return s.createElement(p.a,Object(o.a)({square:!0,component:"header",elevation:4,className:Object(c.a)(a.root,a["position".concat(Object(l.a)(b))],a["color".concat(Object(l.a)(d))],i,"fixed"===b&&"mui-fixed"),ref:t},m))})),b=Object(d.a)((function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(u),m=a("rePB"),j=s.forwardRef((function(e,t){var a=e.classes,i=e.className,n=e.component,d=void 0===n?"div":n,l=e.disableGutters,p=void 0!==l&&l,u=e.variant,b=void 0===u?"regular":u,m=Object(r.a)(e,["classes","className","component","disableGutters","variant"]);return s.createElement(d,Object(o.a)({className:Object(c.a)(a.root,a[b],i,!p&&a.gutters),ref:t},m))})),g=Object(d.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:Object(m.a)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(j),f=a("ofer"),x=Object(n.a)((function(e){return{appBar:{background:"linear-gradient(60deg, ".concat(e.palette.primary.main,", ").concat(e.palette.primary.light,")")},title:{flexGrow:1}}}));function h(){var e=x();return Object(i.jsx)(b,{position:"static",className:e.appBar,children:Object(i.jsx)(g,{children:Object(i.jsx)(f.a,{variant:"h6",className:e.title,children:"Apricot"})})})}},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("RNiq")}])}},[["vlRD",0,1,2,3,4,5,6,7]]]);