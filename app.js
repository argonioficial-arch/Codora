const $=s=>document.querySelector(s);
const E=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const sh=a=>{for(let i=a.length;i>1;){const j=Math.random()*i--|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const day=()=>new Date().toISOString().slice(0,10);
const D0={xp:0,gems:50,streak:0,hearts:5,last:'',p:{},en:{},d:{}};
const rd=k=>{try{return JSON.parse(localStorage.getItem(k))}catch(e){return null}};
const wr=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
const fresh=d=>{const s=Object.assign({},D0,d||{});s.p=Object.assign({},d&&d.p);s.en=Object.assign({},d&&d.en);if(!s.d||s.d.k!==day())s.d={k:day(),xp:0,l:0,c:0};return s};
let SS=rd('codora_s'),A=null,S,AM='in';
const load=()=>{const u=A?(rd('codora_u')||{})[A]:null;S=fresh(A?(u&&u.data):rd('codora'))};
const setS=v=>{SS=v;A=v&&v!=='@invitado'?v:null;wr('codora_s',v);load()};
if(SS&&SS!=='@invitado'&&!(rd('codora_u')||{})[SS])SS=null;
setS(SS);
const save=()=>{if(A){const u=rd('codora_u')||{};if(u[A]){u[A].data=S;wr('codora_u',u)}}else wr('codora',S)};
const salt=()=>Math.random().toString(36).slice(2)+Date.now().toString(36);
const hs=async(p,s)=>{const t=s+':'+p;try{const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(t));return[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')}catch(e){let h=5381;for(const c of t)h=(h*33^c.charCodeAt(0))>>>0;return'x'+h}};
const snd=f=>{try{const a=new(window.AudioContext||window.webkitAudioContext)(),o=a.createOscillator(),g=a.createGain(),t=a.currentTime;o.type='triangle';o.frequency.setValueAtTime(f[0],t);o.frequency.setValueAtTime(f[1],t+.12);o.connect(g);g.connect(a.destination);g.gain.setValueAtTime(.15,t);g.gain.exponentialRampToValueAtTime(.001,t+.3);o.start();o.stop(t+.3)}catch(e){}};
const LV=['Básico','Intermedio','Avanzado','Experto','Maestro'],LN=30;
const U=[
{n:'HTML',t:'Estructura tu primera web',c:'#ff9600',d:'#c97700',i:'🧱',V:[[
`Tu primera etiqueta|HTML usa etiquetas entre ángulos. Casi todas se abren y se cierran, como <p> y </p>.|<p> Hola </p>|¿Cómo se cierra una etiqueta <p>?;</p>;<p/>;<end>|¿Qué lenguaje da estructura a una web?;HTML;SQL;Python`,
`Títulos|<h1> es el título principal y de <h2> a <h6> van los subtítulos, cada vez menos importantes.|<h1> Mi web </h1>|¿Qué etiqueta es el título más importante?;<h1>;<h6>;<head>|¿Cuántos niveles de título hay?;6;3;10`,
`Enlaces|<a> crea enlaces. Su atributo href indica a dónde llevan.|<a href="inicio.html"> Inicio </a>|¿Qué atributo guarda la dirección del enlace?;href;src;link|¿Qué etiqueta crea un enlace?;<a>;<link>;<url>`],[
`Listas|<ul> crea listas con viñetas y <ol> listas numeradas. Cada elemento va dentro de un <li>.|<ul> <li> Uno </li> </ul>|¿Qué etiqueta crea una lista numerada?;<ol>;<ul>;<li>|¿Dentro de qué etiqueta va cada elemento?;<li>;<p>;<item>`,
`Imágenes|<img> muestra una imagen con src. El atributo alt la describe para quien no puede verla.|<img src="codi.png" alt="Codi">|¿Qué atributo describe la imagen?;alt;src;href|¿Cuál de estas etiquetas no lleva cierre?;<img>;<p>;<h1>`,
`Formularios|<form> agrupa los campos. <input> crea un campo y su atributo type define de qué tipo es.|<input type="email">|¿Qué atributo define el tipo de campo?;type;kind;mode|¿Qué etiqueta agrupa los campos de un formulario?;<form>;<field>;<group>`],[
`Semántica|<header>, <main> y <footer> dan significado a cada zona de la página, no solo aspecto.|<main> <p> Contenido </p> </main>|¿Qué etiqueta representa el contenido principal?;<main>;<div>;<body>|¿Para qué sirve la semántica?;Dar significado a las zonas;Cambiar colores;Acelerar el servidor`,
`Tablas|<table> contiene filas <tr> y celdas <td>. Las celdas de cabecera usan <th>.|<tr> <td> Dato </td> </tr>|¿Qué etiqueta crea una fila?;<tr>;<td>;<row>|¿Qué etiqueta crea una cabecera de tabla?;<th>;<head>;<tt>`,
`Metadatos|<head> guarda información que no se ve: <title> es el nombre de la pestaña y <meta charset> evita problemas con las tildes.|<meta charset="utf-8">|¿Dentro de qué etiqueta va <title>?;<head>;<footer>;<li>|¿Qué evita problemas con las tildes?;charset utf-8;alt;href`]]},
{n:'CSS',t:'Dale estilo a todo',c:'#1cb0f6',d:'#1388bd',i:'🎨',V:[[
`Selectores|Una regla CSS tiene un selector y, entre llaves, las propiedades. Con p pintas todos los párrafos.|p { color: red; }|¿Qué va entre llaves?;Las propiedades;El selector;El HTML|¿Qué selector apunta a todos los párrafos?;p;.p;#p`,
`Colores|color cambia el texto y background el fondo. Acepta nombres, #hexadecimales y rgb().|h1 { color: #8b5cf6; }|¿Qué propiedad cambia el fondo?;background;bg-color;paint|¿Cuál es un color hexadecimal?;#8b5cf6;rgb;8b5cf6#`,
`Clases|Una clase se crea en CSS con un punto y se usa en HTML con el atributo class.|.boton { color: white; }|¿Qué símbolo marca una clase?;El punto;La almohadilla;El asterisco|¿Qué atributo HTML usa la clase?;class;id;name`],[
`La caja|Toda caja tiene contenido, padding, border y margin. El padding es interior y el margin, exterior.|.caja { padding: 1rem; }|¿Qué separa el contenido del borde?;padding;margin;gap|¿Qué separa la caja de las demás?;margin;padding;border`,
`Texto|font-size cambia el tamaño, font-weight el grosor y text-align la alineación.|p { font-size: 18px; }|¿Qué propiedad centra el texto?;text-align;font-align;center|¿Qué propiedad cambia el grosor?;font-weight;font-size;font-bold`,
`Flexbox|Con display flex los hijos se colocan en fila y justify-content reparte el espacio entre ellos.|.fila { display: flex; }|¿Qué valor activa Flexbox?;flex;row;inline|¿Qué propiedad reparte el espacio horizontal?;justify-content;align-text;flex-gap`],[
`Grid|display grid crea filas y columnas. grid-template-columns define el ancho de cada columna.|.rejilla { display: grid; }|¿Qué propiedad define las columnas?;grid-template-columns;grid-cols;columns-grid|¿Qué sistema trabaja en dos dimensiones?;Grid;Flex;Float`,
`Responsive|@media aplica estilos según el tamaño de la pantalla, para que la web se vea bien en el móvil.|@media (max-width: 600px) { }|¿Qué regla adapta el diseño al ancho?;@media;@screen;@size|¿Para qué sirve el diseño responsive?;Verse bien en cualquier pantalla;Cargar más rápido;Proteger datos`,
`Animaciones|transition suaviza un cambio y @keyframes define una animación paso a paso.|.btn { transition: 0.3s; }|¿Qué propiedad suaviza un cambio?;transition;smooth;fade|¿Qué regla define los pasos de una animación?;@keyframes;@steps;@motion`]]},
{n:'JavaScript',t:'Haz que todo cobre vida',c:'#f5b700',d:'#bd8d00',i:'⚡',V:[[
`Variables|let guarda valores que cambian y const los que no. El valor se asigna con el signo igual.|let edad = 18;|¿Qué palabra declara una constante?;const;fix;dim|¿Qué símbolo asigna un valor?;=;==;=>`,
`Tipos de datos|Los textos van entre comillas (string), los números sin ellas y true o false son booleanos.|let activo = true;|¿Qué tipo de dato es “Hola”?;string;number;boolean|¿Cuál es un valor booleano?;false;'false';0`,
`Operadores|+ suma, - resta, * multiplica y === compara valor y tipo.|let total = 2 * 3;|¿Qué operador multiplica?;*;x;%|¿Qué operador compara valor y tipo?;===;=;=>`],[
`Condicionales|if ejecuta código solo si la condición es verdadera y else lo hace cuando no lo es.|if (nota >= 5) { }|¿Qué palabra ejecuta código si la condición es falsa?;else;then;or|¿Qué evalúa un if?;Una condición;Una variable;Un array`,
`Bucles|for repite un bloque varias veces: tiene un inicio, una condición y un paso.|for (let i = 0; i < 3; i++) { }|¿Qué estructura repite código?;for;if;const|¿Qué hace i++?;Suma 1 a i;Resta 1 a i;Multiplica i`,
`Funciones|function agrupa código reutilizable. Se ejecuta llamándola por su nombre con paréntesis.|function saludar() { }|¿Cómo se llama a la función saludar?;saludar();call saludar;run saludar|¿Qué palabra crea una función?;function;def;method`],[
`Arrays|Un array guarda varios valores entre corchetes. El primero está en la posición 0.|let notas = [7, 9];|¿En qué posición está el primer elemento?;0;1;-1|¿Qué método añade un elemento al final?;push;pop;add`,
`El DOM|El DOM es la página convertida en objetos. querySelector busca un elemento para poder cambiarlo.|document.querySelector( 'h1' );|¿Qué método busca un elemento con un selector?;querySelector;findBy;getTag|¿Qué representa el DOM?;La página como objetos;El servidor;La base de datos`,
`Eventos|addEventListener ejecuta una función cuando ocurre algo, por ejemplo un clic.|boton.addEventListener('click', hola);|¿Qué método escucha un evento?;addEventListener;onListen;watch|¿Qué evento es un clic?;click;press;tap`]]},
{n:'SQL',t:'Domina tus datos',c:'#ff4b8b',d:'#c93066',i:'🗄️',V:[[
`SELECT|SELECT lee datos y FROM indica de qué tabla. El asterisco * significa todas las columnas.|SELECT * FROM alumnos;|¿Qué sentencia lee datos?;SELECT;READ;GET|¿Qué indica FROM?;La tabla;La columna;El filtro`,
`WHERE|WHERE filtra las filas que cumplen una condición.|SELECT * FROM alumnos WHERE edad > 18;|¿Qué cláusula filtra filas?;WHERE;ORDER BY;LIMIT|¿Qué consigue edad > 18?;Filtrar mayores de 18;Ordenar por edad;Borrar edades`,
`ORDER BY|ORDER BY ordena el resultado. ASC es de menor a mayor y DESC de mayor a menor.|SELECT * FROM alumnos ORDER BY nombre ASC;|¿Qué cláusula ordena?;ORDER BY;SORT BY;GROUP BY|¿Qué palabra ordena de mayor a menor?;DESC;ASC;MAX`],[
`INSERT|INSERT INTO añade una fila nueva indicando la tabla, las columnas y los valores.|INSERT INTO alumnos (nombre) VALUES ('Ana');|¿Qué sentencia añade filas?;INSERT;ADD;PUSH|¿Qué palabra introduce los datos?;VALUES;DATA;ROWS`,
`UPDATE|UPDATE cambia datos que ya existen. Usa siempre WHERE o modificarás todas las filas.|UPDATE alumnos SET edad = 19 WHERE id = 1;|¿Qué sentencia modifica datos?;UPDATE;CHANGE;MODIFY|¿Qué pasa si olvidas WHERE?;Se cambian todas las filas;No pasa nada;Siempre da error`,
`DELETE|DELETE FROM borra filas. Igual que en UPDATE, WHERE decide cuáles.|DELETE FROM alumnos WHERE id = 1;|¿Qué sentencia borra filas?;DELETE;REMOVE;ERASE|¿Qué cláusula limita el borrado?;WHERE;LIMIT;FROM`],[
`COUNT y AVG|Las funciones de agregado resumen datos: COUNT cuenta filas, SUM suma y AVG calcula la media.|SELECT COUNT(*) FROM alumnos;|¿Qué función cuenta filas?;COUNT;SUM;TOTAL|¿Qué función calcula la media?;AVG;MEAN;MID`,
`GROUP BY|GROUP BY agrupa las filas iguales para calcular un resumen por cada grupo.|SELECT curso, COUNT(*) FROM alumnos GROUP BY curso;|¿Qué cláusula agrupa filas?;GROUP BY;ORDER BY;JOIN|¿Con qué se combina normalmente?;Funciones de agregado;INSERT;DROP`,
`JOIN|JOIN une tablas relacionadas mediante una columna común, como un id.|SELECT * FROM alumnos JOIN cursos ON alumnos.curso_id = cursos.id;|¿Qué palabra une tablas?;JOIN;MERGE;LINK|¿Qué cláusula indica la columna común?;ON;BY;IN`]]}];
const EX=[
[`Párrafos y saltos|<p> crea un párrafo y <br> fuerza un salto de línea.|<p> Hola <br> mundo </p>|¿Qué etiqueta fuerza un salto de línea?;<br>;<break>;<lb>`,
`Negrita y cursiva|<strong> destaca con importancia y <em> da énfasis.|<strong> Ojo </strong>|¿Qué etiqueta da énfasis?;<em>;<it>;<big>`,
`Estructura base|Todo documento HTML se envuelve en la etiqueta <html>.|<html> <body> </body> </html>|¿Qué etiqueta envuelve todo el documento?;<html>;<main>;<root>`,
`Contenedor div|<div> agrupa elementos sin significado propio para darles estilo.|<div> <p> Hola </p> </div>|¿Qué etiqueta agrupa sin significado propio?;<div>;<section>;<group>`,
`Atributo id|id da un nombre único a un elemento de la página.|<p id="intro"> Hola </p>|¿Cuántos elementos pueden compartir el mismo id?;Ninguno más;Todos;Dos`,
`Comentarios|Los comentarios HTML no se ven en la página y sirven de nota.|<!-- nota -->|¿Los comentarios se muestran en la página?;No;Sí;Solo en móvil`,
`Idioma|El atributo lang de <html> indica el idioma de la página.|<html lang="es">|¿Qué atributo indica el idioma?;lang;idiom;speak`],
[`Etiqueta label|<label> da nombre a un campo y mejora la accesibilidad.|<label> Correo </label>|¿Qué etiqueta da nombre a un campo?;<label>;<name>;<tag>`,
`Botones|<button> crea un botón pulsable dentro o fuera de un formulario.|<button> Enviar </button>|¿Qué etiqueta crea un botón?;<button>;<btn>;<click>`,
`Desplegables|<select> con <option> crea una lista desplegable.|<select> <option> Uno </option> </select>|¿Qué etiqueta define cada opción?;<option>;<item>;<choice>`,
`Área de texto|<textarea> permite escribir varias líneas.|<textarea> </textarea>|¿Qué etiqueta permite varias líneas?;<textarea>;<input>;<text>`,
`Placeholder|placeholder muestra una pista dentro del campo vacío.|<input placeholder="Nombre">|¿Qué atributo muestra una pista?;placeholder;hint;title`,
`Campo obligatorio|required impide enviar el formulario si el campo está vacío.|<input required>|¿Qué atributo hace un campo obligatorio?;required;needed;must`,
`Audio y vídeo|<video> y <audio> incrustan multimedia, y controls muestra los botones.|<video controls> </video>|¿Qué atributo muestra los botones del reproductor?;controls;buttons;player`],
[`Sección y artículo|<section> agrupa un tema y <article> un contenido independiente.|<article> <h2> Noticia </h2> </article>|¿Qué etiqueta es un contenido independiente?;<article>;<aside>;<nav>`,
`Navegación|<nav> contiene los enlaces principales del sitio.|<nav> <a href="/"> Inicio </a> </nav>|¿Qué etiqueta agrupa los enlaces principales?;<nav>;<menu>;<links>`,
`Aside y footer|<aside> guarda contenido secundario y <footer> el pie de página.|<footer> Contacto </footer>|¿Qué etiqueta es el pie de página?;<footer>;<bottom>;<end>`,
`Atributos data|Los atributos data-* guardan datos propios para usarlos con JavaScript.|<div data-nivel="2">|¿Qué prefijo usan los atributos propios?;data-;my-;attr-`,
`Iframes|<iframe> incrusta otra página dentro de la tuya.|<iframe src="mapa.html">|¿Qué etiqueta incrusta otra página?;<iframe>;<embed>;<frame>`,
`Accesibilidad|aria-label da un nombre accesible a elementos sin texto visible.|<button aria-label="Cerrar">|¿Qué atributo da nombre accesible a un botón?;aria-label;name;alt-text`,
`SEO básico|La meta description resume la página para los buscadores.|<meta name="description" content="Aprende">|¿Qué meta resume la página para buscadores?;description;summary;resume`],
[`Selector de id|El selector de id usa la almohadilla y apunta a un solo elemento.|#logo { width: 80px; }|¿Qué símbolo marca un id?;#;.;@`,
`Tamaños|width y height fijan el ancho y el alto de un elemento.|.caja { width: 200px; }|¿Qué propiedad fija el ancho?;width;size;wide`,
`Bordes|border define grosor, estilo y color del borde.|.caja { border: 2px solid red; }|¿Qué propiedad crea un borde?;border;outline-box;frame`,
`Bordes redondeados|border-radius redondea las esquinas de una caja.|.caja { border-radius: 12px; }|¿Qué propiedad redondea esquinas?;border-radius;round;corner`,
`Unidades|px es fijo, rem depende del texto base y % del contenedor.|p { font-size: 1.2rem; }|¿Qué unidad depende del texto base?;rem;px;vh`,
`Fuentes|font-family elige la tipografía y conviene dar una alternativa.|body { font-family: Arial, sans-serif; }|¿Qué propiedad elige la tipografía?;font-family;font-type;text-font`,
`Sombras|box-shadow añade una sombra alrededor de una caja.|.tarjeta { box-shadow: 0 4px 0 gray; }|¿Qué propiedad añade sombra a una caja?;box-shadow;shadow;drop-box`],
[`Posición|position coloca un elemento con relative, absolute, fixed o sticky.|.barra { position: sticky; }|¿Qué valor deja un elemento pegado al hacer scroll?;sticky;static;float`,
`Z-index|z-index decide qué elemento queda por encima de otro.|.modal { z-index: 10; }|¿Qué propiedad ordena las capas?;z-index;layer;top-level`,
`Display|display define cómo se comporta un elemento: block, inline o none.|.oculto { display: none; }|¿Qué valor oculta un elemento?;none;hidden-box;off`,
`Overflow|overflow controla qué pasa cuando el contenido no cabe en la caja.|.caja { overflow: auto; }|¿Qué propiedad controla el contenido que no cabe?;overflow;spill;clip-all`,
`Gap|gap separa los hijos de un contenedor flex o grid sin márgenes.|.fila { display: flex; gap: 8px; }|¿Qué propiedad separa los hijos de un contenedor?;gap;space;between`,
`Alinear en flex|align-items alinea los hijos en el eje vertical de una fila flex.|.fila { align-items: center; }|¿Qué propiedad alinea en el eje vertical?;align-items;align-text;vertical`,
`Pseudoclases|:hover aplica estilos cuando el ratón pasa por encima.|.btn:hover { color: red; }|¿Qué pseudoclase actúa al pasar el ratón?;:hover;:over;:mouse`],
[`Variables CSS|Las variables --nombre guardan valores y se leen con var().|:root { --color: #8b5cf6; }|¿Con qué función se lee una variable CSS?;var();get();use()`,
`Transformaciones|transform mueve, gira o escala un elemento sin afectar al resto.|.btn { transform: scale(1.1); }|¿Qué propiedad gira o escala?;transform;rotate-all;morph`,
`Pseudoelementos|::before añade contenido decorativo antes de un elemento.|.titulo::before { content: "★"; }|¿Qué propiedad necesita ::before para mostrarse?;content;text;value`,
`Selector hijo|El selector > aplica solo a los hijos directos.|ul > li { color: red; }|¿Qué símbolo selecciona hijos directos?;>;+;~`,
`Áreas de grid|grid-template-areas nombra zonas de la rejilla.|.web { grid-template-areas: "cab cab"; }|¿Qué propiedad nombra zonas de una rejilla?;grid-template-areas;grid-zones;areas-grid`,
`Modo oscuro|prefers-color-scheme detecta si el sistema usa tema oscuro.|@media (prefers-color-scheme: dark) { }|¿Qué consulta detecta el tema oscuro?;prefers-color-scheme;dark-mode;theme-media`,
`Movimiento reducido|prefers-reduced-motion permite quitar animaciones a quien lo necesita.|@media (prefers-reduced-motion: reduce) { }|¿Qué consulta respeta el movimiento reducido?;prefers-reduced-motion;no-motion;calm-media`],
[`Mostrar datos|console.log muestra valores en la consola para depurar.|console.log( 'Hola' );|¿Qué instrucción muestra valores en la consola?;console.log;print;echo`,
`Longitud de texto|La propiedad length cuenta los caracteres de un texto.|let n = nombre.length;|¿Qué propiedad cuenta los caracteres?;length;size;count`,
`Convertir tipos|Number() convierte un texto en número.|let n = Number('5');|¿Qué función convierte texto en número?;Number();Text();Parse()`,
`Comparar|!== comprueba que dos valores sean distintos en valor o tipo.|if (a !== b) { }|¿Qué operador comprueba que son distintos?;!==;=!;<>`,
`Operadores lógicos|&& exige que se cumplan ambas condiciones y ! niega una condición.|if (a && b) { }|¿Qué operador exige ambas condiciones?;&&;!;=>`,
`Número aleatorio|Math.random() devuelve un decimal entre 0 y 1.|let r = Math.random();|¿Qué función genera un número aleatorio?;Math.random();Random.get();rand()`,
`Redondear|Math.round redondea al entero más cercano.|let n = Math.round(2.6);|¿Qué función redondea al entero más cercano?;Math.round;Math.near;Math.fix`],
[`else if|else if añade otra condición cuando la anterior falla.|if (a) { } else if (b) { }|¿Qué palabra añade otra condición?;else if;elif;or if`,
`Switch|switch elige entre varios casos según el valor de una variable.|switch (dia) { }|¿Qué estructura elige entre varios casos?;switch;select;choose`,
`While|while repite mientras la condición sea verdadera.|while (vidas > 0) { }|¿Qué bucle repite mientras algo sea verdadero?;while;repeat;loop`,
`Parámetros|Los parámetros son los datos que la función recibe entre paréntesis.|function sumar(a, b) { }|¿Cómo se llaman los datos que recibe una función?;Parámetros;Retornos;Eventos`,
`Return|return devuelve un valor y termina la función.|return a + b;|¿Qué palabra devuelve un valor?;return;give;output`,
`Funciones flecha|Las funciones flecha son una forma corta de escribir funciones.|const doble = n => n * 2;|¿Qué símbolo define una función flecha?;=>;->;::`,
`Ámbito|Una variable let dentro de llaves solo existe en ese bloque.|{ let x = 1; }|¿Dónde existe una variable let dentro de llaves?;Solo en ese bloque;En todo el programa;En otras webs`],
[`map|map crea un array nuevo aplicando una función a cada elemento.|notas.map(n => n * 2);|¿Qué método transforma cada elemento en un array nuevo?;map;each;turn`,
`filter|filter devuelve solo los elementos que cumplen una condición.|notas.filter(n => n > 5);|¿Qué método se queda con los que cumplen una condición?;filter;find-all;pick`,
`Objetos|Un objeto guarda pares de clave y valor entre llaves.|let user = { nombre: 'Ana' };|¿Cómo se guarda un dato en un objeto?;Clave y valor;Solo posición;Solo texto`,
`JSON|JSON es un formato de texto para intercambiar datos y se lee con JSON.parse.|JSON.parse( texto );|¿Qué método convierte JSON en objeto?;JSON.parse;JSON.make;JSON.read`,
`Crear elementos|createElement crea un nodo nuevo que luego se añade a la página.|document.createElement( 'li' );|¿Qué método crea un elemento nuevo?;createElement;newTag;makeNode`,
`Fetch|fetch pide datos a un servidor y devuelve una promesa.|fetch( 'datos.json' );|¿Qué función pide datos a un servidor?;fetch;ask;request`,
`Async y await|await espera el resultado de una promesa dentro de una función async.|const r = await fetch(url);|¿Qué palabra espera una promesa?;await;wait;pause`],
[`Columnas concretas|Puedes elegir columnas en vez de usar el asterisco.|SELECT nombre, edad FROM alumnos;|¿Qué se escribe para elegir columnas?;Sus nombres con comas;Un asterisco;La tabla entera`,
`LIMIT|LIMIT restringe cuántas filas devuelve la consulta.|SELECT * FROM alumnos LIMIT 5;|¿Qué cláusula limita el número de filas?;LIMIT;TOP;MAX`,
`AND y OR|AND exige varias condiciones y OR basta con una de ellas.|SELECT * FROM alumnos WHERE edad > 18 AND curso = 2;|¿Qué palabra exige que se cumplan dos condiciones?;AND;OR;ALSO`,
`DISTINCT|DISTINCT elimina los valores repetidos del resultado.|SELECT DISTINCT curso FROM alumnos;|¿Qué palabra elimina repetidos?;DISTINCT;UNIQUE;ONCE`,
`Alias|AS da un nombre temporal a una columna o tabla.|SELECT nombre AS alumno FROM alumnos;|¿Qué palabra crea un alias?;AS;NAME;TO`,
`LIKE|LIKE busca textos que coincidan con un patrón usando el símbolo %.|SELECT * FROM alumnos WHERE nombre LIKE 'A%';|¿Qué operador busca por patrón de texto?;LIKE;MATCH;SIMILAR`,
`NULL|NULL significa que no hay valor y se comprueba con IS NULL.|SELECT * FROM alumnos WHERE edad IS NULL;|¿Cómo se comprueba un valor vacío?;IS NULL;= NULL;EMPTY`],
[`Crear tablas|CREATE TABLE define una tabla nueva con sus columnas y tipos.|CREATE TABLE alumnos (id INT, nombre TEXT);|¿Qué sentencia crea una tabla?;CREATE TABLE;NEW TABLE;MAKE TABLE`,
`Tipos de dato|INT guarda enteros, TEXT guarda textos y DATE guarda fechas.|edad INT|¿Qué tipo guarda enteros?;INT;TEXT;DATE`,
`Clave primaria|PRIMARY KEY identifica cada fila de forma única.|id INT PRIMARY KEY|¿Qué restricción identifica cada fila de forma única?;PRIMARY KEY;UNIQUE ROW;MAIN ID`,
`NOT NULL|NOT NULL obliga a que la columna siempre tenga un valor.|nombre TEXT NOT NULL|¿Qué restricción obliga a tener valor?;NOT NULL;REQUIRED;FILLED`,
`Valor por defecto|DEFAULT asigna un valor cuando no se indica ninguno.|puntos INT DEFAULT 0|¿Qué palabra asigna un valor por defecto?;DEFAULT;AUTO;START`,
`Borrar tablas|DROP TABLE elimina una tabla completa con sus datos.|DROP TABLE alumnos;|¿Qué sentencia elimina una tabla completa?;DROP TABLE;DELETE TABLE;REMOVE TABLE`,
`Modificar tablas|ALTER TABLE cambia la estructura de una tabla existente.|ALTER TABLE alumnos ADD edad INT;|¿Qué sentencia cambia la estructura de una tabla?;ALTER TABLE;CHANGE TABLE;EDIT TABLE`],
[`HAVING|HAVING filtra grupos después de agrupar, como WHERE filtra filas.|SELECT curso, COUNT(*) FROM alumnos GROUP BY curso HAVING COUNT(*) > 5;|¿Qué cláusula filtra grupos?;HAVING;WHERE;LIMIT`,
`LEFT JOIN|LEFT JOIN conserva todas las filas de la tabla izquierda aunque no tengan pareja.|SELECT * FROM alumnos LEFT JOIN cursos ON alumnos.curso_id = cursos.id;|¿Qué JOIN conserva todas las filas de la izquierda?;LEFT JOIN;INNER JOIN;SIDE JOIN`,
`Claves foráneas|FOREIGN KEY relaciona una columna con la clave primaria de otra tabla.|FOREIGN KEY (curso_id) REFERENCES cursos(id)|¿Qué restricción enlaza dos tablas?;FOREIGN KEY;LINK KEY;JOIN KEY`,
`Subconsultas|Una subconsulta es un SELECT dentro de otro SELECT.|SELECT * FROM alumnos WHERE edad > (SELECT AVG(edad) FROM alumnos);|¿Qué es una subconsulta?;Un SELECT dentro de otro;Una tabla copia;Un índice`,
`Índices|Un índice acelera las búsquedas en una columna.|CREATE INDEX idx_nombre ON alumnos (nombre);|¿Para qué sirve un índice?;Acelerar búsquedas;Borrar datos;Guardar contraseñas`,
`Transacciones|Una transacción agrupa varias operaciones que se confirman con COMMIT.|BEGIN; UPDATE alumnos SET edad = 20; COMMIT;|¿Qué sentencia confirma una transacción?;COMMIT;SAVE;END`,
`Vistas|CREATE VIEW guarda una consulta con nombre para reutilizarla como tabla.|CREATE VIEW mayores AS SELECT * FROM alumnos WHERE edad > 18;|¿Qué sentencia guarda una consulta con nombre?;CREATE VIEW;SAVE QUERY;MAKE VIEW`]];
EX.forEach((a,n)=>U[n/3|0].V[n%3].push(...a));
const pf=s=>{const a=s.split('|');return{t:a[0],e:a[1],c:a[2],q:a.slice(3).map(x=>{const p=x.split(';');return{t:'o',q:p[0],o:p.slice(1)}})}};
const pk3=(a,n,x)=>sh(a.filter(y=>y!==x)).slice(0,n);
const ttl=(f,F,n)=>({t:'o',q:'¿Qué tema explica esto? '+f.e,o:[f.t,...pk3(F.map(z=>z.t),n,f.t)]});
const blk=(f,F,n)=>{const w=f.c.split(' '),ix=w.map((x,m)=>m).filter(m=>w[m].length>1),j=ix[Math.random()*ix.length|0],pool=[...new Set(F.flatMap(z=>z.c.split(' ')))];return{t:'o',q:'Completa el código: '+w.map((x,m)=>m===j?'___':x).join(' '),o:[w[j],...pk3(pool,n,w[j])]}};
const ord=(f,F,tr)=>{const w=f.c.split(' ');return{t:'b',q:'Ordena el código de la lección',w,x:tr?pk3([...new Set(F.flatMap(z=>z.c.split(' ')))].filter(y=>!w.includes(y)),2,''):[]}};
const tt=(i,v,c)=>(v<3?U[i].V[v][c]:U[i].V.slice(0,3).flat()[c*3+v-3]).split('|')[0];
function lesson(i,v,k){
const AL=U[i].V.slice(0,3).flat().map(pf),F=v<3?U[i].V[v].map(pf):AL,c=k/3|0,t=k%3,f=v<3?F[c]:F[c*3+v-3],P=v<3?F.slice(0,c+1):F,n=v>2?3:2,r=()=>P[Math.random()*P.length|0];
const b=t===0&&v<3?[...f.q]:t<2?[ttl(f,F,n),blk(f,F,n)]:[ttl(r(),F,n),blk(r(),F,n),ttl(f,F,n),blk(f,F,n)];
const ex=Array.from({length:Math.min(v,2)},(_,z)=>z?ttl(r(),F,n):blk(r(),F,n));
return{t:f.t,e:f.e,c:f.c,k:t,qs:[...b,...ex,ord(f,F,v>3)]};
}
const TIPS=['Practica un poco cada día: la racha es tu mejor aliada.','Si fallas, no pasa nada: la pregunta vuelve para que la domines.','Escribir código a mano fija mucho mejor que copiarlo.','Un buen programador lee más código del que escribe.','Primero que funcione, luego que sea bonito.'];
const tip=TIPS[Math.random()*TIPS.length|0];
const codi=z=>`<svg class="codi" width="${z}" height="${z*1.07|0}" viewBox="0 0 120 128" aria-hidden="true"><ellipse cx="60" cy="123" rx="34" ry="5" fill="#000" opacity=".12"/><g class="an"><path d="M46 24L36 8" stroke="#6d3fd1" stroke-width="5" stroke-linecap="round"/><circle cx="35" cy="7" r="6" fill="#ffc800"/></g><g class="an"><path d="M74 24L84 8" stroke="#6d3fd1" stroke-width="5" stroke-linecap="round"/><circle cx="85" cy="7" r="6" fill="#ff7ab8"/></g><rect x="4" y="54" width="18" height="30" rx="9" fill="#6d3fd1"/><rect x="98" y="54" width="18" height="30" rx="9" fill="#6d3fd1"/><ellipse cx="42" cy="112" rx="14" ry="8" fill="#6d3fd1"/><ellipse cx="78" cy="112" rx="14" ry="8" fill="#6d3fd1"/><rect x="12" y="18" width="96" height="98" rx="42" fill="#8b5cf6"/><path d="M26 44Q28 30 44 26" stroke="#b79cff" stroke-width="5" fill="none" stroke-linecap="round"/><rect x="24" y="34" width="72" height="56" rx="26" fill="#241a52"/><g class="eyes"><rect class="eye" x="38" y="46" width="14" height="20" rx="7" fill="#5ef2c2"/><rect class="eye" x="68" y="46" width="14" height="20" rx="7" fill="#5ef2c2"/></g><ellipse cx="34" cy="76" rx="6" ry="4" fill="#ff7ab8" opacity=".75"/><ellipse cx="86" cy="76" rx="6" ry="4" fill="#ff7ab8" opacity=".75"/><path class="mh" d="M50 74Q60 82 70 74" stroke="#5ef2c2" stroke-width="4" fill="none" stroke-linecap="round"/><path class="mo" d="M48 72Q60 90 72 72Z" fill="#5ef2c2"/><path class="ms" d="M50 82Q60 72 70 82" stroke="#5ef2c2" stroke-width="4" fill="none" stroke-linecap="round"/><text x="60" y="106" text-anchor="middle" font-size="12" font-weight="900" fill="#fff" font-family="monospace">&lt;/&gt;</text></svg>`;
let V='a';
const nm0=()=>A?rd('codora_u')[A].name:'Invitado';
const pr=(i,v)=>S.p[i+'-'+v]||0;
const lvDone=(i,v)=>pr(i,v)>=LN;
const lvOpen=(i,v)=>v?lvDone(i,v-1):(i===0||lvDone(i-1,LV.length-1));
const mt=(i,v)=>{S.en[i+'-'+v]=1;save();render()};
const lm=()=>{const{i,v}=L;if(!lvDone(i,v))return'';return v<LV.length-1?`¡Nivel ${LV[v]} terminado! Ya puedes matricularte en el nivel ${LV[v+1]}.`:i<3?`¡Has terminado ${U[i].n}! Se desbloquea ${U[i+1].n}.`:'¡Has terminado todo CODORA!'};
function view(){
if(V==='a'){
const g=S.streak>1?`¡Llevas ${S.streak} días de racha! Sigamos programando.`:`¡Hola, ${E(nm0())}! Soy Codi. Vamos a aprender a programar juntos.`;
return `<div class="qrow">${codi(90)}<div class="sp">${g}</div></div>`+U.map((u,i)=>{
const un=lvOpen(i,0);
const hd=`<div class="ub" style="background:${un?u.c:'#b8b2cf'}"><div><b>LENGUAJE ${i+1}</b><span>${u.n}</span><b>${un?u.t:'Termina '+U[i-1].n+' para desbloquearlo'}</b></div><i>${un?u.i:'🔒'}</i></div>`;
if(!un)return hd;
return hd+LV.map((nm,v)=>{
const op=lvOpen(i,v),en=S.en[i+'-'+v],p=pr(i,v);
const r=`<div class="lv"><div>${nm} <span style="color:#ffc800">${'★'.repeat(v+1)}</span><small>${['Aprende desde cero','Más código y práctica','Retos de código completos','Repaso total con 4 opciones','Fichas trampa y 4 opciones'][v]} · ${p}/${LN} lecciones${p>=LN?' · completado ✓':''}</small></div>`+(!op?'<span>🔒 Termina el nivel anterior</span>':en?'<span>✅ Matriculado</span>':`<button class="btn" onclick="mt(${i},${v})">Matricularme</button>`)+'</div>';
if(!op||!en||p>=LN)return r;
return r+'<div class="path">'+Array.from({length:LN},(_,k)=>k).map(k=>{
const dn=k<p,cu=k===p,x=Math.round(Math.sin((k+v*3+i)*1.1)*46);
return `${k%3===0?`<div class="tm">Tema ${k/3+1}: ${tt(i,v,k/3|0)}</div>`:''}<div class="nw" style="transform:translateX(${x}px)"><button class="nd ${cu?'cur':dn?'':'lk'}" style="--c:${u.c};--sh:${u.d}" ${k<=p?`onclick="go(${i},${v},${k})"`:'disabled'} aria-label="Lección ${k+1} de ${u.n} ${nm}">${dn?'✓':cu?'★':'🔒'}${cu?'<span class="go">EMPEZAR</span>':''}</button>${cu?`<div class="cm" style="${x>0?'right:96px':'left:96px'}">${codi(80)}</div>`:''}</div>`}).join('')+'</div>'}).join('')}).join('');
}
if(V==='m'){
const M=[['Gana 30 XP',S.d.xp,30],['Completa 2 lecciones',S.d.l,2],['Acierta 10 respuestas',S.d.c,10]];
return `<h2 style="font-size:26px;margin-bottom:18px">Misiones de hoy</h2>`+M.map(m=>`<div class="card mis"><p><span>${m[0]}</span><span>${Math.min(m[1],m[2])}/${m[2]}</span></p><div class="bar"><i style="width:${Math.min(100,m[1]/m[2]*100)}%"></i></div></div>`).join('');
}
if(V==='r')return rank();
if(V==='t')return shop();
const lv=1+(S.xp/100|0),tot=tl();
return `<div class="end">${codi(150)}<p class="mono" style="color:var(--mu)">${A?'@'+rd('codora_u')[A].name+(rd('codora_u')[A].email?' · '+E(rd('codora_u')[A].email):''):'Invitado'}</p><h1>Nivel ${lv}</h1><div class="bar" style="max-width:360px;margin:auto"><i style="width:${S.xp%100}%"></i></div><p style="margin-top:8px;color:var(--mu)">${S.xp%100}/100 XP para el siguiente nivel</p>${ach()}<div class="grid"><div class="card"><b>⚡ ${S.xp}</b>XP total</div><div class="card"><b>🔥 ${S.streak}</b>Racha</div><div class="card"><b>💎 ${S.gems}</b>Gemas</div><div class="card"><b>✅ ${tot}</b>Lecciones</div></div><div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap"><button class="btn" onclick="lo()">${A?'Cerrar sesión':'Crear cuenta'}</button><button class="btn r" onclick="rs(this)">Reiniciar progreso</button></div></div>`;
}
function rs(b){if(b.dataset.s){S=fresh();save();render()}else{b.dataset.s=1;b.textContent='¿Seguro? Pulsa otra vez'}}
const tl=()=>Object.values(S.p).reduce((a,b)=>a+b,0);
const ACH=[['Primer paso','🌱',()=>tl()>=1],['10 lecciones','📘',()=>tl()>=10],['50 lecciones','📚',()=>tl()>=50],['Racha de 3 días','🔥',()=>S.streak>=3],['Racha de 7 días','🏅',()=>S.streak>=7],['Nivel completado','🎓',()=>U.some((u,i)=>LV.some((_,v)=>lvDone(i,v)))],['500 XP','⚡',()=>S.xp>=500],['200 gemas','💎',()=>S.gems>=200],['Experto','🧠',()=>U.some((u,i)=>lvDone(i,3))],['Maestro','👑',()=>U.some((u,i)=>lvDone(i,4))]];
const ach=()=>`<h3 style="margin:22px 0 10px">Logros</h3><div class="ach">${ACH.map(a=>`<div class="ac ${a[2]()?'on':''}"><span>${a[1]}</span>${a[0]}</div>`).join('')}</div><div class="row" style="margin-top:16px"><button class="btn" onclick="th()">Cambiar tema</button>${A?'<button class="btn r" onclick="dl(this)">Eliminar cuenta</button>':''}</div>`;
function th(){const d=document.documentElement,k=d.dataset.theme==='dark'||(!d.dataset.theme&&matchMedia('(prefers-color-scheme:dark)').matches);d.dataset.theme=S.th=k?'light':'dark';save()}
function dl(b){if(b.dataset.s){const u=rd('codora_u')||{};delete u[A];wr('codora_u',u);setS(null);render()}else{b.dataset.s=1;b.textContent='¿Seguro? Pulsa otra vez'}}
function rank(){
const us=Object.values(rd('codora_u')||{}).map(u=>{const me=A&&u.name.toLowerCase()===A;return{n:u.name,x:me?S.xp:(u.data&&u.data.xp)||0,me}});
if(!A)us.push({n:'Tú (invitado)',x:S.xp,me:1});
us.sort((a,b)=>b.x-a.x);
return `<h2 style="font-size:26px;margin-bottom:6px">Ranking</h2><p style="color:var(--mu);margin-bottom:16px">Compite con las demás cuentas de este dispositivo.</p>`+us.map((u,n)=>`<div class="rk ${u.me?'me':''}"><b>${['🥇','🥈','🥉'][n]||n+1}</b><span>${E(u.n)}</span><b>${u.x} XP</b></div>`).join('');
}
function buy(x){const c=[10,25][x];if(S.gems<c)return;S.gems-=c;if(x===0)S.hearts=5;else S.fr=(S.fr|0)+1;save();render()}
function shop(){
const it=[['❤️','Recargar vidas','Vuelve a tener 5 vidas.',10,S.hearts>=5],['🧊','Congelador de racha','Protege tu racha un día sin practicar. Tienes '+(S.fr|0)+'.',25,(S.fr|0)>=2]];
return `<h2 style="font-size:26px;margin-bottom:10px">Tienda</h2><div class="st" style="margin-bottom:6px">💎 ${S.gems} gemas</div>`+it.map((x,n)=>`<div class="lv"><div><span style="font-size:28px">${x[0]}</span> ${x[1]}<small>${x[2]}</small></div><button class="btn" ${S.gems<x[3]||x[4]?'disabled':''} onclick="buy(${n})">💎 ${x[3]}</button></div>`).join('');
}
function render(){
if(!SS){$('#app').className='app x';return auth()}
$('#app').className='app';if(S.th)document.documentElement.dataset.theme=S.th;
const N=[['a','Aprender','🏠'],['m','Misiones','🎯'],['r','Ranking','🏆'],['t','Tienda','🛒'],['p','Perfil','👤']];
$('#app').innerHTML=`<nav class="nav"><div class="logo"><svg width="40" height="40" viewBox="0 0 512 512" aria-hidden="true"><defs><linearGradient id="nm" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#a98bff"/><stop offset="1" stop-color="#5b2fc9"/></linearGradient></defs><polygon points="256,32 450,144 450,368 256,480 62,368 62,144" fill="url(#nm)" stroke="url(#nm)" stroke-width="28" stroke-linejoin="round"/><path d="M317.7 182.5A96 96 0 1 0 317.7 329.5" fill="none" stroke="#fff" stroke-width="46" stroke-linecap="round"/><rect x="334" y="216" width="34" height="80" rx="10" fill="#5ef2c2"/></svg>CODORA</div>${N.map(n=>`<button class="nv ${V===n[0]?'on':''}" onclick="V='${n[0]}';render()"><span style="font-size:24px">${n[2]}</span>${n[1]}</button>`).join('')}</nav><main><div class="top"><span class="lg">CODORA</span><div class="st">🔥 ${S.streak}</div><div class="st">⚡ ${S.xp}</div><div class="st">💎 ${S.gems}</div><div class="st">❤️ ${S.hearts}</div></div>${view()}</main><div class="side"><div class="card"><h3>Consejo de Codi</h3><div class="qrow">${codi(64)}<div style="font-weight:600;font-size:14px">${tip}</div></div></div></div>`;
}
let L=null,ft=$('#ft');
function go(i,v,k){
if(S.hearts<1)S.hearts=5;
const l=lesson(i,v,k);
L={i,v,k,qs:l.qs,n:l.qs.length,ok:0,miss:0,res:false};
$('#ls').style.display='flex';hud();
$('#lb').innerHTML=`<div class="qrow">${codi(90)}<div class="sp">${['Tema nuevo','Práctica','Dominio'][l.k]}: repasa de qué va antes de empezar.</div></div><div class="ex"><h3>${E(l.t)}</h3>${E(l.e)}<div class="cd">${E(l.c)}</div><b>Así es la lección</b><ul><li>${l.qs.length} ejercicios, el último para ordenar el código.</li>${v>2?'<li>Reto '+LV[v]+': '+(v>3?'fichas trampa, ':'')+'4 opciones y temas de todo el lenguaje.</li>':''}<li>Tienes 5 vidas y pierdes una por cada fallo.</li><li>Si fallas, la pregunta vuelve al final para que la domines.</li><li>Ganas más XP y gemas cuanto más alto es el nivel, y un extra si no fallas ninguna.</li></ul></div>`;
foot('','Empezar lección','',ask);
}

function hud(){$('#hr').textContent='❤️ '+S.hearts;$('#pg').style.width=(L.ok/L.n*100)+'%'}
function mood(c,a){const s=$('#lb .qrow .codi');if(!s)return;s.classList.remove('jump','shake','m-o','m-k');void s.getBoundingClientRect();s.classList.add(c,a)}
function foot(h,b,cl,fn){ft.className=cl||'';ft.innerHTML=`<div class="fi"><div>${h||''}</div><button class="btn ${cl==='ok'?'g':cl==='ko'?'r':''}" id="fb" ${fn?'':'disabled'}>${b}</button></div>`;if(fn)$('#fb').onclick=fn}
function ask(){
const q=L.qs[0];L.res=false;L.sel=null;hud();
let h=`<div class="qrow">${codi(90)}<div class="sp">${E(q.q)}</div></div>`;
if(q.t==='o'){L.opts=sh(q.o.slice());h+=L.opts.map((o,k)=>`<button class="op" onclick="pk(${k})">${E(o)}</button>`).join('')}
else{L.bank=sh(q.w.concat(q.x||[]));L.ans=[];h+='<div class="slot" id="sl"></div><div class="bank" id="bk"></div>'}
$('#lb').innerHTML=h;
if(q.t==='b')rb();
foot('','Comprobar',''  ,null);
}
function pk(k){if(L.res)return;L.sel=k;document.querySelectorAll('.op').forEach((e,n)=>e.classList.toggle('sel',n===k));foot('','Comprobar','',chk)}
function rb(){
$('#sl').innerHTML=L.ans.map((k,p)=>`<button class="ch" onclick="tk(${p})">${E(L.bank[k])}</button>`).join('');
$('#bk').innerHTML=L.bank.map((w,k)=>`<button class="ch ${L.ans.includes(k)?'ghost':''}" onclick="ad(${k})">${E(w)}</button>`).join('');
foot('','Comprobar','',L.ans.length?chk:null);
}
function ad(k){if(L.res||L.ans.includes(k))return;L.ans.push(k);rb()}
function tk(p){if(L.res)return;L.ans.splice(p,1);rb()}
function chk(){
const q=L.qs[0];L.res=true;
const r=q.t==='o'?L.opts[L.sel]===q.o[0]:L.ans.map(k=>L.bank[k]).join('\u0001')===q.w.join('\u0001');
const sol=q.t==='o'?q.o[0]:q.w.join(' ');
if(q.t==='o')document.querySelectorAll('.op').forEach((e,n)=>{e.classList.remove('sel');if(L.opts[n]===q.o[0])e.classList.add('ok');else if(n===L.sel)e.classList.add('ko')});
if(r){L.ok++;S.d.c++;snd([523,784]);mood('jump','m-o');const m=['¡Genial!','¡Perfecto!','¡Así se hace!','¡Muy bien!'];foot(`<b>${m[Math.random()*4|0]}</b>`,'Continuar','ok',nx)}
else{S.hearts=Math.max(0,S.hearts-1);L.miss++;L.qs.push(q);snd([220,150]);mood('shake','m-k');foot(`<b>Respuesta correcta</b><p class="mono">${E(sol)}</p>`,'Continuar','ko',nx)}
hud();save();
}
function nx(){
L.qs.shift();
if(S.hearts<=0)return fail();
if(!L.qs.length)return win();
ask();
}
function fail(){
$('#lb').innerHTML=`<div class="end">${codi(150)}<h1>¡Te quedaste sin vidas!</h1><p>Repasa y vuelve a intentarlo. Codi te espera con 5 vidas nuevas.</p></div>`;
document.querySelector('.end .codi').classList.add('m-k');
foot('','Salir','ko',()=>{S.hearts=5;save();out()});
}
function win(){
const t=day(),y=new Date(Date.now()-864e5).toISOString().slice(0,10);
const xg=15+5*L.v+(L.miss?0:5);S.xp+=xg;S.d.xp+=xg;S.d.l++;S.gems+=5+2*L.v+(L.miss?0:3);
if(pr(L.i,L.v)===L.k)S.p[L.i+'-'+L.v]=L.k+1;
if(S.last!==t){const z=new Date(Date.now()-1728e5).toISOString().slice(0,10);if(S.last===y)S.streak++;else if(S.last===z&&(S.fr|0)>0){S.fr--;S.streak++}else S.streak=1;S.last=t}
save();hud();snd([660,988]);conf();
const nm=lm();const acc=Math.round(L.n/(L.n+L.miss)*100);
$('#lb').innerHTML=`<div class="end">${codi(160)}<h1>¡Lección completada!</h1><p>${nm}</p><div class="grid"><div class="card"><b>⚡ +${xg}</b>XP</div><div class="card"><b>🎯 ${acc}%</b>Precisión</div></div></div>`;
const c=document.querySelector('.end .codi');c.classList.add('jump','m-o');
foot('','Continuar','ok',out);
}
function out(){$('#ls').style.display='none';L=null;render()}
function conf(){const c=['#8b5cf6','#ffc800','#58cc02','#1cb0f6','#ff7ab8'];for(let i=0;i<60;i++){const d=document.createElement('i');d.className='cf';d.style.cssText=`left:${Math.random()*100}vw;background:${c[i%5]};animation-delay:${Math.random()*.6}s;animation-duration:${1.6+Math.random()*1.4}s`;document.body.appendChild(d);setTimeout(()=>d.remove(),3600)}}
function rec(){
$('#app').innerHTML=`<div class="au">${codi(130)}<h1>Recupera tu cuenta</h1><p>Escribe el correo de tu cuenta y elige una contraseña nueva.</p><input class="in" id="em" type="email" placeholder="Correo electrónico" autocomplete="email"><input class="in" id="pw" type="password" placeholder="Contraseña nueva" autocomplete="new-password"><div class="er" id="er" role="alert"></div><button class="btn" style="width:100%" onclick="fix()">Cambiar contraseña</button><button class="gl" onclick="AM='in';auth()">Volver</button></div>`;
}
async function fix(){
const em=$('#em').value.trim().toLowerCase(),p=$('#pw').value,u=rd('codora_u')||{},k=Object.keys(u).find(x=>u[x].email===em),er=m=>{$('#er').textContent=m};
if(!k)return er('No hay ninguna cuenta con ese correo');
if(p.length<6)return er('La contraseña necesita al menos 6 caracteres');
const s=salt();u[k].s=s;u[k].h=await hs(p,s);wr('codora_u',u);AM='in';auth();$('#er').textContent='Contraseña cambiada. Ya puedes entrar.';
}
function auth(){
if(AM==='rec')return rec();
const up=AM==='up';
$('#app').innerHTML=`<div class="au">${codi(130)}<h1>${up?'Crea tu cuenta':'Bienvenido de nuevo'}</h1><p>Guarda tu progreso y tu racha con tu propio usuario.</p><div class="tabs"><button class="tb ${up?'':'on'}" onclick="AM='in';auth()">Entrar</button><button class="tb ${up?'on':''}" onclick="AM='up';auth()">Crear cuenta</button></div><input class="in" id="us" placeholder="Usuario" autocomplete="username" maxlength="16">${up?'<input class="in" id="em" type="email" placeholder="Correo electrónico" autocomplete="email">':''}<input class="in" id="pw" type="password" placeholder="Contraseña" autocomplete="${up?'new-password':'current-password'}">${up?'<input class="in" id="p2" type="password" placeholder="Repite la contraseña" autocomplete="new-password">':''}<div class="er" id="er" role="alert"></div><button class="btn" id="sb" style="width:100%" onclick="sub()">${up?'Crear cuenta':'Entrar'}</button>${up?'':'<button class="gl" onclick="AM=\'rec\';auth()">¿Olvidaste tu contraseña?</button>'}<button class="gl" onclick="guest()">Seguir como invitado</button></div>`;
}
async function sub(){
const n=$('#us').value.trim(),p=$('#pw').value,k=n.toLowerCase(),u=rd('codora_u')||{};
const er=m=>{$('#er').textContent=m;const c=$('.au .codi');c.classList.remove('shake');void c.getBoundingClientRect();c.classList.add('shake','m-k')};
if(!/^[a-z0-9_]{3,16}$/i.test(n))return er('El usuario debe tener de 3 a 16 letras, números o _');
if(p.length<6)return er('La contraseña necesita al menos 6 caracteres');
if(AM==='up'){
const em=$('#em').value.trim().toLowerCase();
if(!/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(em))return er('Escribe un correo válido');
if(Object.values(u).some(x=>x.email===em))return er('Ese correo ya tiene una cuenta');
if(u[k])return er('Ese usuario ya existe');
if(p!==$('#p2').value)return er('Las contraseñas no coinciden');
const s=salt();u[k]={name:n,email:em,s,h:await hs(p,s),data:fresh()};wr('codora_u',u);
}else if(!u[k]||u[k].h!==await hs(p,u[k].s))return er('Usuario o contraseña incorrectos');
setS(k);snd([660,988]);render();
}
function guest(){setS('@invitado');render()}
function lo(){setS(null);render()}
$('#cl').onclick=out;
document.addEventListener('keydown',e=>{if(e.key==='Enter'&&!L&&$('#sb'))sub();if(e.key==='Enter'&&L){const b=$('#fb');if(b&&!b.disabled){e.preventDefault();b.click()}}});
document.addEventListener('mousemove',e=>{document.querySelectorAll('.eyes').forEach(g=>{const r=g.getBoundingClientRect(),dx=e.clientX-(r.left+r.width/2),dy=e.clientY-(r.top+r.height/2),a=Math.atan2(dy,dx),m=Math.min(3.5,Math.hypot(dx,dy)/40);g.style.transform=`translate(${Math.cos(a)*m}px,${Math.sin(a)*m}px)`})});
render();
