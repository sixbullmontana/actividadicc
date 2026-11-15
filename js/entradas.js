/*
 * Entradas del blog. Para agregar una, copia un bloque { ... } y cambia sus datos.
 * cat: ia | seg | red | sw | emer | edu
 * tipo: "Wikipedia" o "Blog"
 * dest: true -> aparece en la portada (máximo 4)
 * Los resúmenes están redactados con palabras propias; cada entrada enlaza a su fuente original.
 */
window.ENTRADAS = [
  /* ---------- Blogs y medios tecnológicos ---------- */
  {
    titulo: "México tendrá su propia IA para competir con ChatGPT",
    cat: "ia", tipo: "Blog", fuente: "Xataka México", dest: true,
    url: "https://www.xataka.com.mx/robotica-e-ia/mexico-tendra-su-propia-ia-para-competir-chatgpt-se-presentara-este-ano-para-pelear-nueva-economia-digital",
    resumen: "Nota de Xataka México sobre el anuncio de una inteligencia artificial desarrollada en el país como alternativa a ChatGPT. Invita a pensar qué significa contar con tecnología propia."
  },
  {
    titulo: "Si tu contraseña está en esta lista, tus datos están en peligro",
    cat: "seg", tipo: "Blog", fuente: "Genbeta", dest: true,
    url: "https://www.genbeta.com/seguridad/tu-contrasena-esta-esta-lista-tus-datos-estan-peligro-cuatro-consejos-para-crear-segura",
    resumen: "Genbeta advierte sobre las contraseñas que aparecen en listas de claves expuestas y ofrece cuatro consejos para crear una más segura. Se relaciona con la seguridad de las cuentas."
  },
  {
    titulo: "Realidad aumentada: qué es y en qué se diferencia de la realidad virtual",
    cat: "emer", tipo: "Blog", fuente: "Xataka", dest: true,
    url: "https://www.xataka.com/basics/realidad-aumentada-que-que-se-diferencia-realidad-virtual",
    resumen: "Guía de Xataka para distinguir ambas tecnologías: la aumentada superpone elementos digitales al entorno real y la virtual sumerge a la persona en uno completamente simulado."
  },
  {
    titulo: "Grupo Fórmula usa en México a una presentadora de noticias con inteligencia artificial",
    cat: "ia", tipo: "Blog", fuente: "Xataka México",
    url: "https://www.xataka.com.mx/robotica-e-ia/grupo-formula-usa-mexico-presentadora-noticias-inteligencia-artificial-que-sea-que-eso-signifique",
    resumen: "Xataka México comenta el caso de una presentadora de noticias creada con inteligencia artificial en un medio mexicano; un buen ejemplo para reflexionar sobre IA y comunicación."
  },
  {
    titulo: "Cómo crean y gestionan sus contraseñas los editores de Xataka",
    cat: "seg", tipo: "Blog", fuente: "Xataka",
    url: "https://www.xataka.com/basics/como-crean-gestionan-sus-contrasenas-editores-xataka",
    resumen: "Los editores del medio cuentan cómo crean y administran sus propias claves. Es una lectura práctica sobre hábitos reales de seguridad digital."
  },
  {
    titulo: "Qué es Linux y cómo funciona",
    cat: "sw", tipo: "Blog", fuente: "Genbeta",
    url: "https://www.genbeta.com/a-fondo/que-linux-como-funciona",
    resumen: "Artículo a fondo de Genbeta que explica qué es Linux y cómo funciona; sirve para entender el sistema operativo libre y su ecosistema."
  },
  {
    titulo: "Qué es blockchain: la explicación definitiva para la tecnología más de moda",
    cat: "emer", tipo: "Blog", fuente: "Xataka",
    url: "https://www.xataka.com/especiales/que-es-blockchain-la-explicacion-definitiva-para-la-tecnologia-mas-de-moda",
    resumen: "Especial de Xataka que busca explicar la cadena de bloques de forma accesible, más allá del furor por las criptomonedas."
  },
  {
    titulo: "Realidad virtual y realidad aumentada: diferencias",
    cat: "emer", tipo: "Blog", fuente: "MuyComputer",
    url: "https://www.muycomputer.com/2016/04/06/realidad-virtual-realidad-aumentada-diferencias/",
    resumen: "MuyComputer compara ambas tecnologías y señala qué las distingue en sus usos y en los dispositivos que requieren."
  },
  {
    titulo: "Realidad virtual, aumentada y mixta: todo lo que debes saber",
    cat: "emer", tipo: "Blog", fuente: "MuyComputer",
    url: "https://www.muycomputer.com/2018/07/17/realidad-virtual-realidad-aumentada-y-realidad-mixta-todo-lo-que-debes-saber/",
    resumen: "Repaso de lo esencial para distinguir la realidad virtual, la aumentada y la mixta, tres conceptos que suelen confundirse."
  },
  {
    titulo: "¿Qué es el Internet of Things o Internet de las Cosas?",
    cat: "red", tipo: "Blog", fuente: "Maldita Tecnología",
    url: "https://maldita.es/malditatecnologia/20200312/que-es-el-internet-of-things-o-internet-de-las-cosas/",
    resumen: "Explicación divulgativa de qué es el IoT y cómo funciona, con ejemplos de objetos cotidianos conectados a internet."
  },
  {
    titulo: "Quantum-Safe Networks: seguridad hoy a prueba de futuro",
    cat: "seg", tipo: "Blog", fuente: "Telefónica",
    url: "https://www.telefonica.com/es/sala-comunicacion/blog/quantum-safe-networks-seguridad-hoy-prueba-futuro/",
    resumen: "Entrada del blog de Telefónica sobre redes pensadas para resistir los futuros ordenadores cuánticos y por qué conviene proteger la información desde ahora."
  },
  {
    titulo: "Aplicaciones de la realidad aumentada y de la realidad virtual",
    cat: "emer", tipo: "Blog", fuente: "Telefónica",
    url: "https://www.telefonica.com/es/sala-comunicacion/blog/aplicaciones-realidad-aumentada-realidad-virtual/",
    resumen: "Telefónica repasa distintos campos en los que se aplican la realidad aumentada y la virtual."
  },
  {
    titulo: "7 tendencias tecnológicas relevantes en 2024",
    cat: "emer", tipo: "Blog", fuente: "Telefónica",
    url: "https://www.telefonica.com/es/sala-comunicacion/blog/7-tendencias-tecnologicas-relevantes-en-2024/",
    resumen: "Repaso de siete tendencias que se consideraban relevantes en 2024; sirve como fotografía de lo que se discutía en ese momento."
  },
  {
    titulo: "¿Qué es la computación en la nube? Tipos, ejemplos y beneficios",
    cat: "sw", tipo: "Blog", fuente: "Computer Weekly",
    url: "https://www.computerweekly.com/es/definicion/Computacion-en-la-nube",
    resumen: "Definición en español de la computación en la nube, con sus tipos, ejemplos y beneficios para personas y organizaciones."
  },
  {
    titulo: "Realidad virtual, aumentada y mixta",
    cat: "emer", tipo: "Blog", fuente: "Profesional Review",
    url: "https://www.profesionalreview.com/2023/08/05/realidad-virtual-aumentada-mixta/",
    resumen: "Artículo que presenta las tres modalidades de realidad extendida y sus características."
  },

  /* ---------- Wikipedia ---------- */
  {
    titulo: "Inteligencia artificial",
    cat: "ia", tipo: "Wikipedia", fuente: "Wikipedia",
    url: "https://es.wikipedia.org/wiki/Inteligencia_artificial",
    resumen: "Panorama de la disciplina que busca que las máquinas realicen tareas asociadas a la inteligencia humana, como aprender, razonar o comprender el lenguaje."
  },
  {
    titulo: "Aprendizaje automático",
    cat: "ia", tipo: "Wikipedia", fuente: "Wikipedia",
    url: "https://es.wikipedia.org/wiki/Aprendizaje_autom%C3%A1tico",
    resumen: "Explica cómo los sistemas mejoran su desempeño a partir de datos y ejemplos, sin que alguien programe cada regla. Está detrás de recomendadores, traductores y reconocimiento de imágenes."
  },
  {
    titulo: "Macrodatos (Big data)",
    cat: "ia", tipo: "Wikipedia", fuente: "Wikipedia",
    url: "https://es.wikipedia.org/wiki/Macrodatos",
    resumen: "Describe el manejo de conjuntos de datos tan grandes o variados que exigen herramientas distintas a las tradicionales, como los que generan redes, sensores y plataformas."
  },
  {
    titulo: "Robótica",
    cat: "emer", tipo: "Wikipedia", fuente: "Wikipedia",
    url: "https://es.wikipedia.org/wiki/Rob%C3%B3tica",
    resumen: "Introducción a la disciplina que diseña y construye robots combinando mecánica, electrónica e informática, con aplicaciones en la industria, la medicina y la educación."
  },
  {
    titulo: "Computación cuántica",
    cat: "emer", tipo: "Wikipedia", fuente: "Wikipedia",
    url: "https://es.wikipedia.org/wiki/Computaci%C3%B3n_cu%C3%A1ntica",
    resumen: "Presenta un modelo de cómputo que aprovecha fenómenos de la física cuántica, como la superposición, para abordar ciertos problemas de manera distinta a una computadora convencional."
  },
  {
    titulo: "Realidad virtual",
    cat: "emer", tipo: "Wikipedia", fuente: "Wikipedia",
    url: "https://es.wikipedia.org/wiki/Realidad_virtual",
    resumen: "Resume qué es un entorno simulado por computadora en el que la persona se sumerge con dispositivos como visores, y repasa sus usos en educación, entretenimiento y otras áreas."
  },
  {
    titulo: "Impresión 3D",
    cat: "emer", tipo: "Wikipedia", fuente: "Wikipedia",
    url: "https://es.wikipedia.org/wiki/Impresi%C3%B3n_3D",
    resumen: "Explica cómo se fabrican objetos físicos capa por capa a partir de un modelo digital y en qué campos se usa, desde prototipos hasta piezas médicas."
  },
  {
    titulo: "Cadena de bloques (Blockchain)",
    cat: "emer", tipo: "Wikipedia", fuente: "Wikipedia",
    url: "https://es.wikipedia.org/wiki/Cadena_de_bloques",
    resumen: "Describe la estructura de registros enlazados y distribuidos entre muchos participantes que sustenta a las criptomonedas y a otros usos donde se busca un historial difícil de alterar."
  },
  {
    titulo: "Internet de las cosas",
    cat: "red", tipo: "Wikipedia", fuente: "Wikipedia",
    url: "https://es.wikipedia.org/wiki/Internet_de_las_cosas",
    resumen: "Trata de la conexión de objetos cotidianos a internet para que recojan e intercambien datos, como electrodomésticos, sensores o relojes inteligentes."
  },
  {
    titulo: "Wifi",
    cat: "red", tipo: "Wikipedia", fuente: "Wikipedia",
    url: "https://es.wikipedia.org/wiki/Wifi",
    resumen: "Describe la tecnología de redes inalámbricas que permite conectar dispositivos a una red local y a internet sin cables, y los estándares en que se basa."
  },
  {
    titulo: "Computación en la nube",
    cat: "sw", tipo: "Wikipedia", fuente: "Wikipedia",
    url: "https://es.wikipedia.org/wiki/Computaci%C3%B3n_en_la_nube",
    resumen: "Define el modelo en el que se usan servidores, almacenamiento y programas a través de internet en lugar de tenerlos en el equipo propio, y distingue sus modalidades de servicio."
  },
  {
    titulo: "Sistema operativo",
    cat: "sw", tipo: "Wikipedia", fuente: "Wikipedia",
    url: "https://es.wikipedia.org/wiki/Sistema_operativo",
    resumen: "Explica el software que administra los recursos de un equipo y hace de puente entre el hardware y los programas, con ejemplos de sistemas de escritorio y móviles."
  },
  {
    titulo: "Software libre",
    cat: "sw", tipo: "Wikipedia", fuente: "Wikipedia",
    url: "https://es.wikipedia.org/wiki/Software_libre",
    resumen: "Aborda la idea de programas que pueden usarse, estudiarse, modificarse y compartirse libremente, y el movimiento que los impulsa."
  },
  {
    titulo: "Python",
    cat: "sw", tipo: "Wikipedia", fuente: "Wikipedia",
    url: "https://es.wikipedia.org/wiki/Python",
    resumen: "Ficha de un lenguaje de programación conocido por su sintaxis clara, muy usado en la enseñanza, el análisis de datos y la automatización de tareas."
  },
  {
    titulo: "Seguridad informática",
    cat: "seg", tipo: "Wikipedia", fuente: "Wikipedia",
    url: "https://es.wikipedia.org/wiki/Seguridad_inform%C3%A1tica",
    resumen: "Reúne los conceptos para proteger equipos, redes y datos frente a accesos no autorizados, fallas y ataques. Un buen punto de partida para el tema de cuentas y contraseñas."
  },
  {
    titulo: "Criptografía",
    cat: "seg", tipo: "Wikipedia", fuente: "Wikipedia",
    url: "https://es.wikipedia.org/wiki/Criptograf%C3%ADa",
    resumen: "Introduce las técnicas para cifrar la información de modo que solo pueda leerla quien tenga la clave adecuada; sostiene desde los mensajes privados hasta los pagos en línea."
  },
  {
    titulo: "Moodle",
    cat: "edu", tipo: "Wikipedia", fuente: "Wikipedia",
    url: "https://es.wikipedia.org/wiki/Moodle",
    resumen: "Ficha de la plataforma de código abierto para crear aulas virtuales, con foros, tareas y cuestionarios, muy extendida en instituciones educativas."
  },
  {
    titulo: "Educación en línea",
    cat: "edu", tipo: "Wikipedia", fuente: "Wikipedia", dest: true,
    url: "https://es.wikipedia.org/wiki/Educaci%C3%B3n_en_l%C3%ADnea",
    resumen: "Describe la formación que se desarrolla a través de internet, con sus modalidades, ventajas y retos; enmarca directamente la experiencia de estudiar en línea."
  }
];
