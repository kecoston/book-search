(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{31:function(e,t,a){e.exports=a(64)},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(27),c=a.n(r),l=(a(36),a(6)),s=a(7),i=a(9),u=a(8),m=a(29),h=a(1),d=a(28);a(37);var p=function(){return o.a.createElement("div",{className:"container-fluid"},o.a.createElement("h1",null,"React Google Book Search"),o.a.createElement("h3",null,"Search for and Save Books of Interest"))};var v=function(e){return o.a.createElement("div",{className:"input-group input-group-lg"},o.a.createElement("input",Object.assign({className:"form-control",type:"text"},e)))};var f=function(e){e.type,e.className;var t=e.children,a=e.onClick;return o.a.createElement("button",{onClick:a,className:"btn btn-secondary"},t)};a(38);var g=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},o.a.createElement("a",{className:"navbar-brand",href:"/saved"},"SAVED BOOKS"),o.a.createElement("a",{className:"navbar-brand",href:"/"},"SEARCH FOR NEW",o.a.createElement("span",{className:"sr-only"},"(current)")))},b=a(12),k=a.n(b),E=function(e){return k.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(e))},y=function(){return k.a.get("/api/books")},N=function(e){return k.a.post("/api/books",e)},j=(a(56),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={saved:!1,text:"Save"},e.componentDidMount=function(){e.setState({saved:!0})},e.getStyle=function(){"Save"===e.state.text?e.setState({text:"Saved"}):e.setState({text:"Save"})},e.saveFunction=function(){e.props.saveGoogleBook(e.props),e.getStyle()},e}return Object(s.a)(a,[{key:"render",value:function(){this.props.book;return o.a.createElement("div",{className:"card mb-3"},o.a.createElement("div",{className:"row g-0"},o.a.createElement("div",{className:"col-md-4"},o.a.createElement("img",{src:this.props.image,className:"img-thumbnail",alt:this.props.title})),o.a.createElement("div",{className:"col-md-8"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},this.props.title),o.a.createElement("p",{className:"card-text"},this.props.description),o.a.createElement("p",{className:"card-text"},"Author: ",this.props.author),o.a.createElement("a",{href:this.props.link,target:"_black",type:"button",className:"btn btn-secondary"},"Learn More"),o.a.createElement("button",{onClick:this.saveFunction,className:"btn btn-secondary"},this.state.text)))))}}]),a}(n.Component)),S=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return console.log("Props",this.props.bookState),this.props.bookState.map((function(t){return o.a.createElement(j,{key:t.id,id:t.id,title:t.volumeInfo.title,link:t.volumeInfo.previewLink,authors:t.volumeInfo.authors&&t.volumeInfo.authors.length>1?t.volumeInfo.authors.join(", "):t.volumeInfo.authors,image:t.volumeInfo.imageLinks?t.volumeInfo.imageLinks.thumbnail:"https://secocms.cpa.texas.gov/sca-dev-kilimanjaro/img/no_image_available.jpeg",description:t.volumeInfo.description,saveBook:e.props.saveGoogleBook})}))}}]),a}(n.Component),O=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={books:[],search:""},e.searchBooks=function(){console.log(e.state.search),E(e.state.search).then((function(t){e.setState({books:t.data.items,search:""})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var a=t.target,n=a.name,o=a.value;e.setState(Object(d.a)({},n,o))},e.handleFormSubmit=function(t){t.preventDefault(),e.searchBooks()},e.saveGoogleBook=function(e){console.log(e),N({id:e.id,title:e.title,authors:e.authors,description:e.description,image:e.image,link:e.link}).then((function(e){return console.log("Success")})).catch((function(e){return console.log("Error")}))},e}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(p,null),o.a.createElement(g,null),o.a.createElement("div",null,o.a.createElement(v,{name:"search",value:this.state.search,onChange:this.handleInputChange,placeholder:"Search For a Books"}),o.a.createElement(f,{onClick:this.handleFormSubmit,type:"success",className:"input-lg"},"Search"),o.a.createElement("div",null),this.state.books.length?o.a.createElement(S,{bookState:this.state.books,saveBook:this.saveGoogleBook}):o.a.createElement("div",null,o.a.createElement("hr",null),o.a.createElement("p",{style:{fontStyle:"italic"}},"Search for Books..."))))}}]),a}(n.Component);var w=function(e){var t=e.title,a=e.authors,n=e.image,r=e.link,c=e.description,l=e.deleteGoogleBook;return o.a.createElement("div",{className:"card mb-3"},o.a.createElement("div",{className:"row g-0"},o.a.createElement("div",{className:"col-md-4"},o.a.createElement("img",{src:n,className:"card-img-top",alt:t})),o.a.createElement("div",{className:"col-md-8"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},t),o.a.createElement("p",{className:"card-text"},c),o.a.createElement("p",{className:"card-text"},"Author: ",a),o.a.createElement("a",{href:r,target:"_black",className:"btn btn-secondary"},"Learn More"),o.a.createElement("button",{onClick:l.bind(this,e),type:"button",className:"btn btn-secondary"},"Delete")))))},B=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return console.log("Props",this.props.bookState),this.props.bookState.map((function(t){return o.a.createElement(w,{key:t._id,id:t._id,title:t.title,link:t.link,authors:t.authors&&t.authors.length>1?t.authors.join(", "):t.authors,image:t.image?t.image:"https://secocms.cpa.texas.gov/sca-dev-kilimanjaro/img/no_image_available.jpeg",description:t.description,deleteBook:e.props.deleteGoogleBook})}))}}]),a}(n.Component),x=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={savedBooks:[]},e.componentDidMount=function(){y().then((function(t){e.setState({savedBooks:t.data}),console.log(t)})).catch((function(e){console.log(e)}))},e}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(p,null),o.a.createElement(g,null),o.a.createElement("div",null,this.state.savedBooks.length?o.a.createElement(B,{bookState:this.state.books,deleteGoogleBook:this.deleteGoogleBook}):o.a.createElement("div",null,o.a.createElement("hr",null),o.a.createElement("p",{style:{fontStyle:"italic"}},"No results to display"))))}}]),a}(n.Component),C=(a(57),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement(m.a,null,o.a.createElement("div",null,o.a.createElement(h.c,null,o.a.createElement(h.a,{exact:!0,path:"/",component:O}),o.a.createElement(h.a,{exact:!0,path:"/saved",component:x}))))}}]),a}(n.Component)),I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(63);c.a.render(o.a.createElement(C,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");I?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):G(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):G(e)}))}}()}},[[31,1,2]]]);
//# sourceMappingURL=main.456e6bab.chunk.js.map