(self.webpackChunktone_front=self.webpackChunktone_front||[]).push([[6246],{39954:function(Pt,L,t){"use strict";t.d(L,{B1:function(){return o},PV:function(){return x},gt:function(){return p},YL:function(){return v},Sh:function(){return f}});var o=function(s){var E={normal:"normal",increase:"increase",decline:"decline",invalid:"invalid"};return E[s]},x=function(s){var E={normal:"-",invalid:"\u2298",increase:"\u2191",decline:"\u2193"};return E[s]},T=function(s,E){var e=s.conf_list.map(function(_,b){for(var C=[],U=[],nt=0;nt<5;nt++)U.push([]);return _.metric_list.forEach(function(H){var I=H.compare_data[E];I.compare_result==="decline"?I.sortNum=0:I.compare_result==="increase"?I.sortNum=1:I.compare_result==="normal"?I.sortNum=2:I.compare_result==="invalid"?I.sortNum=3:I.sortNum=4,U.push(H)}),C=U.reduce(function(H,I){return H.concat(I)},[]),_objectSpread(_objectSpread({},_),{},{metric_list:C})}),i=function(b){var C=b===void 0?0:b.replace("%","");return C=Number(C),C},a=function(b){return i(b.sort(function(C,U){return i(C.compare_data[E].compare_value)-i(U.compare_data[E].compare_value)})[0].compare_data[E].compare_value)},r=e.sort(function(_,b){return a(_.metric_list)-a(b.metric_list)}),n=function(b){return b.sort(function(C,U){return C.compare_data[E].sortNum-U.compare_data[E].sortNum})[0].compare_data[E].sortNum},l=r.sort(function(_,b){return n(_.metric_list)-n(b.metric_list)})},p=function(s){var E=Number(s*100).toFixed(1);return E+="%",E},v=function(s){return s==0?"0":s||"-"},f=function(s){if(s=="Pass")return"#81BF84";if(s=="Fail")return"#C84C5A";if(s=="Skip")return"rgba(0,0,0,0.85)"}},14552:function(Pt,L,t){"use strict";var o=t(22385),x=t(89456),T=t(11849),p=t(2824),v=t(93224),f=t(20310),u=t(67294),s=t(12788),E=t(60035),e=t(85893),i=["title","children","width","color","placement","style"],a,r=s.ZP.div(a||(a=(0,f.Z)([`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`]))),n=function(_){var b=_.title,C=_.children,U=_.width,nt=_.color,H=_.placement,I=H===void 0?"topLeft":H,O=_.style,F=(0,v.Z)(_,i),G=(0,u.useRef)(null),Ct=(0,u.useState)(!1),w=(0,p.Z)(Ct,2),h=w[0],Gt=w[1],z=(0,E.CR)(),st=z.width,tt=function(){var _t,jt,ht=G==null||(_t=G.current)===null||_t===void 0?void 0:_t.clientWidth,Bt=G==null||(jt=G.current)===null||jt===void 0?void 0:jt.scrollWidth;Gt(ht<Bt)};(0,u.useEffect)(function(){tt()},[b,st]);var ct=(0,e.jsx)(r,(0,T.Z)((0,T.Z)({ref:G,style:(0,T.Z)({width:U,color:nt},O)},F),{},{children:C||b||"-"}));return h?(0,e.jsx)(x.Z,{title:b,placement:I,overlayStyle:{wordBreak:"break-all"},children:ct}):ct};L.Z=n},49301:function(Pt,L,t){"use strict";t.d(L,{c:function(){return z}});var o=t(22385),x=t(89456),T=t(13062),p=t(71230),v=t(402),f=t(97272),u=t(2824),s=t(20310),E=t(67294),e=t(12788),i,a,r,n,l="110",_=function(tt){return tt?tt==1?"calc( 100% - ".concat(l,"px )"):"calc( (100% - ".concat(l,"px) / ").concat(tt,")"):""},b=e.ZP.div(i||(i=(0,s.Z)([`
    width:`,`px;
    float:left;
    padding-left:16px;
    border-right:1px solid rgba(0,0,0,0.10);
`])),l),C=e.ZP.div(a||(a=(0,s.Z)([`
    border: 1px solid rgba(0,0,0,0.10);
    /* min-height:200px; */
    /* margin-bottom:13px; */
    border-bottom:none;
    border-right:none;
`]))),U=(0,e.ZP)(b)(r||(r=(0,s.Z)([`
    height:40px;
    line-height:40px;
    color:rgba(0,0,0,0.85);
    border-bottom:1px solid rgba(0,0,0,0.10);
    font-weight:500;
`]))),nt=e.ZP.div(n||(n=(0,s.Z)([`
    width: `,`;
    /* float:left; */
    padding:0px 13px;
    border-right:1px solid rgba(0,0,0,0.10);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height:40px;
    line-height:40px;
    border-bottom:1px solid rgba(0,0,0,0.10);
    border-right:1px solid rgba(0,0,0,0.10);
`])),function(st){var tt=st.gLen;return _(tt)}),H=t(98244),I=t(16917),O=t(43387),F=t(24480),G=t(85893),Ct,w,h=(0,e.F4)(Ct||(Ct=(0,s.Z)([`
    from {
        transform: translateY(0);
    }

    to {
        transform: translateY(3px);
    }
`]))),Gt=e.ZP.div(w||(w=(0,s.Z)([`
    align-items: center;
    justify-content: center;
    height: 40px;
    line-height: 40px;
    display: inline-flex;
    width: 100px;
    margin: 0 auto;
    cursor: pointer;
    color: #1890FF;
    animation: `,` .5s ease-in-out .5s infinite alternate;
`])),h),z=function(tt){var ct=tt.envData,Kt=tt.environmentResult,_t=tt.group,jt=Kt.count,ht=(0,I.YB)(),Bt=E.useState(!1),K=(0,u.Z)(Bt,2),Nt=K[0],Yt=K[1],d=(0,O.g)();E.useEffect(function(){return function(){Yt(!1)}},[]);var yt=E.useMemo(function(){var At;return(d==null||(At=d.domainResult)===null||At===void 0?void 0:At.server_info_config)||F.vs},[d]);return ct?(0,G.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[new Array(Nt?jt:1).fill("").map(function(At,Wt){return(0,G.jsx)(C,{children:[["IP","ip/sn"],[ht.formatMessage({id:"report.server.distro",defaultMessage:"\u673A\u578B"}),"distro"],["CPU","cpu_info"],[ht.formatMessage({id:"report.server.memory_info",defaultMessage:"\u5185\u5B58"}),"memory_info"],[ht.formatMessage({id:"report.server.disk",defaultMessage:"\u78C1\u76D8"}),"disk"],[ht.formatMessage({id:"report.server.ether",defaultMessage:"\u7F51\u7EDC"}),"ether"],["OS","os"],["Kernel","kernel"],["GCC","gcc"],["Glibc","glibc"]].map(function(Xt,Ft){var X=(0,u.Z)(Xt,2),N=X[0],et=X[1];if(!!yt.includes(et))return(0,G.jsxs)(p.Z,{children:[(0,G.jsx)(U,{style:{background:"#fafafa"},children:N}),new Array(_t).fill("").map(function(zt,Lt){var ft,mt,Zt,Ht=((ft=ct[Lt])===null||ft===void 0||(mt=ft.server_info)===null||mt===void 0||(Zt=mt[Wt])===null||Zt===void 0?void 0:Zt[et])||"-";return(0,G.jsx)(nt,{gLen:_t,children:(0,G.jsx)(f.Z.Text,{ellipsis:{tooltip:{title:(0,G.jsx)("span",{dangerouslySetInnerHTML:{__html:Ht.replace(/\n/g,"<br />")}})}},children:Ht})},Lt)})]},Ft)}).filter(Boolean)},Wt)}),jt>1&&!Nt&&(0,G.jsx)(Gt,{onClick:function(){return Yt(!0)},children:(0,G.jsx)(x.Z,{title:ht.formatMessage({id:"report.server.collapsed.tooltip.title",defaultMessage:"\u5C55\u5F00\u67E5\u770B\u66F4\u591A\u673A\u5668\u4FE1\u606F"}),children:(0,G.jsx)("span",{children:(0,G.jsx)(H.Z,{style:{transform:"rotate(90deg)",transformOrigin:"center"}})})})})]}):(0,G.jsx)(G.Fragment,{})}},76161:function(Pt,L,t){"use strict";t.d(L,{w:function(){return o},U:function(){return x}});var o=function(p,v){var f=JSON.stringify(p);return v==="volatility"?f.search("increase")!==-1||f.search("decline")!==-1:f.search(v)!==-1},x=function(p){return JSON.stringify(p)==="{}"?"-":"".concat(p.test_value,"\xB1").concat(p.cv_value)}},51017:function(Pt,L,t){"use strict";t.d(L,{_V:function(){return x},xP:function(){return T},VX:function(){return p},J1:function(){return v},OF:function(){return f},on:function(){return u},gQ:function(){return s},k3:function(){return a},lI:function(){return r},a4:function(){return n}});var o=t(16917),x=function(_){return(0,o.WY)("/api/job/test/",{params:_})},T=function(_){return(0,o.WY)("/api/baseline/list/",{params:_})},p=function(_){return(0,o.WY)("/api/get/product/version/",{params:_})},v=function(_){return(0,o.WY)("/api/job/result/compare/suite/",{method:"post",data:_})},f=function(_){return(0,o.WY)("/api/job/result/compare/conf/",{method:"post",data:_})},u=function(_){return(0,o.WY)("/api/job/result/compare/list/",{method:"post",data:_})},s=function(_){return(0,o.WY)("/api/job/result/compare/info/",{method:"post",data:_})},E=function(_){return request("/api/plan/view/",{params:_})},e=function(_){return request("/api/plan/result/",{params:_})},i=function(_){return request("/api/plan/constraint/",{params:_})},a=function(_){return(0,o.WY)("/api/report/domain/group/",{method:"post",data:_})},r=function(_){return(0,o.WY)("/api/sys/product/",{params:_})},n=function(_){return(0,o.WY)("/api/job/result/compare/duplicate/",{method:"post",data:_})}},80015:function(Pt,L,t){"use strict";t.d(L,{he:function(){return Xt},dv:function(){return Ft},BK:function(){return X},JI:function(){return N},ZI:function(){return et},Xv:function(){return zt},KP:function(){return Lt},ER:function(){return ft},HA:function(){return mt},i1:function(){return Ht},xM:function(){return qt},Xb:function(){return $t},Rr:function(){return Jt},DK:function(){return Dt},ZA:function(){return Tt},Ll:function(){return pt},Y0:function(){return Z},gb:function(){return c},yO:function(){return P},uP:function(){return D},h$:function(){return S},h:function(){return M},iM:function(){return q},Qz:function(){return j},TG:function(){return J},j3:function(){return it},r0:function(){return Y},WF:function(){return B},KW:function(){return te},LQ:function(){return ee},lu:function(){return St},Km:function(){return kt},ly:function(){return ne},GH:function(){return xt},Lc:function(){return y},bH:function(){return Rt},Qq:function(){return bt}});var o=t(402),x=t(97272),T=t(13062),p=t(71230),v=t(20310),f=t(12788),u=t(25782),s,E,e,i,a,r,n,l,_,b,C,U,nt,H,I,O,F,G,Ct,w,h,Gt,z,st,tt,ct,Kt,_t,jt,ht,Bt,K,Nt,Yt,d,yt,At,Wt=360,Xt=f.ZP.div(s||(s=(0,v.Z)([`
    position:fixed;
    left:50%;
    top:50%;
    z-index:999;
    transform: translate(-50%,-50%);
    cursor:pointer;
    font-size:14px;
    .my-loading-span {
        position: relative;
        display: inline-block;
        font-size: 32px;
        width: 1em;
        height: 1em;
        transform: rotateZ(45deg);
        transition: transform .3s cubic-bezier(.78, .14, .15, .86);
        animation: Rotate45 1.2s infinite linear;
    }
    .my-loading-span > i {
        height: 14px;
        width: 14px;
        background-color: #1890ff;
        display: block;
        position: absolute;
        border-radius: 100%;
        transform: scale(.75);
        transform-origin: 50% 50%;
        opacity: .3;
        animation: myAnimationMove 1s infinite linear alternate;
    }
    .my-loading-span:nth-child(1) {
        top: 0;
        left: 0;
    }
    .my-loading-span :nth-child(2) {
        top: 0;
        right: 0;
        animation-delay: .4s;
    }
    .my-loading-span :nth-child(3) {
        bottom: 0;
        right: 0;
        animation-delay: .8s;
    }
    .my-loading-span :nth-child(4) {
        left: 0;
        bottom: 0;
        animation-delay: 1.2s;
    }
    @keyframes Rotate45 {
        to {
        transform: rotate(405deg);
        }
    };
    @keyframes myAnimationMove {
        to {
            opacity: 1;
        }
    }
`]))),Ft=(0,f.ZP)(p.Z)(E||(E=(0,v.Z)([`
    margin:0 auto !important;
    height:100%;   
    padding:0 20px;
`]))),X=f.ZP.div(e||(e=(0,v.Z)([`
    height:74px;
    line-height:74px;
    .btn{
        display:inline-block;
        float: right;
    }
`]))),N=f.ZP.span(i||(i=(0,v.Z)([`
    float: right;
    padding-top: 12px;
`]))),et=(0,f.ZP)(x.Z.Text)(a||(a=(0,v.Z)([`
    font-size:32px;
    font-family: PingFangSC-Semibold;
    color:rgba(0,0,0,0.85);
`]))),zt=f.ZP.div(r||(r=(0,v.Z)([`
    overflow-x:scroll;
`]))),Lt=f.ZP.div(n||(n=(0,v.Z)([`
    background:#fff;
    padding:16px 20px;
    margin-bottom:16px;
`]))),ft=f.ZP.div(l||(l=(0,v.Z)([`
    font-size:16px;
    font-weight:bold;
    color:rgba(0,0,0,0.85); 
    margin-bottom: 16px;
    .line{
        width:2px;
        height:16px;
        background:#1890FF;
        margin: 4px 8px 4px -10px;
        float:left;
    }
`]))),mt=f.ZP.div(_||(_=(0,v.Z)([`
    border: 1px solid rgba(0,0,0,0.10);
    height:48px;
    line-height:48px;
    color:#000;
    font-weight:500;
    margin-bottom:13px;
    border-right:none;
    display:flex;
`]))),Zt=function(R,wt){return R==1?"calc( 100% - ".concat(110,"px )"):"calc((100% - ".concat(110,"px) / ",R,")")},Ht=f.ZP.div(b||(b=(0,v.Z)([`
    width: `,`px;
    float:left;
    padding-left:16px;
    border-right:1px solid rgba(0,0,0,0.10);
`])),110),qt=f.ZP.div(C||(C=(0,v.Z)([`
    width: `,`;
    display:flex;
    padding-left:13px;
    border-right:1px solid rgba(0,0,0,0.10);
`])),function(A){var R=A.gLen,wt=A.enLocale;return Zt(R,wt)}),$t=f.ZP.div(U||(U=(0,v.Z)([`
    height: 24px;
    width: 64px;
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: rgba(0,0,0,0.85);
    line-height: 24px;
    margin:16px 0;
`]))),Jt=f.ZP.div(nt||(nt=(0,v.Z)([`
    border:1px solid rgba(0,0,0,0.1);
    border-radius:4px;
`]))),Dt=f.ZP.div(H||(H=(0,v.Z)([`
    font-size:16px;
    font-weight:bold;
    color:rgba(0,0,0,0.85); 
    margin-bottom: 16px;
    .line{
        width:2px;
        height:16px;
        background:#1890FF;
        margin: 4px 8px 4px -10px;
        float:left;
    }
`]))),at=`
    float:left;
    font-size:14px;
    padding-left:16px;
    color:rgba(0,0,0,0.85);
    font-family: PingFangSC-Medium;
`,rt=function(R){return R==1?"50%":"".concat(Wt,"px")},Ot=function(R){return R==1?"50%":"calc((100% - ".concat(Wt,"px) / ").concat(R,")")},Tt=f.ZP.div(I||(I=(0,v.Z)([`
    height:48px;
    display:flex;
    //border:1px solid rgba(0,0,0,0.10);
`]))),pt=f.ZP.div(O||(O=(0,v.Z)([`
    width : `,`;
    border-right:1px solid rgba(0,0,0,0.10);
    border-bottom:none;
    line-height:48px; 
    float:left;
    padding-left:16px;
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: #000000;
`])),function(A){var R=A.gLen;return rt(R)}),Z=f.ZP.div(F||(F=(0,v.Z)([`
    width : `,`;
    display:flex;
    border-bottom:none;
    `,`
    &:last-child {
        border-right:none;
    }
    line-height:48px; 
    font-family: PingFangSC-Medium;
    border-right:1px solid rgba(0,0,0,0.10);
`])),function(A){var R=A.gLen;return Ot(R)},at),c=f.ZP.div(G||(G=(0,v.Z)([`
    height:auto;
    background:rgba(0,0,0,0.03);
    // margin:0 16px 18px 16px;
    padding-bottom: 18px;
`]))),P=f.ZP.div(Ct||(Ct=(0,v.Z)([`
    height:41px;
    line-height:41px;
    padding-left:16px;
    font-size:14px;
    font-family: PingFangSC-Medium;
    color:rgba(0,0,0,0.85);
    background:rgba(0,0,0,0.04);
    position:relative;
`]))),D=f.ZP.div(w||(w=(0,v.Z)([`
    margin: 0px 15px 0px 17px;
    border-top:1px solid rgba(0,0,0,0.10);
`]))),S=f.ZP.div(h||(h=(0,v.Z)([`
    margin: 10px 0px 3px 0px;
    height:22px;
    padding-left:16px;
`]))),M=f.ZP.div(Gt||(Gt=(0,v.Z)([`
    float:left;
    font-size:12px;
    color: rgba(0,0,0,0.45);
    width : `,`;
`])),function(A){var R=A.gLen;return rt(R)}),q=f.ZP.div(z||(z=(0,v.Z)([`
    float:left;
    font-size:12px;
    color: rgba(0,0,0,0.45);
    width : `,`;
    //overflow: hidden;
    white-space: nowrap;
    //text-overflow: ellipsis;
    &:last-child {
        border-right:none;
    }
`])),function(A){var R=A.gLen;return Ot(R)}),j=f.ZP.span(st||(st=(0,v.Z)([`
    //display:inline-block;
    float:right;
    padding-right:9px;

    .normal{
        color: rgba(0,0,0,1);
        font-size: 14px;
   }
   .invalid{
        color: rgba(0,0,0,0.25);
        font-size: 14px;
   }
   .increase{
        font-size: 14px;
        color: #81BF84;
    }
    .decline{
        font-size: 14px;
        color: #C84C5A;
    }
`]))),J=f.ZP.div(tt||(tt=(0,v.Z)([`
    height:38px;
    line-height:38px;
    background:rgba(0,0,0,0.02);
`]))),it=f.ZP.div(ct||(ct=(0,v.Z)([`
    width : `,`;
    `,`
`])),function(A){var R=A.gLen;return rt(R)},at),Y=f.ZP.div(Kt||(Kt=(0,v.Z)([`
    width : `,`;
    `,`
`])),function(A){var R=A.gLen;return Ot(R)},at),B=f.ZP.div(_t||(_t=(0,v.Z)([`
    height:38px;
    line-height:38px;
    background:#ffffff;
    border-bottom: 1px solid rgba(0,0,0,0.10);
    &:last-child{
        border-bottom:none;
    }
`]))),ut=`
    float:left;
    font-size:14px;
    color:rgba(0,0,0,0.65);
    font-family:PingFangSC-Regular;
`,te=f.ZP.div(jt||(jt=(0,v.Z)([`
    width : `,`;
    padding-left:36px;
    white-space: nowrap;
    border-right: 1px solid rgba(0,0,0,0.10);
    `,`
`])),function(A){var R=A.gLen;return rt(R)},ut),ee=f.ZP.div(ht||(ht=(0,v.Z)([`
    width : `,`;
    padding-left:16px;
    `,`
    white-space: nowrap;
    border-right: 1px solid rgba(0,0,0,0.10);
    &:last-child{
        border-right:none;
    }
`])),function(A){var R=A.gLen;return Ot(R)},ut),St=f.ZP.div(Bt||(Bt=(0,v.Z)([`
    height:40px;
    background:#fafafa;
    border: 1px solid rgba(0,0,0,0.10);
    border-right:none;
    border-top: none;
    /* &:first-child {
        border-top:1px solid rgba(0,0,0,0.10);
    } */
`]))),Qt=`
    float:left;
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color:rgba(0,0,0,0.85)
`,kt=f.ZP.div(K||(K=(0,v.Z)([`
    width : `,`;
    height:40px;
    line-height:40px;
    border-right: 1px solid rgba(0,0,0,0.10);
    `,`
`])),function(A){var R=A.gLen;return rt(R)},Qt),ne=(0,f.ZP)(kt)(Nt||(Nt=(0,v.Z)([`
    padding-left:36px;
    height:38px;
    line-height:38px;
    font-family: PingFangSC-Regular;
    color:rgba(0,0,0,0.65);
`]))),xt=f.ZP.div(Yt||(Yt=(0,v.Z)([`
    height:38px;
    background:#fff;
    border: 1px solid rgba(0,0,0,0.10);
    border-top:none;
    border-right:none;
`]))),y=f.ZP.div(d||(d=(0,v.Z)([`
    width : `,`;
    height:40px;
    line-height:40px;
    padding-left:16px;
    border-right: 1px solid rgba(0,0,0,0.10);
    `,`
`])),function(A){var R=A.gLen;return Ot(R)},Qt),Rt=(0,f.ZP)(y)(yt||(yt=(0,v.Z)([`
    height:38px;
    line-height:38px;
`]))),bt=(0,f.ZP)(u.Z)(At||(At=(0,v.Z)([`
    cursor:pointer;
    padding:13px 0px 13px 8px;

`])))},39632:function(Pt,L,t){"use strict";t.d(L,{F:function(){return O}});var o=t(22385),x=t(89456),T=t(13062),p=t(71230),v=t(89032),f=t(15746),u=t(20310),s=t(67294),E=t(1870),e=t(16917),i=t(12788),a=t(85893),r,n,l,_,b,C=i.ZP.span(r||(r=(0,u.Z)([`
    color: rgba(0,0,0,0.65);
`]))),U=i.ZP.div(n||(n=(0,u.Z)([`
    width: 320px;
    height: 200px;
    border: 1px solid #ccc;
`]))),nt=i.ZP.div(l||(l=(0,u.Z)([`
    height: 40px;
    line-height: 20px;
`]))),H=i.ZP.span(_||(_=(0,u.Z)([`
    height: 22px; 
    width: 88px;
    text-align: center;
    background: #0089FF; 
    border-radius: 4px;
    color: #fff;
    float: right;
    margin: 8px 8px 0 0;
`]))),I=i.ZP.div(b||(b=(0,u.Z)([`
    border-right: 1px solid #ccc;
    height: 150px;
    padding-left: 12px;
`]))),O=function(){return(0,a.jsx)(x.Z,{color:"#fff",overlayStyle:{minWidth:350},title:(0,a.jsxs)(C,{children:[(0,a.jsx)(e._H,{id:"analysis.differentiation.info"}),(0,a.jsx)("br",{}),(0,a.jsx)(e._H,{id:"analysis.rules.as.follows"}),(0,a.jsx)("br",{}),(0,a.jsxs)(U,{children:[(0,a.jsx)(p.Z,{children:(0,a.jsx)(f.Z,{span:16,children:(0,a.jsx)(nt,{children:(0,a.jsx)(H,{children:(0,a.jsx)(e._H,{id:"analysis.benchmark.group"})})})})}),(0,a.jsxs)(p.Z,{children:[(0,a.jsx)(f.Z,{span:8,children:(0,a.jsx)(I,{style:{paddingLeft:0,textAlign:"center"},children:(0,a.jsx)("span",{style:{paddingTop:60,display:"block"},children:(0,a.jsx)(e._H,{id:"analysis.from.top.to.bottom"})})})}),(0,a.jsx)(f.Z,{span:8,children:(0,a.jsxs)(I,{children:[(0,a.jsx)("p",{children:"pass"}),(0,a.jsx)("p",{children:"fail"}),(0,a.jsx)("p",{children:"fail"}),(0,a.jsx)("p",{children:"pass"})]})}),(0,a.jsx)(f.Z,{span:8,children:(0,a.jsxs)(I,{style:{borderRight:"none"},children:[(0,a.jsx)("p",{children:"fail"}),(0,a.jsx)("p",{children:"pass"}),(0,a.jsx)("p",{children:"fail"}),(0,a.jsx)("p",{children:"pass"})]})})]})]})]}),children:(0,a.jsx)(E.Z,{})})}},66886:function(Pt,L,t){"use strict";var o=t(11849),x=t(49111),T=t(19650),p=t(402),v=t(97272),f=t(22385),u=t(89456),s=t(67294),E=t(16917),e=t(56304),i=t(80272),a=t(14552),r=t(80015),n=t(85893),l=function(b){var C=b.envData,U=b.group,nt=b.isData,H=b.enLocale,I=function(F){var G=F.is_group,Ct=F.is_baseline,w=F.tag;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(T.Z,{children:[G&&(0,n.jsx)(u.Z,{title:(0,n.jsx)(E._H,{id:"analysis.benchmark.group"}),children:(0,n.jsx)(e.r,{style:{marginRight:4,marginTop:17,width:10,height:14}})}),Ct?(0,n.jsxs)(u.Z,{title:(0,n.jsx)(E._H,{id:"analysis.baseline.group"}),children:[(0,n.jsx)(i.r,{style:{marginRight:4,marginTop:17,width:10,height:14}}),(0,n.jsxs)(v.Z.Text,{children:["\uFF08",(0,n.jsx)(E._H,{id:"analysis.test.baseline"}),"\uFF09"]})]}):null]}),(0,n.jsx)(a.Z,{title:w,width:"calc(100% - 130px)"})]})};return(0,n.jsx)(n.Fragment,{children:Array.isArray(C)&&C.map(function(O,F){return nt?(0,n.jsx)(r.Y0,{gLen:U,children:(0,n.jsx)(I,(0,o.Z)({},O))},F):(0,n.jsx)(r.xM,{gLen:U,enLocale:H,children:(0,n.jsx)(I,(0,o.Z)({},O))},F)})})};L.Z=l},43387:function(Pt,L,t){"use strict";t.d(L,{G:function(){return x},g:function(){return T}});var o=t(67294),x=(0,o.createContext)(null),T=function(){return(0,o.useContext)(x)}},13538:function(Pt,L,t){"use strict";t.d(L,{ec:function(){return ee},_r:function(){return St},Mz:function(){return Qt},Z7:function(){return kt},LX:function(){return ne},TZ:function(){return xt},gm:function(){return y},v1:function(){return Rt},_J:function(){return R},eG:function(){return wt},qu:function(){return se},I$:function(){return ae},qO:function(){return de},z$:function(){return ce},pF:function(){return dt},sK:function(){return V},ZA:function(){return Ut},vk:function(){return Vt},b1:function(){return Oe},cL:function(){return Ce},b_:function(){return ye},ef:function(){return Ze},x4:function(){return De},ER:function(){return Me},KP:function(){return ot},$w:function(){return lt},DK:function(){return Et},i1:function(){return vt},HA:function(){return gt},VK:function(){return re},hV:function(){return oe},HQ:function(){return Le},QK:function(){return Te},Qz:function(){return Re},dg:function(){return me},Xb:function(){return xe},Rr:function(){return fe},iY:function(){return pe},Gh:function(){return be},jI:function(){return he},JI:function(){return Ae},gb:function(){return We},yO:function(){return Fe},h$:function(){return Se},h:function(){return Ge},iM:function(){return ze},uP:function(){return He},lu:function(){return Ne},Km:function(){return Ie},Lc:function(){return Ke},Qq:function(){return Ye},GH:function(){return $e},ly:function(){return Je},bH:function(){return Qe},TG:function(){return Ve},Hy:function(){return Xe},j3:function(){return ke},r0:function(){return qe},Ll:function(){return tn},WF:function(){return en},KW:function(){return nn},LQ:function(){return rn}});var o=t(36017),x=t(35247),T=t(22385),p=t(89456),v=t(13062),f=t(71230),u=t(20310),s=t(12788),E=t(54549),e=t(25782),i,a,r,n,l,_,b,C,U,nt,H,I,O,F,G,Ct,w,h,Gt,z,st,tt,ct,Kt,_t,jt,ht,Bt,K,Nt,Yt,d,yt,At,Wt,Xt,Ft,X,N,et,zt,Lt,ft,mt,Zt,Ht,qt,$t,Jt,Dt,at,rt,Ot,Tt,pt,Z,c,P,D,S,M,q,j,J,it,Y,B,ut,te,ee=s.ZP.div(i||(i=(0,u.Z)([`
    width: 100%;
    height: `,`px;
    position: relative;
    display: flex;
    background: #f5f5f5;
    //padding-bottom: 56px;
`])),function(m){var g=m.height;return g}),St=s.ZP.div(a||(a=(0,u.Z)([`
    width: `,`;
    height: 100%;
    padding-left: 20px;
    padding-right: 20px;
    overflow: auto;
    padding-bottom: 20px;
`])),function(m){var g=m.collapsed;return g?"100%":"calc(100% - 200px)"}),Qt=(0,s.ZP)(f.Z)(r||(r=(0,u.Z)([`
    width:1200px;
    margin:0 auto !important;
    height:600px;
`]))),kt=s.ZP.div(n||(n=(0,u.Z)([`
    height:100%;
    width:100%;

    overflow-y:auto;
    overflow-x:hidden;
    .ant-tree .ant-tree-node-content-wrapper.ant-tree-node-selected {
        background-color:#fff;
    }
    .ant-tree .ant-tree-node-content-wrapper:hover {
        background-color:#fff;
    }
    .ant-tree-switcher { width : 0;}

    .ant-tree .ant-tree-treenode {
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    #left-catalog-wrapper .spaceWarpper .ant-space-item .markSpace .toc-selected {
        color: #1890FF;
    }
`]))),ne=s.ZP.span(l||(l=(0,u.Z)([`
    position: absolute;
    cursor: pointer;
    top: 10px; 
    right: -8px;
    width: 12px;
    height: 70px;
    z-index:999;
`]))),xt=s.ZP.span(_||(_=(0,u.Z)([`
    position: absolute;
    left: 79%;
    top: 54%;
    transform: translate(-50%, -50%);
    display: flex;
    font-size: 8px ;
    cursor : pointer;
`]))),y=s.ZP.div(b||(b=(0,u.Z)([`
    width: `,`px;
    height: 100%;
    background: #fff;
    position: relative;
    .ant-typography { cursor : pointer; }
    `,` {
        `,`
    }
`])),function(m){var g=m.collapsed;return g?0:200},kt,function(m){var g=m.collapsed;return g?"":"padding:16px 12px 12px 26px;"}),Rt=s.ZP.div(C||(C=(0,u.Z)([`
    margin-bottom: 24px;
`]))),bt=s.ZP.div(U||(U=(0,u.Z)([`
    width:1px;
    background:#e5e5e5;
    margin-right:13px;
`]))),A=function(g){return g+3+"px"},R=s.ZP.div(nt||(nt=(0,u.Z)([`
    height:10px;
    width:10px;
    border-radius:50%;
    background:#fff;
    border:1px solid #e5e5e5;
    position:absolute;
    left:-5px;
    top:`,`;
`])),function(m){var g=m.count;return A(g)}),wt=s.ZP.div(H||(H=(0,u.Z)([`
    height:4px;
    width:4px;
    border-radius:50%;
    background:#1890FF;
    margin: 25% auto;
`]))),se=s.ZP.div(I||(I=(0,u.Z)([`
    //margin-top:8px;
    padding-left:20px;
`]))),ve=(0,s.ZP)(p.Z)(O||(O=(0,u.Z)([`
    max-width: 540px !important;
    .ant-tooltip-inner {
        max-width: 540px;
        max-height: 360px;
        overflow-y: scroll;
    }
`]))),ae=(0,s.ZP)(x.Z)(F||(F=(0,u.Z)([`
    height:22px;
    margin:14px 0;
    position:relative;
`]))),de=s.ZP.span(G||(G=(0,u.Z)([`
    cursor:pointer;
`]))),ce=(0,s.ZP)(de)(Ct||(Ct=(0,u.Z)([`
    display:inline-block;
    max-width:940px;    
    position:absolute;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
`]))),_e=s.ZP.span(w||(w=(0,u.Z)([`
    position:absolute;
    right:0px;
    top:`,`;

`])),function(m){var g=m.btnState;return g?"-5px":0}),It=function(g){return g==1?"50%":"110px"},ie=function(g){return g==1?"50%":"calc( (100% - 110px) / ".concat(g,")")},ue=`
    line-height:48px; 
    float:left;
    padding-left:16px;
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: #000000;
    border-bottom:1px solid rgba(0,0,0,0.10);
    border-right:1px solid rgba(0,0,0,0.10);
`,W=`
    line-height:76px; 
    float:left;
    padding-left:16px;
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: #000000;
`,Q=`
    min-height:40px; 
    height:40px; 
    line-height:20px;
    border-right:1px solid rgba(0,0,0,0.10);
    //text-align:center;
    text-align:left;
    padding:0 9px; 
    .logo{
        font-style:normal;
        color:rgba(0,0,0,0.65);
        font-size:12px;
    }
    .all{
        font-size:20px;
        color:#649FF6;
    }
    .up{
        font-size:20px;
        color:#81BF84;
    }
    .down{
        font-size:20px;
        color:#C84C5A;
    }
`,dt=s.ZP.div(h||(h=(0,u.Z)([`
    `,`
    width : `,`;
    border-right:1px solid rgba(0,0,0,0.10);
    `,`
`])),ue,function(m){var g=m.gLen;return It(g)},function(m){var g=m.gLen;return g<=1&&"border-bottom: 0;"}),V=s.ZP.div(Gt||(Gt=(0,u.Z)([`
    `,` 
    display:flex;     
    width : `,`;
    `,`
    &:last-child {
        border-right:none;
    }
`])),ue,function(m){var g=m.gLen;return ie(g)},function(m){var g=m.gLen;return g<=1&&"border-bottom: 0;"}),Ut=s.ZP.div(z||(z=(0,u.Z)([`
    height:48px;
    display:flex;
`]))),Vt=s.ZP.div(st||(st=(0,u.Z)([`
    `,`
    width : `,`;
    border-right:1px solid rgba(0,0,0,0.10);
    border-bottom:1px solid rgba(0,0,0,0.10);
`])),W,function(m){var g=m.gLen;return It(g)}),Oe=s.ZP.div(tt||(tt=(0,u.Z)([`
    `,`
    width : `,`;
    border-right:1px solid rgba(0,0,0,0.10);
    border-bottom:1px solid rgba(0,0,0,0.10);
    &:last-child{
        border-right:none;
    }
`])),W,function(m){var g=m.gLen;return ie(g)}),Ce=s.ZP.span(ct||(ct=(0,u.Z)([`
    `,`
    &:last-child{
        border-right:none;
    }
`])),Q),ye=(0,s.ZP)(Vt)(Kt||(Kt=(0,u.Z)([`
    border-bottom:none;
`]))),Ze=(0,s.ZP)(Oe)(_t||(_t=(0,u.Z)([`
    border-bottom:none;
`]))),De=s.ZP.div(jt||(jt=(0,u.Z)([`
    height:76px;
`]))),Me=s.ZP.div(ht||(ht=(0,u.Z)([`
    border: 1px solid rgba(0,0,0,0.10);
    background:#fff;
`]))),ot=s.ZP.div(Bt||(Bt=(0,u.Z)([`
    height:auto;
    background:#fff;
    padding:16px 20px;
    margin-bottom:16px;
`]))),lt=s.ZP.div(K||(K=(0,u.Z)([`
    color:rgba(0,0,0,0.85);
    font-size:14px;
    margin-bottom:8px;
    font-family:PingFangSC-Medium;
`]))),Et=s.ZP.div(Nt||(Nt=(0,u.Z)([`
    font-size:16px;
    font-weight:bold;
    color:rgba(0,0,0,0.85); 
    margin-bottom: 16px;
    .line{
        width:2px;
        height:16px;
        background:#1890FF;
        margin: 4px 8px 4px -10px;
        float:left;
    }
`]))),$=function(g){return g==1?"calc( 100% - 110px )":"calc( (100% - 110px) / ".concat(g,")")},vt=s.ZP.div(Yt||(Yt=(0,u.Z)([`
    width:110px;
    float:left;
    padding-left:16px;
    border-right:1px solid rgba(0,0,0,0.10);
`]))),k=s.ZP.div(d||(d=(0,u.Z)([`
    width: `,`;
    display:flex;
    padding-left:13px;
    border-right:1px solid rgba(0,0,0,0.10);
`])),function(m){var g=m.gLen;return $(g)}),gt=s.ZP.div(yt||(yt=(0,u.Z)([`
    border: 1px solid rgba(0,0,0,0.10);
    height:48px;
    line-height:48px;
    color:#000;
    font-weight:500;
    margin-bottom:13px;
    border-right:none;
    display:flex;
`]))),Mt=s.ZP.div(At||(At=(0,u.Z)([`
    height:57px;
    line-height:57px;
    padding-left:5px;
`]))),re=s.ZP.div(Wt||(Wt=(0,u.Z)([`
    //border:1px solid rgba(0,0,0,0.1);
    background-color: #FDFEFF;
    /* margin-top: 11px; */
    border-bottom:none;
`]))),oe=(0,s.ZP)(f.Z)(Xt||(Xt=(0,u.Z)([`
    min-height:40px;
    border:1px solid rgba(0,0,0,0.1);
    border-bottom:none;
    &:last-child{
        border-bottom:1px solid rgba(0,0,0,0.1);
    }
`]))),Le=s.ZP.div(Ft||(Ft=(0,u.Z)([`
    width:75px;
    padding-top:8px;
    text-align:center;
    color:rgba(0,0,0,0.85);
    font-family:PingFangSC-Medium;
    vertical-align: top;
`]))),Te=s.ZP.div(X||(X=(0,u.Z)([`
    width:calc(100% - 75px);
    border-left:1px solid rgba(0,0,0,0.1);
    & > div {
        width:100%;
        padding:8px 20px 8px 24px;
        max-height: 300px;
        overflow-y: auto;
    }
`]))),ge=`
    float:left;
    font-size:14px;
    padding-left:16px;
    color:rgba(0,0,0,0.85);
    font-family: PingFangSC-Medium;
    overflow: hidden;
    //text-overflow: ellipsis;
    white-space: nowrap;
`,Re=s.ZP.span(N||(N=(0,u.Z)([`
    padding:0 9px;
    .normal{
        color: rgba(0,0,0,1);
        font-size: 14px;
   }
   .invalid{
        color: rgba(0,0,0,0.25);
        font-size: 14px;
   }
   .increase{
        font-size: 14px;
        color: #81BF84;
    }
    .decline{
        font-size: 14px;
        color: #C84C5A;
    }
`]))),me=(0,s.ZP)(E.Z)(et||(et=(0,u.Z)([`
    display:inline-block;
    position:absolute;
    right:20px;
    top:16px;
`]))),xe=s.ZP.div(zt||(zt=(0,u.Z)([`
    height: 24px;
    width: 64px;
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: rgba(0,0,0,0.85);
    line-height: 24px;
    margin:16px 0;
`]))),fe=s.ZP.div(Lt||(Lt=(0,u.Z)([`
    border:1px solid rgba(0,0,0,0.1);
    border-radius:4px;
    border-top:2px solid #1890FF;
    //padding-bottom: 24px;
`]))),pe=s.ZP.div(ft||(ft=(0,u.Z)([`
    height:47px;
    line-height:47px;
    padding-left:5px;
    background: rgba(0,0,0,0.02);
    position:relative;
`]))),be=s.ZP.div(mt||(mt=(0,u.Z)([`
    height: `,`;
    line-height:`,`;
    padding-left:5px;
    background: `,`;
    margin-bottom:`,`;
    position:relative;
`])),function(m){var g=m.isGroup;return g?"57px":"47px"},function(m){var g=m.isGroup;return g?"57px":"47px"},function(m){var g=m.isGroup;return g?"#fff":"rgba(0,0,0,0.02)"},function(m){var g=m.isGroup;return g?"0px":"17px"}),Be=(0,s.ZP)(pe)(Zt||(Zt=(0,u.Z)([`
    margin-bottom:17px;
`]))),he=s.ZP.span(Ht||(Ht=(0,u.Z)([`
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: rgba(0,0,0,0.85);
    margin-left:5px;
`]))),Ae=s.ZP.span(qt||(qt=(0,u.Z)([`
    display:inline-block;
    position:absolute;
    right:16px;
`]))),We=s.ZP.div($t||($t=(0,u.Z)([`
    height:auto;
    background:rgba(0,0,0,0.03);
    margin:0 16px 18px 16px;
    padding-bottom: 16px;
`]))),Fe=s.ZP.div(Jt||(Jt=(0,u.Z)([`
    height:41px;
    line-height:41px;
    padding-left:16px;
    font-size:14px;
    font-family: PingFangSC-Medium;
    color:rgba(0,0,0,0.85);
    background:rgba(0,0,0,0.04);
    position:relative;
    margin-top: 8px;
`]))),Se=s.ZP.div(Dt||(Dt=(0,u.Z)([`
    margin: 10px 0px 3px 0px;
    height:22px;
    padding: 0px 15px 0px 17px;
    display:flex;
`]))),Ee=function(g){return g==1?"50%":"360px"},Pe=function(g,le){return g==1?le?"calc( 50% - 39px )":"50%":le?"calc( (100% - 399px) / ".concat(g,")"):"calc( (100% - 360px) / ".concat(g,")")},Ge=s.ZP.div(at||(at=(0,u.Z)([`
    //float:left;
    font-size:12px;
    color: rgba(0,0,0,0.45);
    width : `,`;
`])),function(m){var g=m.gLen;return Ee(g)}),ze=s.ZP.div(rt||(rt=(0,u.Z)([`
    //float:left;
    font-size:12px;
    color: rgba(0,0,0,0.45);
    width : `,`;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &:last-child {
        border-right:none;
    }
`])),function(m){var g=m.gLen,le=m.btnState;return Pe(g,le)}),He=s.ZP.div(Ot||(Ot=(0,u.Z)([`
    border-top: 1px solid rgba(0,0,0,0.10);
    margin: 0px 15px 0px 17px;
    /* border-top:1px solid rgba(0,0,0,0.10); */
`]))),Ne=s.ZP.div(Tt||(Tt=(0,u.Z)([`
    height:40px;
    background:#fafafa;
    border: 1px solid rgba(0,0,0,0.10);
    border-right:none;
    border-top: none;
    /* &:first-child {
        border-top:1px solid rgba(0,0,0,0.10);
    } */
`]))),we=`
    float:left;
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color:rgba(0,0,0,0.85)
`,Ie=s.ZP.div(pt||(pt=(0,u.Z)([`
    width : `,`;
    height:40px;
    line-height:40px;
    border-right: 1px solid rgba(0,0,0,0.10);
    `,`
    
`])),function(m){var g=m.gLen;return Ee(g)},we),Ke=s.ZP.div(Z||(Z=(0,u.Z)([`
    width : `,`;
    height:40px;
    line-height:40px;
    padding-left:16px;
    border-right: 1px solid rgba(0,0,0,0.10);
    `,`
`])),function(m){var g=m.gLen,le=m.btnState;return Pe(g,le)},we),Ye=(0,s.ZP)(e.Z)(c||(c=(0,u.Z)([`
    cursor:pointer;
    padding:13px 0px 13px 8px;
    margin-right: 12px;

`]))),$e=s.ZP.div(P||(P=(0,u.Z)([`
    height:38px;
    background:#fff;
    border: 1px solid rgba(0,0,0,0.10);
    border-top:none;
    border-right:none;
`]))),Je=(0,s.ZP)(Ie)(D||(D=(0,u.Z)([`
    padding-left:36px;
    height:38px;
    line-height:38px;
    font-family: PingFangSC-Regular;
    color:rgba(0,0,0,0.65);
`]))),Qe=(0,s.ZP)(Ke)(S||(S=(0,u.Z)([`
    height:38px;
    line-height:38px;
   
`]))),Ve=s.ZP.div(M||(M=(0,u.Z)([`
    height:38px;
    line-height:38px;
    background:rgba(0,0,0,0.02);
`]))),je=`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`,Xe=s.ZP.div(q||(q=(0,u.Z)([`
    width : 39px;
    float:left;
    border-right: 1px solid rgba(0,0,0,0.10);
    cursor:pointer;
    height: `,`;
    position: relative;
    .remove{
        display:block;
        `,`
    }
    .remove_active {
        display:none;
        `,`
    }
    :hover {
        .remove_active {
            display:block;
            `,`
        }
        .remove {
            display:none;
            `,`
        }
    }
    
`])),function(m){var g=m.empty;return g?"38px":"40px"},je,je,je,je),ke=s.ZP.div(j||(j=(0,u.Z)([`
    width : `,`;
    `,`
`])),function(m){var g=m.gLen;return Ee(g)},ge),qe=s.ZP.div(J||(J=(0,u.Z)([`
    width : `,`;
    `,`
`])),function(m){var g=m.gLen,le=m.btnState;return Pe(g,le)},ge),tn=(0,s.ZP)(dt)(it||(it=(0,u.Z)([`
    width : `,`;
     border-bottom:none;
`])),function(m){var g=m.gLen;return Ee(g)}),an=(0,s.ZP)(V)(Y||(Y=(0,u.Z)([`
    width : `,`;
    display:flex;
    border-bottom:none;
    `,`
`])),function(m){var g=m.gLen,le=m.btnState;return Pe(g,le)},ge),en=s.ZP.div(B||(B=(0,u.Z)([`
    height:38px;
    line-height:38px;
    background:#ffffff;
    border-bottom: 1px solid rgba(0,0,0,0.10);
    &:last-child{
        border-bottom:none;
    }
`]))),Ue=`
    float:left;
    font-size:14px;
    color:rgba(0,0,0,0.65);
    font-family:PingFangSC-Regular;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,nn=s.ZP.div(ut||(ut=(0,u.Z)([`
    width : `,`;
    padding-left:36px;
    border-right: 1px solid rgba(0,0,0,0.10);
    `,`
`])),function(m){var g=m.gLen;return Ee(g)},Ue),rn=s.ZP.div(te||(te=(0,u.Z)([`
    width : `,`;
    padding-left:16px;
    `,`
    border-right: 1px solid rgba(0,0,0,0.10);
    &:last-child{
        border-right:none;
    }
`])),function(m){var g=m.gLen,le=m.btnState;return Pe(g,le)},Ue)},69569:function(Pt,L,t){"use strict";t.d(L,{u:function(){return w},i:function(){return h}});var o=t(402),x=t(97272),T=t(11849),p=t(39428),v=t(34792),f=t(48086),u=t(3182),s=t(74379),E=t(38648),e=t(2824),i=t(20310),a=t(47673),r=t(4107),n=t(67294),l=t(8212),_=t(20009),b=t(16917),C=t(24480),U=t(12788),nt=t(96486),H=t.n(nt),I=t(50310),O=t(85893),F,G=r.Z.TextArea,Ct=(0,U.ZP)(G)(F||(F=(0,i.Z)([`
    width: 100%;
`]))),w=function(z){var st=z.name,tt=z.field,ct=z.suite,Kt=z.style,_t=z.space,jt=_t===void 0?"0px":_t,ht=z.fontStyle,Bt=ht===void 0?{fontSize:14,fontFamily:"PingFangSC-Regular",color:"rgba(0,0,0,0.65)",whiteSpace:"pre-wrap"}:ht,K=z.defaultHolder,Nt=z.creator,Yt=(0,_.UO)(),d=Yt.report_id,yt=(0,b.md)(),At=(0,_.TH)(),Wt=At.pathname,Xt=(0,b.YB)(),Ft=Xt.formatMessage,X=(0,n.useState)(!1),N=(0,e.Z)(X,2),et=N[0],zt=N[1],Lt=(0,n.useState)(st||""),ft=(0,e.Z)(Lt,2),mt=ft[0],Zt=ft[1],Ht=function(at,rt){E.default.success({message:"".concat(at,"\uFF1A").concat(rt),placement:"bottomRight"})},qt=function(at){var rt={test_env:Ft({id:"report.test_env.save"}),test_description:Ft({id:"report.test_description.save"}),test_conclusion:Ft({id:"report.test_conclusion.save"})};return rt[at]},$t=function(){var Dt=(0,u.Z)((0,p.Z)().mark(function at(){var rt,Ot,Tt,pt,Z,c;return(0,p.Z)().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return rt=ct.item_suite_id,Ot=ct.suite_name,Tt={item_suite_id:rt,report_id:d},Tt[tt]=mt,D.next=5,(0,I.ow)(Tt);case 5:pt=D.sent,Z=pt.code,c=pt.msg,Z===200?(Ht(Ot,qt(tt)),zt(!1)):f.default.error(c);case 9:case"end":return D.stop()}},at)}));return function(){return Dt.apply(this,arguments)}}(),Jt=function(at){return H().isNull(at)||H().isUndefined(at)?Ft({id:"report.not.filled.in"}):at||"-"};return~Wt.indexOf("/test_create_report")?(0,O.jsx)("div",{style:(0,T.Z)({width:"100%"},Kt),children:(0,O.jsx)(x.Z.Text,{style:Bt,children:Jt(mt)})}):et?(0,O.jsx)("div",{style:{marginBottom:jt},children:(0,O.jsx)(Ct,{autoComplete:"off",size:"small",placeholder:K,style:(0,T.Z)({padding:"10px"},Bt),value:mt,onChange:function(at){return Zt(at.target.value)},onBlur:$t})}):(0,O.jsxs)("div",{style:(0,T.Z)({width:"100%"},Kt),children:[(0,O.jsx)(x.Z.Text,{style:Bt,children:Jt(mt)}),(0,O.jsx)(b.Nv,{accessible:yt.WsTourist(),children:(0,O.jsx)(b.Nv,{accessible:yt.WsMemberOperateSelf(Nt),fallback:(0,O.jsx)(l.Z,{onClick:function(){return(0,C.WR)()},style:{paddingLeft:10}}),children:(0,O.jsx)(l.Z,{style:{paddingLeft:10},onClick:function(){return zt(!0)}})})})]})},h=function(z){var st=z.name,tt=z.rowKey,ct=z.btn,Kt=ct===void 0?!1:ct,_t=z.dataSource,jt=z.setDataSource,ht=z.defaultHolder,Bt=(0,b.YB)(),K=Bt.formatMessage,Nt=(0,n.useState)(""),Yt=(0,e.Z)(Nt,2),d=Yt[0],yt=Yt[1];(0,n.useEffect)(function(){yt(st)},[st]);var At=function(){jt(_t.map(function(X){if(X.is_group){X.rowKey==tt&&(X.name=d);var N=X.list.map(function(et){return et.rowKey==tt&&(et.name=d),(0,T.Z)({},et)});return(0,T.Z)((0,T.Z)({},X),{},{list:N})}else return X.rowKey==tt&&(X.name=d),(0,T.Z)({},X)}))},Wt={fontSize:14,fontFamily:"PingFangSC-Medium",color:"rgba(0,0,0,0.85)"},Xt=function(X){return H().isNull(X)||H().isUndefined(X)?K({id:"report.not.filled.in"}):X};return(0,O.jsx)(O.Fragment,{children:Kt?(0,O.jsx)(r.Z,{autoComplete:"off",size:"small",placeholder:ht,style:(0,T.Z)({padding:"6px 8px 6px 8px",width:"93%"},Wt),value:d,onChange:function(X){return yt(X.target.value)},onBlur:At}):(0,O.jsx)(x.Z.Text,{style:Wt,children:Xt(d)})})}},56079:function(Pt,L,t){"use strict";t.d(L,{Z:function(){return pt}});var o=t(49111),x=t(19650),T=t(22385),p=t(89456),v=t(11849),f=t(39428),u=t(3182),s=t(2824),E=t(402),e=t(97272),i=t(13062),a=t(71230),r=t(20310),n=t(67294),l=t(16917),_=t(12788),b,C=["svgRef","title"];function U(){return U=Object.assign?Object.assign.bind():function(Z){for(var c=1;c<arguments.length;c++){var P=arguments[c];for(var D in P)Object.prototype.hasOwnProperty.call(P,D)&&(Z[D]=P[D])}return Z},U.apply(this,arguments)}function nt(Z,c){if(Z==null)return{};var P=H(Z,c),D,S;if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(Z);for(S=0;S<M.length;S++)D=M[S],!(c.indexOf(D)>=0)&&(!Object.prototype.propertyIsEnumerable.call(Z,D)||(P[D]=Z[D]))}return P}function H(Z,c){if(Z==null)return{};var P={},D=Object.keys(Z),S,M;for(M=0;M<D.length;M++)S=D[M],!(c.indexOf(S)>=0)&&(P[S]=Z[S]);return P}var I=function(c){var P=c.svgRef,D=c.title,S=nt(c,C);return n.createElement("svg",U({width:"10px",height:"14px",viewBox:"0 0 10 14",ref:P},S),D?n.createElement("title",null,D):null,b||(b=n.createElement("g",{id:"\\u9875\\u9762-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},n.createElement("g",{id:"3\\u4E2Agroup\\u76EE\\u5F55\\u6536\\u8D77",transform:"translate(-263.000000, -767.000000)",fillRule:"nonzero"},n.createElement("g",{id:"\\u7F16\\u7EC4-2",transform:"translate(119.000000, 686.000000)"},n.createElement("g",{id:"\\u7F16\\u7EC4-8",transform:"translate(21.000000, 64.000000)"},n.createElement("g",{id:"basegroup",transform:"translate(120.000000, 16.000000)"},n.createElement("rect",{id:"\\u77E9\\u5F62",fill:"#FFFFFF",opacity:0,x:0,y:0,width:16,height:16,rx:2}),n.createElement("path",{d:"M4,1 C3.72417824,1.00077249 3.50077249,1.22417824 3.5,1.5 L3.5,14.5 C3.5,14.7761424 3.72385763,15 4,15 C4.27614237,15 4.5,14.7761424 4.5,14.5 L4.5,1.5 C4.49922751,1.22417824 4.27582176,1.00077249 4,1 L4,1 Z M4.5,2 L12.5,6.5 L4.5,11",id:"\\u5F62\\u72B6",fill:"#8c8c8c"}))))))))},O=n.forwardRef(function(Z,c){return n.createElement(I,U({svgRef:c},Z))}),F=t.p+"static/GaryBaseIcon.c2ae5d28.svg",G=t(14552),Ct=t(51017),w=t(63132),h=t(85893),Gt=function(c){var P=c.setLegend,D=c.name,S=c.envData,M=c.data,q=c.chartType,j=c.loading,J=(0,n.useRef)();return(0,n.useEffect)(function(){var it=M.length>4?parseInt(parseFloat(4/M.length)*100):M.length,Y=w.init(J.current);Y.clear(),Y.setOption({title:{subtext:"more is better"},grid:{left:40,right:8},animation:!1,xAxis:{data:M,axisTick:{show:!1},axisLabel:{interval:0,width:110,formatter:function(ut){return ut.length>16?ut.substr(0,16)+"...":ut}}},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!0,lineStyle:{type:"dashed"}},axisLabel:{showMinLabel:!0,showMaxLabel:!0,fontSize:10},boundaryGap:!0,min:0,max:5e3},dataZoom:[{show:q!=="1",realtime:!0,start:0,end:it,left:"20%",height:8,right:"20%"},{type:"inside",realtime:!0,zoomOnMouseWheel:!1,start:0,end:it}]})},[q]),(0,h.jsx)("div",{ref:J,style:{width:q!=="1"?"100%":268,height:376,display:"inline-block",flexShrink:0}})},z=Gt,st=t(39954),tt=function(c){var P={normal:"rgba(0,0,0,1)",increase:"#81BF84",decline:"#C84C5A",invalid:"rgba(0,0,0,0.25)"};return P[c]},ct=function(c){var P="";switch(c){case"increase":P="more is better";break;case"\u4E0A\u5347":P="more is better";break;case"decline":P="less is better";break;case"\u4E0B\u964D":P="less is better";break;default:P="-";break}return P},Kt=function(c){var P=c.callBackColor,D=c.name,S=c.envData,M=c.chartType,q=c.time,j=c.data,J=(0,n.useRef)(),it=(0,n.useRef)();(0,n.useEffect)(function(){var B;(B=it.current)===null||B===void 0||B.dispatchAction({name:D,type:"legendToggleSelect"})},[D]);var Y=(0,n.useMemo)(function(){for(var B={series:[],xAxisData:[],legData:[],subText:[],dataZoom_end:100},ut=[],te=[],ee=0,St=0,Qt=[],kt=S.compare_groups,ne=0;ne<kt.length;ne++)Qt.push(kt[ne].tag);var xt=Qt.splice(0);if(xt.splice(S.base_index,0,S.base_group.tag),B.legData=B.legData.concat(xt),M=="1"){B.subText.push(j.direction);for(var y=j.compare_data,Rt=0;Rt<y.length;Rt++){var bt,A,R;ut.push({value:(bt=y[Rt])===null||bt===void 0?void 0:bt.test_value,compare_value:(A=y[Rt])===null||A===void 0?void 0:A.compare_value,compare_result:(R=y[Rt])===null||R===void 0?void 0:R.compare_result}),St=y.length}B.xAxisData.push(j.metric);for(var wt=0;wt<St;wt++)B.series.push({type:"bar",data:[{value:ut[wt].value,compare_value:ut[wt].compare_value,compare_result:ut[wt].compare_result}],name:B.legData[wt],barWidth:"10px",barGap:"80%",barCategoryGap:"40%",barMinHeight:1})}else{if(M=="2"){j.length>5&&(B.dataZoom_end=5/j.length*100);for(var se=0;se<j.length;se++)B.xAxisData.push(j[se].conf_name),B.subText.push(j[se].direction),St=j[se].compare_data.length,ee=j.length;for(var ve=function(Q){j==null||j.forEach(function(dt){var V;(V=dt.compare_data)===null||V===void 0||V.forEach(function(Ut,Vt){Vt===Q&&ut.push({value:Ut.test_value,compare_value:Ut.compare_value,compare_result:Ut.compare_result})})})},ae=0;ae<St;ae++)ve(ae)}if(M=="3"){var de;j.metric_list.length>5&&(B.dataZoom_end=5/j.metric_list.length*100);for(var ce=0,_e=j.metric_list;ce<_e.length;ce++)B.xAxisData.push(_e[ce].metric),St=_e[ce].compare_data.length,ee=_e.length;(de=j.metric_list)===null||de===void 0||de.forEach(function(W){var Q;(Q=W.compare_data)===null||Q===void 0||Q.forEach(function(dt){ut.push({value:dt.test_value,compare_value:dt.compare_value,compare_result:dt.compare_result,cv_threshold:W.cv_threshold,cmp_threshold:W.cmp_threshold})})})}for(var It=0,ie=ut.length;It<ie;It+=ee)te.push(ut.slice(It,It+ee));for(var ue=0;ue<St;ue++)B.series.push({type:"bar",data:te[ue],name:B.legData[ue],barWidth:"10px",barGap:"80%",barCategoryGap:"40%",barMinHeight:1})}return B},[j,M]);return(0,n.useEffect)(function(){var B=Y.series,ut=Y.subText,te=Y.xAxisData,ee=Y.legData,St=Y.dataZoom_end,Qt=q.reduce(function(xt,y){return xt+=y*2},0),kt={title:{subtext:M=="3"?"":ct(ut.toString())},grid:{left:40,right:8,bottom:M==="1"?"15%":"30%"},animation:!1,xAxis:{data:te,type:"category",nameLocation:"start",axisTick:{show:!1},axisLabel:{interval:0,formatter:function(y){for(var Rt=y.split(""),bt="",A=0,R;R=Rt[A++];)bt+=R,A%15||(bt+=`
`);return bt}}},legend:{data:ee,show:!1},tooltip:{trigger:M=="1"?"item":"axis",axisPointer:{type:"shadow"},confine:!0,show:!0,renderMode:"html",backgroundColor:"#fff",borderColor:"#fff",textStyle:{color:"rgba(0,0,0,0.65)",fontSize:14},appendToBody:!0,extraCssText:"box-shadow: 0 2px 8px 0 rgba(0,0,0,0.15);border-radius: 2px;padding:12px;z-index:9999",formatter:function(y){for(var Rt="",bt=0;bt<y.length;bt++){var A,R,wt;Rt+=`
                            <div style="display:flex;flex-wrap:wrap;">
                                <div style="width:8px;height:8px;border-radius:50%;background:`.concat(y[bt].color,`;margin-top:5px;"></div>
                                <div style="padding-left:9px;width:120px;word-break:break-all;white-space:normal;">`).concat(y[bt].seriesName,`</div>
                                <div style="padding-left:16px;">`).concat(y[bt].value||"-",`</div>
                                <div style="padding-left:9px;width:30px;">
                                    <i style="font-style:normal;color:`).concat(tt((A=y[bt].data)===null||A===void 0?void 0:A.compare_result)||"",`">
                                        `).concat(((R=y[bt].data)===null||R===void 0?void 0:R.compare_value)||"",`
                                        `).concat((0,st.PV)((wt=y[bt].data)===null||wt===void 0?void 0:wt.compare_result)||"",`
                                    </i>
                                </div>
                            </div>
                            `)}return M=="1"?`
                                <div style"width:auto;min-width:300px">
                                    <div style="display:flex;flex-warp:wrap">
                                        <div style="width:180px;word-break:break-all;white-space:normal;font-weight:bold;padding-right:5px">`.concat(j.metric,`</div>
                                        (`,"".concat((0,st.gt)(j.cv_threshold),"/").concat((0,st.gt)(j.cmp_threshold)),`)
                                    </div>
                                    <div style="display:flex;flex-warp:wrap">
                                        <div style="width:8px;height:8px;border-radius:50%;background:`).concat(y.color,`;margin-top:5px;"></div>
                                        <div style="padding-left:9px;width:120px;word-break:break-all;white-space:normal;">`).concat(y.seriesName,`</div>
                                        <div style="padding-left:16px;">`).concat(y.value||"-",`</div>
                                        <div style="padding-left:9px;">
                                            <i style="font-style:normal;color:`).concat(tt(y.data.compare_result)||"",`">
                                            `).concat(y.data.compare_value||"",`
                                            `).concat((0,st.PV)(y.data.compare_result)||"",`
                                            </i>
                                        </div>
                                    </div>
                                </div>`):M=="2"?`<div style="width:auto;min-width:300px">
                                    <div style="font-weight:bold">`.concat(y[0].name,`</div>
                                    `).concat(Rt,`
                                </div>`):`<div style="width:auto;min-width:300px">
                                    <div>
                                        <span style="font-weight:bold;padding-right:5px">`.concat(y[0].name,`</span>
                                        (`,"".concat((0,st.gt)(y[0].data.cv_threshold),"/").concat((0,st.gt)(y[0].data.cmp_threshold)),`)
                                    </div>
                                    `).concat(Rt,`
                                </div>
                               `)}},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1,inside:!0},splitLine:{show:!0,lineStyle:{type:"dashed"}},axisLabel:{showMinLabel:!0,showMaxLabel:!0,interval:0,fontSize:10,margin:2,formatter:function(y){return y>=1e4&&y<1e8&&(y=y/1e4+"\u4E07"),y>=1e8&&y<1e12&&(y=y/1e8+"\u4EBF"),y}},boundaryGap:!0},series:B,dataZoom:[{type:"slider",show:M!=="1",realtime:!0,start:0,end:St,handleSize:8,height:8},{type:"inside",realtime:!0,start:0,end:St,zoomOnMouseWheel:!1,moveOnMouseMove:!0,moveOnMouseWheel:!0,preventDefaultMouseMove:!1}]},ne=setTimeout(function(){var xt=null;try{xt=w==null?void 0:w.init(J.current,void 0,{renderer:"svg"})}catch(y){}xt&&(xt.setOption(kt),P(xt.getOption().color),it.current=xt)},Qt);return function(){ne&&clearTimeout(ne),it.current&&it.current.dispose()}},[Y]),(0,h.jsx)("div",{ref:J,style:{width:M!=="1"?"100%":268,height:340,display:"inline-block",flexShrink:0}})},_t=n.memo(Kt),jt,ht=_.ZP.div(jt||(jt=(0,r.Z)([`
    height:340px;
    width:100%;
    display: flex;
    overflow-x:scroll;
    overflow-y:hidden;
    flex-wrap: nowrap;
    flex-shrink: 0;
    background: `,`;
    margin-bottom:10px;
    &::-webkit-scrollbar { 
        /* \u9690\u85CF\u9ED8\u8BA4\u7684\u6EDA\u52A8\u6761 */
        -webkit-appearance: none;
    }
    &::-webkit-scrollbar:horizontal{
        /* \u8BBE\u7F6E\u6C34\u5E73\u6EDA\u52A8\u6761\u539A\u5EA6 */
        height: 8px;
    }
    &::-webkit-scrollbar-thumb { 
        border-radius: 3px; 
        // border: 2px solid rgba(255,255,255,.4); 
        background-color: rgba(0, 0, 0, .5);
    }
`])),function(Z){var c=Z.is_active;return c?"rgba(59,160,255,0.05)":""}),Bt=function(c){var P=c.callBackColor,D=c.legend,S=c.envData,M=c.chartData,q=c.time,j=c.is_active,J=c.chartType;return J==="1"?(0,h.jsx)(ht,{is_active:j,children:M.metric_list.length===0?(0,h.jsx)(z,{chartType:J,data:[""],is_active:j}):M.metric_list.map(function(it,Y){return(0,h.jsx)(_t,{callBackColor:P,name:D,envData:S,chartType:J,time:q.concat(Y),data:it})})}):(0,h.jsx)(ht,{is_active:j,children:JSON.stringify(M)==="{}"?(0,h.jsx)(z,{chartType:J,data:[""],is_active:j}):(0,h.jsx)(_t,{callBackColor:P,name:D,envData:S,chartType:J,time:q,data:M})})},K=function(c){var P=c.current,D=c.handleChartColor,S=c.legend,M=c.envData,q=c.loading,j=c.chartConf,J=c.chartType,it=(0,n.useMemo)(function(){return j&&j.map(function(Y,B){return(0,h.jsxs)("div",{id:"".concat(Y.conf_name,"-").concat(B),style:{width:"100%"},children:[(0,h.jsx)("div",{style:P==="".concat(Y.conf_name,"-").concat(B)?{background:"rgba(59,160,255,0.05)"}:{},children:(0,h.jsx)(e.Z.Title,{level:5,style:P==="".concat(Y.conf_name,"-").concat(B)?{color:"#1890FF"}:{},children:Y.conf_name})}),(0,h.jsx)(Bt,{callBackColor:D,legend:S,envData:M,loading:q,chartData:Y,time:[B],is_active:P==="".concat(Y.conf_name,"-").concat(B),chartType:J},Y==null?void 0:Y.conf_name)]},B)})},[P,S,q,j,J]);return it},Nt=K,Yt=t(20228),d=t(11382),yt=function(c){var P=c.current,D=c.handleChartColor,S=c.legend,M=c.envData,q=c.loading,j=c.chartMetric,J=c.chartType,it=(0,n.useMemo)(function(){return j&&(0,h.jsx)(h.Fragment,{children:JSON.stringify(j.metric_dic)==="{}"?(0,h.jsx)(z,{chartType:J,data:[""]}):j.metric_dic&&Object.keys(j.metric_dic).map(function(Y,B){return(0,h.jsxs)("div",{id:"".concat(Y,"-").concat(B),style:{width:"100%",overflow:"hidden"},children:[(0,h.jsx)("div",{style:P==="".concat(Y,"-").concat(B)?{background:"rgba(59,160,255,0.05)"}:{},children:(0,h.jsx)(e.Z.Title,{level:5,style:P==="".concat(Y,"-").concat(B)?{color:"#1890FF"}:{},children:Y})}),(0,h.jsx)(d.Z,{spinning:q,children:(0,h.jsx)(_t,{callBackColor:D,name:S,envData:M,chartType:J,time:[B],data:j.metric_dic[Y]})})]},B)})})},[P,S,q,j,J]);return it},At=yt,Wt=t(96486),Xt,Ft,X,N,et,zt,Lt,ft,mt,Zt=(0,_.ZP)(a.Z)(Xt||(Xt=(0,r.Z)([`
    width:100%;
`]))),Ht=(0,_.ZP)(Zt)(Ft||(Ft=(0,r.Z)([`
    margin-top:20px;
    border: 1px solid rgba(0,0,0,0.1);
`]))),qt=(0,_.ZP)(Zt)(X||(X=(0,r.Z)([`
    background:rgba(0,0,0,.02);
    min-height:40px;
    align-items:center;
    padding:0 20px;
    // overflow-x: scroll;
    // white-space: nowrap;
    word-break: break-all;
`]))),$t=_.ZP.div(N||(N=(0,r.Z)([`
    width:8px;height:8px;
    display:inline-block;
    background:`,`;
`])),function(Z){var c=Z.color;return c}),Jt=(0,_.ZP)(Zt)(et||(et=(0,r.Z)([`
    padding:20px 16px;
    background:#fff;
`]))),Dt=_.ZP.div(zt||(zt=(0,r.Z)([`
    height:100%;
    overflow-y:auto;
    overflow-x:hidden;
    width:340px;
    min-height:367px;
`]))),at=(0,_.ZP)(e.Z.Text)(Lt||(Lt=(0,r.Z)([`
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color:rgba(0,0,0,.65);
`]))),rt=(0,_.ZP)(e.Z.Text)(ft||(ft=(0,r.Z)([`
    cursor:pointer;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color:rgba(0,0,0,.85);
    `,`
`])),function(Z){var c=Z.is_active;return c&&"color:#1890FF;"}),Ot=_.ZP.div(mt||(mt=(0,r.Z)([`
    width:calc( 100% - 340px );
    .ant-typography { margin-bottom:0;}
`]))),Tt=function(c){var P=(0,l.YB)(),D=P.formatMessage,S=c.chartType,M=c.suite_id,q=c.conf_list,j=c.suite_name,J=c.envData,it=c.base_index,Y=(0,n.useState)(""),B=(0,s.Z)(Y,2),ut=B[0],te=B[1],ee=(0,n.useState)(null),St=(0,s.Z)(ee,2),Qt=St[0],kt=St[1],ne=(0,n.useState)(!1),xt=(0,s.Z)(ne,2),y=xt[0],Rt=xt[1],bt=(0,n.useState)(null),A=(0,s.Z)(bt,2),R=A[0],wt=A[1],se=(0,n.useState)([]),ve=(0,s.Z)(se,2),ae=ve[0],de=ve[1],ce=function(){var W=(0,u.Z)((0,f.Z)().mark(function Q(dt){var V;return(0,f.Z)().wrap(function(Vt){for(;;)switch(Vt.prev=Vt.next){case 0:return Rt(!0),Vt.next=3,(0,Ct.on)(dt);case 3:V=Vt.sent,V.code===200&&(Rt(!1),wt(V.data));case 5:case"end":return Vt.stop()}},Q)}));return function(dt){return W.apply(this,arguments)}}();(0,n.useEffect)(function(){var W={};W.suite_id=M,W.suite_name=j,W.is_all=0,W.async_request=1,W.base_index=it;var Q=[],dt=[],V=[];q==null||q.forEach(function(Ut,Vt){V=Ut.conf_compare_data||Ut.compare_conf_list,dt.push({conf_id:Ut.conf_id,conf_name:Ut.conf_name})}),V.forEach(function(Ut){Q.push((0,v.Z)((0,v.Z)({},Ut),{},{job_list:[].concat(Ut.obj_id)}))}),W.group_jobs=Q,W.conf_info=dt,W.show_type=2,S==="2"&&ce(W)},[S]);var _e=function(Q,dt){var V,Ut=Q.conf_name,Vt="".concat(Ut,"-").concat(dt);kt(Vt),(V=document.getElementById(Vt))===null||V===void 0||V.scrollIntoView()},It=function(Q){te(Q),setTimeout(function(){te("")},100)},ie=function(Q){de(Q)},ue=(0,n.useMemo)(function(){var W=[],Q=(0,Wt.cloneDeep)(J);Q.compare_groups.splice(it,0,J.base_group);for(var dt=Q.compare_groups,V=0;V<dt.length;V++)W.push({name:"".concat(dt[V].tag),inner:(0,h.jsxs)(x.Z,{align:"start",style:{cursor:"pointer"},children:[(0,h.jsx)($t,{color:ae[V]}),it===V&&(0,h.jsx)(p.Z,{title:D({id:"report.benchmark.group"}),children:(0,h.jsx)(O,{style:{transform:"translateY(3px)",marginLeft:8}})}),(0,h.jsx)(e.Z.Text,{strong:!0,children:dt[V].tag})]})});return W},[J,ae]);return(0,h.jsxs)(Ht,{children:[(0,h.jsx)(qt,{children:(0,h.jsxs)(x.Z,{align:"start",children:[(0,h.jsx)(x.Z,{style:{whiteSpace:"nowrap",marginRight:16},children:(0,h.jsx)(e.Z.Text,{strong:!0,children:(0,h.jsx)(l._H,{id:"report.legend.comparison.group"})})}),ue.map(function(W,Q){return(0,h.jsx)(x.Z,{size:28,style:{marginRight:16},children:(0,h.jsx)("span",{onClick:function(){return It(W.name)},children:W.inner})},W.name)})]})}),S==="2"?(0,h.jsxs)(Jt,{children:[(0,h.jsx)(Dt,{children:(0,h.jsxs)(x.Z,{direction:"vertical",children:[(0,h.jsx)(at,{children:D({id:"report.conf.list"},{data:"(".concat(q.length,")")})}),q.map(function(W,Q){return(0,h.jsx)("span",{children:(0,h.jsx)(rt,{children:(0,h.jsx)(G.Z,{width:330,title:W.conf_name})})},W==null?void 0:W.conf_id)})]})}),(0,h.jsx)(Ot,{children:(0,h.jsx)(At,{current:Qt,handleChartColor:ie,legend:ut,envData:J,loading:y,chartMetric:R,chartType:S})})]}):(0,h.jsxs)(Jt,{children:[(0,h.jsx)(Dt,{children:(0,h.jsxs)(x.Z,{direction:"vertical",children:[(0,h.jsx)(at,{children:D({id:"report.conf.list"},{data:"(".concat(q.length,")")})}),q.map(function(W,Q){return(0,h.jsx)("span",{onClick:function(){return _e(W,Q)},children:(0,h.jsx)(rt,{is_active:Qt==="".concat(W.conf_name,"-").concat(Q)?1:0,children:(0,h.jsx)(G.Z,{width:330,title:W.conf_name})})},W==null?void 0:W.conf_id)})]})}),(0,h.jsx)(Ot,{children:(0,h.jsx)(Nt,{current:Qt,handleChartColor:ie,legend:ut,envData:J,loading:y,chartConf:q,chartType:S})})]})]})},pt=n.memo(Tt)},45490:function(Pt,L,t){"use strict";t.d(L,{og:function(){return T},SR:function(){return p},id:function(){return s},E5:function(){return E}});var o=t(11849),x=t(10746),T=function(i,a,r,n,l){var _,b=[];return(_=i.list)===null||_===void 0||_.map(function(C,U){var nt=[],H=C.suite_id,I=C.suite_name;C.conf_list.map(function(O){var F,G=O.conf_id,Ct=O.conf_name,w=O.metric_list,h=l?[(O==null?void 0:O.obj_id)||((F=O.conf_source)===null||F===void 0?void 0:F.obj_id)]:[],Gt=(O.conf_compare_data||O.compare_conf_list).map(function(z){return{job_id:(z==null?void 0:z.obj_id)||"",is_baseline:z==null?void 0:z.is_baseline}});nt.push({conf_id:G,conf_name:Ct,metric_list:w,job_list:h.concat(Gt)})}),b.push({suite_id:H,suite_name:I,conf_list:nt,rowKey:n=="group"?"".concat(a,"-").concat(r,"-").concat(U):"".concat(a,"-").concat(U)})}),b},p=function(i,a,r,n){return a==="group"?i.map(function(l){var _=[];return l.is_group?(l.list.map(function(b){b.rowKey===n&&(_=l.list.filter(function(C){return C.name!==r}))}),(0,o.Z)((0,o.Z)({},l),{},{list:_})):(0,o.Z)({},l)}):i.filter(function(l){return l.name!==r&&l.rowKey!==n})},v=function(i,a,r){var n=i.list.reduce(function(l,_){return _.suite_id==a.suite_id?l:l.concat(_)},[]);return(0,o.Z)((0,o.Z)({},i),{},{list:n})},f=function(i,a,r){return(0,x.ZP)(i,function(n){n.list=i.list.map(function(l){var _=l.conf_list.reduce(function(b,C){return C.conf_id==a.conf_id?b:b.concat(C)},[]);return(0,o.Z)((0,o.Z)({},l),{},{conf_list:_})})})},u=function(i,a,r){return(0,x.ZP)(i,function(n){n.list=i.list.map(function(l){var _=l.conf_list;return(0,o.Z)((0,o.Z)({},l),{},{conf_list:_.reduce(function(b,C){var U=C.conf_id;return U===r?b.concat((0,o.Z)((0,o.Z)({},C),{},{metric_list:C.metric_list.filter(function(nt){return nt.metric!==a.metric})})):b.concat(C)},[])})})})},s=function(i,a){return Array.isArray(i.list)&&!!i.list.length&&i.list.forEach(function(r){return r.conf_list.forEach(function(n){return n.metric_list.forEach(function(l){return l.compare_data.splice(a,0,{cv_value:l.cv_value,test_value:l.test_value})})})}),i},E=function(i,a,r,n){var l=v;return a==="conf"&&(l=f),a==="metric"&&(l=u),i.map(function(_){if(_.is_group){var b=_.list.map(function(C){return l(C,r,n)});return(0,o.Z)((0,o.Z)({},_),{},{list:b})}else return l(_,r,n)})}},95545:function(Pt,L,t){"use strict";var o=t(49111),x=t(19650),T=t(43358),p=t(34041),v=t(402),f=t(97272),u=t(11849),s=t(16917),E=t(85893),e=function(a){var r=a.btn,n=a.isReport,l=a.obj,_=a.suiteId,b=a.setPerData,C=a.chartType,U=a.setChartType,nt=function(I){U(I),b(n?(0,u.Z)((0,u.Z)({},l),{},{list:l.list.map(function(O){return _===O.suite_id?(0,u.Z)((0,u.Z)({},O),{},{chartType:I}):O})}):l.map(function(O){return _===O.suite_id?(0,u.Z)((0,u.Z)({},O),{},{chartType:I}):O}))};return(0,E.jsx)(E.Fragment,{children:!r&&(0,E.jsxs)(x.Z,{style:{position:"absolute",right:12},children:[(0,E.jsxs)(f.Z.Text,{children:[(0,E.jsx)(s._H,{id:"report.view"}),"\uFF1A"]}),(0,E.jsxs)(p.Z,{value:C,style:{width:395},onChange:nt,children:[(0,E.jsx)(p.Z.Option,{value:"1",children:(0,E.jsx)(s._H,{id:"report.type1"})}),(0,E.jsx)(p.Z.Option,{value:"2",children:(0,E.jsx)(s._H,{id:"report.type2"})}),(0,E.jsx)(p.Z.Option,{value:"3",children:(0,E.jsx)(s._H,{id:"report.type3"})})]})]})})};L.Z=e},63880:function(Pt,L,t){"use strict";t.d(L,{p:function(){return Wt}});var o=t(13254),x=t(14277),T=t(89032),p=t(15746),v=t(62350),f=t(24565),u=t(57663),s=t(71577),E=t(32059),e=t(11849),i=t(13062),a=t(71230),r=t(14781),n=t(10664),l=t(2824),_=t(49111),b=t(19650),C=t(22385),U=t(89456),nt=t(402),H=t(97272),I=t(43358),O=t(34041),F=t(67294),G=t(43387),Ct=t(20009),w=t(16917),h=t(30061),Gt=t(62774),z=t(21118),st=t(59954),tt=t(71287),ct=t(39954),Kt=t(69569),_t=t(14552),jt=t(39632),ht=t(45490),Bt=t(60035),K=t(13538),Nt=t(24480),Yt=t(57119),d=t(85893),yt=O.Z.Option,At=function(N){var et=N.btnState;return et&&(0,d.jsx)(K.Hy,{empty:!0})},Wt=function(N){var et,zt=N.glen,Lt=N.state,ft=N.tp,mt=N.desc;return(0,d.jsx)(K.bH,{gLen:zt,btnState:Lt,children:(0,d.jsxs)(b.Z,{children:[(0,d.jsx)(H.Z.Text,{style:{color:(0,ct.Sh)(ft)},children:ft||"-"}),!!~(ft==null||(et=ft.toLowerCase())===null||et===void 0?void 0:et.indexOf("fail"))&&mt&&(0,d.jsx)(U.Z,{title:mt,children:(0,d.jsx)(Yt.Z,{style:{color:"rgba(0,0,0,.45)",cursor:"pointer"}})})]})})},Xt=function(N){var et=N.sub_case_list,zt=N.conf_id,Lt=N.expandKeys,ft=N.isOldReport,mt=N.baseIndex,Zt=N.groupLen,Ht=N.btnState,qt=Lt.includes(zt),$t=F.useState({size:100,num:1}),Jt=(0,l.Z)($t,2),Dt=Jt[0],at=Jt[1],rt=(et||[]).length;F.useEffect(function(){return function(){at({size:100,num:1})}},[qt]);var Ot=Dt.size,Tt=Dt.num,pt=Tt-1,Z=et.slice(pt*Ot,pt*Ot+Ot);return qt?(0,d.jsxs)(d.Fragment,{children:[Z==null?void 0:Z.map(function(c){var P;return ft&&c.compare_data.splice(mt,0,c.result),(0,d.jsxs)(K.GH,{children:[(0,d.jsx)(At,{btnState:Ht}),(0,d.jsx)(K.ly,{gLen:Zt,children:(0,d.jsx)(H.Z.Text,{children:(0,d.jsx)(_t.Z,{title:c.sub_case_name})})}),c.compare_data.length?(P=c.compare_data)===null||P===void 0?void 0:P.slice(0,Zt).map(function(D,S){return(0,d.jsx)(Wt,{glen:Zt,state:Ht,tp:D,desc:c.baseline_desc},S)}):(0,d.jsx)(Wt,{glen:Zt,state:Ht,tp:c.result,desc:c.baseline_desc})]},c==null?void 0:c.sub_case_name)}),(0,d.jsx)(a.Z,{justify:"end",children:(0,d.jsx)(n.Z,{style:{marginTop:12,marginBottom:12},total:rt,size:"small",current:Dt.num,pageSize:Ot,showQuickJumper:!0,showSizeChanger:!0,pageSizeOptions:[100,200,500,1e3,2e3],onChange:function(P,D){return at({num:P,size:D})},showTotal:function(P){return"\u5171\uFF08".concat(P,"\uFF09\u6761")}})})]}):(0,d.jsx)(d.Fragment,{})},Ft=function(N){var et,zt=(0,Ct.TH)(),Lt=zt.pathname,ft=(0,Ct.UO)(),mt=ft.share_id,Zt=!!~(Lt==null?void 0:Lt.indexOf("/edit")),Ht=(0,w.YB)(),qt=Ht.formatMessage,$t=N.child,Jt=N.name,Dt=N.id,at=N.onDelete,rt=N.dataSource,Ot=N.setDataSource,Tt=(0,F.useContext)(G.G),pt=Tt.btnState,Z=Tt.allGroupData,c=Tt.baselineGroupIndex,P=Tt.groupLen,D=Tt.wsId,S=Tt.isOldReport,M=Tt.domainResult,q=(0,F.useState)([]),j=(0,l.Z)(q,2),J=j[0],it=j[1],Y=(0,F.useState)("All"),B=(0,l.Z)(Y,2),ut=B[0],te=B[1],ee=(0,F.useState)(""),St=(0,l.Z)(ee,2),Qt=St[0],kt=St[1],ne=(0,F.useState)(""),xt=(0,l.Z)(ne,2),y=xt[0],Rt=xt[1],bt=(0,F.useState)(0),A=(0,l.Z)(bt,2),R=A[0],wt=A[1],se=(0,F.useState)(!1),ve=(0,l.Z)(se,2),ae=ve[0],de=ve[1],ce=(0,F.useState)({}),_e=(0,l.Z)(ce,2),It=_e[0],ie=_e[1],ue=F.useState({}),W=(0,l.Z)(ue,2),Q=W[0],dt=W[1];F.useEffect(function(){return function(){dt({})}},[]),(0,F.useEffect)(function(){ie($t)},[$t]);var V=(0,F.useMemo)(function(){return c===-1?0:c},[c]),Ut=function(lt){te(lt);var Et=$t,$=[];lt=="All"?ie(Et):(Et.list.map(function(vt){var k=[];vt.conf_list.map(function(gt){var Mt=S?gt.sub_case_list.filter(function(re){return re.result==lt}):gt.sub_case_list.filter(function(re){return re.compare_data.includes(lt)});k.push((0,e.Z)((0,e.Z)({},gt),{},{sub_case_list:Mt}))}),$.push((0,e.Z)((0,e.Z)({},vt),{},{conf_list:k}))}),ie((0,e.Z)((0,e.Z)({},Et),{},{list:$})))},Vt=function(){de(!ae)},Oe=function(lt,Et){if(Qt==lt.suite_id){ie(function(k){var gt=k.list;return(0,e.Z)((0,e.Z)({},k),{},{list:gt.map(function(Mt){return Mt.suite_id===lt.suite_id?(0,e.Z)((0,e.Z)({},Mt),{},{conf_list:Q==null?void 0:Q[Mt.suite_id]}):Mt})})}),kt(null);return}rt.map(function(k){return k.suite_id==lt.suite_id?(0,e.Z)((0,e.Z)({},k),{},{conf_list:Q==null?void 0:Q[k.suite_id]}):k}),wt(Et),kt(lt.suite_id);var $=lt.conf_list.map(function(k){var gt,Mt=[[],[],[],[],[]];return k.sub_case_list.forEach(function(re){var oe=re.compare_data;oe[V]==="Pass"&&oe[Et]==="Fail"?Mt[0].push(re):oe[V]==="Fail"&&oe[Et]==="Pass"?Mt[1].push(re):oe[V]==="Fail"&&oe[Et]==="Fail"?Mt[2].push(re):oe[V]==="Pass"&&oe[Et]==="Pass"?Mt[3].push(re):Mt[4].push(re)}),(0,e.Z)((0,e.Z)({},k),{},{sub_case_list:(gt=[]).concat.apply(gt,Mt)})}),vt=$t.list.map(function(k){return k.suite_id===lt.suite_id?(dt(function(gt){return(0,e.Z)((0,e.Z)({},gt),{},(0,E.Z)({},k.suite_id,k.conf_list))}),(0,e.Z)((0,e.Z)({},k),{},{conf_list:$})):k});ie((0,e.Z)((0,e.Z)({},$t),{},{list:vt}))};(0,F.useEffect)(function(){var ot,lt=qt({id:"report.btn.expand.all"}),Et=qt({id:"report.btn.collapse.all"});Rt(ae?lt:Et),it([]);var $=[];rt==null||rt.map(function(vt){vt.is_group?vt.list.map(function(k){$=$.concat(k.list)}):$=$.concat(vt.list)}),it(ae?(ot=$)===null||ot===void 0?void 0:ot.reduce(function(vt,k){return vt.concat(k.conf_list.map(function(gt){return gt.conf_id}))},[]):[])},[ae,rt]);var Ce=function(lt,Et,$){Ot((0,ht.E5)(rt,lt,Et,$))},ye=function(){return(0,d.jsx)(K.JI,{children:(0,d.jsxs)(b.Z,{children:[(0,d.jsx)(s.Z,{onClick:Vt,children:y}),(0,d.jsxs)(b.Z,{children:[(0,d.jsxs)(H.Z.Text,{children:[(0,d.jsx)(w._H,{id:"report.filter"}),": "]}),(0,d.jsxs)(O.Z,{defaultValue:"All",style:{width:200},value:ut,onSelect:Ut,children:[(0,d.jsx)(yt,{value:"All",children:(0,d.jsx)(w._H,{id:"report.all.s"})}),(0,d.jsx)(yt,{value:"Pass",children:(0,d.jsx)(w._H,{id:"report.pass"})}),(0,d.jsx)(yt,{value:"Fail",children:(0,d.jsx)(w._H,{id:"report.fail"})}),(0,d.jsx)(yt,{value:"Warn",children:(0,d.jsx)(w._H,{id:"ws.result.details.warn"})}),(0,d.jsx)(yt,{value:"Skip",children:(0,d.jsx)(w._H,{id:"report.skip"})})]})]})]})})},Ze=function(lt){var Et=lt.conf,$=lt.cid;return(0,d.jsx)(f.Z,{title:(0,d.jsx)(w._H,{id:"delete.prompt"}),onConfirm:function(){return Ce("conf",Et,$)},cancelText:(0,d.jsx)(w._H,{id:"operation.cancel"}),okText:(0,d.jsx)(w._H,{id:"operation.delete"}),children:pt&&(0,d.jsxs)(K.Hy,{empty:!1,children:[(0,d.jsx)(h.r,{className:"remove"}),(0,d.jsx)(Gt.r,{className:"remove_active"})]})})},De=function(lt){var Et=J.includes(lt);it(Et?J.filter(function($){return $!==lt}):J.concat(lt))},Me=Array.isArray(It.list)&&!!It.list.length?It==null||(et=It.list)===null||et===void 0?void 0:et.map(function(ot,lt){var Et;return(0,d.jsxs)(K.gb,{children:[!M.is_default&&(0,d.jsx)(K.VK,{children:[["need_test_env","test_env","env"],["need_test_description","test_description","description"],["need_test_conclusion","test_conclusion","conclusion"]].map(function($){var vt=(0,l.Z)($,3),k=vt[0],gt=vt[1],Mt=vt[2];if(!!M.func_conf&&!!M.func_conf[k]&&!(!Zt&&!ot[gt]))return(0,d.jsxs)(K.hV,{children:[(0,d.jsx)(K.HQ,{children:(0,d.jsx)(w._H,{id:"report.test.".concat(Mt)})}),(0,d.jsx)(K.QK,{children:(0,d.jsx)(Kt.u,{name:ot[gt],field:gt,suite:ot,creator:M==null?void 0:M.creator})})]},k)}).filter(Boolean)}),(0,d.jsxs)(K.yO,{children:[ot.suite_name,(0,d.jsx)(f.Z,{title:(0,d.jsx)(w._H,{id:"delete.prompt"}),onConfirm:function(){return Ce("suite",ot,lt)},cancelText:(0,d.jsx)(w._H,{id:"operation.cancel"}),okText:(0,d.jsx)(w._H,{id:"operation.delete"}),children:pt&&(0,d.jsx)(K.dg,{})})]}),(0,d.jsxs)(K.h$,{children:[(0,d.jsx)(K.h,{gLen:P,style:{marginLeft:pt?39:0},children:"Conf"}),Z==null?void 0:Z.map(function($,vt){return(0,d.jsx)(K.iM,{gLen:P,btnState:pt,children:(0,d.jsxs)(a.Z,{children:[(0,d.jsx)(p.Z,{span:12,children:(0,d.jsx)(w._H,{id:"report.total/pass/fail"})}),vt!==V&&(0,d.jsxs)(p.Z,{span:12,style:{textAlign:"right",paddingRight:10},children:[(0,d.jsx)(w._H,{id:"report.comparison.results"}),(0,d.jsx)("span",{onClick:function(){return Oe(ot,vt)},style:{margin:"0 5px 0 3px",verticalAlign:"middle",cursor:"pointer"},children:Qt==ot.suite_id&&R==vt?(0,d.jsx)(st.r,{}):(0,d.jsx)(z.r,{})}),(0,d.jsx)(jt.F,{})]})]})},vt)})]}),(0,d.jsx)(K.uP,{children:ot==null||(Et=ot.conf_list)===null||Et===void 0?void 0:Et.map(function($,vt){var k=J.includes($.conf_id),gt=[];if(S)for(var Mt=$.conf_source||$,re=Mt.all_case,oe=Mt.success_case,Le=Mt.fail_case,Te=Mt.obj_id,ge=$.conf_compare_data||$.compare_conf_list,Re=function(pe){pe===V&&gt.push({all_case:re,success_case:oe,fail_case:Le,obj_id:Te}),ge.length?ge.map(function(be,Be){if(be){var he=be||be.conf_source,Ae=he.all_case,We=he.success_case,Fe=he.fail_case,Se=he.obj_id;Be===pe&&gt.push({all_case:Ae,success_case:We,fail_case:Fe,obj_id:Se})}else Be===pe&&gt.push({all_case:"-",success_case:"-",fail_case:"-"})}):Z.length>1&&pe-1&&gt.push({all_case:"-",success_case:"-",fail_case:"-"})},me=0;me<Z.length;me++)Re(me);var xe=S?gt:$.conf_compare_data||$.compare_conf_list;return(0,d.jsxs)(F.Fragment,{children:[(0,d.jsxs)(K.lu,{expand:k,children:[(0,d.jsx)(Ze,{conf:$,cid:vt}),(0,d.jsx)(K.Km,{gLen:P,children:(0,d.jsxs)(_t.Z,{title:$.conf_name,children:[(0,d.jsx)(K.Qq,{rotate:k?90:0,onClick:function(){return De($.conf_id)}}),(0,d.jsx)(H.Z.Text,{children:$.conf_name})]})}),xe==null?void 0:xe.map(function(fe,pe){return(0,d.jsx)(K.Lc,{gLen:P,btnState:pt,children:(0,d.jsxs)(b.Z,{size:16,children:[(0,d.jsx)(H.Z.Text,{style:{color:"#649FF6"},children:(0,ct.YL)(fe.all_case)}),(0,d.jsx)(H.Z.Text,{style:{color:"#81BF84"},children:(0,ct.YL)(fe.success_case)}),(0,d.jsx)(H.Z.Text,{style:{color:"#C84C5A"},children:(0,ct.YL)(fe.fail_case)}),!mt&&!(0,Nt.cO)(fe)&&(0,d.jsx)(Bt.zA,{ws_id:D,job_id:fe.obj_id,style:{paddingLeft:10}})]})},pe)})]}),(0,d.jsx)(Xt,(0,e.Z)((0,e.Z)({},$),{},{expandKeys:J,isOldReport:S,baseIndex:V,groupLen:P,btnState:pt,btn:pt}))]},$.conf_id)})})]},ot==null?void 0:ot.suite_id)}):(0,d.jsx)(x.Z,{image:x.Z.PRESENTED_IMAGE_SIMPLE});return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(K.Gh,{id:"func_item-".concat(Dt),className:"position_mark",isGroup:Jt==="group",children:[(0,d.jsx)(tt.r,{style:{marginLeft:12,verticalAlign:"middle"}}),(0,d.jsx)(K.jI,{children:(0,d.jsx)(Kt.i,{name:It.name,rowKey:It.rowKey,btn:pt,dataSource:rt,setDataSource:Ot})}),pt&&(0,d.jsx)(f.Z,{title:(0,d.jsx)(w._H,{id:"delete.prompt"}),onConfirm:function(){return at(Jt,It.name,It.rowKey)},cancelText:(0,d.jsx)(w._H,{id:"operation.cancel"}),okText:(0,d.jsx)(w._H,{id:"operation.delete"}),children:(0,d.jsx)(K.dg,{})}),!pt&&(0,d.jsx)(ye,{})]}),Me]})};L.Z=(0,F.memo)(Ft)},56304:function(Pt,L,t){"use strict";t.d(L,{r:function(){return s}});var o=t(67294),x,T=["svgRef","title"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},p.apply(this,arguments)}function v(e,i){if(e==null)return{};var a=f(e,i),r,n;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],!(i.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(a[r]=e[r]))}return a}function f(e,i){if(e==null)return{};var a={},r=Object.keys(e),n,l;for(l=0;l<r.length;l++)n=r[l],!(i.indexOf(n)>=0)&&(a[n]=e[n]);return a}var u=function(i){var a=i.svgRef,r=i.title,n=v(i,T);return o.createElement("svg",p({width:"10px",height:"14px",viewBox:"0 0 10 14",ref:a},n),r?o.createElement("title",null,r):null,x||(x=o.createElement("g",{id:"\\u9875\\u9762-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},o.createElement("g",{id:"3\\u4E2Agroup\\u76EE\\u5F55\\u6536\\u8D77",transform:"translate(-263.000000, -767.000000)",fillRule:"nonzero"},o.createElement("g",{id:"\\u7F16\\u7EC4-2",transform:"translate(119.000000, 686.000000)"},o.createElement("g",{id:"\\u7F16\\u7EC4-8",transform:"translate(21.000000, 64.000000)"},o.createElement("g",{id:"basegroup",transform:"translate(120.000000, 16.000000)"},o.createElement("rect",{id:"\\u77E9\\u5F62",fill:"#FFFFFF",opacity:0,x:0,y:0,width:16,height:16,rx:2}),o.createElement("path",{d:"M4,1 C3.72417824,1.00077249 3.50077249,1.22417824 3.5,1.5 L3.5,14.5 C3.5,14.7761424 3.72385763,15 4,15 C4.27614237,15 4.5,14.7761424 4.5,14.5 L4.5,1.5 C4.49922751,1.22417824 4.27582176,1.00077249 4,1 L4,1 Z M4.5,2 L12.5,6.5 L4.5,11",id:"\\u5F62\\u72B6",fill:"#1890FF"}))))))))},s=o.forwardRef(function(e,i){return o.createElement(u,p({svgRef:i},e))}),E=t.p+"static/BaseIcon.974c58a4.svg"},80272:function(Pt,L,t){"use strict";t.d(L,{r:function(){return s}});var o=t(67294),x,T=["svgRef","title"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},p.apply(this,arguments)}function v(e,i){if(e==null)return{};var a=f(e,i),r,n;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],!(i.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(a[r]=e[r]))}return a}function f(e,i){if(e==null)return{};var a={},r=Object.keys(e),n,l;for(l=0;l<r.length;l++)n=r[l],!(i.indexOf(n)>=0)&&(a[n]=e[n]);return a}var u=function(i){var a=i.svgRef,r=i.title,n=v(i,T);return o.createElement("svg",p({width:"6px",height:"13px",viewBox:"0 0 6 13",ref:a},n),r?o.createElement("title",null,r):null,x||(x=o.createElement("g",{id:"\\u9875\\u9762-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},o.createElement("g",{id:"3\\u4E2Agroup\\u76EE\\u5F55\\u6536\\u8D77",transform:"translate(-964.000000, -766.000000)",fillRule:"nonzero"},o.createElement("g",{id:"\\u7F16\\u7EC4-2",transform:"translate(119.000000, 686.000000)"},o.createElement("g",{id:"\\u7F16\\u7EC4-8",transform:"translate(21.000000, 64.000000)"},o.createElement("g",{id:"\\u7F16\\u7EC4",transform:"translate(819.000000, 15.000000)"},o.createElement("rect",{id:"\\u77E9\\u5F62",fill:"#000000",opacity:0,transform:"translate(11.313708, 11.313708) rotate(-315.000000) translate(-11.313708, -11.313708) ",x:3.3137085,y:3.3137085,width:16,height:16}),o.createElement("polygon",{id:"\\u8DEF\\u5F84",fill:"#1890FF",transform:"translate(7.759021, 7.759021) rotate(-315.000000) translate(-7.759021, -7.759021) ",points:"1.759021 5.04315003 5.04315003 1.759021 5.89476293 2.6106339 4.25347261 4.25347261 4.69166616 4.69166616 6.33450487 3.04882745 6.99566616 3.70998874 5.90095648 4.80469842 6.33915003 5.24289197 7.43385971 4.14818229 8.09037584 4.80469842 6.99566616 5.8994081 7.43385971 6.33760164 8.52856939 5.24289197 9.18508552 5.8994081 7.54224681 7.54224681 7.98044035 7.98044035 9.62327906 6.33760164 10.2797952 6.99411777 9.18508552 8.08882745 9.62327906 8.527021 10.7179887 7.43231132 11.3745049 8.08882745 10.2797952 9.18353713 10.7179887 9.62173068 11.8126984 8.527021 12.4692145 9.18353713 10.8263758 10.8263758 11.2645694 11.2645694 12.9074081 9.62173068 13.759021 10.4733436 10.474892 13.759021 1.759021 5.04315003"}))))))))},s=o.forwardRef(function(e,i){return o.createElement(u,p({svgRef:i},e))}),E=t.p+"static/BaseLine.9705064e.svg"},71287:function(Pt,L,t){"use strict";t.d(L,{r:function(){return s}});var o=t(67294),x,T=["svgRef","title"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},p.apply(this,arguments)}function v(e,i){if(e==null)return{};var a=f(e,i),r,n;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],!(i.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(a[r]=e[r]))}return a}function f(e,i){if(e==null)return{};var a={},r=Object.keys(e),n,l;for(l=0;l<r.length;l++)n=r[l],!(i.indexOf(n)>=0)&&(a[n]=e[n]);return a}var u=function(i){var a=i.svgRef,r=i.title,n=v(i,T);return o.createElement("svg",p({width:"12px",height:"14px",viewBox:"0 0 12 14",ref:a},n),r?o.createElement("title",null,r):null,x||(x=o.createElement("g",{id:"\\u9875\\u9762-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},o.createElement("g",{id:"\\u65B0\\u5EFA\\u62A5\\u544A\\u6A21\\u677F-\\u6DFB\\u52A0\\u9879/\\u7EC4",transform:"translate(-304.000000, -614.000000)",fill:"#000000",fillRule:"nonzero"},o.createElement("g",{id:"Group-16\\u5907\\u4EFD",transform:"translate(220.000000, 379.000000)"},o.createElement("g",{id:"\\u7F16\\u7EC4\\u5907\\u4EFD",transform:"translate(20.000000, 64.000000)"},o.createElement("g",{id:"\\u7F16\\u7EC4-10",transform:"translate(48.000000, 158.000000)"},o.createElement("g",{id:"\\u7F16\\u7EC4",transform:"translate(14.000000, 12.000000)"},o.createElement("rect",{id:"\\u77E9\\u5F62",opacity:0,x:0,y:0,width:16,height:16}),o.createElement("path",{d:"M11,1.6 L6.2,1.6 C5.36,1.6 4.6,2.36 4.6,3.2 L4.12,3.2 C3.28,3.2 2.6,3.96 2.6,4.8 L2.6,12.8 C2.6,13.64 3.36,14.4 4.2,14.4 L10.2,14.4 C11.04,14.4 11.8,13.64 11.8,12.8 L12.2,12.8 C13.04,12.8 13.8,12.04 13.8,11.2 L13.8,4.8 L11,1.6 Z M10.2,13.6 L4.2,13.6 C3.8,13.6 3.4,13.2 3.4,12.8 L3.4,4.8 C3.4,4.4 3.76,4 4.16,4 L4.6,4 L4.6,11.2 C4.6,12.04 5.36,12.8 6.2,12.8 L11,12.8 C11,13.2 10.6,13.6 10.2,13.6 Z M13,11.2 C13,11.6 12.6,12 12.2,12 L6.2,12 C5.8,12 5.4,11.6 5.4,11.2 L5.4,3.2 C5.4,2.8 5.8,2.4 6.2,2.4 L10.2,2.4 L10.2,4 C10.2,4.84 10.96,5.6 11.8,5.6 L13,5.6 L13,11.2 L13,11.2 Z M11.8,4.8 C11.36,4.8 11,4.04 11,3.6 L11,2.4 L13,4.8 L11.8,4.8 L11.8,4.8 Z M11,7.2 L7.4,7.2 C7.16,7.2 7,7.36 7,7.6 C7,7.84 7.16,8 7.4,8 L11,8 C11.24,8 11.4,7.84 11.4,7.6 C11.4,7.4 11.24,7.2 11,7.2 Z M11,9.2 L7.4,9.2 C7.16,9.2 7,9.36 7,9.6 C7,9.84 7.16,10 7.4,10 L11,10 C11.24,10 11.4,9.84 11.4,9.6 C11.4,9.4 11.24,9.2 11,9.2 Z",id:"\\u5F62\\u72B6",fillOpacity:.85})))))))))},s=o.forwardRef(function(e,i){return o.createElement(u,p({svgRef:i},e))}),E=t.p+"static/TestItem.675975c7.svg"},30061:function(Pt,L,t){"use strict";t.d(L,{r:function(){return s}});var o=t(67294),x,T=["svgRef","title"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},p.apply(this,arguments)}function v(e,i){if(e==null)return{};var a=f(e,i),r,n;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],!(i.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(a[r]=e[r]))}return a}function f(e,i){if(e==null)return{};var a={},r=Object.keys(e),n,l;for(l=0;l<r.length;l++)n=r[l],!(i.indexOf(n)>=0)&&(a[n]=e[n]);return a}var u=function(i){var a=i.svgRef,r=i.title,n=v(i,T);return o.createElement("svg",p({width:"16px",height:"17px",viewBox:"0 0 16 17",ref:a},n),r?o.createElement("title",null,r):null,x||(x=o.createElement("g",{id:"\\u9875\\u9762-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},o.createElement("g",{id:"\\u6D4B\\u8BD5\\u7ED3\\u679C\\u7F16\\u8F91\\u6001",transform:"translate(-285.000000, -2418.000000)",fill:"#000000",fillRule:"nonzero"},o.createElement("g",{id:"\\u7F16\\u7EC4-3",transform:"translate(219.000000, 56.000000)"},o.createElement("g",{id:"Group-10",transform:"translate(2.000000, 1683.450000)"},o.createElement("g",{id:"\\u7F16\\u7EC4-10",transform:"translate(20.000000, 175.450000)"},o.createElement("g",{id:"\\u6027\\u80FD\\u8868\\u683C",transform:"translate(16.000000, 65.000000)"},o.createElement("g",{id:"\\u6027\\u80FD\\u88681",transform:"translate(16.000000, 348.000000)"},o.createElement("g",{id:"\\u7F16\\u7EC4-3",transform:"translate(12.000000, 14.000000)"},o.createElement("g",{id:"\\u5220\\u9664\\u5907\\u4EFD-2",transform:"translate(0.000000, 77.000000)"},o.createElement("rect",{id:"\\u77E9\\u5F62",opacity:0,x:0,y:0,width:16,height:16}),o.createElement("path",{d:"M14.453125,5.2734375 C14.1,4.4390625 13.5953125,3.690625 12.953125,3.046875 C12.309375,2.403125 11.5609375,1.8984375 10.7265625,1.546875 C9.8625,1.18125 8.9453125,0.996875 8,0.996875 C7.0546875,0.996875 6.1375,1.18125 5.2734375,1.546875 C4.4390625,1.9 3.690625,2.4046875 3.046875,3.046875 C2.403125,3.690625 1.8984375,4.4390625 1.546875,5.2734375 C1.18125,6.1375 0.996875,7.0546875 0.996875,8 C0.996875,8.9453125 1.18125,9.8625 1.546875,10.7265625 C1.9,11.5609375 2.4046875,12.309375 3.046875,12.953125 C3.6890625,13.596875 4.4390625,14.1015625 5.2734375,14.453125 C6.1375,14.81875 7.0546875,15.003125 8,15.003125 C8.9453125,15.003125 9.8625,14.8171875 10.7265625,14.453125 C11.5609375,14.1 12.309375,13.5953125 12.953125,12.953125 C13.596875,12.3109375 14.1015625,11.5609375 14.453125,10.7265625 C14.81875,9.8625 15.003125,8.9453125 15.003125,8 C15.003125,7.0546875 14.81875,6.1375 14.453125,5.2734375 Z M8,14.378125 C4.4828125,14.378125 1.621875,11.5171875 1.621875,8 C1.621875,4.4828125 4.4828125,1.621875 8,1.621875 C11.5171875,1.621875 14.378125,4.4828125 14.378125,8 C14.378125,11.5171875 11.5171875,14.378125 8,14.378125 Z M11.521875,7.6875 L4.478125,7.6875 C4.30625,7.6875 4.165625,7.828125 4.165625,8 C4.165625,8.171875 4.30625,8.3125 4.478125,8.3125 L11.521875,8.3125 C11.69375,8.3125 11.834375,8.171875 11.834375,8 C11.834375,7.828125 11.69375,7.6875 11.521875,7.6875 L11.521875,7.6875 Z",id:"\\u5F62\\u72B6",fillOpacity:.45}))))))))))))},s=o.forwardRef(function(e,i){return o.createElement(u,p({svgRef:i},e))}),E=t.p+"static/delDefault.7f2e5622.svg"},62774:function(Pt,L,t){"use strict";t.d(L,{r:function(){return s}});var o=t(67294),x,T=["svgRef","title"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},p.apply(this,arguments)}function v(e,i){if(e==null)return{};var a=f(e,i),r,n;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],!(i.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(a[r]=e[r]))}return a}function f(e,i){if(e==null)return{};var a={},r=Object.keys(e),n,l;for(l=0;l<r.length;l++)n=r[l],!(i.indexOf(n)>=0)&&(a[n]=e[n]);return a}var u=function(i){var a=i.svgRef,r=i.title,n=v(i,T);return o.createElement("svg",p({width:"16px",height:"17px",viewBox:"0 0 16 17",ref:a},n),r?o.createElement("title",null,r):null,x||(x=o.createElement("g",{id:"\\u9875\\u9762-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},o.createElement("g",{id:"\\u6D4B\\u8BD5\\u7ED3\\u679C\\u7F16\\u8F91\\u6001",transform:"translate(-285.000000, -2379.000000)",fillRule:"nonzero"},o.createElement("g",{id:"\\u7F16\\u7EC4-3",transform:"translate(219.000000, 56.000000)"},o.createElement("g",{id:"Group-10",transform:"translate(2.000000, 1683.450000)"},o.createElement("g",{id:"\\u7F16\\u7EC4-10",transform:"translate(20.000000, 175.450000)"},o.createElement("g",{id:"\\u6027\\u80FD\\u8868\\u683C",transform:"translate(16.000000, 65.000000)"},o.createElement("g",{id:"\\u6027\\u80FD\\u88681",transform:"translate(16.000000, 348.000000)"},o.createElement("g",{id:"\\u7F16\\u7EC4-3",transform:"translate(12.000000, 14.000000)"},o.createElement("g",{id:"\\u5220\\u9664\\u5907\\u4EFD",transform:"translate(0.000000, 38.000000)"},o.createElement("rect",{id:"\\u77E9\\u5F62",fill:"#000000",opacity:0,x:0,y:0,width:16,height:16}),o.createElement("path",{d:"M14.453125,5.2734375 C14.1,4.4390625 13.5953125,3.690625 12.953125,3.046875 C12.309375,2.403125 11.5609375,1.8984375 10.7265625,1.546875 C9.8625,1.18125 8.9453125,0.996875 8,0.996875 C7.0546875,0.996875 6.1375,1.18125 5.2734375,1.546875 C4.4390625,1.9 3.690625,2.4046875 3.046875,3.046875 C2.403125,3.690625 1.8984375,4.4390625 1.546875,5.2734375 C1.18125,6.1375 0.996875,7.0546875 0.996875,8 C0.996875,8.9453125 1.18125,9.8625 1.546875,10.7265625 C1.9,11.5609375 2.4046875,12.309375 3.046875,12.953125 C3.6890625,13.596875 4.4390625,14.1015625 5.2734375,14.453125 C6.1375,14.81875 7.0546875,15.003125 8,15.003125 C8.9453125,15.003125 9.8625,14.8171875 10.7265625,14.453125 C11.5609375,14.1 12.309375,13.5953125 12.953125,12.953125 C13.596875,12.3109375 14.1015625,11.5609375 14.453125,10.7265625 C14.81875,9.8625 15.003125,8.9453125 15.003125,8 C15.003125,7.0546875 14.81875,6.1375 14.453125,5.2734375 Z M8,14.378125 C4.4828125,14.378125 1.621875,11.5171875 1.621875,8 C1.621875,4.4828125 4.4828125,1.621875 8,1.621875 C11.5171875,1.621875 14.378125,4.4828125 14.378125,8 C14.378125,11.5171875 11.5171875,14.378125 8,14.378125 Z M11.521875,7.6875 L4.478125,7.6875 C4.30625,7.6875 4.165625,7.828125 4.165625,8 C4.165625,8.171875 4.30625,8.3125 4.478125,8.3125 L11.521875,8.3125 C11.69375,8.3125 11.834375,8.171875 11.834375,8 C11.834375,7.828125 11.69375,7.6875 11.521875,7.6875 L11.521875,7.6875 Z",id:"\\u5F62\\u72B6",fill:"#F5222D"}))))))))))))},s=o.forwardRef(function(e,i){return o.createElement(u,p({svgRef:i},e))}),E=t.p+"static/delHover.daabd6a5.svg"},21118:function(Pt,L,t){"use strict";t.d(L,{r:function(){return s}});var o=t(67294),x,T=["svgRef","title"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},p.apply(this,arguments)}function v(e,i){if(e==null)return{};var a=f(e,i),r,n;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],!(i.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(a[r]=e[r]))}return a}function f(e,i){if(e==null)return{};var a={},r=Object.keys(e),n,l;for(l=0;l<r.length;l++)n=r[l],!(i.indexOf(n)>=0)&&(a[n]=e[n]);return a}var u=function(i){var a=i.svgRef,r=i.title,n=v(i,T);return o.createElement("svg",p({width:"12px",height:"12px",viewBox:"0 0 12 12",ref:a},n),r?o.createElement("title",null,r):null,x||(x=o.createElement("g",{id:"\\u5BF9\\u6BD4",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},o.createElement("g",{id:"14.\\u5BF9\\u6BD4\\u7ED3\\u679C\\u5C55\\u5F00",transform:"translate(-906.000000, -657.000000)",fillRule:"nonzero"},o.createElement("g",{id:"Group-42",transform:"translate(0.000000, 534.000000)"},o.createElement("g",{id:"Group-41",transform:"translate(0.000000, 107.000000)"},o.createElement("g",{id:"Group-22",transform:"translate(20.000000, 1.000000)"},o.createElement("g",{id:"Group-21-Copy-2",transform:"translate(884.000000, 10.000000)"},o.createElement("g",{id:"\\u6392\\u5E8F",transform:"translate(0.000000, 3.000000)"},o.createElement("rect",{id:"Rectangle",fill:"#000000",opacity:0,x:0,y:0,width:16,height:16}),o.createElement("path",{d:"M10.2344,13.1928927 C10.0731411,13.1956471 9.91764813,13.1328419 9.80360311,13.0187969 C9.68955809,12.9047519 9.62675294,12.7492589 9.6296,12.588 L9.6296,3.4152 C9.62960001,3.08117819 9.90037819,2.81040003 10.2344,2.81040003 C10.5684218,2.81040003 10.8392,3.08117819 10.8392,3.4152 L10.8392,12.588 C10.8311885,12.9186465 10.5650465,13.1847885 10.2344,13.1928927 L10.2344,13.1928927 Z M13.04,6.82241461 C12.8786856,6.82354413 12.7241825,6.75745275 12.6136,6.64 L9.8136,3.84 C9.6624052,3.6888052 9.60335691,3.46843398 9.65869805,3.26189805 C9.71403919,3.05536211 9.87536211,2.89403919 10.081898,2.83869805 C10.288434,2.78335691 10.5088052,2.8424052 10.66,2.9936 L13.46,5.7936 C13.5757196,5.9039601 13.6412002,6.05689262 13.6412002,6.2168 C13.6412002,6.37670738 13.5757196,6.5296399 13.46,6.64 C13.3487327,6.75264685 13.1982728,6.81798944 13.04,6.82241461 L13.04,6.82241461 Z M5.6984,13.1928927 C5.53714112,13.1956471 5.38164813,13.1328419 5.26760311,13.0187969 C5.15355809,12.9047519 5.09075294,12.7492589 5.0936,12.588 L5.0936,3.4152 C5.0936,3.08117818 5.36437818,2.8104 5.6984,2.8104 C6.03242182,2.8104 6.3032,3.08117818 6.3032,3.4152 L6.3032,12.588 C6.29518849,12.9186465 6.02904649,13.1847885 5.6984,13.1928927 L5.6984,13.1928927 Z M5.6984,13.1928024 C5.53831678,13.1932636 5.3851604,13.1275424 5.2752,13.0112 L2.4752,10.2112 C2.24014761,9.97813584 2.23853584,9.59865239 2.4716,9.3636 C2.70466416,9.12854761 3.08414761,9.12693584 3.3192,9.36 L6.1192,12.16 C6.28848676,12.3327837 6.33853901,12.5898175 6.2464558,12.8134978 C6.1543726,13.0371782 5.93786735,13.1844774 5.696,13.188 L5.6984,13.1928024 Z",id:"Shape",fill:"#595959"}))))))))))},s=o.forwardRef(function(e,i){return o.createElement(u,p({svgRef:i},e))}),E=t.p+"static/icon_arrow.9e141683.svg"},59954:function(Pt,L,t){"use strict";t.d(L,{r:function(){return s}});var o=t(67294),x,T=["svgRef","title"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},p.apply(this,arguments)}function v(e,i){if(e==null)return{};var a=f(e,i),r,n;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],!(i.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(a[r]=e[r]))}return a}function f(e,i){if(e==null)return{};var a={},r=Object.keys(e),n,l;for(l=0;l<r.length;l++)n=r[l],!(i.indexOf(n)>=0)&&(a[n]=e[n]);return a}var u=function(i){var a=i.svgRef,r=i.title,n=v(i,T);return o.createElement("svg",p({width:"12px",height:"12px",viewBox:"0 0 12 12",ref:a},n),r?o.createElement("title",null,r):null,x||(x=o.createElement("g",{id:"\\u5BF9\\u6BD4",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},o.createElement("g",{id:"14.\\u5BF9\\u6BD4\\u7ED3\\u679C\\u5C55\\u5F00",transform:"translate(-906.000000, -657.000000)",fillRule:"nonzero"},o.createElement("g",{id:"Group-42",transform:"translate(0.000000, 534.000000)"},o.createElement("g",{id:"Group-41",transform:"translate(0.000000, 107.000000)"},o.createElement("g",{id:"Group-22",transform:"translate(20.000000, 1.000000)"},o.createElement("g",{id:"Group-21-Copy-2",transform:"translate(884.000000, 10.000000)"},o.createElement("g",{id:"\\u6392\\u5E8F",transform:"translate(0.000000, 3.000000)"},o.createElement("rect",{id:"Rectangle",fill:"#000000",opacity:0,x:0,y:0,width:16,height:16}),o.createElement("path",{d:"M10.2344,13.1928927 C10.0731411,13.1956471 9.91764813,13.1328419 9.80360311,13.0187969 C9.68955809,12.9047519 9.62675294,12.7492589 9.6296,12.588 L9.6296,3.4152 C9.62960001,3.08117819 9.90037819,2.81040003 10.2344,2.81040003 C10.5684218,2.81040003 10.8392,3.08117819 10.8392,3.4152 L10.8392,12.588 C10.8311885,12.9186465 10.5650465,13.1847885 10.2344,13.1928927 L10.2344,13.1928927 Z M13.04,6.82241461 C12.8786856,6.82354413 12.7241825,6.75745275 12.6136,6.64 L9.8136,3.84 C9.6624052,3.6888052 9.60335691,3.46843398 9.65869805,3.26189805 C9.71403919,3.05536211 9.87536211,2.89403919 10.081898,2.83869805 C10.288434,2.78335691 10.5088052,2.8424052 10.66,2.9936 L13.46,5.7936 C13.5757196,5.9039601 13.6412002,6.05689262 13.6412002,6.2168 C13.6412002,6.37670738 13.5757196,6.5296399 13.46,6.64 C13.3487327,6.75264685 13.1982728,6.81798944 13.04,6.82241461 L13.04,6.82241461 Z M5.6984,13.1928927 C5.53714112,13.1956471 5.38164813,13.1328419 5.26760311,13.0187969 C5.15355809,12.9047519 5.09075294,12.7492589 5.0936,12.588 L5.0936,3.4152 C5.0936,3.08117818 5.36437818,2.8104 5.6984,2.8104 C6.03242182,2.8104 6.3032,3.08117818 6.3032,3.4152 L6.3032,12.588 C6.29518849,12.9186465 6.02904649,13.1847885 5.6984,13.1928927 L5.6984,13.1928927 Z M5.6984,13.1928024 C5.53831678,13.1932636 5.3851604,13.1275424 5.2752,13.0112 L2.4752,10.2112 C2.24014761,9.97813584 2.23853584,9.59865239 2.4716,9.3636 C2.70466416,9.12854761 3.08414761,9.12693584 3.3192,9.36 L6.1192,12.16 C6.28848676,12.3327837 6.33853901,12.5898175 6.2464558,12.8134978 C6.1543726,13.0371782 5.93786735,13.1844774 5.696,13.188 L5.6984,13.1928024 Z",id:"Shape",fill:"#1890FF"}))))))))))},s=o.forwardRef(function(e,i){return o.createElement(u,p({svgRef:i},e))}),E=t.p+"static/icon_arrow_blue.4c1b440d.svg"},54732:function(Pt,L,t){"use strict";t.d(L,{r:function(){return s}});var o=t(67294),x,T=["svgRef","title"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},p.apply(this,arguments)}function v(e,i){if(e==null)return{};var a=f(e,i),r,n;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],!(i.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(a[r]=e[r]))}return a}function f(e,i){if(e==null)return{};var a={},r=Object.keys(e),n,l;for(l=0;l<r.length;l++)n=r[l],!(i.indexOf(n)>=0)&&(a[n]=e[n]);return a}var u=function(i){var a=i.svgRef,r=i.title,n=v(i,T);return o.createElement("svg",p({width:"12px",height:"12px",viewBox:"0 0 12 12",ref:a},n),r?o.createElement("title",null,r):null,x||(x=o.createElement("g",{id:"\\u5BF9\\u6BD4",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},o.createElement("g",{id:"13.\\u5BF9\\u6BD4\\u7ED3\\u679C",transform:"translate(-399.000000, -706.000000)",fill:"#000000",fillRule:"nonzero"},o.createElement("g",{id:"Group-42",transform:"translate(0.000000, 534.000000)"},o.createElement("g",{id:"Group-41",transform:"translate(0.000000, 107.000000)"},o.createElement("g",{id:"Group-22",transform:"translate(20.000000, 1.000000)"},o.createElement("g",{id:"Group",transform:"translate(377.000000, 59.000000)"},o.createElement("g",{id:"\\u94FE\\u63A5",transform:"translate(0.000000, 3.000000)"},o.createElement("rect",{id:"Rectangle",opacity:0,x:0,y:0,width:16,height:16}),o.createElement("path",{d:"M11.91,7.92 C11.7153722,8.09503346 11.4186893,8.09033311 11.2297039,7.90922206 C11.0407184,7.72811102 11.0234032,7.43189657 11.19,7.23 L12.06,6.32 C12.709515,5.51696592 12.6264975,4.34816777 11.87,3.645 C11.115,2.86 10,2.79 9.37,3.45 L6.94,6 C6.29048502,6.80303408 6.37350246,7.97183223 7.13,8.675 C7.3238618,8.87001873 7.3238618,9.18498127 7.13,9.38 C7.0361167,9.47465633 6.90831877,9.52789916 6.775,9.52789916 C6.64168123,9.52789916 6.5138833,9.47465633 6.42,9.38 C5.29380253,8.29148422 5.21051969,6.51405308 6.23,5.325 L8.66,2.79 C9.705,1.7 11.48,1.79 12.61,2.99 C13.7040886,4.07696429 13.7802373,5.82185565 12.785,7 L11.91,7.92 Z M3.59,8.08 C3.78462784,7.90496654 4.0813107,7.90966689 4.27029614,8.09077794 C4.45928159,8.27188898 4.47659677,8.56810343 4.31,8.77 L3.44,9.68 C2.79048502,10.4830341 2.87350246,11.6518322 3.63,12.355 C4.385,13.14 5.5,13.21 6.13,12.55 L8.56,10 C9.20951498,9.19696592 9.12649754,8.02816777 8.37,7.325 C8.1761382,7.12998127 8.1761382,6.81501873 8.37,6.62 C8.4638833,6.52534367 8.59168123,6.47210084 8.725,6.47210084 C8.85831877,6.47210084 8.9861167,6.52534367 9.08,6.62 C10.2061975,7.70851578 10.2894803,9.48594692 9.27,10.675 L6.84,13.21 C5.795,14.3 4.02,14.21 2.89,13.01 C1.79591137,11.9230357 1.71976275,10.1781444 2.715,9 L3.59,8.08 Z",id:"Shape"}))))))))))},s=o.forwardRef(function(e,i){return o.createElement(u,p({svgRef:i},e))}),E=t.p+"static/icon_link.0476abd6.svg"}}]);
