"use strict";(self.webpackChunkua_rhyme_db=self.webpackChunkua_rhyme_db||[]).push([[360],{647:(r,e,n)=>{n.d(e,{Z:()=>c});var a=n(8081),t=n.n(a),o=n(3645),s=n.n(o)()(t());s.push([r.id,".search-form{outline:none !important}.search-form *:focus{box-shadow:none}",""]);const c=s},8602:(r,e,n)=>{n.d(e,{Z:()=>c});var a=n(8081),t=n.n(a),o=n(3645),s=n.n(o)()(t());s.push([r.id,".search-page{display:flex;justify-content:space-between;padding-top:30px;padding:2rem}.search-page .left{flex:6}.search-page .right{flex:4}.search-page .form-wrapper{max-width:50%;margin-bottom:40px}.search-page .form-wrapper .search-page-form{width:300px}.search-page .form-wrapper .search-page-form input{border-color:var(--color-primary)}.search-page .form-wrapper .search-page-form input:focus{outline:none}.search-page .form-wrapper .search-page-form .search-button{color:var(--color-primary);border-color:var(--color-primary)}.search-page .form-wrapper .search-page-form .search-button:hover{color:#fff;background-color:rgba(7,123,173,.8)}.search-page .mention-card{color:var(--color-primary);border-color:var(--color-primary);cursor:pointer;transition:transform .2s,box-shadow .2s}.search-page .mention-card .card-text{font-size:14px}.search-page .mention-card:hover{transform:translateY(-5px);box-shadow:0 4px 8px rgba(0,0,0,.1)}.search-page .rhymes{display:flex;flex-wrap:wrap}.search-page .rhymes .rhyme-element{margin-right:10px;margin-bottom:10px;align-self:flex-end;color:var(--color-primary);border-color:var(--color-primary)}.search-page .rhymes .rhyme-element:focus{box-shadow:none}.search-page .rhymes .rhyme-element:hover{color:#fff;background-color:rgba(7,123,173,.8)}",""]);const c=s},7547:(r,e,n)=>{n.d(e,{Z:()=>w});var a=n(5893),t=n(7536),o=n(9250),s=n(512),c=n(3379),i=n.n(c),l=n(7795),m=n.n(l),u=n(569),h=n.n(u),p=n(3565),d=n.n(p),f=n(9216),g=n.n(f),v=n(4589),y=n.n(v),x=n(647),b={};b.styleTagTransform=y(),b.setAttributes=d(),b.insert=h().bind(null,"head"),b.domAPI=m(),b.insertStyleElement=g(),i()(x.Z,b),x.Z&&x.Z.locals&&x.Z.locals;var j=function(){return j=Object.assign||function(r){for(var e,n=1,a=arguments.length;n<a;n++)for(var t in e=arguments[n])Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r},j.apply(this,arguments)};const w=function(r){var e=r.className,n=(0,o.UO)().phrase,c=(0,t.cI)(),i=c.register,l=c.handleSubmit,m=(0,o.s0)();return(0,a.jsx)("form",{onSubmit:l((function(r){var e=r.search.trim().toLowerCase();m("/search/".concat(encodeURIComponent(e)))})),className:(0,s.Z)("search-form form text-center",e),children:(0,a.jsxs)("div",{className:"input-group",children:[(0,a.jsx)("input",j({},i("search",{required:!0,value:n,minLength:2}),{className:"form-control",placeholder:"Ножиці"})),(0,a.jsx)("button",{type:"submit",className:"search-button btn btn-outline-warning",children:"Знайти"})]})})}},4360:(r,e,n)=>{n.r(e),n.d(e,{Component:()=>S});var a=n(5893),t=n(7294),o=n(9250),s=n(7547),c=n(6486),i=n.n(c),l=n(8593),m=n(3089),u=function(r,e,n){if(n||2===arguments.length)for(var a,t=0,o=e.length;t<o;t++)!a&&t in e||(a||(a=Array.prototype.slice.call(e,0,t)),a[t]=e[t]);return r.concat(a||Array.prototype.slice.call(e))};const h=function(){function r(){}return r.findRhymes=function(r){var e=(0,l.Mr)(r),n=this.find(e),a=i().groupBy(n,(function(r){return r.value===e||r.alternatives.includes(e)?"target":"rhymes"}));return{target:a.target,targetMentions:i().chain(a.target).map((function(r){var e;return null===(e=r.extra)||void 0===e?void 0:e.mentions})).compact().flatten().uniqBy((function(r){return"".concat(r.songId,"-").concat(r.range.from,"-").concat(r.range.to)})).value(),rhymes:i().uniqBy(a.rhymes,"value")}},r.find=function(r,e){var n=this;void 0===e&&(e=[]);var a=m.Z.getRhymeData(),t=i().chain(a).filter((function(e){return e.rhymes.some((function(e){return n.compareRhymes(e,r)}))})).map("rhymes").flatten().value(),o=u(u([],e,!0),t,!0);if(r.includes(" ")){var s=this.removeFirstWord(r);return this.find(s,o)}return o},r.compareRhymes=function(r,e){return r.value===e||!!r.alternatives.includes(e)},r.removeFirstWord=function(r){var e=r.split(" ");return e.shift(),e.join(" ")},r}();var p=function(){return p=Object.assign||function(r){for(var e,n=1,a=arguments.length;n<a;n++)for(var t in e=arguments[n])Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r},p.apply(this,arguments)};const d=function(r){var e=r.data,n=r.onClick,o=(0,t.useState)((function(){return m.Z.getSong(e.songId)})),s=o[0],c=o[1];(0,t.useEffect)((function(){m.Z.loadFullSongData(e.songId).then((function(r){c(p({},r))}))}),[e]);var i=Boolean(null==s?void 0:s.data),l=(0,t.useMemo)((function(){return i?s.data.text.split("\n").slice(e.range.from-1,e.range.to):null}),[i,e]);return(0,a.jsxs)("div",{className:"mention-card card mb-3",onClick:n,children:[(0,a.jsxs)("div",{className:"card-header",children:[s.author," - ",s.name]}),(0,a.jsxs)("div",{className:"card-body",children:[i&&l.map((function(r,e){return(0,a.jsx)("p",{className:"card-text",children:r},e)})),!i&&(0,a.jsx)("div",{className:"spinner-grow text-primary",role:"status",children:(0,a.jsx)("span",{className:"sr-only",children:"Loading..."})})]})]})};var f=n(3379),g=n.n(f),v=n(7795),y=n.n(v),x=n(569),b=n.n(x),j=n(3565),w=n.n(j),N=n(9216),Z=n.n(N),k=n(4589),C=n.n(k),I=n(8602),O={};function S(){var r=(0,o.UO)().phrase,e=(0,o.s0)(),n=(0,t.useMemo)((function(){return h.findRhymes(r)}),[r]),c=n.rhymes,i=n.targetMentions;return(0,a.jsxs)("main",{className:"search-page flex-column flex-md-row",children:[(0,a.jsxs)("div",{className:"left",children:[(0,a.jsxs)("div",{className:"form-wrapper",children:[(0,a.jsx)("h5",{className:"",children:"Рифмопошук"}),(0,a.jsx)(s.Z,{className:"search-page-form"},r)]}),(0,a.jsx)("div",{className:"rhymes",children:c.map((function(r,n){return(0,a.jsx)("button",{onClick:function(){return e("/search/".concat(r.value))},className:"rhyme-element btn btn-outline-primary",children:r.label},n)}))})]}),(0,a.jsx)("div",{className:"right",children:i.map((function(r,n){return(0,a.jsx)(d,{onClick:function(){return e("/songs/".concat(r.songId))},data:r},n)}))})]})}O.styleTagTransform=C(),O.setAttributes=w(),O.insert=b().bind(null,"head"),O.domAPI=y(),O.insertStyleElement=Z(),g()(I.Z,O),I.Z&&I.Z.locals&&I.Z.locals}}]);