export const fetchGraphQL = async (query) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(
      query
    )}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    },
    /* { next: { revalidate: 300 } } */
  );

  const { data } = await res.json();

  return data;
};


const fetchScooters = async (query) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(
      query
    )}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
/*       cache: "no-store", */
    }
  );

  const { data } = await res.json();
  return data.sliderProducts;
};

const fetchScootersSec = async (query) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(
      query
    )}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  const { data } = await res.json();
  return data.sliderProductsSec.edges;
};

// Banner Marquee

export const getBanner = async () => {
  const query = `
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
    `;

  try {
    const { banner } = await fetchGraphQL(query);
    return banner.edges.map((node) => node);
  } catch (error) {
    console.error("Error fetching banner:", error);
    throw new Error("Error fetching banner"); // Propagación del error para manejo en getStaticProps
  }
};


/* Clientes Aliados */

export const ClientesAliadosQuery = async () => {
  const query = `
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
    `;

  try {
    const banner = await fetchGraphQL(query);
    const consultaBanner = banner.clientesAliados.nodes;
    
    return consultaBanner;
  } catch (error) {
    console.error("Error fetching banner:", error);
    throw new Error("Error fetching banner"); 
  }
};


// Hero

export const getHero = async () => {
  const query = `
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

    `;

  try {
    const hero = await fetchGraphQL(query);

    return hero.pages.edges;
  } catch (error) {
    console.error("Error fetching hero:", error);
    throw new Error("Error fetching hero");
  }
};

// Slider-carrusel productos

export const Scooters = async () => {
  const query = `
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
    `;

  try {
    const scooters = await fetchScooters(query);

    return scooters;
  } catch (error) {
    console.error("Error fetching scooters:", error);
    throw new Error("Error fetching scooters");
  }
};

// Single de Productos

export const SingleProductos = async (name) => {
  const query = `
        query SingleProductos {
          sliderProducts(where: {name: "${name}"}) {
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
                  foto1 {
                    altText
                    sourceUrl
                  }
                  foto2 {
                    mediaItemUrl
                    altText
                  }
                  foto3 {
                    altText
                    mediaItemUrl
                  }
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
    `;

  try {
    const scooters = await  fetchScooters(query);

    return scooters;
  } catch (error) {
    console.error("Error fetching singleProductos:", error);
    
  }
};

// Single de Productos directo de Woocommerce

export const SingleProductosWoocommerce = async (name) => {
  const query = `
        query SingleProductos {
          productTypes {
            nodes {
              products(where: {search: "${name}"}) {
                nodes {
                  sliderProductos {
                    nombreProducto
                    ampere
                    bateria
                    description
                    descuento
                    distancia
                    foto1 {
                      altText
                      mediaItemUrl
                    }
                    foto2 {
                      altText
                      mediaItemUrl
                    }
                    foto3 {
                      altText
                      mediaItemUrl
                    }
                    frenos
                    frenosNulo
                    imagen {
                      altText
                      mediaItemUrl
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
                  title
                  productId
                }
              }
            }
          }
        }
    `;

  try {
    const scooters = await  fetchGraphQL(query);
    console.log(scooters);
    return scooters;
  } catch (error) {
    console.error("Error fetching singleProductos:", error);
    
  }
};

SingleProductosWoocommerce('Minca 800W')

// Slider-carrusel productos secundario

export const Ebikes = async () => {
  const query = `
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
            foto1 {
              altText
              mediaItemUrl
            }
            foto2 {
              altText
              mediaItemUrl
            }
            foto3 {
              altText
              mediaItemUrl
            }
          }
        }
      }
    }
  }
    `;

  try {
    const Ebikes = await fetchScootersSec(query);
    return Ebikes;
  } catch (error) {
    console.error("Error fetching scooters:", error);
    throw new Error("Error fetching scooters");
  }
};


/* Testimonios */

export const TestimoniosQuery = async () => {
  const query = `
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
    `;

  try {
    const testimonios = await fetchGraphQL(query);
    return testimonios;
  } catch (error) {
    console.error("Error fetching testimonio:", error);
    throw new Error("Error fetching testimonio");
  }
};


/* Consulta de prueba de productos */

export const ProductosWoocommerce = async () => {
  const query = `
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
    `;

  try {
    const productos = await fetchGraphQL(query);
    console.log(productos);
    return productos
  } catch (error) {
    console.error("Error fetching productosPrueba:", error);
    throw new Error("Error fetching productosPrueba");
  }
};


/* Entradas */

export const Entradas = async () => {
  const query = `
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
    `;

  try {
    const entradas = await fetchGraphQL(query);
    return entradas
  } catch (error) {
    console.error("Error fetching Entradas:", error);
    throw new Error("Error fetching Entradas");
  }
};

/*  Single POST */

export const SinglePost = async (id) => {
  const query = `
        query GetEntradas {
          posts(where: {id: ${id}}) {
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
  `;

  try {
    const entradas = await fetchGraphQL(query);
  
    return entradas;
  } catch (error) {
    console.error("Error fetching Entradas:", error);
    throw new Error("Error fetching Entradas");
  }
};

