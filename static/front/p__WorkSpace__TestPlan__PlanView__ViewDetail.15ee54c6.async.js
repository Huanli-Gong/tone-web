(self.webpackChunktone_front=self.webpackChunktone_front||[]).push([[5006],{12475:function(F){F.exports={code_wrapper:"code_wrapper___3eANK"}},98273:function(F){F.exports={cover:"cover___3PIkw"}},32222:function(F){F.exports={form_row:"form_row___2OHoq",page_body_nav:"page_body_nav___3fjrQ",content:"content___1JHhA",ItemRow:"ItemRow___3Pd62",label:"label___3ze5r",text:"text___3XHaA",end:"end___3T4C2",edit:"edit___1o3_X"}},39404:function(F){F.exports={ConsoleDrawer_content:"ConsoleDrawer_content___3vESK"}},67538:function(F){F.exports={ItemRow:"ItemRow___1zdJT",label:"label___2A0Xc",text:"text___2oRv7",end:"end___24qet"}},81900:function(F){F.exports={ellipsis:"ellipsis___1UnIi"}},5429:function(F){F.exports={ArrowSolidGrey:"ArrowSolidGrey___3yVpA",ArrowSolidBlue:"ArrowSolidBlue___3eVb8",TemplateItemBlue:"TemplateItemBlue___1xj-Q",TemplateItemGrey:"TemplateItemGrey___Ej_ai"}},7253:function(F){F.exports={popover_group:"popover_group___j2Kz6",job_compare:"job_compare___3XF0q",title:"title___3eiur",job_card:"job_card___1MV_c",job_index:"job_index___24peF",job_detail:"job_detail___37loK",job_id:"job_id___6_EU3",job_creator:"job_creator___3dH-U",remove_active:"remove_active___1zgwl",remove:"remove___i7J9x",job_delete:"job_delete___2EJje",job_group:"job_group___3L14X",job_group_title:"job_group_title___crAIG",job_item:"job_item___2Yq-b",job_item_span:"job_item_span___31i5J",delete:"delete___3vces",operate:"operate___264-O",popover_job:"popover_job___TPuXS",hrefUrl:"hrefUrl___fKrDG",row_table:"row_table___fqOAE",question_icon:"question_icon___39kbo"}},13690:function(F,Ee,i){"use strict";var rt=i(23412),Te=i.n(rt),it=i(53631),me=i.n(it),at=i(31149),We=i.n(at),lt=i(29656),le=i(12475),Ke=i.n(le),ge=i(85893);Ee.Z=function(J){var de=J.code,X=J.onChange,A=J.readOnly,Y=A===void 0?!1:A,pe=J.mode,R=pe===void 0?"shell":pe;return(0,ge.jsx)(lt.fk,{value:de,className:Ke().code_wrapper,options:{theme:"monokai",keyMap:"sublime",lineNumbers:R==="yaml",mode:R,readOnly:Y},onBeforeChange:function(d,U,p){return X(p)}})}},27687:function(F,Ee,i){"use strict";var rt=i(49111),Te=i(19650),it=i(57663),me=i(71577),at=i(48736),We=i(27049),lt=i(43358),le=i(34041),Ke=i(20228),ge=i(11382),J=i(39428),de=i(3182),X=i(2824),A=i(67294),Y=i(20009),pe=i(16917),R=i(90105),c=i(98273),d=i.n(c),U=i(85893),p=function(k){var oe=k.confirm,De=k.onConfirm,G=k.value,ve=k.page_size,He=k.mode,m=He===void 0?"multiple":He,ot=(0,Y.UO)(),xe=ot.ws_id,st=(0,A.useState)([]),he=(0,X.Z)(st,2),Fe=he[0],$=he[1],ze=(0,A.useState)(),te=(0,X.Z)(ze,2),Ue=te[0],P=te[1],e=(0,A.useState)(),Pe=(0,X.Z)(e,2),Re=Pe[0],ke=Pe[1],Ve=(0,A.useState)(!0),Oe=(0,X.Z)(Ve,2),je=Oe[0],Se=Oe[1],$e=(0,A.useState)(!1),Ze=(0,X.Z)($e,2),Q=Ze[0],Le=Ze[1],be=function(){var N=(0,de.Z)((0,J.Z)().mark(function ce(we){var ye,Me,Be;return(0,J.Z)().wrap(function(ne){for(;;)switch(ne.prev=ne.next){case 0:if(ye=we&&we.replace(/\s*/g,""),!(Ue&&Ue==ye)){ne.next=3;break}return ne.abrupt("return");case 3:return P(ye),Se(!0),ne.next=7,(0,R.tR)({ws_id:xe,keyword:ye,page_size:ve||10,page_num:1});case 7:Me=ne.sent,Be=Me.data,$(Array.isArray(Be)?Be:[]),Se(!1);case 11:case"end":return ne.stop()}},ce)}));return function(we){return N.apply(this,arguments)}}();(0,A.useEffect)(function(){be()},[]);var Ie=function(){be()};return(0,U.jsxs)("div",{style:{padding:8},children:[(0,U.jsx)("div",{className:d().cover,onClick:function(){Q||oe==null||oe()}}),(0,U.jsx)(le.Z,{mode:m,allowClear:!0,notFoundContent:je?(0,U.jsx)(ge.Z,{size:"small"}):"Not Found",filterOption:!1,showSearch:!0,onSearch:be,style:{width:"100%"},onChange:function(ce){return ke(ce)},onDeselect:Ie,onClear:Ie,showArrow:!1,autoFocus:!0,value:Re,onFocus:function(){Le(!0)},onBlur:function(){setTimeout(function(){Le(!1)},200)},options:Fe==null?void 0:Fe.map(function(N){return{label:N.last_name,value:N.id}})}),(0,U.jsx)(We.Z,{style:{marginTop:"10px",marginBottom:"4px"}}),(0,U.jsxs)(Te.Z,{children:[(0,U.jsx)(me.Z,{onClick:function(){oe==null||oe(),De(Re)},type:"link",size:"small",style:{width:75},children:(0,U.jsx)(pe._H,{id:"operation.search"})}),(0,U.jsx)(me.Z,{type:"text",onClick:function(){oe==null||oe(),ke(void 0),De(void 0),be()},size:"small",style:{width:75,border:"none"},children:(0,U.jsx)(pe._H,{id:"operation.reset"})})]})]})};Ee.Z=p},27067:function(F,Ee,i){"use strict";i.r(Ee),i.d(Ee,{default:function(){return ai}});var rt=i(20228),Te=i(11382),it=i(57663),me=i(71577),at=i(402),We=i(97272),lt=i(13062),le=i(71230),Ke=i(36017),ge=i(35247),J=i(20136),de=i(55241),X=i(71153),A=i(60331),Y=i(39428),pe=i(3182),R=i(2824),c=i(20310),d=i(67294),U=i(1870),p=i(12788),f=i(16917),k=i(60035),oe=i(57338),De=i(440),G=i(54029),ve=i(79166),He=i(49111),m=i(19650),ot=i(47673),xe=i(4107),st=i(9715),he=i(20526),Fe=i(8212),$=i(24480),ze=function(n){return(0,f.WY)("/api/plan/result/detail/",{params:n})},te=function(n){return(0,f.WY)("/api/plan/result/detail/",{data:n,method:"post"})},Ue=i(32222),P=i.n(Ue),e=i(85893),Pe=function(n){var a=n.name,t=a===void 0?"":a,l=n.children;return(0,e.jsxs)("div",{style:{width:"100%",display:"flex"},children:[(0,e.jsx)("div",{style:{width:100,marginRight:8,textAlign:"right"},children:(0,e.jsx)("b",{children:t})}),(0,e.jsx)("div",{style:{width:"calc(100% - 100px - 8px)"},children:l})]})},Re=(0,d.forwardRef)(function(r,n){var a,t,l,o,C,S,j,Z,E,y,b,K,w,_,h,L,H,ue,qe=(0,f.YB)(),u=qe.formatMessage,_e=he.Z.useForm(),Ae=(0,R.Z)(_e,1),z=Ae[0],D=(0,d.useState)(!1),V=(0,R.Z)(D,2),q=V[0],se=V[1],fe=(0,d.useState)(!1),et=(0,R.Z)(fe,2),M=et[0],tt=et[1],li=(0,d.useState)(!1),En=(0,R.Z)(li,2),Pn=En[0],gt=En[1],oi=(0,d.useState)(""),On=(0,R.Z)(oi,2),si=On[0],di=On[1],pi=(0,d.useState)({}),Sn=(0,R.Z)(pi,2),s=Sn[0],Zn=Sn[1],Ln=s.kernel_info,nt=Ln===void 0?{}:Ln,In=s.rpm_info,yt=In===void 0?{}:In,wn=s.build_pkg_info,Ce=wn===void 0?{}:wn;(0,d.useImperativeHandle)(n,function(){return{show:function(){var re=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",ie=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};tt(!0),Zn(ie)}}});var ci=function(){var ee=(0,pe.Z)((0,Y.Z)().mark(function re(ie){var ae;return(0,Y.Z)().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return B.prev=0,se(!0),B.next=4,te(ie);case 4:if(B.t0=B.sent,B.t0){B.next=7;break}B.t0={};case 7:ae=B.t0,ae.code===200?(gt(!1),di(ie.note)):(0,$.EV)(ae.code,ae.msg),se(!1),B.next=15;break;case 12:B.prev=12,B.t1=B.catch(0),se(!1);case 15:case"end":return B.stop()}},re,null,[[0,12]])}));return function(ie){return ee.apply(this,arguments)}}(),ui=function(){tt(!1),Zn({}),gt(!1)},_i=function(){gt(!0)},vi=function(){gt(!1)},fi=function(){z.validateFields().then(function(){var re=(0,pe.Z)((0,Y.Z)().mark(function ie(ae){return(0,Y.Z)().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:r==null||r.callback({data:ae.note,editFn:ci});case 1:case"end":return B.stop()}},ie)}));return function(ie){return re.apply(this,arguments)}}())},mi=function(){return(0,e.jsx)(e.Fragment,{children:Pn?(0,e.jsx)("div",{style:{marginTop:-4},children:(0,e.jsxs)(he.Z,{form:z,layout:"inline",children:[(0,e.jsx)(he.Z.Item,{name:"note",rules:[{required:!0,message:u({id:"plan.note.message"})},{max:500,message:u({id:"plan.note.max"})}],children:(0,e.jsx)(xe.Z,{size:"small",style:{width:200},placeholder:u({id:"please.enter"})})}),(0,e.jsx)(he.Z.Item,{children:(0,e.jsxs)(m.Z,{children:[(0,e.jsx)(me.Z,{onClick:vi,size:"small",children:(0,e.jsx)(f._H,{id:"operation.cancel"})}),(0,e.jsx)(me.Z,{onClick:fi,size:"small",type:"primary",children:(0,e.jsx)(f._H,{id:"operation.ok"})})]})})]})}):(0,e.jsx)(Fe.Z,{onClick:_i,style:{marginLeft:8,color:"#1890ff"}})})},v=function(re){var ie=re.label,ae=re.text,Ne=re.type;return ae?(0,e.jsxs)("div",{className:P().ItemRow,children:[(0,e.jsx)("div",{className:P().label,children:ie}),(0,e.jsxs)("div",{className:"".concat(P().text," ").concat(P()[Ne]),children:[Pn&&Ne==="edit"?null:(0,$.CB)(ae)?(0,e.jsx)("a",{target:"__blank",href:ae,children:ae}):Ne==="edit"&&si||ae,Ne==="edit"?(0,e.jsx)(mi,{}):null]})]}):(0,e.jsx)(e.Fragment,{})};return(0,e.jsx)(De.Z,{maskStyle:{opacity:0,animation:"unset"},maskClosable:!0,keyboard:!1,title:(0,e.jsx)(f._H,{id:"plan.configuration"}),width:900,onClose:q?function(){}:ui,visible:M,footer:null,children:(0,e.jsxs)("div",{children:[(0,e.jsxs)(le.Z,{className:P().form_row,children:[(0,e.jsx)("div",{className:P().page_body_nav,children:(0,e.jsx)("span",{children:(0,e.jsx)(f._H,{id:"plan.basic.info"})})}),(0,e.jsxs)("div",{className:P().content,children:[(0,e.jsx)(v,{label:u({id:"plan.name"}),text:s==null?void 0:s.name}),(0,e.jsx)(v,{label:u({id:"plan.creator_name"}),text:s.creator_name}),(0,e.jsx)(v,{label:u({id:"plan.project_name"}),text:s.project_name}),(0,e.jsx)(v,{label:u({id:"plan.description"}),text:(s==null?void 0:s.description)||u({id:"plan.width.out"})}),(0,e.jsx)(v,{label:u({id:"plan.notice_name"}),text:(s==null||(a=s.plan_config_info)===null||a===void 0?void 0:a.notice_name)||((s==null||(t=s.plan_config_info)===null||t===void 0?void 0:t.email_info)||(s==null||(l=s.plan_config_info)===null||l===void 0?void 0:l.ding_talk_info))&&"[T-one]\u4F60\u7684\u6D4B\u8BD5\u5DF2\u5B8C\u6210{date}"||u({id:"plan.width.out"})}),(0,e.jsx)(v,{label:u({id:"plan.email_info"}),text:(s==null||(o=s.plan_config_info)===null||o===void 0?void 0:o.email_info)||u({id:"plan.width.out"})}),(0,e.jsx)(v,{label:u({id:"plan.ding_talk_info"}),text:(s==null||(C=s.plan_config_info)===null||C===void 0?void 0:C.ding_talk_info)||u({id:"plan.width.out"})}),(0,e.jsx)(v,{label:u({id:"plan.generate.reports"}),text:(0,e.jsx)("span",{style:{paddingLeft:4},children:s!=null&&s.auto_report?(0,e.jsx)(ve.Z,{status:"processing",text:(0,e.jsx)(f._H,{id:"operation.yes"})}):(0,e.jsx)(ve.Z,{status:"default",text:(0,e.jsx)(f._H,{id:"operation.no"})})})}),(s==null?void 0:s.auto_report)&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(v,{label:u({id:"plan.test.report_name"}),text:(s==null||(S=s.plan_config_info)===null||S===void 0?void 0:S.report_name)||"{plan_name}_report-{report_seq_id}"}),(0,e.jsx)(v,{label:u({id:"plan.report_template_name"}),text:(s==null||(j=s.plan_config_info)===null||j===void 0?void 0:j.report_template_name)||u({id:"plan.width.out"})}),(0,e.jsx)(v,{label:u({id:"plan.report_description"}),text:(s==null||(Z=s.plan_config_info)===null||Z===void 0?void 0:Z.report_description)||u({id:"plan.width.out"})})]}),(0,e.jsx)(v,{label:u({id:"plan.enable"}),text:(0,e.jsx)("span",{style:{paddingLeft:4},children:s!=null&&(E=s.plan_config_info)!==null&&E!==void 0&&E.enable?(0,e.jsx)(ve.Z,{status:"processing",text:(0,e.jsx)(f._H,{id:"operation.yes"})}):(0,e.jsx)(ve.Z,{status:"default",text:(0,e.jsx)(f._H,{id:"operation.no"})})})}),(0,e.jsx)(v,{label:u({id:"plan.start_time"}),text:s.start_time}),(0,e.jsx)(v,{label:u({id:"plan.end_time"}),text:s.end_time}),(0,e.jsx)(v,{label:u({id:"plan.remarks"}),text:s.note,type:"edit"})]})]}),!!Object.keys(Ce).length||!!Object.keys(nt).length||!!Object.keys(yt).length||s.env_info||s!=null&&(y=s.plan_config_info)!==null&&y!==void 0&&y.func_baseline_name||s!=null&&(b=s.plan_config_info)!==null&&b!==void 0&&b.perf_baseline_name?(0,e.jsxs)(le.Z,{className:P().form_row,children:[(0,e.jsx)("div",{className:P().page_body_nav,children:(0,e.jsx)("span",{children:(0,e.jsx)(f._H,{id:"plan.public.config"})})}),(0,e.jsxs)("div",{className:P().content,children:[(0,e.jsx)(v,{label:u({id:"plan.func_baseline"}),text:s==null||(K=s.plan_config_info)===null||K===void 0?void 0:K.func_baseline_name}),(0,e.jsx)(v,{label:u({id:"plan.perf_baseline"}),text:s==null||(w=s.plan_config_info)===null||w===void 0?void 0:w.perf_baseline_name}),!!Object.keys(Ce).length&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(v,{label:u({id:"plan.code_repo"}),text:Ce.code_repo}),(0,e.jsx)(v,{label:u({id:"plan.code_branch"}),text:Ce.code_branch}),(0,e.jsx)(v,{label:u({id:"plan.compile_branch"}),text:Ce.compile_branch}),(0,e.jsx)(v,{label:"CpuArch",text:Ce.cpu_arch}),(0,e.jsx)(v,{label:"Commit ID",text:Ce.commit_id}),(0,e.jsx)(v,{label:"Build Config",text:Ce.build_config}),(0,e.jsx)(v,{label:"Build Machine",text:Ce.build_machine})]}),!!Object.keys(nt).length&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(v,{label:u({id:"plan.kernel_version"}),text:s.kernel_version}),(0,e.jsx)(v,{label:u({id:"plan.kernel.pkg"}),text:nt.kernel}),(0,e.jsx)(v,{label:u({id:"plan.devel"}),text:nt.devel}),(0,e.jsx)(v,{label:u({id:"plan.headers"}),text:nt.headers})]}),!!Object.keys(yt).length&&(0,e.jsx)(v,{label:u({id:"plan.rpm.package"}),text:yt.rpm}),!!s.env_info&&(0,e.jsx)(v,{label:u({id:"plan.env_info"}),text:s.env_info,type:"end"})]})]}):null,(0,e.jsxs)(le.Z,{className:P().form_row,children:[(0,e.jsx)("div",{className:P().page_body_nav,children:(0,e.jsx)("span",{children:(0,e.jsx)(f._H,{id:"plan.test.configuration"})})}),(0,e.jsxs)("div",{className:P().content,children:[(0,e.jsx)(Pe,{name:s==null||(_=s.plan_config_info)===null||_===void 0||(h=_.env_prep)===null||h===void 0?void 0:h.name,children:s==null||(L=s.plan_config_info)===null||L===void 0||(H=L.env_prep)===null||H===void 0?void 0:H.machine_info.map(function(ee,re){return(0,e.jsx)("div",{children:(0,e.jsxs)(m.Z,{children:[(0,e.jsx)("span",{children:ee.machine}),(0,e.jsx)("span",{children:ee.script})]})},re)})}),(s==null?void 0:s.test_result)&&(s==null?void 0:s.test_result.length)>0&&s.test_result.map(function(ee,re){return(0,e.jsx)(Pe,{name:ee.name,children:ee.template_result.map(function(ie){return(0,e.jsx)("div",{children:ie.tmpl_name},ie.tmpl_name)})},re)})]})]}),(0,e.jsxs)(le.Z,{className:P().form_row,children:[(0,e.jsx)("div",{className:P().page_body_nav,children:(0,e.jsx)("span",{children:(0,e.jsx)(f._H,{id:"plan.trigger.configuration"})})}),(0,e.jsx)("div",{className:P().content,children:(0,e.jsx)(v,{label:u({id:"plan.trigger.configuration"}),text:((ue=s.plan_config_info)===null||ue===void 0?void 0:ue.cron_info)||u({id:"plan.width.out"})})})]})]})})}),ke=Re,Ve=i(15873),Oe,je,Se,$e,Ze,Q,Le,be,Ie,N,ce,we,ye=p.ZP.div(Oe||(Oe=(0,c.Z)([`
    height: 38px;
    width: 100%;
    display: flex;
    position: relative;
`]))),Me=p.ZP.div(je||(je=(0,c.Z)([`
    height: 12px;
    width: 12px;
    background: #1890FF; //#CECECE;
    border-radius: 24px;
    margin-top: -5px;
`]))),Be=p.ZP.div(Se||(Se=(0,c.Z)([`
    height: 12px;
    width: 12px;
    background: #1890FF;
    border: 1px solid #1890FF;
    border-radius: 24px;
    margin-top: -5px;
`]))),Ge=p.ZP.div($e||($e=(0,c.Z)([`
    height: 12px;
    width: 12px;
    background: #CECECE;
    border: 1px solid #CECECE;
    border-radius: 24px;
    margin-top: -5px;
`]))),ne=p.ZP.div(Ze||(Ze=(0,c.Z)([`
  width: 0px;
  height: 0px;
  display: inline-block;
  border-left: 5px solid #1890FF;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-right: 5px solid transparent;
  margin-top: -4px;
  margin-right: -8px;
`]))),Je=p.ZP.div(Q||(Q=(0,c.Z)([`
  padding-left: 67px;
  padding-right: 4px;
  height: 100%;
`]))),xt=p.ZP.div(Le||(Le=(0,c.Z)([`
  margin-top: 20px;
  width: 77px;
  height: 2px;
  background: #1890FF;
  display: flex;
  justify-content: space-between;
`]))),ht=p.ZP.div(be||(be=(0,c.Z)([`
    font-size: 16px;
    color: rgba(0,0,0,.65);
    margin-top: 16px;
    margin-left: -12px;
`]))),jt=p.ZP.div(Ie||(Ie=(0,c.Z)([`
  padding-right: 67px;
`]))),dt=(0,p.ZP)(Ve.Z)(N||(N=(0,c.Z)([`
  color:#1890FF;
  cursor:pointer;
  background:#fff;
  border-radius:50%;
  font-size: 12px;
  //
  position:absolute;
  top : 50%;
  left : 6px;
  transform:translate(-50% , -4px);
`]))),bt=p.ZP.div(ce||(ce=(0,c.Z)([`
  width: 50px;
  margin-left: -6px;
  opacity: 0.65;
  font-family: PingFangSC-Medium;
  font-size: 16px;
`]))),Xe=p.ZP.div(we||(we=(0,c.Z)([`
    width:2px;
    height:`,`px;
`])),function(r){return r.index*30}),T,g=["svgRef","title"];function x(){return x=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(r[t]=a[t])}return r},x.apply(this,arguments)}function I(r,n){if(r==null)return{};var a=W(r,n),t,l;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(l=0;l<o.length;l++)t=o[l],!(n.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,t)||(a[t]=r[t]))}return a}function W(r,n){if(r==null)return{};var a={},t=Object.keys(r),l,o;for(o=0;o<t.length;o++)l=t[o],!(n.indexOf(l)>=0)&&(a[l]=r[l]);return a}var O=function(n){var a=n.svgRef,t=n.title,l=I(n,g);return d.createElement("svg",x({width:"24px",height:"24px",viewBox:"0 0 24 24",ref:a},l),t?d.createElement("title",null,t):null,T||(T=d.createElement("g",{id:"\\u521B\\u5EFA\\u8BA1\\u5212",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},d.createElement("g",{id:"\\u4E0D\\u5728\\u8FD0\\u884C",fill:"#CECECE"},d.createElement("path",{d:"M11.8405316,0 C15.3289037,0.0897009787 18.2093023,1.26578072 20.4717608,3.5282392 C22.7342193,5.79069767 23.910299,8.67109634 24,12.1594684 C23.910299,15.4883721 22.7342193,18.269103 20.4717608,20.5116279 C18.2093023,22.7541528 15.3289037,23.910299 11.8405316,24 C8.51162792,23.910299 5.730897,22.744186 3.48837209,20.5116279 C1.24584718,18.269103 0.0897010063,15.4883721 0,12.1594684 C0.0897010063,8.67109634 1.25581395,5.80066444 3.48837209,3.5282392 C5.730897,1.26578072 8.51162789,0.0897009787 11.8405316,0 Z M16.921875,11.34375 L7.078125,11.34375 C6.68979979,11.34375 6.375,11.6585498 6.375,12.046875 C6.375,12.4352002 6.68979979,12.75 7.078125,12.75 L7.078125,12.75 L16.921875,12.75 C17.3102002,12.75 17.625,12.4352002 17.625,12.046875 C17.625,11.6585498 17.3102002,11.34375 16.921875,11.34375 L16.921875,11.34375 Z",id:"\\u5F62\\u72B6\\u7ED3\\u5408"})))))},pt=d.forwardRef(function(r,n){return d.createElement(O,x({svgRef:n},r))}),Ye=i.p+"static/minus.0940f43c.svg",Ct,Dn=["svgRef","title"];function ct(){return ct=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(r[t]=a[t])}return r},ct.apply(this,arguments)}function Fn(r,n){if(r==null)return{};var a=Rn(r,n),t,l;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(l=0;l<o.length;l++)t=o[l],!(n.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,t)||(a[t]=r[t]))}return a}function Rn(r,n){if(r==null)return{};var a={},t=Object.keys(r),l,o;for(o=0;o<t.length;o++)l=t[o],!(n.indexOf(l)>=0)&&(a[l]=r[l]);return a}var Mn=function(n){var a=n.svgRef,t=n.title,l=Fn(n,Dn);return d.createElement("svg",ct({width:"24px",height:"24px",viewBox:"0 0 24 24",ref:a},l),t?d.createElement("title",null,t):null,Ct||(Ct=d.createElement("g",{id:"\\u521B\\u5EFA\\u8BA1\\u5212",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},d.createElement("g",{id:"complete",fill:"#81BF84"},d.createElement("path",{d:"M11.8405316,0 C15.3289037,0.0897009787 18.2093023,1.26578072 20.4717608,3.5282392 C22.7342193,5.79069767 23.910299,8.67109634 24,12.1594684 C23.910299,15.4883721 22.7342193,18.269103 20.4717608,20.5116279 C18.2093023,22.7541528 15.3289037,23.910299 11.8405316,24 C8.51162792,23.910299 5.730897,22.744186 3.48837209,20.5116279 C1.24584718,18.269103 0.0897010063,15.4883721 0,12.1594684 C0.0897010063,8.67109634 1.25581395,5.80066444 3.48837209,3.5282392 C5.730897,1.26578072 8.51162789,0.0897009787 11.8405316,0 Z M18.1319416,7.52855283 C17.8633235,7.25993473 17.4314357,7.2540952 17.155719,7.51103426 L17.1375727,7.52855283 L10.6741748,13.9919508 L6.86242729,10.1802033 C6.5878399,9.90561587 6.14264577,9.90561587 5.86805838,10.1802033 C5.59944028,10.4488214 5.59360076,10.8807091 5.85053981,11.1564259 L5.86805838,11.1745722 L10.1769903,15.4835041 C10.4456084,15.7521222 10.8774962,15.7579617 11.153213,15.5010227 L11.1713592,15.4835041 L18.1319416,8.52292174 C18.406529,8.24833435 18.406529,7.80314022 18.1319416,7.52855283 Z",id:"\\u5F62\\u72B6"})))))},Bn=d.forwardRef(function(r,n){return d.createElement(Mn,ct({svgRef:n},r))}),gi=i.p+"static/complete.1aa379c0.svg",Et,An=["svgRef","title"];function ut(){return ut=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(r[t]=a[t])}return r},ut.apply(this,arguments)}function Tn(r,n){if(r==null)return{};var a=Wn(r,n),t,l;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(l=0;l<o.length;l++)t=o[l],!(n.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,t)||(a[t]=r[t]))}return a}function Wn(r,n){if(r==null)return{};var a={},t=Object.keys(r),l,o;for(o=0;o<t.length;o++)l=t[o],!(n.indexOf(l)>=0)&&(a[l]=r[l]);return a}var Kn=function(n){var a=n.svgRef,t=n.title,l=Tn(n,An);return d.createElement("svg",ut({width:"24px",height:"24px",viewBox:"0 0 24 24",ref:a},l),t?d.createElement("title",null,t):null,Et||(Et=d.createElement("g",{id:"\\u521B\\u5EFA\\u8BA1\\u5212",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},d.createElement("g",{id:"fail",fill:"#C84C5A"},d.createElement("path",{d:"M11.8405316,0 C15.3289037,0.0897009787 18.2093023,1.26578072 20.4717608,3.5282392 C22.7342193,5.79069767 23.910299,8.67109634 24,12.1594684 C23.910299,15.4883721 22.7342193,18.269103 20.4717608,20.5116279 C18.2093023,22.7541528 15.3289037,23.910299 11.8405316,24 C8.51162792,23.910299 5.730897,22.744186 3.48837209,20.5116279 C1.24584718,18.269103 0.0897010063,15.4883721 0,12.1594684 C0.0897010063,8.67109634 1.25581395,5.80066444 3.48837209,3.5282392 C5.730897,1.26578072 8.51162789,0.0897009787 11.8405316,0 Z M16.0106213,8.05566999 C15.7420032,7.78705188 15.3101154,7.78121236 15.0343986,8.03815141 L15.0162524,8.05566999 L12,11.0719223 L8.98374764,8.05566999 C8.70916024,7.78108259 8.26396612,7.78108259 7.98937873,8.05566999 C7.72076062,8.32428809 7.7149211,8.75617587 7.97186015,9.03189265 L7.98937873,9.0500389 L11.0056311,12.0662913 L8.05566999,15.0162524 C7.78108259,15.2908398 7.78108259,15.7360339 8.05566999,16.0106213 C8.32428809,16.2792394 8.75617587,16.2850789 9.03189265,16.0281398 L9.0500389,16.0106213 L12,13.0606602 L14.9499611,16.0106213 C15.2245485,16.2852087 15.6697426,16.2852087 15.94433,16.0106213 C16.2129481,15.7420032 16.2187876,15.3101154 15.9618486,15.0343986 L15.94433,15.0162524 L12.9943689,12.0662913 L16.0106213,9.0500389 C16.2852087,8.7754515 16.2852087,8.33025738 16.0106213,8.05566999 Z",id:"\\u5F62\\u72B6"})))))},Un=d.forwardRef(function(r,n){return d.createElement(Kn,ut({svgRef:n},r))}),xi=i.p+"static/fail.1a7fd322.svg",Pt,kn=["svgRef","title"];function _t(){return _t=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(r[t]=a[t])}return r},_t.apply(this,arguments)}function $n(r,n){if(r==null)return{};var a=Nn(r,n),t,l;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(l=0;l<o.length;l++)t=o[l],!(n.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,t)||(a[t]=r[t]))}return a}function Nn(r,n){if(r==null)return{};var a={},t=Object.keys(r),l,o;for(o=0;o<t.length;o++)l=t[o],!(n.indexOf(l)>=0)&&(a[l]=r[l]);return a}var Hn=function(n){var a=n.svgRef,t=n.title,l=$n(n,kn);return d.createElement("svg",_t({width:"24px",height:"24px",viewBox:"0 0 24 24",ref:a},l),t?d.createElement("title",null,t):null,Pt||(Pt=d.createElement("g",{id:"\\u521B\\u5EFA\\u8BA1\\u5212",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},d.createElement("g",{id:"pending",fill:"#CECECE"},d.createElement("path",{d:"M11.8405316,0 C15.3289037,0.0897009787 18.2093023,1.26578072 20.4717608,3.5282392 C22.7342193,5.79069767 23.910299,8.67109634 24,12.1594684 C23.910299,15.4883721 22.7342193,18.269103 20.4717608,20.5116279 C18.2093023,22.7541528 15.3289037,23.910299 11.8405316,24 C8.51162792,23.910299 5.730897,22.744186 3.48837209,20.5116279 C1.24584718,18.269103 0.0897010063,15.4883721 0,12.1594684 C0.0897010063,8.67109634 1.25581395,5.80066444 3.48837209,3.5282392 C5.730897,1.26578072 8.51162789,0.0897009787 11.8405316,0 Z M10.859375,5.4765625 C10.4710498,5.4765625 10.15625,5.79136229 10.15625,6.1796875 L10.15625,6.1796875 L10.15625,13.2109375 C10.15625,13.5992627 10.4710498,13.9140625 10.859375,13.9140625 L10.859375,13.9140625 L17.515625,13.9140625 C17.9039502,13.9140625 18.21875,13.5992627 18.21875,13.2109375 C18.21875,12.8226123 17.9039502,12.5078125 17.515625,12.5078125 L17.515625,12.5078125 L11.56225,12.5075625 L11.5625,6.1796875 C11.5625,5.79136229 11.2477002,5.4765625 10.859375,5.4765625 Z",id:"\\u5F62\\u72B6\\u7ED3\\u5408"})))))},zn=d.forwardRef(function(r,n){return d.createElement(Hn,_t({svgRef:n},r))}),hi=i.p+"static/pending.42e2e581.svg",Ot,Vn=["svgRef","title"];function vt(){return vt=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(r[t]=a[t])}return r},vt.apply(this,arguments)}function Gn(r,n){if(r==null)return{};var a=Jn(r,n),t,l;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(l=0;l<o.length;l++)t=o[l],!(n.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,t)||(a[t]=r[t]))}return a}function Jn(r,n){if(r==null)return{};var a={},t=Object.keys(r),l,o;for(o=0;o<t.length;o++)l=t[o],!(n.indexOf(l)>=0)&&(a[l]=r[l]);return a}var Xn=function(n){var a=n.svgRef,t=n.title,l=Gn(n,Vn);return d.createElement("svg",vt({width:"24px",height:"24px",viewBox:"0 0 24 24",ref:a},l),t?d.createElement("title",null,t):null,Ot||(Ot=d.createElement("g",{id:"\\u521B\\u5EFA\\u8BA1\\u5212",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},d.createElement("g",{id:"running",fill:"#649FF6"},d.createElement("path",{d:"M11.8405316,0 C15.3289037,0.0897009787 18.2093023,1.26578072 20.4717608,3.5282392 C22.7342193,5.79069767 23.910299,8.67109634 24,12.1594684 C23.910299,15.4883721 22.7342193,18.269103 20.4717608,20.5116279 C18.2093023,22.7541528 15.3289037,23.910299 11.8405316,24 C8.51162792,23.910299 5.730897,22.744186 3.48837209,20.5116279 C1.24584718,18.269103 0.0897010063,15.4883721 0,12.1594684 C0.0897010063,8.67109634 1.25581395,5.80066444 3.48837209,3.5282392 C5.730897,1.26578072 8.51162789,0.0897009787 11.8405316,0 Z M11.9152824,5.625 C10.1468023,5.67265364 8.66953903,6.29744601 7.47819767,7.49937707 C6.29215116,8.70660298 5.67265366,10.2315199 5.625,12.0847176 C5.67265366,13.8531977 6.28685632,15.330461 7.47819767,16.5218023 C8.66953903,17.7078488 10.1468023,18.3273463 11.9152824,18.375 C13.7684801,18.3273463 15.2986919,17.7131437 16.5006229,16.5218023 C16.591536,16.4316902 16.6791472,16.3399423 16.7634563,16.2465562 L16.7634563,16.2465562 L15.6486531,15.379477 C15.602902,15.4283551 15.5559638,15.4766446 15.5078385,15.5243459 C14.5710392,16.4528914 13.3783742,16.9316082 11.9339701,16.96875 C10.5555959,16.9316082 9.40419954,16.4487645 8.47565407,15.5243459 C7.5471086,14.5958005 7.06839182,13.4444041 7.03125,12.0660299 C7.06839182,10.6216258 7.55123546,9.43308762 8.47565407,8.49216154 C9.40419954,7.55536233 10.5555959,7.06839181 11.9339701,7.03125 C13.3210509,7.06691779 14.4759775,7.51741857 15.3950951,8.38275236 L15.3950951,8.38275236 L14.0740654,9.6584317 L17.9137451,9.990659 L17.7157231,6.1417237 L16.4059065,7.40650835 C15.2186499,6.26524686 13.7201448,5.67141074 11.9152824,5.625 Z",id:"\\u5F62\\u72B6\\u7ED3\\u5408\\u5907\\u4EFD-3"})))))},Yn=d.forwardRef(function(r,n){return d.createElement(Xn,vt({svgRef:n},r))}),ji=i.p+"static/running.f8bf7ce4.svg",Qn=i(5429),St=i.n(Qn),Qe=function(n){var a=n.params,t=a===void 0?"":a;return t==="pending"?(0,e.jsx)(zn,{style:{color:"#CECECE",fontSize:26}}):t==="running"?(0,e.jsx)(Yn,{style:{color:"#CECECE",fontSize:26}}):t==="success"?(0,e.jsx)(Bn,{style:{color:"#81BF84",fontSize:26}}):t==="fail"?(0,e.jsx)(Un,{style:{color:"#C84C5A",fontSize:26}}):t==="stop"?(0,e.jsx)(pt,{style:{color:"#CECECE",fontSize:26}}):(0,e.jsx)(pt,{style:{color:"#CECECE",fontSize:26}})},Zt=function(n){var a=n.borderColor,t=a===void 0?"#CECECE":a;return(0,e.jsx)("div",{className:St()["".concat(t==="#1890FF"?"ArrowSolidBlue":"ArrowSolidGrey")]})},Lt=function(n){var a=n.borderColor,t=a===void 0?"#CECECE":a;return(0,e.jsx)("div",{className:St()["".concat(t==="#1890FF"?"TemplateItemBlue":"TemplateItemGrey")],children:n.children})},bi=null,It,wt,Dt,Ft,Rt,Mt,Bt,At,Tt,Wt,qn=p.ZP.div(It||(It=(0,c.Z)([`
    width: 398px;
    min-height: 100%;
    padding-right: 4px;
    display: inline-block;
    position: relative;
`]))),er=p.ZP.div(wt||(wt=(0,c.Z)([`
    height: 40px;
    width: 100%;
    position: relative;
    display: flex;
`]))),tr=p.ZP.div(Dt||(Dt=(0,c.Z)([`
    height: 40px;
    width: 130px;
    background: #FFFFFF;
    border: 2px solid #1890FF;
    border-radius: 20px;
    outline:none;
    padding: 0 4px;
    font-size:16px;
    color: rgba(0,0,0,.65);
    //
    display: flex;
    align-items: center;
`]))),nr=p.ZP.div(Ft||(Ft=(0,c.Z)([`
    flex: 1;
    height: 2px;
    margin-top: 20px;
    background: #CECECE;
    display: flex;
    justify-content: space-between;
`]))),rr=p.ZP.div(Rt||(Rt=(0,c.Z)([`
    height: 12px;
    width: 12px;
    background: #CECECE;
    border: 1px solid #CECECE;
    border-radius: 24px;
    margin-top: -5px;
`]))),ir=p.ZP.div(Mt||(Mt=(0,c.Z)([`
  width: 0px;
  height: 0px;
  display: inline-block;
  border-left: 5px solid #CECECE;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-right: 5px solid transparent;
  margin-top: -4px;
  margin-right: -8px;
`]))),ar=p.ZP.div(Bt||(Bt=(0,c.Z)([`
    width: 100%;
    padding-top: 0px;
    padding-right: 35px;
`]))),lr=p.ZP.div(At||(At=(0,c.Z)([`
    line-height: 22px;
    margin-left: 7px;
`]))),or=p.ZP.div(Tt||(Tt=(0,c.Z)([`
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 4px;
  padding: 12px;
  width: 100%;
  margin-top: 12px;
   font-family: PingFangSC-Regular;
   font-size: 14px;
   color: #000;
   line-height: 22px;
   // \u591A\u884C\u6587\u672C\u7701\u7565
   overflow: hidden; 
   text-overflow: ellipsis; 
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
`]))),yi=p.ZP.div(Wt||(Wt=(0,c.Z)([`
    width:2px;
    height:`,`px;
`])),function(r){return r.index*30}),sr=i(67538),ft=i.n(sr),dr=function(n){var a,t=(0,f.YB)(),l=t.formatMessage,o=n.data,C=n.mainStatus,S=o||{},j=S.state,Z=(0,$.mA)(j,null),E=(0,$.I9)(j),y=C?"#1890FF":E,b=C&&j==="pending"?"stop":j,K=function(_){return _==="pending"?{display:"none"}:_==="running"||_==="success"?{}:_==="fail"?{background:"rgba(245,34,45,0.05)",border:"1px solid rgba(245,34,45,0.45)"}:{}}(j),w=function(h){var L=h.label,H=h.text,ue=h.type;return(0,e.jsxs)("div",{className:ft().ItemRow,children:[(0,e.jsx)("div",{className:ft().label,children:L}),(0,e.jsx)("div",{className:"".concat(ft().text," ").concat(ft()[ue]),children:(0,$.CB)(H)?(0,e.jsx)("a",{target:"__blank",href:H,children:H}):H})]})};return(0,e.jsx)(e.Fragment,{children:o&&Object.keys(o).length?(0,e.jsxs)(qn,{children:[(0,e.jsxs)(er,{children:[(0,e.jsxs)(tr,{style:{border:"2px solid ".concat(Z)},children:[(0,e.jsx)(Qe,{params:b}),(0,e.jsx)(lr,{children:(0,e.jsx)(f._H,{id:"plan.build.stage"})})]}),(0,e.jsxs)(nr,{style:{background:y},children:[(0,e.jsx)(rr,{style:{background:E,border:"1px solid ".concat(E)}}),(0,e.jsx)(ir,{style:{borderLeft:"5px solid ".concat(y)}})]})]}),(0,e.jsx)(ar,{children:(0,e.jsxs)(or,{style:K,children:[j!=="fail"?(0,e.jsxs)(e.Fragment,{children:[!!o.build_url&&(0,e.jsx)(w,{label:l({id:"plan.build.detail"}),text:o.build_url}),(a=o.rpm_list)===null||a===void 0?void 0:a.map(function(_,h){var L=[l({id:"plan.kernel.pkg"}),l({id:"plan.devel"}),l({id:"plan.headers"})][h];return(0,e.jsx)(w,{label:L,text:_},h)})]}):o.build_log,!!o.code_repo&&(0,e.jsx)(w,{label:l({id:"plan.code_repo"}),text:o.code_repo})]})})]}):null})},pr=dr,Kt,cr=["svgRef","title"];function mt(){return mt=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(r[t]=a[t])}return r},mt.apply(this,arguments)}function ur(r,n){if(r==null)return{};var a=_r(r,n),t,l;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(l=0;l<o.length;l++)t=o[l],!(n.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,t)||(a[t]=r[t]))}return a}function _r(r,n){if(r==null)return{};var a={},t=Object.keys(r),l,o;for(o=0;o<t.length;o++)l=t[o],!(n.indexOf(l)>=0)&&(a[l]=r[l]);return a}var vr=function(n){var a=n.svgRef,t=n.title,l=ur(n,cr);return d.createElement("svg",mt({width:"16px",height:"16px",viewBox:"0 0 16 16",ref:a},l),t?d.createElement("title",null,t):null,Kt||(Kt=d.createElement("g",{id:"\\u521B\\u5EFA\\u8BA1\\u5212",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},d.createElement("g",{id:"\\u811A\\u672C\\u63A7\\u5236\\u53F0"},d.createElement("rect",{id:"\\u77E9\\u5F62",fill:"#000000",fillRule:"nonzero",opacity:0,x:0,y:0,width:16,height:16}),d.createElement("rect",{id:"\\u77E9\\u5F62",stroke:"#000000",fillOpacity:.65,fill:"#000000",x:1.5,y:1.5,width:13,height:13,rx:2}),d.createElement("path",{d:"M4.28,7.0112 L7.108,5.7904 L7.108,5.32 L4.28,4.0992 L4.28,4.676 L6.352,5.5552 L4.28,6.4344 L4.28,7.0112 Z M10.188,7.784 L10.188,7.2576 L7.388,7.2576 L7.388,7.784 L10.188,7.784 Z",id:">_",fill:"#FFFFFF",fillRule:"nonzero"})))))},fr=d.forwardRef(function(r,n){return d.createElement(vr,mt({svgRef:n},r))}),Ci=i.p+"static/consoleIcon.cced5f36.svg",Ut,kt,$t,Nt,Ht,zt,Vt,Gt,Jt,Xt,Yt,Qt,qt,mr=p.ZP.div(Ut||(Ut=(0,c.Z)([`
    width: 398px;
    min-height: 100%;
    padding-right: 4px;
    display: inline-block;
    position: relative;
    // &:hover {
    //     background: #FAFAFA;
    // }
`]))),gr=p.ZP.div(kt||(kt=(0,c.Z)([`
    height: 40px;
    width: 100%;
    position: relative;
    display: flex;
`]))),xr=p.ZP.div($t||($t=(0,c.Z)([`
    height: 40px;
    width: 130px;
    background: #FFFFFF;
    border: 2px solid #1890FF;
    border-radius: 20px;
    outline:none;
    padding: 0 4px;
    font-size:16px;
    color: rgba(0,0,0,.65);
    //
    display: flex;
    align-items: center;
`]))),hr=`
    height:2px;
    position:absolute;
    top:50%;
    background:#CECECE;
`,Ei=p.ZP.div(Nt||(Nt=(0,c.Z)([`
    `,`
    width:20px;
    left:-20px
`])),hr),jr=p.ZP.div(Ht||(Ht=(0,c.Z)([`
    flex: 1;
    height: 2px;
    margin-top: 20px;
    background: #CECECE;
    display: flex;
    justify-content: space-between;
`]))),br=p.ZP.div(zt||(zt=(0,c.Z)([`
    height: 12px;
    width: 12px;
    background: #CECECE;
    border: 1px solid #CECECE;
    border-radius: 24px;
    margin-top: -5px;
`]))),yr=p.ZP.div(Vt||(Vt=(0,c.Z)([`
  width: 0px;
  height: 0px;
  display: inline-block;
  border-left: 5px solid #CECECE;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-right: 5px solid transparent;
  margin-top: -4px;
  margin-right: -8px;
`]))),Cr=p.ZP.div(Gt||(Gt=(0,c.Z)([`
    width: 100%;
    padding-left: 24px;
    padding-top: 0px;
`]))),Er=p.ZP.div(Jt||(Jt=(0,c.Z)([`
   display: flex;
   margin-left: -2px;
`]))),en=p.ZP.div(Xt||(Xt=(0,c.Z)([`
    line-height: 22px;
    margin-left: 7px;
`]))),Pr=p.ZP.div(Yt||(Yt=(0,c.Z)([`
    width: 14px;
    height: 14px;
    margin-left: 4px;
    margin-top: -4px;
    cursor: pointer;
`]))),Or=p.ZP.div(Qt||(Qt=(0,c.Z)([`
   width: 264px;
   margin-left: 35px;
   margin-top: 5px;
   opacity: 0.45;
   font-family: PingFangSC-Regular;
   font-size: 14px;
   color: #000;
   line-height: 22px;
   // \u591A\u884C\u6587\u672C\u7701\u7565
   overflow: hidden; 
   text-overflow: ellipsis; 
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
`]))),Pi=p.ZP.div(qt||(qt=(0,c.Z)([`
    width:2px;
    height:`,`px;
`])),function(r){return r.index*30}),Oi=i(22385),Sr=i(89456),Zr=i(81900),tn=i.n(Zr),Lr=function(n){var a=n.title,t=n.width,l=t===void 0?"100%":t,o=n.children,C=(0,d.useRef)(null),S=(0,d.useState)(!1),j=(0,R.Z)(S,2),Z=j[0],E=j[1],y=function(){var K=C.current.clientHeight,w=C.current.scrollHeight;E(K<w)};return(0,d.useEffect)(function(){y()},[a]),Z?(0,e.jsx)(Sr.Z,{placement:"bottomLeft",title:a,children:(0,e.jsx)("div",{ref:C,className:tn().ellipsis,style:{width:l},children:o||a||""})}):(0,e.jsx)("div",{ref:C,className:tn().ellipsis,style:{width:l},children:o||a||""})},Ir=Lr,wr=function(n){var a=n.data,t=n.mainStatus,l=a||{},o=l.name,C=o===void 0?"":o,S=l.stage_state,j=l.machine_info,Z=j===void 0?[]:j,E=(0,$.mA)(S,null),y=(0,$.I9)(S),b=t?"#1890FF":y,K=function(h){return t&&h==="pending"?"stop":h},w=function(h){typeof h=="string"&&n.callback({data:h})};return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(mr,{children:[(0,e.jsxs)(gr,{children:[(0,e.jsxs)(xr,{style:{border:"2px solid ".concat(E)},children:[(0,e.jsx)(Qe,{params:K(S)}),(0,e.jsx)(en,{children:C})]}),(0,e.jsxs)(jr,{style:{background:b},children:[(0,e.jsx)(br,{style:{background:y,border:"1px solid ".concat(y)}}),(0,e.jsx)(yr,{style:{borderLeft:"5px solid ".concat(b)}})]})]}),(0,e.jsx)(Cr,{children:Z.map(function(_,h){return(0,e.jsxs)(Lt,{borderColor:y,children:[(0,e.jsxs)(Er,{children:[(0,e.jsx)(Zt,{borderColor:y}),(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",margin:"-2px 0 0 8px"},children:[(0,e.jsx)(Qe,{params:K(_.state)}),(0,e.jsx)(en,{children:_.machine}),!!(_.result&&typeof _.result=="string")&&(0,e.jsx)(Pr,{onClick:function(){return w(_.result)},children:(0,e.jsx)(fr,{})})]})]}),(0,e.jsx)(Or,{children:(0,e.jsx)(Ir,{title:_.script})})]},_.tmpl_id||h)})})]})})},Dr=wr,nn,rn,an,ln,on,sn,dn,pn,cn,un,_n,vn,fn,mn,Fr=p.ZP.div(nn||(nn=(0,c.Z)([`
    width: 398px;
    min-height: 100%;
    padding-right: 4px;
    display: inline-block;
    position: relative;
`]))),Rr=p.ZP.div(rn||(rn=(0,c.Z)([`
    height: 40px;
    width: 100%;
    position: relative;
    display: flex;
`]))),Mr=p.ZP.div(an||(an=(0,c.Z)([`
    height: 40px;
    min-width: 120px;
    background: #FFFFFF;
    border: 2px solid #CECECE;
    border-radius: 20px;
    outline:none;
    padding-left: 4px;
    padding-right: 16px;
    font-size:16px;
    color: rgba(0,0,0,.65);
    display: flex;
    align-items: center;
`]))),Br=`
    height:2px;
    position:absolute;
    top:50%;
    background:#CECECE;
`,Si=p.ZP.div(ln||(ln=(0,c.Z)([`
    `,`
    width:20px;
    left:-20px
`])),Br),Ar=p.ZP.div(on||(on=(0,c.Z)([`
    flex: 1;
    height: 2px;
    margin-top: 20px;
    background: #CECECE;
    display: flex;
    justify-content: space-between;
`]))),Tr=p.ZP.div(sn||(sn=(0,c.Z)([`
    height: 12px;
    width: 12px;
    background: #CECECE;
    border: 1px solid #CECECE;
    border-radius: 24px;
    margin-top: -5px;
`]))),Wr=p.ZP.div(dn||(dn=(0,c.Z)([`
  width: 0px;
  height: 0px;
  display: inline-block;
  border-left: 5px solid #CECECE;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-right: 5px solid transparent;
  margin-top: -4px;
  margin-right: -8px;
`]))),Kr=p.ZP.div(pn||(pn=(0,c.Z)([`
    width: 100%;
    padding-left: 24px;
    padding-top: 0px;
`]))),Ur=p.ZP.div(cn||(cn=(0,c.Z)([`
   display: flex;
   margin-left: -2px;
`]))),kr=p.ZP.div(un||(un=(0,c.Z)([`
   margin: -4px 0 0 8px;
   display: flex;
   align-items: center;
   border: 1px solid #CECECE;
   border-radius: 19px;
   padding-right: 8px;

`]))),gn=p.ZP.div(_n||(_n=(0,c.Z)([`
    line-height: 22px;
    margin-left: 7px;
`]))),Zi=p.ZP.span(vn||(vn=(0,c.Z)([`
    &:hover {
      color: #1890FF;
    }
`]))),$r=p.ZP.div(fn||(fn=(0,c.Z)([`
   width: 264px;
   margin-left: 35px;
   margin-top: 5px;
   // opacity: 0.45;
   font-family: PingFangSC-Regular;
   font-size: 14px;
   color: #000;
   line-height: 22px;
   // \u591A\u884C\u6587\u672C\u7701\u7565
   overflow: hidden; 
   text-overflow: ellipsis; 
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
`]))),Li=p.ZP.div(mn||(mn=(0,c.Z)([`
    width:2px;
    height:`,`px;
`])),function(r){return r.index*30}),Nr=function(n){var a=n.ws_id,t=n.data,l=n.mainStatus,o=(0,d.useState)({rowId:""}),C=(0,R.Z)(o,2),S=C[0],j=C[1],Z=t||{},E=Z.name,y=E===void 0?"":E,b=Z.stage_state,K=Z.impact_next,w=Z.template_result,_=w===void 0?[]:w,h=(0,$.mA)(b,null),L=(0,$.I9)(b),H=l?"#1890FF":L,ue=function(_e){_e.job_id&&f.m8.push("/ws/".concat(a,"/test_result/").concat(_e.job_id))},qe=function(_e,Ae){return _e===Ae?{color:"#1890FF",opacity:1,cursor:"pointer"}:{color:"#000",opacity:.45,cursor:"none"}};return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(Fr,{children:[(0,e.jsxs)(Rr,{children:[(0,e.jsxs)(Mr,{style:{border:"2px solid ".concat(h)},children:[(0,e.jsx)(Qe,{params:b}),(0,e.jsx)(gn,{children:y})]}),(0,e.jsxs)(Ar,{style:{background:H},children:[(0,e.jsx)(Tr,{style:{background:K?"#fff":L,border:"1px solid ".concat(L)}}),(0,e.jsx)(Wr,{style:{borderLeft:"5px solid ".concat(H)}})]})]}),(0,e.jsx)(Kr,{children:_.map(function(u,_e){var Ae=(0,$.mA)(u.job_state,b),z=b==="stop"?"stop":u.job_state,D=JSON.parse(u.job_result)||{},V=D.total,q=D.pass,se=D.fail;return(0,e.jsxs)(Lt,{borderColor:L,children:[(0,e.jsxs)(Ur,{children:[(0,e.jsx)(Zt,{borderColor:L}),(0,e.jsxs)(kr,{style:{border:"1px solid ".concat(Ae)},children:[(0,e.jsx)("div",{style:{marginLeft:-1,height:24},children:(0,e.jsx)(Qe,{params:z})}),(0,e.jsxs)("div",{style:{padding:"0 4px"},children:[(0,e.jsx)("span",{style:{color:"#649FF6",padding:"0 8px"},children:V||"-"}),(0,e.jsx)("span",{style:{color:"#39C15B",padding:"0 8px"},children:q||"-"}),(0,e.jsx)("span",{style:{color:"#C84C5A",padding:"0 8px"},children:se||"-"})]})]}),u.job_state_desc?(0,e.jsx)(de.Z,{placement:"top",content:u.job_state_desc,arrowPointAtCenter:!0,overlayStyle:{wordBreak:"break-all",maxWidth:"400px"},children:(0,e.jsx)(U.Z,{style:{color:"rgba(0, 0, 0, 0.6)",marginLeft:"5px",paddingTop:"2px"}})}):null]}),(0,e.jsx)($r,{children:(0,e.jsx)(gn,{children:u.job_name?(0,e.jsx)("span",{style:qe(_e,S.rowId),onMouseEnter:function(){return j({rowId:_e})},onMouseLeave:function(){return j({rowId:""})},onClick:function(){return ue(u)},children:u.job_name}):(0,e.jsx)("span",{style:{opacity:.45},children:u.tmpl_name})})})]},u.tmpl_id)})})]})})},Hr=Nr,zr=function(n){var a=n.data,t=n.prepareCallback,l=t===void 0?function(){}:t,o=n.ws_id,C=a.state,S=a.build_pkg_info,j=S===void 0?{}:S,Z=a.build_result,E=a.prepare_result,y=a.test_result,b=y===void 0?[]:y,K=E||{},w=K.name,_=w===void 0?"":w,h=["success","fail"].indexOf(C)>-1,L=h?"#1890FF":"#CECECE";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(Je,{children:[(0,e.jsxs)(xt,{children:[(0,e.jsx)(Me,{}),(0,e.jsx)(ne,{})]}),(0,e.jsx)(ht,{children:(0,e.jsx)(f._H,{id:"plan.start"})})]}),(0,e.jsx)(pr,{data:Z||j,mainStatus:h}),!!_&&(0,e.jsx)(Dr,{data:E,callback:l,mainStatus:h}),b==null?void 0:b.map(function(H,ue){return(0,e.jsx)(Hr,{data:H,ws_id:o,mainStatus:h},ue)}),(0,e.jsxs)(jt,{children:[(0,e.jsx)(ye,{children:(0,e.jsx)("div",{style:{marginTop:20},children:h?(0,e.jsx)(dt,{style:{color:L}}):(0,e.jsx)(Ge,{style:{background:L,border:"1px solid ".concat(L)}})})}),(0,e.jsx)(bt,{children:(0,e.jsx)(f._H,{id:"plan.end"})})]})]})},Vr=zr,xn=i(11849),Gr=i(54549),Jr=i(13690),Xr=i(39404),hn=i.n(Xr),Yr=(0,d.forwardRef)(function(r,n){var a=(0,d.useState)(!1),t=(0,R.Z)(a,2),l=t[0],o=t[1],C=(0,d.useState)({}),S=(0,R.Z)(C,2),j=S[0],Z=S[1];(0,d.useImperativeHandle)(n,function(){return{show:function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",K=arguments.length>1?arguments[1]:void 0;o(!0),Z({config_value:K})}}});var E=function(){o(!1)};return(0,e.jsx)("div",{className:hn().ConsoleDrawer,children:(0,e.jsx)(De.Z,{maskStyle:{opacity:0,animation:"unset"},maskClosable:!0,keyboard:!1,onClose:E,visible:l,placement:"bottom",closeIcon:(0,e.jsx)(Gr.Z,{style:{color:"#fff"}}),closable:!0,bodyStyle:{padding:0},footer:null,children:(0,e.jsx)("div",{className:hn().ConsoleDrawer_content,children:(0,e.jsx)(Jr.Z,{code:j.config_value,onChange:function(b){return Z((0,xn.Z)((0,xn.Z)({},j),{},{config_value:b}))},readOnly:"nocursor"})})})})}),Qr=Yr,qr=i(28686),jn,bn,yn,Cn,ei=p.ZP.div(jn||(jn=(0,c.Z)([`
    width:`,`px;
    height:`,`px;
    /* overflow:auto; */
    background: #f5f5f5;
`])),function(r){return r.width},function(r){return r.height}),ti=p.ZP.div(bn||(bn=(0,c.Z)([`
    height: 150px;
    width:100%;
    background:#fff;
    padding: 20px 20px 12px;
`]))),ni=p.ZP.div(yn||(yn=(0,c.Z)([`
    margin-top: 10px;
    width: 100%;
    height: calc( 100% - 100px - 20px - 40px);
    background:#fff;
    overflow: auto;
    padding: 29px 20px 20px 20px;
    display: flex;
`]))),ri=p.ZP.span(Cn||(Cn=(0,c.Z)([`
    cursor:pointer;
    &:hover {
        color : #1890FF;
    }
`]))),ii=function(n){var a=n.match.params,t=a.ws_id,l=a.plan_id,o=n.route;(0,k.jk)("Workspace.TestPlan.".concat(o.name));var C=(0,k.CR)(),S=C.height,j=C.width,Z=(0,d.useState)(!1),E=(0,R.Z)(Z,2),y=E[0],b=E[1],K=(0,d.useState)({}),w=(0,R.Z)(K,2),_=w[0],h=w[1],L=(0,d.useRef)(null),H=(0,d.useRef)(null),ue=function(){var z=(0,pe.Z)((0,Y.Z)().mark(function D(V){var q,se,fe;return(0,Y.Z)().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.prev=0,b(!0),M.next=4,ze(V);case 4:if(M.t0=M.sent,M.t0){M.next=7;break}M.t0={};case 7:q=M.t0,se=q.data,fe=se===void 0?{}:se,q.code===200?h(fe):(0,$.EV)(q.code,q.msg),b(!1),M.next=16;break;case 13:M.prev=13,M.t1=M.catch(0),b(!1);case 16:case"end":return M.stop()}},D,null,[[0,13]])}));return function(V){return z.apply(this,arguments)}}();(0,d.useEffect)(function(){l&&ue({ws_id:t,plan_instance_id:l})},[l]);var qe=function(D){var V=D.data,q=V.state,se=V.start_time,fe=V.end_time,et=V.error_info,M={display:"flex",alignItems:"center"},tt={background:"#F2F4F6",border:"1px solid #F2F4F6"};return(0,e.jsxs)("div",{style:M,children:[q==="pending"&&(0,e.jsx)(A.Z,{color:"#D9D9D9",style:{fontWeight:500,textAlign:"center"},children:"Pending"}),q==="running"&&(0,e.jsx)(A.Z,{color:"#649FF6",style:{fontWeight:500,textAlign:"center"},children:"Running"}),q==="fail"&&(0,e.jsxs)("div",{style:{marginRight:10},children:[(0,e.jsx)(A.Z,{color:"#C84C5A",style:{fontWeight:500,textAlign:"center"},children:"Fail"}),(0,e.jsx)(de.Z,{placement:"topLeft",content:et,arrowPointAtCenter:!0,children:(0,e.jsx)(U.Z,{style:{marginLeft:-5}})})]}),q==="success"&&(0,e.jsx)(A.Z,{color:"#81BF84",style:{fontWeight:500,textAlign:"center"},children:"Complete"}),!!se&&(0,e.jsxs)(A.Z,{style:tt,children:[(0,e.jsx)(f._H,{id:"plan.start_time"}),"\uFF1A",se]}),!!fe&&(0,e.jsxs)(A.Z,{style:tt,children:[(0,e.jsx)(f._H,{id:"plan.end_time"}),"\uFF1A",fe]})]})},u=(0,d.useCallback)(function(z){var D;(D=L.current)===null||D===void 0||D.show("add",z)},[]);function _e(z){var D,V=z.data;(D=H.current)===null||D===void 0||D.show("show",V)}function Ae(z){var D=z.data,V=z.editFn;V({ws_id:t,plan_instance_id:l,note:D})}return(0,e.jsxs)(Te.Z,{spinning:y,children:[(0,e.jsxs)(ei,{height:S-50,width:j,children:[(0,e.jsxs)(ti,{children:[(0,e.jsx)(le.Z,{style:{marginBottom:14},children:(0,e.jsxs)(ge.Z,{children:[(0,e.jsx)(ge.Z.Item,{children:(0,e.jsx)(ri,{onClick:function(){return f.m8.push("/ws/".concat(t,"/test_plan/view"))},children:(0,e.jsx)(f._H,{id:"Workspace.TestPlan.View"})})}),(0,e.jsx)(ge.Z.Item,{children:(0,e.jsx)(f._H,{id:"Workspace.TestPlan.".concat(o.name)})})]})}),(0,e.jsx)(We.Z.Title,{level:2,style:{marginBottom:8},children:_.name}),(0,e.jsxs)(le.Z,{justify:"space-between",align:"bottom",children:[(0,e.jsx)(qe,{data:_}),(0,e.jsxs)("div",{style:{display:"flex"},children:[(0,e.jsx)(me.Z,{onClick:function(){return u(_)},disabled:!Object.keys(_).length,children:(0,e.jsx)(f._H,{id:"plan.configuration"})}),(0,e.jsx)(qr.Z,{dreType:"bottomRight",ws_id:t,jobInfo:_,origin:"jobDetail",buttonStyle:{marginRight:0,marginLeft:10}})]})]})]}),(0,e.jsx)(ni,{children:(0,e.jsx)(Vr,{data:_,prepareCallback:_e,ws_id:t})})]}),(0,e.jsx)(ke,{ref:L,callback:Ae}),(0,e.jsx)(Qr,{ref:H})]})},ai=ii},28686:function(F,Ee,i){"use strict";var rt=i(20136),Te=i(55241),it=i(57663),me=i(71577),at=i(402),We=i(97272),lt=i(66456),le=i(79764),Ke=i(39428),ge=i(3182),J=i(11849),de=i(2824),X=i(67294),A=i(7253),Y=i.n(A),pe=i(31298),R=i(37763),c=i.n(R),d=i(39067),U=i(27687),p=i(99069),f=i(19675),k=i(16917),oe=i(20009),De=i(96486),G=i.n(De),ve=i(10753),He=i(71933),m=i(85893),ot={container:245,button_width:122};Ee.Z=function(xe){var st=(0,k.YB)(),he=st.formatMessage,Fe=(0,oe.UO)(),$=Fe.ws_id,ze=xe.dreType,te=xe.jobInfo,Ue=xe.origin,P=xe.buttonStyle,e=P===void 0?{}:P,Pe=xe.title,Re=te&&te.report_li,ke={name:"",creator_name:""},Ve=(0,X.useState)(!0),Oe=(0,de.Z)(Ve,2),je=Oe[0],Se=Oe[1],$e=(0,X.useState)(ke),Ze=(0,de.Z)($e,2),Q=Ze[0],Le=Ze[1],be=(0,X.useState)([]),Ie=(0,de.Z)(be,2),N=Ie[0],ce=Ie[1],we=(0,X.useState)(!1),ye=(0,de.Z)(we,2),Me=ye[0],Be=ye[1],Ge=X.useRef(null);(0,He.Z)(function(){Be(!1)},[Ge]);var ne=function(g,x){var I=G().cloneDeep(x);return g&&(I=I.filter(function(W){var O=g.split(",").map(function(Ye){return Ye&&(Ye==null?void 0:Ye.trim())}),pt=G().get(W,"creator");return O.includes(String(pt))})),I},Je=function(g,x){var I=G().cloneDeep(x);return g&&(I=I.filter(function(W){var O=G().get(W,"name");return O.includes(g.trim())})),I},xt=function(g,x){var I=g||"";G().isArray(I)&&(I=I.join(","));var W={};W[x]=I;var O=G().cloneDeep(Re);I===""?O=Je(Q.name||"",O):(O=Je(Q.name||"",O),O=ne(I,O)),ce(O),Le((0,J.Z)((0,J.Z)({},Q),W))},ht=[{dataIndex:"name",title:(0,m.jsx)(k._H,{id:"ws.result.list.report.name"}),width:165,ellipsis:{showTitle:!1},className:"report_name_hover",filterDropdown:function(g){var x=g.confirm;return(0,m.jsx)(d.Z,{confirm:x,autoFocus:je,styleObj:ot,onConfirm:function(W){var O=G().cloneDeep(Re);W===void 0?O=ne(Q.creator_name||"",O):(O=ne(Q.creator_name||"",O),O=Je(W,O)),ce(O),Le((0,J.Z)((0,J.Z)({},Q),{},{name:W}))},placeholder:he({id:"ws.result.list.report.name.placeholder"})})},onFilterDropdownVisibleChange:function(g){g&&Se(!je)},filterIcon:function(){return(0,m.jsx)(p.Z,{style:{color:Q.name?"#1890ff":void 0}})},render:function(g,x){return(0,m.jsx)(ve.K,{ellipsis:{tooltip:x.name},children:(0,m.jsx)(c(),{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[Q.name||""],autoEscape:!0,textToHighlight:x&&x.name||"-",onClick:function(){return window.open("/ws/".concat($,"/test_report/").concat(x.id))}})})}},{dataIndex:"creator_name",width:100,title:(0,m.jsx)(k._H,{id:"ws.result.list.creators"}),filterDropdown:function(g){var x=g.confirm;return(0,m.jsx)(U.Z,{autoFocus:je,confirm:x,onConfirm:function(W){return xt(W,"creator_name")},page_size:20})},onFilterDropdownVisibleChange:function(g){g&&Se(!je)},filterIcon:function(){return(0,m.jsx)(p.Z,{style:{color:Q.creator_name?"#1890ff":void 0}})},render:function(g){return(0,m.jsx)(ve.K,{ellipsis:{tooltip:!0},children:g||"-"})}},{dataIndex:"gmt_created",title:(0,m.jsx)(k._H,{id:"ws.result.list.gmt_created"}),width:200,render:function(g){return(0,m.jsx)(ve.K,{ellipsis:{tooltip:!0},children:g||"-"})}}],jt=function(){var T=(0,ge.Z)((0,Ke.Z)().mark(function g(x){return(0,Ke.Z)().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:window.open("/ws/".concat($,"/test_report/").concat(x));case 1:case"end":return W.stop()}},g)}));return function(x){return T.apply(this,arguments)}}(),dt=function(g,x){if(g.stopPropagation(),G().isArray(x)||(x=[]),x.length===1){jt(x[0].id);return}Be(!Me),ce(x)},bt=function(g){return(0,m.jsx)("div",{ref:Ge,children:(0,m.jsx)(pe.$B,{style:{height:244},children:(0,m.jsx)(le.Z,{size:"small",rowKey:"id",columns:ht,dataSource:g,pagination:!1,rowClassName:Y().row_table})})})},Xe=G().get(te,"report_li")&&te.report_li.length;return(0,m.jsx)("div",{className:Y().conf_item_box,children:(0,m.jsx)(Te.Z,{placement:ze,title:(0,m.jsx)(k._H,{id:"ws.result.list.view.report"}),content:bt(N),trigger:"click",overlayClassName:Y().popover_job,open:Me,children:Ue==="jobList"?(0,m.jsx)(We.Z.Text,{style:{color:"#1890FF",cursor:"pointer",display:Xe?"inlineBlock":"none"},children:(0,m.jsxs)("span",{onClick:G().partial(dt,G(),te&&te.report_li),style:{display:"flex",alignItems:"center"},children:[Pe||(0,m.jsx)(k._H,{id:"ws.result.list.view.report"}),(0,m.jsx)(f.Z,{style:{display:Xe>1?"inline-block":"none",marginLeft:"2px",marginTop:"2px"}})]})}):(0,m.jsxs)(me.Z,{type:"primary",onClick:G().partial(dt,G(),te&&te.report_li),style:(0,J.Z)({marginRight:8,display:Xe?"inlineBlock":"none"},e),children:[Pe||(0,m.jsx)(k._H,{id:"ws.result.list.view.report"}),(0,m.jsx)(f.Z,{style:{display:Xe>1?"inline-block":"none",marginLeft:"2px",marginTop:"2px"}})]})})})}}}]);
