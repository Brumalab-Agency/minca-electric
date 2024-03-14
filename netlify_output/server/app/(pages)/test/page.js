(()=>{var e={};e.id=467,e.ids=[467],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},70612:e=>{"use strict";e.exports=require("node:os")},97742:e=>{"use strict";e.exports=require("node:process")},25997:e=>{"use strict";e.exports=require("node:tty")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},74894:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>l,routeModule:()=>m,tree:()=>d});var s=r(50482),o=r(69108),a=r(62563),n=r.n(a),i=r(68300),c={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>i[e]);r.d(t,c);let d=["",{children:["(pages)",{children:["test",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,42854)),"/home/mendozalz/Escritorio/GitHub/cms-headless-nextjs-wordpress/app/(pages)/test/page.js"]}]},{}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,96433)),"/home/mendozalz/Escritorio/GitHub/cms-headless-nextjs-wordpress/app/layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"]}],l=["/home/mendozalz/Escritorio/GitHub/cms-headless-nextjs-wordpress/app/(pages)/test/page.js"],u="/(pages)/test/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/(pages)/test/page",pathname:"/test",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},79908:(e,t,r)=>{Promise.resolve().then(r.bind(r,75688)),Promise.resolve().then(r.bind(r,82066)),Promise.resolve().then(r.t.bind(r,61476,23))},75688:(e,t,r)=>{"use strict";r.r(t),r.d(t,{AddToCart:()=>l,default:()=>u});var s=r(95344),o=r(12739),a=r(3729),n=r(23533),i=r(56506),c=r(34132),d=r.n(c);let l=({producto:e})=>{let[t,r]=(0,a.useContext)(n.AppContext),[c,l]=(0,a.useState)(!1),[u,p]=(0,a.useState)(!1),m=d()("duration-500 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow",{"bg-white hover:bg-gray-100":!u,"bg-gray-200":u});return(0,s.jsxs)(s.Fragment,{children:[s.jsx("button",{className:m,onClick:()=>(0,o.Xq)(e?.databaseId??0,1,r,l,p),disabled:u,children:u?"Agregando...":"Agregar al carrito"}),c&&!u?s.jsx(i.default,{href:"/productos",className:"inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500",onClick:()=>(0,o.Xq)(e.databaseId??0),children:"Ver carrito"}):null]})},u=l},12739:(e,t,r)=>{"use strict";r.d(t,{Xq:()=>p,LL:()=>g,GR:()=>h});var s=r(90078),o=r.n(s);let a=e=>{if(o()(e))return null;localStorage.setItem("x-wc-session",e)},n=()=>localStorage.getItem("x-wc-session"),i=()=>{let e={headers:{"X-Headless-CMS":!0}},t=n();return o()(t)||(e.headers["x-wc-session"]=t),e};var c=r(53608),d=r(853),l=r(71166),u=r.n(l);let p=(e,t=1,r,s,l)=>{let u=n(),p=i();l(!0),c.Z.post(d.Qw,{product_id:e,quantity:t},p).then(e=>{o()(u)&&a(e?.headers?.["x-wc-session"]),s(!0),l(!1),m(r)}).catch(e=>{console.log("err",e)})},m=(e,t=()=>{})=>{let r=i();c.Z.get(d.Qw,r).then(r=>{e(x(r?.data??[])),t(!1)}).catch(e=>{console.log("err",e),t(!1)})},h=(e,t,r)=>{let s=i();r(!0),c.Z.delete(`${d.Qw}${e}`,s).then(e=>{m(t,r)}).catch(e=>{console.log("err",e),r(!1)})},g=async(e,t)=>{t(!0);let r=i();try{await c.Z.delete(d.Qw,r),m(e,t)}catch(e){console.log("err",e),t(!1)}},x=e=>{if(!e.length)return null;let t=y(e||[]);return{cartItems:e||[],...t}},y=e=>{let t={totalQty:0,totalPrice:0};return u()(e)&&e?.length&&e.forEach((e,r)=>{t.totalQty+=e?.quantity??0,t.totalPrice+=e?.line_total??0}),t}},853:(e,t,r)=>{"use strict";r.d(t,{Qw:()=>s,yd:()=>o});let s="https://test.mincaelectric.com/wp-json/rae/v1/cart/items/",o="https://test.mincaelectric.com/wp-json/rae/v1/wc/states"},42854:(e,t,r)=>{"use strict";r.r(t),r.d(t,{TestProduct:()=>m,default:()=>h});var s=r(25036),o=r(18027),a=r(16274),n=r(86843);let i=(0,n.createProxy)(String.raw`/home/mendozalz/Escritorio/GitHub/cms-headless-nextjs-wordpress/app/components/cart/AddToCart.js`),{__esModule:c,$$typeof:d}=i,l=i.default;(0,n.createProxy)(String.raw`/home/mendozalz/Escritorio/GitHub/cms-headless-nextjs-wordpress/app/components/cart/AddToCart.js#AddToCart`);let u=({item:e,img:t})=>{let r=e?.type??"";return(0,s.jsxs)("div",{children:[(0,s.jsxs)(a.default,{href:`/producto/${e.slug}`,className:"overflow-hidden rounded-lg shadow transition hover:shadow-lg",children:[s.jsx("img",{alt:"",src:t.mediaItemUrl,className:"h-56 w-full object-cover"}),s.jsx("div",{className:"bg-white p-4 sm:p-6",children:s.jsx("h3",{className:"mt-0.5 text-lg text-gray-900",children:e.name})})]}),"SIMPLE"===r?s.jsx(l,{producto:e}):null]},t.id)};var p=r(34807);let m=async()=>{let e=(await (0,p.O1)()).products.nodes;return(0,s.jsxs)("div",{children:[s.jsx(o.h,{}),s.jsx("div",{className:"grid grid-cols-5 gap-4 p-10",children:e.map(e=>{let t=e.image;return s.jsx(u,{img:t,item:e})})})]})},h=m},34807:(e,t,r)=>{"use strict";r.d(t,{Eg:()=>a,O1:()=>l,P5:()=>d,UX:()=>u,VJ:()=>n,X1:()=>p,cK:()=>i,zJ:()=>c});let s=async e=>{let t=await fetch(`https://test.mincaelectric.com/graphql?query=${encodeURIComponent(e)}`,{method:"GET",headers:{"Content-Type":"application/json"}}),{data:r}=await t.json();return r},o=async e=>{let t=await fetch(`https://test.mincaelectric.com/graphql?query=${encodeURIComponent(e)}`,{method:"GET",headers:{"Content-Type":"application/json"}}),{data:r}=await t.json();return r.sliderProducts},a=async()=>{let e=`
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
    `;try{let{banner:t}=await s(e);return t.edges.map(e=>e)}catch(e){throw console.error("Error fetching banner:",e),Error("Error fetching banner")}},n=async()=>{let e=`
  query ClientesAliados {
    clientesAliados(first:100) {
      nodes {
        clientesAliados {
          clientesaliado {
            mediaItemUrl
            mediaItemId
            altText
          }
        }
      }
    }
  }
    `;try{return(await s(e)).clientesAliados.nodes}catch(e){throw console.error("Error fetching banner:",e),Error("Error fetching banner")}},i=async()=>{let e=`
        query Hero {
          pages {
              edges {
                  node {
                      hero {
                          ancla1
                          ancla2
                          subTitulo
                          subTitulo2
                          titulo
                          tituloNegrita
                      }
                  }
              }
          }
      }

    `;try{return(await s(e)).pages.edges}catch(e){throw console.error("Error fetching hero:",e),Error("Error fetching hero")}},c=async()=>{let e=`
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
    `;try{return await o(e)}catch(e){throw console.error("Error fetching scooters:",e),Error("Error fetching scooters")}},d=async()=>{let e=`
  query Testimonios {
    testimonios(first: 30) {
      nodes {
        testimonio {
          comentario
          nombreDeCliente
          rate
        }
        testimonioId
      }
    }
  }
    `;try{return await s(e)}catch(e){throw console.error("Error fetching testimonio:",e),Error("Error fetching testimonio")}},l=async()=>{let e=`
        query Productos {
          products {
            nodes {
              type
              name
              databaseId
              slug
              image {
                mediaItemUrl
              }
              
            }
          }
        }
    `;try{return await s(e)}catch(e){throw console.error("Error fetching productosPrueba:",e),Error("Error fetching productosPrueba")}},u=async()=>{let e=`
  query Entradas {
    posts {
      nodes {
        guid
        postId
        slug
        entradas {
          campoTexto
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
    `;try{return await s(e)}catch(e){throw console.error("Error fetching Entradas:",e),Error("Error fetching Entradas")}},p=async e=>{let t=`
        query GetEntradas {
          posts(where: {id: ${e}}) {
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
  `;try{let e=await s(t);return console.log(e),e}catch(e){throw console.error("Error fetching Entradas:",e),Error("Error fetching Entradas")}};p(395)},16274:(e,t,r)=>{"use strict";r.d(t,{default:()=>o.a});var s=r(48026),o=r.n(s)},48026:(e,t,r)=>{"use strict";let{createProxy:s}=r(86843);e.exports=s("/home/mendozalz/Escritorio/GitHub/cms-headless-nextjs-wordpress/node_modules/next/dist/client/link.js")}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,708,662,608,78,736],()=>r(74894));module.exports=s})();