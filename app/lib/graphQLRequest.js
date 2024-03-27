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
    /* { next: { revalidate: 60 } } */
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
      cache: "no-store",
    },
    /* { next: { revalidate: 60 } } */
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
    },
    /* { next: { revalidate: 60 } } */
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
                  slugDinamicoTemporal
                  url3d
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
Scooters()

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
                  videoBannerArchivo {
                    mediaItemUrl
                  }
                  url3d
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

// Minca City

export const MincaCity = async (name) => {
  const query = `
        query MincaCity {
          products(where: {category: "Ebike", search: "${name}"}) {
            edges {
              node {
                ... on VariableProduct {
                  name
                  databaseId
                  name
                  description(format: RAW)
                  image {
                    altText
                    mediaItemUrl
                  }
                  sliderProductosEbikes {
                    ampere
                    bateria
                    description
                    descuento
                    distancia
                    fieldGroupName
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
                    kg
                    kgPesoScooter
                    km
                    kmh
                    llanta
                    motor
                    nombreProducto
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
                  price(format: RAW)
                  regularPrice(format: RAW)
                  variations {
                    nodes {
                      price(format: RAW)
                      salePrice(format: RAW)
                      name
                      databaseId
                    }
                  }
                  galleryImages {
                    nodes {
                      altText
                      mediaItemUrl
                    }
                  }
                }
              }
            }
          }
        }
    `;

  try {
    const MincaCity = await fetchGraphQL(query);
    return MincaCity;
  } catch (error) {
    console.error("Error fetching mincaCity:", error);
    throw new Error("Error fetching mincaCity");
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
                  title
                  databaseId
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
                }
              }
            }
          }
        }
    `;

  try {
    const scooters = await  fetchGraphQL(query);
    return scooters;
  } catch (error) {
    console.error("Error fetching singleProductos:", error);
    
  }
};


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


/* Consulta de prueba de productos SIMPLE */

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

/* Consulta de prueba de productos VARIABLES*/

export const ProductosWoocommerceVariable = async () => {
  const query = `
        query ProductosVariables {
          products(where: {type: VARIABLE}) {
            nodes {
              name
              databaseId
              image {
                mediaItemUrl
                altText
              }
              ... on VariableProduct {
                id
                type
                name
                price(format: RAW)
                regularPrice(format: RAW)
                galleryImages {
                  nodes {
                    altText
                    mediaItemUrl
                  }
                }
                variations {
                  nodes {
                    price(format: RAW)
                    salePrice
                    regularPrice
                    name
                    databaseId
                    description
                    image {
                      mediaItemUrl
                      altText
                    }
                    attributes {
                      nodes {
                        name
                        label
                        value
                      }
                    }
                  }
                }
              }
            }
          }
        }
    `;

  try {
    const productosVariables = await fetchGraphQL(query);
    return productosVariables
  } catch (error) {
    console.error("Error fetching productosVariables:", error);
    throw new Error("Error fetching productosVariables");
  }
};


/* Entradas */

export const Entradas = async () => {
  const query = `
        query Entradas {
          posts {
            nodes {
              databaseId
              dateGmt
              title
              content
              featuredImage {
                node {
                  altText
                  mediaItemUrl
                }
              }
              categories {
                nodes {
                  name
                }
              }
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
        query SinglePosts {
          posts(where: {id: ${id}}) {
            nodes {
              databaseId
              dateGmt
              slug
              title
              content(format: RENDERED)
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

/* Accesorios */

export const AccesoriosWoocommerce = async (name) => {
  const query = `
        query Accesorios {
          products(where: { search: "${name}"}) {
            nodes {
              name
              type
              description(format: RAW)
              ... on SimpleProduct {
                name
                productId
                price(format: RAW)
                image {
                  altText
                  mediaItemUrl
                }
                galleryImages {
                  nodes {
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
    const accesorios = await fetchGraphQL(query);
    return accesorios;
  } catch (error) {
    console.error("Error fetching accesorios:", error);
    throw new Error("Error fetching accesorios");
  }
};
AccesoriosWoocommerce("Casco")

/* Accesorios Page*/

export const AccesoriosPage = async () => {
  const query = `
        query Accesorios {
          products(where: {category: "accesorios"}) {
            nodes {
              name
              image {
                altText
                mediaItemUrl
              }
              description(format: RAW)
              ... on SimpleProduct {
                id
                name
                price(format: RAW)
                image {
                  altText
                  mediaItemUrl
                }
              }
              ... on VariableProduct {
                id
                name
                price(format: RAW)
              }
            }
          }
        }
    `;

  try {
    const accesorios = await fetchGraphQL(query);
    return accesorios;
  } catch (error) {
    console.error("Error fetching accesorios:", error);
    throw new Error("Error fetching accesorios");
  }
};
AccesoriosPage()