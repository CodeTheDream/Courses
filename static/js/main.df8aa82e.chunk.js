(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a.p+"static/media/ctd-logo.a3287f5d.png"},24:function(e,t,a){e.exports=a(36)},29:function(e,t,a){},30:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},35:function(e,t,a){e.exports=a.p+"static/media/ctd-labs-logo.bdbeefd6.png"},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),s=a.n(o),c=(a(29),a(30),a(2)),l=a(6),i="/Courses",u="/Courses/about",m="Courses/react-resources",d="Courses/react_fall_2019",h=a(15),p=a.n(h),f=function(){return r.a.createElement("nav",{className:"navigation"},r.a.createElement("div",{className:"nav-content"},r.a.createElement("div",{className:"logo-wrapper"},r.a.createElement(c.b,{to:i},r.a.createElement("img",{src:p.a}))),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.b,{to:i},"Home")),r.a.createElement("li",null,r.a.createElement(c.b,{to:u},"About")))))},v=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"footer-content"},"Copyright \xa9",(new Date).getFullYear()," Code the Dream"))},E=a(7),g=a(8),b=a(10),w=a(9),y=a(11),k=(a(35),function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(b.a)(this,Object(w.a)(t).call(this,e))).state={loading:!1,courses:null},a}return Object(y.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.getCourses()}},{key:"getCourses",value:function(){var e=this;fetch("https://api.airtable.com/v0/appgAr8AE94OY9Ej9/React%20Fall%202019?maxRecords=3&view=Grid%20view",{headers:{Authorization:"Bearer keysWOUXtGyYz8SY2"}}).then(function(e){return e.json()}).then(function(t){var a=t.records;e.setState({courses:a},function(){})})}},{key:"render",value:function(){this.state.courses;return r.a.createElement("div",{className:"view-container dashboard"},r.a.createElement("div",{className:"dashboard-content"},r.a.createElement("h3",null,"Code the Dream Classes"),r.a.createElement("p",null,"Welcome Code the Dream students. Select your class below to check out the syllabus."),r.a.createElement("ul",{className:"class-list"},r.a.createElement(c.b,{to:"react-resources"},"React - Resources"),r.a.createElement(c.b,{to:"react_fall_2019"},"React - Fall 2019"))))}}]),t}(r.a.Component)),C=function(){return r.a.createElement("div",{className:"view-container about "},r.a.createElement("h3",null,"About Code the Dream"),r.a.createElement("p",null,"Code the Dream offers free intensive training in software development to people from diverse low-income backgrounds. In CTD Labs, our coders work with experienced mentors to hone those skills by building apps and technology platforms for a range of startups, nonprofits and government clients. The ultimate aim of Code the Dream is to create a unique win-win, where our coders gain real experience building apps that make the world a little better place, and then use that experience to launch new careers with enormous opportunity for themselves, their families, and their communities."),r.a.createElement("div",{className:"cta-wrapper"},r.a.createElement("div",null,r.a.createElement("a",{target:"_blank",href:"https://www.codethedream.org/donate/"},"Donate")),r.a.createElement("div",null,r.a.createElement("a",{target:"_blank",href:"https://www.codethedream.org/"},"Learn More"))))},j=function(e){var t=Object.values(e.courses);console.log("courses",e);var a=t.map(function(e,t){return console.log(e,t),r.a.createElement("li",{className:"assignment-li",key:e.fields.name},r.a.createElement("a",{target:"_blank",href:e.fields.url}," ",e.fields.name))});return r.a.createElement("ul",{className:"assignment-list"},a)},O=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(b.a)(this,Object(w.a)(t).call(this,e))).state={loading:!1,courses:null},a}return Object(y.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.getCourses()}},{key:"getCourses",value:function(){var e=this;fetch("https://api.airtable.com/v0/appgAr8AE94OY9Ej9/React%20Fall%202019?maxRecords=3&view=Grid%20view",{headers:{Authorization:"Bearer keysWOUXtGyYz8SY2"}}).then(function(e){return e.json()}).then(function(t){var a=t.records;e.setState({courses:a},function(){})})}},{key:"render",value:function(){var e=this.state.courses;return r.a.createElement("div",{className:"view-container"},r.a.createElement("h3",null,"React Fall 2019"),r.a.createElement("p",null,"Welcome React Fall 2019 Remote students. This is going to be an awesome cohort! Below is a list of assignments and due dates."),r.a.createElement("div",{className:"assignment-box"},r.a.createElement("h4",null,"Assignments"),e&&r.a.createElement(j,{courses:this.state.courses})))}}]),t}(r.a.Component),N=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(b.a)(this,Object(w.a)(t).call(this,e))).state={loading:!1,courses:null},a}return Object(y.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.getCourses()}},{key:"getCourses",value:function(){var e=this;fetch("https://api.airtable.com/v0/appgAr8AE94OY9Ej9/react%20resources?maxRecords=10&view=Grid%20view",{headers:{Authorization:"Bearer keysWOUXtGyYz8SY2"}}).then(function(e){return e.json()}).then(function(t){var a=t.records;e.setState({courses:a},function(){})})}},{key:"render",value:function(){var e=this.state.courses;return r.a.createElement("div",{className:"view-container "},r.a.createElement("h3",null,"React Resources"),r.a.createElement("p",null,"Hey students, interns, and front-end developers. The following is a list of resources that we think will help you on your road to becoming a great front-end developer. Go through this list of assignments from top to bottom and once you have it all done you shoudl be well on your way to being an accomplished front-end dev."),r.a.createElement("div",{className:"assignment-box"},r.a.createElement("h4",null,"Resources, Tutorials, & Assignments"),e&&r.a.createElement(j,{courses:this.state.courses})))}}]),t}(r.a.Component);var x=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c.a,{basename:"/Courses"},r.a.createElement(f,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:i,component:k}),r.a.createElement(l.a,{exact:!0,path:u,component:C}),r.a.createElement(l.a,{exact:!0,path:d,component:O}),r.a.createElement(l.a,{exact:!0,path:m,component:N})),r.a.createElement(v,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.df8aa82e.chunk.js.map