<template>
  <main class="page legal">
    <div class="content">
      <div class="content--inner old-crt--theme">
        <TheHeader />
        <!-- typewritin´Title -->
        <div class="typewriter--theme is-legal">
          <h3 class="mode--code">
            Legal Disclaimer
          </h3>
        </div>

        <!-- all Legal Terms -->
        <section class="paragraph-block paragraph--theme has-spaced">
          <!-- <p v-for="(term, index) in terms" :key="index" v-html="term.row"></p> -->
          <!-- (legal) OWNERSHIP -->
          <p>
            Este website respeta a pies juntillas las leyes que regulan las relaciones entre el <em class="laws-slang">Prestador</em> (yo) 
            y los <em class="laws-slang">Usuarios</em> (tú / vosotros) vigentes en España y en Europa como son:
            <a
              class=""
              href="https://www.boe.es/doue/2016/119/L00001-00088.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="Reglamento 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas con esta plantilla de política de privacidad"
            >
              <b>RGPD</b> <small>[ www.boe.es ]</small>
            </a>,
            <a
              class=""
              href="https://boe.es/boe/dias/2018/12/06/pdfs/BOE-A-2018-16673.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales"
            >
              <b>LOPDGDD</b> <small>[ www.boe.es ]</small>
            </a> y 
            <a
              class=""
              href="https://www.boe.es/buscar/doc.php?id=BOE-A-2002-13758"
              target="_blank"
              rel="noopener noreferrer"
              title="Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico en el blog"
            >
              <b>LSSI</b> <small>[ www.boe.es ]</small>
            </a>.
          </p>
          <p>
            El <em class="laws-slang">Prestador</em> de esta web, <span class="url">{{ owner.url }}</span>, y sus servicios ofertados de diseño gráfico 
            y desarrollo web es: <span class="name">{{ owner.name }}</span>, también conocido como <span class="nickname">{{ owner.nickname }}</span>, 
            que manifesta clarísimamente sus datos identificativos para que el <em class="laws-slang">Usuario</em> pueda comprobar que aquí no hay ni 
            trampa ni cartón y que estos son reales:
          </p>
          <ul class="listed">
            <li>
              <small>_></small> <b>Prestador:</b> Javier Lorenzo Fernández [ <small class="nickname">{{ owner.nickname }}</small> ]
            </li>
            <li>
              <small>_></small> <b>DNI:</b> 53385793X
            </li>
            <!-- <li>
              <small>_></small> <b>Registro mercantil:</b> ¿?
            </li>-->
            <li>
              <small>_></small> <b>Domicilio:</b> Calle Hierro, nº6, escalera 3 2º2, 28343, Valdemoro, Madrid.
            </li>
            <li>
              <small>_></small> <b>Correo electrónico:</b>
              <a
                :href="`mailto:${owner.email}`"
                :title="`Contactar vía correo electrónico con: ${owner.email}`"
              >
                {{ owner.email }}
              </a>
            </li>
          </ul>
          <p>
            Accediendo y navegando por este sitio web ya adquieres la condición y serás considerado 
            <em class="laws-slang">"Usuario"</em> puesto que así lo dice la ley. Y la ley va a misa.
          </p>
          <p>
            Además yo, osea el <em class="laws-slang">Prestador</em>, soy un proveedor profesional de
            <b>servicios y productos gráficos y digitales</b> y ofrecemos soluciones
            del ámbito de internet como: sitios web, landing pages, ecommerces, webapps, blogs, social media,
            diseño gráfico, impresión digital y un largo etcétera.
          </p>

          <!-- (legal) PRIVACY -->
          <h3 class="section-title">
            Política de privacidad
          </h3>
          <p>
            Cualquier dato que nos facilites a través de las vías de contacto actualmente existentes:
            Whatsapp, teléfono, correo electrónico o redes sociales, serán
            <!-- incorporados a un fichero automatizado convenientemente registrado ante la
            <em>Agencia Española de Protección de Datos (AGPD)</em> y sobre el que podrá ejercer sus derechos
            reconocidos legalmente como son el acceso a estos datos, su rectificación, su cancelación y la oposición a los
            mismos escribiendo un correo electrónico a:-->
            <b>tratados anónimamente</b> y podrás ejercer tus derechos legales de: acceso a estos datos, 
            su rectificación, su cancelación y la oposición a los mismos tal y como te explicaré más adelante.
          </p>
          <p>
            Los escasos datos que aquí recabo <b>tienen las siguientes finalidades</b>:
          </p>
          <ul class="listed">
            <li>
              1. Asegurar una gestión óptima de la <b>información, servicios y productos</b> aquí ofertados y/o solicitados por el
              <em class="laws-slang">Usuario</em>.
            </li>
            <li>
              2. Comunicación y resolución de <b>consultas, dudas</b>...
            </li>
            <li>
              3. Envío de <b>publicidad</b> e información comercial por medios electrónicos, acerca de los productos y 
              servicios de <span class="url">{{ owner.url }}</span> y/o información relativa a ambos.
            </li>
            <li>
              4. Mejorar la <b>experiencia de Usuario</b> analizándo cómo navegas por este sitio web y así mediante herramientas como 
              <a
                href="https://analytics.google.com/analytics/web/provision/#/provision"
                title="Ir al website de Google Analytics"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Google Analytics</span>
              </a>. Todo ello a través de <em>cookies</em> descritas en la
              <a
                href="#"
                :title="`Ir a la sección de Política de Cookies en ${owner.nickname}`"
                v-scroll-to="{ el: '#section-cookies', offset: -120 }"
              >
                <span>política de cookies</span>
              </a>.
            </li>
          </ul>
          <!-- <p>
            En la <b>recogida y el tratamiento de los datos de carácter personal</b> se han adoptado las
            <b>medidas de seguridad</b> adecuadas para evitar la pérdida, el acceso no autorizado o la manipulación de los
            mismos, de acuerdo con lo establecido en el <em>Real Decreto 1720/2007, de 21 de diciembre</em>.
          </p> -->
          <p>
            Como <em class="laws-slang">Prestador</em> me comprometo a <b>proteger la información confidencial</b>
            facilitada por el <em class="laws-slang">Usuario</em> limitando su uso a lo expuesto en el párrafo anterior.
            Los datos de carácter personal que me facilites nunca serán utilizados para prestar servicios a terceros
            que NO estén especificados en este <em>Aviso Legal</em>.
          </p>
          <p>
            Como <em class="laws-slang">Usuario</em> certificas que eres <b>mayor de 14 años</b> poseyendo
            la capacidad legal necesaria para la prestación del consentimiento al tratamiento de tus datos de carácter personal
            y todo ello, de conformidad con lo establecido en la presente <em>Política de Privacidad</em>.
            De no ser así contacta con tu tutor o un adulto mayor de edad para que te valide o cierra esta pestaña del navegador
            y abre Twitch...
          </p>
          <p>
            Como <em class="laws-slang">Usuario</em> puedes ejercitar los <b>derechos de acceso</b>,
            <b>rectificación</b>, <b>cancelación</b> y  <b>oposición</b> sobre <b>tus datos personales</b> así como el de
            <b>revocación del consentimiento</b> enviando un correo electrónico a
            <a
              :href="`mailto:${owner.email}?subject=Sobre%20el%20tratamiento%20de%20mis%20datos`"
              :title="`Contactar vía correo electrónico con ${owner.email} sobre el tratamiento de datos personales`"
            >
              {{ owner.email }}
            </a>
            indicando claramente el derecho que deseas ejercitar e indentificándose apropiadamente.
          </p>
          <!-- INFO: Para cuando envíe publicidad o newsletters vía correo electrónico -->
          <!--
          <p>
            Como <em class="laws-slang">Prestador</em> cumplo la
            <em>Ley 34/2002 de 11 de julio, de Servicios de la Sociedad de la Información y el Comercio Electrónico</em>
            así que en caso de querer remitirte infomación comercial vía correo electrónico te pediré anticipadamente tu aprobación
            para el uso de tu correo electrónico con fines comerciales. Siempre podrás <em>"darte de baja"</em>
            de manera automática en los distintos correos electrónicos que recibas como suscriptor de nuestra lista de correo o
            enviándonos un email a:
            <a
              :href="`mailto:${owner.email}?subject=Solicitud%20de%20baja%20en%20listade%20%20correo`"
              :title="`Contactar vía correo electrónico con ${owner.email} para darse de baja de emais publicitarios`"
            >
              {{ owner.email }}
            </a>
          </p>
          -->
          <p>
            Como <em class="laws-slang">Usuario</em> <b>responderás de la autenticidad de los datos que facilites</b> y yo, como responsable
            de <span class="url">{{ owner.url }}</span>, me reservo el derecho a excluir de los servicios prestados en este sitio web a todo
            <em class="laws-slang">Usuario</em> que haya falsificado datos o realizado suplantaciones indebidas.
          </p>

          <h4 class="subsection-title">
            Finalidades, tratamiento y conservación
          </h4>
          <p>
            El presente sitio web, <span class="url">{{ owner.url }}</span>, no recolecta datos de caracter personal a parte de los
            que pudiese proporcionar voluntariamente por el propio <em class="laws-slang">Usuario</em>. Cualquier dato
            proporcionado por el <em class="laws-slang">Usuario</em> a través de Whatsapp, teléfono, correo electrónico o redes sociales
            serán tratados por el <em class="laws-slang">Prestador</em>, que es el responsable del tratamiento de ellos, para las
            <b>finalidades que se indican a continuación</b>.
          </p>
          <p>
            En esta tabla desgloso el motivo por el que trato tus datos y durante cuánto tiempo lo conservo:
          </p>
          <div class="table-container">
            <table class="table responsive-table">
              <thead>
                <tr>
                  <th>Finalidad</th>
                  <th>Base jurídica</th>
                  <th>Plazos de conservación</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Comprobar la identidad y garantizar la seguridad de los <em class="laws-slang">Usuarios</em> así como facilitar
                    la gestión del servicio.
                  </td>
                  <td>Interés legítimo del responsable del tratamiento.</td>
                  <td>
                    Conservaremos los datos mientras sean necesario para cumplir con las finalidades de la plataforma.
                    Puedes darte de baja por teléfono: +34 696 68 27 91
                  </td>
                </tr>
                <tr>
                  <td>
                    Gestionar y responder las solicitudes de información realizadas telefónicamente, a través de email o
                    de cualquiera de nuestras redes sociales o Whatsapp.
                  </td>
                  <td>Interés legítimo del responsable del tratamiento.</td>
                  <td>
                    Conservaremos los datos mientras sean necesario para cumplir con las finalidades de la plataforma.
                    Puedes darte de baja por teléfono: +34 696 68 27 91
                  </td>
                </tr>
                <tr>
                  <td>
                    Para la gestión de la seguridad de la información y del ejercicio de los derechos en materia de
                    privacidad en cumplimiento del RGPD.
                  </td>
                  <td>Cumplimiento del RGPD.</td>
                  <td>
                    Conservaremos los datos mientras sean necesario para cumplir con las finalidades de la plataforma.
                    Puedes darte de baja por teléfono: +34 696 68 27 91
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 class="subsection-title">
            Transferencias internacionales
          </h4>
          <p>
            Pr tu seguridad, tus datos son tratados en España y EEUU. Las aplicaciones son realizadas por proveedores de
            desarrollo de software certificados y con seguridad garantizada como son <em>Google LLC (Alphabet Inc)</em>,
            <em>Microsoft Corporation</em>...
          </p>

          <h4 class="subsection-title">
            Derechos de los usuarios
          </h4>
          <p>
            Como <em class="laws-slang">Usuario</em> puedes ejercitar los derechos que se detallan
            a continuación ante el <em class="laws-slang">Prestador</em> a través de la
            <nuxt-link to="/contacto" :title="`Ir a la página de contacto de #${owner.name}`">
              <span>página de contacto</span> </nuxt-link>
            o bien a la dirección de correo electrónico:
            <a
              :href="`mailto:${owner.email}?subject=Ejercitar%20derechos%20de%20en%20usuario`"
              :title="`Enviar email para ejercitar derechos de usuario en ${owner.url}`"
            >
              {{ owner.email }}
            </a>
            a la atención de {{owner.author}}. La solicitud deberá contener copia de tu DNI u otro documento identificativo
            legalmente equivalente, así como el contenido mínimo previsto en la normativa aplicable. Si la solicitud no reúne los
            requisitos especificados, <span class="url">{{ owner.url }}</span> podrá requerir su subsanación. Obviamente no se exigiré ninguna
            contraprestación o compensación de ningún tipo por el ejercicio de tus derechos.
          </p>
          <div class="table-container">
            <table class="table responsive-table">
              <thead>
                <tr>
                  <th>Derecho</th>
                  <th>¿En qué consiste?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Derecho de acceso</td>
                  <td>Consultar qué datos personales tenemos sobre Usted.</td>
                </tr>
                <tr>
                  <td>Derecho de rectificación</td>
                  <td>Modificar los datos personales que tenemos sobre Usted cuando sean inexactos.</td>
                </tr>
                <tr>
                  <td>Derecho de oposición</td>
                  <td>Solicitar que no tratemos tus datos personales para algunas finalidades concretas.</td>
                </tr>
                <tr>
                  <td>Derecho de supresión</td>
                  <td>Solicitar que eliminemos sus datos personales.</td>
                </tr>
                <tr>
                  <td>Derecho de limitación</td>
                  <td>Solicitar que limitemos el tratamiento de sus datos personales.</td>
                </tr>
                <tr>
                  <td>Derecho de portabilidad</td>
                  <td>
                    Obtener en un formato electrónico los datos personales que nos haya suministrado y los que se hayan
                    generado en el contexto del servicio.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            En caso de no quedar conforme en el ejercicio de sus derechos, podrá presentar una reclamación ante la
            autoridad de control en materia de protección de datos, <em>la Agencia Española de Protección de Datos</em>,
            cuya página web es:
            <a
              href="https://www.aepd.es/es"
              target="_blank"
              rel="noopener noreferrer"
              title="Ir al website de la Agencia Española de Protección de Datos"
            >
              <span>www.agpd.es</span>
            </a>
          </p>

          <!-- (legal) TERMS OF USE -->
          <h3 class="section-title">
            Condiciones de uso
          </h3>
          <p>
            Usar, navegar y consultar este sitio web, <span class="url">{{ owner.url }}</span>, te otorga la condición de
            <em class="laws-slang">Usuario</em> e implica <b>aceptación completa de todas las cláusulas y condiciones de uso</b>
            incluidas en esta página de <em>aviso legal</em> así como las condiciones particulares que pudieran establecerse
            entre las dos partes, <em class="laws-slang">Prestador</em> (<em>yo</em>) y <em class="laws-slang">Usuario</em> (<em>tú</em>),
            en relación con la prestación de servicios y/o productios previamente acordados.
          </p>
          <p>
            Si no estuvieras de acuerdo con todas y cada una de estas cláusulas y condiciones deja de utilizar, navegar y consultar este sitio web.
          </p>
          <p>
            El acceso, consulta y navegación por este sitio web es libre y gratuito y por supuesto no supone el inicio de una relación comercial
            conmigo, el <em class="laws-slang">Prestador</em>.
          </p>
          <p>
            Como <em class="laws-slang">Usuario</em>, estás obligado a NO utilizar cualquiera de los contenidos del
            sitio web con fines o efectos ilegales, prohibidos en este <em>aviso legal</em> o por la legislación vigente, lesivos
            de los derechos e intereses de terceros, o que de cualquier forma puedan dañar, inutilizar, sobrecargar, deteriorar o
            impedir la normal utilización de los contenidos, los equipos informáticos o los documentos, archivos y toda clase de
            contenidos almacenados en cualquier equipo informático propios o contratados por el <em class="laws-slang">Prestador</em>,
            de otros usuarios o de cualquier <em class="laws-slang">Usuario</em> de Internet.
          </p>

          <h4 class="subsection-title">
            Responsabilidad
          </h4>
          <p>
            El <em class="laws-slang">Prestador</em> no es ni será responsable de las opiniones vertidas por los <em class="laws-slang">Usuarios</em>
            o terceras personas ajenas a <span class="url">{{ owner.url }}</span> a través de redes sociales, blog u otras herramientas de participación.
          </p>
          <p>
            El <em class="laws-slang">Prestador</em>, osea yo, me reserva el derecho de retirar todos aquellos comentarios o contenido fraudulento y/o
            manipulado que vulneren la legislación vigente, lesivos de los derechos o intereses de terceros o que resulten adecuados para su publicación.
            En caso de que, como <em class="laws-slang">Usuario</em>, consideres que existe en el sitio web algún contenido que pudiera ser susceptible
            de esta clasificación, pido encarecidamente que me lo notifiques escribiéndo un correo electrónico a la siguiente dirección de email:
            <a
              :href="`mailto:${owner.email}?subject=Denuncia%20de%20contenido`"
              :title="`Denunciar contenido inapropiado en la web de ${owner.url}`"
            >
              {{ owner.email }}
            </a>
          </p>
          <p>
            El <em class="laws-slang">Prestador</em> se reserva el derecho a modificar, cancelar, restringir o suspender el contenido del sitio web,
            los links y vínculos o la información obtenida a través del sitio web, sin necesidad de previo aviso.
          </p>
          <p>
            Este sitio web, <span class="url">{{ owner.url }}</span>, ha sido desarrollado, revisado y testeado para que <b>funcione correctamente</b>.
            A priori, puede garantizarse el correcto funcionamiento los 365 días del año, 24 horas al día. No obstante, nunca puede descartarse
            la posibilidad de que acontezcan causas de fuerza mayor como: catástrofes naturales, huelgas, pandemias o circunstancias ajenas a
            mi persona que imposibiliten el acceso o el correcto funcionamiento de este sitio web.
          </p>

          <h4 class="subsection-title">
            Medidas de seguridad
          </h4>
          <p>
            Cualquier dato personal que facilites al <em class="laws-slang">Prestador</em> puede ser almacenado en bases de datos, cuya titularidad
            corresponde en exclusiva al <em class="laws-slang">Prestador</em> pero que se prestan a través de un tercero, simpre un proveedor de servicios
            de intenet reputado y homologado, que asume todas las medidas de índole técnica, organizativa y de seguridad que garantizan la confidencialidad,
            integridad y calidad de la información contenida en las mismas de acuerdo con lo establecido en la normativa vigente en protección de datos.
          </p>
          <p>
            Hay que decir que las medidas de seguridad de los sistemas informáticos en Internet son extremadamente fiables pero no infalibles y que el
            <em class="laws-slang">Prestador</em> no puede garantizar al 100% la inexistencia de virus u otros elementos que puedan producir alteraciones
            en los sistemas informáticos (<em>software y hardware</em>) del <em class="laws-slang">Usuario</em> o en tus documentos electrónicos y ficheros
            contenidos en los mismos. Dicho esto, el <em class="laws-slang">Prestador</em> pone todos los medios necesarios y toma las medidas de seguridad
            oportunas para evitar la presencia de estos elementos dañinos.
          </p>

          <h4 class="subsection-title">
            Enlaces de interés a otros sitios Web
          </h4>
          <p>
            Como <em class="laws-slang">Prestador</em> puedo proporcionarte acceso a sitios web de terceros mediante enlaces con la finalidad de
            informar sobre la existencia de otras fuentes de información en Internet en las que podrá ampliar la información relativa a servicios ofrecidos
            en el sitio web.
          </p>
          <p>
            Estos enlaces a otros sitios web no suponen una sugerencia o recomendación ni mucho menos una obligación para que visites las páginas web de destino.
            Aunque siempre serán sugerencias de interés, veraces y legales, estas están fuera del control del <em class="laws-slang">Prestador</em>, por lo que
            <em class="laws-slang">Prestador</em> no es responsable del contenido de los sitios web vinculados, ni de los links o enlaces ubicados en él,
            ni del resultado que obtenga al seguir los enlaces.
          </p>
          <p>
            La existencia de estos enlaces no implica necesariamente la existencia de relaciones entre <em class="laws-slang">Prestador</em> y el/los propietario/s
            del sitio en el que se establezca el/los enlace/s, ni la aprobación por parte del <em class="laws-slang">Prestador</em> de sus contenidos o servicios
            ya que estos pueden cambiar si previo aviso.
          </p>
          <p>
            Si accedes a un sitio web externo desde un enlace que encuentres en <span class="url">{{ owner.url }}</span> deberás leer la <em>política de privacidad</em>
            propia del otro sitio web que visite. Cada web tiene sus condiciones.
          </p>

          <h4 class="subsection-title">
            Contratación de terceros
          </h4>
          <p>
            El <em class="laws-slang">Prestador</em> podrá <b>contratar y/o subcontratar con terceras entidades</b> todo lo que estime oportuno en relación con la
            realización de las actividades necesarias para la gestión, mantenimiento, actualización y/o mejora de la información, productos y servicios aquí ofertados.
            Dichas entidades podrían tener la facultad de desactivar los servicios interrumpiéndo el acceso al mismo para realizar las tareas contratadas.
          </p>

          <h4 class="subsection-title">
            Propiedad intelectual
          </h4>
          <p>
            Este sitio web, <span class="url">{{ owner.url }}</span>, incluyendo a título enunciativo pero no limitativo su codificación, edición,
            compilación y demás elementos necesarios para su funcionamiento, así como los diseños, logotipos, imagen corporativa, texto y gráfismos
            son propiedad de {{ owner.name }}. A él corresponde el ejercicio exclusivo de los derechos de explotación de los mismos en cualquier forma
            y, en especial, los derechos de reproducción, distribución, comunicación pública y transformación, de acuerdo
            con la legislación española y de la Unión Europea aplicable.
          </p>
          <p>
            NO está permitida la reproducción total o parcial, uso, explotación y distribución con fines comerciales de cualquiera de los recursos materiales, 
            recursos creativos, artículos o programación incluida en el presente sitio web: <span class="url">{{ owner.url }}</span>
          </p>
          <p>
            Yo, osea el <em class="laws-slang">Prestador</em> como titular de <span class="url">{{ owner.url }}</span>, autorizo expresamente a que <b>terceros
            puedan redirigir</b> directamente a los contenidos concretos de sitio web: <span class="url">{{ owner.url }}</span>
          </p>
          <p>
            Vuelvo a recordar la dirección de correo electrónico para poder realizar cualquier tipo de observación como posibles incumplimientos de los derechos
            de propiedad intelectual o industrial, o sobre cualquiera de los contenidos del sitio web:
            <a
              :href="`mailto:${owner.email}?subject=Denuncia%20incumplimiento%20derechos%20de%20propiedad%20intelectual`"
              :title="`Denunciar contenido inapropiado en la web de ${owner.url}`"
            >
              {{ owner.email }}
            </a>
          </p>

          <h4 class="subsection-title">
            Derecho de exclusión
          </h4>
          <p>
            El <em class="laws-slang">Prestador</em>, yo, me reservo el derecho a denegar o retirar el acceso a <span class="url">{{ owner.url }}</span> 
            y la información y los servicios/porductos ofrecidos sin necesidad de preaviso, a instancia propia o de un tercero, a aquellos <em class="laws-slang">Usuarios</em> 
            que incumplan cualquiera de las condiciones expuestas a lo largo de este <em>aviso legal</em>.
          </p>

          <h4 class="subsection-title">
            Jurisdicción
          </h4>
          <p>
            Este <em>aviso legal</em> se rige íntegramente por la <b>legislación española</b>.
          </p>
          <p>
            Para cualquier duda sobre la interpretación, aplicación y cumplimiento de este <em>aviso legal</em>, así como de las reclamaciones que puedan derivarse de su uso,
            las partes acuerdan someterse a los <b>jueces</b> y <b>tribunales</b> de la <b>CAM</b> (<em>Comunidad Autónoma de Madrid</em>), con renuncia expresa de cualquier
            otra jurisdicción que pudiera corresponderles siempre y cuando no haya una ley explícita que obligue a otra cosa,
          </p>

          <!-- INFO: incorporar cuando haya productos o servicios por los que cobrar €!! -->
          <!--
          <h4 class="subsection-title">
            Condiciones de Venta
          </h4>
          <p>
            En este apartado detallarás los pasos que debe realizar el <em class="laws-slang">Usuario</em> para completar una compra y las condiciones a las que ha de someterse.
          </p>
          -->

          <!-- INFO: incorporar cuando haya programas de afiliación, y/o anuncios patrocinados €!! -->
          <!--
          <h4 class="subsection-title">
            Enlaces de Afiliados y anuncios patrocinados
          </h4>
          <p>
            El sitio Web ofrece contenidos patrocinados, anuncios y/o enlaces de afiliados.
          </p>
          <p>
            La información que aparece en estos enlaces de afiliados o los anuncios insertados, son facilitados por los propios anunciantes, por lo que <em class="laws-slang">Prestador</em> no se hace responsable de posibles inexactitudes o errores que pudieran contener los anuncios, ni garantiza en modo alguno la experiencia, integridad o responsabilidad de los anunciantes o la calidad de sus productos y/o servicios.
          </p>
          -->

          <h4 class="subsection-title">
            Contacto
          </h4>
          <p>
            Para cualquier <b>duda o consulta</b> sobre sobre este sitio web, puedes enviar un mensaje de correo electrónico a la siguiente dirección de email:
            <a
              :href="`mailto:${owner.email}?subject=Duda%20o%20consulta`"
              :title="`Duda o consulta sobre la web de ${owner.url}`"
            >
              {{ owner.email }}
            </a>
          </p>

          <!-- (legal) COOKIES -->
          <h3 id="section-cookies" class="section-title">
            Política de cookies
          </h3>
          <h4 class="subsection-title">
            ¿Por qué hay que informar sobre las cookies?
          </h4>
          <p>
            El reglamento LSSI-CE,
            <a
              href="https://www.boe.es/buscar/doc.php?id=BOE-A-2002-13758"
              title="Publicación oficial del BOE sobre la Ley de la sociedad de la información y del comercio electrónico"
              target="_blank"
              rel="noopener noreferrer"
            >
              <em>Ley de la sociedad de la información y del comercio electrónico</em>
            </a>,
            obliga los porpietarios de sitios web, blogs o cualquier aplicación que descargue en tu navegador cookies de terceros a informar al
            <em class="laws-slang">Usuario</em> sobre <b>el tipo de cookies, la duración y la finalidad</b> de cada una de ellas.
          </p>

          <h4 class="subsection-title">
            ¿Y entonces las cookies qué son?
          </h4>
          <p>
            Una cookie es un pequeño fichero que <b>permite que el sitio web por el que está navegando recuerde información sobre su visita</b>.
            Estas cookies son instaladas en su navegador por cada web con la única finalidad de facilitar su próxima visita y hacer que el
            sitio web resulte más útil.
          </p>
          <p>
            Las cookies <b>NO almacenan información sensible sobre ti</b> como tarjetas de crédito o datos bancarios, fotografías o información personal.
            Los datos que guardan son de carácter técnico, estadísticos, personalización de contenidos, etc. La <b>información recogida por las cookies es anónima</b>.
          </p>
          <p>
            Las cookies <b>NO son virus</b>, ni troyanos, ni spam, ni spyware, ni abren molestas ventanas emergentes (pop-ups)... Sólo contribuyen
            a tener una mejor experiencia de navegación para el <em class="laws-slang">Usuario</em>.
          </p>
          <p>
            La mayoría de los navegadores aceptan como estándar a las cookies y, con independencia de las mismas, permiten o impiden en los ajustes
            de seguridad las cookies temporales o memorizadas. Más adelante explicaré cómo gestionarlas.
          </p>
          <p>
            Si continuas navegando por la rpesente web y/o pulsas el botón "aceptar" del banner de aviso de Cookies, <b>estarás consintiendo el empleo de estas cookies</b>
            (<small><em>artículo 22.2 de la Ley 34/2002 de Servicios de la Sociedad de la Información y Comercio Electrónico</em></small>).
          </p>

          <h4 class="subsection-title">
            ¿Cuántos y qué tipos de cookies existen?
          </h4>
          <p>
            Hay <span class="has-text-weight-medium">3 clasificaciones</span> por tipo de cookies según...
          </p>
          <p>
            ...<b>Quién las gestione</b>:
          </p>
          <ul class="listed">
            <p>
              Cookies <b>propias</b> o aquellas generadas y gestionadas por la propia página o dominio que está visitando.
            </p>
            <p>
              Cookies <b>de terceros</b> o aquellas generadas por servicios o proveedores externos como las que generará
              un chatbot, una herramienta de analítica web o las redes sociales de turno.
            </p>
          </ul>
          <p>
            ...<b>El tiempo que permanezcan almacenadas</b>:
          </p>
          <ul class="listed">
            <p>
              Cookies <b>sesión</b> o aquellas que se generarán y almacenarán tu información de navegación, permaneciendo
              activas hasta que abandones la página y cierres el navegador.
            </p>
            <p>
              Cookies <b>persistentes</b> o aquellas cuyos datos siguen almacenados aunque abandones la página y pueden
              ser tratados durante un periodo de tiempo que puede ir de unos minutos a varios años según haya definido
              previamente el responsable de la cookie.
            </p>
          </ul>
          <p>
            ...<b>La finalidad de los datos obtenidos</b>:
          </p>
          <ul class="listed">
            <p>
              Cookies <b>técnicas</b> o aquéllas que permiten al <em class="laws-slang">Usuario</em> la utilización de
              las diferentes opciones o servicios que existan en la web como: identificar la sesión, acceder a partes de acceso restringido,
              recordar los elementos que integran un pedido, realizar el proceso de compra de un pedido...
            </p>
            <p>
              Cookies de <b>personalización</b> o aquéllas que permiten recordar las preferencias del <em class="laws-slang">Usuario</em> como:
              el idioma, el tipo de navegador a través del cual accede al servicio, etc.
            </p>
            <p>
              Cookies de <b>análisis</b> o aquéllas que permiten la medición y análisis estadístico de la utilización que hacen los
              usuarios del servicio con el fin de mejorar la oferta de productos o servicios que se le ofrecen.
            </p>
            <p>
              Cookies <b>publicitarias</b> o aquéllas que permiten gestionar de forma eficaz la oferta de los espacios publicitarios para así
              encajar el contenido del anuncio al contenido de la página web.
            </p>
            <p>
              Cookies de <b>publicidad comportamental</b> o aquéllas que muestran publicidad en función de tus hábitos de navegación,
              tu país de procedencia, idioma, etc.
            </p>
          </ul>

          <h4 class="subsection-title">
            ¿Qué cookies utilizo aquí?
          </h4>
          <p>
            Aquí sólo uso cookies para <b>analizar el tráfico y establecer estadísticas de uso</b>. Además, comparto información sobre
            el uso que haga del sitio web con partners de redes sociales y análisis web, todos ellos de más que conocidos (<em>Google,
            LinkedIn...</em>) quienes pueden combinarla con otra información que ellos hayan recopilado a partir del uso que tú
            hayas hecho de sus servicios (con tu cuenta personal de LinkedIn, por ejemplo).
          </p>
          <p>Eso sí, en ningún caso se van a utilizar cookies que comprometan tu privacidad.</p>
          <p>
            Esta es la <b>relación de cookies</b> que usa <span class="url">{{ owner.url }}</span>:
          </p>
          <div class="table-container">
            <table class="table responsive-table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Tipo</th>
                  <th>Temporalidad</th>
                  <th>Titularidad</th>
                  <th>Finalidad</th>
                  <th>Dominio</th>
                </tr>
              </thead>
              <tbody>
                <!-- <tr>
                  <td>__cfduid</td>
                  <td>Técnica de terceros</td>
                  <td>Persistente</td>
                  <td>CloudFlare, Inc.</td>
                  <td>
                    Identificar tráfico web de confianza. No corresponde a ningún id de <em class="laws-slang">Usuario</em> en la aplicación web, ni
                    guarda ningún dato personal identificable.
                  </td>
                  <td>cloudfare.com</td>
                </tr> -->
                <!-- <tr>
                  <td>__hstc</td>
                  <td>Técnica de terceros</td>
                  <td>Persistente</td>
                  <td>HubSpot, Inc.</td>
                  <td>
                    La cookie principal para seguimiento de los visitantes. Contiene el dominio, utk, marca de tiempo
                    inicial (primera visita), marca de tiempo más reciente (última visita), marca de tiempo actual (esta
                    visita) y número de sesión (aumenta para cada sesión posterior).
                  </td>
                  <td>hubspot.com</td>
                </tr> -->
                <!-- <tr>
                  <td>hubspotutk</td>
                  <td>Estrictamente necesaria de terceros</td>
                  <td>13 meses</td>
                  <td>HubSpot, Inc.</td>
                  <td>
                    se usa para hacer seguimiento de la identidad de un visitante. Se pasa a HubSpot en el envío de
                    formularios y se usa al eliminar la duplicación de contactos.
                  </td>
                  <td>hubspot.com</td>
                </tr> -->
                <!-- <tr>
                  <td>__hssrc</td>
                  <td>Estrictamente necesaria de terceros</td>
                  <td>Sesión</td>
                  <td>HubSpot, Inc.</td>
                  <td>
                    Determinar si el visitante ha reiniciado su navegador. Si esta cookie no existe cuando HubSpot
                    administra cookies, se considera una nueva sesión.
                  </td>
                  <td>hubspot.com</td>
                </tr> -->
                <!-- <tr>
                  <td>__hssc</td>
                  <td>Estrictamente necesaria de terceros</td>
                  <td>30 minutos</td>
                  <td>HubSpot, Inc.</td>
                  <td>
                    Seguimiento de las sesiones. Esto se utiliza para determinar si HubSpot debería aumentar el número de
                    sesión y las marcas de tiempo en la cookie __hstc. Contiene el dominio, el conteo de vistas viewCount
                    (se incrementa con cada vista de página en una sesión) y la marca de tiempo de inicio de una sesión.
                  </td>
                  <td>hubspot.com</td>
                </tr> -->
                <!-- <tr>
                  <td>messagesUtk</td>
                  <td>Estrictamente necesaria de terceros</td>
                  <td>13 meses</td>
                  <td>HubSpot, Inc.</td>
                  <td>
                    Para reconocer a los visitantes que chatean contigo utilizando la herramienta de mensajes. Si el
                    visitante deja tu sitio antes de que se agregue como un contacto, esta cookies se asociará con su
                    navegador. Si chateas con un visitante que luego regresa a tu sitio en el mismo navegador que ya tiene
                    cookies, la herramienta de mensajes cargará su historial de conversaciones.
                  </td>
                  <td>hubspot.com</td>
                </tr> -->
                <tr>
                  <td>_ga</td>
                  <td>Análisis de terceros</td>
                  <td>2 años</td>
                  <td>Google Analytics</td>
                  <td>Se usa para distinguir <em class="laws-slang">Usuarios</em>.</td>
                  <td>google.com</td>
                </tr>
                <tr>
                  <td>_gid</td>
                  <td>Análisis de terceros</td>
                  <td>24 horas</td>
                  <td>Google Analytics</td>
                  <td>Se usa para distinguir <em class="laws-slang">Usuarios</em>.</td>
                  <td>google.com</td>
                </tr>
                <tr>
                  <td>_gat</td>
                  <td>Análisis de terceros</td>
                  <td>1 minuto</td>
                  <td>Google Analytics</td>
                  <td>Se usa para limitar el porcentaje de solicitudes.</td>
                  <td>google.com</td>
                </tr>
                <!-- <tr>
                  <td>i18n_redirected</td>
                  <td>Técnica propia</td>
                  <td>Persistente</td>
                  <td>{{ owner.nickname }}</td>
                  <td>Mantener idioma elegido por el <em class="laws-slang">Usuario</em>.</td>
                  <td>{{ owner.url }}</td>
                </tr> -->
                <!-- <tr>
                  <td>cookiesConsent</td>
                  <td>Técnica propia</td>
                  <td>Persistente</td>
                  <td>{{ owner.nickname }}</td>
                  <td>
                    Guardar el consentimiento y aceptación de la política de cookies por parte del <em class="laws-slang">Usuario</em> y no volver a
                    mostrar el banner de alerta sobre las cookies.
                  </td>
                  <td>{{ owner.url }}</td>
                </tr> -->
                <!-- <tr>
                  <td>auth.*</td>
                  <td>Técnicas propias</td>
                  <td>Sesión</td>
                  <td>{{ owner.nickname }}</td>
                  <td>Para identificar de manera unitaria al <em class="laws-slang">Usuario</em> respecto a otros.</td>
                  <td>{{ owner.url }}</td>
                </tr> -->
              </tbody>
            </table>
          </div>
          <p>
            Aquí está la relación completa de <b>cookies de terceros</b>:
          </p>
          <nav class="navigation-links">
            <a
              href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              title="Qué cookies usa Google Analytics en el navegador del visitante"
              class="nav-link-item analytics"
            >
              Google <b>Tag Manager</b>
            </a>
            <!-- <a
              href="https://www.facebook.com/policies/cookies/"
              target="_blank"
              rel="noopener noreferrer"
              title="Qué cookies usa Facebook en el navegador del visitante"
              class="nav-link-item facebook"
            >
              <b>Facebook</b>
            </a> -->
            <!-- <a
              href="https://help.fullstory.com/hc/en-us/articles/360020829513-Why-FullStory-uses-First-Party-Cookies"
              target="_blank"
              rel="noopener noreferrer"
              title="Qué cookies usa Fullstory en el navegador del visitante"
              class="nav-link-item fullstory"
            >
              <b>Fullstory</b>
            </a> -->
            <!-- <a
              href="https://knowledge.hubspot.com/es/reports/what-cookies-does-hubspot-set-in-a-visitor-s-browser"
              target="_blank"
              rel="noopener noreferrer"
              title="Qué cookies usa Hubspot en el navegador del visitante"
              class="nav-link-item hubspot"
            >
              <b>Hubspot</b>
            </a> -->
          </nav>

          <h4 class="subsection-title">
            ¿Cómo se gestionan las cookies?
          </h4>
          <p>
            Puedes <b>gestionar</b> la configuración del navegador de modo que este te notifique antes de que se descargue cookie
            en tu equipo o también puedes <b>adaptar la configuración</b> de forma que el navegador rechace todas las cookies o
            sólo las cookies de terceros. Además puedes <b>eliminar cualquiera de las cookies</b> que ya se encuentren en tu
            equipo.
          </p>
          <p>
            El único problema es que cada navegador lo gestiona a su manera y tendrás que adaptar por separado la
            configuración de cada navegador y equipo que utilices pero aquí te dejamos una relación de enlaces a la
            documentación de gestión de cookies de los navegadores más utilizados para que sepas como hacerlo:
          </p>
          <nav class="navigation-links">
            <a
              href="https://support.google.com/chrome/answer/95647?hl=es&hlrm=en"
              class="nav-link-item chrome"
              title="Como bloquear o eliminar las cookies instaladas por #HazTuNegocioDigital en tu navegador Chrome"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google <b>Chrome</b>
            </a>
            <a
              href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies#ie=ie-10"
              class="nav-link-item explorer"
              title="Como bloquear o eliminar las cookies instaladas por #HazTuNegocioDigital en tu navegador Explorer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Internet <b>Explorer</b>
            </a>
            <a
              href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-?redirectlocale=en-US&redirectslug=Cookies"
              class="nav-link-item firefox"
              title="Como bloquear o eliminar las cookies instaladas por #HazTuNegocioDigital en tu navegador Firefox"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mozilla <b>Firefox</b>
            </a>
            <a
              href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
              class="nav-link-item safari"
              title="Como bloquear o eliminar las cookies instaladas por #HazTuNegocioDigital en tu navegador Safari"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apple <b>Safari</b>
            </a>
            <a
              href="https://help.opera.com/en/latest/web-preferences/#cookies"
              class="nav-link-item opera"
              title="Como bloquear o eliminar las cookies instaladas por #HazTuNegocioDigital en tu navegador Opera"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>Opera</b>
            </a>
          </nav>
          <p>
            Ojo que <b>bloquear las cookies puede afectar al correcto funcionamiento de este sitio web</b>.
          </p>

          <h4 class="subsection-title">
            Cookies en los dispositivos móviles
          </h4>
          <p>
            En <span class="url">{{ owner.url }}</span> también <b>usamos cookies en dispositivos móviles</b>. En este caso los navegadores de
            los dispositivos móviles permiten configurar las opciones o ajustes de privacidad para desactivar o eliminar las cookies.
            Aquí te dejamos una relación de enlaces a la documentación de gestión de cookies de los navegadores móviles más utilizados:
          </p>
          <nav class="navigation-links">
            <a
              href="https://support.google.com/chrome/answer/114662?hl=es&visit_id=637387185293136031-776021146&rd=1"
              class="nav-link-item chrome"
              title="Como cambiar los permisos y el almacenamiento de datos en todos los sitios web que has visitado en Chrome Mobile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>Chrome</b> Mobile
            </a>
            <a
              href="https://support.apple.com/es-es/HT201265"
              class="nav-link-item ios"
              title="Como cambiar los permisos y el almacenamiento de datos en todos los sitios web que has visitado en Apple iOS"
              target="_blank"
              rel="noopener noreferrer"
            >
              iPhone <b>iOS</b>
            </a>
            <a
              href="https://support.microsoft.com/es-es/help/4036480/windows-phone-8-1-end-of-support-faq"
              class="nav-link-item windows"
              title="Como cambiar los permisos y el almacenamiento de datos en todos los sitios web que has visitado en Windows Phone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>Windows</b> Phone
            </a>
            <a
              href="https://help.opera.com/en/latest/web-preferences/"
              class="nav-link-item opera"
              title="Como cambiar los permisos y el almacenamiento de datos en todos los sitios web que has visitado en Opera Mobile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>Opera</b> Mobile
            </a>
          </nav>

          <h4 class="subsection-title">
            Aceptación de la política de cookies
          </h4>
          <p>
            El <em class="laws-slang">Usuario</em> <b>acepta expresamente</b>, por la utilización de este sitio web, el tratamiento de la información
            recabada en la forma y con los fines mencionados a lo largo de esta <em>”política de cookies”</em>. Reconoce conocer la posibilidad de 
            echazar el tratamiento de tales datos o información rechazando el uso de cookies mediante la selección de la configuración apropiada a
            tal fin en su navegador. Si bien esta opción de bloqueo de cookies en su navegador puede no permitirle el uso pleno de todas las funcionalidades
            del presente sitio web: <span class="url">{{ owner.url }}</span>
          </p>
          <p>
            C'est fini ;-)
          </p>
        </section>

        <TheFooter :name="'Portfolio'" :page="'portfolio'" />
      </div>
    </div>
    <AnimLine />
  </main>
</template>

<script>
import TheHeader from '~/components/TheHeader'
import TheFooter from '~/components/TheFooter'
import AnimLine from '~/components/AnimLine.vue'

export default {
  components: { TheHeader, TheFooter, AnimLine },
  data() {
    return {
      owner: this.$store.state.owner,
    }
  },
  head() {
    const title = 'Aviso legal'
    const description =
      'Aviso legal y política de cookies del portfolio de proyectos y Curriculum Vitae personal de @jalofernandez en jalofernandez.com'
    const canonical = 'https://jalofernandez.com' + this.$route.path

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'Classification', name: 'Classification', content: 'Portfolio' },
        { hid: 'subject', name: 'subject', content: 'Personal Portfolio and Resume' },
      ],
      // Structured Data (Schema)
      __dangerouslyDisableSanitizers: ['script'],
      script: [{ innerHTML: JSON.stringify(this.owner.schema), type: 'application/ld+json' }],
      link: [
        { rel: 'canonical', hid: 'canonical', href: canonical },
        {
          rel: "dns-prefetch",
          href: "//www.boe.es/doue/2016/119/L00001-00088.pdf",
        },
        {
          rel: "dns-prefetch",
          href: "//boe.es/boe/dias/2018/12/06/pdfs/BOE-A-2018-16673.pdf",
        },
        {
          rel: "dns-prefetch",
          href: "//www.boe.es/buscar/doc.php?id=BOE-A-2002-13758",
        },
        {
          rel: "dns-prefetch",
          href: "//analytics.google.com/analytics/web/provision/#/provision",
        },
        {
          rel: "dns-prefetch",
          href: "//www.aepd.es/es",
        },
        {
          rel: "dns-prefetch",
          href: "//www.boe.es/buscar/doc.php?id=BOE-A-2002-13758",
        },
        {
          rel: "dns-prefetch",
          href: "//developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=es",
        },
        {
          rel: "dns-prefetch",
          href: "//support.google.com/chrome/answer/95647?hl=es&hlrm=en",
        },
        {
          rel: "dns-prefetch",
          href:
            "//support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies#ie=ie-10",
        },
        {
          rel: "dns-prefetch",
          href:
            "//support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-?redirectlocale=en-US&redirectslug=Cookies",
        },
        {
          rel: "dns-prefetch",
          href: "//support.apple.com/es-es/guide/safari/sfri11471/mac",
        },
        {
          rel: "dns-prefetch",
          href: "//help.opera.com/en/latest/web-preferences/#cookies",
        },
        {
          rel: "dns-prefetch",
          href:
            "//support.google.com/chrome/answer/114662?hl=es&visit_id=637387185293136031-776021146&rd=1",
        },
        { rel: "dns-prefetch", href: "//support.apple.com/es-es/HT201265" },
        {
          rel: "dns-prefetch",
          href:
            "//support.microsoft.com/es-es/help/4036480/windows-phone-8-1-end-of-support-faq",
        },
        {
          rel: "dns-prefetch",
          href: "//help.opera.com/en/latest/web-preferences/",
        },
      ],
    }
  },
}
</script>
