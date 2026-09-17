(() => {
const LB = (url,lang) => JSON.stringify({"@context":"https://schema.org","@type":"HomeAndConstructionBusiness",name:"Sun Worx",slogan:"Solar & Battery",url:url,inLanguage:lang,telephone:"+1-510-773-1922",email:"sunworxca@gmail.com",address:{"@type":"PostalAddress",addressLocality:"Sacramento",addressRegion:"CA",addressCountry:"US"},areaServed:{"@type":"AdministrativeArea",name:"Northern California"}});
const FAQLD = (items,lang) => JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",inLanguage:lang,mainEntity:items.map(i=>({"@type":"Question",name:i[0].replace(/<[^>]+>/g,''),acceptedAnswer:{"@type":"Answer",text:i[1].replace(/<[^>]+>/g,'').replace(/&amp;/g,'&')}}))});
return function make(EN,ES,STYLE,o){
  const src = o.lang==='es'?ES:EN;
  const WRAP = s=>s.slice(0,s.indexOf('<helmet>'));
  const CHROME = s=>s.slice(s.indexOf('</helmet>')+9, s.indexOf('<main id="main">'));
  const QUOTE = s=>s.slice(s.indexOf('<section id="quote"'), s.indexOf('</main>'));
  const TAIL = s=>s.slice(s.indexOf('</main>'));
  const enUrl = o.lang==='es'?o.twinUrl:o.url, esUrl = o.lang==='es'?o.url:o.twinUrl;
  let quote = QUOTE(src);
  quote = o.lang==='es'
    ? quote.replace('>Cuéntenos de su casa.</h2>','>'+o.quoteH+'</h2>').replace('>Dónde vive, cuánto paga hoy y qué está pensando hacer. De ahí nos encargamos nosotros.</p>','>'+o.quoteP+'</p>')
    : quote.replace('>Tell us about your home.</h2>','>'+o.quoteH+'</h2>').replace('>Where you live, what you pay now, and what you are thinking about. We take it from there.</p>','>'+o.quoteP+'</p>');
  let out = WRAP(src)
    + '<helmet>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n'
    + '<title>'+o.title+'</title>\n<meta name="description" content="'+o.desc+'">\n'
    + '<link rel="canonical" href="'+o.url+'">\n<link rel="alternate" hreflang="en" href="'+enUrl+'">\n<link rel="alternate" hreflang="es" href="'+esUrl+'">\n<link rel="alternate" hreflang="x-default" href="'+enUrl+'">\n'
    + '<meta property="og:type" content="website">\n<meta property="og:title" content="'+o.title+'">\n<meta property="og:description" content="'+o.desc+'">\n<meta property="og:url" content="'+o.url+'">\n<meta property="og:image" content="https://sunworxcali.com/img/'+o.og+'">\n'
    + (o.lang==='es'?'<meta property="og:locale" content="es_MX">\n':'')
    + (o.noindex?'<meta name="robots" content="noindex">\n':'')
    + '<!-- GA4 TAG IN CODE PHASE -->\n'
    + '<script src="./image-slot.js"></script>\n'
    + STYLE.replace('</style>', "\n@media (min-width:760px){[data-g2]{grid-template-columns:repeat(2,minmax(0,1fr)) !important}}\n@media (min-width:560px){[data-g4]{grid-template-columns:repeat(2,minmax(0,1fr)) !important}[data-g6]{grid-template-columns:repeat(2,minmax(0,1fr)) !important}}\n@media (min-width:880px){[data-g3]{grid-template-columns:repeat(3,minmax(0,1fr)) !important}[data-g6]{grid-template-columns:repeat(3,minmax(0,1fr)) !important}}\n@media (min-width:1180px){[data-g4]{grid-template-columns:repeat(4,minmax(0,1fr)) !important}}" + '\n</style>') + '\n'
    + '<script type="application/ld+json">\n'+LB(o.url,o.lang)+'\n</script>\n'
    + (o.faqs?'<script type="application/ld+json">\n'+FAQLD(o.faqs,o.lang)+'\n</script>\n':'')
    + '</helmet>\n'
    + CHROME(src) + '<main id="main">\n\n' + o.body + quote + (o.footDesc ? TAIL(src).replace(o.lang==='es'?"Compañía local y pequeña de paneles solares y baterías, con base en Sacramento, que trabaja en el valle y las faldas de la sierra del norte de California.":"A small, local solar and battery team working out of Sacramento, across the Northern California valley and foothills.", o.footDesc) : TAIL(src));
  const twin = encodeURI(o.twinFile);
  out = o.lang==='es'
    ? out.split('Home%20EN%20v3.dc.html').join(twin)
    : out.split('Home%20ES.dc.html').join(twin)
         .replace('<a href="/" style="color:#0066CC;text-decoration:none">Español</a>','<a href="'+twin+'" lang="es" style="color:#0066CC;text-decoration:none">Español</a>')
         .replace('<a href="/" aria-label="Sun Worx — home"','<!-- PRODUCTION PATH: / -->\n    <a href="Home%20EN%20v3.dc.html" aria-label="Sun Worx — home"');
  return out;
};
})()