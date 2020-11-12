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
    <Zeppelin />
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
              <h3>Un poco sobre mi</h3>
              <p>
                Me reconozco como una persona culturalmente inquieta, defensora de sus ideas con fervor
                obstinado pero con gran sentido del humor y moderada autocrítica. Creo en la ciencia,
                el progreso, la autogestión y en la gente con capacidad para cambiar el mundo.
                Soy admirador del buen gusto, el orden y la pulcritud. Como entusiasta del arte y ávido
                consumidor de contenido friki en cualquiera de sus formatos (cine, comics, libros...)
                no me ha quedado más opción que dedicarme al diseño gráfico. Profesión en la que he evolucionado
                del “offset al online”, especializándome en usabilidad, interfaces de usuario y frontend en general
                debido a mi profundo amor por internet y todo lo que engloba.
              </p>
            </div>
            <!-- as a Coder -->
            <div id="resume-coder">
              <h3>{ Coder } experi3nce</h3>
              <p>
                <b>Desarrollador Frontend, UX + UI y diseñador gráfico</b> para <em>"#EchoUnaMano"</em> (voluntarios contra
                el covid-19). Landing page, motion y grafismos (2020).
              </p>
              <p>
                <b>Desarrollador Frontend y especialista en UX + UI</b> para <em>"Capaball capabilities S.L."</em>, una plataforma
                saas de educación online de aprendizaje continuo impulsado por inteligencia artificial y
                deep learning: landing pges, manager, CRMs, adwords... (2018 - 2020).
              </p>
              <p>
                <b>Diseñador gráfico y desarrollador web</b> para <em>"Gastronomix"</em>, un proyecto social sin ánimo de lucro
                de cocina creativa para gente joven en riesgo de exclusión impulsado por la asociación
                "La Casa y el mundo" y JP Morgan: proyectogastronomix.org (2015).
              </p>
              <p>
                <b>Desarrollo Frontend</b>, usabidildad, experiencia de usuario, presentación de datos y maquetación
                en <em>"Widitrade"</em> de eComm Adgency y todos suis proyectos relacionados (landing pages, dashboards,
                managers y templates...).
                Widitrade es una plataforma online (saas) de ecommerce / mcommerce orientada tanto a publishers
                como a advertisers (2018).
              </p>
              <p>
                Desarrollo de la plataforma online de creación de apps, <em>"Upplication software technologies"</em>, como
                Frontend especialmente orientado a la usabilidad, experiencia de usuario, presentación de datos
                y maquetación en general de la plataforma y todos sus proyectos relacionados (landing pages, dashboards,
                apps personalizadas...).
                Desarrollador y responsable de la imagen corporativa de la empresa en todos sus ámbitos y formatos
                tanto físicos como digitales (2015 - 2018).
              </p>
              <p>
                <b>Desarrollador Frontend</b> de aplicaciones web para Wairbut cuyo principal cliente fue: <em>"Knowers, worldwide
                knoledge marketplace, LTD."</em> - UK (2015).
              </p>
            </div>   
            <!-- as a Designer -->
            <div id="resume-designer">
              <h3>( Designer ) Xperience</h3>
              <p>
                Diseñador textil, publicitario y merchandising de la firma textil internacional urban / streetwear
                "British Knights" (BK) para su división europea (2008 - 2011).
              </p>
              <p>
                Diseñador textil, publicitario y merchandising de la firma textil deportiva / streetwear
                "RTY" (Rusty). Para su división ibérica (2005 - 2008). Maquetador y artefinalista de las marcas
                deportivas "Spalding" (USA) y "Gilbert" (UK) para su división española (2005 - 2008).
              </p>
              <p>
                Diseño y maquetación de catálogos y merchandising para marcas como:
                - Medion (tecnología alemana: medion.com)
                - Drop Shot (firma deportiva: dropshot.es)
                - Urban Point (textiles: urbanpoint.com)
                - Maquetación y artefinalista de la revista "La Talanquera" (2003 - 2005).
                - Ilustrador en la revista "Punto y Coma;" (2006 - 2011).
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
import Zeppelin from '~/components/Zeppelin'

export default {
  components: { TheHeader, TheFooter, AnimLine, Zeppelin },
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
