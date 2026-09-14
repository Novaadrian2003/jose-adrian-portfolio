const config = {
  title: "José Adrián Velásquez | E-commerce Expert & Full-Stack Developer",

  description: {
    long: "Portafolio de José Adrián Velásquez, Ingeniero de Sistemas especializado en Arquitectura E-commerce, Shopify, Dropshipping y desarrollo web Full-Stack. Transformo ideas en tiendas online de alto rendimiento enfocadas en la conversión (CRO) y el crecimiento digital.",
    short:
      "Ingeniero de Sistemas experto en desarrollo de E-commerce, Shopify, Dropshipping y plataformas web de alta conversión.",
  },

  keywords: [
    "José Adrián Velásquez",
    "José Adrián",
    "Ingeniero de Sistemas",
    "E-commerce Expert",
    "Shopify Developer",
    "Dropshipping",
    "Optimización CRO",
    "Full-Stack Developer",
    "Desarrollo Web",
    "Tienda Online",
    "Next.js",
    "React",
    "TypeScript",
    "Meta Ads",
    "Embudos de venta",
    "Tailwind CSS",
    "Colombia",
    "Portafolio",
  ],

  author: "José Adrián Velásquez",
  email: "adrianjurado529@gmail.com",

  site: "http://localhost:3000",

  githubUsername: "Novaadrian2003",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },

  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/adrianvsystems", // Agregado desde tu hoja de vida
    instagram: "https://www.instagram.com/adrianvelasquez3312/",
    facebook: "",
    github: "https://github.com/Novaadrian2003",
  },
};

export { config };