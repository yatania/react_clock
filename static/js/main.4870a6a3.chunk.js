(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,a){},13:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),o=a(6),i=a.n(o),l=a(1),r=a(2),s=a(4),m=a(3),u=function(t){Object(s.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={time:(new Date).toLocaleTimeString()},t.timeInterval=0,t}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.startClock()}},{key:"componentDidUpdate",value:function(t){t.clockName!==this.props.clockName&&console.log("The Clock was renamed from"+" ".concat(t.clockName," to ").concat(this.props.clockName))}},{key:"componentWillUnmount",value:function(){this.timeInterval&&clearInterval(this.timeInterval)}},{key:"startClock",value:function(){var t=this;this.timeInterval=setInterval((function(){t.setState({time:(new Date).toLocaleTimeString()}),console.log(t.state.time)}),1e3)}},{key:"render",value:function(){var t=this.state.time;return c.a.createElement("p",{className:"box is-size-3 has-text-primary-dark"},"Current time: ".concat(t))}}]),a}(c.a.Component),k=function(t){var e=t.onClick,a=t.text,n=t.className;return c.a.createElement("button",{type:"button",onClick:e,className:n},a)},h=(a(12),function(t){Object(s.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={isClockVisible:!0,clockName:"0"},t}return Object(r.a)(a,[{key:"hideClock",value:function(){this.setState({isClockVisible:!1})}},{key:"showClock",value:function(){this.setState({isClockVisible:!0})}},{key:"randomName",value:function(){this.setState({clockName:"".concat(Math.round(100*Math.random()))})}},{key:"render",value:function(){var t=this;return c.a.createElement("div",{className:"card is-flex-direction-column has-text-centered"},c.a.createElement("h1",{className:"title"},"React clock"),c.a.createElement(k,{text:"Show Clock",onClick:function(){return t.showClock()},className:"button is-primary is-light"}),c.a.createElement(k,{text:"Hide Clock",onClick:function(){return t.hideClock()},className:"button is-danger is-light mx-3"}),c.a.createElement(k,{text:"Set random name",onClick:function(){return t.randomName()},className:"button is-warning is-light"}),this.state.isClockVisible&&c.a.createElement(u,{clockName:this.state.clockName}))}}]),a}(c.a.Component));i.a.render(c.a.createElement(h,null),document.getElementById("root"))},7:function(t,e,a){t.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.4870a6a3.chunk.js.map