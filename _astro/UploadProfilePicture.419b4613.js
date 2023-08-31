import{a as v,T as j}from"./jwt.f0e0aa9c.js";import{r as l}from"./index.ed373d49.js";import{j as e}from"./jsx-runtime.391947bd.js";function y(i){return new Promise(a=>{const n=new Image;n.onload=()=>{a({width:n.width,height:n.height})},n.onerror=()=>{a({width:0,height:0})},n.src=URL.createObjectURL(i)})}async function N(i){const a=await y(i);return a.width>3e3||a.height>3e3?"Image dimensions are too big. Maximum 3000x3000 pixels.":a.width<100||a.height<100?"Image dimensions are too small. Minimum 100x100 pixels.":i.size>1024*1024?"Image size is too big. Maximum 1MB.":null}function O(i){const{avatarUrl:a,teamId:n,type:b,isDisabled:o=!1}=i,[t,g]=l.useState(null),[p,d]=l.useState(""),[c,f]=l.useState(!1),m=l.useRef(null),x=async u=>{d("");const r=u.target.files?.[0];if(!r)return;const s=await N(r);if(s){d(s);return}g(Object.assign(r,{preview:URL.createObjectURL(r)}))},w=async u=>{if(u.preventDefault(),d(""),f(!0),!t)return;const r=new FormData;r.append("name","avatar"),r.append("avatar",t);let s;if(b==="avatar"?s=await fetch("https://api.roadmap.sh/v1-upload-profile-picture",{method:"POST",body:r,credentials:"include"}):s=await fetch(`https://api.roadmap.sh/v1-upload-team-logo/${n}`,{method:"POST",body:r,credentials:"include"}),s.ok){window.location.reload();return}const h=await s.json();d(h?.message||"Something went wrong"),f(!1),h.status===401&&(v.remove(j),window.location.reload())};return l.useEffect(()=>()=>{t&&URL.revokeObjectURL(t.preview)},[t]),e.jsxs("form",{onSubmit:w,encType:"multipart/form-data",className:"flex flex-col gap-2",children:[i.label&&e.jsx("label",{htmlFor:"avatar",className:"text-sm leading-none text-slate-500",children:i.label}),e.jsxs("div",{className:"mb-2 mt-2 flex items-center gap-2",children:[e.jsxs("label",{htmlFor:"avatar",title:"Change profile picture",className:"relative cursor-pointer",children:[e.jsx("div",{className:"relative block h-24 w-24 items-center overflow-hidden rounded-full",children:e.jsx("img",{className:"absolute inset-0 h-full w-full bg-gray-100 object-cover text-sm leading-8 text-red-700",src:t?.preview||a,alt:t?.name??"Error!",loading:"lazy",decoding:"async",onLoad:()=>t&&URL.revokeObjectURL(t.preview)})}),!t&&!o&&e.jsx("button",{disabled:o,type:"button",className:"absolute bottom-1 right-0 rounded bg-gray-600 px-2 py-1 text-xs leading-none text-gray-50 ring-2 ring-white",onClick:()=>{c||m.current?.click()},children:"Edit"})]}),e.jsx("input",{disabled:o,ref:m,id:"avatar",type:"file",name:"avatar",accept:"image/png, image/jpeg, image/jpg, image/pjpeg",className:"hidden",onChange:x}),t&&e.jsxs("div",{className:"ml-5 flex items-center gap-2",children:[e.jsx("button",{type:"button",onClick:()=>{g(null),m.current?.value&&(m.current.value="")},className:"flex h-9 min-w-[96px] items-center justify-center rounded-md border border-red-300 bg-red-100 text-sm font-medium text-red-700 disabled:cursor-not-allowed disabled:opacity-60",disabled:c||o,children:"Cancel"}),e.jsx("button",{type:"submit",className:"flex h-9 min-w-[96px] items-center justify-center rounded-md border border-gray-300 text-sm font-medium text-black disabled:cursor-not-allowed disabled:opacity-60",disabled:c||o,children:c?"Uploading..":"Upload"})]})]}),p&&e.jsx("p",{className:"mt-2 rounded-lg bg-red-100 p-2 text-red-700",children:p})]})}export{O as U};
