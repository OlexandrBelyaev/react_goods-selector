(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(2),l=n.n(c),s=n(3),r=n(4),d=n(6),u=n(5),i=(n(12),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),m=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={selectedGood:i[8]},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Selected good: -"," ",this.state.selectedGood),i.length,a.a.createElement("ul",null,i.map((function(t){return a.a.createElement("li",{key:t,className:t===e.state.selectedGood&&"isActive"},t,a.a.createElement("button",{type:"button",onClick:function(){e.setState({selectedGood:t})}},t))}))),a.a.createElement("button",{type:"button",onClick:function(){var t=i.findIndex((function(t){return t===e.state.selectedGood}))+1;e.setState({selectedGood:t===i.length?i[0]:i[t]})}},"Select"),a.a.createElement("button",{type:"button",onClick:function(){e.setState({selectedGood:"No goods selected"})},className:"No goods selected"===this.state.selectedGood&&"cancelled"},"X"))}}]),n}(a.a.Component);l.a.render(a.a.createElement(m,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.93901624.chunk.js.map