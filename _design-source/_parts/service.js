(() => {
// Shared service-page factory. Usage:
//   const svc = eval(await readFile('_parts/service.js'));
//   const html = svc(B, make, EN, ES, STYLE, o);   // o.lang = 'en' | 'es'
return function service(B, make, EN, ES, STYLE, o){
  const {SEC,HEAD,P,LEGAL,NOTE,CARD,GRID,STEPS,FAQ,LINKROW,ROWS,PHOTO,HERO,VHERO,BTN,BTN2,VBTN,VBTN2,TRUST_EN,TRUST_ES,MEDIA} = B;
  // o.photo = [src, placeholder, caption] — Pixabay only, no credit line
  // o.video = {src, poster, alt} — Pixabay only
  const es = o.lang === 'es';
  const CTA = BTN('#quote', es?'Cotización gratis':'Get a Free Quote') + BTN2('tel:+15107731922', es?'Llame al 510-773-1922':'Call 510-773-1922');
  const LEG = es
    ? 'Todo trabajo eléctrico y de techado es realizado por profesionales con la licencia correspondiente.'
    : 'All electrical and roofing work is performed by appropriately licensed professionals.';
  const VCTA = VBTN('#quote', es?'Cotización gratis':'Get a Free Quote') + VBTN2('tel:+15107731922', es?'Llame al 510-773-1922':'Call 510-773-1922');
  const HEROBLOCK = o.video
    ? VHERO(o.heroLabel, o.h1, o.sub, VCTA, es?TRUST_ES:TRUST_EN, o.video)
    : HERO(o.heroLabel, o.h1, o.sub, CTA, es?TRUST_ES:TRUST_EN);
  const body = HEROBLOCK
    + SEC('#FFFFFF', o.whoLabel, HEAD(o.whoEyebrow, o.whoH2, o.whoSub) + GRID(o.who.map(c=>CARD(c[0],c[1]))))
    + PHOTO(es?'Foto del trabajo':'Job photo', o.photoId, o.photo[0], o.photo[1], o.photo[2])
    + SEC('#FFFFFF', o.incLabel, HEAD(o.incEyebrow, o.incH2, o.incSub) + GRID(o.included.map(c=>CARD(c[0],c[1]))))
    + SEC('#F5F5F7', o.stepLabel, HEAD(o.stepEyebrow, o.stepH2, o.stepSub) + STEPS(o.steps))
    + SEC('#FFFFFF', o.eqLabel, HEAD(o.eqEyebrow, o.eqH2, o.eqSub) + ROWS(o.rows) + LEGAL(LEG))
    + SEC('#F5F5F7', o.moneyLabel, HEAD(o.moneyEyebrow, o.moneyH2) + P(o.money) + NOTE(o.moneyNote))
    + SEC('#FFFFFF', es?'Preguntas':'Questions', HEAD(o.faqEyebrow, o.faqH2) + FAQ(o.faqs)
        + '      <p style="margin:clamp(34px,4vw,52px) auto 22px;text-align:center;font-size:19px;color:#6E6E73">'+o.relLead+'</p>\n' + LINKROW(o.rel));
  return make(EN, ES, STYLE, {lang:o.lang, url:o.url, twinUrl:o.twinUrl, twinFile:o.twinFile, title:o.title, desc:o.desc, og:o.og, faqs:o.faqs, body:body, quoteH:o.quoteH, quoteP:o.quoteP, footDesc:o.footDesc});
};
})()
