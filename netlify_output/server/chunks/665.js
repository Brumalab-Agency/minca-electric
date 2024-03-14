"use strict";exports.id=665,exports.ids=[665],exports.modules={72644:(e,a,t)=>{t.r(a),t.d(a,{default:()=>d});var s=t(95344),l=t(3729),i=t(93065),r=t(68258);let n=()=>s.jsx("div",{className:"max-w-full animate-pulse h-[38px] flex justify-center items-center",children:s.jsx(r.Typography,{as:"div",variant:"h1",className:"h-3 w-[90%] lg:w-[28%]  rounded-full bg-gray-100/50 m-auto",children:"\xa0"})});var c=t(70854);let o=({marquee:e,ocultar:a})=>(0,s.jsxs)("div",{className:"banner-marquee text-white relative h-[38px] flex justify-between items-center overflow-x-hidden motion-safe:overflow-x-hidden pause-animations-on-children-on-hover",style:{backgroundColor:e.background},children:[s.jsx("div",{className:"w-[28%] flex justify-end"}),s.jsx("div",{className:"lg:w-[90%] overflow-x-hidden relative marquee-banner",children:(0,s.jsxs)("div",{className:"animate-marquee whitespace-nowrap motion-safe:animate:marquee",children:[s.jsx("span",{className:"text-[14px] mx-4",children:e.titleMarquee}),s.jsx("span",{className:"text-[14px] mx-4",children:e.titleMarquee}),s.jsx("span",{className:"text-[14px] mx-4",children:e.titleMarquee}),s.jsx("span",{className:"text-[14px] mx-4",children:e.titleMarquee}),s.jsx("span",{className:"text-[14px] mx-4",children:e.titleMarquee})]})}),s.jsx("div",{className:"w-[28%] flex justify-end",children:s.jsx("button",{onClick:a,"aria-label":"Dismiss",className:"rounded-lg bg-black/10 p-1 transition hover:bg-black/20 mr-[50px] hidden lg:block",children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})})]}),d=()=>{let[e,a]=(0,l.useState)([]),[t,r]=(0,l.useState)(!0),d=(0,l.useRef)(),[x,m]=(0,c.u)();return(0,l.useEffect)(()=>{(async()=>{try{let e=await (0,i.Eg)();a(e[2].node.banner),r(!1)}catch(e){console.error("Error fetching banner data:",e),r(!1)}})()},[]),s.jsx("div",{ref:d,className:"bg-black text-white",children:s.jsx("div",{ref:x,children:t?s.jsx(n,{}):s.jsx(o,{marquee:e,ocultar:e=>{d.current.style.visibility="hidden"}})})})}},93065:(e,a,t)=>{t.d(a,{Eg:()=>r,ss:()=>c,zJ:()=>n});let s=async e=>{let a=await fetch(`https://test.mincaelectric.com/graphql?query=${encodeURIComponent(e)}`,{method:"GET",headers:{"Content-Type":"application/json"}}),{data:t}=await a.json();return t},l=async e=>{let a=await fetch(`https://test.mincaelectric.com/graphql?query=${encodeURIComponent(e)}`,{method:"GET",headers:{"Content-Type":"application/json"}}),{data:t}=await a.json();return t.sliderProducts},i=async e=>{let a=await fetch(`https://test.mincaelectric.com/graphql?query=${encodeURIComponent(e)}`,{method:"GET",headers:{"Content-Type":"application/json"},cache:"no-store"}),{data:t}=await a.json();return t.sliderProductsSec.edges},r=async()=>{let e=`
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
    `;try{let{banner:a}=await s(e);return a.edges.map(e=>e)}catch(e){throw console.error("Error fetching banner:",e),Error("Error fetching banner")}},n=async()=>{let e=`
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
    `;try{return await l(e)}catch(e){throw console.error("Error fetching scooters:",e),Error("Error fetching scooters")}},c=async()=>{let e=`
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
    `;try{return await i(e)}catch(e){throw console.error("Error fetching scooters:",e),Error("Error fetching scooters")}};(async e=>{let a=`
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
  `;try{let e=await s(a);return console.log(e),e}catch(e){throw console.error("Error fetching Entradas:",e),Error("Error fetching Entradas")}})(0)},70592:(e,a,t)=>{t.d(a,{$:()=>o});var s=t(25036),l=t(2813),i=t(16014),r=t.n(i),n=t(14295),c=t.n(n);let o=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"bg-[#111] p-4 lg:p-10",children:[(0,s.jsxs)("div",{className:"bg-white w-auto lg:w-full h-auto p-5 pb-2 lg:px-10 lg:py-8 mt-[52px] rounded-[9px] relative",children:[(0,s.jsxs)("div",{className:"footer-principal lg:flex justify-between",children:[(0,s.jsxs)("div",{className:"logo-footer-pc lg:w-[248px] lg:h-auto",children:[s.jsx(l.default,{className:"mt-4",src:"/imagotipo-negro.png",width:59,height:62,alt:"imagotipo",placeholder:"empty"}),s.jsx("p",{className:`${r().className} antialiased text-[#111]/60 text-[14px] font-normal mt-[37px]`,children:"Menos humo, m\xe1s estilo. Adel\xe1ntate al futuro con una movilidad el\xe9ctrica."}),(0,s.jsxs)("div",{className:"redes-sociales flex items-center justify-start gap-2 mt-2",children:[s.jsx("div",{children:s.jsx("img",{src:"/redesSociales/instagram.png",alt:"redes sociales"})}),s.jsx("div",{children:s.jsx("img",{src:"/redesSociales/facebook.png",alt:"redes sociales"})})]})]}),(0,s.jsxs)("div",{className:"informacion flex justify-between",children:[s.jsx("div",{className:"info-minca-pc lg:w-[99px] lg:h-auto",children:(0,s.jsxs)("div",{className:"informacion-minca leading-[45px]",children:[s.jsx("h2",{className:`${c().className} antialiased text-[#111] text-[16px] font-bold mt-[32px]`,children:"MINCA"}),s.jsx("p",{className:`${r().className} antialiased text-[#111]/60 text-[16px] font-normal`,children:"Minca 350W"}),s.jsx("p",{className:`${r().className} antialiased text-[#111]/60 text-[16px] font-normal`,children:"Minca 500W"}),s.jsx("p",{className:`${r().className} antialiased text-[#111]/60 text-[16px] font-normal`,children:"Minca 800W"}),s.jsx("p",{className:`${r().className} antialiased text-[#111]/60 text-[16px] font-normal`,children:"Minca 1600W"}),s.jsx("p",{className:`${r().className} antialiased text-[#111]/60 text-[16px] font-normal`,children:"Minca City"}),s.jsx("p",{className:`${r().className} antialiased text-[#111]/60 text-[16px] font-normal`,children:"Minca Trip"})]})}),s.jsx("div",{className:"info-informacion-pc lg:hidden",children:(0,s.jsxs)("div",{className:"informacion-minca leading-[45px]",children:[s.jsx("h2",{className:`${c().className} antialiased text-[#111] text-[16px] font-bold mt-[32px]`,children:"INFORMACI\xd3N"}),s.jsx("p",{className:`${r().className} antialiased text-[#111]/60 text-[16px] font-normal`,children:"Pol\xedtica de devoluciones"}),s.jsx("p",{className:`${r().className} antialiased text-[#111]/60 text-[16px] font-normal`,children:"Declaraci\xf3n de privacidad"}),s.jsx("p",{className:`${r().className} antialiased text-[#111]/60 text-[16px] font-normal`,children:"T\xe9rminos y condiciones"}),(0,s.jsxs)("p",{className:`${r().className} antialiased text-[#111]/60 text-[16px] font-normal`,children:["Pol\xedtica de garant\xeda"," "]}),s.jsx("p",{className:`${r().className} antialiased text-[#111]/60 text-[16px] font-normal`,children:"PQR"})]})})]}),s.jsx("div",{children:s.jsx("div",{className:"hidden lg:flex info-informacion-pc lg:w-[189px] lg:h-auto",children:(0,s.jsxs)("div",{className:"informacion-minca leading-[45px]",children:[s.jsx("h2",{className:`${c().className} antialiased text-[#111] text-[16px] font-bold mt-[32px]`,children:"INFORMACI\xd3N"}),s.jsx("p",{className:`${r().className} antialiased text-[#111]/60 text-[16px] font-normal`,children:"Pol\xedtica de devoluciones"}),s.jsx("p",{className:`${r().className} antialiased text-[#111]/60 text-[16px] font-normal`,children:"Declaraci\xf3n de privacidad"}),s.jsx("p",{className:`${r().className} antialiased text-[#111]/60 text-[16px] font-normal`,children:"T\xe9rminos y condiciones"}),(0,s.jsxs)("p",{className:`${r().className} antialiased text-[#111]/60 text-[16px] font-normal`,children:["Pol\xedtica de garant\xeda"," "]}),s.jsx("p",{className:`${r().className} antialiased text-[#111]/60 text-[16px] font-normal`,children:"PQR"})]})})}),(0,s.jsxs)("div",{className:"informacion flex justify-between",children:[s.jsx("div",{className:"info-menu-pc lg:w-[154px] lg:h-auto",children:(0,s.jsxs)("div",{className:"informacion-minca leading-[45px]",children:[s.jsx("h2",{className:`${c().className} antialiased text-[#111] text-[16px] font-bold mt-[20px]`,children:"MEN\xda"}),s.jsx("p",{className:`${r().className} antialiased text-[#111]/60 text-[16px] font-normal`,children:"Accesorios"}),s.jsx("p",{className:`${r().className} antialiased text-[#111]/60 text-[16px] font-normal`,children:"Servicio t\xe9cnico"}),s.jsx("p",{className:`${r().className} antialiased text-[#111]/60 text-[16px] font-normal`,children:"Sedes"}),s.jsx("p",{className:`${r().className} antialiased text-[#111]/60 text-[16px] font-normal`,children:"Recursos"}),s.jsx("p",{className:`${r().className} antialiased text-[#111]/60 text-[16px] font-normal`,children:"Blog"})]})}),s.jsx("div",{className:"informacion-minca leading-[45px]"})]}),(0,s.jsxs)("div",{className:"agendar-footer-pc",children:[s.jsx("div",{className:"flex justify-end",children:s.jsx("button",{className:`${r().className} antialiased bg-[#111] rounded-[8px] px-[16px] py-[8px] text-white text-[14px] font-bold`,children:"\xa1Agendar Test Drive!"})}),(0,s.jsxs)("div",{className:"text-right mt-4",children:[s.jsx("p",{className:`${r().className} antialiased text-[#111] text-[12px] font-bold`,children:"+57 322 2102466"}),s.jsx("p",{className:`${r().className} antialiased text-[#111] text-[12px] font-bold`,children:"info@mincaelectric.com"})]})]}),s.jsx("hr",{className:"lg:hidden border border-0.5 border-solid border-[#111]/10 my-[15px] w-full absolute bottom-[4.2%] left-0 right-0"}),s.jsx("div",{className:"card-tdc flex justify-center items-center mt-4 lg:hidden ",children:s.jsx(l.default,{placeholder:"empty",src:"/card_tdc.png",width:281,height:42,alt:"Imagen representativa de caracteristicas del producto"})})]}),(0,s.jsxs)("div",{className:"hidden lg:flex justify-between items-center footer-secundario mt-[96px]",children:[s.jsx("div",{className:"card-tdc flex items-center",children:s.jsx(l.default,{placeholder:"empty",src:"/card_tdc.png",width:281,height:30,alt:"Imagen representativa de caracteristicas del producto"})}),s.jsx("div",{className:"flex justify-start items-center w-full",children:(0,s.jsxs)("div",{className:`${r().className} antialiased text-[#1B1819] font-medium text-[12px] flex gap-4 justify-start items-center margin-custom`,children:[s.jsx("p",{children:"INVERSIONES LOGUZ SAS"})," | ",s.jsx("p",{children:"NIT 901127287-1"})," |"," ",s.jsx("p",{children:"CRA 11A # 94A-56 LOCAL 3"})]})}),(0,s.jsxs)("div",{className:"ind-comercio flex justify-between items-center w-[380px]",children:[s.jsx(l.default,{placeholder:"empty",src:"/footer-pc/camara-comercio.png",width:143,height:30,alt:"Imagen representativa de caracteristicas del producto"}),s.jsx("img",{src:"/footer-pc/slash.png",alt:"slah"}),s.jsx(l.default,{placeholder:"empty",src:"/footer-pc/Comercio Seguro.png",width:55,height:29,alt:"Imagen representativa de caracteristicas del producto"})]})]})]}),(0,s.jsxs)("div",{className:"next-footer flex lg:mt-[40px]",children:[s.jsx("div",{className:"w-[663px]",children:s.jsx("h2",{className:`${c().className} antialiased font-normal text-[25px] mt-4 lg:mt-0 leading-[35px] lg:w-[663px] lg:h-[80px] lg:text-[40px] lg:leading-[42px] text-white`,children:"\xa1Experimenta la emocionante revoluci\xf3n de la movilidad el\xe9ctrica!"})}),(0,s.jsxs)("div",{className:"hidden email lg:flex grow flex-col ml-4 lg:h-[80px]",children:[s.jsx("p",{className:"font-normal text-[14px] text-[#FFF]",children:"Suscr\xedbete para conocer nuestras novedades y descuentos"}),(0,s.jsxs)("label",{htmlFor:"UserEmail",className:"hidden lg:block overflow-hidden border border-white rounded-[12px] px-3 shadow-sm focus-within:border-white-600 focus-within:ring-1 focus-within:ring-white-600 h-[56px] mt-1 relative",children:[(0,s.jsxs)("span",{className:"text-xs font-normal text-[#FFF] text-[10px] uppercase",children:[" ","Your email"," "]}),s.jsx("img",{className:"absolute right-4 top-6",src:"/footer-pc/Vector.png",alt:"arrow-right"}),s.jsx("input",{type:"email",id:"UserEmail",placeholder:"@",className:"w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-white"})]})]})]})]}),(0,s.jsxs)("div",{className:"bg-[#111] w-full h-[78px] flex flex-col justify-center lg:flex-row lg:items-center lg:justify-between lg:px-12 text-white",children:[(0,s.jsxs)("p",{className:"text-[12px] text-center",children:["\xa9 2024 Minca Electric | Todos los derechos reservados."," "]}),(0,s.jsxs)("p",{className:"text-[10px] text-center mt-1",children:["Dise\xf1o Web ",s.jsx("b",{children:"Brumalab"})]})]})]})},55480:(e,a,t)=>{t.d(a,{ZP:()=>r});let s=(0,t(86843).createProxy)(String.raw`/home/mendozalz/Escritorio/GitHub/cms-headless-nextjs-wordpress/app/components/home/MostarMarquee.jsx`),{__esModule:l,$$typeof:i}=s,r=s.default}};