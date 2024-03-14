(()=>{var e={};e.id=851,e.ids=[851],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},68899:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>d,routeModule:()=>m,tree:()=>c});var s=r(50482),a=r(69108),o=r(62563),n=r.n(o),i=r(68300),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let c=["",{children:["(pages)",{children:["accesorios",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,78944)),"/home/mendozalz/Escritorio/GitHub/cms-headless-nextjs-wordpress/app/(pages)/accesorios/page.js"]}]},{}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,96433)),"/home/mendozalz/Escritorio/GitHub/cms-headless-nextjs-wordpress/app/layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"]}],d=["/home/mendozalz/Escritorio/GitHub/cms-headless-nextjs-wordpress/app/(pages)/accesorios/page.js"],p="/(pages)/accesorios/page",u={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(pages)/accesorios/page",pathname:"/accesorios",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},40577:(e,t,r)=>{Promise.resolve().then(r.bind(r,82066)),Promise.resolve().then(r.bind(r,72644))},72644:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var s=r(95344),a=r(3729),o=r(93065),n=r(68258);let i=()=>s.jsx("div",{className:"max-w-full animate-pulse h-[38px] flex justify-center items-center",children:s.jsx(n.Typography,{as:"div",variant:"h1",className:"h-3 w-[90%] lg:w-[28%]  rounded-full bg-gray-100/50 m-auto",children:"\xa0"})});var l=r(70854);let c=({marquee:e,ocultar:t})=>(0,s.jsxs)("div",{className:"banner-marquee text-white relative h-[38px] flex justify-between items-center overflow-x-hidden motion-safe:overflow-x-hidden pause-animations-on-children-on-hover",style:{backgroundColor:e.background},children:[s.jsx("div",{className:"w-[28%] flex justify-end"}),s.jsx("div",{className:"lg:w-[90%] overflow-x-hidden relative marquee-banner",children:(0,s.jsxs)("div",{className:"animate-marquee whitespace-nowrap motion-safe:animate:marquee",children:[s.jsx("span",{className:"text-[14px] mx-4",children:e.titleMarquee}),s.jsx("span",{className:"text-[14px] mx-4",children:e.titleMarquee}),s.jsx("span",{className:"text-[14px] mx-4",children:e.titleMarquee}),s.jsx("span",{className:"text-[14px] mx-4",children:e.titleMarquee}),s.jsx("span",{className:"text-[14px] mx-4",children:e.titleMarquee})]})}),s.jsx("div",{className:"w-[28%] flex justify-end",children:s.jsx("button",{onClick:t,"aria-label":"Dismiss",className:"rounded-lg bg-black/10 p-1 transition hover:bg-black/20 mr-[50px] hidden lg:block",children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})})]}),d=()=>{let[e,t]=(0,a.useState)([]),[r,n]=(0,a.useState)(!0),d=(0,a.useRef)(),[p,u]=(0,l.u)();return(0,a.useEffect)(()=>{(async()=>{try{let e=await (0,o.Eg)();t(e[2].node.banner),n(!1)}catch(e){console.error("Error fetching banner data:",e),n(!1)}})()},[]),s.jsx("div",{ref:d,className:"bg-black text-white",children:s.jsx("div",{ref:p,children:r?s.jsx(i,{}):s.jsx(c,{marquee:e,ocultar:e=>{d.current.style.visibility="hidden"}})})})}},93065:(e,t,r)=>{"use strict";r.d(t,{Eg:()=>n,ss:()=>l,zJ:()=>i});let s=async e=>{let t=await fetch(`https://test.mincaelectric.com/graphql?query=${encodeURIComponent(e)}`,{method:"GET",headers:{"Content-Type":"application/json"}}),{data:r}=await t.json();return r},a=async e=>{let t=await fetch(`https://test.mincaelectric.com/graphql?query=${encodeURIComponent(e)}`,{method:"GET",headers:{"Content-Type":"application/json"}}),{data:r}=await t.json();return r.sliderProducts},o=async e=>{let t=await fetch(`https://test.mincaelectric.com/graphql?query=${encodeURIComponent(e)}`,{method:"GET",headers:{"Content-Type":"application/json"},cache:"no-store"}),{data:r}=await t.json();return r.sliderProductsSec.edges},n=async()=>{let e=`
  query Banner {
    banner {
      edges {
        node {
          banner {
            nombreBannerNegrita
            titleMarquee
            background
            titleBanner
            videoBannerPc {
              altText
              id
              mediaItemUrl
              mediaItemId
            }
          }
        }
      }
    }
  }
    `;try{let{banner:t}=await s(e);return t.edges.map(e=>e)}catch(e){throw console.error("Error fetching banner:",e),Error("Error fetching banner")}},i=async()=>{let e=`
        query Scooter {
          sliderProducts(where: {orderby: {field: NAME_IN, order: ASC}}) {
            edges {
              node {
                sliderProductos {
                  ampere
                  bateria
                  description
                  descuento
                  distancia
                  fieldGroupName
                  kg
                  km
                  kmh
                  llanta
                  motor
                  nombreProducto
                  peso
                  pesoMaximo
                  precioActual
                  precioRebajado
                  pulgadas
                  slogan
                  subtitulo
                  tipo
                  tipoAutonomia
                  tipoBrushless
                  vatios
                  velocidadMaxima
                  velocidadNum
                  frenos
                  tipofrenos
                  imagen {
                    altText
                    sourceUrl
                    id
                  }
                  frenosNulo
                  pesoSc
                  tpeso
                  kgPesoScooter
                  tipoRodamiento
                }
                contentType {
                  node {
                    id
                  }
                }
              }
            }
          }
        }
    `;try{return await a(e)}catch(e){throw console.error("Error fetching scooters:",e),Error("Error fetching scooters")}},l=async()=>{let e=`
        query Scootersecs {
          sliderProductsSec {
            edges {
              node {
                sliderProductos {
                  nombreProducto
                  ampere
                  bateria
                  description
                  descuento
                  distancia
                  fieldGroupName
                  frenos
                  frenosNulo
                  imagen {
                    altText
                    id
                    sourceUrl
                  }
                  kg
                  kgPesoScooter
                  km
                  kmh
                  llanta
                  motor
                  peso
                  pesoMaximo
                  pesoSc
                  precioActual
                  precioRebajado
                  pulgadas
                  slogan
                  subtitulo
                  tipo
                  tipoAutonomia
                  tipoBrushless
                  tipoRodamiento
                  tipofrenos
                  tpeso
                  vatios
                  velocidadMaxima
                  velocidadNum
                }
              }
            }
          }
        }
    `;try{return await o(e)}catch(e){throw console.error("Error fetching scooters:",e),Error("Error fetching scooters")}};(async e=>{let t=`
        query GetEntradas {
          posts(where: {id: 395}) {
            nodes {
              postId
              slug
              entradas {
                campoTexto
                subtitulo
              }
              title
              featuredImage {
                node {
                  altText
                  mediaItemUrl
                }
              }
              categories {
                edges {
                  node {
                    name
                  }
                }
              }
              dateGmt
              
            }
          }
        }
  `;try{let e=await s(t);return console.log(e),e}catch(e){throw console.error("Error fetching Entradas:",e),Error("Error fetching Entradas")}})(0)},78944:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ProductosPage:()=>o,default:()=>n});var s=r(25036),a=r(7445);let o=()=>s.jsx(s.Fragment,{children:s.jsx(a.t,{titulo:"Accesorios"})}),n=o},55480:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>n});let s=(0,r(86843).createProxy)(String.raw`/home/mendozalz/Escritorio/GitHub/cms-headless-nextjs-wordpress/app/components/home/MostarMarquee.jsx`),{__esModule:a,$$typeof:o}=s,n=s.default},7445:(e,t,r)=>{"use strict";r.d(t,{t:()=>d});var s=r(25036),a=r(18027),o=r(55480),n=r(14295),i=r.n(n),l=r(16014),c=r.n(l);let d=async({titulo:e,tituloNegrita:t,ocultar:r})=>(0,s.jsxs)("div",{children:[s.jsx(o.ZP,{}),s.jsx(a.h,{}),(0,s.jsxs)("div",{className:"p-4 lg:px-12",children:[(0,s.jsxs)("h1",{className:`${i().className} antialiased text-[40px] lg:text-[64px] 2xl:text-[96px] text-[#111] leading-[50px] lg:flex lg:tracking-wide	lg:font-light lg:mt-[77px] uppercase lg:leading-[45px]`,children:[e,s.jsx("br",{}),s.jsx("b",{className:"lg:font-bold lg:ml-6 uppercase",children:t})]}),s.jsx("p",{className:`${c().className} antialiased text-[#111]/60 leading-[20px] max-w-[263px] my-[20px] lg:mt-9 lg:font-normal lg:text-[24px] 2xl:text-[32px] lg:leading-[34px] lg:max-w-[700px] lg:text-[#42454A] lg:tracking-wide`,children:"Mu\xe9vete sostenible, con estilo y eficiencia. Mu\xe9vete con Minca."}),s.jsx("hr",{className:`border border-0.5 border-solid border-[#42454A] mt-[52px] ${r}`})]})]})}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,708,662,120,736],()=>r(68899));module.exports=s})();