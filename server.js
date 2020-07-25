require("source-map-support").install(),module.exports=function(e){var t={},r={1:0};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.e=function(t){if(0!==r[t]){var n=require("./chunks/"+({0:"home"}[t]||t)+".js"),o=n.modules,a=n.ids;for(var i in o)e[i]=o[i];for(var s=0;s<a.length;s++)r[a[s]]=0}return Promise.all([])},n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/assets/",n.oe=function(e){process.nextTick((function(){throw e}))},n(n.s=29)}([function(e,t){e.exports=require("graphql")},function(e,t){e.exports=require("sequelize")},function(e,t,r){e.exports={port:process.env.PORT||3e3,trustProxy:process.env.TRUST_PROXY||"loopback",api:{clientUrl:process.env.API_CLIENT_URL||"",serverUrl:process.env.API_SERVER_URL||`http://localhost:${process.env.PORT||3e3}`},databaseUrl:process.env.DATABASE_URL||"sqlite:database.sqlite",analytics:{googleTrackingId:process.env.GOOGLE_TRACKING_ID},auth:{jwt:{secret:process.env.JWT_SECRET||"React Starter Kit"},facebook:{id:process.env.FACEBOOK_APP_ID||"186244551745631",secret:process.env.FACEBOOK_APP_SECRET||"a970ae3240ab4b9b8aae0f9f0661c6fc"},google:{id:process.env.GOOGLE_CLIENT_ID||"251410730550-ahcg0ou5mgfhl8hlui1urru7jn5s12km.apps.googleusercontent.com",secret:process.env.GOOGLE_CLIENT_SECRET||"Y8yR9yZAhm9jQ8FKAL8QIEcd"},twitter:{key:process.env.TWITTER_CONSUMER_KEY||"Ie20AZvLJI2lQD5Dsgxgjauns",secret:process.env.TWITTER_CONSUMER_SECRET||"KTZ6cxoKnEakQCeSpZlaUCJWGAlTEBJj0y2EMkUBujA7zWSvaQ"}}}},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("node-fetch")},function(e,t,r){var n=r(31),o=r(28),a="string"==typeof n?[[e.i,n,""]]:n;(t=e.exports=n.locals||{})._getContent=function(){return a},t._getCss=function(){return""+n},t._insertCss=function(e){return o(a,e)}},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("express-jwt")},function(e,t){e.exports=require("passport")},function(e,t){e.exports=require("./chunk-manifest.json")},function(e,t){e.exports=require("isomorphic-style-loader/useStyles")},function(e,t){e.exports=require("react-redux")},function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return a}));const n={notes:[]},o={addNotes:"addNotesOfStore",removeNotes:"removeNotesOfStore",editNotes:"editNotesOfStore"};function a(e=n,t){switch(t.type){case o.addNotes:return{notes:[...e.notes,...t.payload]};case o.removeNotes:return{notes:[...e.notes].filter((e,r)=>r!==t.payload)};case o.editNotes:{const r=[...e.notes],n=r.find((e,r)=>r===t.payload.index);return n.description=t.payload.description,n.title=t.payload.title,n.selectedDate=t.payload.selectedDate,{notes:r}}default:return e}}},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("cookie-parser")},function(e,t){e.exports=require("express-graphql")},function(e,t){e.exports=require("jsonwebtoken")},function(e,t){e.exports=require("pretty-error")},function(e,t){e.exports=require("isomorphic-style-loader/StyleContext")},function(e,t){e.exports=require("redux-thunk")},function(e,t){e.exports=require("serialize-javascript")},function(e,t){e.exports=require("passport-facebook")},function(e,t){e.exports=require("universal-router")},function(e,t,r){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var o=(i=n,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),a=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[r].concat(a).concat([o]).join("\n")}var i,s,c;return[r].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);n&&o[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),t.push(c))}},t}},function(e,t,r){"use strict";
/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */var n={};function o(e){e.forEach((function(e){if(--n[e]<=0){var t=document.getElementById(e);t&&t.parentNode.removeChild(t)}}))}e.exports=function(e,t){for(var r,a=void 0===t?{}:t,i=a.replace,s=void 0!==i&&i,c=a.prepend,l=void 0!==c&&c,u=a.prefix,p=void 0===u?"s":u,d=[],f=0;f<e.length;f++){var y=e[f],h=y[0],m=y[1],g=y[2],v=y[3],b=""+p+h+"-"+f;if(d.push(b),!n[b]||s){n[b]=1;var S=document.getElementById(b),x=!1;S||(x=!0,(S=document.createElement("style")).setAttribute("type","text/css"),S.id=b,g&&S.setAttribute("media",g));var k=m;v&&"function"==typeof btoa&&(k+="\n/*# sourceMappingURL=data:application/json;base64,"+(r=JSON.stringify(v),btoa(encodeURIComponent(r).replace(/%([0-9A-F]{2})/g,(function(e,t){return String.fromCharCode("0x"+t)}))))+"*/",k+="\n/*# sourceURL="+v.file+"?"+b+"*/"),"textContent"in S?S.textContent=k:S.styleSheet.cssText=k,x&&(l?document.head.insertBefore(S,document.head.childNodes[0]):document.head.appendChild(S))}else n[b]++}return o.bind(null,d)}},function(e,t,r){r(30),e.exports=r(32)},function(e,t){e.exports=require("@babel/polyfill")},function(e,t,r){(t=r(27)(!1)).push([e.i,"html{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:0 2rem;height:100%;font-family:sans-serif;text-align:center;color:#888}body{margin:0}h1{font-weight:400;color:#555}pre{white-space:pre-wrap;text-align:left}",""]),e.exports=t},function(e,t,r){"use strict";r.r(t);var n=r(17),o=r.n(n),a=r(9),i=r.n(a),s=r(18),c=r.n(s),l=r(10),u=r.n(l),p=r(11),d=r.n(p),f=r(0),y=r(19),h=r.n(y),m=r(20),g=r.n(m),v=r(6),b=r.n(v),S=r(3),x=r.n(S),k=r(5),w=r.n(k),T=r(21),_=r.n(T),q=(r(8),r(22)),N=r.n(q),j=r(15);var I=x.a.createContext({}),R=r(4),O=r(23),E=r.n(O);var U=r(16),C=Object(R.combineReducers)({notesStore:U.b});const L=Object(R.createStore)(C,(()=>{try{const e=localStorage.getItem("notesStore");if(null===e)return;return JSON.parse(e)}catch(e){return}})(),Object(R.applyMiddleware)(E.a));L.subscribe(()=>{(e=>{try{const t=JSON.stringify(e);localStorage.setItem("notesStore",t)}catch(e){}})({notesStore:L.getState().notesStore})});var G,A=L;function P(e,t,r,n){G||(G="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=n;else if(a>1){for(var i=new Array(a),s=0;s<a;s++)i[s]=arguments[s+3];t.children=i}if(t&&o)for(var c in o)void 0===t[c]&&(t[c]=o[c]);else t||(t=o||{});return{$$typeof:G,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function $({context:e,insertCss:t,children:r}){return P(N.a.Provider,{value:{insertCss:t}},void 0,P(I.Provider,{value:{context:e}},void 0,P(j.Provider,{store:A},void 0,x.a.Children.only(r))))}var Q,D=r(24),M=r.n(D),K=r(2),F=r.n(K);function B(e,t,r,n){Q||(Q="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=n;else if(a>1){for(var i=new Array(a),s=0;s<a;s++)i[s]=arguments[s+3];t.children=i}if(t&&o)for(var c in o)void 0===t[c]&&(t[c]=o[c]);else t||(t=o||{});return{$$typeof:Q,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var J=B("meta",{charSet:"utf-8"}),z=B("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),W=B("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),V=B("link",{rel:"manifest",href:"/site.webmanifest"}),H=B("link",{rel:"apple-touch-icon",href:"/icon.png"}),Z=B("script",{src:"https://www.google-analytics.com/analytics.js",async:!0,defer:!0});function Y({title:e,description:t,styles:r,scripts:n,app:o,children:a}){return B("html",{className:"no-js",lang:"en"},void 0,B("head",{},void 0,J,z,B("title",{},void 0,e),B("meta",{name:"description",content:t}),W,n.map(e=>B("link",{rel:"preload",href:e,as:"script"},e)),V,H,r.map(e=>B("style",{id:e.id,dangerouslySetInnerHTML:{__html:e.cssText}},e.id))),B("body",{},void 0,B("div",{id:"app",dangerouslySetInnerHTML:{__html:a}}),B("script",{dangerouslySetInnerHTML:{__html:`window.App=${M()(o)}`}}),n.map(e=>B("script",{src:e},e)),F.a.analytics.googleTrackingId&&B("script",{dangerouslySetInnerHTML:{__html:"window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;"+`ga('create','${F.a.analytics.googleTrackingId}','auto');ga('send','pageview')`}}),F.a.analytics.googleTrackingId&&Z))}Y.defaultProps={styles:[],scripts:[]};r(14);var X,ee=r(7),te=r.n(ee);function re(e,t,r,n){X||(X="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=n;else if(a>1){for(var i=new Array(a),s=0;s<a;s++)i[s]=arguments[s+3];t.children=i}if(t&&o)for(var c in o)void 0===t[c]&&(t[c]=o[c]);else t||(t=o||{});return{$$typeof:X,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var ne=re("h1",{},void 0,"Error"),oe=re("p",{},void 0,"Sorry, a critical error occurred on this page.");function ae({error:e}){return x.a.createElement(x.a.Fragment,null,ne,oe)}ae.defaultProps={error:null};var ie=function(e,{baseUrl:t,cookie:r,schema:n,graphql:o}){const a={method:"POST",mode:t?"cors":"same-origin",credentials:t?"include":"same-origin",headers:{Accept:"application/json","Content-Type":"application/json",...r?{Cookie:r}:null}};return async(r,i)=>{const s=r.startsWith("/graphql");if(n&&o&&s){const e=JSON.parse(i.body),t=await o(n,e.query,{request:{}},null,e.variables);return Promise.resolve({status:t.errors?400:200,json:()=>Promise.resolve(t)})}return s||r.startsWith("/api")?e(`${t}${r}`,{...a,...i,headers:{...a.headers,...i&&i.headers}}):e(r,i)}},se=r(12),ce=r.n(se),le=r(25),ue=r(1),pe=r.n(ue);var de=new pe.a(F.a.databaseUrl,{operatorsAliases:ue.Op,define:{freezeTableName:!0}});var fe=de.define("User",{id:{type:pe.a.UUID,defaultValue:pe.a.UUIDV1,primaryKey:!0},email:{type:pe.a.STRING(255),validate:{isEmail:!0}},emailConfirmed:{type:pe.a.BOOLEAN,defaultValue:!1}},{indexes:[{fields:["email"]}]});var ye=de.define("UserLogin",{name:{type:pe.a.STRING(50),primaryKey:!0},key:{type:pe.a.STRING(100),primaryKey:!0}});var he=de.define("UserClaim",{type:{type:pe.a.STRING},value:{type:pe.a.STRING}});var me=de.define("UserProfile",{userId:{type:pe.a.UUID,primaryKey:!0},displayName:{type:pe.a.STRING(100)},picture:{type:pe.a.STRING(255)},gender:{type:pe.a.STRING(50)},location:{type:pe.a.STRING(100)},website:{type:pe.a.STRING(255)}});fe.hasMany(ye,{foreignKey:"userId",as:"logins",onUpdate:"cascade",onDelete:"cascade"}),fe.hasMany(he,{foreignKey:"userId",as:"claims",onUpdate:"cascade",onDelete:"cascade"}),fe.hasOne(me,{foreignKey:"userId",as:"profile",onUpdate:"cascade",onDelete:"cascade"});var ge={sync:function(...e){return de.sync(...e)}};ce.a.use(new le.Strategy({clientID:F.a.auth.facebook.id,clientSecret:F.a.auth.facebook.secret,callbackURL:"/login/facebook/return",profileFields:["displayName","name","email","link","locale","timezone"],passReqToCallback:!0},(e,t,r,n,o)=>{(async()=>{if(e.user){if(await ye.findOne({attributes:["name","key"],where:{name:"facebook",key:n.id}}))o();else{const t=await fe.create({id:e.user.id,email:n._json.email,logins:[{name:"facebook",key:n.id}],claims:[{type:"urn:facebook:access_token",value:n.id}],profile:{displayName:n.displayName,gender:n._json.gender,picture:`https://graph.facebook.com/${n.id}/picture?type=large`}},{include:[{model:ye,as:"logins"},{model:he,as:"claims"},{model:me,as:"profile"}]});o(null,{id:t.id,email:t.email})}}else{const e=await fe.findAll({attributes:["id","email"],where:{"$logins.name$":"facebook","$logins.key$":n.id},include:[{attributes:["name","key"],model:ye,as:"logins",required:!0}]});if(e.length){const t=e[0].get({plain:!0});o(null,t)}else{let e=await fe.findOne({where:{email:n._json.email}});e?o(null):(e=await fe.create({email:n._json.email,emailConfirmed:!0,logins:[{name:"facebook",key:n.id}],claims:[{type:"urn:facebook:access_token",value:t}],profile:{displayName:n.displayName,gender:n._json.gender,picture:`https://graph.facebook.com/${n.id}/picture?type=large`}},{include:[{model:ye,as:"logins"},{model:he,as:"claims"},{model:me,as:"profile"}]}),o(null,{id:e.id,email:e.email}))}}})().catch(o)}));var ve=ce.a,be=r(26);var Se={path:"",children:[{path:"",load:()=>r.e(0).then(r.bind(null,55))}],async action({next:e}){const t=await e();return t.title=`${t&&t.title||"Untitled Page"} - Notes App`,t.description=t.description||"",t}},xe=new(r.n(be).a)(Se,{resolveRoute:(e,t)=>"function"==typeof e.route.load?e.route.load().then(r=>r.default(e,t)):"function"==typeof e.route.action?e.route.action(e,t):void 0});var ke={type:new f.GraphQLObjectType({name:"User",fields:{id:{type:new f.GraphQLNonNull(f.GraphQLID)},email:{type:f.GraphQLString}}}),resolve:({request:e})=>e.user&&{id:e.user.id,email:e.user.email}};var we=new f.GraphQLObjectType({name:"NewsItem",fields:{title:{type:new f.GraphQLNonNull(f.GraphQLString)},link:{type:new f.GraphQLNonNull(f.GraphQLString)},author:{type:f.GraphQLString},pubDate:{type:new f.GraphQLNonNull(f.GraphQLString)},content:{type:f.GraphQLString}}});let Te,_e=[],qe=new Date(1970,0,1);var Ne={type:new f.GraphQLList(we),resolve:()=>Te||(new Date-qe>6e5?(qe=new Date,Te=b()("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Freactjsnews.com%2Ffeed.xml").then(e=>e.json()).then(e=>("ok"===e.status&&(_e=e.items),Te=null,_e)).catch(e=>{throw Te=null,e}),_e.length?_e:Te):_e)};var je,Ie=new f.GraphQLSchema({query:new f.GraphQLObjectType({name:"Query",fields:{me:ke,news:Ne}})}),Re=r(13),Oe=r.n(Re);function Ee(e,t,r,n){je||(je="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=n;else if(a>1){for(var i=new Array(a),s=0;s<a;s++)i[s]=arguments[s+3];t.children=i}if(t&&o)for(var c in o)void 0===t[c]&&(t[c]=o[c]);else t||(t=o||{});return{$$typeof:je,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}process.on("unhandledRejection",(e,t)=>{console.error("Unhandled Rejection at:",t,"reason:",e),process.exit(1)}),global.navigator=global.navigator||{},global.navigator.userAgent=global.navigator.userAgent||"all";const Ue=i()();Ue.set("trust proxy",F.a.trustProxy),Ue.use(i.a.static(o.a.resolve(__dirname,"public"))),Ue.use(c()()),Ue.use(u.a.urlencoded({extended:!0})),Ue.use(u.a.json()),Ue.use(d()({secret:F.a.auth.jwt.secret,credentialsRequired:!1,getToken:e=>e.cookies.id_token})),Ue.use((e,t,r,n)=>{e instanceof p.UnauthorizedError&&(console.error("[express-jwt-error]",t.cookies.id_token),r.clearCookie("id_token")),n(e)}),Ue.use(ve.initialize()),Ue.get("/login/facebook",ve.authenticate("facebook",{scope:["email","user_location"],session:!1})),Ue.get("/login/facebook/return",ve.authenticate("facebook",{failureRedirect:"/login",session:!1}),(e,t)=>{const r=g.a.sign(e.user,F.a.auth.jwt.secret,{expiresIn:15552e3});t.cookie("id_token",r,{maxAge:15552e6,httpOnly:!0}),t.redirect("/")}),Ue.use("/graphql",h()(e=>({schema:Ie,graphiql:!1,rootValue:{request:e},pretty:!1}))),Ue.get("*",async(e,t,r)=>{try{const r=new Set,n=(...e)=>{e.forEach(e=>r.add(e._getCss()))},o={fetch:ie(b.a,{baseUrl:F.a.api.serverUrl,cookie:e.headers.cookie,schema:Ie,graphql:f.graphql}),pathname:e.path,query:e.query},a=await xe.resolve(o);if(a.redirect)return void t.redirect(a.status||302,a.redirect);const i={...a};i.children=w.a.renderToString(Ee($,{context:o,insertCss:n},void 0,a.component)),i.styles=[{id:"css",cssText:[...r].join("")}];const s=new Set,c=e=>{Oe.a[e]&&Oe.a[e].forEach(e=>s.add(e))};c("client"),a.chunk&&c(a.chunk),a.chunks&&a.chunks.forEach(c),i.scripts=Array.from(s),i.app={apiUrl:F.a.api.clientUrl};const l=w.a.renderToStaticMarkup(x.a.createElement(Y,i));t.status(a.status||200),t.send(`<!doctype html>${l}`)}catch(e){r(e)}});const Ce=new _.a;Ce.skipNodeFiles(),Ce.skipPackage("express"),Ue.use((e,t,r,n)=>{console.error(Ce.render(e));const o=w.a.renderToStaticMarkup(Ee(Y,{title:"Internal Server Error",description:e.message,styles:[{id:"css",cssText:te.a._getCss()}]},void 0,w.a.renderToString(Ee(ae,{error:e}))));r.status(e.status||500),r.send(`<!doctype html>${o}`)}),ge.sync().catch(e=>console.error(e.stack)).then(()=>{Ue.listen(F.a.port,()=>{console.info(`The server is running at http://localhost:${F.a.port}/`)})});t.default=Ue},function(e,t){e.exports=require("isomorphic-style-loader/withStyles")},function(e,t){e.exports=require("react-calendar")}]);
//# sourceMappingURL=server.js.map