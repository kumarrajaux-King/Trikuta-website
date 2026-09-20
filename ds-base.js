// Loads this design system into the template. In a consuming project, point
// base at the bound DS folder relative to this file (e.g. '_ds/<folder>' at
// the project root, '../_ds/<folder>' one level down) — one line to edit.
(() => {
  const base = '_ds/sajj-design-system-a4cf4b7f-eac3-4c13-bf41-2719a60891b9';
  const has = (sel) => !!document.head.querySelector(sel);
  for (const p of ["tokens/fonts.css","tokens/colors.css","tokens/typography.css","tokens/spacing.css","tokens/radius.css","tokens/elevation.css","tokens/motion.css","tokens/base.css","styles.css"]) {
    const href = base + '/' + p;
    if (has('link[href="' + href + '"]')) continue;
    const l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = href;
    document.head.appendChild(l);
  }
  if (has('script[src="' + base + '/_ds_bundle.js"]')) return;
  const s = document.createElement('script');
  s.src = base + '/_ds_bundle.js';
  s.onerror = () => console.error('ds-base.js: failed to load ' + s.src + ' — if this is a consuming project, point the base line in ds-base.js at the bound _ds/<folder> tree relative to this page (e.g. _ds/<folder> at the project root, ../_ds/<folder> one level down); in a fresh design system this can just mean the bundle is not compiled yet');
  document.head.appendChild(s);
})();
