import{g as E,a as B,k as L,s as C,c as p,_ as x,b as Y,r as u,u as I,d as U,j as e,e as z,f as A,T as W}from"./index-a8563cc5.js";import{L as F,A as K,D as T,I as O,d as G,T as H,P as J,a as V,b as Z,c as $,e as i,f as q,g as M,B as Q}from"./sharedConstants-9976c7cb.js";function X(s){return E("MuiCircularProgress",s)}B("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const ee=["className","color","disableShrink","size","style","thickness","value","variant"];let v=s=>s,w,N,_,R;const o=44,se=L(w||(w=v`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),re=L(N||(N=v`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),ae=s=>{const{classes:r,variant:t,color:n,disableShrink:l}=s,c={root:["root",t,`color${p(n)}`],svg:["svg"],circle:["circle",`circle${p(t)}`,l&&"circleDisableShrink"]};return A(c,X,r)},te=C("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(s,r)=>{const{ownerState:t}=s;return[r.root,r[t.variant],r[`color${p(t.color)}`]]}})(({ownerState:s,theme:r})=>x({display:"inline-block"},s.variant==="determinate"&&{transition:r.transitions.create("transform")},s.color!=="inherit"&&{color:(r.vars||r).palette[s.color].main}),({ownerState:s})=>s.variant==="indeterminate"&&Y(_||(_=v`
      animation: ${0} 1.4s linear infinite;
    `),se)),ie=C("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(s,r)=>r.svg})({display:"block"}),oe=C("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(s,r)=>{const{ownerState:t}=s;return[r.circle,r[`circle${p(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})(({ownerState:s,theme:r})=>x({stroke:"currentColor"},s.variant==="determinate"&&{transition:r.transitions.create("stroke-dashoffset")},s.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:s})=>s.variant==="indeterminate"&&!s.disableShrink&&Y(R||(R=v`
      animation: ${0} 1.4s ease-in-out infinite;
    `),re)),ne=u.forwardRef(function(r,t){const n=I({props:r,name:"MuiCircularProgress"}),{className:l,color:c="primary",disableShrink:f=!1,size:d=40,style:j,thickness:h=3.6,value:a=0,variant:m="indeterminate"}=n,b=U(n,ee),g=x({},n,{color:c,disableShrink:f,size:d,thickness:h,value:a,variant:m}),y=ae(g),k={},S={},D={};if(m==="determinate"){const P=2*Math.PI*((o-h)/2);k.strokeDasharray=P.toFixed(3),D["aria-valuenow"]=Math.round(a),k.strokeDashoffset=`${((100-a)/100*P).toFixed(3)}px`,S.transform="rotate(-90deg)"}return e.jsx(te,x({className:z(y.root,l),style:x({width:d,height:d},S,j),ownerState:g,ref:t,role:"progressbar"},D,b,{children:e.jsx(ie,{className:y.svg,ownerState:g,viewBox:`${o/2} ${o/2} ${o} ${o}`,children:e.jsx(oe,{className:y.circle,style:k,ownerState:g,cx:o,cy:o,r:(o-h)/2,fill:"none",strokeWidth:h})})}))}),le=ne,he=()=>{const[s,r]=u.useState(null),[t,n]=u.useState(null),[l,c]=u.useState([]),[f,d]=u.useState(!1),j=async(a,m)=>(await fetch(`${Q}tramos`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fechainicial:a,fechafinal:m})})).json(),h=async()=>{if(s&&t){c([]),d(!0);const a=await j(M(s).format("YYYY-MM-DD"),M(t).format("YYYY-MM-DD"));c(a),d(!1)}};return e.jsx(F,{dateAdapter:K,children:e.jsxs("div",{className:"w-full min-h-screen p-4 flex flex-col gap-4",children:[e.jsx("div",{className:"w-full",children:e.jsx(W,{variant:"h6",children:"Tramos"})}),e.jsxs("div",{className:"w-full flex flex-row gap-4",children:[e.jsx(T,{label:"Start Date",value:s,onChange:a=>r(a)}),e.jsx(T,{label:"End Date",value:t,onChange:a=>n(a)}),e.jsx("div",{className:"flex flex-col justify-center items-center",children:e.jsx(O,{"aria-label":"search",onClick:()=>h(),disabled:!s||!t||f,children:e.jsx(G,{})})})]}),f&&e.jsx(le,{}),!!l.length&&e.jsx("div",{className:"w-full",children:e.jsx(H,{component:J,children:e.jsxs(V,{sx:{minWidth:650},"aria-label":"simple table",children:[e.jsx(Z,{children:e.jsxs($,{children:[e.jsx(i,{children:"Linea (100g serving)"}),e.jsx(i,{align:"right",children:"Consumo"}),e.jsx(i,{align:"right",children:"Perdidas"}),e.jsx(i,{align:"right",children:"Costo"})]})}),e.jsx(q,{children:l.map(a=>e.jsxs($,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(i,{component:"th",scope:"row",children:a.Linea}),e.jsx(i,{align:"right",children:a.consumo}),e.jsx(i,{align:"right",children:a.perdidas}),e.jsx(i,{align:"right",children:a.costo})]},a.Linea))})]})})})]})})};export{he as default};
