(()=>{var e={};e.id=377,e.ids=[377],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},3174:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>p,pages:()=>c,routeModule:()=>x,tree:()=>d});var s=r(50482),a=r(69108),o=r(62563),n=r.n(o),i=r(68300),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let d=["",{children:["(pages)",{children:["blog",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,63671)),"/home/mendozalz/Escritorio/GitHub/cms-headless-nextjs-wordpress/app/(pages)/blog/page.js"]}]},{}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,96433)),"/home/mendozalz/Escritorio/GitHub/cms-headless-nextjs-wordpress/app/layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"]}],c=["/home/mendozalz/Escritorio/GitHub/cms-headless-nextjs-wordpress/app/(pages)/blog/page.js"],p="/(pages)/blog/page",m={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(pages)/blog/page",pathname:"/blog",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},63998:(e,t,r)=>{Promise.resolve().then(r.bind(r,82066)),Promise.resolve().then(r.bind(r,72644)),Promise.resolve().then(r.t.bind(r,31900,23)),Promise.resolve().then(r.t.bind(r,61476,23))},63671:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h});var s=r(25036),a=r(14295),o=r.n(a),n=r(16014),i=r.n(n),l=r(73674);let d=({data:e})=>{let t=new Date(e.dateGmt),r=(0,l.WU)(t,"dd 'de' MMMM 'de' yyyy");return(0,s.jsxs)("div",{className:"CardBlog h-auto p-4 border border-1 rounded-[12px] mt-4 mb-[50px] lg:mb-[10px] lg:mt-0",children:[s.jsx("div",{className:`${i().className} badge w-[91px] h-[28px] text-[#111] bg-[#4B6BFB] bg-opacity-5 text-[14px] grid place-items-center`,children:e.categories.edges[0].node.name}),s.jsx("div",{className:`${i().className} titulo text-[24px] text-[#111] font-bold leading-[28px] mt-4`,children:e.titulo}),s.jsx("div",{children:s.jsx("img",{className:"w-full h-[236px] rounded-[6px] mt-4",src:e.featuredImage.node.mediaItemUrl,alt:e.featuredImage.node.altText})}),(0,s.jsxs)("div",{className:"flex items-center gap-4 my-4",children:[s.jsx("img",{className:"h-[33px] w-[30px]",src:"/imagotipo-negro.png",alt:"imagotipo"}),s.jsx("p",{className:`${i().className} text-[16px] text-[#97989F]`,children:e.title}),s.jsx("p",{className:`${i().className} text-[16px] text-[#97989F]`,children:r})]})]},e.id)};var c=r(16274),p=r(34807);let m=async()=>{let e=await (0,p.UX)();console.log(e);let t=e.posts.nodes;return(0,s.jsxs)("div",{className:"TituloBlog mt-[220px] px-1 lg:px-[70px] lg:mt-[80px]",children:[s.jsx("h2",{className:`${o().className} font-semibold text-[24px] text-[#111] mb-[57px] px-4 lg:mb-[32px]`,children:"\xdaltimas publicaciones"}),s.jsx("div",{className:"lg:grid grid-cols-3 gap-6",children:t.map(e=>s.jsx(c.default,{href:`/blog/${e.postId}`,children:s.jsx(d,{data:e})}))}),s.jsx("div",{className:"text-center my-[58px] lg:mt-[32px] lg:mb-[120px]",children:s.jsx("button",{className:` ${i().className} w-[240px] h-[48px] border border-1 border-[#696A75] bg-opacity-30 rounded-[6px] text-[#696A75] text-base font-medium`,children:"Ver todas las publicaciones"})})]})},x=()=>s.jsx("div",{className:"HeroBlog lg:min-h-[710px] mt-[45px]",children:(0,s.jsxs)("div",{className:"relative flex justify-center lg:justify-start",children:[s.jsx("div",{className:"w-full h-[313px] bg-[url(/blog/bg-blog.jpg)] bg-top bg-cover lg:w-[90%] lg:h-[603px] rounded-[12px] m-auto lg:rounded-none"}),(0,s.jsxs)("div",{className:"card-blog w-[90%] h-[273px] bg-white rounded-[12px] p-[40px] absolute bottom-0 top-[60%] shadow-md lg:w-[598px] lg:h-[263px] lg:ml-[192px] lg:top-[75%]",children:[s.jsx("button",{className:` ${i().className} bg-[#111] rounded-[6px] w-[80px] h-[28px] text-white text-[12px] font-medium`,children:"Actualidad"}),s.jsx("h2",{className:`${o().className} font-bold text-[24px] text-[#111] leading-[30px] mt-4 mb-6`,children:"Peajes en Colombia: este ser\xe1 el aumento para el 2024"}),(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[s.jsx("img",{className:"w-[30px] h-[33px]",src:"/imagotipo-negro.png",alt:"imagotipo"}),s.jsx("p",{className:`${i().className} text-[12px] text-[#97989F]`,children:"Minca Electric"}),s.jsx("p",{className:`${i().className} text-[12px] text-[#97989F]`,children:"Enero 05, 2024"})]})]})]})});var g=r(7445),u=r(70592);let h=()=>(0,s.jsxs)(s.Fragment,{children:[s.jsx(g.t,{titulo:"Blog",ocultar:"hidden"}),s.jsx(x,{}),s.jsx(m,{}),s.jsx(u.$,{})]})},7445:(e,t,r)=>{"use strict";r.d(t,{t:()=>c});var s=r(25036),a=r(18027),o=r(55480),n=r(14295),i=r.n(n),l=r(16014),d=r.n(l);let c=async({titulo:e,tituloNegrita:t,ocultar:r})=>(0,s.jsxs)("div",{children:[s.jsx(o.ZP,{}),s.jsx(a.h,{}),(0,s.jsxs)("div",{className:"p-4 lg:px-12",children:[(0,s.jsxs)("h1",{className:`${i().className} antialiased text-[40px] lg:text-[64px] 2xl:text-[96px] text-[#111] leading-[50px] lg:flex lg:tracking-wide	lg:font-light lg:mt-[77px] uppercase lg:leading-[45px]`,children:[e,s.jsx("br",{}),s.jsx("b",{className:"lg:font-bold lg:ml-6 uppercase",children:t})]}),s.jsx("p",{className:`${d().className} antialiased text-[#111]/60 leading-[20px] max-w-[263px] my-[20px] lg:mt-9 lg:font-normal lg:text-[24px] 2xl:text-[32px] lg:leading-[34px] lg:max-w-[700px] lg:text-[#42454A] lg:tracking-wide`,children:"Mu\xe9vete sostenible, con estilo y eficiencia. Mu\xe9vete con Minca."}),s.jsx("hr",{className:`border border-0.5 border-solid border-[#42454A] mt-[52px] ${r}`})]})]})},34807:(e,t,r)=>{"use strict";r.d(t,{Eg:()=>o,O1:()=>c,P5:()=>d,UX:()=>p,VJ:()=>n,X1:()=>m,cK:()=>i,zJ:()=>l});let s=async e=>{let t=await fetch(`https://test.mincaelectric.com/graphql?query=${encodeURIComponent(e)}`,{method:"GET",headers:{"Content-Type":"application/json"}}),{data:r}=await t.json();return r},a=async e=>{let t=await fetch(`https://test.mincaelectric.com/graphql?query=${encodeURIComponent(e)}`,{method:"GET",headers:{"Content-Type":"application/json"}}),{data:r}=await t.json();return r.sliderProducts},o=async()=>{let e=`
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

    `;try{return(await s(e)).pages.edges}catch(e){throw console.error("Error fetching hero:",e),Error("Error fetching hero")}},l=async()=>{let e=`
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
    `;try{return await a(e)}catch(e){throw console.error("Error fetching scooters:",e),Error("Error fetching scooters")}},d=async()=>{let e=`
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
    `;try{return await s(e)}catch(e){throw console.error("Error fetching testimonio:",e),Error("Error fetching testimonio")}},c=async()=>{let e=`
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
    `;try{return await s(e)}catch(e){throw console.error("Error fetching productosPrueba:",e),Error("Error fetching productosPrueba")}},p=async()=>{let e=`
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
    `;try{return await s(e)}catch(e){throw console.error("Error fetching Entradas:",e),Error("Error fetching Entradas")}},m=async e=>{let t=`
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
  `;try{let e=await s(t);return console.log(e),e}catch(e){throw console.error("Error fetching Entradas:",e),Error("Error fetching Entradas")}};m(395)},16274:(e,t,r)=>{"use strict";r.d(t,{default:()=>a.a});var s=r(48026),a=r.n(s)},48026:(e,t,r)=>{"use strict";let{createProxy:s}=r(86843);e.exports=s("/home/mendozalz/Escritorio/GitHub/cms-headless-nextjs-wordpress/node_modules/next/dist/client/link.js")}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,708,662,120,813,674,736,665],()=>r(3174));module.exports=s})();