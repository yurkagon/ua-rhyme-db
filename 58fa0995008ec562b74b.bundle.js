(self.webpackChunkua_rhyme_db=self.webpackChunkua_rhyme_db||[]).push([[126],{308:(n,t,e)=>{var r={"./всі":63,"./ножиці":238,"./прототип":322,"./процент":394};function a(n){var t=o(n);return e(t)}function o(n){if(!e.o(r,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return r[n]}a.keys=function(){return Object.keys(r)},a.resolve=o,n.exports=a,a.id=308},762:(n,t,e)=>{var r={"./glava941_glava94_Глава 94_Твоя черга":921,"./glava942_glava94_Глава 94_Дякую":733};function a(n){var t=o(n);return e(t)}function o(n){if(!e.o(r,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return r[n]}a.keys=function(){return Object.keys(r)},a.resolve=o,n.exports=a,a.id=762},647:(n,t,e)=>{"use strict";e.d(t,{Z:()=>s});var r=e(81),a=e.n(r),o=e(645),i=e.n(o)()(a());i.push([n.id,".search-form{outline:none !important}",""]);const s=i},547:(n,t,e)=>{"use strict";e.d(t,{Z:()=>w});var r=e(893),a=e(536),o=e(250),i=e(512),s=e(379),u=e.n(s),c=e(795),l=e.n(c),f=e(569),h=e.n(f),p=e(565),d=e.n(p),m=e(216),v=e.n(m),y=e(589),b=e.n(y),g=e(647),x={};x.styleTagTransform=b(),x.setAttributes=d(),x.insert=h().bind(null,"head"),x.domAPI=l(),x.insertStyleElement=v(),u()(g.Z,x),g.Z&&g.Z.locals&&g.Z.locals;var _=function(){return _=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var a in t=arguments[e])Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a]);return n},_.apply(this,arguments)};const w=function(n){var t=n.className,e=(0,o.UO)().phrase,s=(0,a.cI)(),u=s.register,c=s.handleSubmit,l=(0,o.s0)();return(0,r.jsx)("form",{onSubmit:c((function(n){var t=n.search.trim().toLowerCase();l("/search/".concat(encodeURIComponent(t)))})),className:(0,i.Z)(t,"search-form form text-center"),children:(0,r.jsxs)("div",{className:"input-group",children:[(0,r.jsx)("input",_({},u("search",{required:!0,value:e,minLength:2}),{className:"form-control",placeholder:"Ножиці"})),(0,r.jsx)("button",{type:"submit",className:"search-button btn btn-outline-warning",children:"Знайти"})]})})}},126:(n,t,e)=>{"use strict";e.r(t),e.d(t,{Component:()=>v});var r=e(893),a=e(294),o=e(250),i=e(547),s=e(486),u=e.n(s),c=function(n){return n.trim().toLowerCase().replace("'","").replace("’","").replace('"',"").replace("`","").replace("'","").replace("-"," ")},l=function(){return l=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var a in t=arguments[e])Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a]);return n},l.apply(this,arguments)};const f=function(){function n(){}return n.formatFolderData=function(n){var t=n.keys(),e=t.map(n);return t.reduce((function(n,t,r){var a;return l(((a={})[t.replace("./","")]=e[r],a),n)}),{})},n.loadRhymeFolder=function(){var n=e(308);return this.formatFolderData(n)},n.loadSongList=function(){return e(127).split("\n")},n}();var h=function(){function n(){}return n.load=function(){this.loadRhymeData(),this.loadSongList()},n.loadSongList=function(){var n=this;this.songList=f.loadSongList().map((function(n){var t=n.split("_");return{id:t[0],authorId:t[1],author:t[2],name:t[3],data_file_name:n}})),console.log(this.songList.map((function(t){var r,a,o,i,s=t.data_file_name;return r=n,a=void 0,i=function(){var n,t,r,a;return function(n,t){var e,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(u){return function(s){if(e)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(i=0)),i;)try{if(e=1,r&&(a=2&s[0]?r.return:s[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,s[1])).done)return a;switch(r=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){i.label=s[1];break}if(6===s[0]&&i.label<a[1]){i.label=a[1],a=s;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(s);break}a[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(n,i)}catch(n){s=[6,n],r=0}finally{e=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}}(this,(function(o){switch(o.label){case 0:return n=e(762)("./".concat(s)),[4,fetch(n)];case 1:return t=o.sent(),a=(r=console).log,[4,t.text()];case 2:return a.apply(r,[o.sent()]),[2,n]}}))},new((o=void 0)||(o=Promise))((function(n,t){function e(n){try{u(i.next(n))}catch(n){t(n)}}function s(n){try{u(i.throw(n))}catch(n){t(n)}}function u(t){var r;t.done?n(t.value):(r=t.value,r instanceof o?r:new o((function(n){n(r)}))).then(e,s)}u((i=i.apply(r,a||[])).next())}))})))},n.loadRhymeData=function(){var n=this,t=f.loadRhymeFolder();this.rhymeData=u().chain(t).map((function(t,e){return{key:e,rhymes:t.split("\n").filter(Boolean).map((function(t){return n.formatRawRhyme(t)}))}})).value()},n.formatRawRhyme=function(n){var t=n.split("/"),e=t[0],r=t.slice(1);return{label:e.trim(),value:c(e),alternatives:r.map((function(n){return c(n)}))}},n.getRhymeData=function(){return this.rhymeData},n}();h.load();const p=h;var d=function(n,t,e){if(e||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return n.concat(r||Array.prototype.slice.call(t))};const m=function(){function n(){}return n.findRhymes=function(n){var t=c(n),e=this.find(t),r=u().groupBy(e,(function(n){return n.value===t?"target":"rhymes"}));return r.rhymes=u().uniqBy(r.rhymes,"value"),r},n.find=function(n,t){var e=this;void 0===t&&(t=[]);var r=p.getRhymeData(),a=u().chain(r).filter((function(t){return t.rhymes.some((function(t){return e.compareRhymes(t,n)}))})).map("rhymes").flatten().value(),o=d(d([],t,!0),a,!0);if(n.includes(" ")){var i=this.removeFirstWord(n);return this.find(i,o)}return o},n.compareRhymes=function(n,t){return n.value===t||!!n.alternatives.includes(t)},n.removeFirstWord=function(n){var t=n.split(" ");return t.shift(),t.join(" ")},n}();function v(){var n=(0,o.UO)().phrase,t=(0,a.useMemo)((function(){return m.findRhymes(n)}),[n]),e=(t.target,t.rhymes);return(0,r.jsxs)("main",{className:"p-3",children:[(0,r.jsx)(i.Z,{}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"Можна римувати з:"}),(0,r.jsx)("ul",{children:e.map((function(n){return(0,r.jsx)("li",{children:n.label},n.value)}))})]})]})}},921:(n,t,e)=>{"use strict";n.exports=e.p+"237dce550d44cd789665"},733:(n,t,e)=>{"use strict";n.exports=e.p+"6d6363bc1287ff9d1a06"},63:n=>{"use strict";n.exports="всі/всім/всіх\nсвій\nпсих\n"},238:n=>{"use strict";n.exports="ножиці\nкажуть всі/кажуть всім\n"},322:n=>{"use strict";n.exports="протупив\nпросто ти\nпотний тіп\n"},394:n=>{"use strict";n.exports="процент\nпро це/про цей\nяйце/яйцем\n"},127:n=>{"use strict";n.exports="glava941_glava94_Глава 94_Твоя черга\nglava942_glava94_Глава 94_Дякую"}}]);