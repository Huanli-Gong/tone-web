(window.webpackJsonp=window.webpackJsonp||[]).push([[24,9],{"3+Ak":function(se,U,e){"use strict";e.r(U);var k=e("g9YV"),T=e("wCAj"),m=e("9og8"),C=e("k1fw"),O=e("sPJy"),b=e("bE4q"),r=e("tJVT"),p=e("fu2T"),g=e("gK9i"),P=e("qqnG"),h=e("WmNS"),v=e.n(h),M=e("q1tI"),o=e.n(M),A=e("X72a"),R=e("hZgC"),N=e("I7pn"),ne=e("9kvl"),ae=e("vOnD"),H=e("iJD5"),n=e("ubKS"),ee=e("c+yx"),J,re=ae.a.div(J||(J=Object(P.a)([`
    .breadcrumb{
        height:50px;
        line-height:50px;
        padding-left:24px;
    }
    .content{
        //background:#fff;
        width: 97%;
        margin: 0 auto;
        height: auto;
        .site-collapse-custom-collapse{
            margin-bottom:16px;
            background:#fff;
            .total{
                height:20px;
                width:30px;
                border-radius: 12px;
                background: rgba(140,140,140,0.10);
                display: inline-block;
                text-align: center;
                margin-left:7px;
                color:rgba(0,0,0,0.75);
                font-size:12px;
                vertical-align: middle;
            }
            .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box{
                padding-top:2px;
                padding-bottom:1px;
            }
        }
    }
`]))),oe=function(ge){var ve=g.a.Panel,pe=ge.match.params.type,de=Object(M.useState)(0),me=Object(r.a)(de,2),le=me[0],he=me[1],u=Object(M.useState)([]),l=Object(r.a)(u,2),a=l[0],i=l[1],s=Object(M.useState)(0),d=Object(r.a)(s,2),_=d[0],c=d[1],B=Object(M.useState)([]),S=Object(r.a)(B,2),x=S[0],E=S[1],I=Object(M.useState)(!1),L=Object(r.a)(I,2),F=L[0],Y=L[1],Q=Object(M.useState)({page_num:1,page_size:10}),G=Object(r.a)(Q,2),te=G[0],fe=G[1],Ee=Object(M.useState)({page_num:1,page_size:10}),D=Object(r.a)(Ee,2),t=D[0],f=D[1],y=Object(R.e)(),j=y.height,W=new URLSearchParams(location.search),z=[W.get("id"),W.get("name")],V=z[0],Z=z[1],ie=function(){return o.a.createElement(b.a,{className:"breadcrumb"},o.a.createElement(b.a.Item,null,o.a.createElement("span",{style:{cursor:"pointer"},onClick:function(){return ne.e.push("/system/suite")}},"Test Suite\u7BA1\u7406")),o.a.createElement(b.a.Item,null,o.a.createElement("span",{style:{cursor:"pointer",color:"rgba(0,0,0,0.85)"}},pe==1?"Suite":"Conf",o.a.createElement("span",{style:{color:"rgba(0,0,0,0.65)"}},"(",Z,")"),"\u5F15\u7528\u8BE6\u60C5")))},ce=Object(C.a)({flag:"job"},te),_e=Object(C.a)({flag:"template"},t);pe=="suite"?(ce.suite_id=V,_e.suite_id=V):(ce.case_id_list=V,_e.case_id_list=V);var ye=function(){var X=Object(m.a)(v.a.mark(function w(){var K;return v.a.wrap(function($){for(;;)switch($.prev=$.next){case 0:return Y(!0),$.next=3,Object(n.c)(ce);case 3:K=$.sent,K.code==200?(he(K.total),i(K.data),Y(!1)):Object(ee.r)(K.code,K.msg);case 5:case"end":return $.stop()}},w)}));return function(){return X.apply(this,arguments)}}(),Ce=function(){var X=Object(m.a)(v.a.mark(function w(){var K;return v.a.wrap(function($){for(;;)switch($.prev=$.next){case 0:return Y(!0),$.next=3,Object(n.c)(_e);case 3:K=$.sent,K.code==200?(c(K.total),E(K.data),Y(!1)):Object(ee.r)(K.code,K.msg);case 5:case"end":return $.stop()}},w)}));return function(){return X.apply(this,arguments)}}(),be=Object(M.useMemo)(function(){return le>0},[le]);Object(M.useEffect)(function(){ye(),Ce()},[te,t]);var Pe=[{title:"Workspace\u540D\u79F0",dataIndex:"ws_show_name",key:"ws_show_name"},{title:"Job ID",dataIndex:"id",key:"id"},{title:"Job\u540D\u79F0",dataIndex:"name",key:"name",render:function(w,K){return o.a.createElement("span",{onClick:function(){return window.open("/ws/".concat(K.ws_id,"/test_result/").concat(K.id))},style:{color:"#1890FF",cursor:"pointer"}},w)}},{title:"\u72B6\u6001",dataIndex:"state",key:"state",render:function(w,K){return o.a.createElement(H.c,K)}},{title:"\u521B\u5EFA\u4EBA",dataIndex:"creator_name",key:"creator_name"},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"gmt_created",key:"gmt_created"}],De=[{title:"Workspace\u540D\u79F0",dataIndex:"ws_show_name",key:"ws_show_name"},{title:"\u6A21\u677F\u540D\u79F0",dataIndex:"name",key:"name",render:function(w,K){return o.a.createElement("span",{onClick:function(){return window.open("/ws/".concat(K.ws_id,"/test_template/").concat(K.id,"/preview"))},style:{color:"#1890FF",cursor:"pointer"}},w)}},{title:"\u521B\u5EFA\u4EBA",dataIndex:"creator_name",key:"creator_name"},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"gmt_created",key:"gmt_created"}],Oe=function(w){return w.children};return o.a.createElement(re,null,o.a.createElement(ie,null),o.a.createElement("div",{className:"content",style:{height:j-88,overflowY:"auto"}},o.a.createElement(Oe,null,le>0&&o.a.createElement(g.a,{bordered:!1,ghost:!0,defaultActiveKey:"1",expandIcon:function(w){var K=w.isActive;return o.a.createElement(A.a,{rotate:K?90:0})},className:"site-collapse-custom-collapse"},o.a.createElement(ve,{header:o.a.createElement("div",null,"Job\u5217\u8868",o.a.createElement("span",{className:"total"},le)),key:"1",className:"site-collapse-custom-panel"},o.a.createElement(T.a,{dataSource:a,columns:Pe,size:"small",loading:F,rowKey:"id",pagination:!1}),o.a.createElement(N.a,{pageSize:te.page_size,currentPage:te.page_num,total:le,onPageChange:function(w,K){return fe(Object(C.a)(Object(C.a)({},te),{},{page_size:K,page_num:w}))}}))),_>0&&o.a.createElement(g.a,{bordered:!1,ghost:!0,defaultActiveKey:be?"0":"1",expandIcon:function(w){var K=w.isActive;return o.a.createElement(A.a,{rotate:K?90:0})},className:"site-collapse-custom-collapse"},o.a.createElement(ve,{header:o.a.createElement("div",null,"\u6A21\u7248\u5217\u8868",o.a.createElement("span",{className:"total"},_)),key:"1",className:"site-collapse-custom-panel"},o.a.createElement(T.a,{dataSource:x,columns:De,size:"small",loading:F,rowKey:"id",pagination:!1}),o.a.createElement(N.a,{pageSize:t.page_size,currentPage:t.page_num,total:_,onPageChange:function(w,K){return f(Object(C.a)(Object(C.a)({},t),{},{page_size:K,page_num:w}))}}))))))};U.default=oe},"3dVZ":function(se,U,e){},I7pn:function(se,U,e){"use strict";var k=e("DjyN"),T=e("NUBc"),m=e("jCWc"),C=e("kPKH"),O=e("0Owb"),b=e("PpiC"),r=e("14J3"),p=e("BMrR"),g=e("qqnG"),P=e("q1tI"),h=e.n(P),v=e("vOnD"),M,o=Object(v.a)(p.a)(M||(M=Object(g.a)([`
    margin-top:16px;
    margin-bottom:16px;
    width : 100%;
`])));U.a=function(A){var R=A.total,N=R===void 0?0:R,ne=A.largePage,ae=ne===void 0?!1:ne,H=A.pageSize,n=H===void 0?10:H,ee=A.currentPage,J=ee===void 0?1:ee,re=A.onPageChange,oe=Object(b.a)(A,["total","largePage","pageSize","currentPage","onPageChange"]),ue=["10","20","50","100"];return N===0?h.a.createElement(o,Object(O.a)({className:"commom_pagination",justify:"space-around"},oe)):(ae&&(ue=ue.concat(["200","500"])),h.a.createElement(o,Object(O.a)({className:"commom_pagination",justify:"space-around"},oe),h.a.createElement(C.a,{span:4,style:{textAlign:"left"}},"\u5171".concat(N,"\u6761")),h.a.createElement(C.a,{span:20,style:{textAlign:"right"}},h.a.createElement(T.a,{total:N,pageSize:n,current:J,size:"small",showSizeChanger:!0,pageSizeOptions:ue,onChange:re,showQuickJumper:!0,onShowSizeChange:re}))))}},Lyp1:function(se,U,e){"use strict";var k=e("VTBJ"),T=e("q1tI"),m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"},C=m,O=e("6VBw"),b=function(g,P){return T.createElement(O.a,Object(k.a)(Object(k.a)({},g),{},{ref:P,icon:C}))};b.displayName="QuestionCircleOutlined";var r=U.a=T.forwardRef(b)},UmKF:function(se,U,e){se.exports={test_result_name:"test_result_name___1RBzL",test_summary_item:"test_summary_item___3-Yoh",test_summary_item_right:"test_summary_item_right___2UQVi",test_summary_item_right_unellipsis:"test_summary_item_right_unellipsis___2cRIc",test_summary_row:"test_summary_row___1zXMg",detail_collection:"detail_collection___1_th-",offline_flag:"offline_flag___3BdpH",ellips_column_refclass:"ellips_column_refclass___30H4W",tag_popover_style:"tag_popover_style___1x8MG",table_question_tooltip:"table_question_tooltip___1Ur7e",join_baseline:"join_baseline___Jgafh",select_baseline:"select_baseline___2nHPA"}},X72a:function(se,U,e){"use strict";var k=e("VTBJ"),T=e("q1tI"),m={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"}}]},name:"caret-right",theme:"outlined"},C=m,O=e("6VBw"),b=function(g,P){return T.createElement(O.a,Object(k.a)(Object(k.a)({},g),{},{ref:P,icon:C}))};b.displayName="CaretRightOutlined";var r=U.a=T.forwardRef(b)},fu2T:function(se,U,e){"use strict";var k=e("EFp3"),T=e.n(k),m=e("3dVZ"),C=e.n(m)},gK9i:function(se,U,e){"use strict";var k=e("wx14"),T=e("rePB"),m=e("q1tI"),C=e("KQm4"),O=e("1OyB"),b=e("vuIU"),r=e("Ji7U"),p=e("LK+K"),g=e("U8pU"),P=e("TSYQ"),h=e.n(P),v=e("Gytx"),M=e.n(v),o=e("Zm9Q"),A=e("8XRh"),R=e("ODXe"),N=m.forwardRef(function(i,s){var d,_=i.prefixCls,c=i.forceRender,B=i.className,S=i.style,x=i.children,E=i.isActive,I=i.role,L=m.useState(E||c),F=Object(R.a)(L,2),Y=F[0],Q=F[1];return m.useEffect(function(){(c||E)&&Q(!0)},[c,E]),Y?m.createElement("div",{ref:s,className:h()("".concat(_,"-content"),(d={},Object(T.a)(d,"".concat(_,"-content-active"),E),Object(T.a)(d,"".concat(_,"-content-inactive"),!E),d),B),style:S,role:I},m.createElement("div",{className:"".concat(_,"-content-box")},x)):null});N.displayName="PanelContent";var ne=N,ae=function(i){Object(r.a)(d,i);var s=Object(p.a)(d);function d(){var _;Object(O.a)(this,d);for(var c=arguments.length,B=new Array(c),S=0;S<c;S++)B[S]=arguments[S];return _=s.call.apply(s,[this].concat(B)),_.onItemClick=function(){var x=_.props,E=x.onItemClick,I=x.panelKey;typeof E=="function"&&E(I)},_.handleKeyPress=function(x){(x.key==="Enter"||x.keyCode===13||x.which===13)&&_.onItemClick()},_.renderIcon=function(){var x=_.props,E=x.showArrow,I=x.expandIcon,L=x.prefixCls,F=x.collapsible;if(!E)return null;var Y=typeof I=="function"?I(_.props):m.createElement("i",{className:"arrow"});return Y&&m.createElement("div",{className:"".concat(L,"-expand-icon"),onClick:F==="header"?_.onItemClick:null},Y)},_.renderTitle=function(){var x=_.props,E=x.header,I=x.prefixCls,L=x.collapsible;return m.createElement("span",{className:"".concat(I,"-header-text"),onClick:L==="header"?_.onItemClick:null},E)},_}return Object(b.a)(d,[{key:"shouldComponentUpdate",value:function(c){return!M()(this.props,c)}},{key:"render",value:function(){var c,B,S=this.props,x=S.className,E=S.id,I=S.style,L=S.prefixCls,F=S.headerClass,Y=S.children,Q=S.isActive,G=S.destroyInactivePanel,te=S.accordion,fe=S.forceRender,Ee=S.openMotion,D=S.extra,t=S.collapsible,f=t==="disabled",y=t==="header",j=h()((c={},Object(T.a)(c,"".concat(L,"-item"),!0),Object(T.a)(c,"".concat(L,"-item-active"),Q),Object(T.a)(c,"".concat(L,"-item-disabled"),f),c),x),W=h()("".concat(L,"-header"),(B={},Object(T.a)(B,F,F),Object(T.a)(B,"".concat(L,"-header-collapsible-only"),y),B)),z={className:W,"aria-expanded":Q,onKeyPress:this.handleKeyPress};y||(z.onClick=this.onItemClick,z.role=te?"tab":"button",z.tabIndex=f?-1:0);var V=D!=null&&typeof D!="boolean";return m.createElement("div",{className:j,style:I,id:E},m.createElement("div",z,this.renderIcon(),this.renderTitle(),V&&m.createElement("div",{className:"".concat(L,"-extra")},D)),m.createElement(A.b,Object(k.a)({visible:Q,leavedClassName:"".concat(L,"-content-hidden")},Ee,{forceRender:fe,removeOnLeave:G}),function(Z,ie){var ce=Z.className,_e=Z.style;return m.createElement(ne,{ref:ie,prefixCls:L,className:ce,style:_e,isActive:Q,forceRender:fe,role:te?"tabpanel":null},Y)}))}}]),d}(m.Component);ae.defaultProps={showArrow:!0,isActive:!1,onItemClick:function(){},headerClass:"",forceRender:!1};var H=ae;function n(i){var s=i;if(!Array.isArray(s)){var d=Object(g.a)(s);s=d==="number"||d==="string"?[s]:[]}return s.map(function(_){return String(_)})}var ee=function(i){Object(r.a)(d,i);var s=Object(p.a)(d);function d(_){var c;Object(O.a)(this,d),c=s.call(this,_),c.onClickItem=function(E){var I=c.state.activeKey;if(c.props.accordion)I=I[0]===E?[]:[E];else{I=Object(C.a)(I);var L=I.indexOf(E),F=L>-1;F?I.splice(L,1):I.push(E)}c.setActiveKey(I)},c.getNewChild=function(E,I){if(!E)return null;var L=c.state.activeKey,F=c.props,Y=F.prefixCls,Q=F.openMotion,G=F.accordion,te=F.destroyInactivePanel,fe=F.expandIcon,Ee=F.collapsible,D=E.key||String(I),t=E.props,f=t.header,y=t.headerClass,j=t.destroyInactivePanel,W=t.collapsible,z=!1;G?z=L[0]===D:z=L.indexOf(D)>-1;var V=W!=null?W:Ee,Z={key:D,panelKey:D,header:f,headerClass:y,isActive:z,prefixCls:Y,destroyInactivePanel:j!=null?j:te,openMotion:Q,accordion:G,children:E.props.children,onItemClick:V==="disabled"?null:c.onClickItem,expandIcon:fe,collapsible:V};return typeof E.type=="string"?E:m.cloneElement(E,Z)},c.getItems=function(){var E=c.props.children;return Object(o.a)(E).map(c.getNewChild)},c.setActiveKey=function(E){"activeKey"in c.props||c.setState({activeKey:E}),c.props.onChange(c.props.accordion?E[0]:E)};var B=_.activeKey,S=_.defaultActiveKey,x=S;return"activeKey"in _&&(x=B),c.state={activeKey:n(x)},c}return Object(b.a)(d,[{key:"shouldComponentUpdate",value:function(c,B){return!M()(this.props,c)||!M()(this.state,B)}},{key:"render",value:function(){var c,B=this.props,S=B.prefixCls,x=B.className,E=B.style,I=B.accordion,L=h()((c={},Object(T.a)(c,S,!0),Object(T.a)(c,x,!!x),c));return m.createElement("div",{className:L,style:E,role:I?"tablist":null},this.getItems())}}],[{key:"getDerivedStateFromProps",value:function(c){var B={};return"activeKey"in c&&(B.activeKey=n(c.activeKey)),B}}]),d}(m.Component);ee.defaultProps={prefixCls:"rc-collapse",onChange:function(){},accordion:!1,destroyInactivePanel:!1},ee.Panel=H;var J=ee,re=J,oe=J.Panel,ue=e("UESt"),ge=e("axMd"),ve=e("Ya77"),pe=e("H84U"),de=function(s){var d=m.useContext(pe.b),_=d.getPrefixCls,c=s.prefixCls,B=s.className,S=B===void 0?"":B,x=s.showArrow,E=x===void 0?!0:x,I=_("collapse",c),L=h()(Object(T.a)({},"".concat(I,"-no-arrow"),!E),S);return m.createElement(re.Panel,Object(k.a)({},s,{prefixCls:I,className:L}))},me=de,le=e("EXcs"),he=e("0n0R"),u=function(s){var d,_=m.useContext(pe.b),c=_.getPrefixCls,B=_.direction,S=s.prefixCls,x=s.className,E=x===void 0?"":x,I=s.bordered,L=I===void 0?!0:I,F=s.ghost,Y=s.expandIconPosition,Q=Y===void 0?"start":Y,G=c("collapse",S),te=m.useMemo(function(){return Q==="left"?"start":Q==="right"?"end":Q},[Q]),fe=function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},j=s.expandIcon,W=j?j(y):m.createElement(ue.a,{rotate:y.isActive?90:void 0});return Object(he.a)(W,function(){return{className:h()(W.props.className,"".concat(G,"-arrow"))}})},Ee=h()("".concat(G,"-icon-position-").concat(te),(d={},Object(T.a)(d,"".concat(G,"-borderless"),!L),Object(T.a)(d,"".concat(G,"-rtl"),B==="rtl"),Object(T.a)(d,"".concat(G,"-ghost"),!!F),d),E),D=Object(k.a)(Object(k.a)({},le.a),{motionAppear:!1,leavedClassName:"".concat(G,"-content-hidden")}),t=function(){var y=s.children;return Object(ge.a)(y).map(function(j,W){var z;if((z=j.props)===null||z===void 0?void 0:z.disabled){var V=j.key||String(W),Z=j.props,ie=Z.disabled,ce=Z.collapsible,_e=Object(k.a)(Object(k.a)({},Object(ve.a)(j.props,["disabled"])),{key:V,collapsible:ce!=null?ce:ie?"disabled":void 0});return Object(he.a)(j,_e)}return j})};return m.createElement(re,Object(k.a)({openMotion:D},s,{expandIcon:fe,prefixCls:G,className:Ee}),t())};u.Panel=me;var l=u,a=U.a=l},iJD5:function(se,U,e){"use strict";e.d(U,"a",function(){return he}),e.d(U,"j",function(){return u}),e.d(U,"k",function(){return a}),e.d(U,"b",function(){return d}),e.d(U,"i",function(){return _}),e.d(U,"g",function(){return c}),e.d(U,"h",function(){return B}),e.d(U,"c",function(){return Y}),e.d(U,"f",function(){return te}),e.d(U,"d",function(){return fe}),e.d(U,"e",function(){return Ee});var k=e("DYRE"),T=e("zeV3"),m=e("0Owb"),C=e("Q9mQ"),O=e("diRs"),b=e("+BJd"),r=e("mr32"),p=e("qqnG"),g=e("jCWc"),P=e("kPKH"),h=e("14J3"),v=e("BMrR"),M=e("tJVT"),o=e("miYZ"),A=e("tsqr"),R=e("5Dmo"),N=e("3S7+"),ne=e("sPJy"),ae=e("bE4q"),H=e("q1tI"),n=e.n(H),ee=e("UmKF"),J=e.n(ee),re=e("G3dp"),oe=e("Lyp1"),ue=e("sxGJ"),ge=e.n(ue),ve=e("Ty5D"),pe=e("9kvl"),de=e("vOnD"),me=e("c+yx"),le,he=function(t,f){var y=Object(ve.h)(),j=y.ws_id;return n.a.createElement(ae.a,{style:{marginBottom:t.bottomHeight}},n.a.createElement(ae.a.Item,null,n.a.createElement("span",{style:{cursor:"pointer"},onClick:function(){return pe.e.push("/ws/".concat(j,"/test_result"))}},"\u6D4B\u8BD5\u7ED3\u679C")),n.a.createElement(ae.a.Item,null,"\u7ED3\u679C\u8BE6\u60C5"))},u=function(t){return t==="success"||t===!0?n.a.createElement("span",{style:{fontWeight:500,color:"#81BF84"}},"Success"):t==="fail"||t===!1?n.a.createElement("span",{style:{fontWeight:500,color:"#C84C5A"}},"Fail"):t==="running"?n.a.createElement("span",{style:{fontWeight:500,color:"#649FF6"}},"Running"):t==="stop"?n.a.createElement("span",{style:{fontWeight:500,color:"#1D1D1D"}},"Stop"):t==="pending"?n.a.createElement("span",{style:{fontWeight:500,color:"#1D1D1D"}},"Pending"):t==="skip"?n.a.createElement("span",{style:{fontWeight:500,color:"#1D1D1D"}},"Skip"):n.a.createElement(n.a.Fragment,null)},l=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"-";return{render:function(y,j){return y||t}}},a=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"-";return{ellipsis:{showTitle:!1},render:function(y){return y?n.a.createElement(N.a,{placement:"topLeft",title:y,overlayClassName:J.a.tootip_overflow},y):t}}},i=function(t){var f=t.className;Object(H.useEffect)(function(){var y=new ge.a(f);return y.on("success",function(j){A.default.success("\u590D\u5236\u6210\u529F"),j.clearSelection()}),function(){y.destroy()}},[])},s=function(t){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"100%";if(!t)return"-";var y=Object(H.useRef)(),j=Object(H.useState)(!1),W=Object(M.a)(j,2),z=W[0],V=W[1];return Object(H.useEffect)(function(){var Z=y.current.clientWidth,ie=y.current.scrollWidth;V(Z<ie)},[]),z?n.a.createElement(v.a,{className:J.a.ellips_copy_column,style:{width:f}},n.a.createElement("div",{style:{width:"calc( 100% - 28px)"},className:J.a.ellips_copy_column},t),n.a.createElement("span",{className:"ellips_copy_btn",style:{color:"#4B88DD",cursor:"pointer"},"data-clipboard-text":t},"\u590D\u5236")):n.a.createElement("div",{ref:y,style:{width:f},className:J.a.ellips_copy_column},t)},d=function(t){var f=t.title,y=t.width,j=y===void 0?"100%":y,W=t.onEdit,z=t.access,V=Object(H.useRef)(),Z=z?n.a.createElement(re.a,{style:{marginLeft:6,cursor:"pointer"},onClick:W}):n.a.createElement(re.a,{style:{marginLeft:6,cursor:"pointer"},onClick:function(){return Object(me.a)()}});return n.a.createElement("div",{ref:V,style:{width:j}},n.a.createElement(v.a,{style:{width:j},justify:"start",align:"middle"},n.a.createElement(N.a,{placement:"topLeft",title:f},n.a.createElement("span",{style:{width:j-40,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},f||"-")),Z))},_=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"-";return{ellipsis:{showTitle:!1},render:function(y){return y?n.a.createElement(N.a,{overlayClassName:J.a.tootip_overflow,placement:"topLeft",title:n.a.createElement(v.a,null,n.a.createElement(P.a,{span:24},y),n.a.createElement(P.a,{span:24},n.a.createElement(v.a,{justify:"center"},n.a.createElement("span",{className:"test_result_tooptip_btn",style:{cursor:"pointer"},"data-clipboard-text":y},"\u590D\u5236"))))},y):t}}},c=function(t){return t==="decline"?"#C84C5A":t==="normal"?"#000000":t==="increase"?"#81BF84":""},B=function(t,f){return t==="decline"?n.a.createElement("span",{style:{color:"#C84C5A"}},f):t==="normal"?n.a.createElement("span",{style:{color:"#000000"}},f):t==="increase"?n.a.createElement("span",{style:{color:"#81BF84"}},f):f||"-"},S=Object(de.a)(r.a)(le||(le=Object(p.a)([`
    font-weight: 500;
    width: 72px;
    text-align: center;
    `,`
    text-transform: capitalize;
`])),function(D){var t=D.no_margin;return t?"margin-right: 0;":""}),x=function(t){return n.a.createElement(S,t)},E=function(t){return n.a.createElement(N.a,{title:"Job\u72B6\u6001",placement:"bottom"},n.a.createElement(S,t))},I=function(t){var f=t.title;return n.a.createElement(O.a,{title:f,placement:"right",trigger:"hover",overlayClassName:J.a.tag_popover_style},n.a.createElement(oe.a,{style:{color:"rgba(0, 0, 0, 0.65)",verticalAlign:"middle"}}))},L=function(t){var f=t.state;return n.a.createElement(x,Object(m.a)({},t,{color:G(f),style:!Q.get(f)&&{color:"#1d1d1d"}}),f==="success"?"complete":f)},F=function(t){var f=t.state;return n.a.createElement(E,Object(m.a)({},t,{color:G(f),style:!Q.get(f)&&{color:"#1d1d1d"}}),f==="success"?"complete":f)},Y=function(t){var f=t.state,y=t.run_state,j=y===void 0?"":y,W=t.state_desc,z=Object(ve.h)(),V=z.ws_id;return f==="running"?j?n.a.createElement(T.b,{size:0},n.a.createElement(L,t,f),n.a.createElement(I,{title:"\u672A\u5206\u914D\u5230\u6D4B\u8BD5\u673A\u5668"})):n.a.createElement(T.b,{size:0},n.a.createElement(L,t,f),n.a.createElement(I,{title:"\u6B63\u5728\u8FD0\u884C\u4E2D\uFF0C\u8BF7\u8010\u5FC3\u7B49\u5F85"})):f==="pending"&&W?n.a.createElement(T.b,{size:0},n.a.createElement(L,t,f),n.a.createElement(I,{title:n.a.createElement("span",{dangerouslySetInnerHTML:{__html:W.replace(/(\d+)/g,'<a href="/ws/'.concat(V,'/test_result/$1" target="_blank">$1</a>'))}})})):n.a.createElement(L,t)},Q=new Map([["success","#81BF84"],["pass","#81BF84"],["running","#649FF6"],["fail","#C84C5A"]]),G=function(t){return Q.get(t)||"#D9D9D9"},te=function(t){return n.a.createElement(F,Object(m.a)({},t,{no_margin:1}))},fe=function(t){var f=t.title,y=t.desc,j=t.placement,W=j===void 0?"bottom":j;return n.a.createElement(T.b,null,n.a.createElement("span",{style:{color:"rgba(0, 0, 0, 0.85)"}},f),n.a.createElement(N.a,{overlayClassName:J.a.table_question_tooltip,placement:W,arrowPointAtCenter:!0,title:y,color:"#fff"},n.a.createElement(oe.a,{style:{color:"rgba(0, 0, 0, 0.65)"}})))},Ee=function(t){var f=t.title,y=t.test_value,j=t.value_list,W=t.cv_value,z=t.max_value,V=t.min_value,Z=t.metric,ie=t.result,ce=t.rowkey,_e="copyColumnTd".concat(ce||"");Object(H.useEffect)(function(){var q=new ge.a("#"+_e);return q.on("success",function($){A.default.success("\u590D\u5236\u6210\u529F"),$.clearSelection()}),function(){q&&q.destroy()}},[]);var ye=function($){return $?new Number($).toFixed(2):null},Ce=ye(z),be=ye(V),Pe=W,De=ye(y),Oe=j.map(function(q){return ye(q)}),X="".concat(Z," ").concat(f,`:
Avg: `).concat(De,`
CV:  `).concat(Pe);X+=Ce?`
Max: `.concat(Ce):"",X+=be?`
Min: `.concat(be):"",X+=Oe.length?`
Test Record
`:"",X+=Oe.reduce(function(q,$,Te){return q.concat("(".concat(Te+1,") ").concat($,`
`))},"");var w="".concat(De,"\xB1").concat(Pe),K=function(){return ie==="decline"?n.a.createElement("span",{className:J.a.result_popover_span,style:{color:"#C84C5A"}},w):ie==="increase"?n.a.createElement("span",{className:J.a.result_popover_span,style:{color:"#81BF84"}},w):n.a.createElement("span",{className:J.a.result_popover_span,style:{color:"rgba(0, 0, 0, 0.65)"}},w)};return n.a.createElement(O.a,{overlayClassName:J.a.metric_list_copy,title:n.a.createElement(v.a,{justify:"space-between"},n.a.createElement("b",null,f),n.a.createElement("span",{id:_e,style:{color:"#1890FF",cursor:"pointer"},"data-clipboard-text":X},"\u590D\u5236")),content:n.a.createElement(n.a.Fragment,null,n.a.createElement(v.a,null,n.a.createElement("b",null,"Avg\uFF1A"),n.a.createElement("span",null,De)),n.a.createElement(v.a,null,n.a.createElement("b",null,"CV\uFF1A"),n.a.createElement("span",null,Pe)),n.a.createElement(v.a,null,n.a.createElement("b",null,"Max\uFF1A"),n.a.createElement("span",null,Ce)),n.a.createElement(v.a,null,n.a.createElement("b",null,"Min\uFF1A"),n.a.createElement("span",null,be)),Oe.length>0&&n.a.createElement(v.a,{style:{marginTop:16}},n.a.createElement("b",null,"Test Record")),Oe.map(function(q,$){return n.a.createElement(v.a,{key:$},"(".concat($+1,")").concat(q))}))},K())}},sxGJ:function(se,U,e){/*!
 * clipboard.js v2.0.8
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(T,m){se.exports=m()})(this,function(){return function(){var k={134:function(O,b,r){"use strict";r.d(b,{default:function(){return he}});var p=r(279),g=r.n(p),P=r(370),h=r.n(P),v=r(817),M=r.n(v);function o(u){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?o=function(a){return typeof a}:o=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},o(u)}function A(u,l){if(!(u instanceof l))throw new TypeError("Cannot call a class as a function")}function R(u,l){for(var a=0;a<l.length;a++){var i=l[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(u,i.key,i)}}function N(u,l,a){return l&&R(u.prototype,l),a&&R(u,a),u}var ne=function(){function u(l){A(this,u),this.resolveOptions(l),this.initSelection()}return N(u,[{key:"resolveOptions",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=a.action,this.container=a.container,this.emitter=a.emitter,this.target=a.target,this.text=a.text,this.trigger=a.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"createFakeElement",value:function(){var a=document.documentElement.getAttribute("dir")==="rtl";this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[a?"right":"left"]="-9999px";var i=window.pageYOffset||document.documentElement.scrollTop;return this.fakeElem.style.top="".concat(i,"px"),this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.fakeElem}},{key:"selectFake",value:function(){var a=this,i=this.createFakeElement();this.fakeHandlerCallback=function(){return a.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.container.appendChild(i),this.selectedText=M()(i),this.copyText(),this.removeFake()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=M()(this.target),this.copyText()}},{key:"copyText",value:function(){var a;try{a=document.execCommand(this.action)}catch(i){a=!1}this.handleResult(a)}},{key:"handleResult",value:function(a){this.emitter.emit(a?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"copy";if(this._action=a,this._action!=="copy"&&this._action!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(a){if(a!==void 0)if(a&&o(a)==="object"&&a.nodeType===1){if(this.action==="copy"&&a.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(this.action==="cut"&&(a.hasAttribute("readonly")||a.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);this._target=a}else throw new Error('Invalid "target" value, use a valid Element')},get:function(){return this._target}}]),u}(),ae=ne;function H(u){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?H=function(a){return typeof a}:H=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},H(u)}function n(u,l){if(!(u instanceof l))throw new TypeError("Cannot call a class as a function")}function ee(u,l){for(var a=0;a<l.length;a++){var i=l[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(u,i.key,i)}}function J(u,l,a){return l&&ee(u.prototype,l),a&&ee(u,a),u}function re(u,l){if(typeof l!="function"&&l!==null)throw new TypeError("Super expression must either be null or a function");u.prototype=Object.create(l&&l.prototype,{constructor:{value:u,writable:!0,configurable:!0}}),l&&oe(u,l)}function oe(u,l){return oe=Object.setPrototypeOf||function(i,s){return i.__proto__=s,i},oe(u,l)}function ue(u){var l=pe();return function(){var i=de(u),s;if(l){var d=de(this).constructor;s=Reflect.construct(i,arguments,d)}else s=i.apply(this,arguments);return ge(this,s)}}function ge(u,l){return l&&(H(l)==="object"||typeof l=="function")?l:ve(u)}function ve(u){if(u===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u}function pe(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(u){return!1}}function de(u){return de=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},de(u)}function me(u,l){var a="data-clipboard-".concat(u);if(!!l.hasAttribute(a))return l.getAttribute(a)}var le=function(u){re(a,u);var l=ue(a);function a(i,s){var d;return n(this,a),d=l.call(this),d.resolveOptions(s),d.listenClick(i),d}return J(a,[{key:"resolveOptions",value:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof s.action=="function"?s.action:this.defaultAction,this.target=typeof s.target=="function"?s.target:this.defaultTarget,this.text=typeof s.text=="function"?s.text:this.defaultText,this.container=H(s.container)==="object"?s.container:document.body}},{key:"listenClick",value:function(s){var d=this;this.listener=h()(s,"click",function(_){return d.onClick(_)})}},{key:"onClick",value:function(s){var d=s.delegateTarget||s.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new ae({action:this.action(d),target:this.target(d),text:this.text(d),container:this.container,trigger:d,emitter:this})}},{key:"defaultAction",value:function(s){return me("action",s)}},{key:"defaultTarget",value:function(s){var d=me("target",s);if(d)return document.querySelector(d)}},{key:"defaultText",value:function(s){return me("text",s)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],d=typeof s=="string"?[s]:s,_=!!document.queryCommandSupported;return d.forEach(function(c){_=_&&!!document.queryCommandSupported(c)}),_}}]),a}(g()),he=le},828:function(O){var b=9;if(typeof Element!="undefined"&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}function p(g,P){for(;g&&g.nodeType!==b;){if(typeof g.matches=="function"&&g.matches(P))return g;g=g.parentNode}}O.exports=p},438:function(O,b,r){var p=r(828);function g(v,M,o,A,R){var N=h.apply(this,arguments);return v.addEventListener(o,N,R),{destroy:function(){v.removeEventListener(o,N,R)}}}function P(v,M,o,A,R){return typeof v.addEventListener=="function"?g.apply(null,arguments):typeof o=="function"?g.bind(null,document).apply(null,arguments):(typeof v=="string"&&(v=document.querySelectorAll(v)),Array.prototype.map.call(v,function(N){return g(N,M,o,A,R)}))}function h(v,M,o,A){return function(R){R.delegateTarget=p(R.target,M),R.delegateTarget&&A.call(v,R)}}O.exports=P},879:function(O,b){b.node=function(r){return r!==void 0&&r instanceof HTMLElement&&r.nodeType===1},b.nodeList=function(r){var p=Object.prototype.toString.call(r);return r!==void 0&&(p==="[object NodeList]"||p==="[object HTMLCollection]")&&"length"in r&&(r.length===0||b.node(r[0]))},b.string=function(r){return typeof r=="string"||r instanceof String},b.fn=function(r){var p=Object.prototype.toString.call(r);return p==="[object Function]"}},370:function(O,b,r){var p=r(879),g=r(438);function P(o,A,R){if(!o&&!A&&!R)throw new Error("Missing required arguments");if(!p.string(A))throw new TypeError("Second argument must be a String");if(!p.fn(R))throw new TypeError("Third argument must be a Function");if(p.node(o))return h(o,A,R);if(p.nodeList(o))return v(o,A,R);if(p.string(o))return M(o,A,R);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function h(o,A,R){return o.addEventListener(A,R),{destroy:function(){o.removeEventListener(A,R)}}}function v(o,A,R){return Array.prototype.forEach.call(o,function(N){N.addEventListener(A,R)}),{destroy:function(){Array.prototype.forEach.call(o,function(ne){ne.removeEventListener(A,R)})}}}function M(o,A,R){return g(document.body,o,A,R)}O.exports=P},817:function(O){function b(r){var p;if(r.nodeName==="SELECT")r.focus(),p=r.value;else if(r.nodeName==="INPUT"||r.nodeName==="TEXTAREA"){var g=r.hasAttribute("readonly");g||r.setAttribute("readonly",""),r.select(),r.setSelectionRange(0,r.value.length),g||r.removeAttribute("readonly"),p=r.value}else{r.hasAttribute("contenteditable")&&r.focus();var P=window.getSelection(),h=document.createRange();h.selectNodeContents(r),P.removeAllRanges(),P.addRange(h),p=P.toString()}return p}O.exports=b},279:function(O){function b(){}b.prototype={on:function(p,g,P){var h=this.e||(this.e={});return(h[p]||(h[p]=[])).push({fn:g,ctx:P}),this},once:function(p,g,P){var h=this;function v(){h.off(p,v),g.apply(P,arguments)}return v._=g,this.on(p,v,P)},emit:function(p){var g=[].slice.call(arguments,1),P=((this.e||(this.e={}))[p]||[]).slice(),h=0,v=P.length;for(h;h<v;h++)P[h].fn.apply(P[h].ctx,g);return this},off:function(p,g){var P=this.e||(this.e={}),h=P[p],v=[];if(h&&g)for(var M=0,o=h.length;M<o;M++)h[M].fn!==g&&h[M].fn._!==g&&v.push(h[M]);return v.length?P[p]=v:delete P[p],this}},O.exports=b,O.exports.TinyEmitter=b}},T={};function m(C){if(T[C])return T[C].exports;var O=T[C]={exports:{}};return k[C](O,O.exports,m),O.exports}return function(){m.n=function(C){var O=C&&C.__esModule?function(){return C.default}:function(){return C};return m.d(O,{a:O}),O}}(),function(){m.d=function(C,O){for(var b in O)m.o(O,b)&&!m.o(C,b)&&Object.defineProperty(C,b,{enumerable:!0,get:O[b]})}}(),function(){m.o=function(C,O){return Object.prototype.hasOwnProperty.call(C,O)}}(),m(134)}().default})}}]);
