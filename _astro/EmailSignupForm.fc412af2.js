import{r as t}from"./index.ed373d49.js";import{h as x}from"./http.82ebf0f1.js";import{j as e}from"./jsx-runtime.391947bd.js";import"./jwt.f0e0aa9c.js";const j=()=>{const[a,c]=t.useState(""),[s,d]=t.useState(""),[o,p]=t.useState(""),[l,n]=t.useState(""),[i,u]=t.useState(!1),g=async r=>{r.preventDefault(),u(!0),n("");const{response:f,error:m}=await x("https://api.roadmap.sh/v1-register",{email:a,password:s,name:o});if(m||f?.status!=="ok"){u(!1),n(m?.message||"Something went wrong. Please try again later.");return}window.location.href=`/verification-pending?email=${encodeURIComponent(a)}`};return e.jsxs("form",{className:"flex w-full flex-col gap-2",onSubmit:g,children:[e.jsx("label",{htmlFor:"name",className:"sr-only",children:"Name"}),e.jsx("input",{name:"name",type:"text",autoComplete:"name",min:3,max:50,required:!0,className:"block w-full rounded-lg border border-gray-300 px-3 py-2 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"Full Name",value:o,onInput:r=>p(String(r.target.value))}),e.jsx("label",{htmlFor:"email",className:"sr-only",children:"Email address"}),e.jsx("input",{name:"email",type:"email",autoComplete:"email",required:!0,className:"block w-full rounded-lg border border-gray-300 px-3 py-2  outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"Email Address",value:a,onInput:r=>c(String(r.target.value))}),e.jsx("label",{htmlFor:"password",className:"sr-only",children:"Password"}),e.jsx("input",{name:"password",type:"password",autoComplete:"current-password",min:6,max:50,required:!0,className:"block w-full rounded-lg border border-gray-300 px-3 py-2 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"Password",value:s,onInput:r=>d(String(r.target.value))}),l&&e.jsxs("p",{className:"rounded-lg bg-red-100 p-2 text-red-700",children:[l,"."]}),e.jsx("button",{type:"submit",disabled:i,className:"inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400",children:i?"Please wait...":"Continue to Verify Email"})]})};export{j as default};
