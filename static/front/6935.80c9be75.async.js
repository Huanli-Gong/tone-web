(self.webpackChunktone_front=self.webpackChunktone_front||[]).push([[6935],{69278:function(T){T.exports={job_test_form:"job_test_form___YaoQn",divider_styles:"divider_styles___1N62U",kernal_wrapper_styles:"kernal_wrapper_styles___SaJbW"}},67945:function(T){T.exports={job_test_form:"job_test_form___9jbiJ",save_template:"save_template___1y982",table_question_tooltip:"table_question_tooltip___3qPEG"}},88389:function(T,L,r){"use strict";var a=r(14320),o=r(53479),_=r(57359),W=r(34423),M=r(31650),j=r(25100),D=r(20418),Z=r(65790),C=r(17187),d=r(20693),P=r(3278),y=r(74127),f=r(35832),h=r(32326),l=r(22374),m=r(53849),p=r(72882),i=r(22812),u=r(24812),v=r(33705),O=r(52454),b=function(g){var R=(0,i.YB)(),I=g.disabled,K=g.form,A=(0,u.TH)(),c=A.pathname;return(0,O.jsx)(C.Z.Item,(0,D.Z)((0,D.Z)({label:R.formatMessage({id:"kernel.kernel_packages.label"}),required:!0},g),{},{children:(0,O.jsx)(C.Z.List,{name:"kernel_packages",initialValue:[""],rules:[{validator:function(){var s=(0,h.Z)((0,f.Z)().mark(function t(){return(0,f.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.resolve());case 1:case"end":return e.stop()}},t)}));function n(){return s.apply(this,arguments)}return n}()}],children:function(n,t,E){var e=t.add,S=t.remove;return(0,y.Z)(E),(0,O.jsxs)(o.Z,{style:{flexDirection:"column",gap:8,width:"100%"},children:[n.map(function($,k){return(0,O.jsxs)("div",{style:{position:"relative"},children:[(0,O.jsx)(C.Z.Item,(0,D.Z)((0,D.Z)({},$),{},{rules:[{required:!0,message:R.formatMessage({id:"kernel.kernel_packages".concat(k!==0?".other":"",".rules.empty")})}],children:(0,O.jsx)(P.Z,{disabled:I,style:{width:"100%"},allowClear:!0,placeholder:R.formatMessage({id:"kernel.kernel_packages".concat(k!==0?".other":"",".placeholder")})})})),!I&&k!==0&&n.length>1?(0,O.jsx)(m.Z,{style:{position:"absolute",right:0,top:0,transform:"translate(150%,60%)"},onClick:function(){return S($.name)}}):null,!!~c.indexOf("/test_result/")&&(0,O.jsx)(v.db,{style:{right:-20},onCopy:function(){var w;return K==null||(w=K.getFieldValue("kernel_packages"))===null||w===void 0?void 0:w[k]}})]},k)}),!I&&(0,O.jsx)(j.Z.Link,{onClick:function(){return e()},children:(0,O.jsxs)(W.Z,{children:[(0,O.jsx)(p.Z,{}),(0,O.jsx)(j.Z.Link,{children:R.formatMessage({id:"kernel.kernel_packages.add"})})]})})]})}})}))};L.Z=b},14582:function(T,L,r){"use strict";r.d(L,{ZP:function(){return W},cR:function(){return M},Zy:function(){return j},Kc:function(){return D},sP:function(){return Z}});var a=r(35832),o=r(32326),_=r(22812),W=function(d){return(0,_.WY)("/api/sys/kernel/",{params:d})},M=function(d){return(0,_.WY)("/api/sys/kernel/",{method:"post",data:d})},j=function(d){return(0,_.WY)("/api/sys/kernel/",{method:"put",data:d})},D=function(d){return(0,_.WY)("/api/sys/kernel/",{method:"delete",data:d})},Z=function(){var C=(0,o.Z)((0,a.Z)().mark(function d(P){return(0,a.Z)().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",(0,_.WY)("/api/sys/sync_kernel/",{method:"post",data:P}));case 1:case"end":return f.stop()}},d)}));return function(P){return C.apply(this,arguments)}}()},20662:function(T,L,r){"use strict";r.d(L,{VX:function(){return W},Ir:function(){return M},ry:function(){return j},nM:function(){return D},Zf:function(){return Z},OV:function(){return C},c0:function(){return d},lk:function(){return P},$L:function(){return y},YK:function(){return f},ty:function(){return h},th:function(){return l},_L:function(){return m},E7:function(){return p},h4:function(){return i},GW:function(){return u},cQ:function(){return v},fW:function(){return O},xN:function(){return b},h5:function(){return U},yE:function(){return g},vS:function(){return R},Qj:function(){return I},o_:function(){return K},NA:function(){return A},ff:function(){return c}});var a=r(35832),o=r(32326),_=r(22812),W=function(){var s=(0,o.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.WY)("/api/sys/product/",{params:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return s.apply(this,arguments)}}(),M=function(){var s=(0,o.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.WY)("/api/sys/product/",{method:"delete",data:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return s.apply(this,arguments)}}(),j=function(){var s=(0,o.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.WY)("/api/sys/product/",{method:"post",data:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return s.apply(this,arguments)}}(),D=function(){var s=(0,o.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.WY)("/api/sys/product/",{method:"put",data:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return s.apply(this,arguments)}}(),Z=function(){var s=(0,o.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.WY)("/api/sys/product/drag/",{method:"put",data:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return s.apply(this,arguments)}}(),C=function(){var s=(0,o.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.WY)("/api/sys/product/drag/",{params:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return s.apply(this,arguments)}}(),d=function(){var s=(0,o.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.WY)("/api/sys/project/drag/",{method:"put",data:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return s.apply(this,arguments)}}(),P=function(){var s=(0,o.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.WY)("/api/sys/project/drag/",{params:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return s.apply(this,arguments)}}(),y=function(){var s=(0,o.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.WY)("/api/sys/project/",{method:"post",data:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return s.apply(this,arguments)}}(),f=function(){var s=(0,o.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.WY)("/api/sys/project/",{params:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return s.apply(this,arguments)}}(),h=function(){var s=(0,o.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.WY)("/api/sys/project/",{method:"put",data:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return s.apply(this,arguments)}}(),l=function(){var s=(0,o.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.WY)("/api/sys/project/",{method:"delete",data:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return s.apply(this,arguments)}}(),m=function(){var s=(0,o.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.WY)("/api/sys/repository/",{params:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return s.apply(this,arguments)}}(),p=function(){var s=(0,o.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.WY)("/api/sys/repository/project/",{params:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return s.apply(this,arguments)}}(),i=function(){var s=(0,o.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.WY)("/api/sys/repository/",{method:"post",data:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return s.apply(this,arguments)}}(),u=function(){var s=(0,o.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.WY)("/api/sys/repository/",{method:"put",data:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return s.apply(this,arguments)}}(),v=function(){var s=(0,o.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.WY)("/api/sys/repository/",{method:"delete",data:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return s.apply(this,arguments)}}(),O=function(){var s=(0,o.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.WY)("/api/sys/branch/relation/",{params:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return s.apply(this,arguments)}}(),b=function(){var s=(0,o.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.WY)("/api/sys/branch/relation/",{method:"post",data:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return s.apply(this,arguments)}}(),U=function(){var s=(0,o.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.WY)("/api/sys/branch/relation/",{method:"put",data:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return s.apply(this,arguments)}}(),g=function(){var s=(0,o.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.WY)("/api/sys/branch/relation/",{method:"delete",data:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return s.apply(this,arguments)}}(),R=function(){var s=(0,o.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.WY)("/api/sys/branch/",{params:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return s.apply(this,arguments)}}(),I=function(){var s=(0,o.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.WY)("/api/sys/branch/",{method:"post",data:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return s.apply(this,arguments)}}(),K=function(){var s=(0,o.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.WY)("/api/sys/branch/",{method:"put",data:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return s.apply(this,arguments)}}(),A=function(){var s=(0,o.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.WY)("/api/sys/branch/",{method:"delete",data:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return s.apply(this,arguments)}}(),c=function(){var s=(0,o.Z)((0,a.Z)().mark(function n(t){return(0,a.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,_.WY)("/api/sys/check/gitlab/",{method:"post",data:t}));case 1:case"end":return e.stop()}},n)}));return function(t){return s.apply(this,arguments)}}()},9793:function(T,L,r){"use strict";r.d(L,{C:function(){return j}});var a=r(20418),o=r(39190),_=r(22374),W=r(53849),M=r(52454),j=function(Z){var C=Z.remove,d=Z.field,P=Z.position,y=Z.deleteCallback,f=(0,_.useState)(""),h=(0,o.Z)(f,2),l=h[0],m=h[1];return(0,M.jsx)("div",{onMouseEnter:function(){return m("red")},onMouseLeave:function(){return m("")},style:(0,a.Z)({position:"absolute"},P),children:(0,M.jsx)(W.Z,{onClick:function(){C(d.name)},style:{color:l}})})}},39854:function(T,L,r){"use strict";var a=r(20693),o=r(3278),_=r(20418),W=r(65790),M=r(17187),j=r(69230),D=r(33821),Z=r(64974),C=r(39190),d=r(22374),P=r(98140),y=r(69278),f=r.n(y),h=r(94705),l=r(22812),m=r(20662),p=r(75841),i=r(52454),u=function(O){console.log(O);var b=O.disabled,U=O.project_id,g=O.form,R=O.needScriptList,I=O.isPlan,K=I===void 0?!1:I,A=(0,l.YB)(),c=A.formatMessage,s=(0,d.useState)(g==null?void 0:g.getFieldValue("code_repo")),n=(0,C.Z)(s,2),t=n[0],E=n[1],e=(0,l.QT)(function(){return(0,m.E7)({project_id:U})},{initialData:[],manual:!0}),S=e.data,$=S===void 0?[]:S,k=e.run,V=b?{backgroundColor:"#f5f5f5"}:{},w=(0,d.useMemo)(function(){var x=(0,Z.Z)($),F;try{for(x.s();!(F=x.n()).done;){var Y=F.value;if(Y.repo_id===t)return Y.branch_dict}}catch(B){x.e(B)}finally{x.f()}return[]},[t,$]);(0,d.useEffect)(function(){k()},[U]);var N=function(F){E(F),g==null||g.setFieldsValue({code_branch:null})},G=(0,l.QT)(p.nL,{initialData:[],manual:!0}),H=G.data,Q=function(F){var Y=H.findIndex(function(J){return J.id===F}),B=H[Y];g==null||g.setFieldsValue({code_repo:B.repo,code_branch:B==null?void 0:B.current_branch,compile_branch:B.builder_branch})};return(0,i.jsx)(M.Z.Item,{label:" ",children:(0,i.jsxs)(M.Z.Item,{className:f().kernal_wrapper_styles,children:[(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(M.Z.Item,(0,_.Z)((0,_.Z)({},h.W),{},{label:(0,i.jsx)(l._H,{id:"kernel.form.code_repo"}),name:"code_repo",rules:[{required:!0,message:c({id:"kernel.form.code_repo.message"})}],children:(0,i.jsx)(D.Z,{disabled:b,placeholder:c({id:"kernel.form.code_repo.placeholder"}),style:V,onChange:N,allowClear:!0,showSearch:!0,filterOption:function(F,Y){var B;return((B=Y==null?void 0:Y.label)!==null&&B!==void 0?B:"").toLowerCase().includes(F.toLowerCase())},options:$.map(function(x){return{value:x.repo_id,label:x.repo_git_url}})})})),(0,i.jsx)(M.Z.Item,(0,_.Z)((0,_.Z)({},h.W),{},{label:(0,i.jsx)(l._H,{id:"kernel.form.code_branch"}),name:"code_branch",rules:[{required:!0,message:c({id:"kernel.form.code_branch.message"})}],children:(0,i.jsx)(D.Z,{style:V,disabled:b,showSearch:!0,allowClear:!0,placeholder:c({id:"kernel.form.code_branch.message"}),filterOption:function(F,Y){var B;return((B=Y==null?void 0:Y.label)!==null&&B!==void 0?B:"").toLowerCase().includes(F.toLowerCase())},options:w==null?void 0:w.map(function(x){return{value:x.id,label:x.name}})})}))]}),(0,i.jsx)(M.Z.Item,(0,_.Z)((0,_.Z)({},h.W),{},{label:(0,i.jsx)(l._H,{id:"kernel.form.compile_branch"}),name:"compile_branch",children:(0,i.jsx)(o.Z,{style:V,readOnly:b,autoComplete:"off",placeholder:c({id:"kernel.form.compile_branch.message"})})})),(0,i.jsx)(M.Z.Item,(0,_.Z)((0,_.Z)({},h.W),{},{label:(0,i.jsx)(l._H,{id:"kernel.form.cpu_arch"}),name:"cpu_arch",rules:[{required:!0,message:c({id:"kernel.form.cpu_arch.message"})}],children:(0,i.jsxs)(D.Z,{disabled:b,placeholder:c({id:"kernel.form.cpu_arch.placeholder"}),children:[(0,i.jsx)(D.Z.Option,{value:"x86_64",children:"x86_64"}),(0,i.jsx)(D.Z.Option,{value:"aarch64",children:"aarch64"})]})})),(0,i.jsx)(M.Z.Item,(0,_.Z)((0,_.Z)({},h.W),{},{label:"Commit ID",name:"commit_id",children:(0,i.jsx)(o.Z,{style:V,readOnly:b,autoComplete:"off",placeholder:c({id:"kernel.form.commit_id.placeholder"})})})),(0,i.jsx)(M.Z.Item,(0,_.Z)((0,_.Z)({},h.W),{},{label:"Build Config",name:"build_config",children:(0,i.jsx)(o.Z,{style:V,readOnly:b,autoComplete:"off",placeholder:c({id:"kernel.form.build_config.placeholder"})})})),(0,i.jsx)(M.Z.Item,(0,_.Z)((0,_.Z)({},h.W),{},{label:"Build Server",name:"build_machine",children:(0,i.jsx)(o.Z,{style:V,readOnly:b,autoComplete:"off",placeholder:c({id:"kernel.form.build_machine.placeholder"})})})),R&&(0,i.jsx)(P.Z,{form:g,disabled:b})]})})};L.Z=u},96211:function(T,L,r){"use strict";var a=r(88966),o=r(11048),_=r(20418),W=r(65790),M=r(17187),j=r(69230),D=r(33821),Z=r(22374),C=r(98140),d=r(69278),P=r.n(d),y=r(94705),f=r(22812),h=r(88389),l=r(52454),m=function(i){var u=i.kernelList,v=u===void 0?[]:u,O=i.form,b=i.disabled,U=b===void 0?!1:b,g=i.needScriptList,R=g===void 0?!0:g,I=(0,f.YB)(),K=I.formatMessage,A=function(s){var n=v.findIndex(function(S){return S.version===s});if(n>-1){var t=v[n],E=t.version,e=t.kernel_packages;O.setFieldsValue({kernel_version:E,kernel_packages:e})}};return(0,Z.useEffect)(function(){var c=O.getFieldValue("kernel_info");c&&JSON.stringify(c)!=="{}"&&O.setFieldsValue({hotfix_install:c==null?void 0:c.hotfix_install,scripts:c==null?void 0:c.scripts})},[O]),(0,l.jsx)(M.Z.Item,{label:" ",children:(0,l.jsxs)(M.Z.Item,{className:P().kernal_wrapper_styles,children:[(0,l.jsx)(M.Z.Item,(0,_.Z)((0,_.Z)({},y.W),{},{label:(0,l.jsx)(f._H,{id:"kernel.form.kernel_version"}),name:"kernel_version",rules:[{required:!0,message:K({id:"kernel.form.kernel_version.message"})}],children:(0,l.jsx)(D.Z,{placeholder:K({id:"please.select"}),onChange:A,disabled:U,showSearch:!0,getPopupContainer:function(s){return s.parentNode},filterOption:function(s,n){var t;return((t=n==null?void 0:n.label)!==null&&t!==void 0?t:"").toLowerCase().includes(s.toLowerCase())},options:v.map(function(c){return{value:c.version,label:c.version}})})})),(0,l.jsx)(h.Z,(0,_.Z)((0,_.Z)((0,_.Z)({},i),y.W),{},{disabled:!0})),(0,l.jsx)(M.Z.Item,(0,_.Z)((0,_.Z)({},y.W),{},{label:"hotfix_install",name:"hotfix_install",rules:[{required:!0,message:K({id:"please.select"})}],children:(0,l.jsxs)(o.ZP.Group,{disabled:U,children:[(0,l.jsx)(o.ZP,{value:!0,children:(0,l.jsx)(f._H,{id:"operation.yes"})}),(0,l.jsx)(o.ZP,{value:!1,children:(0,l.jsx)(f._H,{id:"operation.no"})})]})})),R&&(0,l.jsx)(C.Z,{form:O,disabled:U})]})})};L.Z=m},98140:function(T,L,r){"use strict";var a=r(46721),o=r(94867),_=r(14320),W=r(53479),M=r(70772),j=r(6701),D=r(88966),Z=r(11048),C=r(65790),d=r(17187),P=r(20693),y=r(3278),f=r(8281),h=r(58591),l=r(22374),m=r(9793),p=r(22812),i=r(24812),u=r(33705),v=r(52454),O=function(U){var g=U.disabled,R=g===void 0?!1:g,I=U.form,K=(0,p.YB)(),A=K.formatMessage,c=(0,i.TH)(),s=c.pathname;return(0,v.jsx)(d.Z.List,{name:"scripts",children:function(t,E){var e=E.add,S=E.remove;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(h.Z,{style:{margin:"8px 0"},dashed:!0}),t.map(function($,k){return(0,v.jsxs)(W.Z,{children:[(0,v.jsxs)(j.Z,{span:24,style:{position:"relative"},children:[(0,v.jsx)(d.Z.Item,{label:(0,v.jsx)(p._H,{id:"kernel.form.script"}),name:[$.name,"script"],wrapperCol:{span:17},labelCol:{span:6},children:(0,v.jsx)(y.Z.TextArea,{placeholder:A({id:"kernel.form.script.placeholder"}),disabled:R})}),!R&&k>0&&(0,v.jsx)(m.C,{position:{right:0,top:0},remove:S,field:$}),!!~s.indexOf("/test_result/")&&(0,v.jsx)(u.db,{onCopy:function(){var w;return I==null||(w=I.getFieldValue("scripts"))===null||w===void 0?void 0:w[k].script}}),(0,v.jsx)(W.Z,{children:(0,v.jsx)(j.Z,{span:18,offset:6,children:(0,v.jsx)(d.Z.Item,{label:(0,v.jsx)(p._H,{id:"kernel.form.pos"}),name:[$.name,"pos"],style:{marginBottom:0},children:(0,v.jsxs)(Z.ZP.Group,{disabled:R,children:[(0,v.jsx)(Z.ZP,{value:"before",children:(0,v.jsx)(p._H,{id:"kernel.form.pos.before"})}),(0,v.jsx)(Z.ZP,{value:"after",children:(0,v.jsx)(p._H,{id:"kernel.form.pos.after"})})]})})})})]}),(0,v.jsx)(h.Z,{style:{margin:"8px 0 5px"},dashed:!0})]},$.key)}),!R&&(0,v.jsx)(d.Z.Item,{label:" ",labelCol:{span:6},style:{marginBottom:0},children:(0,v.jsx)(o.Z,{type:"link",onClick:function(){return e({pos:"before"})},size:"small",style:{padding:0,fontSize:12},children:(0,v.jsx)(p._H,{id:"kernel.form.add.kernel"})})})]})}})};L.Z=O},78938:function(T,L,r){"use strict";var a=r(65790),o=r(17187),_=r(20418),W=r(22374),M=r(98140),j=r(69278),D=r.n(j),Z=r(88389),C=r(94705),d=r(52454),P=function(f){var h=f.disabled,l=h===void 0?!1:h,m=f.needScriptList,p=m===void 0?!0:m,i=f.form;return(0,d.jsx)(o.Z.Item,{label:" ",children:(0,d.jsxs)(o.Z.Item,{className:D().kernal_wrapper_styles,children:[(0,d.jsx)(Z.Z,(0,_.Z)((0,_.Z)({},f),C.W)),p&&(0,d.jsx)(M.Z,{form:i,disabled:l})]})})};L.Z=P},94705:function(T,L,r){"use strict";r.d(L,{W:function(){return a}});var a={wrapperCol:{span:17},labelCol:{span:6}}},33705:function(T,L,r){"use strict";r.d(L,{lR:function(){return U},db:function(){return g},fD:function(){return R},O6:function(){return I},zW:function(){return K}});var a=r(57359),o=r(34423),_=r(79625),W=r(96584),M=r(51937),j=r(34516),D=r(31650),Z=r(25100),C=r(41428),d=r(22374),P=r(74066),y=r(68591),f=r.n(y),h=r(67945),l=r.n(h),m=r(97939),p=r(52493),i=r(526),u=r(22812),v=r(52454),O,b=(0,m.ZP)(Z.Z.Link)(O||(O=(0,C.Z)([`
    position: absolute;
    right: 5px;
    top: 2px;
    &:hover {
        svg path{
            fill: #1890ff;
        }
    }
`]))),U=function(c){var s,n,t=c.label,E=c.closable,e=c.onClose,S=c.value;return(0,v.jsx)(j.Z,{color:(s=t.props)===null||s===void 0?void 0:s.color,closable:E,onClose:e,style:{marginRight:3},children:((n=t.props)===null||n===void 0?void 0:n.children)||S})},g=function(c){var s=c.onCopy,n=c.style,t=(0,u.YB)(),E=(0,i.oM)(t.formatMessage({id:"request.copy.success"}));return(0,v.jsx)(b,{onClick:function(){return E(s==null?void 0:s())},style:n||{},children:(0,v.jsx)(p.r,{})})},R=function(c){var s=c.title,n=c.desc,t=c.className;return(0,v.jsxs)(o.Z,{children:[(0,v.jsx)("span",{style:{color:"rgba(0, 0, 0, 0.85)"},children:s}),(0,v.jsx)(W.Z,{overlayClassName:f()(l().table_question_tooltip,t),placement:"bottom",arrowPointAtCenter:!0,title:n,color:"#fff",children:(0,v.jsx)(P.Z,{style:{color:"rgba(0, 0, 0, 0.65)"}})})]})},I=function(c){if(c&&JSON.stringify(c)!=="{}"){for(var s=Object.keys(c),n=0,t=s.length;n<t;n++)if(c[s[n]].length>1)return!0}return!1},K=function(c){return c&&typeof+c=="number"?parseInt(c)+"":""}},75841:function(T,L,r){"use strict";r.d(L,{NQ:function(){return W},_r:function(){return M},Ls:function(){return D},YK:function(){return Z},bU:function(){return C},Eh:function(){return d},MD:function(){return P},VF:function(){return y},VV:function(){return f},nL:function(){return h}});var a=r(35832),o=r(32326),_=r(22812),W=function(){var l=(0,o.Z)((0,a.Z)().mark(function m(p){return(0,a.Z)().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,_.WY)("/api/job/test/",{params:p}));case 1:case"end":return u.stop()}},m)}));return function(p){return l.apply(this,arguments)}}(),M=function(){var l=(0,o.Z)((0,a.Z)().mark(function m(p){return(0,a.Z)().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,_.WY)("/api/job/test/",{data:p,method:"post"}));case 1:case"end":return u.stop()}},m)}));return function(p){return l.apply(this,arguments)}}(),j=null,D=function(){var l=(0,o.Z)((0,a.Z)().mark(function m(p){return(0,a.Z)().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,_.WY)("/api/job/template/detail/",{params:p}));case 1:case"end":return u.stop()}},m)}));return function(p){return l.apply(this,arguments)}}(),Z=function(){var l=(0,o.Z)((0,a.Z)().mark(function m(p){return(0,a.Z)().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,_.WY)("/api/sys/project/",{params:p}));case 1:case"end":return u.stop()}},m)}));return function(p){return l.apply(this,arguments)}}(),C=function(){var l=(0,o.Z)((0,a.Z)().mark(function m(p){return(0,a.Z)().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,_.WY)("/api/baseline/list/",{params:p}));case 1:case"end":return u.stop()}},m)}));return function(p){return l.apply(this,arguments)}}(),d=function(){var l=(0,o.Z)((0,a.Z)().mark(function m(p){return(0,a.Z)().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,_.WY)("/api/rerun/config/",{params:p}));case 1:case"end":return u.stop()}},m)}));return function(p){return l.apply(this,arguments)}}(),P=function(){var l=(0,o.Z)((0,a.Z)().mark(function m(p){return(0,a.Z)().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,_.WY)("/api/report/template/list/",{params:p}));case 1:case"end":return u.stop()}},m)}));return function(p){return l.apply(this,arguments)}}(),y=function(){var l=(0,o.Z)((0,a.Z)().mark(function m(p){return(0,a.Z)().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,_.WY)("/api/job/yaml_data_verify/",{data:p,method:"post"}));case 1:case"end":return u.stop()}},m)}));return function(p){return l.apply(this,arguments)}}(),f=function(){var l=(0,o.Z)((0,a.Z)().mark(function m(p){return(0,a.Z)().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,_.WY)("/api/job/data_conversion/",{data:p,method:"post"}));case 1:case"end":return u.stop()}},m)}));return function(p){return l.apply(this,arguments)}}(),h=function(){var l=(0,o.Z)((0,a.Z)().mark(function m(){return(0,a.Z)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,_.WY)("/api/job/test/product"));case 1:case"end":return i.stop()}},m)}));return function(){return l.apply(this,arguments)}}()},52493:function(T,L,r){"use strict";r.d(L,{r:function(){return Z}});var a=r(22374),o,_=["svgRef","title"];function W(){return W=Object.assign?Object.assign.bind():function(d){for(var P=1;P<arguments.length;P++){var y=arguments[P];for(var f in y)Object.prototype.hasOwnProperty.call(y,f)&&(d[f]=y[f])}return d},W.apply(this,arguments)}function M(d,P){if(d==null)return{};var y=j(d,P),f,h;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(d);for(h=0;h<l.length;h++)f=l[h],!(P.indexOf(f)>=0)&&(!Object.prototype.propertyIsEnumerable.call(d,f)||(y[f]=d[f]))}return y}function j(d,P){if(d==null)return{};var y={},f=Object.keys(d),h,l;for(l=0;l<f.length;l++)h=f[l],!(P.indexOf(h)>=0)&&(y[h]=d[h]);return y}var D=function(P){var y=P.svgRef,f=P.title,h=M(P,_);return a.createElement("svg",W({width:"12px",height:"12px",viewBox:"0 0 12 12",ref:y},h),f?a.createElement("title",null,f):null,o||(o=a.createElement("g",{id:"\\u5206\\u6790",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},a.createElement("g",{id:"0.\\u6027\\u80FD-\\u5185\\u7F51-\\u9009\\u62E9\\u6807\\u7B7E",transform:"translate(-1194.000000, -133.000000)",fill:"#000000"},a.createElement("g",{id:"Group-21",transform:"translate(20.000000, 110.000000)"},a.createElement("g",{id:"\\u94FE\\u63A5",transform:"translate(1172.000000, 21.000000)"},a.createElement("rect",{id:"Rectangle",fillRule:"nonzero",opacity:0,x:0,y:0,width:16,height:16}),a.createElement("path",{d:"M11.91,7.92 C11.7153722,8.09503346 11.4186893,8.09033311 11.2297039,7.90922206 C11.0407184,7.72811102 11.0234032,7.43189657 11.19,7.23 L12.06,6.32 C12.709515,5.51696592 12.6264975,4.34816777 11.87,3.645 C11.115,2.86 10,2.79 9.37,3.45 L6.94,6 C6.29048502,6.80303408 6.37350246,7.97183223 7.13,8.675 C7.3238618,8.87001873 7.3238618,9.18498127 7.13,9.38 C7.0361167,9.47465633 6.90831877,9.52789916 6.775,9.52789916 C6.64168123,9.52789916 6.5138833,9.47465633 6.42,9.38 C5.29380253,8.29148422 5.21051969,6.51405308 6.23,5.325 L8.66,2.79 C9.705,1.7 11.48,1.79 12.61,2.99 C13.7040886,4.07696429 13.7802373,5.82185565 12.785,7 L11.91,7.92 Z M3.59,8.08 C3.78462784,7.90496654 4.0813107,7.90966689 4.27029614,8.09077794 C4.45928159,8.27188898 4.47659677,8.56810343 4.31,8.77 L3.44,9.68 C2.79048502,10.4830341 2.87350246,11.6518322 3.63,12.355 C4.385,13.14 5.5,13.21 6.13,12.55 L8.56,10 C9.20951498,9.19696592 9.12649754,8.02816777 8.37,7.325 C8.1761382,7.12998127 8.1761382,6.81501873 8.37,6.62 C8.4638833,6.52534367 8.59168123,6.47210084 8.725,6.47210084 C8.85831877,6.47210084 8.9861167,6.52534367 9.08,6.62 C10.2061975,7.70851578 10.2894803,9.48594692 9.27,10.675 L6.84,13.21 C5.795,14.3 4.02,14.21 2.89,13.01 C1.79591137,11.9230357 1.71976275,10.1781444 2.715,9 L3.59,8.08 Z",id:"Shape",fillOpacity:.65})))))))},Z=a.forwardRef(function(d,P){return a.createElement(D,W({svgRef:P},d))}),C=r.p+"static/icon_link.2c6ce887.svg"}}]);
