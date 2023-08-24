"use strict";(self.webpackChunkua_rhyme_db=self.webpackChunkua_rhyme_db||[]).push([[981],{512:(e,t,r)=>{function s(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=s(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:()=>a});const a=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=s(e))&&(a&&(a+=" "),a+=t);return a}},536:(e,t,r)=>{r.d(t,{cI:()=>ge});var s=r(294),a=e=>"checkbox"===e.type,i=e=>e instanceof Date,n=e=>null==e;const o=e=>"object"==typeof e;var u=e=>!n(e)&&!Array.isArray(e)&&o(e)&&!i(e),l=e=>u(e)&&e.target?a(e.target)?e.target.checked:e.target.value:e,c=(e,t)=>e.has((e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e)(t)),f=e=>{const t=e.constructor&&e.constructor.prototype;return u(t)&&t.hasOwnProperty("isPrototypeOf")},d="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function y(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else{if(d&&(e instanceof Blob||e instanceof FileList)||!r&&!u(e))return e;if(t=r?[]:{},r||f(e))for(const r in e)e.hasOwnProperty(r)&&(t[r]=y(e[r]));else t=e}return t}var m=e=>Array.isArray(e)?e.filter(Boolean):[],h=e=>void 0===e,v=(e,t,r)=>{if(!t||!u(e))return r;const s=m(t.split(/[,[\].]+?/)).reduce(((e,t)=>n(e)?e:e[t]),e);return h(s)||s===e?h(e[t])?r:e[t]:s};const g={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},p={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},b="pattern",_="required";s.createContext(null);var V=(e,t,r,s=!0)=>{const a={defaultValues:t._defaultValues};for(const i in e)Object.defineProperty(a,i,{get:()=>{const a=i;return t._proxyFormState[a]!==p.all&&(t._proxyFormState[a]=!s||p.all),r&&(r[a]=!0),e[a]}});return a},A=e=>u(e)&&!Object.keys(e).length,w=(e,t,r,s)=>{r(e);const{name:a,...i}=e;return A(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find((e=>t[e]===(!s||p.all)))},S=e=>Array.isArray(e)?e:[e];var F=e=>"string"==typeof e,x=(e,t,r,s,a)=>F(e)?(s&&t.watch.add(e),v(r,e,a)):Array.isArray(e)?e.map((e=>(s&&t.watch.add(e),v(r,e)))):(s&&(t.watchAll=!0),r),k=e=>/^\w*$/.test(e),D=e=>m(e.replace(/["|']|\]/g,"").split(/\.|\[/));function O(e,t,r){let s=-1;const a=k(t)?[t]:D(t),i=a.length,n=i-1;for(;++s<i;){const t=a[s];let i=r;if(s!==n){const r=e[t];i=u(r)||Array.isArray(r)?r:isNaN(+a[s+1])?{}:[]}e[t]=i,e=e[t]}return e}var C=(e,t,r,s,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[s]:a||!0}}:{};const E=(e,t,r)=>{for(const s of r||Object.keys(e)){const r=v(e,s);if(r){const{_f:e,...s}=r;if(e&&t(e.name)){if(e.ref.focus){e.ref.focus();break}if(e.refs&&e.refs[0].focus){e.refs[0].focus();break}}else u(s)&&E(s,t)}}};var T=e=>({isOnSubmit:!e||e===p.onSubmit,isOnBlur:e===p.onBlur,isOnChange:e===p.onChange,isOnAll:e===p.all,isOnTouch:e===p.onTouched}),L=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some((t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))))),U=(e,t,r)=>{const s=m(v(e,r));return O(s,"root",t[r]),O(e,r,s),e},j=e=>"boolean"==typeof e,B=e=>"file"===e.type,N=e=>"function"==typeof e,M=e=>{if(!d)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},q=e=>F(e),P=e=>"radio"===e.type,R=e=>e instanceof RegExp;const H={value:!1,isValid:!1},I={value:!0,isValid:!0};var $=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!h(e[0].attributes.value)?h(e[0].value)||""===e[0].value?I:{value:e[0].value,isValid:!0}:I:H}return H};const W={isValid:!1,value:null};var G=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e),W):W;function Z(e,t,r="validate"){if(q(e)||Array.isArray(e)&&e.every(q)||j(e)&&!e)return{type:r,message:q(e)?e:"",ref:t}}var z=e=>u(e)&&!R(e)?e:{value:e,message:""},J=async(e,t,r,s,i)=>{const{ref:o,refs:l,required:c,maxLength:f,minLength:d,min:y,max:m,pattern:g,validate:p,name:V,valueAsNumber:w,mount:S,disabled:x}=e._f,k=v(t,V);if(!S||x)return{};const D=l?l[0]:o,O=e=>{s&&D.reportValidity&&(D.setCustomValidity(j(e)?"":e||""),D.reportValidity())},E={},T=P(o),L=a(o),U=T||L,H=(w||B(o))&&h(o.value)&&h(k)||M(o)&&""===o.value||""===k||Array.isArray(k)&&!k.length,I=C.bind(null,V,r,E),W=(e,t,r,s="maxLength",a="minLength")=>{const i=e?t:r;E[V]={type:e?s:a,message:i,ref:o,...I(e?s:a,i)}};if(i?!Array.isArray(k)||!k.length:c&&(!U&&(H||n(k))||j(k)&&!k||L&&!$(l).isValid||T&&!G(l).isValid)){const{value:e,message:t}=q(c)?{value:!!c,message:c}:z(c);if(e&&(E[V]={type:_,message:t,ref:D,...I(_,t)},!r))return O(t),E}if(!(H||n(y)&&n(m))){let e,t;const s=z(m),a=z(y);if(n(k)||isNaN(k)){const r=o.valueAsDate||new Date(k),i=e=>new Date((new Date).toDateString()+" "+e),n="time"==o.type,u="week"==o.type;F(s.value)&&k&&(e=n?i(k)>i(s.value):u?k>s.value:r>new Date(s.value)),F(a.value)&&k&&(t=n?i(k)<i(a.value):u?k<a.value:r<new Date(a.value))}else{const r=o.valueAsNumber||(k?+k:k);n(s.value)||(e=r>s.value),n(a.value)||(t=r<a.value)}if((e||t)&&(W(!!e,s.message,a.message,"max","min"),!r))return O(E[V].message),E}if((f||d)&&!H&&(F(k)||i&&Array.isArray(k))){const e=z(f),t=z(d),s=!n(e.value)&&k.length>+e.value,a=!n(t.value)&&k.length<+t.value;if((s||a)&&(W(s,e.message,t.message),!r))return O(E[V].message),E}if(g&&!H&&F(k)){const{value:e,message:t}=z(g);if(R(e)&&!k.match(e)&&(E[V]={type:b,message:t,ref:o,...I(b,t)},!r))return O(t),E}if(p)if(N(p)){const e=Z(await p(k,t),D);if(e&&(E[V]={...e,...I("validate",e.message)},!r))return O(e.message),E}else if(u(p)){let e={};for(const s in p){if(!A(e)&&!r)break;const a=Z(await p[s](k,t),D,s);a&&(e={...a,...I(s,a.message)},O(a.message),r&&(E[V]=e))}if(!A(e)&&(E[V]={ref:D,...e},!r))return E}return O(!0),E};function K(e,t){const r=Array.isArray(t)?t:k(t)?[t]:D(t),s=1===r.length?e:function(e,t){const r=t.slice(0,-1).length;let s=0;for(;s<r;)e=h(e)?s++:e[t[s++]];return e}(e,r),a=r.length-1,i=r[a];return s&&delete s[i],0!==a&&(u(s)&&A(s)||Array.isArray(s)&&function(e){for(const t in e)if(e.hasOwnProperty(t)&&!h(e[t]))return!1;return!0}(s))&&K(e,r.slice(0,-1)),e}function Q(){let e=[];return{get observers(){return e},next:t=>{for(const r of e)r.next&&r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter((e=>e!==t))}}),unsubscribe:()=>{e=[]}}}var X=e=>n(e)||!o(e);function Y(e,t){if(X(e)||X(t))return e===t;if(i(e)&&i(t))return e.getTime()===t.getTime();const r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(const a of r){const r=e[a];if(!s.includes(a))return!1;if("ref"!==a){const e=t[a];if(i(r)&&i(e)||u(r)&&u(e)||Array.isArray(r)&&Array.isArray(e)?!Y(r,e):r!==e)return!1}}return!0}var ee=e=>"select-multiple"===e.type,te=e=>P(e)||a(e),re=e=>M(e)&&e.isConnected,se=e=>{for(const t in e)if(N(e[t]))return!0;return!1};function ae(e,t={}){const r=Array.isArray(e);if(u(e)||r)for(const r in e)Array.isArray(e[r])||u(e[r])&&!se(e[r])?(t[r]=Array.isArray(e[r])?[]:{},ae(e[r],t[r])):n(e[r])||(t[r]=!0);return t}function ie(e,t,r){const s=Array.isArray(e);if(u(e)||s)for(const s in e)Array.isArray(e[s])||u(e[s])&&!se(e[s])?h(t)||X(r[s])?r[s]=Array.isArray(e[s])?ae(e[s],[]):{...ae(e[s])}:ie(e[s],n(t)?{}:t[s],r[s]):r[s]=!Y(e[s],t[s]);return r}var ne=(e,t)=>ie(e,t,ae(t)),oe=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:s})=>h(e)?e:t?""===e?NaN:e?+e:e:r&&F(e)?new Date(e):s?s(e):e;function ue(e){const t=e.ref;if(!(e.refs?e.refs.every((e=>e.disabled)):t.disabled))return B(t)?t.files:P(t)?G(e.refs).value:ee(t)?[...t.selectedOptions].map((({value:e})=>e)):a(t)?$(e.refs).value:oe(h(t.value)?e.ref.value:t.value,e)}var le=(e,t,r,s)=>{const a={};for(const r of e){const e=v(t,r);e&&O(a,r,e._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:s}},ce=e=>h(e)?e:R(e)?e.source:u(e)?R(e.value)?e.value.source:e.value:e,fe=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function de(e,t,r){const s=v(e,r);if(s||k(r))return{error:s,name:r};const a=r.split(".");for(;a.length;){const s=a.join("."),i=v(t,s),n=v(e,s);if(i&&!Array.isArray(i)&&r!==s)return{name:r};if(n&&n.type)return{name:s,error:n};a.pop()}return{name:r}}var ye=(e,t,r,s,a)=>!a.isOnAll&&(!r&&a.isOnTouch?!(t||e):(r?s.isOnBlur:a.isOnBlur)?!e:!(r?s.isOnChange:a.isOnChange)||e),me=(e,t)=>!m(v(e,t)).length&&K(e,t);const he={mode:p.onSubmit,reValidateMode:p.onChange,shouldFocusError:!0};function ve(e={},t){let r,s={...he,...e},o={submitCount:0,isDirty:!1,isLoading:N(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},f={},b=(u(s.defaultValues)||u(s.values))&&y(s.defaultValues||s.values)||{},_=s.shouldUnregister?{}:y(b),V={action:!1,mount:!1,watch:!1},w={mount:new Set,unMount:new Set,array:new Set,watch:new Set},k=0;const D={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},C={values:Q(),array:Q(),state:Q()},q=e.resetOptions&&e.resetOptions.keepDirtyValues,P=T(s.mode),R=T(s.reValidateMode),H=s.criteriaMode===p.all,I=async e=>{if(D.isValid||e){const e=s.resolver?A((await Z()).errors):await z(f,!0);e!==o.isValid&&C.state.next({isValid:e})}},$=e=>D.isValidating&&C.state.next({isValidating:e}),W=(e,t,r,s)=>{const a=v(f,e);if(a){const i=v(_,e,h(r)?v(b,e):r);h(i)||s&&s.defaultChecked||t?O(_,e,t?i:ue(a._f)):ie(e,i),V.mount&&I()}},G=(e,t,r,s,a)=>{let i=!1,n=!1;const u={name:e};if(!r||s){D.isDirty&&(n=o.isDirty,o.isDirty=u.isDirty=se(),i=n!==u.isDirty);const r=Y(v(b,e),t);n=v(o.dirtyFields,e),r?K(o.dirtyFields,e):O(o.dirtyFields,e,!0),u.dirtyFields=o.dirtyFields,i=i||D.dirtyFields&&n!==!r}if(r){const t=v(o.touchedFields,e);t||(O(o.touchedFields,e,r),u.touchedFields=o.touchedFields,i=i||D.touchedFields&&t!==r)}return i&&a&&C.state.next(u),i?u:{}},Z=async e=>s.resolver(_,s.context,le(e||w.mount,f,s.criteriaMode,s.shouldUseNativeValidation)),z=async(e,t,r={valid:!0})=>{for(const a in e){const i=e[a];if(i){const{_f:e,...a}=i;if(e){const a=w.array.has(e.name),n=await J(i,_,H,s.shouldUseNativeValidation&&!t,a);if(n[e.name]&&(r.valid=!1,t))break;!t&&(v(n,e.name)?a?U(o.errors,n,e.name):O(o.errors,e.name,n[e.name]):K(o.errors,e.name))}a&&await z(a,t,r)}}return r.valid},se=(e,t)=>(e&&t&&O(_,e,t),!Y(_e(),b)),ae=(e,t,r)=>x(e,w,{...V.mount?_:h(t)?b:F(e)?{[e]:t}:t},r,t),ie=(e,t,r={})=>{const s=v(f,e);let i=t;if(s){const r=s._f;r&&(!r.disabled&&O(_,e,oe(t,r)),i=M(r.ref)&&n(t)?"":t,ee(r.ref)?[...r.ref.options].forEach((e=>e.selected=i.includes(e.value))):r.refs?a(r.ref)?r.refs.length>1?r.refs.forEach((e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(i)?!!i.find((t=>t===e.value)):i===e.value))):r.refs[0]&&(r.refs[0].checked=!!i):r.refs.forEach((e=>e.checked=e.value===i)):B(r.ref)?r.ref.value="":(r.ref.value=i,r.ref.type||C.values.next({name:e,values:{..._}})))}(r.shouldDirty||r.shouldTouch)&&G(e,i,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&be(e)},ve=(e,t,r)=>{for(const s in t){const a=t[s],n=`${e}.${s}`,o=v(f,n);!w.array.has(e)&&X(a)&&(!o||o._f)||i(a)?ie(n,a,r):ve(n,a,r)}},ge=(e,r,s={})=>{const a=v(f,e),i=w.array.has(e),u=y(r);O(_,e,u),i?(C.array.next({name:e,values:{..._}}),(D.isDirty||D.dirtyFields)&&s.shouldDirty&&C.state.next({name:e,dirtyFields:ne(b,_),isDirty:se(e,u)})):!a||a._f||n(u)?ie(e,u,s):ve(e,u,s),L(e,w)&&C.state.next({...o}),C.values.next({name:e,values:{..._}}),!V.mount&&t()},pe=async t=>{const a=t.target;let i=a.name,n=!0;const u=v(f,i);if(u){let c,d;const y=a.type?ue(u._f):l(t),m=t.type===g.BLUR||t.type===g.FOCUS_OUT,h=!fe(u._f)&&!s.resolver&&!v(o.errors,i)&&!u._f.deps||ye(m,v(o.touchedFields,i),o.isSubmitted,R,P),p=L(i,w,m);O(_,i,y),m?(u._f.onBlur&&u._f.onBlur(t),r&&r(0)):u._f.onChange&&u._f.onChange(t);const b=G(i,y,m,!1),V=!A(b)||p;if(!m&&C.values.next({name:i,type:t.type,values:{..._}}),h)return D.isValid&&I(),V&&C.state.next({name:i,...p?{}:b});if(!m&&p&&C.state.next({...o}),$(!0),s.resolver){const{errors:e}=await Z([i]),t=de(o.errors,f,i),r=de(e,f,t.name||i);c=r.error,i=r.name,d=A(e)}else c=(await J(u,_,H,s.shouldUseNativeValidation))[i],n=isNaN(y)||y===v(_,i,y),n&&(c?d=!1:D.isValid&&(d=await z(f,!0)));n&&(u._f.deps&&be(u._f.deps),((t,s,a,i)=>{const n=v(o.errors,t),u=D.isValid&&j(s)&&o.isValid!==s;var l;if(e.delayError&&a?(l=()=>((e,t)=>{O(o.errors,e,t),C.state.next({errors:o.errors})})(t,a),r=e=>{clearTimeout(k),k=setTimeout(l,e)},r(e.delayError)):(clearTimeout(k),r=null,a?O(o.errors,t,a):K(o.errors,t)),(a?!Y(n,a):n)||!A(i)||u){const e={...i,...u&&j(s)?{isValid:s}:{},errors:o.errors,name:t};o={...o,...e},C.state.next(e)}$(!1)})(i,d,c,b))}},be=async(e,t={})=>{let r,a;const i=S(e);if($(!0),s.resolver){const t=await(async e=>{const{errors:t}=await Z();if(e)for(const r of e){const e=v(t,r);e?O(o.errors,r,e):K(o.errors,r)}else o.errors=t;return t})(h(e)?e:i);r=A(t),a=e?!i.some((e=>v(t,e))):r}else e?(a=(await Promise.all(i.map((async e=>{const t=v(f,e);return await z(t&&t._f?{[e]:t}:t)})))).every(Boolean),(a||o.isValid)&&I()):a=r=await z(f);return C.state.next({...!F(e)||D.isValid&&r!==o.isValid?{}:{name:e},...s.resolver||!e?{isValid:r}:{},errors:o.errors,isValidating:!1}),t.shouldFocus&&!a&&E(f,(e=>e&&v(o.errors,e)),e?i:w.mount),a},_e=e=>{const t={...b,...V.mount?_:{}};return h(e)?t:F(e)?v(t,e):e.map((e=>v(t,e)))},Ve=(e,t)=>({invalid:!!v((t||o).errors,e),isDirty:!!v((t||o).dirtyFields,e),isTouched:!!v((t||o).touchedFields,e),error:v((t||o).errors,e)}),Ae=(e,t,r)=>{const s=(v(f,e,{_f:{}})._f||{}).ref;O(o.errors,e,{...t,ref:s}),C.state.next({name:e,errors:o.errors,isValid:!1}),r&&r.shouldFocus&&s&&s.focus&&s.focus()},we=(e,t={})=>{for(const r of e?S(e):w.mount)w.mount.delete(r),w.array.delete(r),t.keepValue||(K(f,r),K(_,r)),!t.keepError&&K(o.errors,r),!t.keepDirty&&K(o.dirtyFields,r),!t.keepTouched&&K(o.touchedFields,r),!s.shouldUnregister&&!t.keepDefaultValue&&K(b,r);C.values.next({values:{..._}}),C.state.next({...o,...t.keepDirty?{isDirty:se()}:{}}),!t.keepIsValid&&I()},Se=(e,t={})=>{let r=v(f,e);const a=j(t.disabled);return O(f,e,{...r||{},_f:{...r&&r._f?r._f:{ref:{name:e}},name:e,mount:!0,...t}}),w.mount.add(e),r?a&&O(_,e,t.disabled?void 0:v(_,e,ue(r._f))):W(e,!0,t.value),{...a?{disabled:t.disabled}:{},...s.progressive?{required:!!t.required,min:ce(t.min),max:ce(t.max),minLength:ce(t.minLength),maxLength:ce(t.maxLength),pattern:ce(t.pattern)}:{},name:e,onChange:pe,onBlur:pe,ref:a=>{if(a){Se(e,t),r=v(f,e);const s=h(a.value)&&a.querySelectorAll&&a.querySelectorAll("input,select,textarea")[0]||a,i=te(s),n=r._f.refs||[];if(i?n.find((e=>e===s)):s===r._f.ref)return;O(f,e,{_f:{...r._f,...i?{refs:[...n.filter(re),s,...Array.isArray(v(b,e))?[{}]:[]],ref:{type:s.type,name:e}}:{ref:s}}}),W(e,!1,void 0,s)}else r=v(f,e,{}),r._f&&(r._f.mount=!1),(s.shouldUnregister||t.shouldUnregister)&&(!c(w.array,e)||!V.action)&&w.unMount.add(e)}}},Fe=()=>s.shouldFocusError&&E(f,(e=>e&&v(o.errors,e)),w.mount),xe=(e,t)=>async r=>{r&&(r.preventDefault&&r.preventDefault(),r.persist&&r.persist());let a=y(_);if(C.state.next({isSubmitting:!0}),s.resolver){const{errors:e,values:t}=await Z();o.errors=e,a=t}else await z(f);K(o.errors,"root"),A(o.errors)?(C.state.next({errors:{}}),await e(a,r)):(t&&await t({...o.errors},r),Fe(),setTimeout(Fe)),C.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:A(o.errors),submitCount:o.submitCount+1,errors:o.errors})},ke=(r,s={})=>{const a=r||b,i=y(a),n=r&&!A(r)?i:b;if(s.keepDefaultValues||(b=a),!s.keepValues){if(s.keepDirtyValues||q)for(const e of w.mount)v(o.dirtyFields,e)?O(n,e,v(_,e)):ge(e,v(n,e));else{if(d&&h(r))for(const e of w.mount){const t=v(f,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(M(e)){const t=e.closest("form");if(t){t.reset();break}}}}f={}}_=e.shouldUnregister?s.keepDefaultValues?y(b):{}:y(n),C.array.next({values:{...n}}),C.values.next({values:{...n}})}w={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!V.mount&&t(),V.mount=!D.isValid||!!s.keepIsValid,V.watch=!!e.shouldUnregister,C.state.next({submitCount:s.keepSubmitCount?o.submitCount:0,isDirty:s.keepDirty?o.isDirty:!(!s.keepDefaultValues||Y(r,b)),isSubmitted:!!s.keepIsSubmitted&&o.isSubmitted,dirtyFields:s.keepDirtyValues?o.dirtyFields:s.keepDefaultValues&&r?ne(b,r):{},touchedFields:s.keepTouched?o.touchedFields:{},errors:s.keepErrors?o.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},De=(e,t)=>ke(N(e)?e(_):e,t);return{control:{register:Se,unregister:we,getFieldState:Ve,handleSubmit:xe,setError:Ae,_executeSchema:Z,_getWatch:ae,_getDirty:se,_updateValid:I,_removeUnmounted:()=>{for(const e of w.unMount){const t=v(f,e);t&&(t._f.refs?t._f.refs.every((e=>!re(e))):!re(t._f.ref))&&we(e)}w.unMount=new Set},_updateFieldArray:(e,t=[],r,s,a=!0,i=!0)=>{if(s&&r){if(V.action=!0,i&&Array.isArray(v(f,e))){const t=r(v(f,e),s.argA,s.argB);a&&O(f,e,t)}if(i&&Array.isArray(v(o.errors,e))){const t=r(v(o.errors,e),s.argA,s.argB);a&&O(o.errors,e,t),me(o.errors,e)}if(D.touchedFields&&i&&Array.isArray(v(o.touchedFields,e))){const t=r(v(o.touchedFields,e),s.argA,s.argB);a&&O(o.touchedFields,e,t)}D.dirtyFields&&(o.dirtyFields=ne(b,_)),C.state.next({name:e,isDirty:se(e,t),dirtyFields:o.dirtyFields,errors:o.errors,isValid:o.isValid})}else O(_,e,t)},_getFieldArray:t=>m(v(V.mount?_:b,t,e.shouldUnregister?v(b,t,[]):[])),_reset:ke,_resetDefaultValues:()=>N(s.defaultValues)&&s.defaultValues().then((e=>{De(e,s.resetOptions),C.state.next({isLoading:!1})})),_updateFormState:e=>{o={...o,...e}},_subjects:C,_proxyFormState:D,get _fields(){return f},get _formValues(){return _},get _state(){return V},set _state(e){V=e},get _defaultValues(){return b},get _names(){return w},set _names(e){w=e},get _formState(){return o},set _formState(e){o=e},get _options(){return s},set _options(e){s={...s,...e}}},trigger:be,register:Se,handleSubmit:xe,watch:(e,t)=>N(e)?C.values.subscribe({next:r=>e(ae(void 0,t),r)}):ae(e,t,!0),setValue:ge,getValues:_e,reset:De,resetField:(e,t={})=>{v(f,e)&&(h(t.defaultValue)?ge(e,v(b,e)):(ge(e,t.defaultValue),O(b,e,t.defaultValue)),t.keepTouched||K(o.touchedFields,e),t.keepDirty||(K(o.dirtyFields,e),o.isDirty=t.defaultValue?se(e,v(b,e)):se()),t.keepError||(K(o.errors,e),D.isValid&&I()),C.state.next({...o}))},clearErrors:e=>{e&&S(e).forEach((e=>K(o.errors,e))),C.state.next({errors:e?o.errors:{}})},unregister:we,setError:Ae,setFocus:(e,t={})=>{const r=v(f,e),s=r&&r._f;if(s){const e=s.refs?s.refs[0]:s.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState:Ve}}function ge(e={}){const t=s.useRef(),r=s.useRef(),[a,i]=s.useState({isDirty:!1,isValidating:!1,isLoading:N(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:N(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...ve(e,(()=>i((e=>({...e}))))),formState:a});const n=t.current.control;return n._options=e,function(e){const t=s.useRef(e);t.current=e,s.useEffect((()=>{const r=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}}),[e.disabled])}({subject:n._subjects.state,next:e=>{w(e,n._proxyFormState,n._updateFormState,!0)&&i({...n._formState})}}),s.useEffect((()=>{e.values&&!Y(e.values,r.current)?(n._reset(e.values,n._options.resetOptions),r.current=e.values):n._resetDefaultValues()}),[e.values,n]),s.useEffect((()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()})),t.current.formState=V(a,n),t.current}}}]);