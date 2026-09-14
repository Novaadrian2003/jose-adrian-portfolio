import SlideShow from "@/components/slide-show";
import ProjectVideo from "@/components/project-video";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({
  live,
  repo,
}: {
  live?: string;
  repo?: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener noreferrer"
          target="_blank"
          href={live}
        >
          <Button variant="default" size="sm">
            Ver proyecto
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}

      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener noreferrer"
          target="_blank"
          href={repo}
        >
          <Button variant="default" size="sm">
            GitHub
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const SkillBadge = ({ title }: { title: string }) => (
  <span className="text-xs font-mono border rounded-md px-2 py-1">
    {title}
  </span>
);

const PROJECT_SKILLS = {
  shopify: {
    title: "Shopify",
    bg: "black",
    fg: "white",
    icon: <SkillBadge title="Shopify" />,
  },

  liquid: {
    title: "Liquid",
    bg: "black",
    fg: "white",
    icon: <SkillBadge title="Liquid" />,
  },

  html: {
    title: "HTML",
    bg: "black",
    fg: "white",
    icon: <SkillBadge title="HTML" />,
  },

  css: {
    title: "CSS",
    bg: "black",
    fg: "white",
    icon: <SkillBadge title="CSS" />,
  },

  javascript: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SkillBadge title="JavaScript" />,
  },

  react: {
    title: "React",
    bg: "black",
    fg: "white",
    icon: <SkillBadge title="React" />,
  },

  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SkillBadge title="Python" />,
  },

  powerbi: {
    title: "Power BI",
    bg: "black",
    fg: "white",
    icon: <SkillBadge title="Power BI" />,
  },

  analytics: {
    title: "Analytics",
    bg: "black",
    fg: "white",
    icon: <SkillBadge title="Analytics" />,
  },

  seo: {
    title: "SEO",
    bg: "black",
    fg: "white",
    icon: <SkillBadge title="SEO" />,
  },

  uxui: {
    title: "UX/UI",
    bg: "black",
    fg: "white",
    icon: <SkillBadge title="UX/UI" />,
  },

  figma: {
    title: "Figma",
    bg: "black",
    fg: "white",
    icon: <SkillBadge title="Figma" />,
  },

  responsive: {
    title: "Responsive Design",
    bg: "black",
    fg: "white",
    icon: <SkillBadge title="Responsive Design" />,
  },

  ecommerce: {
    title: "E-commerce",
    bg: "black",
    fg: "white",
    icon: <SkillBadge title="E-commerce" />,
  },

  customCode: {
    title: "Código personalizado",
    bg: "black",
    fg: "white",
    icon: <SkillBadge title="Código personalizado" />,
  },

  maintenance: {
    title: "Mantenimiento Web",
    bg: "black",
    fg: "white",
    icon: <SkillBadge title="Mantenimiento Web" />,
  },

  integrations: {
    title: "Integraciones",
    bg: "black",
    fg: "white",
    icon: <SkillBadge title="Integraciones" />,
  },

  conversion: {
    title: "Optimización de conversión",
    bg: "black",
    fg: "white",
    icon: <SkillBadge title="Conversión" />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: {
    frontend: Skill[];
    backend: Skill[];
  };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "femme-beauty",
    category: "E-commerce",
    title: "Femme Beauty — E-commerce",
    src: `${BASE_PATH}/femme-beauty/landing.png`,
    screenshots: ["landing.png", "catalog.png", "product.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ecommerce,
        PROJECT_SKILLS.uxui,
        PROJECT_SKILLS.responsive,
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.javascript,
      ],
      backend: [
        PROJECT_SKILLS.customCode,
        PROJECT_SKILLS.seo,
        PROJECT_SKILLS.analytics,
        PROJECT_SKILLS.maintenance,
      ],
    },
    live: "https://tiendafemmebeauty.com/",

    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Desarrollo, administración y optimización de un e-commerce
            especializado en productos de belleza.
          </TypographyP>

          <TypographyP className="font-mono">
            Femme Beauty es uno de mis principales proyectos profesionales.
            Participé en el desarrollo y evolución de la tienda online,
            trabajando en la estructura del catálogo, organización de
            productos, contenido, experiencia de usuario y mantenimiento de la
            plataforma.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <ProjectVideo src="/assets/projects-videos/femme-beauty.mp4" />

          <TypographyH3 className="my-4 mt-8">
            Desarrollo y experiencia de usuario
          </TypographyH3>

          <p className="font-mono mb-4">
            Trabajo enfocado en construir una experiencia de compra clara,
            responsive y orientada al usuario, cuidando la presentación de los
            productos, navegación, categorías y elementos comerciales.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/femme-beauty/landing.png`,
              `${BASE_PATH}/femme-beauty/catalog.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            Catálogo y productos
          </TypographyH3>

          <p className="font-mono mb-4">
            Administración y organización del catálogo digital, incluyendo
            productos, categorías, información comercial, imágenes y estructura
            de navegación.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/femme-beauty/product.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            E-commerce y optimización
          </TypographyH3>

          <p className="font-mono mb-2">
            El proyecto integra desarrollo web, e-commerce, diseño de
            interfaces, mantenimiento, optimización de la experiencia de compra
            y gestión de una tienda digital.
          </p>
        </div>
      );
    },
  },

  {
    id: "ruufe",
    category: "Shopify E-commerce",
    title: "Ruufe — International E-commerce",
    src: `${BASE_PATH}/ruufe/landing.png`,
    screenshots: ["landing.png", "products.png", "product.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.shopify,
        PROJECT_SKILLS.uxui,
        PROJECT_SKILLS.responsive,
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
      ],
      backend: [
        PROJECT_SKILLS.ecommerce,
        PROJECT_SKILLS.maintenance,
        PROJECT_SKILLS.integrations,
        PROJECT_SKILLS.conversion,
      ],
    },
    live: "https://www.ruufe.com/en/collections/newest-products",

    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Administración y optimización de un e-commerce internacional
            desarrollado sobre Shopify.
          </TypographyP>

          <TypographyP className="font-mono">
            En Ruufe trabajé directamente con Shopify para profundizar en la
            administración y configuración de una tienda e-commerce de alcance
            internacional. La experiencia me permitió conocer con mayor
            profundidad el funcionamiento de Shopify y sus diferentes
            herramientas.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Administración de Shopify
          </TypographyH3>

          <p className="font-mono mb-4">
            Configuración y carga de productos, organización del catálogo,
            administración de la tienda, mantenimiento y actualización de
            contenidos dentro de Shopify.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/ruufe/landing.png`,
              `${BASE_PATH}/ruufe/products.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            Diseño y mantenimiento
          </TypographyH3>

          <p className="font-mono mb-4">
            Participación en tareas de diseño, mantenimiento de la interfaz y
            ajustes necesarios para mantener una experiencia de usuario
            consistente y funcional.
          </p>

          <SlideShow
            images={[`${BASE_PATH}/ruufe/product.png`]}
          />

          <TypographyH3 className="my-4 mt-8">
            Integraciones y optimización
          </TypographyH3>

          <p className="font-mono mb-2">
            Trabajo con integraciones y diferentes configuraciones de Shopify,
            además de optimizaciones relacionadas con la experiencia de compra
            y conversión. Las actividades de marketing fueron gestionadas por
            el equipo correspondiente.
          </p>
        </div>
      );
    },
  },

  {
    id: "nube-rosa",
    category: "Shopify",
    title: "Nube Rosa — Shopify",
    src: `${BASE_PATH}/nube-rosa/landing.png`,
    screenshots: ["landing.png", "products.png", "mobile.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.shopify,
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.javascript,
        PROJECT_SKILLS.uxui,
      ],
      backend: [
        PROJECT_SKILLS.ecommerce,
        PROJECT_SKILLS.customCode,
        PROJECT_SKILLS.integrations,
        PROJECT_SKILLS.maintenance,
      ],
    },
    live: "https://www.nuberosa.com/",

    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Diseño, implementación y mantenimiento de una tienda e-commerce
            desarrollada con Shopify.
          </TypographyP>

          <TypographyP className="font-mono">
            En Nube Rosa participé en el diseño y construcción de la tienda
            utilizando Shopify, además de realizar labores de administración y
            mantenimiento del sitio web.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Diseño e implementación
          </TypographyH3>

          <p className="font-mono mb-4">
            Trabajo sobre la estructura visual y experiencia de usuario de la
            tienda, utilizando Shopify como plataforma principal para la
            implementación del e-commerce.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/nube-rosa/landing.png`,
              `${BASE_PATH}/nube-rosa/products.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            Administración y mantenimiento
          </TypographyH3>

          <p className="font-mono mb-4">
            Administración del sitio, mantenimiento de contenidos y realización
            de ajustes necesarios para conservar el correcto funcionamiento de
            la tienda.
          </p>

          <SlideShow
            images={[`${BASE_PATH}/nube-rosa/mobile.png`]}
          />

          <TypographyH3 className="my-4 mt-8">
            Optimización de integraciones
          </TypographyH3>

          <p className="font-mono mb-2">
            Revisión y limpieza de integraciones que no eran necesarias para la
            operación de la tienda, buscando reducir elementos innecesarios y
            mantener una implementación más organizada. También trabajé con
            código personalizado dentro de Shopify.
          </p>
        </div>
      );
    },
  },

  {
    id: "libur",
    category: "E-commerce Design",
    title: "Libur — E-commerce & Product Design",
    src: `${BASE_PATH}/libur/landing.png`,
    screenshots: ["landing.png", "products.png", "product.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ecommerce,
        PROJECT_SKILLS.uxui,
        PROJECT_SKILLS.figma,
        PROJECT_SKILLS.responsive,
      ],
      backend: [
        PROJECT_SKILLS.shopify,
        PROJECT_SKILLS.customCode,
        PROJECT_SKILLS.maintenance,
      ],
    },
    live: "https://libur.com.co/",

    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Diseño y creación de contenido visual para un e-commerce de moda.
          </TypographyP>

          <TypographyP className="font-mono">
            Durante aproximadamente dos a tres meses trabajé en Libur,
            principalmente en tareas relacionadas con diseño y presentación
            visual del e-commerce.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Diseño de productos
          </TypographyH3>

          <p className="font-mono mb-4">
            Participé en la creación y diseño de numerosas imágenes utilizadas
            para presentar productos del catálogo, incluyendo categorías como
            gorras, ropa, calzado y diferentes marcas.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/libur/landing.png`,
              `${BASE_PATH}/libur/products.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            Figma y contenido visual
          </TypographyH3>

          <p className="font-mono mb-4">
            Utilicé Figma como herramienta principal para desarrollar piezas
            visuales y preparar material gráfico orientado a la presentación de
            productos dentro del sitio web.
          </p>

          <SlideShow
            images={[`${BASE_PATH}/libur/product.png`]}
          />

          <TypographyH3 className="my-4 mt-8">
            Código personalizado
          </TypographyH3>

          <p className="font-mono mb-2">
            Además del trabajo de diseño, participé en ajustes mediante código
            personalizado para adaptar elementos de la experiencia digital a
            las necesidades del proyecto.
          </p>
        </div>
      );
    },
  },

  {
    id: "shopify-development",
    category: "Shopify",
    title: "Shopify — Custom Development",
    src: `${BASE_PATH}/shopify-store/landing.png`,
    screenshots: ["landing.png", "product.png", "collection.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.shopify,
        PROJECT_SKILLS.liquid,
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.javascript,
      ],
      backend: [
        PROJECT_SKILLS.ecommerce,
        PROJECT_SKILLS.customCode,
        PROJECT_SKILLS.seo,
      ],
    },
    live: "#",

    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Desarrollo y personalización de tiendas e-commerce utilizando
            Shopify.
          </TypographyP>

          <TypographyP className="font-mono">
            Proyecto demostrativo que reúne conocimientos adquiridos trabajando
            con diferentes tiendas Shopify, incluyendo personalización de
            interfaces, código personalizado, estructura de productos y
            experiencia de usuario.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Desarrollo personalizado
          </TypographyH3>

          <p className="font-mono mb-4">
            Uso de Liquid, HTML, CSS y JavaScript para realizar modificaciones
            y personalizaciones dentro del entorno Shopify.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/shopify-store/landing.png`,
              `${BASE_PATH}/shopify-store/collection.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            E-commerce
          </TypographyH3>

          <p className="font-mono mb-4">
            Aplicación de conocimientos de catálogo, navegación, productos,
            responsive design y experiencia de compra para construir tiendas
            digitales funcionales.
          </p>

          <SlideShow
            images={[`${BASE_PATH}/shopify-store/product.png`]}
          />
        </div>
      );
    },
  },

  {
    id: "vulnerability-auditor",
    category: "Cybersecurity",
    title: "Vulnerability Auditor & Asset Management",
    src: `${BASE_PATH}/cybersecurity/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.python],
      backend: [PROJECT_SKILLS.python],
    },
    live: "#",

    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Herramienta para auditoría de vulnerabilidades y gestión de
            activos tecnológicos.
          </TypographyP>

          <TypographyP className="font-mono">
            Proyecto desarrollado para aplicar conocimientos de Python,
            seguridad informática y automatización en procesos de identificación
            y análisis de activos.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Auditoría de activos
          </TypographyH3>

          <p className="font-mono mb-4">
            Desarrollo de funcionalidades orientadas a identificar servicios y
            recopilar información técnica para apoyar procesos de auditoría.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/cybersecurity/landing.png`,
            ]}
          />
        </div>
      );
    },
  },

  {
    id: "document-organizer-ai",
    category: "Artificial Intelligence",
    title: "Smart Document Organizer",
    src: `${BASE_PATH}/ai-documents/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.python],
      backend: [PROJECT_SKILLS.python],
    },
    live: "#",

    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Organizador inteligente de documentos mediante clasificación
            automatizada.
          </TypographyP>

          <TypographyP className="font-mono">
            Proyecto enfocado en automatizar la organización de documentos
            digitales utilizando procesamiento de lenguaje natural y
            herramientas de programación.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Automatización documental
          </TypographyH3>

          <p className="font-mono mb-4">
            Desarrollo de una solución para clasificar y organizar archivos
            digitales, aplicando técnicas de procesamiento de información y
            automatización.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/ai-documents/landing.png`,
            ]}
          />
        </div>
      );
    },
  },
];

export default projects;