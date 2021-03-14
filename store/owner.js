const author = 'jalofernandez'
const nickname = '@'+author
const url = author+'.com'
const email = 'jalofernandez@gmail.com'

export const state = () => ({
  name: 'Javier lorenzo Fdez',
  nickname: nickname,
  url: url,
  email: email,
  copyright: author,
  version: '2.0.2',
  schema: {
    '@context': 'http://schema.org',
    '@type': 'LocalBusiness',
    'additionalType': nickname+' graphic design webmaster frontend UX UI diseño gráfico',
    '@id': 'https://'+url,
    'url': 'https://'+url,
    'sameAs': [
      'https://www.instagram.com/'+nickname+'/?ref=badge',
      'https://twitter.com/'+nickname+'',
      'https://www.linkedin.com/in/javierlorenzofernandez/',
      'https://github.com/'+nickname+'',
      'https://www.youtube.com/channel/UCtwY5GMTiS7VQ7kYzGomUsw',
      'https://www.facebook.com/'+nickname+'?ref=tn_tnmn',
    ],
    'logo': '',
    'name': 'Javier Lorenzo Fdez diseño gráfico y desarrollo web en Madrid, España',
    'description':
      'Portfolio y CV personal de Javier Lorenzo Fernández (aka '+nickname+'): Diseñador gráfico y desarrollador web frontend / UX UI así como maravillosa persona.',
    'telephone': '+34 696 682 791',
    'email': email,
    'currenciesAccepted': 'EUR',
    'paymentAccepted': 'Efectivo, tarjeta de crédito, Cash, Credit Card',
    'priceRange': 'Desde 10€',
    'image': '',
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+34 696 682 791',
      'contactType': 'Llamar para pedir presupuestos',
    },
  },
})
