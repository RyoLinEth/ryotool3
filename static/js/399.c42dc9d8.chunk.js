(self.webpackChunkelstar=self.webpackChunkelstar||[]).push([[399],{1199:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(4165),s=n(5861),a=n(9439),i=n(2791),l=n(7495),c=n.n(l),o=n(3198),d=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address[]","name":"receiverList","type":"address[]"}],"name":"batchTransferEther","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"claimEther","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]'),u=n(2062),p=n.n(u),f=n(4942),x=n(3329),h=function(){var e,t=(0,i.useState)(0),n=(0,a.Z)(t,2),r=n[0],s=n[1],l=(e={display:"flex",justifyContent:"center",alignItems:"center",height:"100%",backgroundColor:"black",width:"100vw",maxWidth:"400px"},(0,f.Z)(e,"height","100px"),(0,f.Z)(e,"flexDirection","column"),e),c={border:"4px solid #f3f3f3",borderTop:"4px solid #3498db",borderRadius:"50%",width:"50px",height:"50px",transform:"rotate(".concat(r,"deg)"),transition:"transform 1s linear"};return(0,i.useEffect)((function(){var e=setInterval((function(){s(r+10)}),50);return function(){return clearInterval(e)}}),[r]),(0,x.jsx)("div",{className:"spinner-wrapper",style:{display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",bottom:"40px",zIndex:"50"},children:(0,x.jsxs)("div",{className:"loading-spinner",style:l,children:[(0,x.jsx)("p",{children:"\u6388\u6b0a\u4e2d..."}),(0,x.jsx)("div",{className:"spinner",style:c})]})})},y="https://mainnet-rpc.hashbit.org",b=new(c())(new(c().providers.HttpProvider)(y)),v="0x582D146833f84E11d2aD6EE4ef2c274f32Fb1675",m=new b.eth.Contract(d,v),g=function(){var e=(0,i.useState)(null),t=(0,a.Z)(e,2),n=t[0],l=t[1],c=(0,i.useState)(0),d=(0,a.Z)(c,2),u=d[0],f=d[1],g=(0,i.useState)("\u5c1a\u672a\u5c0e\u5165\u5730\u5740"),w=(0,a.Z)(g,2),j=w[0],k=w[1],S=(0,i.useState)(null),T=(0,a.Z)(S,2),C=(T[0],T[1],(0,i.useState)(null)),I=(0,a.Z)(C,2),Z=I[0],E=I[1],B=(0,i.useState)(0),D=(0,a.Z)(B,2),L=D[0],M=D[1],N=(0,i.useState)(!1),O=(0,a.Z)(N,2),W=O[0],A=O[1],z=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var t,n,s,a,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=document.getElementById("privateKey").value,l(t),n=b.eth.accounts.privateKeyToAccount(t),j!==n.address){e.next=6;break}return e.abrupt("return");case 6:return s=n.address,a="".concat(s.slice(0,4),"...").concat(s.slice(-4)),k(a),e.next=11,b.eth.getBalance(s);case 11:i=e.sent,f((i/Math.pow(10,18)).toFixed(4)),p()("\u6210\u529f","\u79c1\u9470\u5df2\u6210\u529f\u5c0e\u5165\uff0c\u5730\u5740\u70ba".concat(s)),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),p()("\u7570\u5e38","\u8acb\u5c0e\u5165\u6b63\u78ba\u79c1\u9470");case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var t,s,a,i,l,c,d,u,f;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===Z){e.next=3;break}return p()("\u7570\u5e38","\u8acb\u5148\u6392\u9664\u932f\u8aa4"),e.abrupt("return");case 3:if(!((t=document.getElementById("etherNumber").value)<=0)){e.next=7;break}return p()("\u7570\u5e38","\u8f49\u5e33\u6578\u91cf\u4e0d\u53ef\u70ba ".concat(t)),e.abrupt("return");case 7:if("\u5c1a\u672a\u5c0e\u5165\u5730\u5740"!==j){e.next=10;break}return p()("\u7570\u5e38","\u5c1a\u672a\u5c0e\u5165\u5730\u5740","error"),e.abrupt("return");case 10:if(s=document.getElementById("addressList"),0!==(a=s.value.split("\n"))[0].length){e.next=15;break}return p()("\u7570\u5e38","\u7121\u63a5\u6536\u6b3e\u9805\u5730\u5740","error"),e.abrupt("return");case 15:return A(!0),e.next=18,b.eth.getGasPrice();case 18:return i=e.sent,l=o.fi(t),c=b.eth.accounts.privateKeyToAccount(n),console.log(c.address),d=4e4*a.length,u=m.methods.batchTransferEther(a).encodeABI(),console.log(u),console.log("0xadf548f900000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000003000000000000000000000000dbbb20493701b628b2964c44f29c6af67f705945000000000000000000000000cfba519c1baaf17bf7fd32ea944d21da7e4295dd000000000000000000000000e5c282b9379d4863f0dbf5e47b6bfcedd654fabf"),f={from:c.address,to:v,value:l,gasPrice:i,gas:d.toString(),data:u},e.next=29,b.eth.accounts.signTransaction(f,n).then((function(e){b.eth.sendSignedTransaction(e.rawTransaction).then((function(){A(!1);var t="Tx Sent !! : ".concat(e.transactionHash);p()("\u6210\u529f",t)}))}));case 29:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,x.jsxs)("div",{style:{width:"100%",color:"black",position:"absolute",height:"85vh",overflowY:"scroll",display:"flex",flexDirection:"column",alignItems:"center",paddingBottom:"40vh"},children:[(0,x.jsx)("p",{style:{fontSize:"40px",fontWeight:"bolder"},children:"\u6279\u91cf\u5e73\u53f0\u5e63\u8f49\u5e33"}),(0,x.jsxs)("p",{style:{fontSize:"20px",color:"gray"},children:["(BSC\u934a\uff1a \u5e73\u53f0\u5e63\u70ba BNB)",(0,x.jsx)("br",{}),"(OKC\u934a\uff1a \u5e73\u53f0\u5e63\u70ba OKT)",(0,x.jsx)("br",{})]}),(0,x.jsxs)("p",{style:{fontSize:"12px",color:"black",display:"flex",marginLeft:"20px"},children:["\u7576\u524d\u7db2\u8def:","HBIT"," ",(0,x.jsx)("br",{}),"\u7576\u524d\u7bc0\u9ede:",y]}),(0,x.jsxs)("div",{className:"transferWrapper",style:{width:"80%",maxWidth:"800px",height:"50vh"},children:[(0,x.jsxs)("div",{className:"addressData",style:{border:"1px solid black"},children:[(0,x.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",flexWrap:"wrap"},children:[(0,x.jsx)("p",{children:"\u8f38\u5165\u79c1\u9470 : "}),(0,x.jsx)("input",{type:"password",id:"privateKey",style:{margin:"10px"}}),(0,x.jsx)("button",{onClick:z,children:"\u5c0e\u5165\u79c1\u9470"})]}),(0,x.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",wordWrap:"break-word"},children:[(0,x.jsxs)("p",{children:["\u516c\u9470\u5730\u5740 : ",j," "]}),(0,x.jsxs)("p",{children:["\u5e73\u53f0\u5e63\u9918\u984d : ",u," "]})]}),(0,x.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",padding:"10px"},children:[(0,x.jsx)("p",{children:"\u8f49\u5e33\u7e3d\u6578\u91cf "}),(0,x.jsx)("input",{type:"number",id:"etherNumber",placeholder:"\u5730\u5740\u5e73\u5747\u5206\u914d",style:{margin:"10px"}})]})]}),(0,x.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",flexWrap:"wrap"},children:[(0,x.jsxs)("p",{style:{fontSize:"15px",color:"gray",textAlign:"left",flex:"1",padding:"5px"},children:['\u8acb\u8f38\u5165\u6b32\u6536\u53d6 "\u5e73\u53f0\u5e63" \u4e4b\u5730\u5740',(0,x.jsx)("br",{}),"\u4e00\u884c\u4e00\u5730\u5740"]}),(0,x.jsx)("button",{onClick:K,children:"\u9032\u884c\u8f49\u5e33"})]}),0!==L&&(0,x.jsxs)("div",{style:{borderRadius:"5px",border:"1px solid red",width:"80vw",maxWidth:"800px",marginTop:"10px",marginBottom:"10px",color:"red",fontSize:"12px",textAlign:"left",paddingLeft:"10px"},children:[(0,x.jsxs)("p",{children:["\u7e3d\u5171\u6709 ",L," \u500b\u932f\u8aa4",Z.map((function(e){return(0,x.jsx)("li",{children:e},e)}))]}),(0,x.jsx)("p",{style:{textDecoration:"underline",cursor:"pointer"},onClick:function(){var e=document.getElementById("addressList"),t=e.value.split("\n"),n=[],r=new Map;t.forEach((function(e,t){if(42===e.length){var s=b.utils.toChecksumAddress(e);void 0===r.get(s)&&(r.set(s,!0),n.push(s))}}));var s="";n.map((function(e,t){s=t!==n.length-1?s.concat("".concat(e,"\n")):s.concat("".concat(e))})),e.value=s,M(0),E(null)},children:"\u4e00\u9375\u522a\u9664\u7121\u6548\u5730\u5740"})]}),!0===W&&(0,x.jsx)("div",{children:(0,x.jsx)(h,{})}),(0,x.jsx)("div",{style:{position:"relative"},children:(0,x.jsx)("textarea",{rows:"10",id:"addressList",style:{border:"1px solid black",width:"100%",maxWidth:"800px"},onChange:function(e){var t=e.target.value.split("\n");if(1===t.length&&0===t[0].length)return M(0),void E(null);var n=[],r=new Map,s=0;t.forEach((function(e,t){if(42!==e.length){var a="Line ".concat(t+1,": ").concat(e," : \u7121\u6548\u7684\u9322\u5305\u5730\u5740(\u9577\u5ea6\u932f\u8aa4)");n.push(a),s++}else if(b.utils.isAddress(e)){if(void 0!==r.get(e)){var i="Line ".concat(t+1,": ").concat(e," : \u91cd\u8907\u7684\u9322\u5305\u5730\u5740");s++,n.push(i)}void 0===r.get(e)&&r.set(e,!0)}else{var l="Line ".concat(t+1,": ").concat(e," : \u7121\u6548\u7684\u9322\u5305\u5730\u5740(\u62fc\u5beb\u932f\u8aa4)");n.push(l),s++}0===s?(M(0),E(null)):(M(s),E(n))}))},placeholder:"\u8acb\u8f38\u5165\u6b32\u6536\u53d6 [\u5e73\u53f0\u5e63] \u4e4b\u5730\u5740\uff0c\u4e00\u884c\u4e00\u5730\u5740"})})]})]})}},9366:function(){}}]);
//# sourceMappingURL=399.c42dc9d8.chunk.js.map