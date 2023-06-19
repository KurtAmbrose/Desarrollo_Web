[33mcommit 643d85ff5c5fe90ee22efdda5b0cb79e551800da[m[33m ([m[1;36mHEAD -> [m[1;32mmain[m[33m)[m
Author: unknown <tororodb4@gmail.com>
Date:   Mon Jun 19 08:44:18 2023 -0600

    10) SELECTORES COMBINADOS: Para este ejemplo, el archivo de selectores combinados se usó

[33mcommit f451d07bd5d9e1bfb99d44b24947245af2a4929c[m[33m ([m[1;31morigin/main[m[33m, [m[1;31morigin/HEAD[m[33m)[m
Author: unknown <tororodb4@gmail.com>
Date:   Fri Jun 16 14:54:59 2023 -0600

    Se modificó una cosa del programa de selectores simples para practicar.

[33mcommit 7b008be319da6bf080b10f95628926b017ea3838[m
Author: unknown <tororodb4@gmail.com>
Date:   Fri Jun 16 14:44:23 2023 -0600

    9) SELECTORES SIMPLES: Un selector permite que un tag de HTML reciba unos atributos asignados. Para que estos los reciban, los selectores pueden identificarse con un ID, el nombre de su Clase, o simplemente poniendo los tags que desees para que posean los atributos requeridos. En el primer caso mencionado, los selectores por clase se tienen que declarar con un '.' al inicio, es decir así: '.remarcar'. En el caso de un ID se debe de declarar con un '#' al inicio, así se vería: '#clase'. Finalmente, para un elemento o tag de HTML, simplemente se debe de poner el nombre del tag y ya.

[33mcommit 21984d8bfbfccf86c58e5dcc1dac836827142312[m
Author: unknown <tororodb4@gmail.com>
Date:   Wed Jun 14 19:08:51 2023 -0600

    Corrección de una cosa en el documento, una falta de ortografía.

[33mcommit d46f42d26aa5ce03c0e1981b3cc9ec437d7f22b6[m
Author: unknown <tororodb4@gmail.com>
Date:   Wed Jun 14 19:08:00 2023 -0600

    8) ANATOMÍA DE CSS: Las reglas de CSS le dan especificaciones al contenido del documento para como mostrarlo en pantalla. Para poder desarrollar una regla, esta debe de tener al menos dos partes: el Selector y la declaración. Por último, los detalles de las reglas de CSS deben de estar en otro lugar ajeno a la estructura del documento, es decir, fuera del archivo de HTML.

[33mcommit ee8a148dedb0c5d32719edbddc365cdbe7a3da15[m
Author: unknown <tororodb4@gmail.com>
Date:   Wed Jun 14 18:23:16 2023 -0600

    Se borró una carpeta innecesaria.

[33mcommit af7507da69c27c0ed1060a4924548c41c5552503[m
Author: unknown <tororodb4@gmail.com>
Date:   Mon Jun 12 16:04:21 2023 -0600

    7) DESPLEGAR IMAGENES EN HTML: Para desplegar imágenes, es necesario de tener el tag <img>, luego de ahí tendrá el atributo src (source) que es de dónde la estas sacando. Este atributo puede apuntar hacia una imagen que esté en el mismo directorio del archivo o que esté apuntando hacia otro lado fuera del directorio. Posteriormente necesita de los atributos weight y height para poder establecer el tamaño en pixeles de la imagen (es recomendable que se haga para que no exista problema alguno). Y opcionalmente puede tener el atributo alt.

[33mcommit 3d43c6ecc89949ce49e5d24ad75ac47ed0830dfa[m
Author: unknown <tororodb4@gmail.com>
Date:   Mon Jun 12 15:19:57 2023 -0600

    6.2) LINKS DENTRO DE UN ARCHIVO: Para poder poner los links que envíen a otras secciones de un documento, este debe de estar separado por secciones, y estas mismas deben de estar identificadas con un atributo del tag <section> siendo este el 'id'. Una vez con los ids ya definidos para cada sección, se debe de poner el mismo comando de 'href', sólo que ahora en las comillas hay que poner el id de la sección a la cuál quieras poner el link.

[33mcommit e143b4d8e7a716fcf9fbdd07ecc5350f2387d1af[m
Author: unknown <tororodb4@gmail.com>
Date:   Mon Jun 12 13:09:13 2023 -0600

    6) LINKS EXTERNOS E INTERNOS: Para los links externos, se aplica la misma sintaxis, sólo que se agrega como argumento en el tag <a> 'target'. Este sirve para definir si la página a la que será redirigido el usuario se abrirá en una ventana nueva o simplemente lo cambiará de página.

[33mcommit 08078a5da242039ef48557d4eb1f631858ba3514[m
Author: unknown <tororodb4@gmail.com>
Date:   Mon Jun 12 12:48:44 2023 -0600

    6) LINKS INTERNOS Y EXTERNOS: En este ejemplo, se revisa la manera de crear links que llevan al usuario hacia otro archivo en un mismo directorio, utilizando los tags <a>. Los links pueden alinearse a un mismo reglón o utilizarlos con un <div>, no hay problema.

[33mcommit 48913907a3315a46b1bfc790078fa501f2867d18[m
Author: unknown <tororodb4@gmail.com>
Date:   Fri Jun 9 18:00:52 2023 -0600

    5.1) ENTIDADES EN HTML: para que un grupo de palabras no se separe a la hora de minimizar una ventana, se necesita de usar &nbsp; en cada espacio del grupo de palabras, así a ala hora de minimizar, todo el grupo bajará al siguiente renglón sin separarse.

[33mcommit a14a01940f05b614c6f4391fcfefbc83bdfb2074[m
Author: unknown <tororodb4@gmail.com>
Date:   Fri Jun 9 17:50:06 2023 -0600

    5) ENTIDADES DE HTML: estas sirven para poder evitar problemas de renderizado a la hora de generar la página, haciendola compatible con decodificaciones limitadas, y también da más posibilidades para generar caracteres que no estén disponibles en el teclado. Para generar una identidad simplemente se debe de realizar esto: '&' = &amp;

[33mcommit cc1fb305e4404dfd04d5b1a1b74ff265969bb2c0[m
Author: unknown <tororodb4@gmail.com>
Date:   Tue Jun 6 20:42:16 2023 -0600

    4.1) LISTAS ORDENADAS: Con el tag ol, los puntos que se ponen para remarcar los elementos de la lista son remplazados por números. Esto es muy útil para crear listas con diferentes elementos.

[33mcommit b11107a482285d6f44ddfc44f1e5fab1e4743a5b[m
Author: unknown <tororodb4@gmail.com>
Date:   Tue Jun 6 19:51:31 2023 -0600

    4) LISTAS: Para crear una lista simple, se ocupa ul para hacer una lista, luego añades los li para hacer cada elemento de la lista. Sin embargo, si un elemento tiene sus propias subcategorias, entonces se puede volver a usar ul y nuevamente li.

[33mcommit 46c87699ef85f324da831eb851c4c9174f972580[m
Author: unknown <tororodb4@gmail.com>
Date:   Tue Jun 6 19:41:27 2023 -0600

    4) LISTAS: Aquí hay un ejemplo de una lista que está mal hecha.

[33mcommit 1bff87dc3e0d512914b4a83902641290f3310fe0[m
Author: unknown <tororodb4@gmail.com>
Date:   Tue Jun 6 19:28:53 2023 -0600

    Pequeño arreglo al código, sólo un espacio xd

[33mcommit 575bcca0d8c5459f8c997c9557df1683726d0d76[m
Author: unknown <tororodb4@gmail.com>
Date:   Tue Jun 6 19:26:51 2023 -0600

    3.3) ELEMENTOS SEMÁNTICOS: A la par de los encabezados, los elementos semánticos tienen diferentes distinciones, y todos sirven para hacer una página web profesional. Dentro del archivo se pueden encontrar las funciones de cada uno.

[33mcommit 2afe86ef8c513ee0002c885ef2b84a7b23b3b7bb[m
Author: unknown <tororodb4@gmail.com>
Date:   Tue Jun 6 19:13:13 2023 -0600

    3) ELEMENTOS DE TIPO ENCABEZADO: H1 siempre será el encabezado principal, y conforme este número vaya aumentando (h1, h2, h3, h4 ... hn), su importancia será menor.

[33mcommit 4ccf9baa9c628cc2884d436191df34d2f0116904[m
Author: unknown <tororodb4@gmail.com>
Date:   Tue Jun 6 19:03:37 2023 -0600

    3) ELEMENTOS DE TIPO ENCABEZADO: Sirve para crear títulos y subtítulos en una página web. Dependiendo de cuantos encabezados hayan uno será más importante que el otro.

[33mcommit 497595b0769977674054c2b142c8750e343f43bf[m
Author: unknown <tororodb4@gmail.com>
Date:   Tue Jun 6 18:31:57 2023 -0600

    2.2) atributo lang: Simplemente sirve paradecirle al navegador el idioma de la página web que se está creando.

[33mcommit 80a0fd655f420041c4957ded9c168fee36de0382[m
Author: unknown <tororodb4@gmail.com>
Date:   Tue Jun 6 18:29:56 2023 -0600

    2) ELEMENTOS DE TIPO DIV Y SPAN: Estos sirven para separar textos en diferentes lineas. Los de DIV ocupan una línea entera, y los de Span sirven como frases que se pueden meter entre elementos de tipo DIV.

[33mcommit 8259421c70db74f279d6b137e64dc3abb3209325[m
Author: unknown <tororodb4@gmail.com>
Date:   Tue Jun 6 17:46:49 2023 -0600

    1) ESTRUCTURA DE UN DOCUMENTO EN HTML: se aprendió de lo básico que tiene un tag para poder crear una página de tipo documento y a su vez comprobar que no tenga errores.

[33mcommit 40f43991816f27ebd1ed811502983307d64e8463[m
Author: unknown <tororodb4@gmail.com>
Date:   Tue Jun 6 17:34:04 2023 -0600

    1) ESTRUCTURA DE UN DOCUMENTO:

[33mcommit f1060598faf06fd1e34b803e59f615db6a806dec[m
Author: unknown <tororodb4@gmail.com>
Date:   Tue Jun 6 16:15:46 2023 -0600

    Un mensaje para el putarraco del rafa xd.

[33mcommit 73ab2690742044725a51e233a5d9c60430032e8a[m
Author: unknown <tororodb4@gmail.com>
Date:   Tue Jun 6 15:54:11 2023 -0600

    Se creó otro archivo en el que muestra la estructura de un archivo html pero mejor desarrollada y con más detalles.

[33mcommit ac1761075791fc97b0da1f4be0e98f2d428ff7fb[m
Author: unknown <tororodb4@gmail.com>
Date:   Tue Jun 6 15:39:02 2023 -0600

    Se creó un programa para comenzar con el uso de HTML.

[33mcommit 484fcc50da5715bba943b1835349f7c1573868d7[m
Author: unknown <tororodb4@gmail.com>
Date:   Mon Jun 5 18:56:21 2023 -0600

    ya se usar bien browser sync y github :D

[33mcommit 32c71da9e871304929dc2f3e0bad7cd34d9d37e6[m
Merge: 77334e7 cc17484
Author: unknown <tororodb4@gmail.com>
Date:   Mon Jun 5 18:20:22 2023 -0600

    Merge branch 'main' of https://github.com/KurtAmbrose/coursera

[33mcommit 77334e73eb40df5924bbd6b2f542b3824f7c9185[m
Author: unknown <tororodb4@gmail.com>
Date:   Mon Jun 5 18:17:44 2023 -0600

    Prueba para hacer una página de internet

[33mcommit cc17484749e794ebdbae9efaef20348894fe781e[m
Author: AMBROSE <134548322+KurtAmbrose@users.noreply.github.com>
Date:   Mon Jun 5 18:04:39 2023 -0600

    Create static.yml

[33mcommit f94321f13a58a2ba1c8d47264ed4f2f34862c6a6[m
Author: unknown <tororodb4@gmail.com>
Date:   Wed May 31 18:43:37 2023 -0600

    Small adition-

[33mcommit 3f6112e7abaf91443f11d39e7e8f6a984189794b[m
Author: unknown <tororodb4@gmail.com>
Date:   Wed May 24 15:54:04 2023 -0600

    HOLA HTML, AHÍ TE VOY XD

[33mcommit 1b13f5c93a1606f8366d2be42848bbfaf79bb104[m
Author: AMBROSE <134548322+KurtAmbrose@users.noreply.github.com>
Date:   Wed May 24 15:25:38 2023 -0600

    Initial commit
