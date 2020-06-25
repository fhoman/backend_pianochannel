(this["webpackJsonpfrontend-pianochannel"]=this["webpackJsonpfrontend-pianochannel"]||[]).push([[0],{26:function(e,t,a){},41:function(e,t,a){e.exports=a(82)},46:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),s=a(22),r=a.n(s),i=a(8),c=(a(46),a(3)),o=a(5),m=a(7),u=a(6);a(26),a(47);function d(){return l.a.createElement("div",{className:"header"},l.a.createElement("div",null,l.a.createElement("img",{src:"https://www.pianolessenamsterdam.nl/wp-content/uploads/2017/08/PianolessenAmsterdam.png",alt:"Pianolessen Amsterdam"})))}var p=a(14),h=a(17),f=a.n(h),g=function e(){var t=this;Object(c.a)(this,e),this.signup=function(e,a){return t.service.post("/auth/signup",{username:e,password:a}).then((function(e){return console.log(e),e}))},this.login=function(e,a){return t.service.post("/auth/login",{username:e,password:a}).then((function(e){return e.data}))},this.isAuthenticated=function(){return t.service.get("/auth/isLoggedIn").then((function(e){return e.data}))},this.logOut=function(){return t.service.post("/auth/logout").then((function(e){return e.data}))},this.service=f.a.create({baseURL:"".concat("https://pianolessenamsterdam.herokuapp.com/api","/"),withCredentials:!0})},E=a(10),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={username:"",password:"",service:new g,submitted:!1},e.handleSubmit=function(t){if(t.preventDefault(),e.setState({validationmessage:""}),""!==e.state.username&&""!==e.state.password)e.state.service.signup(e.state.username,e.state.password).then((function(t){var a=t.data.user,n=a.username,l=a.password;n&&l&&(e.setState({submitted:!0,username:"",password:"",validationmessage:""}),e.props.history.push("/login"))})).catch((function(t){console.log(t);e.setState({validationmessage:"This username already exists"})}));else{e.setState({validationmessage:"Please fill in a username and a password"})}},e.handleInput=function(t){e.setState({validationmessage:""});var a=t.target,n=a.name,l=a.value;e.setState(Object(p.a)({},n,l))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=window.location.href,t=new URL(e).searchParams.get("mail");return t&&(console.log(t),this.setState({username:t})),null}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"columns is-multiline"},l.a.createElement("div",{className:"column is-8 is-offset-2 register"},l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column left"},l.a.createElement("div",{className:"notification is-light"},l.a.createElement("h1",{className:"title is-1"},"Pianolessen Amsterdam"),l.a.createElement("h2",{className:"subtitle has-text-danger"},"Sign up and check your videos"),l.a.createElement("p",null,"Sign up for an account on Pianolessen Amsterdam and check out all your videos "))),l.a.createElement("div",{className:"column is-half right"},l.a.createElement("div",{className:"notification is-light"},l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Name"),l.a.createElement("div",{className:"control has-icons-left has-icons-right"},l.a.createElement("input",{className:"input",type:"email",value:this.state.username,name:"username",onChange:function(t){return e.handleInput(t)},placeholder:"Email"}),l.a.createElement("span",{className:"icon is-small is-left"},l.a.createElement(E.b,null)),l.a.createElement("span",{className:"icon is-small is-right"},l.a.createElement(E.a,null)))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Password:"),l.a.createElement("p",{className:"control has-icons-left"},l.a.createElement("input",{className:"input",type:"password",value:this.state.password,name:"password",onChange:function(t){return e.handleInput(t)},placeholder:"Password"}),l.a.createElement("span",{className:"icon is-small is-left"},l.a.createElement(E.c,null))),l.a.createElement("p",{className:"help is-danger"},this.state.validationmessage)),l.a.createElement("button",{className:"button is-info is-rounded mb-6",onClick:function(t){return e.handleSubmit(t)}},"Signup"),l.a.createElement("p",{className:"control mt-6"},"Already have a account?",l.a.createElement(i.b,{to:"/login"},"Login")))))))," ")}}]),a}(n.Component),N=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).logoutUser=function(){console.log(n.props),n.service.logOut().then((function(){n.setState({loggedInUser:null}),console.log(n.props),n.props.setUser({username:null,role:null,loggedInUser:null})}))},n.state={loggedInUser:null,username:null,role:null,active:!0},n.service=new g,n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"profile-options is-fullwidth"},l.a.createElement("div",{className:"tabs is-fullwidth is-medium"},l.a.createElement("ul",null,l.a.createElement("li",{className:"link"},l.a.createElement(i.c,{to:"/students",activeStyle:{color:"red"}},l.a.createElement("span",{className:"icon"},l.a.createElement("i",{className:"fa fa-thumbs-up"})),l.a.createElement("span",null,"Students"))),l.a.createElement("li",{className:"link"},l.a.createElement(i.c,{to:"/videos",activeStyle:{color:"red"}},l.a.createElement("span",{className:"icon"},l.a.createElement("i",{className:"fa fa-search"})),l.a.createElement("span",null,"Videos"))),l.a.createElement("li",{className:"link"},l.a.createElement(i.c,{to:"/login",onClick:function(){return e.logoutUser()},activeStyle:{color:"red"}},l.a.createElement("span",{className:"icon"},l.a.createElement("i",{className:"fa fa-balance-scale"})),l.a.createElement("span",null,"Logout"))))))}}]),a}(n.Component),b=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).logoutUser=function(){console.log(n.props),n.service.logOut().then((function(){n.setState({loggedInUser:null}),console.log(n.props),n.props.setUser({username:null,role:null,loggedInUser:null})}))},n.state={loggedInUser:null,username:null,role:null},n.service=new g,n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.userInSession,t=e.username,a=e.loggedInUser;this.setState({username:t,loggedInUser:a})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"profile-options is-fullwidth"},l.a.createElement("div",{className:"tabs is-fullwidth is-medium"},l.a.createElement("ul",null,l.a.createElement("li",{className:"link"},l.a.createElement(i.c,{to:"/myprofile/".concat(this.state.username),activeStyle:{color:"red"}},l.a.createElement("span",{className:"icon"},l.a.createElement("i",{className:"fa fa-thumbs-up"})),l.a.createElement("span",null,"Profile"))),l.a.createElement("li",{className:"link"},l.a.createElement(i.c,{to:"/login",onClick:function(){return e.logoutUser()},activeStyle:{color:"red"}},l.a.createElement("span",{className:"icon"},l.a.createElement("i",{className:"fa fa-balance-scale"})),l.a.createElement("span",null,"Logout"))))))}}]),a}(n.Component),S=a(2),w=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={username:"",password:"",usernameTemp:"",role:"",service:new g,formSubmit:!1},e.handleSubmit=function(t){t.preventDefault();var a=e.state.username,n=e.state.password;if(""!==a&&""!==n)e.state.service.login(a,n).then((function(t){e.setState({username:"",password:"",role:t.role,usernameTemp:t.username,formSubmit:!0}),e.props.setUser(t)})).catch((function(t){console.log(t);e.setState({validationmessage:"your username or password are not valid"})}));else{e.setState({validationmessage:"Please fill in a username and password"})}},e.handleInput=function(t){e.setState({validationmessage:""});var a=t.target,n=a.name,l=a.value;e.setState(Object(p.a)({},n,l))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t="/myprofile/".concat(this.state.usernameTemp);return this.state.formSubmit&&"USER"===this.state.role?l.a.createElement(S.a,{to:t}):this.state.formSubmit&&"ADMIN"===this.state.role?l.a.createElement(S.a,{to:"/students/"}):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"columns is-multiline"},l.a.createElement("div",{className:"column is-8 is-offset-2 register"},l.a.createElement("div",{className:"columns is-centered"},l.a.createElement("div",{className:"column is-half"},l.a.createElement("div",{className:"notification is-light"},l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Username"),l.a.createElement("div",{className:"control has-icons-left has-icons-right"},l.a.createElement("input",{className:"input",type:"email",value:this.state.username,name:"username",onChange:function(t){return e.handleInput(t)},placeholder:"Email"}),l.a.createElement("span",{className:"icon is-small is-left"},l.a.createElement(E.b,null)))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Password:"),l.a.createElement("p",{className:"control has-icons-left"},l.a.createElement("input",{className:"input",type:"password",value:this.state.password,name:"password",onChange:function(t){return e.handleInput(t)},placeholder:"Password"}),l.a.createElement("span",{className:"icon is-small is-left"},l.a.createElement(E.c,null))),l.a.createElement("p",{className:"help is-danger"},this.state.validationmessage)),l.a.createElement("button",{className:"button is-info is-rounded mb-6",onClick:function(t){return e.handleSubmit(t)}},"Login"),l.a.createElement("p",{className:"control mt-6"},"Don't have an account?",l.a.createElement(i.b,{to:"/"},"Signup"))))))))}}]),a}(n.Component),y=f.a.create({baseURL:"".concat("https://pianolessenamsterdam.herokuapp.com/api","/admin")}),k={fetchVideos:function(){return y.post("/videos")},fetchVideo:function(e){return y.post("/video",e)},fetchStudents:function(){return y.post("/students")},fetchStudentsVideo:function(e){return y.post("/students-video",e)},tagVideo:function(e){return y.post("/tagvideo",e)},untagVideo:function(e){return y.post("/untagvideo",e)},mailNewUser:function(e){return y.post("/mail-user",{email:e})},sendNotifications:function(e){return console.log(e),y.post("/send-notification",e)},deleteUser:function(e){return console.log(e),y.post("/delete-user",{userID:e})}},C=a(0),O=a(18),U=a.n(O),M={content:{top:"20%",left:"30%",right:"30%",bottom:"20%",padding:20,margin:0},modal:{padding:0,margin:0}},j=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleChange=function(t){var a=t.target,n=a.name,l=a.value;e.setState(Object(p.a)({},n,l))},e.onSubmit=function(t){t.preventDefault(),k.mailNewUser(e.state.email),e.setState({email:"",showMessage:!0,tempMail:e.state.email}),setTimeout((function(){e.setState({showMessage:!1})}),2e3)},e.deleteUser=function(t){e.setState({isOpen:!1}),k.deleteUser(t).then((function(t){console.log(t),e.setState({users:t.data})}))},e.showModal=function(){e.setState({isOpen:!0})},e.hideModal=function(){e.setState({isOpen:!1})},e.state={users:[],email:"",tempMail:"",showMessage:!1,deletedUserID:"",isOpen:!1},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props),k.fetchStudents().then((function(t){e.setState({users:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"box"},l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column is-2-tablet is-4-mobile has-text-centered"},l.a.createElement("p",{className:"stat-val"},this.state.totalVideos)),l.a.createElement("div",{className:"column is-8"},l.a.createElement("div",{className:"field has-addons"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",onChange:function(t){return e.handleChange(t)},name:"email",value:this.state.email,type:"email",placeholder:"Email adress"})),l.a.createElement("div",{className:"control"},l.a.createElement("a",{href:"/students",onClick:function(t){return e.onSubmit(t)},className:"button is-info"},"Invite student"))),this.state.showMessage&&l.a.createElement("div",{className:"notification is-success"}," An invitation has been send to ",this.state.tempMail)))),l.a.createElement("table",{className:"table is-bordered is-striped is-narrow is-hoverable is-fullwidth"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Profile picture"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Surname"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"Telephone"),l.a.createElement("th",null))),l.a.createElement("tbody",null,this.state.users.map((function(t,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",null,l.a.createElement("span",{className:"student-profile-small"},l.a.createElement("img",{src:t.image,alt:t.name}))),l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.surname),l.a.createElement("td",null,t.username),l.a.createElement("td",null,t.number),l.a.createElement(U.a,{isOpen:e.state.isOpen,onRequestClose:function(){return e.hideModal()},style:M},l.a.createElement("div",{className:"modal-message"},l.a.createElement("div",{className:"modal-header-message"},l.a.createElement("p",{className:"modal-card-title"},"Delete user"),l.a.createElement("button",{onClick:function(){return e.hideModal()},className:"delete"},"close")),l.a.createElement("div",{className:"modal-body-message"},l.a.createElement("p",null)),l.a.createElement("p",null,"Are you sure you want to delete ",t.username,"?"),l.a.createElement("p",null),l.a.createElement("br",null),l.a.createElement("div",{className:"modal-footer-message"},l.a.createElement("button",{className:"button is-info",onClick:function(a){return e.deleteUser(t._id)}},"Delete user"),l.a.createElement("button",{className:"button is-danger is-small",onClick:function(){return e.hideModal()}},"Close modal")))),l.a.createElement("td",{onClick:function(){return e.showModal()}},l.a.createElement(C.b.Provider,{value:{className:"delete-icon"}},"  ",l.a.createElement(E.d,null))))})))))}}]),a}(n.Component),V=a(19),D=a.n(V),I=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={videos:[],filteredData:[],totalVideos:0,taggedVideo:"",taggedStudent:"",loading:!0,searchValue:"",showVideoCardModal:""},e.showModal=function(){e.setState({showVideoCardModal:!0})},e.hideModal=function(){e.setState({showVideoCardModal:!1})},e.inputSearchHandler=function(t){console.log(t);var a=e.state.videos.filter((function(e){return e.snippet.title.toLowerCase().includes(t)}));console.log(a),e.setState({searchValue:t,filteredData:a})},e.untagUser=function(t,a){console.log(a,t);var n={username:a,videoID:t};k.untagVideo(n).then((function(){e.setState({taggedStudent:a}),e.getNewData()})).catch((function(e){return console.log(e)}))},e}return Object(o.a)(a,[{key:"getNewData",value:function(){var e=this;k.fetchVideos().then((function(t){console.log(t.data),e.setState({videos:t.data,filteredData:t.data,totalVideos:t.data.length,loading:!1})})).catch((function(e){return console.log(e)}))}},{key:"componentDidMount",value:function(){var e=this;k.fetchVideos().then((function(t){console.log(t.data),e.setState({videos:t.data,filteredData:t.data,totalVideos:t.data.length,loading:!1})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return this.state.loading?l.a.createElement("p",{className:"columns is-centered"},"Loading videos"):0===this.state.filteredData.length?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"box"},l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column is-2-tablet is-4-mobile has-text-centered"},l.a.createElement("p",{className:"stat-val"},this.state.totalVideos),l.a.createElement("p",{className:"stat-key"},"Videos")),l.a.createElement("div",{className:"column is-8"},l.a.createElement("p",{className:"control has-addons"},l.a.createElement("input",{className:"input",placeholder:"Search videos",onChange:function(t){return e.inputSearchHandler(t.target.value)},value:this.searchValue,type:"text"}))),"     ")),l.a.createElement("p",{className:"columns is-centered"},"There are no results"),l.a.createElement("p",null)):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"box"},l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column is-2-tablet is-4-mobile has-text-centered"},l.a.createElement("p",{className:"stat-val"},this.state.totalVideos),l.a.createElement("p",{className:"stat-key"},"Videos")),l.a.createElement("div",{className:"column is-8"},l.a.createElement("p",{className:"control has-addons"},l.a.createElement("input",{className:"input",placeholder:"Search videos",onChange:function(t){return e.inputSearchHandler(t.target.value)},value:this.searchValue,type:"text"}))))),l.a.createElement("div",{className:"video-container"},this.state.filteredData.map((function(e,t){return l.a.createElement("div",{className:"card-video",key:e.id},l.a.createElement("div",{className:"card-content"},l.a.createElement("div",{className:"content"},l.a.createElement("p",null,l.a.createElement(D.a,{format:"D MMM YYYY"},e.snippet.publishedAt)),l.a.createElement("p",{className:"title is-5"},e.snippet.title),l.a.createElement("p",null),e.users.map((function(e,t){return l.a.createElement("span",{key:t,className:"student-profile-small"},l.a.createElement("img",{src:e.image,alt:e.name}))})),l.a.createElement("p",null),l.a.createElement(i.b,{to:"/video/".concat(e._id),className:"button is-info is-small"},"Tag students"))))}))))}}]),a}(n.Component),x=a(40),A={content:{top:"20%",left:"30%",right:"30%",bottom:"20%",padding:20,margin:0},modal:{padding:0,margin:0}},P=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).tagUser=function(e){var t={username:e.username,videoID:n.state.taggedVideo._id};k.tagVideo(t).then((function(){n.setState({taggedStudent:e});var t=Object(x.a)(n.state.taggedStudentsArr);t.push(n.state.taggedStudent),n.getNewData(),n.setState({taggedStudentsArr:t})})).catch((function(e){return console.log(e)}))},n.untagUser=function(e){var t={username:e.username,videoID:n.state.taggedVideo._id};k.untagVideo(t).then((function(){n.setState({taggedStudent:e}),n.getNewData()})).catch((function(e){return console.log(e)}))},n.sendNotifications=function(){n.hideModal(),k.sendNotifications({taggedStudentsArr:n.state.taggedStudentsArr,videoID:n.state.taggedVideo}),n.props.history.push("/videos")},n.showModal=function(){n.state.taggedStudentsArr.length>0?n.setState({isOpen:!0}):n.props.history.push("/videos")},n.hideModal=function(){n.setState({isOpen:!1}),n.props.history.push("/videos")},n.state={students:[],taggedVideo:"",taggedStudent:"",loading:!0,isOpen:!1,taggedStudentsArr:[]},n}return Object(o.a)(a,[{key:"getNewData",value:function(){var e=this;k.fetchVideo({videoID:this.props.match.params.id}).then((function(t){e.setState({taggedVideo:t.data,loading:!1}),k.fetchStudentsVideo({videoID:e.state.taggedVideo._id}).then((function(t){e.setState({students:t.data})}))}))}},{key:"componentDidMount",value:function(){this.getNewData()}},{key:"render",value:function(){var e=this;if(this.state.loading)return l.a.createElement("div",null,"Loading");var t=this.state.taggedVideo.snippet.title;return l.a.createElement("div",{className:"card-video"},l.a.createElement("div",{className:"card-content"},l.a.createElement("div",{className:"content"},l.a.createElement("h2",{className:"video-modal"},t),l.a.createElement("p",null),this.state.taggedVideo.users.map((function(t,a){return l.a.createElement("div",{key:a},l.a.createElement("span",{key:a,className:"student-profile-small"}," ",l.a.createElement("img",{alt:t.username,src:t.image})),l.a.createElement("button",{className:"button is-danger is-small",onClick:function(a){return e.untagUser(t)}},l.a.createElement("span",null,"Untag student"))," ")})),l.a.createElement("p",null),this.state.students.map((function(t,a){return l.a.createElement("div",{key:a},l.a.createElement("span",{key:a,className:"student-profile-small mr-6"}," ",l.a.createElement("img",{alt:t.username,src:t.image}))," ",l.a.createElement("button",{className:"button is-success is-small",onClick:function(a){return e.tagUser(t)}},"Tag user"))})),l.a.createElement("p",null),l.a.createElement(U.a,{isOpen:this.state.isOpen,onRequestClose:function(){return e.hideModal()},style:A},l.a.createElement("div",{className:"modal-message"},l.a.createElement("div",{className:"modal-header-message"},l.a.createElement("p",{className:"modal-card-title"},"Send notifications"),l.a.createElement("button",{onClick:function(){return e.hideModal()},className:"delete"},"close")),l.a.createElement("div",{className:"modal-body-message"},l.a.createElement("ul",null,this.state.taggedStudentsArr.map((function(e){return l.a.createElement("li",null,l.a.createElement("span",{key:e.username,className:"student-profile-small"}," ",l.a.createElement("img",{alt:e.username,src:e.image}))," ",e.name)}))),l.a.createElement("p",null)),l.a.createElement("div",{className:"modal-footer-message"},l.a.createElement("button",{className:"button is-info",onClick:function(){return e.sendNotifications()}},"Send notifications"),l.a.createElement("button",{className:"button is-danger is-small",onClick:function(){return e.hideModal()}},"Close")))),l.a.createElement("button",{onClick:function(){return e.showModal()},className:"button is-info"},"Back to videos"))))}}]),a}(n.Component),F=f.a.create({baseURL:"".concat("https://pianolessenamsterdam.herokuapp.com/api","/user")}),L={FetchProfileStudent:function(e){return F.post("/profile-student",e)},UpdateProfileStudent:function(e){return F.post("/update-profile-student",e)},handleFileUpload:function(e){return F.post("/profileimage",e).then((function(e){return e.data}))}},T=(a(81),function(e){var t=e.user,a=t.username,n=t.name,s=t.surname,r=t.number,i=t.bio,c=t.image,o=t.showModal,m=t.emailnotifications,u=t.whatsappnotifications,d=e.handleClose,p=e.handleFileUpload,h=e.handleInput,f=e.handleSave,g=o?"display-block":"display-none";return l.a.createElement("div",{className:g},l.a.createElement("div",{className:"modal-background"}),l.a.createElement("div",{className:"modal-card"},l.a.createElement("header",{className:"modal-card-head"},l.a.createElement("p",{className:"modal-card-title"},"Edit Profile"),l.a.createElement("button",{onClick:d,className:"delete"},"close")),l.a.createElement("section",{className:"modal-card-body"},l.a.createElement("label",{htmlFor:"upload"},l.a.createElement("div",{className:"student-profile-editable"},l.a.createElement("img",{src:c,alt:n,className:"main-profile-img"}),l.a.createElement("input",{type:"file",style:{display:"none"},id:"upload",onChange:function(e){return p(e)}}),l.a.createElement(E.e,null))),l.a.createElement("label",{className:"label"},"Name"),l.a.createElement("input",{className:"input",onChange:h,placeholder:"Text input",name:"name",type:"text",value:n}),l.a.createElement("label",{className:"label"},"Surname"),l.a.createElement("input",{className:"input",onChange:h,placeholder:"Text input",name:"surname",type:"text",value:s}),l.a.createElement("label",{className:"label"},"Email"),l.a.createElement("input",{className:"input",onChange:h,placeholder:"Email input",name:"username",type:"text",value:a}),l.a.createElement("i",{className:"fa fa-warning"}),l.a.createElement("label",{className:"label"},"Description"),l.a.createElement("textarea",{className:"textarea",onChange:h,placeholder:"Describe Yourself!",name:"bio",value:i}),l.a.createElement("label",{className:"label"},"Phone Number"),l.a.createElement("input",{className:"input",onChange:h,placeholder:"Text input",name:"number",type:"text",value:r}),l.a.createElement("label",{className:"label"},"Send me notifications for every new video"),l.a.createElement("div",{className:"field"},l.a.createElement("input",{className:"is-checkradio is-success is-circle",style:{marginRight:10},value:m,checked:m,type:"checkbox",name:"emailnotifications",onChange:h}),l.a.createElement("label",{htmlFor:"email",style:{marginRight:20}},l.a.createElement("span",{className:"icon is-small is-left"},l.a.createElement(E.b,null))," E-mail"),l.a.createElement("input",{className:"is-checkradio is-success is-circle",style:{marginRight:10},value:u,checked:u,type:"checkbox",name:"whatsappnotifications",onChange:h}),l.a.createElement("label",{htmlFor:"whastapp"},l.a.createElement("span",{className:"icon is-small is-left"},l.a.createElement(E.f,null))," Whatsapp"))),l.a.createElement("footer",{className:"modal-card-foot"},l.a.createElement("a",{className:"button is-primary modal-save",href:"/save",onClick:function(e){return f(e)}},"Save changes"),l.a.createElement("button",{onClick:d,className:"button is-danger"},"close"))))}),R=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={username:e.props.user,loading:!0,role:"",videos:[],totalVideos:0,name:"",surname:"",bio:"",image:"",number:"",showModal:!1,flagButton:!0},e.showModal=function(){e.setState({showModal:!0,flagButton:!1})},e.hideModal=function(){e.setState({showModal:!1,flagButton:!0})},e.savePreferences=function(t){t.preventDefault(),e.setState({showModal:!1,flagButton:!0}),L.UpdateProfileStudent(e.state)},e.handleInput=function(t){console.log(t.target);var a=t.target,n=a.name,l=a.value;"checkbox"===t.target.type&&(l=t.target.checked),e.setState(Object(p.a)({},n,l))},e.handleFileUpload=function(t){var a=new FormData;a.append("image",t.target.files[0]),a.append("username",e.state.username),L.handleFileUpload(a).then((function(t){e.setState({image:t})})).catch((function(e){console.log("Error while uploading the file: ",e)}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;L.FetchProfileStudent({username:this.state.username}).then((function(t){var a=t.data[0],n=a.name,l=a.surname,s=a.number,r=a.videos,i=a.bio,c=a.role,o=a.image,m=a.emailnotifications,u=a.whatsappnotifications;e.setState({videos:r,totalVideos:r.length,name:n,surname:l,number:s,bio:i,role:c,image:o,emailnotifications:m,whatsappnotifications:u,loading:!1})}))}},{key:"render",value:function(){return this.state.loading?l.a.createElement("p",null," Videos are loading "):l.a.createElement("div",{className:"container profile"},l.a.createElement("div",{className:"section profile-heading"},l.a.createElement("div",{className:"columns is-mobile is-multiline"},l.a.createElement("div",{className:"column is-2"},l.a.createElement("div",{className:"student-profile-editable"},l.a.createElement("img",{alt:this.state.name,src:this.state.image,className:"main-profile-img"}))),l.a.createElement("div",{className:"column is-4-tablet is-10-mobile name"},l.a.createElement("span",{className:"title is-bold"},this.state.name," ",this.state.surname),l.a.createElement("br",null),l.a.createElement(T,{user:this.state,handleSave:this.savePreferences,handleClose:this.hideModal,InputShow:this.InputShow,handleInput:this.handleInput,handleFileUpload:this.handleFileUpload}),this.state.flagButton&&l.a.createElement("button",{type:"button",className:"button is-primary is-outlined",onClick:this.showModal},"Edit preferences"),l.a.createElement("br",null),l.a.createElement("p",{className:"tagline"},this.state.bio)),l.a.createElement("div",{className:"column is-2-tablet is-4-mobile has-text-centered"},l.a.createElement("p",{className:"stat-val"},this.state.totalVideos),l.a.createElement("p",{className:"stat-key"},"videos")))),l.a.createElement("div",{className:"video-container"},this.state.videos.map((function(e,t){return l.a.createElement("div",{className:"card-video",key:e.id},l.a.createElement("div",{className:"card-image"},l.a.createElement("iframe",{allowtransparency:"true",title:t,width:"300",height:"215",src:"https://www.youtube.com/embed/"+e.snippet.resourceId.videoId,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),l.a.createElement("div",{className:"card-content"},l.a.createElement("div",{className:"content"},l.a.createElement("p",null,l.a.createElement(D.a,{format:"D MMM YYYY"},e.snippet.publishedAt)),l.a.createElement("p",{className:"title is-5"},e.snippet.title),l.a.createElement("p",null,e.snippet.description))))}))))}}]),a}(n.Component),B=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).checkAuthenticated=function(){console.log("check authenticated"),null===n.state.username&&n.service.isAuthenticated().then((function(e){console.log(e),n.setState({username:e.username,role:e.role,loading:!1})})).catch((function(e){n.setState({username:!1,role:!1,loading:!1})}))},n.setUser=function(e){n.setState({username:e.username,role:e.role})},n.state={videos:[],role:null,username:null,loggedInUser:null,loading:!1},n.service=new g,n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return this.checkAuthenticated(),this.state.loading?l.a.createElement("p",null,"loading"):"ADMIN"===this.state.role?l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement(N,{userInSession:this.state.loggedInUser,setUser:this.setUser}),l.a.createElement(S.d,null,l.a.createElement(S.b,{path:"/students",component:j}),l.a.createElement(S.b,{exact:!0,path:"/videos",component:I}),l.a.createElement(S.b,{exact:!0,path:"/video/:id",component:P}))):"USER"===this.state.role?l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement(b,{userInSession:this.state,setUser:this.setUser}),l.a.createElement(S.d,null,l.a.createElement(S.b,{exact:!0,path:"/myprofile/:id"},l.a.createElement(R,{user:this.state.username,setUser:this.setUser})))):l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement(S.d,null,l.a.createElement(S.b,{exact:!0,path:"/",component:v}),l.a.createElement(S.b,{exact:!0,path:"/login",render:function(){return l.a.createElement(w,{setUser:e.setUser})}})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(i.a,null,l.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.060c0e7c.chunk.js.map