(() => {
// Region-hub generator (Batch 5). Usage:
//   const hub = eval(await readFile('_parts/hubgen.js'));
//   await hub(saveFile, data);
const SV_EN=[['/solar-installation/','Solar installation'],['/battery-storage/','Battery storage'],['/solar-and-battery/','Solar + battery'],['/add-battery-to-existing-solar/','Add a battery'],['/main-panel-upgrade/','Main panel upgrade'],['/new-roof/','New roof'],['/roof-and-solar/','Roof + solar'],['/solar-removal-and-reinstall/','Removal &amp; reinstall']];
const SV_ES=[['/es/instalacion-de-paneles-solares/','Instalaci\u00f3n solar'],['/es/baterias-solares/','Bater\u00edas'],['/es/solar-y-bateria/','Solar y bater\u00eda'],['/es/agregar-bateria-a-solar-existente/','Agregar bater\u00eda'],['/es/cambio-de-panel-electrico/','Cambio de panel'],['/es/techo-nuevo/','Techo nuevo'],['/es/techo-y-solar/','Techo y solar'],['/es/retiro-y-reinstalacion-de-paneles/','Retiro y reinstalaci\u00f3n']];
const HUBS_EN={sac:['/service-areas/sacramento-area/','Sacramento Area'],pel:['/service-areas/placer-el-dorado/','Placer &amp; El Dorado'],yys:['/service-areas/yolo-yuba-sutter/','Yolo, Yuba &amp; Sutter'],sj:['/service-areas/san-joaquin-county/','San Joaquin County'],sol:['/service-areas/solano-county/','Solano County'],ecc:['/service-areas/east-contra-costa/','East Contra Costa'],idx:['/service-areas/','All service areas']};
const HUBS_ES={sac:['/es/areas-de-servicio/area-de-sacramento/','\u00c1rea de Sacramento'],pel:['/es/areas-de-servicio/placer-y-el-dorado/','Placer y El Dorado'],yys:['/es/areas-de-servicio/yolo-yuba-y-sutter/','Yolo, Yuba y Sutter'],sj:['/es/areas-de-servicio/condado-de-san-joaquin/','Condado de San Joaqu\u00edn'],sol:['/es/areas-de-servicio/condado-de-solano/','Condado de Solano'],ecc:['/es/areas-de-servicio/este-de-contra-costa/','Este de Contra Costa'],idx:['/es/areas-de-servicio/','Todas las \u00e1reas']};
return async function hub(ctx, d){
  const {B, make, region, EN, ES, STYLE, saveFile, log} = ctx;
  for (const lang of ['en','es']) {
    const es = lang==='es', L = es ? d.es : d.en;
    const html = region(B, make, EN, ES, STYLE, {
      lang, url: es?d.urlEs:d.urlEn, twinUrl: es?d.urlEn:d.urlEs,
      twinFile: d.file+' '+(es?'EN':'ES')+'.dc.html',
      title:L.title, desc:L.desc, og:d.og,
      heroLabel: es?'Encabezado de regi\u00f3n':'Region hero',
      h1:L.h1, sub:L.sub, video:{src:d.video, poster:d.poster, alt:L.vAlt},
      photoId:d.photoId, photo:[d.photo, L.photoPh, es?'Instalaci\u00f3n de Sun Worx':'Sun Worx installation'],
      util:{label: es?'Su compa\u00f1\u00eda de luz':'Your utility', eyebrow:L.util[0], h2:L.util[1], sub:L.util[2], cards:L.util[3]},
      why:{label: es?'Por qu\u00e9 solar aqu\u00ed':'Why solar here', eyebrow:L.why[0], h2:L.why[1], sub:L.why[2], cards:L.why[3]},
      inc:{label: es?'Incentivos de la regi\u00f3n':'Region incentives', eyebrow:L.inc[0], h2:L.inc[1], body:L.inc[2], note:L.inc[3]},
      cities:{label: es?'Ciudades':'Cities', eyebrow:L.cit[0], h2:L.cit[1], sub:L.cit[2],
        items: L.cit[3].map(c=>[c[0], c[1], es?d.urlEs:d.urlEn])},
      services:{label: es?'Servicios':'Services', eyebrow:L.svc[0], h2:L.svc[1], sub:L.svc[2], links: es?SV_ES:SV_EN},
      faqEyebrow:L.faqE, faqH2:L.faqH, faqs:L.faqs, relLead:L.relLead,
      rel: d.rel.map(k=>(es?HUBS_ES:HUBS_EN)[k]),
      quoteH:L.quoteH, quoteP:L.quoteP, footDesc:L.footDesc
    });
    await saveFile(d.file+' '+(es?'ES':'EN')+'.dc.html', html);
  }
  log('built '+d.file+' EN + ES');
};
})()
