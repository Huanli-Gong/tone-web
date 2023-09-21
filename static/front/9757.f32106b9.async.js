(self.webpackChunktone_front=self.webpackChunktone_front||[]).push([[9757],{64139:function(k){k.exports={row:"row___yt8i_",tag_popover_style:"tag_popover_style___THAzj",btn_style:"btn_style___1dx04"}},6895:function(k,H,t){"use strict";t.d(H,{Ul:function(){return Q},OT:function(){return ee}});var h=t(51937),P=t(34516),L=t(65790),V=t(17187),de=t(69230),J=t(33821),re=t(88018),le=t(57359),$=t(46721),z=t(13059),U=t(53676),W=t(90846),m=t(56511),D=t(22374),Y=t(22812),G=t(64139),B=t.n(G),l=t(52454),K=null,Q=function(n,o,i){switch(n){case"Available":return(0,l.jsx)(m.Z,{status:"success",text:"Available"});case"Offline":return(0,l.jsx)(m.Z,{status:"error",text:"Offline"});case"Online":return(0,l.jsx)(m.Z,{status:"success",text:"Online"});case"Available":return(0,l.jsx)(m.Z,{status:"success",text:"Available"});case"Occupied":return(0,l.jsx)(U.Z,{placement:"right",trigger:"hover",overlayClassName:B().tag_popover_style,title:(0,l.jsxs)("a",{href:"/ws/".concat(i,"/test_result/").concat(o.occupied_job_id),target:"_blank",children:["JobId #",o.occupied_job_id]}),children:(0,l.jsx)(m.Z,{status:"processing",text:"Occupied"})});case"Reserved":return(0,l.jsx)(m.Z,{status:"success",text:"Reserved"});case"Broken":return(0,l.jsx)(U.Z,{placement:"right",trigger:"hover",overlayClassName:B().tag_popover_style,title:o.broken_reason,children:(0,l.jsx)(m.Z,{status:"error",text:"Broken"})});case"Unusable":return(0,l.jsx)(m.Z,{status:"default",text:"Unusable"})}return(0,l.jsx)("div",{children:"-"})},se=function(n){var o=n.visible,i=n.width,u=n.title,f=n.children,a=n.onCancel,e=n.onFinish,s=n.onClose,r={width:i,title:u,visible:o,onClose:s};return _jsx(_Drawer,_objectSpread(_objectSpread({keyboard:!1},r),{},{forceRender:!0,maskClosable:!1,footer:_jsx("div",{style:{textAlign:"right"},children:_jsxs(_Space,{children:[_jsx(_Button,{onClick:a,children:_jsx(FormattedMessage,{id:"operation.cancel"})}),_jsx(_Button,{type:"primary",onClick:e,children:_jsx(FormattedMessage,{id:"operation.ok"})})]})}),children:f}))},oe=function(n){var o=n.members,i=n.callback,u=n.rules,f=n.initialValue;return _jsx(_Form.Item,{name:"owner",label:"Owner",rules:u,initialValue:f,children:_jsx(_Select,{placeholder:_jsx(FormattedMessage,{id:"please.enter"}),defaultActiveFirstOption:!1,filterOption:!1,showSearch:!0,getPopupContainer:function(e){return e.parentNode},onSearch:function(e){return K(e,i)},children:o.map(function(a){return _jsx(_Select.Option,{value:a.id,children:a.last_name},a.id)})})})},q=function(n){var o,i,u=n.label,f=n.closable,a=n.onClose,e=n.value;return(0,l.jsx)(P.Z,{color:(o=u.props)===null||o===void 0?void 0:o.color,closable:f,onClose:a,style:{marginRight:3},children:((i=u.props)===null||i===void 0?void 0:i.children)||e})},ee=function(n){var o=(0,Y.YB)(),i=o.formatMessage,u=n.tags,f=n.rules,a=n.initialValue,e=n.label,s=e===void 0?i({id:"device.tag"}):e,r=n.name,c=r===void 0?"tags":r,_=n.placeholder,g=_===void 0?i({id:"device.please.select.tag"}):_,x=n.disabled,T=x===void 0?!1:x;return(0,l.jsx)(V.Z.Item,{name:c,label:s,rules:f,initialValue:a&&a.map(function(v){return v.id}),children:(0,l.jsx)(J.Z,{placeholder:g,mode:"multiple",disabled:T,tagRender:q,allowClear:!0,getPopupContainer:function(C){return C.parentNode},filterOption:function(C,R){var b;return((b=R==null?void 0:R.name)!==null&&b!==void 0?b:"").toLowerCase().includes(C.toLowerCase())},options:u.map(function(v){return{value:v.id,label:(0,l.jsx)(P.Z,{color:v.tag_color,children:v.name}),name:v.name}})})})}},79390:function(k,H,t){"use strict";t.d(H,{sL:function(){return f},ny:function(){return i},Fu:function(){return u}});var h=t(20418),P=t(39190),L=t(488),V=t(26388),de=t(11407),J=t(41604),re=t(2605),le=t(74127),$=t(41428),z=t(22374),U=t(48434),W=t(97939),m=t(99648),D=t(52454),Y=["width","onResizeStart","onResize","onResizeStop","resize"],G=["columns","name","onColumnsChange"],B,l,K,Q=W.ZP.div(B||(B=(0,$.Z)([`
    position: relative;
    width: 100%;
`]))),se=W.ZP.div.attrs(function(a){return{style:{left:a.left,height:a==null?void 0:a.height}}})(l||(l=(0,$.Z)([`
    width: 0px;
    position: absolute;
    left: 0;
    top: 0;
    border-left: 1px dashed #d9d9d9;
    z-index: 99;
`]))),oe=(0,W.ZP)(U.Resizable)(K||(K=(0,$.Z)([`
    user-select: none;
    &::before {
        position: absolute;
        top: 50%;
        right: 0;
        width: 1px;
        height: 1.6em;
        background-color: rgba(0,0,0,.06);
        transform: translateY(-50%);
        transition: background-color .3s;
        content: "";
    }
    
    &:last-child::before {
        display: none;
    }

    .react-resizable {
        position: relative;
        background-clip: padding-box;
    }
    
    .react-resizable-handle {
        position: absolute;
        width: 10px;
        height: 100%;
        bottom: 0;
        right: -5px;
        cursor: `,`;
        background-image:none;
        z-index: 1;
    }
`])),function(a){var e=a.resize;return e?"col-resize":"default"}),q=function(e){var s=e.width,r=e.onResizeStart,c=e.onResize,_=e.onResizeStop,g=e.resize,x=(0,L.Z)(e,Y);return(0,D.jsx)(oe,(0,h.Z)((0,h.Z)({width:s||100,height:0,draggableOpts:{enableUserSelectHack:!1},onResizeStart:r,onResize:c,onResizeStop:_,resize:g?1:0},x),{},{children:(0,D.jsx)("th",(0,h.Z)({},x))}))},ee=function(e){var s=e.columns,r=s===void 0?[]:s,c=e.name,_=e.onColumnsChange,g=(0,L.Z)(e,G),x=z.useState(0),T=(0,P.Z)(x,2),v=T[0],C=T[1],R=z.useState(0),b=(0,P.Z)(R,2),w=b[0],M=b[1],te=z.useState(!1),F=(0,P.Z)(te,2),I=F[0],A=F[1],S=z.useRef(null),E=(0,m.Z)(S),ce=function(d){return function(j,Z){var O;if((0,le.Z)(Z),!!r[d].ellipsis){var ne=j.clientX,N=ne-((O=S.current)===null||O===void 0?void 0:O.getBoundingClientRect().x);M(N),C(N),A(!0)}}},ue=function(){return function(d){var j,Z=d.clientX,O=Z-((j=S.current)===null||j===void 0?void 0:j.getBoundingClientRect().x);C(O)}},ve=function(d){return function(j,Z){var O,ne=Z.size,N=j.clientX,ge=N-((O=S.current)===null||O===void 0?void 0:O.getBoundingClientRect().x),X=(0,re.Z)(r);if(X[d].ellipsis){var ae=ne.width+=ge-w,ie=X[d],he=ie.dataIndex,me=ie.key;ae>20&&(X[d]=(0,h.Z)((0,h.Z)({},X[d]),{},{width:ae}),c&&u(c,he||me,ae),_==null||_())}C(0),M(0),A(!1)}},_e=z.useMemo(function(){return r.reduce(function(y,d){return d.width?y+=d==null?void 0:d.width:y},0)},[r]);return(0,D.jsxs)(Q,{ref:S,className:"resize-table-wrapper",children:[(0,D.jsx)(J.Z,(0,h.Z)((0,h.Z)({},g),{},{components:{header:{cell:q}},scroll:(e==null?void 0:e.scroll)||{x:_e||(E==null?void 0:E.width)},columns:r.filter(Boolean).map(function(y,d){return(0,h.Z)((0,h.Z)({},y),{},{onHeaderCell:function(Z){return{resize:!!y.ellipsis,width:Z.width,onResizeStart:ce(d),onResize:ue(),onResizeStop:ve(d)}}})})})),I&&(0,D.jsx)(se,{height:E==null?void 0:E.height,left:v||w})]})},p=ee,n=["name","columns","refreshDeps","onColumnsChange"],o="umi_locale",i=function(e,s){var r=localStorage.getItem(e),c=localStorage.getItem(o)||"zh-CN";if(!!r)return JSON.parse(r)["".concat(c,"-").concat(s)]},u=function(e,s,r){var c=localStorage.getItem(e),_=localStorage.getItem(o)||"zh-CN",g=(0,V.Z)({},"".concat(_,"-").concat(s),r);c?localStorage.setItem(e,JSON.stringify(Object.assign(JSON.parse(c),g))):localStorage.setItem(e,JSON.stringify(g))},f=function(e){var s=e.name,r=e.columns,c=e.refreshDeps,_=c===void 0?[]:c,g=e.onColumnsChange,x=(0,L.Z)(e,n),T=z.useState([]),v=(0,P.Z)(T,2),C=v[0],R=v[1],b=function(){return(r==null?void 0:r.filter(Boolean).map(function(M){var te=M.dataIndex,F=M.key,I=M.width,A=te||F,S=i(s,A);!S&&I&&u(s,A,I);var E=S||I;return E&&(M.width=E),M}))||[]};return z.useEffect(function(){R(b())},_),(0,D.jsx)(p,(0,h.Z)({name:s,columns:C,setColumns:R,size:"small",onColumnsChange:function(){g==null||g(),R(b())}},x))}}}]);
