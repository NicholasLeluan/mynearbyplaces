(this.webpackJsonpmynearbyplaces=this.webpackJsonpmynearbyplaces||[]).push([[0],{21:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(1),r=n.n(a),i=n(22),c=n.n(i),o=(n(29),n(12)),l=n(3),u=n(4),d=n(6),h=n(5),b=n(2),j=n(8),p=[{id:0,name:"Target",visible:!0,address:"4040 N Oracle",type:"Retail",city:"Tucson",state:"AZ",keywords:"retail,clothing,grocery",reviews:["here is a review for target","here is another for target"],rating:5,open:900,close:2200},{id:1,visible:!0,name:"TJ Maxx",address:"6230 N Oracle Rd",type:"Retail",city:"Tucson",state:"AZ",keywords:"clothing,retial,mens,womens,children,test",reviews:["here is a review for TJ Maxx","here is another for TJ Maxx"],rating:5,open:800,close:2e3},{id:2,visible:!0,name:"Nico's Taco Shop",address:"2965 N Campbell Ave",type:"Restaurant",city:"Tucson",state:"AZ",keywords:"food,restaurant,mexican,burrito,test",reviews:["here is a review for Nicos","here is another for Nicos"],rating:5,open:2400,close:2400},{id:3,visible:!0,name:"Green Things",address:"3384 E River Rd",type:"Retail",city:"Tucson",state:"AZ",keywords:"garden,plants,nursery,pots",reviews:["here is a review for Green Things","here is another for Green Things"],rating:5,open:900,close:1700},{id:4,visible:!0,name:"Plumb Happy Plumbing",address:"123 Happy Lane",type:"Services",city:"Tucson",state:"AZ",keywords:"plumbing,pottery,test",reviews:["here is a review for PHP","here is another for PHP"],rating:5,open:900,close:1700}],v={fetchRestaurant:function(){return function(e){var t=p.filter((function(t){return t.type===e}));return t.length>0?t.locations:[]}("Restaurant")},fetchAll:function(){return p},getResults:function(e,t,n){return e.length>0&&t.length>0&&n.length>0?function(e,t,n){return p.filter((function(s){return s.type.toUpperCase()===e.toUpperCase()&&s.city.toUpperCase()===t.toUpperCase()&&s.keywords.includes(n.toLowerCase())&&!0===s.visible}))||[]}(e,t,n):e.length<=0&&t.length>0&&n.length<=0?function(e){return p.filter((function(t){return t.city.toUpperCase()===e.toUpperCase()&&!0===t.visible}))||[]}(t):e.length>0&&t.length<=0&&n.length<=0?function(e){return p.filter((function(t){return t.type.toUpperCase()===e.toUpperCase()&&!0===t.visible}))||[]}(e):e.length<=0&&t.length<=0&&n.length>0?function(e){return p.filter((function(t){return t.keywords.includes(e.toLowerCase())&&!0===t.visible}))||[]}(n):[]},updateBusiness:function(e){p[e.id]=e},addAReview:function(e,t){p[e].reviews.push(t)},addBusiness:function(e){var t=p.length;e.reviews=[],e.rating=0,e.id=t,p.push(e),console.log(p)},deleteBusiness:function(e){p[e].visible=!1,console.log(p)}},O="https://nicholasleluan-nearbyplaces.herokuapp.com",y={getAllLocations:function(){return fetch(O+"/places").then((function(e){return e.json()}))},searchTermLoc:function(e,t,n){return 0==e.length&&(e="void_type"),0==t.length&&(t="void_loc"),0==n.length&&(n="void_term"),fetch(O+"/search/".concat(n,"/").concat(t,"/").concat(e)).then((function(e){return e.json()}))},addReview:function(e,t){return fetch(O+"/review/".concat(e.toString()),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,review:t})})},getDetails:function(e){return fetch(O+"/detail/".concat(e)).then((function(e){return e.json()}))},addBusiness:function(e,t,n,s,a,r,i,c,o){return fetch(O+"/place",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,type:t,address:n,city:s,state:a,rating:r,open:i,close:c,keywords:o})})}},f=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).onSubmit=function(e){s.setState({searched:!0}),console.log(s.state.searchKeyword,s.state.searchType,s.state.searchKeyword),y.searchTermLoc(s.state.searchType,s.state.searchCity,s.state.searchKeyword).then((function(e){return s.setState({results:e})})).catch((function(e){return console.log(e)})),e.preventDefault()},s.setType=function(e){var t=e.target.value;s.setState({searchType:t})},s.setCity=function(e){var t=e.target.value;s.setState({searchCity:t})},s.setKeyword=function(e){var t=e.target.value;s.setState({searchKeyword:t})},s.goBack=function(e){s.setState({searched:!1})},s.state={searchType:"",searchCity:"",searchKeyword:"",searched:!1,results:[]},s}return Object(u.a)(n,[{key:"render",value:function(){return this.state.searched?this.state.results.length>0?(console.log(this.state.results),Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{children:["Your Search found ",Object(s.jsx)("b",{children:this.state.results.length})," Result(s):"]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{onClick:this.goBack,children:"Edit Search"})}),this.state.results.map((function(e){return Object(s.jsxs)("div",{class:"displaySearch",children:[Object(s.jsx)("b",{children:e.name}),Object(s.jsx)("br",{}),e.city,", ",e.state,": ",e.address,Object(s.jsx)("br",{}),"Opens: ",e.open,Object(s.jsx)("br",{}),"Close: ",e.close,Object(s.jsx)("br",{}),Object(s.jsxs)(j.b,{to:{pathname:"/placeDetails",state:{id:e.id,name:e.name}},children:["Read what people have to say about ",e.name,"!"]}),Object(s.jsx)("br",{}),Object(s.jsx)(j.b,{to:{pathname:"/addreview",state:{id:e.id}},children:"Add A Review"}),Object(s.jsx)("hr",{})]})}))]})):Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:Object(s.jsx)("button",{onClick:this.goBack,children:"Edit Search"})}),Object(s.jsx)("h1",{children:"No results"})]}):Object(s.jsx)("div",{children:Object(s.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(s.jsxs)("select",{id:"dropdown",name:"type",value:this.state.searchType,onChange:this.setType,children:[Object(s.jsx)("option",{value:"",disabled:!0,selected:!0,hidden:!0,children:"Choose a Type"}),Object(s.jsx)("option",{value:"Restaurant",children:"Restaurant"}),Object(s.jsx)("option",{value:"Retail",children:"Retail"}),Object(s.jsx)("option",{value:"Services",children:"Services"})]}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",value:this.state.searchCity,placeholder:"Search City",onChange:this.setCity}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",value:this.state.searchKeyword,placeholder:"Search by Keyword",onChange:this.setKeyword}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{type:"submit",children:"Search"})]})})}}]),n}(r.a.Component),m=(n(21),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).onSubmit=function(e){s.setState({submitted:!0}),e.preventDefault()},s.searchByCity=function(e){var t=e.target.value;s.setState({queryCity:t})},s.searchByState=function(e){var t=e.target.value;s.setState({queryState:t})},s.searchByKeyword=function(e){var t=e.target.value;s.setState({queryKeyword:t})},s.state={queryCity:"",queryState:"",queryKeyword:"",submitted:!1,loggedIn:!1,visible:[]},s}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;y.getAllLocations().then((function(t){return e.setState({visible:t})})).catch((function(e){return console.log(e)})),console.log("in home, visible:"+this.state.visible)}},{key:"render",value:function(){var e="",t=this.props.location;if(t&&t.state&&t.state.user&&(e=t.state.user),this.state.submitted){var n={pathname:"/results",state:{result:[this.state.queryCity,this.state.queryState,this.state.queryKeyword]}};return Object(s.jsx)(b.a,{to:n})}return 0==this.state.visible.length?Object(s.jsx)("div",{children:"data is loading..."}):(console.log(this.state.visible),Object(s.jsxs)("div",{class:"home",children:[e.length>0?Object(s.jsxs)("div",{className:"userHeader",children:["Hello, ",Object(s.jsxs)("b",{children:[e,"!"]}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{class:"loggedButtons",children:[Object(s.jsx)(j.b,{to:"/addbusiness",class:"loggedLink",children:"Add A Business"}),Object(s.jsx)("br",{})]})]}):Object(s.jsxs)("div",{class:"userHeader",children:["To add a business, login! ",Object(s.jsx)("br",{}),Object(s.jsx)(j.b,{to:"/login",children:"Login"})]}),Object(s.jsx)("div",{class:"searchDiv",children:Object(s.jsx)(f,{})}),Object(s.jsxs)("div",{class:"visibleLocationsFooter",children:["All Nerby Locations!",this.state.visible.map((function(e){return Object(s.jsx)("div",{children:Object(s.jsxs)("b",{children:[e.name," : ",e.type]})})}))]})]}))}}]),n}(r.a.Component)),x=n(13),g=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).login=function(){s.setState({showLoginForm:!0})},s.onSubmit=function(e){s.state.username.trim().length>0&&s.setState({signedIn:!0}),e.preventDefault()},s.handleChangeName=function(e){var t=e.target.value,n=e.target.name;s.setState(Object(x.a)({},n,t))},s.handleChangePassword=function(e){var t=e.target.value,n=e.target.name;s.setState(Object(x.a)({},n,t))},s.state={username:"",password:"",signedIn:!1},s}return Object(u.a)(n,[{key:"render",value:function(){var e={pathname:"/mynearbyplaces/",state:{user:this.state.username}};return this.state.signedIn?Object(s.jsx)(b.a,{to:e}):Object(s.jsx)("div",{className:"updateContainer",children:Object(s.jsxs)("div",{className:"loginText",children:["Enter Username and Password",Object(s.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(s.jsx)("input",{type:"text",value:this.state.username,name:"username",placeholder:"Username",onChange:this.handleChangeName}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",name:"password",placeholder:"Password",value:this.state.password,onChange:this.handleChangePassword}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{className:"submitButton",type:"submit",children:"Login"})]})]})})}}]),n}(r.a.Component),w=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).getByKeyword=function(){for(var e=a.state.keyword.toUpperCase().trim(),t=[],n=0;n<p.length;n++)p[n].keyword.toUpperCase().trim()===e&&t.push(p[n]);return t},a.getAllNoLocation=function(){},a.body=function(){var e=a.state.filtered;return Object(s.jsx)("div",{children:e.map((function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:e.name}),Object(s.jsx)("br",{}),e.city,Object(s.jsx)("br",{}),"Rating: ",e.rating,Object(s.jsx)("br",{}),"Reviews: ",e.reviews.map((function(t){return Object(s.jsx)("li",{children:t},e.reviews)})),e.address,Object(s.jsx)("br",{}),"Opens: ",e.open,Object(s.jsx)("br",{}),"Close: ",e.close]})}))})},console.log(e),a.state={city:e.location.state.result[0],state:e.location.state.result[1],keyword:e.location.state.result[2],filtered:[]},a}return Object(u.a)(n,[{key:"getAll",value:function(){var e=this.state.city.toUpperCase().trim(),t=this.state.state.toUpperCase().trim(),n=this.state.keyword.toUpperCase().trim();console.log(e,t,n);for(var s=[],a=0;a<p.length;a++)if(p[a].city.toUpperCase().trim()===e&&p[a].state.toUpperCase().trim()===t){var r=p[a].keywords.split(",");console.log(r);for(var i=0;i<r.length;i++)r[i].toUpperCase().trim()===n&&s.push(p[a])}return s}},{key:"getResults",value:function(){var e=this.state.city,t=this.state.state,n=this.state.keyword;if(n.length>0&&e.length>0&&t.length>0)return this.getAll();if(n.length>0&&0==e.length)this.getByKeyword();if(0==n.length&&0==e.length&&0==t.length)this.getAllNoLocation()}},{key:"componentDidMount",value:function(){console.log("In mount");var e=this.getResults();this.setState({filtered:e})}},{key:"render",value:function(){return Object(s.jsx)("div",{children:this.body()})}}]),n}(r.a.Component),C=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).onSubmit=function(e){s.setState({updated:!0});var t=s.props.location.state.id,n=s.state,a=p[t],r={id:t,name:n.newName,address:a.address,type:a.type,city:a.city,state:a.state,keywords:a.keywords,reviews:a.reviews,rating:a.rating,open:a.open,close:a.close};v.updateBusiness(r),e.preventDefault()},s.setNewName=function(e){var t=e.target.value;s.setState({newName:t})},s.state={updated:!1,newName:""},s}return Object(u.a)(n,[{key:"render",value:function(){if(this.state.updated){var e=this.props.location.state.id;console.log(p[e]);p[e];return Object(s.jsx)(b.a,{to:"mynearbyplaces"})}return Object(s.jsx)("div",{class:"updateContainer",children:Object(s.jsx)("div",{class:"updateBar",children:Object(s.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(s.jsx)("input",{type:"text",value:this.state.newName,placeholder:"update name of business",onChange:this.setNewName}),Object(s.jsx)("button",{type:"submit",children:"Submit"})]})})})}}]),n}(r.a.Component),S=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).onSubmit=function(e){s.setState({updated:!0});var t=s.props.location.state.id;console.log(t,s.state.newReview),y.addReview(t,s.state.newReview),e.preventDefault()},s.setNewReview=function(e){var t=e.target.value;s.setState({newReview:t})},s.state={updated:!1,newReview:""},s}return Object(u.a)(n,[{key:"render",value:function(){if(this.state.updated){var e=this.props.location.state.id;console.log(p[e]);p[e];return Object(s.jsxs)("div",{class:"thankReview",children:["Thank you for review! ",Object(s.jsx)("br",{}),Object(s.jsx)(j.b,{to:{pathname:"/mynearbyplaces"},children:"Click here to go Home"})]})}return Object(s.jsx)("div",{class:"updateContainer",children:Object(s.jsx)("div",{class:"updateBar",children:Object(s.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(s.jsx)("input",{type:"text",value:this.state.newreview,placeholder:"Add a review!",onChange:this.setNewReview}),Object(s.jsx)("button",{type:"submit",children:"Submit"})]})})})}}]),n}(r.a.Component),T=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).onSubmit=function(e){s.setState({updated:!0}),console.log(s.state.newName);var t=s.state;y.addBusiness(t.newName,t.newType,t.newAddress,t.newCity,t.newState,5,t.newOpen,t.newClose,t.newKeywords),e.preventDefault()},s.setNewEntry=function(e){var t=e.target.value,n=e.target.name;s.setState(Object(x.a)({},n,t))},s.state={updated:!1,newName:"",newAddress:"",newType:"",newCity:"",newState:"",newKeywords:"",newOpen:"",newClose:""},s}return Object(u.a)(n,[{key:"render",value:function(){return this.state.updated?Object(s.jsx)(b.a,{to:"/mynearbyplaces"}):Object(s.jsx)("div",{class:"businessContainer",children:Object(s.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(s.jsx)("input",{type:"text",value:this.state.newName,name:"newName",placeholder:"enter new name of business",onChange:this.setNewEntry}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",value:this.state.newAddress,name:"newAddress",placeholder:"enter new address",onChange:this.setNewEntry}),Object(s.jsx)("input",{type:"text",value:this.state.newType,name:"newType",placeholder:"Type: Restaurant, Services, or Retail",onChange:this.setNewEntry}),Object(s.jsx)("input",{type:"text",value:this.state.newCity,name:"newCity",placeholder:"City",onChange:this.setNewEntry}),Object(s.jsx)("input",{type:"text",value:this.state.newState,name:"newState",placeholder:"State",onChange:this.setNewEntry}),Object(s.jsx)("input",{type:"text",value:this.state.newKeywords,name:"newKeywords",placeholder:"Some keywords, seperated by ',' NO SPACES",onChange:this.setNewEntry}),Object(s.jsx)("input",{type:"text",value:this.state.newOpen,name:"newOpen",placeholder:"Time Open (No ':')",onChange:this.setNewEntry}),Object(s.jsx)("input",{type:"text",value:this.state.newClose,name:"newClose",placeholder:"Time Close (No ':')",onChange:this.setNewEntry}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{type:"submit",children:"Submit"})]})})}}]),n}(r.a.Component),N=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).onSubmit=function(e){s.setState({updated:!0}),v.deleteBusiness(s.state.deleteThis),e.preventDefault()},s.setDeleteThis=function(e){var t=e.target.value;s.setState({deleteThis:t})},s.state={updated:!1,deleteThis:""},s}return Object(u.a)(n,[{key:"render",value:function(){if(this.state.updated)return Object(s.jsx)(b.a,{to:"mynearbyplaces"});var e=p.filter((function(e){return!0===e.visible}));return Object(s.jsxs)("div",{children:[Object(s.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(s.jsx)("input",{type:"text",value:this.state.deleteThis,placeholder:"choose an ID from below",onChange:this.setDeleteThis}),Object(s.jsx)("button",{type:"submit",children:"Delete"})]}),"Select from these ID's to delete an entry.",e.map((function(e){return Object(s.jsx)("div",{children:Object(s.jsxs)("b",{children:[e.name," ID: ",e.id]})})}))]})}}]),n}(r.a.Component),k=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={attempt:!0,id:null,details:[],name:""},s}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.state.id,n=this.props.location.state.name;console.log(t),y.getDetails(t).then((function(t){return e.setState({details:t})})).catch((function(e){return console.log(e)})),this.setState({attempt:!0}),this.setState({name:n}),this.setState({id:t})}},{key:"render",value:function(){if(0!=this.state.details.length||this.state.attempt){if(this.state.details.length>0){var e=this.state.details[0];return Object(s.jsxs)("div",{class:"detailContainer",children:[Object(s.jsx)("h1",{children:e.name}),Object(s.jsx)("br",{}),this.state.details.map((function(e){return Object(s.jsx)("li",{children:e.review})})),Object(s.jsx)("br",{}),Object(s.jsxs)(j.b,{to:{pathname:"/addreview",state:{id:this.state.id}},children:["Add a review for ",this.state.name,"!"]})]})}return Object(s.jsxs)("div",{class:"detailContainer",children:["There are no reviews for ",Object(s.jsx)("b",{children:this.state.name})," be the first to review!",Object(s.jsx)("br",{}),Object(s.jsx)(j.b,{to:{pathname:"/addreview",state:{id:this.state.id}},children:"Add A Review"})]})}return Object(s.jsx)("div",{children:"loading results..."})}}]),n}(r.a.Component),R=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(s.jsx)(j.a,{basename:Object({NODE_ENV:"production",PUBLIC_URL:"/mynearbyplaces",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).Public_URL,children:Object(s.jsxs)(b.d,{children:[Object(s.jsx)(b.b,{exact:!0,path:"/mynearbyplaces",render:function(e){return Object(s.jsx)(m,Object(o.a)({},e))}}),Object(s.jsx)(b.b,{path:"/login",children:Object(s.jsx)(g,{})}),Object(s.jsx)(b.b,{path:"/results",render:function(e){return Object(s.jsx)(w,Object(o.a)({},e))}}),Object(s.jsx)(b.b,{path:"/placeDetails",render:function(e){return Object(s.jsx)(k,Object(o.a)({},e))}}),Object(s.jsx)(b.b,{path:"/update",render:function(e){return Object(s.jsx)(C,Object(o.a)({},e))}}),Object(s.jsx)(b.b,{path:"/addreview",render:function(e){return Object(s.jsx)(S,Object(o.a)({},e))}}),Object(s.jsx)(b.b,{path:"/addbusiness",render:function(e){return Object(s.jsx)(T,Object(o.a)({},e))}}),Object(s.jsx)(b.b,{path:"/delete",render:function(e){return Object(s.jsx)(N,Object(o.a)({},e))}})]})})}}]),n}(r.a.Component),A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),r(e),i(e)}))};c.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(R,{})}),document.getElementById("root")),A()}},[[35,1,2]]]);
//# sourceMappingURL=main.4a1ac7fa.chunk.js.map