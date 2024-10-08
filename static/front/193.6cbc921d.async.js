(self.webpackChunktone_front=self.webpackChunktone_front||[]).push([[193],{16045:function(H){H.exports={row:"row___yt8i_",tag_popover_style:"tag_popover_style___THAzj",btn_style:"btn_style___1dx04"}},71459:function(H,V,t){"use strict";t.d(V,{Ul:function(){return Q},OT:function(){return ee}});var h=t(2824),$=t(71153),T=t(60331),ae=t(9715),re=t(20526),le=t(43358),J=t(34041),se=t(57338),w=t(49111),E=t(57663),oe=t(20136),B=t(55241),ie=t(54029),f=t(79166),k=t(67294),Y=t(16917),F=t(16045),U=t.n(F),o=t(85893),G=null,Q=function(n,i,d){switch(n){case"Available":return(0,o.jsx)(f.Z,{status:"success",text:"Available"});case"Offline":return(0,o.jsx)(f.Z,{status:"error",text:"Offline"});case"Online":return(0,o.jsx)(f.Z,{status:"success",text:"Online"});case"Available":return(0,o.jsx)(f.Z,{status:"success",text:"Available"});case"Occupied":return(0,o.jsx)(B.Z,{placement:"right",trigger:"hover",overlayClassName:U().tag_popover_style,title:(0,o.jsxs)("a",{href:"/ws/".concat(d,"/test_result/").concat(i.occupied_job_id),target:"_blank",children:["JobId #",i.occupied_job_id]}),children:(0,o.jsx)(f.Z,{status:"processing",text:"Occupied"})});case"Reserved":return(0,o.jsx)(f.Z,{status:"success",text:"Reserved"});case"Broken":return(0,o.jsx)(B.Z,{placement:"right",trigger:"hover",overlayClassName:U().tag_popover_style,title:i.broken_reason,children:(0,o.jsx)(f.Z,{status:"error",text:"Broken"})});case"Unusable":return(0,o.jsx)(f.Z,{status:"default",text:"Unusable"})}return(0,o.jsx)("div",{children:"-"})},ce=function(n){var i=n.visible,d=n.width,g=n.title,c=n.children,e=n.onCancel,a=n.onFinish,l=n.onClose,v={width:d,title:g,visible:i,onClose:l};return _jsx(_Drawer,_objectSpread(_objectSpread({keyboard:!1},v),{},{forceRender:!0,maskClosable:!1,footer:_jsx("div",{style:{textAlign:"right"},children:_jsxs(_Space,{children:[_jsx(_Button,{onClick:e,children:_jsx(FormattedMessage,{id:"operation.cancel"})}),_jsx(_Button,{type:"primary",onClick:a,children:_jsx(FormattedMessage,{id:"operation.ok"})})]})}),children:c}))},ue=function(n){var i=n.members,d=n.callback,g=n.rules,c=n.initialValue;return _jsx(_Form.Item,{name:"owner",label:"Owner",rules:g,initialValue:c,children:_jsx(_Select,{placeholder:_jsx(FormattedMessage,{id:"please.enter"}),defaultActiveFirstOption:!1,filterOption:!1,showSearch:!0,getPopupContainer:function(a){return a.parentNode},onSearch:function(a){return G(a,d)},children:i.map(function(e){return _jsx(_Select.Option,{value:e.id,children:e.last_name},e.id)})})})},q=function(n){var i,d,g=n.label,c=n.closable,e=n.onClose,a=n.value;return(0,o.jsx)(T.Z,{color:(i=g.props)===null||i===void 0?void 0:i.color,closable:c,onClose:e,style:{marginRight:3},children:((d=g.props)===null||d===void 0?void 0:d.children)||a})},ee=function(n){var i=["keep_three_months","keep_six_months","keep_one_year"],d=(0,Y.YB)(),g=d.formatMessage,c=n.tags,e=n.rules,a=n.initialValue,l=n.label,v=l===void 0?g({id:"device.tag"}):l,b=n.name,x=b===void 0?"tags":b,R=n.placeholder,A=R===void 0?g({id:"device.please.select.tag"}):R,p=n.disabled,P=p===void 0?!1:p,O=n.callback,M=O===void 0?function(){}:O,I=(0,k.useState)([]),C=(0,h.Z)(I,2),W=C[0],D=C[1];return(0,k.useEffect)(function(){if(a){var s=a.map(function(r){return{value:r.id,label:r.name}});D(s);var m=s.filter(function(r){return i.indexOf(r.label)>-1});M(m)}},[a]),(0,o.jsx)(re.Z.Item,{name:x,label:v,rules:e,initialValue:a&&a.map(function(s){return s.id}),children:(0,o.jsx)(J.Z,{placeholder:A,mode:"multiple",disabled:P,onChange:function(m,r){var u=(r==null?void 0:r.map(function(L){return{value:L.value,label:L.label.props.children}}))||[];D(u);var K=u.filter(function(L){return i.indexOf(L.label)>-1});M(K)},tagRender:q,allowClear:!0,getPopupContainer:function(m){return m.parentNode},filterOption:function(m,r){var u;return((u=r==null?void 0:r.name)!==null&&u!==void 0?u:"").toLowerCase().includes(m.toLowerCase())},options:c.map(function(s){var m=W.filter(function(K){return i.indexOf(K.label)>-1}),r=i.includes(s.name)&&m.length?s.name!==m[0].label:!1,u=r?(0,o.jsx)("span",{style:{color:"#bfbfbf"},children:s.name}):s.name;return{value:s.id,label:(0,o.jsx)(T.Z,{color:s.tag_color,children:u}),disabled:r,name:s.name}})})})}},85450:function(H,V,t){"use strict";t.d(V,{sL:function(){return g},ny:function(){return i},Fu:function(){return d}});var h=t(11849),$=t(2824),T=t(93224),ae=t(32059),re=t(66456),le=t(79764),J=t(86582),se=t(19273),w=t(20310),E=t(67294),oe=t(1706),B=t(12788),ie=t(57392),f=t(85893),k=["width","onResizeStart","onResize","onResizeStop","resize"],Y=["columns","name","onColumnsChange"],F,U,o,G=B.ZP.div(F||(F=(0,w.Z)([`
    position: relative;
    width: 100%;
`]))),Q=B.ZP.div.attrs(function(c){return{style:{left:c.left,height:c==null?void 0:c.height}}})(U||(U=(0,w.Z)([`
    width: 0px;
    position: absolute;
    left: 0;
    top: 0;
    border-left: 1px dashed #d9d9d9;
    z-index: 99;
`]))),ce=(0,B.ZP)(oe.Resizable)(o||(o=(0,w.Z)([`
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
`])),function(c){var e=c.resize;return e?"col-resize":"default"}),ue=function(e){var a=e.width,l=e.onResizeStart,v=e.onResize,b=e.onResizeStop,x=e.resize,R=(0,T.Z)(e,k);return(0,f.jsx)(ce,(0,h.Z)((0,h.Z)({width:a||100,height:0,draggableOpts:{enableUserSelectHack:!1},onResizeStart:l,onResize:v,onResizeStop:b,resize:x?1:0},R),{},{children:(0,f.jsx)("th",(0,h.Z)({},R))}))},q=function(e){var a=e.columns,l=a===void 0?[]:a,v=e.name,b=e.onColumnsChange,x=(0,T.Z)(e,Y),R=E.useState(0),A=(0,$.Z)(R,2),p=A[0],P=A[1],O=E.useState(0),M=(0,$.Z)(O,2),I=M[0],C=M[1],W=E.useState(!1),D=(0,$.Z)(W,2),s=D[0],m=D[1],r=E.useRef(null),u=(0,ie.Z)(r),K=function(_){return function(y,Z){var S;if((0,se.Z)(Z),!!l[_].ellipsis){var te=y.clientX,N=te-((S=r.current)===null||S===void 0?void 0:S.getBoundingClientRect().x);C(N),P(N),m(!0)}}},L=function(){return function(_){var y,Z=_.clientX,S=Z-((y=r.current)===null||y===void 0?void 0:y.getBoundingClientRect().x);P(S)}},ve=function(_){return function(y,Z){var S,te=Z.size,N=y.clientX,fe=N-((S=r.current)===null||S===void 0?void 0:S.getBoundingClientRect().x),X=(0,J.Z)(l);if(X[_].ellipsis){var ne=te.width+=fe-I,de=X[_],me=de.dataIndex,he=de.key;ne>20&&(X[_]=(0,h.Z)((0,h.Z)({},X[_]),{},{width:ne}),v&&d(v,me||he,ne),b==null||b())}P(0),C(0),m(!1)}},_e=E.useMemo(function(){return l.reduce(function(z,_){return _.width?z+=_==null?void 0:_.width:z},0)},[l]);return(0,f.jsxs)(G,{ref:r,className:"resize-table-wrapper",children:[(0,f.jsx)(le.Z,(0,h.Z)((0,h.Z)({},x),{},{components:{header:{cell:ue}},scroll:(e==null?void 0:e.scroll)||{x:_e||(u==null?void 0:u.width)},columns:l.filter(Boolean).map(function(z,_){return(0,h.Z)((0,h.Z)({},z),{},{onHeaderCell:function(Z){return{resize:!!z.ellipsis,width:Z.width,onResizeStart:K(_),onResize:L(),onResizeStop:ve(_)}}})})})),s&&(0,f.jsx)(Q,{height:u==null?void 0:u.height,left:p||I})]})},ee=q,j=["name","columns","refreshDeps","onColumnsChange"],n="umi_locale",i=function(e,a){var l=localStorage.getItem(e),v=localStorage.getItem(n)||"zh-CN";if(!!l)return JSON.parse(l)["".concat(v,"-").concat(a)]},d=function(e,a,l){var v=localStorage.getItem(e),b=localStorage.getItem(n)||"zh-CN",x=(0,ae.Z)({},"".concat(b,"-").concat(a),l);v?localStorage.setItem(e,JSON.stringify(Object.assign(JSON.parse(v),x))):localStorage.setItem(e,JSON.stringify(x))},g=function(e){var a=e.name,l=e.columns,v=e.refreshDeps,b=v===void 0?[]:v,x=e.onColumnsChange,R=(0,T.Z)(e,j),A=E.useState([]),p=(0,$.Z)(A,2),P=p[0],O=p[1],M=function(){return(l==null?void 0:l.filter(Boolean).map(function(C){var W=C.dataIndex,D=C.key,s=C.width,m=W||D,r=i(a,m);!r&&s&&d(a,m,s);var u=r||s;return u&&(C.width=u),C}))||[]};return E.useEffect(function(){O(M())},b),(0,f.jsx)(ee,(0,h.Z)({name:a,columns:P,setColumns:O,size:"small",onColumnsChange:function(){x==null||x(),O(M())}},R))}}}]);
