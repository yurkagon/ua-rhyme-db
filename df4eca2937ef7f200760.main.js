(self.webpackChunkua_rhyme_db=self.webpackChunkua_rhyme_db||[]).push([[126],{679:(n,r,e)=>{var t={"./ножиці":73,"./прототип":546,"./процент":776,"./яйце":35};function a(n){var r=u(n);return e(r)}function u(n){if(!e.o(t,n)){var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}return t[n]}a.keys=function(){return Object.keys(t)},a.resolve=u,n.exports=a,a.id=679},126:(n,r,e)=>{"use strict";e.r(r),e.d(r,{Component:()=>v});var t=e(893),a=e(294),u=e(250),o=e(385),i=e(486),c=e.n(i),l=function(n){return n.trim().toLowerCase().replace("'","").replace("’","").replace('"',"").replace("`","").replace("'","").replace("-"," ")},s=function(){return s=Object.assign||function(n){for(var r,e=1,t=arguments.length;e<t;e++)for(var a in r=arguments[e])Object.prototype.hasOwnProperty.call(r,a)&&(n[a]=r[a]);return n},s.apply(this,arguments)};const f=function(){function n(){}return n.formatFolderData=function(n){var r=n.keys(),e=r.map(n);return r.reduce((function(n,r,t){var a;return s(((a={})[r.replace("./","")]=e[t],a),n)}),{})},n.loadRhymeFolder=function(){var n=e(679);return this.formatFolderData(n)},n}();var h=function(){function n(){}return n.loadRhymeData=function(){var n=f.loadRhymeFolder();this.rhymeData=c().chain(n).map((function(n,r){return{key:r,rhymes:n.split("\n").filter(Boolean).map((function(n){return{label:n.trim(),value:l(n)}}))}})).value()},n.getRhymeData=function(){return this.rhymeData},n}();h.loadRhymeData();const p=h;var m=function(n,r,e){if(e||2===arguments.length)for(var t,a=0,u=r.length;a<u;a++)!t&&a in r||(t||(t=Array.prototype.slice.call(r,0,a)),t[a]=r[a]);return n.concat(t||Array.prototype.slice.call(r))};const d=function(){function n(){}return n.findRhymes=function(n){var r=l(n),e=this.find(r);return c().chain(e).filter((function(n){return n.value!==r})).uniqBy("value").value()},n.find=function(n,r){void 0===r&&(r=[]);var e=p.getRhymeData(),t=c().chain(e).filter((function(r){return r.rhymes.some((function(r){return r.value===n}))})).map("rhymes").flatten().value(),a=m(m([],r,!0),t,!0);return n.includes(" "),a},n.removeFirstWord=function(n){var r=n.split(" ");return r.shift(),r.join(" ")},n}();function v(){var n=(0,u.UO)().phrase,r=(0,a.useMemo)((function(){return d.findRhymes(n)}),[n]);return(0,t.jsxs)("main",{className:"p-3",children:[(0,t.jsx)(o.Z,{}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{children:"Можна римувати з:"}),(0,t.jsx)("ul",{children:r.map((function(n){return(0,t.jsx)("li",{children:n.label},n.value)}))})]})]})}},73:n=>{"use strict";n.exports="ножиці\nкажуть всі\n"},546:n=>{"use strict";n.exports="протупив\nпросто ти\nпотний тіп"},776:n=>{"use strict";n.exports="процент\nпро це\nяйце\n"},35:n=>{"use strict";n.exports="про це\nвсе\n"}}]);