webpackJsonp([1],{784:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"RoseliaLyrics",function(){return o});var r=n(26),i=n(0),l=(n.n(i),n(38)),a=n(60),c=n(52),s=n(195),o=function(e){function t(t){var n=e.call(this,t)||this;return n.getLyric=function(){return Object(r.b)(n,void 0,void 0,function(){var e;return Object(r.d)(this,function(t){switch(t.label){case 0:this.setState({loading:!0}),t.label=1;case 1:return t.trys.push([1,4,,5]),[4,fetch("https://roselia.moe/blog/api/roselia/lyric/random")];case 2:return[4,t.sent().json()];case 3:return e=t.sent(),this.setState({loading:!1,lyric:e}),[3,5];case 4:return t.sent(),this.setState({loading:!1}),[3,5];case 5:return[2]}})})},n.state={lyric:{album:"",at:"",id:1,lyric:"",name:"",cnLyric:"",jpLyric:"",type:"album",link:"",picUrl:""},loading:!1},n}return Object(r.c)(t,e),t.prototype.shouldComponentUpdate=function(e){return e.loading!==this.state.loading||e.lyric.name!==this.state.lyric.name||e.lyric.at!==this.state.lyric.at},Object.defineProperty(t.prototype,"currentLink",{get:function(){var e=this.state.lyric;return e.type+"/"+e.id+Object(c.i)(e.id)},enumerable:!1,configurable:!0}),t.prototype.renderContent=function(){var e=this.state.lyric;return i.createElement(l.d.Dimmable,{as:l.s,blurring:!0,dimmed:this.state.loading},i.createElement(l.k.Group,null,i.createElement(l.k,null,i.createElement(l.k.Image,{size:"small",src:e.picUrl}),i.createElement(l.k.Content,{verticalAlign:"middle"},i.createElement(l.k.Header,null,i.createElement("p",null,i.createElement("span",null,e.jpLyric)),i.createElement("p",null,i.createElement("span",null,e.cnLyric))),i.createElement(l.k.Description,null,e.name),i.createElement(l.k.Extra,null,i.createElement(l.l,{as:a.b,to:this.currentLink,content:e.album}),i.createElement(l.l,{icon:"time",content:e.at})),i.createElement(l.k.Extra,null,i.createElement(l.a,{disabled:this.state.loading,size:"small",icon:"refresh",onClick:this.getLyric}))))))},t.prototype.render=function(){return i.createElement(s.a,{onVisible:this.getLyric},this.renderContent())},t}(i.Component)}});
//# sourceMappingURL=1.277a03f3.chunk.js.map