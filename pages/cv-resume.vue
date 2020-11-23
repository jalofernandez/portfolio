<template>
  <main class="page resume">
    <!-- (common) "Resume / C.V." modal dialog -->
    <div :class="['modal-wrapper', { 'md-show': modalShow }]">
      <div id="modal-99" class="md-modal">
        <div class="md-content">
          <img
            src="~assets/resume/jalofernandez_cv-resume_2020.jpg"
            :title="`${owner.nickname} resume of skills and professional experience`"
            :alt="`${owner.nickname} resume of skills and professional experience`"
          />
          <p>
            <a
              href="~assets/resume/jalofernandez_CV-resume_2018.pdf"
              :title="`to download ${owner.nickname} resume`"
              download
            >
              Resume / C.V. (Download here!)
            </a>
          </p>
          <button class="btn menu--link glitch" data-text="X close Me!" @click="closeModal()">
            <b>&times;</b> close Me!
          </button>
        </div>
      </div>
      <div class="modal-overlay flicker" @click="closeModal()"></div>
    </div>
    <div class="content">
      <div class="content--inner old-crt--theme">
        <TheHeader />
        <!-- C.V.: typewritin´summary -->
        <div class="content--body">
          <section class="paragraph-block is-hero">
            <h3 class="mode--code resume-skills-title">
              <span>[</span> Why <span>]</span> do you want to work with me?!
            </h3>
            <div class="typewriter--theme is-resume">
              <p class="mode--code" v-for="(skill, index) in skills" :key="index">
                {{ skill.row }}
              </p>
            </div>
            <div class="paragraph-btn has-spaced">
              <a
                href="#"
                class="btn is-link is-boxed btn--designer menu--link glitch"
                :title="`Ir al Curriculum Vitae de ${owner.nickname}`"
                data-text="_check my Resume / C.V."
                v-scroll-to="{ el: '#section-resume', offset: -20 }"
              >
                >_check my Resume / C.V.
              </a>
            </div>
          </section>
          <section id="section-resume" class="paragraph-block paragraph--theme has-spaced">
            <nav class="navbar-resume">
              <a
                href="#"
                class="btn is-link btn--designer menu--link glitch"
                :title="`Ir a la biografía del Curriculum Vitae de ${owner.nickname}`"
                data-text="My Bio;"
                v-scroll-to="{ el: '#resume-bio', offset: -60 }"
              >
                <span v-if="$mq !== 'mobile'">My</span> Bio;
              </a>
              <a
                href="#"
                class="btn is-link btn--coder menu--link glitch"
                :title="`Ir a la biografía del Curriculum Vitae de ${owner.nickname}`"
                data-text="_as great Coder"
                v-scroll-to="{ el: '#resume-coder', offset: -60 }"
              >
                _as <span v-if="$mq !== 'mobile'">great</span> Coder
              </a>
              <a
                href="#"
                class="btn is-link btn--designer menu--link glitch"
                :title="`Ir a la biografía del Curriculum Vitae de ${owner.nickname}`"
                data-text="_as cool Designer"
                v-scroll-to="{ el: '#resume-designer', offset: -60 }"
              >
                _as <span v-if="$mq !== 'mobile'">cool</span> Designer
              </a>
              <a
                class="btn is-link btn--coder menu--link glitch js-modal-trigger"
                id="js-resume"
                href="javascript:"
                data-modal="modal-99"
                data-text=".PDF"
                @click="modalShow = true"
              >
                .PDF
              </a>
            </nav>
            <div id="resume-bio">
              <div class="bio-data">
                <img
                  class="bio-img"
                  src="~/static/jalofernandez-glitch-profile.gif"
                  :title="`Fotografía de ${owner.name}: ${owner.nickname}`"
                  :alt="`Fotografía de ${owner.name}: ${owner.nickname}`"
                  width="150"
                  height="150"
                />
                <div class="bio-info">
                  <div class="bio-info-title">
                    <p>{ <span>Who</span> }</p>
                    <p>{ <span>When</span> }</p>
                    <p>{ <span>Where</span> }</p>
                    <p>{ <span>Drive</span> }</p>
                    <p>{ <span>How</span> }</p>
                  </div>
                  <div class="bio-info-desc">
                    <p>{{ owner.name }}</p>
                    <p>30 / 07 / 1979</p>
                    <p>Madrid, Spain</p>
                    <p>Carné B1</p>
                    <p><nuxt-link to="contacto">Ir a página de contacto</nuxt-link></p>
                  </div>
                </div>
              </div>
              <h3>Un poco sobre mi</h3>
              <p class="bio-summary">
                Me reconozco como una persona culturalmente inquieta, defensora de sus ideas con fervor casi
                obstinado pero con gran sentido del humor y moderada autocrítica. Creo en la ciencia,
                el progreso, la autogestión y en la gente con capacidad para cambiar el mundo.
                Soy admirador del buen gusto, el orden y la pulcritud. Como entusiasta del arte y ávido
                consumidor de contenido friki en cualquiera de sus formatos (<em>cine, comics, libros...</em>)
                no me ha quedado más opción que dedicarme al <b>diseño gráfico</b>. Profesión en la que he evolucionado
                del <em>“offset al online”</em>, especializándome en <b>usabilidad</b>, <b>interfaces de usuario</b> y <b>frontend</b> en general
                debido a mi profundo amor por internet y todo lo que engloba.
              </p>
            </div>
            <!-- as a Coder -->
            <div id="resume-coder">
              <h3><b>{</b> Coder <b>}</b> experi3nce</h3>
              <p>
                ( 2020 ) Desarrollador <b>frontend</b>, <b>UX + UI</b>, <b>diseñador gráfico</b> y comunicación (redes sociales y marketing)
                para <em>"The Seed Squad S.L."</em>; un equipo de outsorcing, consultoría informática, desarrollo de MVPs y creación de
                productos propios como:
                <ul>
                  <li>
                    <em>"Comercio Vecino"</em>: Digitalizamos todo tipo de negocios, desde comercios locales a pymes de cualquier ámbito, para que tengan visibilidad en internet.
                  </li>
                  <li>
                    <em>"QuéCarta"</em>: Creador de carta digitales gratuitas con código QR, la alternativa más segura a la carta física para el sector horeca.
                  </li>
                  <li>
                    <em>"#EchoUnaMano"</em>: Iniciativa sin ánimo de lucro de voluntarios contra el Covid-19 en período de confinamiento domiciliario.
                  </li>
                </ul>
              </p>
              <p>
                ( 2018 - 2020 ) Desarrollador <b>frontend</b> y especialista en <b>UX + UI</b> para <em>"Capaball capabilities S.L."</em>, una plataforma
                saas de educación online de aprendizaje continuo impulsado por inteligencia artificial y
                deep learning. Además de la webapp también me ocupada de las landing pages, managers, CRMs, adwords, creatividades y vídeos
                para social media...
              </p>
              <p>
                ( 2018 ) Desarrollo <b>frontend</b>, usabilidad, <b>experiencia de usuario</b>, presentación de datos y maquetación
                en <em>"Widitrade"</em> de <em>"eComm Adgency, S.L."</em> y todos sus proyectos relacionados (landing pages, dashboards,
                managers y templates...).
                <br/>
                <em>"Widitrade"</em> es una plataforma online (saas) de ecommerce / mcommerce orientada tanto a publishers
                como a advertisers.
              </p>
              <p>
                ( 2015 - 2018 ) Desarrollo de la plataforma online de creación de apps, <em>"Upplication software technologies, S.L."</em>,
                como <b>frontend</b> especialmente orientado a la usabilidad, experiencia de usuario, presentación de datos
                y maquetación en general de la plataforma y todos sus proyectos relacionados (landing pages, dashboards,
                apps personalizadas...).
                <br/>
                Además era el <b>responsable de la imagen corporativa</b> de la empresa en todos sus ámbitos y formatos
                tanto físicos como digitales.
              </p>
              <p>
                ( 2015 ) Desarrollador <b>frontend</b> de aplicaciones web para <em>"Wairbut S.A."</em>, consultora de ingeniería y
                desarrollo e integración de aplicaciones informáticas, cuyo principal cliente fue: <em>"Knowers, worldwide
                knoledge marketplace, LTD."</em> (UK).
              </p>
              <p>
                ( 2015 ) <b>Diseñador gráfico</b> y <b>desarrollador web</b> para <em>"Gastronomix"</em>, un proyecto social
                sin ánimo de lucro de cocina creativa para gente joven en riesgo de exclusión impulsado por la fundación
                <em>"La Casa y el mundo"</em> y el banco <em>"JP Morgan"</em>.
              </p>
            </div>   
            <!-- as a Designer -->
            <div id="resume-designer">
              <h3><b>(</b> Designer <b>)</b> Xperience</h3>
              <p>
                ( 2008 - 2011 ) <b>Diseñador textil</b>, publicitario y merchandising de la firma textil internacional urban / streetwear
                <em>"British Knights" (BK)</em> para su división europea licitada a través de <em>"Style Xtreme sports, S.L."</em>.
              </p>
              <p>
                ( 2008 - 2011 ) Freelance en <b>diseño gráfico</b> y </b>maquetación</b> de catálogos y merchandising para marcas como:
                <ul>
                  <li>
                    <em>"Medion"</em>: tecnología alemana: medion.com
                  </li>
                  <li>
                    <em>"Drop Shot</em>: firma deportiva de padel principalmente: dropshot.es
                  </li>
                  <li>
                    <em>"Urban Point</em>: textiles urban / casual: urbanpoint.com
                  </li>
                </ul>
              </p>
              <p>
                ( 2005 - 2008 ) <b>Diseñador gráfico</b> polivalente para la sociedad <em>"Eje Deportes, S.L."</em> que licenciaba productos
                internacionales para su venta y distribución en el sur de Europa. Mis funciones eran las siguientes:
                <ul>
                  <li>
                    <b>Diseñador gráfico</b> y <b>textil</b> (publicidad, packaging, merchandising...) para de la firma textil deportiva y
                    streetwear <em>"RTY" (Rusty)</em> para su división ibérica.
                  </li>
                  <li>
                    <b>Maquetador</b> y <b>artefinalista</b> de las marcas deportivas <em>"Spalding" (USA)</em> y <em>"Gilbert" (UK)</em>
                    para su división española.
                  </li>
                </ul>
              </p>
              <p>
                ( 2006 - 2011 ) <b>Ilustrador</b> en la revista bimestral de tirada nacional <em>"Punto y Coma;"</em>.
              </p>
              <p>
                (2003 - 2005) <b>Maquetador</b> y <b>artefinalista</b> de la revista mensual de tirada nacional <em>"La Talanquera"</em>.
              </p>
            </div>
          </section>
        </div>
        <TheFooter :name="'Portfolio'" :page="'portfolio'" />
      </div>
    </div>
    <AnimLine />
  </main>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'
import AnimLine from '~/components/AnimLine.vue'

export default {
  components: { TheHeader, TheFooter, AnimLine },
  data() {
    return {
      modalShow: false,
      owner: this.$store.state.owner,
      skills: [
        { row: 'HTML5, pug, twig, CSS3, less, sass,' },
        { row: 'vuejs, nuxtjs, jQuery, javascript,' },
        { row: 'npm, yarn, gulp, nodejs, PWA, SEO,' },
        { row: 'git, gitHub, bitbucket, subversion,' },
        { row: 'scrum, agile, trello, jira, slack,' },
        { row: 'responsive design, photo, video...' },
      ],
    }
  },
  head() {
    const title = 'Resume'
    const description =
      'Sobre mi y CV personal de Javier Lorenzo Fernández (aka @jalofernandez). Diseñador gráfico y desarrollador web frontend + UX + UI un poco friki como podéis comprobar...'
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
      link: [{ rel: 'canonical', hid: 'canonical', href: canonical }],
    }
  },
  methods: {
    closeModal() {
      this.modalShow = false
    },
  },
}
</script>
