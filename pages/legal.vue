<template>
  <main class="page legal">
    <Zeppelin />
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
        <div class="paragraph-block paragraph--theme has-spaced">
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
              1. Asegurar una gestión óptima de los <b>servicios y productos</b> aquí ofertados y/o solicitados por el
              <em class="laws-slang">Usuario</em>.
            </li>
            <li>
              2. Comunicación y resolución de <b>consultas</b>.
            </li>
            <li>
              3. Envío de <b>publicidad</b> e información comercial por medios electrónicos, acerca de los productos y 
              servicios de <em>haztunegociodigital.com</em> y/o <em>jalofernandez.com</em> así como documentación relativa a ambos.
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
            Como <em class="laws-slang">Prestador</em> nos comprometemos a <b>proteger la información confidencial</b>
            facilitada por el <em class="laws-slang">Usuario</em> haciendo el uso extrictamente necesario de ellos según lo expuesto en el párrafo anterior.
            Los datos de carácter personal que nos facilites nunca serán utilizados para prestar servicios a terceros que NO estén especificados en este <em>Aviso Legal</em>.
          </p>
          <p>
            Como <em class="laws-slang">Usuario</em> certificas que eres <b>mayor de 14 años</b>
            y que por lo tanto posees la capacidad legal necesaria para la prestación del consentimiento al tratamiento de tus datos de carácter personal y todo ello,
            de conformidad con lo establecido en la presente <em>Política de Privacidad</em>. De no ser así contacta con tu tutor o un
            adulto mayor de edad para que te valide o cierra esta pestaña del navegador y abre Netflix...
          </p>
          <p>
            Como <em class="laws-slang">Usuario</em> puedes ejercitar los <b>derechos de acceso</b>,
            <b>rectificación</b>, <b>cancelación</b> y 
            <b>oposición</b> sobre <b>tus datos personales</b> así como el de
            <b>revocación del consentimiento</b> para cualquier de las finalidades anteriormente descritas, enviando un
            correo electrónico a
            <a
              href="mailto:legal@haztunegociodigital.com?subject=Sobre%20el%20tratamiento%20de%20mis%20datos"
              title="Tratamiento de datos personales en #HazTuNegocioDigital"
            >
              <span>legal@haztunegociodigital.com</span>
            </a>
            indentificándote e indicando el derecho que deseas ejercitar.
          </p>
          <p>
            Como <em class="laws-slang">Prestador</em> cumplimos la
            <em>Ley 34/2002 de 11 de julio, de Servicios de la Sociedad de la Información y el Comercio Electrónico</em>
            así que en caso de querer remitirte infomación comercial vía correo electrónico solicitaremos previamente tu aprobación
            para el tratamiento de tu correo electrónico con fines comerciales. Siempre podrás <em>"darte de baja"</em> de manera automática en los distintos
            correos electrónicos que recibas como suscriptor de nuestra lista de correo o enviándonos un email a:
            <a
              href="mailto:legal@haztunegociodigital.com?subject=Solicitud%20de%20baja%20en%20listade%20%20correo"
              title="Solicitud de baja de correos publicitarios de #HazTuNegocioDigital"
            >
              <span>legal@haztunegociodigital.com</span>
            </a>
          </p>
          <p>
            Como <em class="laws-slang">Usuario</em> <b>responderás de la veracidad de los datos que nos facilites</b> y nosotros, como responsables
            de <em>haztunegociodigital.com</em>, nos reservamos el derecho a excluir de los
            servicios prestados en este sitio web a todo <em class="laws-slang">Usuario</em> que haya facilitado datos falsos o suplantaciones indebidas.
          </p>

          <h4 class="subsection-title">
            Finalidades, tratamiento y conservación
          </h4>
          <p>
            El presente sitio web, <em>haztunegociodigital.com</em>, no recaba datos de caracter personal a parte de los
            proporcionados por el propio <em class="laws-slang">Usuario</em>. Los datos de carácter personal proporcionados por el
            <em class="laws-slang">Usuario</em> a través de Whatsapp, teléfono, correo electrónico o redes sociales
            serán tratados por el <em class="laws-slang">Prestador</em>, que ostentamos la condición de Responsables del tratamiento, para las
            finalidades que se indican a continuación.
          </p>
          <p>
            En esta tabla desglosamos el motivo por el que tratamos tus datos y durante cuánto tiempo los
            conservaremos :
          </p>
          <div class="table-container">
            <table class="table is-bordered is-narrow is-fullwidth is-size-6 is-size-7-mobile">
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
                    Comprobar la identidad y garantizar la seguridad de los Usuarios así como facilitar la gestión de
                    nuestro servicio.
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
            Te informamos que, por tu seguridad, tus datos son tratados en España y las aplicaciones son realizadas por
            proveedores de desarrollo de software certificados y con seguridad garantizada.
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
              href="mailto:legal@haztunegociodigital.com?subject=Solicitud%20de%20baja%20en%20listade%20%20correo"
              title="Solicitud de baja de correos publicitarios de #HazTuNegocioDigital"
              :title="`Solicitud de baja de correos publicitarios de ${owner.url}`"
            >
              <span>{{ owner.email }}</span>
            </a>
            a la atención de {{owner.author}}. La solicitud deberá contener copia de tu DNI u otro documento identificativo
            legalmente equivalente, así como el contenido mínimo previsto en la normativa aplicable. Si la solicitud no reúne los
            requisitos especificados, <em>#HazTuNegocioDigital</em> podrá requerir su subsanación. No se exigirá
            contraprestación alguna por el ejercicio de los derechos.
          </p>
          <div class="table-container">
            <table class="table is-bordered is-narrow is-fullwidth is-size-6 is-size-7-mobile">
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
            autoridad de control en materia de protección de datos,
            <i>la Agencia Española de Protección de Datos</i>, cuya página web es:
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
            La utilización de este sitio web,
            <em>haztunegociodigital.com</em>, te otorga la condición de
            <em class="laws-slang">Usuario</em>
            implicando la
            <span class="has-text-weight-medium has-text-success">aceptación completa de todas las cláusulas y condiciones de uso</span> incluidas en la presente página
            de <em>aviso legal</em> así como las condiciones particulares que pudieran establecerse entre las dos partes, <em class="laws-slang">Prestador</em> (<em>nosotros</em>) y Usuario (<em>tú</em>), en relación con la prestación de los
            servicios previamente acordados.
          </p>
          <p>
            Si no estuvieras de acuerdo con todas y cada una de estas cláusulas y condiciones abstente de utilizar este
            sitio web.
          </p>
          <p>
            El acceso y navegación por este sitio web es libre y gratuito y no supone, en modo alguno, el inicio de una relación comercial con el
            <em class="laws-slang">Prestador</em>.
          </p>
          <p>
            Como <em class="laws-slang">Usuario</em>, estás obligado y comprometido a NO utilizar cualquiera de los contenidos del
            sitio web con fines o efectos ilícitos, prohibidos en este
            <em>aviso legal</em> o por la legislación vigente, lesivos de los derechos e intereses de terceros, o que de
            cualquier forma puedan dañar, inutilizar, sobrecargar, deteriorar o impedir la normal utilización de los
            contenidos, los equipos informáticos o los documentos, archivos y toda clase de contenidos almacenados en
            cualquier equipo informático propios o contratados por el <em class="laws-slang">Prestador</em>, de otros usuarios o de cualquier <em class="laws-slang">Usuario</em>
            de Internet.
          </p>

          <h4 class="subsection-title">
            Responsabilidad
          </h4>
          <p>
            El <em class="laws-slang">Prestador</em> no será responsable de las opiniones vertidas por los <span class="has-text-weight-medium">Usuarios</span> o terceras personas ajenas
            <em>#HazTuNegocioDigital</em> a través de redes sociales, blog u otras herramientas de participación, conforme a lo previsto en la normativa de
            aplicación.
          </p>
          <p>
            El <em class="laws-slang">Prestador</em> se reserva el derecho de retirar todos aquellos comentarios o contenido fraudulento y/o
            manipulado que vulneren la legislación vigente, lesivos de los derechos o intereses de terceros, o que, a su
            juicio, no resulten adecuados para su publicación. En caso de que, como <em class="laws-slang">Usuario</em>, consideres que existe en el
            sitio web algún contenido que pudiera ser susceptible de esta clasificación, rogamos nos lo notifiques
            inmediatamente escribiéndonos un correo electrónico a la siguiente dirección de email:
            <a
              href="mailto:legal@haztunegociodigital.com?subject=Denuncia%20de%20contenido"
              title="Denunciar contenido inapropiado en la web de #HazTuNegocioDigital"
            >
              <span>legal@haztunegociodigital.com</span>
            </a>
          </p>
          <p>
            El <em class="laws-slang">Prestador</em> se reserva el derecho a modificar, cancelar, restringir o suspender el contenido del sitio web,
            los links y vínculos o la información obtenida a través del sitio web, sin necesidad de previo aviso.
          </p>
          <p>
            Este sitio web, <em>haztunegociodigital.com</em>, ha sido desarrollado, revisado y testeado para que <span class="has-text-weight-medium">funcione correctamente</span>.
            En principio, puede garantizarse el correcto funcionamiento los 365 días del año, 24 horas al día. No obstante, el
            <em class="laws-slang">Prestador</em> no descarta la posibilidad de que acontezcan causas de fuerza mayor como: catástrofes naturales, huelgas,
            pandemias o circunstancias ajenas a nuestra organización que imposibiliten el acceso a este sitio web.
          </p>

          <h4 class="subsection-title">
            Medidas de seguridad
          </h4>
          <p>
            Cualquier dato personal que facilites al <em class="laws-slang">Prestador</em> puede ser almacenado en bases de datos, cuya titularidad
            corresponde en exclusiva al <em class="laws-slang">Prestador</em> pero que se prestan a través de un tercero, simpre un proveedor de servicios
            de intenet reputado y homologado, que asume todas las medidas de índole técnica, organizativa y de
            seguridad que garantizan la confidencialidad, integridad y calidad de la información contenida en las
            mismas de acuerdo con lo establecido en la normativa vigente en protección de datos.
          </p>
          <p>
            Matizaremos que las medidas de seguridad de los sistemas informáticos en Internet
            aunque son extremadamente fiables no son infalibles y que el <em class="laws-slang">Prestador</em> no puede garantizar al 100%
            la inexistencia de virus u otros elementos que puedan producir alteraciones en los sistemas informáticos 
            (<em>software y hardware</em>) del <em class="laws-slang">Usuario</em> o en tus documentos electrónicos y ficheros contenidos en los
            mismos. Dicho esto, el <em class="laws-slang">Prestador</em> pone todos los medios necesarios y toma las medidas de seguridad oportunas para
            evitar la presencia de estos elementos dañinos.
          </p>

          <h4 class="subsection-title">
            Enlaces de interés a otros sitios Web
          </h4>
          <p>
            El <em class="laws-slang">Prestador</em> puede proporcionarle acceso a sitios web de terceros mediante enlaces con la finalidad de
            informar sobre la existencia de otras fuentes de información en Internet en las que podrá ampliar los datos o servicios ofrecidos en el sitio web.
          </p>
          <p>
            Estos enlaces a otros sitios web no suponen en ningún caso una sugerencia o recomendación para que visites las
            páginas web de destino. Estas están fuera del control del <em class="laws-slang">Prestador</em>, por lo que
            <em class="laws-slang">Prestador</em> no es responsable del contenido de los sitios web vinculados, ni de los links o enlaces ubicados en él,
            ni del resultado que obtenga al seguir los enlaces.
          </p>
          <p>
            La existencia de enlaces no implica la existencia de relaciones entre <em class="laws-slang">Prestador</em> y el
            propietario/s del sitio en el que se establezca el enlace/s, ni la aceptación o aprobación por parte del <em class="laws-slang">Prestador</em>
            de sus contenidos o servicios.
          </p>
          <p>
            Si accedes a un sitio web externo desde un enlace que encuentres en <em>haztunegociodigital.com</em> deberás leer la propia
            <em>política de privacidad</em> propia del otro sitio web que visite pudiendo ser esta muy diferente a la de este sitio web.
          </p>

          <h4 class="subsection-title">
            Contratación de terceros
          </h4>
          <p>
            El <em class="laws-slang">Prestador</em> podrá
            <b>contratar y/o subcontratar con terceras entidades</b> todo lo que estime oportuno en relación con la
            realización de cualesquiera o todas las actividades necesarias para la gestión, mantenimiento, actualización
            y/o mejora de los Servicios. Dichas entidades podrían tener la facultad de desactivar los servicios y, en
            consecuencia, interrumpir el acceso al mismo para realizar las tareas contratadas.
          </p>

          <h4 class="subsection-title">
            Propiedad intelectual
          </h4>
          <p>
            Este sitio web, <em>haztunegociodigital.com</em>, incluyendo a título enunciativo pero no limitativo su codificación, edición,
            compilación y demás elementos necesarios para su funcionamiento, así como los diseños, logotipos, imagen corporativa, texto y gráfismos
            son propiedad de 
            <a
              class="has-text-link"
              href="https://jalofernandez.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Página personal y portfolio de: @jalofernandez designer + coder"
            >
              jalofernandez.com
            </a>
            . A él corresponde el ejercicio exclusivo de los derechos de explotación de los mismos en cualquier forma
            y, en especial, los derechos de reproducción, distribución, comunicación pública y transformación, de acuerdo
            con la legislación española y de la Unión Europea aplicable.
          </p>
          <p>
            NO está permitida la reproducción total o parcial, uso, explotación y distribución con fines comerciales de cualquiera de los recursos materiales, 
            artículos o programación incluida en el presente sitio web, <em>haztunegociodigital.com</em>.
          </p>
          <p>
            El <em class="laws-slang">Prestador</em> como titular de
            <em>#HazTuNegocioDigital</em> autoriza expresamente a que terceros puedan redirigir directamente a los contenidos
            concretos de sitio web: <em>haztunegociodigital.com</em>.
          </p>
          <p>
            Para realizar cualquier tipo de observación como posibles incumplimientos de los derechos de propiedad
            intelectual o industrial, así como sobre cualquiera de los contenidos del sitio web, puedes hacerlo a través
            de nuestra dirección de correo electrónico:
            <a
              href="mailto:legal@haztunegociodigital.com?subject=Denuncia%20incumplimiento%20derechos%20de%20propiedad%20intelectual"
              title="Escríbenos para denunciar incumplimientos de los derechos de propiedad intelectual en la web de #HazTuNegocioDigital"
            >
              <span>legal@haztunegociodigital.com</span>
            </a>
          </p>

          <h4 class="subsection-title">
            Derecho de exclusión
          </h4>
          <p>
            El <em class="laws-slang">Prestador</em> se reserva el derecho a denegar o retirar el acceso a <em>haztunegociodigital.com</em> 
            y los servicios ofrecidos sin necesidad de preaviso, a instancia propia o de un tercero, a aquellos <em class="has-text-weight-medium">Usuarios</em> 
            que incumplan cualquiera de las condiciones de este <em>aviso legal</em>.
          </p>

          <h4 class="subsection-title">
            Jurisdicción
          </h4>
          <p>
            Este <em>aviso legal</em> se rige íntegramente por la <span class="has-text-weight-medium">legislación española</span>.
          </p>
          <p>
            Siempre que no haya una norma que obligue a otra cosa, para cuantas cuestiones se susciten sobre la
            interpretación, aplicación y cumplimiento de este
            <em>aviso legal</em>, así como de las reclamaciones que puedan derivarse de su uso, las partes acuerdan
            someterse a los <span class="has-text-weight-medium">jueces</span> y <span class="has-text-weight-medium">tribunales</span> de la <span class="has-text-weight-medium">Comunidad Autónoma de Madrid</span>, con renuncia
            expresa de cualquier otra jurisdicción que pudiera corresponderles.
          </p>

          <!-- INFO: incorporar cuando haya productos o servicios por los que cobrar €!!
          <h4 class="subsection-title">
            Condiciones de Venta
          </h4>
          <p>
            En este apartado detallarás los pasos que debe realizar el <em class="laws-slang">Usuario</em> para completar una compra y las condiciones a las que ha de someterse.
          </p>-->

          <!-- INFO: incorporar cuando haya programas de afiliación, y/o anuncios patrocinados €!!
          <h4 class="subsection-title">
            Enlaces de Afiliados y anuncios patrocinados
          </h4>
          <p>
            El sitio Web ofrece contenidos patrocinados, anuncios y/o enlaces de afiliados.
          </p>
          <p>
            La información que aparece en estos enlaces de afiliados o los anuncios insertados, son facilitados por los propios anunciantes, por lo que <em class="laws-slang">Prestador</em> no se hace responsable de posibles inexactitudes o errores que pudieran contener los anuncios, ni garantiza en modo alguno la experiencia, integridad o responsabilidad de los anunciantes o la calidad de sus productos y/o servicios.
          </p>-->

          <h4 class="subsection-title">
            Contacto
          </h4>
          <p>
            En caso de que tengas cualquier duda o desees realizar cualquier comentario o consulta sobre sobre este sitio web, puedes enviar un mensaje de correo electrónico a la dirección:
            <a
              href="mailto:legal@haztunegociodigital.com"
              title="Escríbenos un email al departamento legal de #HazTuNegocioDigital"
            >
              <span>legal@haztunegociodigital.com</span>
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
            obliga los porpietarios de sitios web, blogs o cualquier aplicación que descargue en tu navegador
            cookies de terceros a informar al <em class="laws-slang">Usuario</em> sobre <span class="has-text-weight-medium">el tipo de cookies, la duración y la
            finalidad</span> de cada una de ellas.
          </p>

          <h4 class="subsection-title">
            ¿Y las cookies qué son?
          </h4>
          <p>
            Una cookie es un pequeño fichero que permite que el sitio web por el que está navegando recuerde información sobre su visita. Estas cookies son instaladas en su
            navegador por cada web con la única finalidad de facilitar su próxima visita y hacer que el sitio web resulte más útil.
          </p>
          <p>
            Las cookies <span class="has-text-weight-medium">NO almacenan información sensible sobre ti</span> como tarjetas de crédito o datos bancarios,
            fotografías o información personal. Los datos que guardan son de carácter técnico, estadísticos,
            personalización de contenidos, etc. La información recogida por las cookies es anónima.
          </p>
          <p>
            Las cookies <span class="has-text-weight-medium">NO son virus</span>, ni troyanos, ni spam, ni spyware, ni abren molestas ventanas emergentes
            (pop-ups)... Sólo contribuyen a tener una mejor experiencia de navegación para el <em class="laws-slang">Usuario</em>.
          </p>
          <p>
            La mayoría de los navegadores aceptan como estándar a las cookies y, con independencia de las mismas, permiten
            o impiden en los ajustes de seguridad las cookies temporales o memorizadas. Más adelante explicaremos cómo
            gestionarlas.
          </p>
          <p>
            Informarte que si continuas navegando y/o pulsas el botón "aceptar" del banner de aviso de Cookies,
            <span class="has-text-weight-medium">estarás consintiendo el empleo de estas cookies</span> (
            <small>
              <em
                >artículo 22.2 de la Ley 34/2002 de Servicios de la Sociedad de la Información y Comercio Electrónico</em
              > </small
            >).
          </p>

          <h4 class="subsection-title">
            ¿Cuántos y qué tipos de cookies existen?
          </h4>
          <p>
            Hay <span class="has-text-weight-medium">3 clasificaciones</span> por tipo de cookies:
          </p>
          <p>
            1. Según <b>quién las gestione</b>:
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
            2. Según <b>el tiempo que permanezcan almacenadas</b>:
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
            3. Según <b>la finalidad de los datos obtenidos</b>:
          </p>
          <ul class="listed">
            <p>
              Cookies
              <b>técnicas</b> o aquéllas que permiten al <em class="laws-slang">Usuario</em> la utilización de las diferentes opciones o servicios que
              existan en la web como: identificar la sesión, acceder a partes de acceso restringido, recordar los
              elementos que integran un pedido, realizar el proceso de compra de un pedido...
            </p>
            <p>
              Cookies de
              <b>personalización</b> o aquéllas que permiten recordar las preferencias del <em class="laws-slang">Usuario</em> como: el idioma, el
              tipo de navegador a través del cual accede al servicio, etc.
            </p>
            <p>
              Cookies de
              <b>análisis</b> o aquéllas que permiten la medición y análisis estadístico de la utilización que hacen los
              usuarios del servicio con el fin de mejorar la oferta de productos o servicios que se le ofrecen.
            </p>
            <p>
              Cookies
              <b>publicitarias</b> o aquéllas que permiten gestionar de forma eficaz la oferta de los espacios
              publicitarios para así encajar el contenido del anuncio al contenido de la página web.
            </p>
            <p>
              Cookies de
              <b>publicidad comportamental</b> o aquéllas que muestran publicidad en función de tus hábitos de navegación,
              tu país de procedencia, idioma, etc.
            </p>
          </ul>

          <h4 class="subsection-title">
            ¿Qué cookies utilizamos aquí?
          </h4>
          <p>
            Aquí sólo usamos cookies para analizar el tráfico y establecer estadísticas de uso. Además, compartimos información sobre el uso que haga del
            sitio web con nuestros partners de redes sociales y análisis web, todos ellos de más que conocidos (Google,
            LinkedIn...) quienes pueden combinarla con otra información que ellos hayan recopilado a partir del uso que tú
            hayas hecho de sus servicios (con tu cuenta personal de LinkedIn, por ejemplo).
          </p>
          <p>Eso sí, en ningún caso se van a utilizar cookies que comprometan tu privacidad.</p>
          <p>
            Esta es la <span class="has-text-weight-medium">relación de cookies</span> que usa <span>#HazTuNegocioDigital</span>:
          </p>
          <div class="table-container">
            <table class="table is-bordered is-narrow is-fullwidth is-size-7">
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
                  <td>Se usa para distinguir <em class="has-text-weight-medium">Usuarios</em>.</td>
                  <td>google.com</td>
                </tr>
                <tr>
                  <td>_gid</td>
                  <td>Análisis de terceros</td>
                  <td>24 horas</td>
                  <td>Google Analytics</td>
                  <td>Se usa para distinguir <em class="has-text-weight-medium">Usuarios</em>.</td>
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
                  <td>@jalofernandez</td>
                  <td>Mantener idioma elegido por el ususario.</td>
                  <td>haztunegociodigital.com</td>
                </tr> -->
                <!-- <tr>
                  <td>cookiesConsent</td>
                  <td>Técnica propia</td>
                  <td>Persistente</td>
                  <td>@jalofernandez</td>
                  <td>
                    Guardar el consentimiento y aceptación de la política de cookies por parte del <em class="laws-slang">Usuario</em> y no volver a
                    mostrar el banner de alerta sobre las cookies.
                  </td>
                  <td>haztunegociodigital.com</td>
                </tr> -->
                <!-- <tr>
                  <td>auth.*</td>
                  <td>Técnicas propias</td>
                  <td>Sesión</td>
                  <td>@jalofernandez</td>
                  <td>Para identificar de manera unitaria al <em class="laws-slang">Usuario</em> respecto a otros.</td>
                  <td>haztunegociodigital.com</td>
                </tr> -->
              </tbody>
            </table>
          </div>
          <p>
            Aquí está la relación completa de <span class="has-text-weight-medium">cookies de terceros</span>:
          </p>
          <nav class="navigation-links">
            <a
              href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              title="Qué cookies usa Google Analytics en el navegador del visitante"
              class="level-item analytics"
            >
              <div>
                <!-- <i class="mdi mdi-google-analytics"></i> -->
                <p>Google <b>Tag Manager</b></p>
              </div>
            </a>
            <!-- <a
              href="https://www.facebook.com/policies/cookies/"
              target="_blank"
              rel="noopener noreferrer"
              title="Qué cookies usa Facebook en el navegador del visitante"
              class="level-item facebook"
            >
              <div>
                <i class="mdi mdi-microsoft-internet-facebook"></i>
                <p><b>Facebook</b></p>
              </div>
            </a> -->
            <!-- <a
              href="https://help.fullstory.com/hc/en-us/articles/360020829513-Why-FullStory-uses-First-Party-Cookies"
              target="_blank"
              rel="noopener noreferrer"
              title="Qué cookies usa Fullstory en el navegador del visitante"
              class="level-item fullstory"
            >
              <div>
                <i class="mdi mdi-mdi-open-in-new"></i>
                <p><b>Fullstory</b></p>
              </div>
            </a> -->
            <!-- <a
              href="https://knowledge.hubspot.com/es/reports/what-cookies-does-hubspot-set-in-a-visitor-s-browser"
              target="_blank"
              rel="noopener noreferrer"
              title="Qué cookies usa Hubspot en el navegador del visitante"
              class="level-item hubspot"
            >
              <div>
                <i class="mdi mdi-mdi-hubspot"></i>
                <p><b>Hubspot</b></p>
              </div>
            </a> -->
          </nav>

          <h4 class="subsection-title">
            ¿Cómo se gestionan las cookies?
          </h4>
          <p>
            Puedes gestionar la configuración del navegador de modo que este te notifique antes de que se descargue cookie
            en tu equipo o también puedes adaptar la configuración de forma que el navegador rechace todas las cookies o
            sólo las cookies de terceros. Además puedes eliminar cualquiera de las cookies que ya se encuentren en tu
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
              class="level-item chrome"
              title="Como bloquear o eliminar las cookies instaladas por #HazTuNegocioDigital en tu navegador Chrome"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <!-- <i class="mdi mdi-google-chrome"></i> -->
                <p>Google <b>Chrome</b></p>
              </div>
            </a>
            <a
              href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies#ie=ie-10"
              class="level-item explorer"
              title="Como bloquear o eliminar las cookies instaladas por #HazTuNegocioDigital en tu navegador Explorer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <!-- <i class="mdi mdi-microsoft-internet-explorer"></i> -->
                <p>Internet <b>Explorer</b></p>
              </div>
            </a>
            <a
              href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-?redirectlocale=en-US&redirectslug=Cookies"
              class="level-item firefox"
              title="Como bloquear o eliminar las cookies instaladas por #HazTuNegocioDigital en tu navegador Firefox"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <!-- <i class="mdi mdi-firefox"></i> -->
                <p>Mozilla <b>Firefox</b></p>
              </div>
            </a>
            <a
              href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
              class="level-item safari"
              title="Como bloquear o eliminar las cookies instaladas por #HazTuNegocioDigital en tu navegador Safari"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <!-- <i class="mdi mdi-apple-safari"></i> -->
                <p>Apple <b>Safari</b></p>
              </div>
            </a>
            <a
              href="https://help.opera.com/en/latest/web-preferences/#cookies"
              class="level-item opera"
              title="Como bloquear o eliminar las cookies instaladas por #HazTuNegocioDigital en tu navegador Opera"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <!-- <i class="mdi mdi-opera"></i> -->
                <p><b>Opera</b></p>
              </div>
            </a>
          </nav>
          <p>
            Ten en cuenta que si eliges bloquear las cookies esto puede afectar al correcto funcionamiento de este sitio web.
          </p>

          <h4 class="subsection-title">
            Cookies en los dispositivos móviles
          </h4>
          <p>
            En <em>#HazTuNegocioDigital</em> también usamos cookies en dispositivos móviles. En este caso los navegadores de
            los dispositivos móviles permiten configurar las opciones o ajustes de privacidad para desactivar o eliminar las cookies.
            Aquí te dejamos una relación de enlaces a la documentación de gestión de cookies de los navegadores móviles más utilizados:
          </p>
          <nav class="navigation-links">
            <a
              href="https://support.google.com/chrome/answer/114662?hl=es&visit_id=637387185293136031-776021146&rd=1"
              class="level-item chrome"
              title="Como cambiar los permisos y el almacenamiento de datos en todos los sitios web que has visitado en Chrome Mobile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <p><b>Chrome</b> Mobile</p>
              </div>
            </a>
            <a
              href="https://support.apple.com/es-es/HT201265"
              class="level-item ios"
              title="Como cambiar los permisos y el almacenamiento de datos en todos los sitios web que has visitado en Apple iOS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <p>iPhone <b>iOS</b></p>
              </div>
            </a>
            <a
              href="https://support.microsoft.com/es-es/help/4036480/windows-phone-8-1-end-of-support-faq"
              class="level-item windows"
              title="Como cambiar los permisos y el almacenamiento de datos en todos los sitios web que has visitado en Windows Phone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <p><b>Windows</b> Phone</p>
              </div>
            </a>
            <a
              href="https://help.opera.com/en/latest/web-preferences/"
              class="level-item opera"
              title="Como cambiar los permisos y el almacenamiento de datos en todos los sitios web que has visitado en Opera Mobile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <p><b>Opera</b> Mobile</p>
              </div>
            </a>
          </nav>

          <h4 class="subsection-title">
            Aceptación de la política de cookies
          </h4>
          <p>
            El <em class="laws-slang">Usuario</em> <b class="has-text-success">acepta expresamente</b>,
            por la utilización de este sitio web, el tratamiento de la información
            recabada en la forma y con los fines mencionados a lo largo de esta <em>”política de cookies”</em>. Reconoce
            conocer la posibilidad de rechazar el tratamiento de tales datos o información rechazando el uso de cookies
            mediante la selección de la configuración apropiada a tal fin en su navegador. Si bien esta opción de bloqueo
            de cookies en su navegador puede no permitirle el uso pleno de todas las funcionalidades del sitio web.
          </p>
        </div>

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
import Zeppelin from '~/components/Zeppelin'

export default {
  components: { TheHeader, TheFooter, AnimLine, Zeppelin },
  data() {
    return {
      owner: this.$store.state.owner,
      terms: [
        {
          row:
            '<b>@jalofernandez</b> es una marca comercial propiedad de <b>Javier Lorenzo Fernández</b> que a su vez es responsable del sitio web, pone a disposición de los usuarios el presente documento con el que pretende dar cumplimiento a las obligaciones dispuestas en la <em>Ley 34/2002, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE)</em>, así como informar a todos los usuarios del sitio web respecto a cuáles son las condiciones de uso del sitio web.',
        },
        {
          row:
            'Toda persona que acceda a este sitio web asume el papel de usuario, comprometiéndose a la observancia y cumplimiento riguroso de las disposiciones aquí dispuestas, así como a cualesquiera otra disposición legal que fuera de aplicación.',
        },
        {
          row:
            '<b>@jalofernandez</b> se reserva el derecho a modificar cualquier tipo de información que pudiera aparecer en el sitio web, sin que exista obligación de preavisar o poner en conocimiento de los usuarios dichas obligaciones, entendiéndose como suficiente con la publicación en el sitio web de <b>@jalofernandez</b> ( <em>www.jalofernandez.com</em> ).',
        },
        { row: '<span>LOPD</span>' },
        {
          row:
            '<b>@jalofernandez</b> se encuentra profundamente comprometida con el cumplimiento de la normativa española de protección de datos de carácter personal, y garantiza el cumplimiento íntegro de las obligaciones dispuestas, así como la implementación de las medidas de seguridad dispuestas en el art. 9 de la Ley 15/1999, de Protección de Datos de Carácter Personal (LOPD) y en el Reglamento de Desarrollo de la LOPD.',
        },
        {
          row:
            "Cualquier dato que usted (el Usuario o Cliente en adelante) nos facilite por cualquiera de las vías de contacto existentes en <b>@jalofernandez</b> y su website <em>www.jalofernandez.com</em>, ya sea telefónicamente, por correo electrónico o través de cualquiera de las redes sociales, serán incorporados a un fichero automatizado convenientemente registrado ante la <b>Agencia Española de Protección de Datos (AGPD)</b> y sobre el que podrá ejercer sus derechos reconocidos legalmente (acceso, rectificación, cancelación y oposición) escribiendo a la dirección de correo electrónico <a href='mailto:jalofernandez@gmail.com' title='Escribir a @jalofernandez'>jalofernandez@gmail.com</a>, en ambos casos, que su comunicación está relacionada con “Protección de Datos”. Tiene usted información ampliada a este respecto en el siguiente bloque: <em>Política de privacidad</em>.",
        },
        { row: '<span>Política de privacidad</span>' },
        {
          row:
            "<b>Identidad y datos de contacto del responsable</b>: El Responsable del tratamiento de los datos personales del Usuario es <b>@jalofernandez</b>, marca comercial propiedad de <em>Javier Lorenzo Fernández</em>, con domicilio comercial en <em>C/ Vicente Bascuñana, 6. 28024. Pozuelo de Alarcón, Madrid</em> y <em>NIF 53385793X</em>. Si tiene cualquier duda en materia de protección de datos, puede contactar con <b>@jalofernandez</b> a través de la dirección de correco electrónico: <a href='mailto:jalofernandez@gmail.com' title='Escribir a @jalofernandez'>jalofernandez@gmail.com</a>",
        },
        {
          row:
            '<b>Finalidades, bases jurídicas del tratamiento y plazos de conservación</b>: El presente sitio web, <em>www.jalofernandez.com</em>, no recaba datos de caracter personal. No se solicitan datos ni posee formularios de contacto para tal efecto. No obstante, los datos de carácter personal proporcionados por los clientes a través de vía telefónica, electrónica (email) o por redes sociales serán tratados por la <b>@jalofernandez</b>, que ostenta la condición de Responsable del tratamiento, para las finalidades que se indican a continuación. Asimismo, le indicamos por qué motivo es lícito que tratemos sus datos y durante cuánto tiempo los conservaremos en la siguiente tabla:',
        },
        {
          row:
            "<table class='responsive-table'> <thead> <tr> <th>Finalidad</th> <th>Base jurídica</th> <th>Plazos de conservación</th> </tr></thead> <tbody> <tr> <td>Gestionar y responder las solicitudes de información realizadas telefónicamente, a través de email o de manera presencial.</td><td>Interés legítimo del responsable del tratamiento.</td><td>Los datos serán conservados durante la vigencia de la consulta realizada. Una vez finalizada, se conservarán bloqueados durante los plazos de prescripción de las acciones legales, suprimiéndose a la finalización de dichos plazos.</td></tr><tr> <td>Gestionar la prestación de los servicios ofrecidos en el sitio web.</td><td>Ejecución del contrato en que el interesado es parte.</td><td>Los datos serán conservados durante la vigencia de la relación contractual. Una vez finalizada, se conservarán bloqueados durante los plazos de prescripción de las acciones legales, suprimiéndose a la finalización de dichos plazos.</td></tr></tbody></table>",
        },
        {
          row:
            "<b>Derechos de los usuarios</b>: Usted puede ejercitar los derechos que se detallan a continuación ante <b>@jalofernandez</b> a través del correo electrónico <a href='mailto:jalofernandez@gmail.com' title='Escribir a @jalofernandez'>jalofernandez@gmail.com</a> o bien a la dirección postal de <em>Calle Vicente Bascuñana, 6. 28024. Pozuelo de Alarcón, Madrid</em>, a la atención de <em>Javier Lorenzo Fernández</em>. La solicitud deberá contener copia de su DNI u otro documento identificativo equivalente, así como el contenido mínimo previsto en la normativa aplicable. Si la solicitud no reúne los requisitos especificados, <b>@jalofernandez</b> podrá requerir su subsanación. No se exigirá contraprestación alguna por el ejercicio de los derechos.",
        },
        {
          row:
            "<table class='responsive-table'> <thead> <tr> <th>Derecho</th> <th>¿En qué consiste?</th> </tr></thead> <tbody> <tr> <td>Derecho de acceso</td><td>Consultar qué datos personales tenemos sobre Usted.</td></tr><tr> <td>Derecho de rectificación</td><td>Modificar los datos personales que tenemos sobre Usted cuando sean inexactos.</td></tr><tr> <td>Derecho de oposición</td><td>Solicitar que no tratemos tus datos personales para algunas finalidades concretas.</td></tr><tr> <td>Derecho de supresión</td><td>Solicitar que eliminemos sus datos personales.</td></tr><tr> <td>Derecho de limitación</td><td>Solicitar que limitemos el tratamiento de sus datos personales.</td></tr><tr> <td>Derecho de portabilidad</td><td>Obtener en un formato electrónico los datos personales que nos haya suministrado y los que se hayan generado en el contexto del servicio.</td></tr></tbody></table>",
        },
        {
          row:
            "En caso de no obtener satisfacción en el ejercicio de sus derechos, podrá presentar una reclamación ante la autoridad de control en materia de protección de datos, la <b>Agencia Española de Protección de Datos</b>, cuya página web es: <a href='http://www.agpd.es' target='_blank' title='Ver web de Agencia Española de Protección de Datos'>www.agpd.es</a>",
        },
        {
          row:
            '<b>Destinatarios de los datos personales</b>: Sus datos personales no serán cedidos a otras personas o empresas para ser utilizados para sus propios fines. <b>@jalofernandez</b> no tiene entidades subcontratadas ni terceras presonas podrían acceder a los datos personales.',
        },
        {
          row:
            '<b>Medidas de seguridad</b>: <b>@jalofernandez</b> tratará sus datos personales de manera absolutamente confidencial. Asimismo, ha implantado medidas técnicas y organizativas adecuadas para garantizar la seguridad de sus datos personales y evitar su destrucción, pérdida, acceso ilícito o alteración ilícita. A la hora de determinar estas medidas, se han tenido en cuenta criterios como el alcance, el contexto y los fines del tratamiento; el estado de la técnica y los riesgos existentes.',
        },
        {
          row:
            '<b>Exactitud de los datos aportados</b>: El Cliente o Usuario, al aceptar la política de privacidad, declara que todos los datos que constan en el perfil son veraces, que están actualizados y que corresponden con los datos del titular de la expendeduría, debiendo el Usuario ponerse en contacto con <b>@jalofernandez</b> o hacer uso de los mecanismos que le ofrecemos en caso de que desee modificar algún dato de carácter personal. El Usuario será el único responsable de los daños ocasionados tanto a <b>@jalofernandez</b> como a terceras personas por las manifestaciones o información falsas o inexactas que proporcione.',
        },
        { row: '<span>Uso de cookies</span>' },
        {
          row:
            'Las <b>cookies</b> son pequeños archivos de información que el servidor envía al ordenador de quien accede a la página para llevar a cabo determinadas funciones que son consideradas imprescindibles para el correcto funcionamiento y visualización del sitio. Las <b>cookies</b> utilizadas en el sitio web, en todo caso, tienen carácter temporal con la única finalidad de hacer más eficaz su transmisión ulterior y desaparecen al terminar la sesión del usuario. Existen los siguientes tipos de <em>cookies</em>:',
        },
        {
          row:
            '<b>Cookies técnicas</b>: Son aquellas que permiten al Usuario la navegación y la utilización de las diferentes opciones o servicios que se ofrecen como, controlar el tráfico y la comunicación de datos, identificar la sesión, acceder a partes de acceso restringido, recordar los elementos que integran una reserva, realizar la solicitud de inscripción o participación en un evento, utilizar elementos de seguridad durante la navegación o almacenar, difundir y/o compartir contenidos.',
        },
        {
          row:
            "<b>Cookies analíticas</b>: Son aquellas utilizadas por Google, <em>'Google Analytics'</em>, que permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización y actividad que hacen los Usuarios, así como elaborar perfiles de navegación de éstos para poder introducir mejoras en el sitio web.",
        },
        {
          row:
            '<b>Cookies publicitarias</b>: Son aquéllas que, bien tratadas por nosotros o por terceros, nos permiten gestionar de la forma más eficaz posible la oferta de los espacios publicitarios que hay en la página web, adecuando el contenido del anuncio al contenido del servicio solicitado o al uso que realice de nuestra página web. Para ello, podemos analizar sus hábitos de navegación en Internet y podemos mostrar al Usuario publicidad relacionada con su perfil de navegación.',
        },
        {
          row:
            'El sitio web de <b>@jalofernandez</b> utiliza <b>cookies analíticas</b>. En ningún caso se utilizarán las <b>cookies</b> para recoger información de carácter personal. Esta es la relación de <b>cookies</b> utilizadas:',
        },
        {
          row:
            "<table class='responsive-table'> <thead> <tr> <th>Cookie</th> <th>Finalidad</th> <th>Propietario</th> </tr></thead> <tbody> <tr> <td>_ga</td><td>Se usa para distinguir usuarios.</td><td>Google analytics</td></tr><tr> <td>_gid</td><td>Google Analytics utiliza esta cookie para almacenar y actualizar un valor único para cada página visitada. La cookie se actualiza cada vez que envía los datos a Google Analytics.</td><td>Google analytics</td></tr></tbody></table>",
        },
        {
          row:
            'El usuario puede usted permitir, bloquear o eliminar las <b>cookies</b> instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador (ver enlaces mostrados).',
        },
        {
          row:
            'Las <b>cookies</b> serán tratadas por el titular de esta página web y, en su caso, por entidades a las que se les haya encomendado su tratamiento con finalidades legítimas.',
        },
        { row: '<span>Responsabilidad</span>' },
        {
          row:
            '<b>@jalofernandez</b> se exime de cualquier tipo de responsabilidad derivada de la información publicada en su sitio web, siempre que esta información haya sido manipulada o introducida por un tercero ajeno al mismo.',
        },
        {
          row:
            'Desde el sitio web del cliente es posible que se redirija a contenidos de terceros sitios web. Dado que <b>@jalofernandez</b> no puede controlar siempre los contenidos introducidos por los terceros en sus sitios web, éste no asume ningún tipo de responsabilidad respecto a dichos contenidos. En todo caso, <b>@jalofernandez</b> manifiesta que procederá a la retirada inmediata de cualquier contenido que pudiera contravenir la legislación nacional o internacional, la moral o el orden público, procediendo a la retirada inmediata de la redirección a dicho sitio web, poniendo en conocimiento de las autoridades competentes el contenido en cuestión.',
        },
        {
          row:
            "<b>@jalofernandez</b> no se hace responsable de la información y contenidos almacenados, a título enunciativo pero no limitativo, en foros, chat's, generadores de blogs, comentarios, redes sociales o cualesquiera otro medio que permita a terceros publicar contenidos de forma independiente en la página web de <b>@jalofernandez</b>. No obstante y en cumplimiento de lo dispuesto en el art. 11 y 16 de la LSSI-CE, <b>@jalofernandez</b> se pone a disposición de todos los usuarios, autoridades y fuerzas de seguridad, y colaborando de forma activa en la retirada o en su caso bloqueo de todos aquellos contenidos que pudieran afectar o contravenir la legislación nacional, o internacional, derechos de terceros o la moral y el orden público. En caso de que el usuario considere que existe en el sitio web algún contenido que pudiera ser susceptible de esta clasificación, se ruega lo notifique de forma inmediata al administrador del sitio web mediante la siguiente dirección de correo electrónico: <a href='mailto:jalofernandez@gmail.com' title='Escribir a @jalofernandez'>jalofernandez@gmail.com</a>",
        },
        {
          row:
            'Este sitio web ha sido revisado y probado para que funcione correctamente. En principio, puede garantizarse el correcto funcionamiento los 365 días del año, 24 horas al día. No obstante, <b>@jalofernandez</b> no descarta la posibilidad de que existan ciertos errores de programación, o que acontezcan causas de fuerza mayor, catástrofes naturales, huelgas, o circunstancias semejantes que hagan imposible el acceso a la página web.',
        },
        { row: '<span>Propiedad intelectual</span>' },
        {
          row:
            'El sitio web, incluyendo a título enunciativo pero no limitativo su programación, edición, compilación y demás elementos necesarios para su funcionamiento, los diseños, logotipos, texto y/o gráficos son propiedad del prestador o en su caso dispone de licencia o autorización expresa por parte de los autores. Todos los contenidos del sitio web se encuentran debidamente protegidos por la normativa de propiedad intelectual e industrial, así como inscritos en los registros públicos correspondientes.',
        },
        {
          row:
            'Independientemente de la finalidad para la que fueran destinados, la reproducción total o parcial, uso, explotación, distribución y comercialización, requiere en todo caso de la autorización escrita previa por parte del prestador. Cualquier uso no autorizado previamente por parte del prestador será considerado un incumplimiento grave de los derechos de propiedad intelectual o industrial del autor. Los diseños, logotipos, texto y/o gráficos ajenos al prestador y que pudieran aparecer en el sitio web, pertenecen a sus respectivos propietarios, siendo ellos mismos responsables de cualquier posible controversia que pudiera suscitarse respecto a los mismos. En todo caso, el prestador cuenta con la autorización expresa y previa por parte de los mismos.',
        },
        {
          row:
            '<b>@jalofernandez</b> autoriza expresamente a que terceros puedan redirigir directamente a los contenidos concretos del sitio web, debiendo en todo caso redirigir al sitio web principal del prestador.',
        },
        {
          row:
            '<b>@jalofernandez</b> reconoce a favor de sus titulares los correspondientes derechos de propiedad industrial e intelectual, no implicando su sola mención o aparición en el sitio web la existencia de derechos o responsabilidad alguna de <b>@jalofernandez</b> sobre los mismos, como tampoco respaldo, patrocinio o recomendación por parte del mismo.',
        },
        {
          row:
            "Para realizar cualquier tipo de observación respecto a posibles incumplimientos de los derechos de propiedad intelectual o industrial, así como sobre cualquiera de los contenidos del sitio web, puede hacerlo a través del siguiente correo electrónico: <a href='mailto:jalofernandez@gmail.com' title='Escribir a @jalofernandez'>jalofernandez@gmail.com</a>",
        },
      ],
    }
  },
  head() {
    const title = 'Aviso legal | @jalofernandez'
    const description =
      'Aviso legal y política de cookies del portfolio de projectos y Curriculum Vitae personal de @jalofernandez en jalofernandez.com'
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
