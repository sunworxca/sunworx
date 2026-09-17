(() => {
// Shared region-hub factory (Batch 5). Usage:
//   const region = eval(await readFile('_parts/region.js'));
//   const html = region(B, make, EN, ES, STYLE, o);   // o.lang = 'en' | 'es'
return function region(B, make, EN, ES, STYLE, o){
  const {SEC,HEAD,P,LEGAL,NOTE,CARD,GRID,FAQ,LINKROW,PHOTO,HERO,VHERO,BTN,BTN2,VBTN,VBTN2,TRUST_EN,TRUST_ES} = B;
  const es = o.lang === 'es';
  const LEG = es
    ? 'Todo trabajo el\u00e9ctrico y de techado es realizado por profesionales con la licencia correspondiente.'
    : 'All electrical and roofing work is performed by appropriately licensed professionals.';
  const CTA  = BTN('#quote', es?'Cotizaci\u00f3n gratis':'Get a Free Quote') + BTN2('tel:5107731922', es?'Llame al 510-773-1922':'Call 510-773-1922');
  const VCTA = VBTN('#quote', es?'Cotizaci\u00f3n gratis':'Get a Free Quote') + VBTN2('tel:5107731922', es?'Llame al 510-773-1922':'Call 510-773-1922');
  // City card: whole card is a link. TEMP routing handled by caller's href.
  const CITY = (name,blurb,href) => '<a href="'+href+'" style="background:#FFFFFF;border-radius:22px;padding:clamp(24px,2.6vw,34px);box-shadow:0 4px 18px rgba(0,0,0,0.05);display:grid;gap:11px;align-content:start;text-decoration:none;color:#1D1D1F" style-hover="box-shadow:0 8px 26px rgba(0,0,0,0.10);color:#1D1D1F;text-decoration:none"><h3 style="margin:0;font-size:21px;font-weight:600;letter-spacing:-0.012em;color:#1D1D1F">'+name+'</h3><p style="margin:0;color:#6E6E73;font-size:16.5px;line-height:1.55">'+blurb+'</p><span style="font-size:16px;color:#0066CC">'+(es?'Ver el \u00e1rea':'See the area')+'</span></a>';
  const body = (o.video ? VHERO(o.heroLabel, o.h1, o.sub, VCTA, es?TRUST_ES:TRUST_EN, o.video)
                        : HERO(o.heroLabel, o.h1, o.sub, CTA, es?TRUST_ES:TRUST_EN))
    + (o.util ? SEC('#FFFFFF', o.util.label, HEAD(o.util.eyebrow, o.util.h2, o.util.sub) + GRID(o.util.cards.map(c=>CARD(c[0],c[1])))) : '')
    + (o.why ? SEC('#F5F5F7', o.why.label, HEAD(o.why.eyebrow, o.why.h2, o.why.sub) + GRID(o.why.cards.map(c=>CARD(c[0],c[1])))) : '')
    + PHOTO(es?'Foto del trabajo':'Job photo', o.photoId, o.photo[0], o.photo[1], o.photo[2])
    + (o.inc ? SEC('#FFFFFF', o.inc.label, HEAD(o.inc.eyebrow, o.inc.h2) + P(o.inc.body) + NOTE(o.inc.note)) : '')
    + '  <!-- TEMP: city links route to region hub until city pages built -->\n'
    + SEC('#F5F5F7', o.cities.label, HEAD(o.cities.eyebrow, o.cities.h2, o.cities.sub) + GRID(o.cities.items.map(c=>CITY(c[0],c[1],c[2]))))
    + SEC('#FFFFFF', o.services.label, HEAD(o.services.eyebrow, o.services.h2, o.services.sub) + LINKROW(o.services.links) + LEGAL(LEG))
    + SEC('#F5F5F7', es?'Preguntas':'Questions', HEAD(o.faqEyebrow, o.faqH2) + FAQ(o.faqs)
        + '      <p style="margin:clamp(34px,4vw,52px) auto 22px;text-align:center;font-size:19px;color:#6E6E73">'+o.relLead+'</p>\n' + LINKROW(o.rel));
  return make(EN, ES, STYLE, {lang:o.lang, url:o.url, twinUrl:o.twinUrl, twinFile:o.twinFile, title:o.title, desc:o.desc, og:o.og, faqs:o.faqs, body:body, quoteH:o.quoteH, quoteP:o.quoteP, footDesc:o.footDesc});
};
})()
