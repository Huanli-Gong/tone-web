(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{"7Gu5":function(w,l,a){"use strict";a.r(l);var f=a("T2oS"),F=a("W9HT"),u=a("Awhp"),h=a("KrTs"),E=a("k1fw"),L=a("9og8"),y=a("tJVT"),ee=a("Znn+"),z=a("ZTPi"),W=a("5NDa"),ae=a("5rEg"),te=a("WmNS"),B=a.n(te),n=a("q1tI"),e=a.n(n),r=a("l+S1"),m=a("y3Kf"),t=a("DjyN"),A=a("NUBc"),j=a("tU7J"),re=a("wFql"),M=a("DYRE"),fe=a("zeV3"),Be=a("miYZ"),he=a("tsqr"),ne=a("c+yx"),le=a("WsGo"),pe=a("GGyo"),d=a.n(pe),ve=function(_){var H=_.searchKey,T=H===void 0?"":H,R=_.tabKey,se=_.ws_id,C=_.refresh,V=_.loadingCallback,K=V===void 0?function(){}:V,J=Object(n.useState)([]),Q=Object(y.a)(J,2),ue=Q[0],P=Q[1],Z=Object(n.useState)({pageNum:1,pageSize:20,total:0}),Y=Object(y.a)(Z,2),g=Y[0],N=Y[1],G=function(){var c=Object(L.a)(B.a.mark(function s(o){var p,$,v;return B.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,K(!0),i.next=4,Object(le.a)(Object(E.a)({search_key:T,search_type:R},o));case 4:if(i.t0=i.sent,i.t0){i.next=7;break}i.t0={};case 7:p=i.t0,$=p.data,v=$===void 0?{}:$,p.code===200&&Array.isArray(v.data)&&v.data.length&&R==="all"?(P(v.data),N({pageNum:v.page_num,pageSize:v.page_size,total:v.total})):p.code===200&&Array.isArray(v)&&v.length?(P(v),N({pageNum:p.page_num,pageSize:p.page_size,total:p.total})):(P([]),N({pageNum:1,pageSize:20,total:0}),p.code!==200&&he.default.error(p.msg||"\u8BF7\u6C42\u5931\u8D25\uFF01")),K(!1),i.next=18;break;case 13:i.prev=13,i.t1=i.catch(0),P([]),N({pageNum:1,pageSize:20,total:0}),K(!1);case 18:case"end":return i.stop()}},s,null,[[0,13]])}));return function(o){return c.apply(this,arguments)}}();Object(n.useEffect)(function(){T&&G({page_num:g.pageNum,page_size:g.pageSize})},[T,R]),Object(n.useEffect)(function(){T&&G({page_num:g.pageNum,page_size:g.pageSize})},[C]);var ce=function(s){if(s.id&&s.test_suite_id){var o=document.createElement("a");o.target="_blank",o.rel="noopener noreferrer",o.href="/ws/".concat(se,"/suite_search/conf_Details?suite_id=").concat(s.test_suite_id,"&case_id=").concat(s.id,"&suite_name=").concat(encodeURIComponent(s.suite_name),"&conf_name=").concat(encodeURIComponent(s.name)),o.click()}},X=function(s,o){N(Object(E.a)(Object(E.a)({},g),{},{pageNum:s,pageSize:o})),G({page_num:s,page_size:o})},D=function(s){if(s&&T){var o=new RegExp("("+T+")","g"),p=s.replace(o,"<span style='color: #f00;opacity:1'>".concat(T,"</span>"));return e.a.createElement("span",{dangerouslySetInnerHTML:{__html:p}})}return s},I=g.total,q=g.pageSize;return e.a.createElement("div",{className:d.a.searchList},ue.map(function(c){return e.a.createElement("div",{className:d.a.searchList_item,key:c.id},e.a.createElement("div",{className:d.a.head},e.a.createElement("p",{className:d.a.title,onClick:function(){return ce(c)}},D(c.name)),e.a.createElement("div",{className:d.a.author},c.creator_name)),e.a.createElement("span",{className:d.a.subTitle},D(c.suite_name)),e.a.createElement("div",{className:d.a.content_tag},e.a.createElement("span",null,Object(ne.q)(c.run_mode)),e.a.createElement(fe.b,null,c.test_type&&e.a.createElement("div",{className:d.a.type_tag},Object(ne.q)(c.test_type)),c.domain_name_list&&c.domain_name_list.split(",").map(function(s,o){return e.a.createElement("div",{className:d.a.type_tag,key:o},s)}))),e.a.createElement("div",{className:d.a.content},e.a.createElement(re.a.Paragraph,{ellipsis:{rows:2,expandable:!1},style:{marginBottom:0}},"\u8BF4\u660E\uFF1A",D(c.doc))),e.a.createElement("div",{className:"".concat(d.a.content," ").concat(d.a.content_remarks)},e.a.createElement(re.a.Paragraph,{ellipsis:{rows:2,expandable:!1},style:{marginBottom:0}},"\u5907\u6CE8\uFF1A",D(c.description))))}),e.a.createElement(A.a,{total:g.total,pageSize:g.pageSize,current:g.pageNum,showSizeChanger:!0,hideOnSinglePage:!0,onChange:X,onShowSizeChange:X}),I!==0&&q>=I&&e.a.createElement("div",{className:d.a.little_data_tips},"\uFF5E\u5DF2\u7ECF\u5230\u5E95\u5566\uFF5E"),I===0&&e.a.createElement("div",{className:d.a.no_data_tips},e.a.createElement(r.a,{style:{fontSize:36,color:"#b3b3b3"}}),e.a.createElement("p",null,"\u672A\u80FD\u627E\u5230\u76F8\u5173\u641C\u7D22"),e.a.createElement("div",null,"\u8BF7\u5C1D\u8BD5\u641C\u7D22\u5176\u5B83\u76F8\u5173\u7684\u5185\u5BB9")),e.a.createElement("div",{className:d.a.footer}))},ge=ve,ye=a("M78s"),U=a.n(ye),Se=a("Ty5D"),be=a("hZgC"),Oe=ae.a.Search,Te=z.a.TabPane,Ee=function(_){var H=Object(Se.h)(),T=H.ws_id,R=Object(ne.k)(""),se=R.keyword,C=se,V=Object(n.useState)(!1),K=Object(y.a)(V,2),J=K[0],Q=K[1],ue=Object(n.useState)(!1),P=Object(y.a)(ue,2),Z=P[0],Y=P[1],g=Object(n.useState)("all"),N=Object(y.a)(g,2),G=N[0],ce=N[1],X=Object(n.useState)(""),D=Object(y.a)(X,2),I=D[0],q=D[1],c=Object(n.useState)({total_num:0,suite_num:0,conf_num:0,domain_num:0}),s=Object(y.a)(c,2),o=s[0],p=s[1],$=Object(n.useState)(0),v=Object(y.a)($,2),oe=v[0],i=v[1],ie=Object(n.useRef)(null),de=function(){var S=Object(L.a)(B.a.mark(function b(x){var k;return B.a.wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Object(le.b)(x);case 2:if(O.t0=O.sent,O.t0){O.next=5;break}O.t0={};case 5:k=O.t0,k.code===200&&k.data&&Object.keys(k.data).length&&p(Object(E.a)({},k.data));case 7:case"end":return O.stop()}},b)}));return function(x){return S.apply(this,arguments)}}();Object(n.useEffect)(function(){return window.document.title="\u641C\u7D22\u7ED3\u679C",function(){window.document.title="T-One"}},[]);var Ce=Object(be.e)(),me=Ce.height;Object(n.useEffect)(function(){C&&(de({search_key:C}),q(C))},[C]);var Ne=function(b){b&&(C&&window.history.pushState({},0,window.location.origin+window.location.pathname),de({search_key:b}),q(b),Y(!Z))},Le=function(b){ce(b)},Pe=function(b){var x=ie.current.scrollTop;i(x)},De=function(){ie.current.scrollTo(0,0)},we=[{name:"\u5168\u90E8",key:"all",fieldName:"total_num"},{name:"Suite",key:"suite",fieldName:"suite_num"},{name:"Conf",key:"conf",fieldName:"conf_num"},{name:"\u9886\u57DF",key:"domain",fieldName:"domain_num"}],Fe={backgroundColor:"#E6F7FF",color:"#1890FF",marginTop:-3},ze={backgroundColor:"#0000000a",color:"#000",marginTop:-3};return e.a.createElement("div",{className:U.a.TestSuiteSearch_wrapper,style:{minHeight:me-50},onScroll:Pe,ref:ie},e.a.createElement("div",{className:U.a.header,style:{display:"block"}}),e.a.createElement("div",{className:U.a.content,style:{minHeight:me-270}},e.a.createElement(Oe,{className:U.a.content_search,defaultValue:C,prefix:e.a.createElement(r.a,{style:{color:"#bfbfbf",marginTop:4,marginRight:8}}),placeholder:"\u8BF7\u8F93\u5165Test Suite\u3001\u9886\u57DF\u540D\u79F0\u76F8\u5173\u7684\u68C0\u7D22\u5185\u5BB9",allowClear:!0,enterButton:"\u68C0\u7D22",onSearch:Ne}),e.a.createElement("div",null,e.a.createElement(z.a,{defaultActiveKey:"all",onChange:Le},we.map(function(S,b){return e.a.createElement(Te,{key:S.key,tab:e.a.createElement("span",null,S.name," ",e.a.createElement(h.a,{count:o[S.fieldName],overflowCount:999,showZero:!0,style:G===S.key?Fe:ze})),disabled:J})})),e.a.createElement(F.a,{spinning:J},e.a.createElement(ge,{searchKey:I,tabKey:G,ws_id:T,refresh:Z,loadingCallback:Q})))),e.a.createElement("div",{className:U.a.define_backTop,onClick:De,style:{display:oe>200?"block":"none",paddingTop:7}},e.a.createElement(m.a,{className:U.a.backTop_icon})))},Ue=l.default=Ee},GGyo:function(w,l,a){w.exports={searchList:"searchList___3vW9d",searchList_item:"searchList_item___5xQec",head:"head___2yWJl",title:"title___3R3Rf",author:"author___pGPvj",subTitle:"subTitle___3GNiV",content_tag:"content_tag___14Vo0",type_tag:"type_tag___2CWpe",content:"content___1Hh65",content_remarks:"content_remarks___2fLmP",little_data_tips:"little_data_tips___395rH",no_data_tips:"no_data_tips___3auGs",footer:"footer___25W41"}},M78s:function(w,l,a){w.exports={TestSuiteSearch_wrapper:"TestSuiteSearch_wrapper___1sgot",header:"header___1PC9t",content:"content___15Umy",content_search:"content_search___1me9s",initialPage:"initialPage___3IObk",headerInfo:"headerInfo___m1Xqh",define_backTop:"define_backTop___H91_C",backTop_icon:"backTop_icon___Peemf"}},WsGo:function(w,l,a){"use strict";a.d(l,"i",function(){return E}),a.d(l,"h",function(){return L}),a.d(l,"b",function(){return y}),a.d(l,"a",function(){return ee}),a.d(l,"g",function(){return z}),a.d(l,"f",function(){return W}),a.d(l,"c",function(){return ae}),a.d(l,"e",function(){return te}),a.d(l,"d",function(){return B});var f=a("9og8"),F=a("WmNS"),u=a.n(F),h=a("9kvl"),E=function(){var n=Object(f.a)(u.a.mark(function e(r){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(h.g)("/api/case/test_suite/retrieve/",{params:r}));case 1:case"end":return t.stop()}},e)}));return function(r){return n.apply(this,arguments)}}(),L=function(){var n=Object(f.a)(u.a.mark(function e(r){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(h.g)("/api/case/test_suite/retrieve/",{method:"GET",params:r}));case 1:case"end":return t.stop()}},e)}));return function(r){return n.apply(this,arguments)}}(),y=function(){var n=Object(f.a)(u.a.mark(function e(r){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(h.g)("/api/case/retrieve/quantity/",{method:"GET",params:r}));case 1:case"end":return t.stop()}},e)}));return function(r){return n.apply(this,arguments)}}(),ee=function(){var n=Object(f.a)(u.a.mark(function e(r){var m,t,A,j;return u.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return m=r.search_key,t=r.search_type,A=r.page_num,j=r.page_size,M.abrupt("return",Object(h.g)("/api/case/test_suite/retrieve/",{method:"POST",params:{page_num:A,page_size:j},data:{search_key:m,search_type:t}}));case 2:case"end":return M.stop()}},e)}));return function(r){return n.apply(this,arguments)}}(),z=function(){var n=Object(f.a)(u.a.mark(function e(r){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(h.g)("/api/case/test_suite/",{method:"GET",params:r}));case 1:case"end":return t.stop()}},e)}));return function(r){return n.apply(this,arguments)}}(),W=function(){var n=Object(f.a)(u.a.mark(function e(r){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(h.g)("/api/case/test_metric/",{method:"GET",params:r}));case 1:case"end":return t.stop()}},e)}));return function(r){return n.apply(this,arguments)}}(),ae=function(){var n=Object(f.a)(u.a.mark(function e(r){var m,t;return u.a.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return m=r.case_id,t=r.ws_id,j.abrupt("return",Object(h.g)("/api/case/test_case/detail/".concat(m,"/"),{method:"GET",params:{retrieve:1,ws_id:t}}));case 2:case"end":return j.stop()}},e)}));return function(r){return n.apply(this,arguments)}}(),te=function(){var n=Object(f.a)(u.a.mark(function e(r){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(h.g)("/api/case/test_suite/retrieve/",{method:"GET",params:r}));case 1:case"end":return t.stop()}},e)}));return function(r){return n.apply(this,arguments)}}(),B=function(){var n=Object(f.a)(u.a.mark(function e(r){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(h.g)("/api/case/test_metric/",{method:"GET",params:r}));case 1:case"end":return t.stop()}},e)}));return function(r){return n.apply(this,arguments)}}()},y3Kf:function(w,l,a){"use strict";var f=a("VTBJ"),F=a("q1tI"),u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"},h=u,E=a("6VBw"),L=function(z,W){return F.createElement(E.a,Object(f.a)(Object(f.a)({},z),{},{ref:W,icon:h}))};L.displayName="UpOutlined";var y=l.a=F.forwardRef(L)}}]);
