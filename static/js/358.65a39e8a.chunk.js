"use strict";(self.webpackChunkcar_sharing_react_app=self.webpackChunkcar_sharing_react_app||[]).push([[358],{600:function(t,e,i){i.d(e,{EF:function(){return c},_l:function(){return p},wR:function(){return a}});var n=i(861),r=i(757),s=i.n(r),o=i(243),l="https://650097b818c34dee0cd528db.mockapi.io/api/car_sharing",a=function(){var t=(0,n.Z)(s().mark((function t(e,i){var n,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(l,"/catalog?page=").concat(e,"&limit=").concat(i));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e,i){return t.apply(this,arguments)}}(),c=function(){var t=(0,n.Z)(s().mark((function t(e,i){var n,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.put("".concat(l,"/catalog/").concat(e),{favorite:i});case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e,i){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(s().mark((function t(e,i){var n,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(l,"/catalog?favorite=true&page=").concat(e,"&limit=").concat(i));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e,i){return t.apply(this,arguments)}}()},358:function(t,e,i){i.d(e,{Z:function(){return M}});var n=i(439),r=i(791),s=i(861),o=i(757),l=i.n(o),a=i(600);var c=i.p+"static/media/notFavorite.ac060e771360fcc26ebb0c86173c8396.svg";var p=i.p+"static/media/favorite.623a3b874365d724c658e79a860ad4a4.svg",d=i(184),x=function(t){var e=t.style,i=t.id,o=t.favorite,x=t.refresh,h=(0,r.useState)(o),u=(0,n.Z)(h,2),f=u[0],g=u[1],y=(0,r.useState)(!1),m=(0,n.Z)(y,2),j=m[0],v=m[1],w=function(){var t=(0,s.Z)(l().mark((function t(){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(v(!0),f){t.next=8;break}return t.next=4,(0,a.EF)(i,!0);case 4:t.sent&&g(!0),v(!1),x&&x((function(t){return!t}));case 8:if(!f){t.next=15;break}return t.next=11,(0,a.EF)(i,!1);case 11:t.sent&&g(!1),v(!1),x&&x((function(t){return!t}));case 15:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,d.jsx)("div",{style:e,onClick:w,disabled:j,children:f?(0,d.jsx)("img",{src:p,alt:"favorite"}):(0,d.jsx)("img",{src:c,alt:"not-favorite"})})},h=function(t){return t.split(", ").slice(1,-1).toString()},u=function(t){return t.split(", ").slice(2).toString()},f=function(t){var e,i=t.car,n=t.active,r=t.setActive,s=i.id,o=i.year,l=i.make,a=i.model,c=i.type,p=i.img,x=i.description,f=i.fuelConsumption,M=i.engineSize,D=i.functionalities,G=i.rentalPrice,H=i.address,q=i.rentalConditions,J=i.mileage;return(0,d.jsx)("div",{style:n?y:g,onClick:function(){return r(!1)},children:(0,d.jsxs)("div",{style:m,onClick:function(t){return t.stopPropagation()},children:[(0,d.jsx)("div",{style:v,onClick:function(){return r(!1)},children:(0,d.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("path",{d:"M18 6L6 18",stroke:"#121417","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"}),(0,d.jsx)("path",{d:"M6 6L18 18",stroke:"#121417","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"})]})}),(0,d.jsx)("div",{style:j,children:(0,d.jsx)("img",{style:w,src:p,alt:""})}),(0,d.jsxs)("div",{style:b,children:[(0,d.jsxs)("h2",{style:k,children:[l," ",(0,d.jsx)("span",{style:S,children:a}),", ",o]}),(0,d.jsxs)("ul",{style:C,children:[(0,d.jsx)("li",{style:W,children:h(H)}),(0,d.jsx)("li",{style:W,children:u(H)}),(0,d.jsxs)("li",{style:W,children:["id: ",s]}),(0,d.jsxs)("li",{style:W,children:["type: ",c]}),(0,d.jsxs)("li",{style:W,children:["Fuel Consumption: ",f]}),(0,d.jsxs)("li",{style:W,children:["Engine Size: ",M]})]}),(0,d.jsx)("p",{style:z,children:x})]}),(0,d.jsxs)("div",{style:R,children:[(0,d.jsx)("h4",{style:F,children:"Accessories and functionalities:"}),(0,d.jsx)("ul",{style:B,children:D&&D.map((function(t){return(0,d.jsx)("li",{style:Z,children:t})}))})]}),(0,d.jsxs)("div",{style:_,children:[(0,d.jsx)("h4",{style:I,children:"Rental Conditions: "}),(0,d.jsxs)("ul",{style:P,children:[(e=q,e.split("\n")).map((function(t,e){return t.includes(":")?(0,d.jsxs)("li",{style:E,children:[" ",t.split(":")[0],": ",(0,d.jsx)("span",{style:A,children:t.split(":")[1]})," "]},e):(0,d.jsx)("li",{style:E,children:t},e)})),(0,d.jsxs)("li",{style:E,children:["Mileage: ",(0,d.jsx)("span",{style:A,children:J})]}),(0,d.jsxs)("li",{style:E,children:["Price: ",(0,d.jsx)("span",{style:A,children:G})]})]})]}),(0,d.jsx)("button",{style:L,children:"Rental car"})]})})},g={padding:"15px",height:"100vh",width:"100vw",backgroundColor:"rgba(1, 1, 1, 0.4)",position:"fixed",top:"0",left:"0",zIndex:"40",display:"flex",alignItems:"center",justifyContent:"center",transform:"scale(0)"},y={padding:"15px",height:"100vh",width:"100vw",backgroundColor:"rgba(1, 1, 1, 0.8)",position:"fixed",top:"0",left:"0",zIndex:"40",display:"flex",alignItems:"center",justifyContent:"center",transform:"scale(1)"},m={maxHeight:"752px",maxWidth:"542px",width:"542px",backgroundColor:"white",borderRadius:"20px",padding:"40px",position:"relative"},j={width:"462px",height:"248px",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",marginBottom:"14px"},v={position:"absolute",width:"12px",height:"12px",top:"15px",right:"25px",color:"black"},w={width:"462px"},b={margin:"0"},k={minWidth:"30px",color:"black",fontSize:"18px",fontWeight:"400",marginBottom:"8px"},S={minWidth:"30px",color:"rgba(52, 112, 255, 1)",fontSize:"18px",fontWeight:"400"},C={display:"flex",listStyle:"none",gap:"6px",padding:"0px",margin:"0",flexWrap:"wrap",fontSize:"12px",marginBottom:"14px",fontWeight:"200"},W={borderRight:"0.5px solid black",paddingRight:"6px"},z={fontSize:"12px",fontWeight:"400",marginBottom:"24px"},R={marginBottom:"24px"},F={fontSize:"14px",fontWeight:"400",marginBottom:"8px"},B={display:"flex",listStyle:"none",gap:"6px",padding:"0px",margin:"0",flexWrap:"wrap",fontSize:"12px",marginBottom:"14px",fontWeight:"200"},Z={borderRight:"0.5px solid black",paddingRight:"6px"},_={marginBottom:"24px"},I={fontSize:"14px",fontWeight:"400",marginBottom:"8px"},P={display:"flex",listStyle:"none",gap:"8px",padding:"0px",margin:"0",flexWrap:"wrap",fontSize:"12px",fontWeight:"200"},E={backgroundColor:"#F9F9F9",borderRadius:"35px",padding:"7px 14px"},A={color:"rgba(52, 112, 255, 1)",fontWeight:"400"},L={height:"44px",width:"168px",borderRadius:"12px",border:"none",backgroundColor:"#3470FF",color:"white",fontSize:"14px",fontWeight:"400"},M=function(t){var e=t.cars,i=t.refresh,s=e.id,o=e.year,l=e.make,a=e.model,c=e.type,p=e.img,g=e.accessories,y=e.rentalPrice,m=e.rentalCompany,j=e.address,v=e.favorite,w=(0,r.useState)(!1),b=(0,n.Z)(w,2),k=b[0],S=b[1];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("li",{style:D,children:[(0,d.jsxs)("div",{style:G,children:[(0,d.jsx)(x,{style:H,favorite:v,id:s,refresh:i}),(0,d.jsx)("img",{style:{height:"100%",width:"auto"},src:p,alt:"photo_of_the_car"})]}),(0,d.jsxs)("div",{style:q,children:[(0,d.jsxs)("div",{style:J,children:[(0,d.jsxs)("h2",{style:K,children:[l," ",(0,d.jsx)("span",{style:N,children:a}),", ",o]}),(0,d.jsx)("h2",{style:O,children:y})]}),(0,d.jsxs)("ul",{style:Q,children:[(0,d.jsx)("li",{style:T,children:h(j)}),(0,d.jsx)("li",{style:T,children:u(j)}),(0,d.jsx)("li",{style:T,children:m}),(0,d.jsx)("li",{style:T,children:"Premium"}),(0,d.jsx)("li",{style:T,children:c}),(0,d.jsx)("li",{style:T,children:a}),(0,d.jsx)("li",{style:T,children:s}),(0,d.jsx)("li",{style:U,children:g[2]})]})]}),(0,d.jsx)("button",{style:V,onClick:function(){return S(!0)},children:"Learn more"})]}),(0,d.jsx)(f,{active:k,setActive:S,car:e})]})},D={width:"274px",height:"446px",position:"relative",display:"flex",flexDirection:"column"},G={width:"274px",height:"268px",borderRadius:"14px",overflow:"auto",display:"flex",justifyContent:"center",marginBottom:"14px"},H={position:"absolute",top:"14px",right:"14px",color:"white",cursor:"pointer",zIndex:"20"},q={display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"8px",flexGrow:"1"},J={width:"265px",height:"24px",display:"flex",alignItems:"center",justifyContent:"space-between",flexGrow:"1",color:"white",margin:"0"},K={minWidth:"30px",color:"white",fontSize:"18px",fontWeight:"200"},N={minWidth:"30px",color:"rgba(52, 112, 255, 1)",fontSize:"18px",fontWeight:"200"},O={minWidth:"30px",color:"white",fontSize:"18px",fontWeight:"200"},Q={width:"265px",height:"40px",marginBottom:"28px",display:"flex",alignItems:"center",flexWrap:"wrap",listStyle:"none",padding:"0px",gap:"10px",color:"white",fontSize:"12px"},T={fontSize:"12px",color:"white",borderRight:"0.5px solid white",paddingRight:"10px"},U={fontSize:"12px",color:"white",borderRight:"none",paddingRight:"10px"},V={width:"274px",height:"44px",backgroundColor:"#3470FF",color:"white",borderRadius:"12px",border:"none"}}}]);
//# sourceMappingURL=358.65a39e8a.chunk.js.map