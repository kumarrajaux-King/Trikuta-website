/* @ds-bundle: {"format":4,"namespace":"SajjDesignSystem_a4cf4b","components":[{"name":"Crest","sourcePath":"components/brand/Crest.jsx"},{"name":"Eyebrow","sourcePath":"components/brand/Eyebrow.jsx"},{"name":"GoldRule","sourcePath":"components/brand/GoldRule.jsx"},{"name":"StatBlock","sourcePath":"components/brand/StatBlock.jsx"},{"name":"TaglineBand","sourcePath":"components/brand/TaglineBand.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Accordion","sourcePath":"components/content/Accordion.jsx"},{"name":"ActivityTile","sourcePath":"components/content/ActivityTile.jsx"},{"name":"DepartureRow","sourcePath":"components/content/DepartureRow.jsx"},{"name":"ItineraryStep","sourcePath":"components/content/ItineraryStep.jsx"},{"name":"TestimonialCard","sourcePath":"components/content/TestimonialCard.jsx"},{"name":"TripCard","sourcePath":"components/content/TripCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"CarouselControls","sourcePath":"components/navigation/CarouselControls.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/Crest.jsx":"40f908630364","components/brand/Eyebrow.jsx":"a274e652df83","components/brand/GoldRule.jsx":"5d02029d8f9e","components/brand/StatBlock.jsx":"f3bb5feb4abe","components/brand/TaglineBand.jsx":"0610f62b9586","components/brand/Wordmark.jsx":"b1fd0db4acc7","components/content/Accordion.jsx":"c61122d47226","components/content/ActivityTile.jsx":"158c5cc5f609","components/content/DepartureRow.jsx":"399a761bd2e2","components/content/ItineraryStep.jsx":"06f6742440f3","components/content/TestimonialCard.jsx":"f1fe49f5ddc9","components/content/TripCard.jsx":"92b0d713ffa3","components/core/Badge.jsx":"663fd31d9e8e","components/core/Button.jsx":"6def1676f1fd","components/core/Card.jsx":"0cff5d2394d7","components/core/Icon.jsx":"c11f18301191","components/core/IconButton.jsx":"19b9f55575eb","components/core/Pill.jsx":"953c01e0af01","components/forms/Checkbox.jsx":"cd578018e2e2","components/forms/Field.jsx":"71a7d97e5872","components/forms/Input.jsx":"97c29f35a8ef","components/forms/Select.jsx":"4de9cc6985ab","components/forms/Textarea.jsx":"744445fda02b","components/navigation/CarouselControls.jsx":"3ef29fa76b77","components/navigation/Footer.jsx":"49c0b647c07d","components/navigation/Navbar.jsx":"d60e106a40a8","components/navigation/Tabs.jsx":"4af4b6309d16","ui_kits/website/Adventures.jsx":"c8cb8346acc4","ui_kits/website/Contact.jsx":"0d99173e88cf","ui_kits/website/Home.jsx":"f0489e2f8d4c","ui_kits/website/Shell.jsx":"1aac7373ca4c","ui_kits/website/TripDetail.jsx":"8de1aaec0652","ui_kits/website/data.js":"ddc23e9660fb"},"inlinedExternals":[],"unexposedExports":[{"name":"fieldBase","sourcePath":"components/forms/Field.jsx"},{"name":"focusRing","sourcePath":"components/forms/Field.jsx"}]} */

(() => {

const __ds_ns = (window.SajjDesignSystem_a4cf4b = window.SajjDesignSystem_a4cf4b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The uppercase tracked-out kicker that opens every section, preceded by a short
 * gold rule. Lifted straight from "ADVENTURES & SPORTS" in the logo.
 */
function Eyebrow({
  children,
  tone = "gold",
  align = "left",
  rule = true,
  style,
  ...rest
}) {
  const colors = {
    gold: "var(--gold-700)",
    goldOnDeep: "var(--gold-400)",
    navy: "var(--navy-700)",
    inverse: "var(--white)",
    muted: "var(--stone-500)"
  };
  const color = colors[tone] || colors.gold;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      justifyContent: align === "center" ? "center" : "flex-start",
      color,
      ...style
    }
  }, rest), rule ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 28,
      height: 2,
      flex: "0 0 auto",
      background: "currentColor",
      opacity: 0.85
    }
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-eyebrow)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      lineHeight: 1
    }
  }, children), align === "center" && rule ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 28,
      height: 2,
      flex: "0 0 auto",
      background: "currentColor",
      opacity: 0.85
    }
  }) : null);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/brand/GoldRule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The metallic gold divider that sits under the wordmark in the logo — a tapered
 * rule, optionally with a small diamond at its centre.
 */
function GoldRule({
  width = "100%",
  diamond = false,
  thickness = 2,
  align = "left",
  style,
  ...rest
}) {
  const bar = /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: thickness,
      background: "var(--gold-metallic-flat)",
      borderRadius: 1
    }
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      width,
      marginLeft: align === "center" ? "auto" : undefined,
      marginRight: align === "center" ? "auto" : undefined,
      ...style
    }
  }, rest), bar, diamond ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 7,
      height: 7,
      flex: "0 0 auto",
      background: "var(--gold-500)",
      transform: "rotate(45deg)"
    }
  }) : null, diamond ? bar : null);
}
Object.assign(__ds_scope, { GoldRule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/GoldRule.jsx", error: String((e && e.message) || e) }); }

// components/brand/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * A run of big numbers on a navy band — summits led, seasons run, athletes coached.
 * Figures are display weight; labels are tracked-out uppercase.
 */
function StatBlock({
  stats = [],
  tone = "deep",
  columns,
  style,
  ...rest
}) {
  const dark = tone === "deep";
  const cols = columns || Math.min(stats.length || 1, 4);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
      gap: "var(--space-8)",
      ...style
    }
  }, rest), stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.label ?? i,
    style: {
      display: "grid",
      gap: "var(--space-2)",
      paddingLeft: i === 0 ? 0 : "var(--space-8)",
      borderLeft: i === 0 ? "none" : `1px solid ${dark ? "var(--border-deep)" : "var(--border-subtle)"}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 44,
      fontWeight: "var(--weight-extrabold)",
      letterSpacing: "0.01em",
      lineHeight: 1,
      color: dark ? "var(--gold-400)" : "var(--navy-700)"
    }
  }, s.value, s.suffix ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      marginLeft: 2
    }
  }, s.suffix) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 11,
      fontWeight: "var(--weight-bold)",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: dark ? "var(--text-on-deep)" : "var(--text-muted)"
    }
  }, s.label))));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/brand/TaglineBand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The tagline ticker — "RISE · EXPLORE · CONQUER" repeated across a navy or gold
 * band. Words are separated by the logo's small gold diamond.
 */
function TaglineBand({
  words = ["Rise", "Explore", "Conquer"],
  tone = "deep",
  speed = 32,
  size = 22,
  style,
  ...rest
}) {
  const id = React.useId().replace(/:/g, "");
  const surfaces = {
    deep: {
      background: "var(--navy-700)",
      color: "var(--white)",
      diamond: "var(--gold-500)"
    },
    gold: {
      background: "var(--gold-500)",
      color: "var(--navy-900)",
      diamond: "var(--navy-700)"
    },
    subtle: {
      background: "var(--surface-subtle)",
      color: "var(--navy-700)",
      diamond: "var(--gold-500)"
    }
  };
  const s = surfaces[tone] || surfaces.deep;
  const run = [...words, ...words, ...words, ...words];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      overflow: "hidden",
      background: s.background,
      color: s.color,
      padding: "18px 0",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("style", null, `@keyframes trikuta-band-${id}{from{transform:translate3d(0,0,0)}to{transform:translate3d(-50%,0,0)}}`), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-8)",
      width: "max-content",
      animation: `trikuta-band-${id} ${speed}s linear infinite`
    }
  }, run.map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: size,
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      whiteSpace: "nowrap"
    }
  }, w), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 7,
      height: 7,
      flex: "0 0 auto",
      background: s.diamond,
      transform: "rotate(45deg)"
    }
  })))));
}
Object.assign(__ds_scope, { TaglineBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/TaglineBand.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Trikuta lockup. The supplied logo is a raster (assets/trikuta-logo.png), so
 * `variant="mark"` renders that file and `variant="type"` sets the name in the
 * display face for places the raster is too heavy or too small to read.
 */
function Wordmark({
  variant = "mark",
  src = "/assets/trikuta-logo.png",
  size = 64,
  tone = "navy",
  showTagline = false,
  style,
  ...rest
}) {
  const ink = tone === "inverse" ? "var(--white)" : "var(--navy-700)";
  const accent = tone === "inverse" ? "var(--gold-400)" : "var(--gold-600)";
  if (variant === "mark") {
    return /*#__PURE__*/React.createElement("img", _extends({
      src: src,
      alt: "Trikuta Adventures & Sports",
      style: {
        height: size,
        width: "auto",
        ...style
      }
    }, rest));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-grid",
      justifyItems: "center",
      gap: 5,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: size,
      fontWeight: "var(--weight-extrabold)",
      letterSpacing: "0.04em",
      lineHeight: 1,
      color: ink
    }
  }, "TRIKUTA"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: Math.max(8, size * 0.26),
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-eyebrow)",
      color: accent
    }
  }, "ADVENTURES & SPORTS"), showTagline ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: Math.max(7, size * 0.2),
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-tagline)",
      color: ink,
      marginTop: 2
    }
  }, "RISE \xB7 EXPLORE \xB7 CONQUER") : null);
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/content/ItineraryStep.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * A day in an itinerary. Numbered gold marker on a vertical spine, then the day's
 * title, distance/altitude meta and description.
 */
function ItineraryStep({
  day,
  title,
  meta = [],
  children,
  last = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: "var(--space-5)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      justifyItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      placeItems: "center",
      width: 40,
      height: 40,
      flex: "0 0 auto",
      borderRadius: "var(--radius-sm)",
      background: "var(--navy-700)",
      color: "var(--gold-400)",
      fontFamily: "var(--font-display)",
      fontSize: 15,
      fontWeight: "var(--weight-extrabold)"
    }
  }, day), !last ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      flex: 1,
      minHeight: 28,
      background: "var(--border-strong)"
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-2)",
      paddingBottom: last ? 0 : "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      font: "var(--font-heading-s)",
      color: "var(--navy-700)",
      margin: 0
    }
  }, title), meta.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-4)",
      fontFamily: "var(--font-display)",
      fontSize: 11,
      fontWeight: "var(--weight-bold)",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--gold-700)"
    }
  }, meta.map(m => /*#__PURE__*/React.createElement("span", {
    key: m
  }, m))) : null, children ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--font-body-m)",
      color: "var(--text-body)"
    }
  }, children) : null));
}
Object.assign(__ds_scope, { ItineraryStep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ItineraryStep.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  gold: {
    background: "var(--gold-100)",
    color: "var(--gold-700)"
  },
  navy: {
    background: "var(--navy-100)",
    color: "var(--navy-700)"
  },
  solid: {
    background: "var(--navy-700)",
    color: "var(--white)"
  },
  goldSolid: {
    background: "var(--gold-500)",
    color: "var(--navy-900)"
  },
  neutral: {
    background: "var(--stone-100)",
    color: "var(--stone-700)"
  },
  success: {
    background: "var(--success-100)",
    color: "var(--success-600)"
  },
  warning: {
    background: "var(--warning-100)",
    color: "var(--warning-600)"
  },
  danger: {
    background: "var(--danger-100)",
    color: "var(--danger-600)"
  },
  onDeep: {
    background: "var(--surface-frost)",
    color: "var(--white)"
  }
};

/** Small status capsule — difficulty grade, availability, "Few spots left". */
function Badge({
  children,
  tone = "gold",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "4px 10px",
      borderRadius: "var(--radius-badge)",
      fontFamily: "var(--font-display)",
      fontSize: 11,
      fontWeight: "var(--weight-bold)",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      lineHeight: 1.4,
      whiteSpace: "nowrap",
      ...(tones[tone] || tones.gold),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const surfaces = {
  card: {
    background: "var(--surface-card)",
    color: "var(--text-body)",
    border: "1px solid var(--border-subtle)"
  },
  subtle: {
    background: "var(--surface-subtle)",
    color: "var(--text-body)",
    border: "1px solid var(--border-subtle)"
  },
  deep: {
    background: "var(--surface-deep)",
    color: "var(--text-on-deep)",
    border: "1px solid var(--navy-600)"
  },
  gold: {
    background: "var(--surface-gold)",
    color: "var(--navy-700)",
    border: "1px solid var(--gold-200)"
  },
  plain: {
    background: "transparent",
    color: "var(--text-body)",
    border: "1px solid transparent"
  }
};
const pads = {
  none: 0,
  sm: "var(--space-4)",
  md: "var(--space-6)",
  lg: "var(--space-8)"
};

/**
 * The generic Trikuta surface: squared corners, a hairline border and almost no
 * shadow. Depth comes from the border and from contrast, not from elevation.
 */
function Card({
  children,
  surface = "card",
  padding = "md",
  elevation = "none",
  radius = "var(--radius-card)",
  accentTop = false,
  interactive = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      borderRadius: radius,
      padding: pads[padding] ?? padding,
      boxShadow: hover && interactive ? "var(--shadow-md)" : `var(--shadow-${elevation})`,
      borderTop: accentTop ? "3px solid var(--gold-500)" : undefined,
      overflow: "hidden",
      transition: "var(--transition-control)",
      cursor: interactive ? "pointer" : undefined,
      ...(surfaces[surface] || surfaces.card),
      ...(accentTop ? {
        borderTop: "3px solid var(--gold-500)"
      } : null),
      ...(hover && interactive ? {
        borderColor: "var(--navy-300)"
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LUCIDE = "https://cdn.jsdelivr.net/npm/lucide-static@0.469.0/icons/";
const cache = new Map();
const sizes = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32
};
function clean(svgText, stroke) {
  return svgText.replace(/<!--[\s\S]*?-->/g, "").replace(/\swidth="[^"]*"/, "").replace(/\sheight="[^"]*"/, "").replace(/stroke-width="[^"]*"/, `stroke-width="${stroke}"`).replace("<svg", '<svg width="100%" height="100%"');
}

/**
 * Line glyph, inlined so it always paints in `currentColor`.
 * Substituted glyph set (Lucide) — see readme.md ICONOGRAPHY.
 */
function Icon({
  name,
  size = "md",
  weight = 2,
  style,
  ...rest
}) {
  const px = typeof size === "number" ? size : sizes[size] || sizes.md;
  const key = name + "@" + weight;
  const [svg, setSvg] = React.useState(() => cache.get(key) || "");
  React.useEffect(() => {
    if (cache.has(key)) {
      setSvg(cache.get(key));
      return;
    }
    let alive = true;
    fetch(LUCIDE + name + ".svg").then(r => r.ok ? r.text() : "").then(t => {
      const out = t ? clean(t, weight) : "";
      cache.set(key, out);
      if (alive) setSvg(out);
    }).catch(() => {});
    return () => {
      alive = false;
    };
  }, [key, name, weight]);
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-hidden": "true",
    "data-icon": name,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: px,
      height: px,
      flex: "0 0 auto",
      color: "currentColor",
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: svg
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/Crest.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * A hexagonal gold frame around a glyph — the logo's containing shape reused as a
 * badge for disciplines, certifications and value props.
 */
function Crest({
  icon,
  label,
  size = 88,
  tone = "light",
  style,
  ...rest
}) {
  const hex = "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)";
  const dark = tone === "deep";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "inline-grid",
      justifyItems: "center",
      gap: "var(--space-3)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      placeItems: "center",
      width: size,
      height: size,
      clipPath: hex,
      background: "var(--gold-metallic)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      placeItems: "center",
      width: size - 5,
      height: size - 5,
      clipPath: hex,
      background: dark ? "var(--navy-700)" : "var(--white)",
      color: dark ? "var(--gold-400)" : "var(--navy-700)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.36),
    weight: 1.75
  }))), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 12,
      fontWeight: "var(--weight-bold)",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      textAlign: "center",
      color: dark ? "var(--white)" : "var(--navy-700)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Crest });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Crest.jsx", error: String((e && e.message) || e) }); }

// components/content/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * A collapsible question. Used for the FAQ block and for "What's included" on a
 * trip page. Gold plus/minus marker, hairline separators, no card chrome.
 */
function Accordion({
  items = [],
  defaultOpen = 0,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderTop: "1px solid var(--border-subtle)",
      ...style
    }
  }, rest), items.map((item, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: item.question ?? i,
      style: {
        borderBottom: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => setOpen(isOpen ? -1 : i),
      "aria-expanded": isOpen,
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "var(--space-5)",
        width: "100%",
        padding: "var(--space-5) 0",
        background: "none",
        border: "none",
        cursor: "pointer",
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 16,
        fontWeight: "var(--weight-semibold)",
        color: "var(--navy-700)"
      }
    }, item.question), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: isOpen ? "minus" : "plus",
      size: "sm",
      style: {
        color: "var(--gold-600)"
      }
    })), isOpen ? /*#__PURE__*/React.createElement("p", {
      style: {
        font: "var(--font-body-m)",
        color: "var(--text-body)",
        paddingBottom: "var(--space-5)",
        maxWidth: 680
      }
    }, item.answer) : null);
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/content/ActivityTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * A discipline tile — Trekking, Badminton, Rafting. A tall photographic frame with
 * a navy scrim and the name set across the bottom; gold rule appears on hover.
 */
function ActivityTile({
  name,
  count,
  image,
  imageTone = "var(--navy-600)",
  onSelect,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onSelect,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      display: "block",
      width: "100%",
      aspectRatio: "3 / 4",
      padding: 0,
      border: "none",
      borderRadius: "var(--radius-media)",
      overflow: "hidden",
      background: imageTone,
      cursor: "pointer",
      textAlign: "left",
      ...style
    }
  }, rest), image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: hover ? "scale(var(--media-zoom))" : "scale(1)",
      transition: "var(--transition-media)"
    }
  }) : null, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to top, rgba(0,18,51,0.86) 0%, rgba(0,18,51,0.28) 46%, rgba(0,18,51,0.06) 100%)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: "auto 0 0 0",
      display: "grid",
      gap: 8,
      padding: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      height: 2,
      width: hover ? 56 : 24,
      background: "var(--gold-metallic-flat)",
      transition: `width var(--duration-base) var(--ease-out)`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 18,
      fontWeight: "var(--weight-bold)",
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--white)"
    }
  }, name), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right",
    size: "sm",
    style: {
      color: "var(--gold-400)"
    }
  })), count ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "rgba(255,255,255,0.74)"
    }
  }, count) : null));
}
Object.assign(__ds_scope, { ActivityTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ActivityTile.jsx", error: String((e && e.message) || e) }); }

// components/content/TestimonialCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A rated review from a client, with the trip they took. */
function TestimonialCard({
  quote,
  name,
  trip,
  rating = 5,
  avatar,
  tone = "light",
  style,
  ...rest
}) {
  const dark = tone === "deep";
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      margin: 0,
      padding: "var(--space-6)",
      background: dark ? "var(--navy-800)" : "var(--surface-card)",
      border: `1px solid ${dark ? "var(--navy-600)" : "var(--border-subtle)"}`,
      borderRadius: "var(--radius-card)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 3,
      color: "var(--gold-500)"
    }
  }, Array.from({
    length: 5
  }).map((_, i) => /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    key: i,
    name: "star",
    size: "sm",
    style: {
      opacity: i < rating ? 1 : 0.24
    }
  }))), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      font: "var(--font-body-m)",
      fontSize: 17,
      lineHeight: 1.6,
      color: dark ? "var(--white)" : "var(--text-body)"
    }
  }, quote), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      marginTop: "auto"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      flex: "0 0 auto",
      borderRadius: "var(--radius-sm)",
      background: avatar ? `center/cover url(${avatar})` : "var(--navy-200)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      lineHeight: 1.35,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 14,
      fontWeight: "var(--weight-bold)",
      color: dark ? "var(--white)" : "var(--navy-700)"
    }
  }, name), trip ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--font-body-s)",
      fontSize: 13,
      color: dark ? "var(--text-on-deep)" : "var(--text-muted)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, trip) : null)));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const pad = {
  sm: "9px 16px",
  md: "13px 24px",
  lg: "17px 34px"
};
const fontSize = {
  sm: 13,
  md: 14,
  lg: 15
};
function toneFor(variant) {
  switch (variant) {
    case "gold":
      return {
        base: {
          background: "var(--action-gold-bg)",
          color: "var(--action-gold-fg)",
          border: "1px solid var(--action-gold-bg)"
        },
        hover: {
          background: "var(--action-gold-bg-hover)",
          borderColor: "var(--action-gold-bg-hover)"
        }
      };
    case "outline":
      return {
        base: {
          background: "transparent",
          color: "var(--action-outline-fg)",
          border: "1px solid var(--action-outline-border)"
        },
        hover: {
          background: "var(--action-outline-bg-hover)"
        }
      };
    case "ghost":
      return {
        base: {
          background: "transparent",
          color: "var(--action-ghost-fg)",
          border: "1px solid transparent"
        },
        hover: {
          background: "var(--action-ghost-bg-hover)"
        }
      };
    case "onDeep":
      return {
        base: {
          background: "transparent",
          color: "var(--white)",
          border: "1px solid var(--action-on-deep-border)"
        },
        hover: {
          background: "var(--action-on-deep-bg-hover)",
          borderColor: "var(--white)"
        }
      };
    case "onDeepSolid":
      return {
        base: {
          background: "var(--white)",
          color: "var(--navy-700)",
          border: "1px solid var(--white)"
        },
        hover: {
          background: "var(--navy-50)",
          borderColor: "var(--navy-50)"
        }
      };
    default:
      return {
        base: {
          background: "var(--action-primary-bg)",
          color: "var(--action-primary-fg)",
          border: "1px solid var(--action-primary-bg)"
        },
        hover: {
          background: "var(--action-primary-bg-hover)",
          borderColor: "var(--action-primary-bg-hover)"
        }
      };
  }
}

/**
 * The Trikuta action: a squared-off rectangle with uppercase tracked-out label.
 * Never a pill — pills belong to Badge alone.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconAfter,
  fullWidth = false,
  disabled = false,
  as = "button",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const tone = toneFor(variant);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: Tag === "button" ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: fullWidth ? "flex" : "inline-flex",
      width: fullWidth ? "100%" : undefined,
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--space-2)",
      padding: pad[size],
      borderRadius: "var(--radius-button)",
      fontFamily: "var(--font-display)",
      fontSize: fontSize[size],
      fontWeight: "var(--weight-bold)",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      lineHeight: 1.2,
      whiteSpace: "nowrap",
      textDecoration: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      transition: "var(--transition-control)",
      transform: press && !disabled ? "scale(var(--press-scale))" : "none",
      ...tone.base,
      ...(hover && !disabled ? tone.hover : null),
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === "lg" ? "md" : "sm"
  }) : null, children, iconAfter ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconAfter,
    size: size === "lg" ? "md" : "sm"
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/content/DepartureRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * A departure date with its price and remaining places — the row that turns a trip
 * page into a booking. Sold-out rows dim rather than disappear.
 */
function DepartureRow({
  dates,
  duration,
  price,
  currency = "₹",
  spots,
  status = "open",
  onBook,
  style,
  ...rest
}) {
  const soldOut = status === "soldOut";
  const filling = status === "filling";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 0.8fr) minmax(0, 0.9fr) auto",
      gap: "var(--space-5)",
      alignItems: "center",
      padding: "var(--space-4) var(--space-5)",
      background: "var(--surface-card)",
      borderBottom: "1px solid var(--border-subtle)",
      opacity: soldOut ? 0.55 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "calendar-days",
    size: "sm",
    style: {
      color: "var(--gold-600)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 15,
      fontWeight: "var(--weight-semibold)",
      color: "var(--navy-700)"
    }
  }, dates)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--font-body-s)",
      color: "var(--text-muted)"
    }
  }, duration), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 17,
      fontWeight: "var(--weight-extrabold)",
      color: "var(--navy-700)"
    }
  }, currency, price), soldOut ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "neutral"
  }, "Sold out") : null, filling ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "warning"
  }, spots, " left") : null, !soldOut && !filling && spots ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "success"
  }, spots, " places") : null), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: soldOut ? "ghost" : "gold",
    disabled: soldOut,
    onClick: onBook
  }, soldOut ? "Join waitlist" : "Book"));
}
Object.assign(__ds_scope, { DepartureRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/DepartureRow.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const box = {
  sm: 32,
  md: 40,
  lg: 48
};
const tones = {
  outline: {
    background: "transparent",
    color: "var(--navy-700)",
    border: "1px solid var(--border-strong)"
  },
  solid: {
    background: "var(--navy-700)",
    color: "var(--white)",
    border: "1px solid var(--navy-700)"
  },
  gold: {
    background: "var(--gold-500)",
    color: "var(--navy-900)",
    border: "1px solid var(--gold-500)"
  },
  ghost: {
    background: "transparent",
    color: "var(--navy-700)",
    border: "1px solid transparent"
  },
  onDeep: {
    background: "transparent",
    color: "var(--white)",
    border: "1px solid var(--action-on-deep-border)"
  },
  frost: {
    background: "var(--surface-frost)",
    color: "var(--white)",
    border: "1px solid var(--border-deep)",
    backdropFilter: "blur(var(--blur-frost))"
  }
};
const hovers = {
  outline: {
    background: "var(--navy-50)",
    borderColor: "var(--navy-700)"
  },
  solid: {
    background: "var(--navy-600)",
    borderColor: "var(--navy-600)"
  },
  gold: {
    background: "var(--gold-600)",
    borderColor: "var(--gold-600)"
  },
  ghost: {
    background: "var(--stone-100)"
  },
  onDeep: {
    background: "var(--action-on-deep-bg-hover)",
    borderColor: "var(--white)"
  },
  frost: {
    background: "rgba(255,255,255,0.26)"
  }
};

/** Square glyph-only control — nav utilities, carousel arrows, media overlays. */
function IconButton({
  icon,
  label,
  variant = "outline",
  size = "md",
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: box[size],
      height: box[size],
      borderRadius: "var(--radius-button)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.35 : 1,
      transition: "var(--transition-control)",
      transform: press && !disabled ? "scale(var(--press-scale))" : "none",
      ...(tones[variant] || tones.outline),
      ...(hover && !disabled ? hovers[variant] : null),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === "lg" ? "md" : "sm"
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Floating label placed over photography — "4 Days", "Watch film", a like count.
 * Frosted on dark imagery, solid white where the photo is busy.
 */
function Pill({
  children,
  icon,
  tone = "frost",
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const interactive = typeof onClick === "function";
  const tones = {
    frost: {
      background: "rgba(0,18,51,0.52)",
      color: "var(--white)",
      border: "1px solid var(--border-deep)",
      backdropFilter: "blur(var(--blur-frost))"
    },
    solid: {
      background: "var(--white)",
      color: "var(--navy-700)",
      border: "1px solid var(--white)"
    },
    deep: {
      background: "var(--navy-700)",
      color: "var(--white)",
      border: "1px solid var(--navy-700)"
    },
    gold: {
      background: "var(--gold-500)",
      color: "var(--navy-900)",
      border: "1px solid var(--gold-500)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    role: interactive ? "button" : undefined,
    tabIndex: interactive ? 0 : undefined,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      padding: "7px 14px",
      borderRadius: "var(--radius-sm)",
      fontFamily: "var(--font-display)",
      fontSize: 12,
      fontWeight: "var(--weight-bold)",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      lineHeight: 1.3,
      cursor: interactive ? "pointer" : "default",
      transition: "var(--transition-control)",
      opacity: hover && interactive ? 0.88 : 1,
      ...(tones[tone] || tones.frost),
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: "xs"
  }) : null, children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/content/TripCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The listing card for a trek, expedition or sports programme. Fixed-ratio media
 * frame whose image zooms on hover (the card itself never lifts), then a tight
 * metadata block over a hairline.
 */
function TripCard({
  title,
  region,
  image,
  imageTone = "var(--navy-600)",
  days,
  altitude,
  difficulty,
  price,
  currency = "₹",
  badge,
  badgeTone = "goldSolid",
  onSelect,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", _extends({
    onClick: onSelect,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-card)",
      overflow: "hidden",
      cursor: onSelect ? "pointer" : undefined,
      transition: "var(--transition-control)",
      borderColor: hover ? "var(--navy-300)" : "var(--border-subtle)",
      boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-none)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "4 / 3",
      overflow: "hidden",
      background: imageTone
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: hover ? "scale(var(--media-zoom))" : "scale(1)",
      transition: "var(--transition-media)"
    }
  }) : null, badge ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: badgeTone
  }, badge)) : null, days ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 12,
      bottom: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Pill, {
    icon: "clock"
  }, days)) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      padding: "var(--space-5)"
    }
  }, region ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 11,
      fontWeight: "var(--weight-bold)",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--gold-700)"
    }
  }, region) : null, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--font-heading-s)",
      color: "var(--navy-700)",
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-4)",
      paddingTop: "var(--space-3)",
      borderTop: "1px solid var(--border-subtle)",
      font: "var(--font-body-s)",
      color: "var(--text-muted)"
    }
  }, altitude ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "mountain-snow",
    size: "xs"
  }), altitude) : null, difficulty ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "activity",
    size: "xs"
  }), difficulty) : null), price ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 6,
      marginTop: "var(--space-1)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--font-body-s)",
      color: "var(--text-muted)"
    }
  }, "from"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 22,
      fontWeight: "var(--weight-extrabold)",
      color: "var(--navy-700)"
    }
  }, currency, price)) : null));
}
Object.assign(__ds_scope, { TripCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TripCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square checkbox with a gold check on navy. */
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      font: "var(--font-body-m)",
      color: "var(--text-body)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      display: "grid",
      placeItems: "center",
      width: 20,
      height: 20,
      flex: "0 0 auto",
      borderRadius: "var(--radius-xs)",
      background: checked ? "var(--navy-700)" : "var(--white)",
      border: `1px solid ${checked ? "var(--navy-700)" : "var(--border-strong)"}`,
      color: "var(--gold-400)",
      transition: "var(--transition-control)"
    }
  }, checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    weight: 3
  }) : null), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Label + control + help/error wrapper shared by every form control. */
function Field({
  label,
  hint,
  error,
  required,
  htmlFor,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "grid",
      gap: "var(--space-2)",
      ...style
    }
  }, rest), label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 11,
      fontWeight: "var(--weight-bold)",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--navy-700)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-600)",
      marginLeft: 4
    }
  }, "*") : null) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      font: "var(--font-body-s)",
      color: "var(--danger-600)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "triangle-alert",
    size: "xs"
  }), error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--font-body-s)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
const fieldBase = {
  width: "100%",
  padding: "11px 14px",
  background: "var(--white)",
  border: "1px solid var(--border-strong)",
  borderRadius: "var(--radius-input)",
  font: "var(--font-body-m)",
  color: "var(--text-primary)",
  outline: "none",
  transition: "var(--transition-control)"
};
const focusRing = "0 0 0 3px rgba(235,177,48,0.28)";
Object.assign(__ds_scope, { Field, fieldBase, focusRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Single-line text input. Square corners, navy focus border, gold focus ring. */
function Input({
  label,
  hint,
  error,
  required,
  icon,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const autoId = React.useId();
  const fieldId = id || autoId;
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    hint: hint,
    error: error,
    required: required,
    htmlFor: fieldId
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 13,
      color: "var(--text-muted)",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: "sm"
  })) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...__ds_scope.fieldBase,
      paddingLeft: icon ? 40 : 14,
      borderColor: error ? "var(--danger-600)" : focus ? "var(--navy-700)" : "var(--border-strong)",
      boxShadow: focus && !error ? __ds_scope.focusRing : "none",
      ...style
    }
  }, rest))));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select with the brand chevron. */
function Select({
  label,
  hint,
  error,
  required,
  options = [],
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const autoId = React.useId();
  const fieldId = id || autoId;
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    hint: hint,
    error: error,
    required: required,
    htmlFor: fieldId
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...__ds_scope.fieldBase,
      appearance: "none",
      paddingRight: 40,
      cursor: "pointer",
      borderColor: error ? "var(--danger-600)" : focus ? "var(--navy-700)" : "var(--border-strong)",
      boxShadow: focus && !error ? __ds_scope.focusRing : "none",
      ...style
    }
  }, rest), options.map(o => {
    const value = typeof o === "string" ? o : o.value;
    const text = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, text);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 13,
      color: "var(--navy-700)",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: "sm"
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line input for enquiry and booking-note fields. */
function Textarea({
  label,
  hint,
  error,
  required,
  rows = 4,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const autoId = React.useId();
  const fieldId = id || autoId;
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    hint: hint,
    error: error,
    required: required,
    htmlFor: fieldId
  }, /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...__ds_scope.fieldBase,
      resize: "vertical",
      lineHeight: 1.6,
      borderColor: error ? "var(--danger-600)" : focus ? "var(--navy-700)" : "var(--border-strong)",
      boxShadow: focus && !error ? __ds_scope.focusRing : "none",
      ...style
    }
  }, rest)));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/CarouselControls.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Carousel chrome: square arrows plus a segmented progress indicator. */
function CarouselControls({
  index = 0,
  count = 1,
  onPrev,
  onNext,
  tone = "light",
  style,
  ...rest
}) {
  const deep = tone === "deep";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-8)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "arrow-left",
    label: "Previous",
    variant: deep ? "onDeep" : "outline",
    onClick: onPrev,
    disabled: index === 0
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "arrow-right",
    label: "Next",
    variant: deep ? "onDeep" : "outline",
    onClick: onNext,
    disabled: index >= count - 1
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, Array.from({
    length: count
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: i === index ? 28 : 14,
      height: 2,
      background: i === index ? "var(--gold-500)" : deep ? "var(--border-deep)" : "var(--border-strong)",
      transition: `width var(--duration-base) var(--ease-out)`
    }
  }))));
}
Object.assign(__ds_scope, { CarouselControls });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/CarouselControls.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Navy closing block: lockup and contact on the left, link columns right. */
function Footer({
  blurb = "Guided treks, expeditions and sports programmes across the Himalaya.",
  contact = [],
  socials = ["instagram", "facebook", "youtube"],
  columns = [],
  copyright = "© 2026 Trikuta Adventures & Sports. All rights reserved.",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: "var(--surface-deep)",
      color: "var(--text-on-deep)",
      padding: "var(--space-20) var(--layout-gutter) var(--space-8)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(260px, 1.2fr) 2fr",
      gap: "var(--space-16)",
      maxWidth: "var(--layout-content-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)",
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    variant: "type",
    tone: "inverse",
    size: 28
  }), /*#__PURE__*/React.createElement(__ds_scope.GoldRule, {
    width: 140
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--font-body-s)",
      color: "var(--text-on-deep)",
      maxWidth: 320
    }
  }, blurb), contact.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 6,
      font: "var(--font-body-s)",
      color: "var(--white)"
    }
  }, contact.map(c => /*#__PURE__*/React.createElement("span", {
    key: c
  }, c))) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      marginTop: "var(--space-2)"
    }
  }, socials.map(s => /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    key: s,
    icon: s,
    label: s,
    variant: "onDeep",
    size: "sm"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${Math.max(columns.length, 1)}, 1fr)`,
      gap: "var(--space-8)"
    }
  }, columns.map((col, ci) => /*#__PURE__*/React.createElement("div", {
    key: col.title ?? ci,
    style: {
      display: "grid",
      gap: "var(--space-4)",
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 11,
      fontWeight: "var(--weight-bold)",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--gold-400)"
    }
  }, col.title), col.links.map(link => /*#__PURE__*/React.createElement("a", {
    key: link,
    href: "#",
    style: {
      font: "var(--font-body-s)",
      fontSize: 15,
      color: "var(--text-on-deep)",
      textDecoration: "none",
      borderBottom: "none"
    }
  }, link)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--layout-content-max)",
      margin: "var(--space-16) auto 0",
      paddingTop: "var(--space-6)",
      borderTop: "1px solid var(--border-deep)",
      font: "var(--font-body-s)",
      fontSize: 13,
      color: "rgba(255,255,255,0.6)"
    }
  }, copyright));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Top bar. Sits directly on the page (light) or over a hero photograph (deep).
 * Nav labels are uppercase and tracked; the active item carries a gold underline.
 */
function Navbar({
  links = [],
  active,
  onNavigate,
  tone = "light",
  cta = "Book a trip",
  onCta,
  logoSrc,
  style,
  ...rest
}) {
  const deep = tone === "deep";
  const ink = deep ? "var(--white)" : "var(--navy-700)";
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-8)",
      height: "var(--layout-nav-height)",
      padding: "0 var(--layout-gutter)",
      background: deep ? "transparent" : "var(--surface-page)",
      borderBottom: `1px solid ${deep ? "var(--border-deep)" : "var(--border-subtle)"}`,
      ...style
    }
  }, rest), deep ? /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    variant: "type",
    tone: "inverse",
    size: 20
  }) : /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 52,
    src: logoSrc
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-8)"
    }
  }, links.map(l => {
    const label = typeof l === "string" ? l : l.label;
    const isActive = active === label;
    return /*#__PURE__*/React.createElement("a", {
      key: label,
      href: typeof l === "string" ? "#" : l.href || "#",
      onClick: e => {
        if (onNavigate) {
          e.preventDefault();
          onNavigate(label);
        }
      },
      style: {
        position: "relative",
        display: "inline-block",
        padding: "6px 0",
        fontFamily: "var(--font-display)",
        fontSize: 13,
        fontWeight: "var(--weight-bold)",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: ink,
        opacity: isActive ? 1 : 0.76,
        textDecoration: "none",
        borderBottom: `2px solid ${isActive ? "var(--gold-500)" : "transparent"}`,
        transition: "var(--transition-control)"
      }
    }, label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "search",
    label: "Search",
    variant: deep ? "onDeep" : "ghost"
  }), cta ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: deep ? "onDeepSolid" : "gold",
    onClick: onCta
  }, cta) : null));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Underlined tab strip — trip page sections, listing filters. */
function Tabs({
  tabs = [],
  active,
  onChange,
  tone = "light",
  style,
  ...rest
}) {
  const deep = tone === "deep";
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      gap: "var(--space-8)",
      borderBottom: `1px solid ${deep ? "var(--border-deep)" : "var(--border-subtle)"}`,
      ...style
    }
  }, rest), tabs.map(t => {
    const label = typeof t === "string" ? t : t.label;
    const isActive = active === label;
    return /*#__PURE__*/React.createElement("button", {
      key: label,
      role: "tab",
      "aria-selected": isActive,
      onClick: () => onChange && onChange(label),
      style: {
        padding: "0 0 var(--space-4)",
        marginBottom: -1,
        background: "none",
        border: "none",
        borderBottom: `2px solid ${isActive ? "var(--gold-500)" : "transparent"}`,
        fontFamily: "var(--font-display)",
        fontSize: 13,
        fontWeight: "var(--weight-bold)",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: deep ? "var(--white)" : "var(--navy-700)",
        opacity: isActive ? 1 : 0.6,
        cursor: "pointer",
        transition: "var(--transition-control)"
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Adventures.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  TripCard,
  Tabs,
  Select,
  Checkbox,
  Button,
  Badge,
  Eyebrow,
  GoldRule
} = window.SajjDesignSystem_a4cf4b;
function Adventures({
  onNavigate
}) {
  const d = window.TrikutaData;
  const [discipline, setDiscipline] = React.useState("All");
  const [season, setSeason] = React.useState("Any season");
  const [gradeOnly, setGradeOnly] = React.useState(false);
  const disciplines = ["All", "Trekking", "Expeditions", "Rafting"];
  const results = d.trips.filter(t => {
    if (discipline !== "All" && t.discipline !== discipline) return false;
    if (season !== "Any season" && t.season !== season) return false;
    if (gradeOnly && t.difficulty === "Technical") return false;
    return true;
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-deep)",
      padding: "var(--space-16) var(--layout-gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--layout-content-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "goldOnDeep"
  }, "18 routes \xB7 6 peaks"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--font-display-l)",
      letterSpacing: "var(--tracking-display)",
      textTransform: "uppercase",
      color: "var(--white)",
      margin: "var(--space-5) 0"
    }
  }, "Adventures"), /*#__PURE__*/React.createElement(GoldRule, {
    width: 140
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--font-body-m)",
      color: "var(--text-on-deep)",
      maxWidth: 560,
      marginTop: "var(--space-5)"
    }
  }, "Fixed-date departures across the western Himalaya, from first-time treks to technical ascents."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: "var(--layout-nav-height)",
      zIndex: 20,
      background: "var(--surface-page)",
      borderBottom: "1px solid var(--border-subtle)",
      padding: "0 var(--layout-gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--layout-content-max)",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-8)",
      flexWrap: "wrap",
      paddingTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: disciplines,
    active: discipline,
    onChange: setDiscipline,
    style: {
      border: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-5)",
      paddingBottom: "var(--space-4)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Select, {
    options: ["Any season", "Winter", "Spring", "Summer", "Autumn"],
    value: season,
    onChange: e => setSeason(e.target.value),
    style: {
      minWidth: 170
    }
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Hide technical grades",
    checked: gradeOnly,
    onChange: setGradeOnly
  })))), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      marginBottom: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "navy"
  }, results.length, " trips"), discipline !== "All" ? /*#__PURE__*/React.createElement(Badge, {
    tone: "gold"
  }, discipline) : null, season !== "Any season" ? /*#__PURE__*/React.createElement(Badge, {
    tone: "gold"
  }, season) : null, discipline !== "All" || season !== "Any season" || gradeOnly ? /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    onClick: () => {
      setDiscipline("All");
      setSeason("Any season");
      setGradeOnly(false);
    }
  }, "Clear") : null), results.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: "var(--space-6)"
    }
  }, results.map(t => /*#__PURE__*/React.createElement(TripCard, _extends({
    key: t.id
  }, t, {
    onSelect: () => onNavigate("Trip")
  })))) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-16)",
      textAlign: "center",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-card)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--font-body-m)",
      color: "var(--text-muted)"
    }
  }, "No departures match those filters."))));
}
Object.assign(window, {
  Adventures
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Adventures.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
const {
  Input,
  Textarea,
  Select,
  Checkbox,
  Button,
  Card,
  Eyebrow,
  GoldRule,
  Icon,
  Crest
} = window.SajjDesignSystem_a4cf4b;
function Contact() {
  const d = window.TrikutaData;
  const [sent, setSent] = React.useState(false);
  const [consent, setConsent] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const emailError = email && !email.includes("@") ? "Enter a valid address" : undefined;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-deep)",
      padding: "var(--space-16) var(--layout-gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--layout-content-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "goldOnDeep"
  }, "Plan with us"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--font-display-l)",
      letterSpacing: "var(--tracking-display)",
      textTransform: "uppercase",
      color: "var(--white)",
      margin: "var(--space-5) 0"
    }
  }, "Get in touch"), /*#__PURE__*/React.createElement(GoldRule, {
    width: 140
  }))), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
      gap: "var(--space-16)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      justifyItems: "start",
      padding: "var(--space-8) 0"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-check",
    size: "xl",
    style: {
      color: "var(--success-600)"
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--font-heading-m)",
      color: "var(--navy-700)"
    }
  }, "Enquiry received"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--font-body-m)",
      color: "var(--text-body)",
      maxWidth: 420
    }
  }, "One of the leads will reply within 24 hours, usually sooner outside the season."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setSent(false)
  }, "Send another")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "grid",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    required: true,
    placeholder: "As on your ID"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    icon: "mail",
    required: true,
    value: email,
    error: emailError,
    onChange: e => setEmail(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Which adventure?",
    options: ["Not sure yet", ...d.trips.map(t => t.title)]
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Group size",
    options: ["Just me", "Two of us", "3 – 5", "6 or more"]
  })), /*#__PURE__*/React.createElement(Textarea, {
    label: "Anything we should know?",
    rows: 4,
    hint: "Allergies, injuries, dietary needs, previous altitude experience."
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "I have read the fitness requirements",
    checked: consent,
    onChange: setConsent
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    size: "lg",
    type: "submit",
    disabled: !consent
  }, "Send enquiry")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "subtle",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--gold-700)"
    }
  }, "Reach us"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      marginTop: "var(--space-4)"
    }
  }, d.contact.map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      font: "var(--font-body-m)",
      color: "var(--navy-700)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ["map-pin", "phone", "mail"][i] || "dot",
    size: "sm",
    style: {
      color: "var(--gold-600)"
    }
  }), c)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-6)"
    }
  }, d.crests.slice(0, 4).map(c => /*#__PURE__*/React.createElement(Crest, {
    key: c.label,
    icon: c.icon,
    label: c.label,
    size: 66
  })))))));
}
Object.assign(window, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Navbar,
  Button,
  Eyebrow,
  GoldRule,
  Crest,
  StatBlock,
  TaglineBand,
  TripCard,
  ActivityTile,
  TestimonialCard,
  CarouselControls,
  Pill
} = window.SajjDesignSystem_a4cf4b;
const heroStyles = {
  wrap: {
    position: "relative",
    background: "var(--navy-700)",
    overflow: "hidden"
  },
  scrim: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to right, rgba(0,12,36,0.94) 0%, rgba(0,18,51,0.66) 52%, rgba(0,18,51,0.30) 100%)"
  },
  body: {
    position: "relative",
    maxWidth: "var(--layout-content-max)",
    margin: "0 auto",
    padding: "var(--space-24) var(--layout-gutter) var(--space-20)"
  },
  title: {
    font: "var(--font-display-xl)",
    fontSize: "clamp(44px, 6vw, 76px)",
    letterSpacing: "var(--tracking-display)",
    textTransform: "uppercase",
    color: "var(--white)",
    margin: "var(--space-6) 0"
  }
};
function Home({
  onNavigate
}) {
  const d = window.TrikutaData;
  const [page, setPage] = React.useState(0);
  const perPage = 3;
  const pages = Math.ceil(d.trips.length / perPage);
  const shown = d.trips.slice(page * perPage, page * perPage + perPage);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: heroStyles.wrap
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: heroStyles.scrim
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      borderBottom: "1px solid var(--border-deep)"
    }
  }, /*#__PURE__*/React.createElement(Navbar, {
    tone: "deep",
    links: d.nav,
    active: "Adventures",
    onNavigate: onNavigate,
    onCta: () => onNavigate("Contact"),
    style: {
      maxWidth: "var(--layout-content-max)",
      margin: "0 auto",
      borderBottom: "none"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.body
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "goldOnDeep"
  }, d.hero.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: heroStyles.title
  }, d.hero.title[0], /*#__PURE__*/React.createElement("br", null), d.hero.title[1]), /*#__PURE__*/React.createElement(GoldRule, {
    width: 160
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--font-body-l)",
      color: "var(--text-on-deep)",
      maxWidth: 520,
      margin: "var(--space-6) 0 var(--space-10)"
    }
  }, d.hero.body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "onDeepSolid",
    size: "lg",
    onClick: () => onNavigate("Adventures")
  }, "Browse adventures"), /*#__PURE__*/React.createElement(Button, {
    variant: "onDeep",
    size: "lg",
    icon: "play",
    onClick: () => onNavigate("About")
  }, "Watch film")))), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "What we run",
    title: "Four disciplines, one outfit",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      iconAfter: "arrow-right",
      onClick: () => onNavigate("Adventures")
    }, "All adventures")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
      gap: "var(--space-5)"
    }
  }, d.activities.map(a => /*#__PURE__*/React.createElement(ActivityTile, _extends({
    key: a.name
  }, a, {
    onSelect: () => onNavigate("Adventures")
  }))))), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Departing soon",
    title: "Trips with places left",
    lead: "Every departure is guided by a lead who has run the route at least four times.",
    action: /*#__PURE__*/React.createElement(CarouselControls, {
      index: page,
      count: pages,
      onPrev: () => setPage(p => Math.max(0, p - 1)),
      onNext: () => setPage(p => Math.min(pages - 1, p + 1))
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: "var(--space-6)"
    }
  }, shown.map(t => /*#__PURE__*/React.createElement(TripCard, _extends({
    key: t.id
  }, t, {
    onSelect: () => onNavigate("Trip")
  }))))), /*#__PURE__*/React.createElement(Section, {
    tone: "deep",
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.1fr)",
      gap: "var(--space-16)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHead, {
    tone: "deep",
    eyebrow: "Why Trikuta",
    title: "Run by people who live here",
    lead: "Our leads are from the valleys they guide in. Between them they have been on these ridges for fourteen seasons."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "var(--space-5)"
    }
  }, d.crests.map(c => /*#__PURE__*/React.createElement(Crest, {
    key: c.label,
    icon: c.icon,
    label: c.label,
    size: 80,
    tone: "deep"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-16)",
      paddingTop: "var(--space-12)",
      borderTop: "1px solid var(--border-deep)"
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    stats: d.stats
  }))), /*#__PURE__*/React.createElement(TaglineBand, {
    tone: "gold"
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "From the trail",
    title: "What climbers say",
    align: "left"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: "var(--space-6)"
    }
  }, d.testimonials.map(t => /*#__PURE__*/React.createElement(TestimonialCard, _extends({
    key: t.name
  }, t))))));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shell.jsx
try { (() => {
const {
  Navbar,
  Footer
} = window.SajjDesignSystem_a4cf4b;

/** Page chrome for every Trikuta screen. */
function Shell({
  screen,
  onNavigate,
  deepNav = false,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100%",
      background: "var(--surface-page)"
    }
  }, deepNav ? null : /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement(Navbar, {
    logoSrc: "../../assets/trikuta-logo.png",
    links: window.TrikutaData.nav,
    active: screen,
    onNavigate: onNavigate,
    onCta: () => onNavigate("Contact")
  })), children, /*#__PURE__*/React.createElement(Footer, {
    contact: window.TrikutaData.contact,
    columns: window.TrikutaData.footerColumns
  }));
}

/** Standard section wrapper — centred column at the content max-width. */
function Section({
  children,
  tone = "page",
  tight = false,
  bleed = false,
  style
}) {
  const backgrounds = {
    page: "var(--surface-page)",
    subtle: "var(--surface-subtle)",
    deep: "var(--surface-deep)"
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: backgrounds[tone] || backgrounds.page,
      padding: `${tight ? "var(--layout-section-y-tight)" : "var(--layout-section-y)"} var(--layout-gutter)`,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: bleed ? "none" : "var(--layout-content-max)",
      margin: "0 auto"
    }
  }, children));
}

/** Eyebrow + uppercase headline + optional lead, the standard section opener. */
function SectionHead({
  eyebrow,
  title,
  lead,
  tone = "light",
  align = "left",
  action
}) {
  const {
    Eyebrow,
    GoldRule
  } = window.SajjDesignSystem_a4cf4b;
  const deep = tone === "deep";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "var(--space-8)",
      marginBottom: "var(--space-12)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      justifyItems: align === "center" ? "center" : "start"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: deep ? "goldOnDeep" : "gold",
    align: align
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--font-display-m)",
      letterSpacing: "var(--tracking-display)",
      textTransform: "uppercase",
      color: deep ? "var(--white)" : "var(--navy-700)",
      maxWidth: 620,
      margin: 0,
      textAlign: align === "center" ? "center" : "left"
    }
  }, title), /*#__PURE__*/React.createElement(GoldRule, {
    width: 100
  }), lead ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--font-body-m)",
      color: deep ? "var(--text-on-deep)" : "var(--text-body)",
      maxWidth: 560,
      textAlign: align === "center" ? "center" : "left"
    }
  }, lead) : null), action);
}
Object.assign(window, {
  Shell,
  Section,
  SectionHead
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TripDetail.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Tabs,
  Button,
  Badge,
  Pill,
  Card,
  Eyebrow,
  GoldRule,
  Icon,
  ItineraryStep,
  DepartureRow,
  Accordion,
  StatBlock
} = window.SajjDesignSystem_a4cf4b;
function TripDetail({
  onNavigate
}) {
  const d = window.TrikutaData;
  const trip = d.trips[0];
  const [tab, setTab] = React.useState("Itinerary");
  const [booked, setBooked] = React.useState(null);
  const facts = [{
    icon: "calendar-days",
    label: "Duration",
    value: trip.days
  }, {
    icon: "mountain-snow",
    label: "Max altitude",
    value: trip.altitude
  }, {
    icon: "activity",
    label: "Grade",
    value: trip.difficulty
  }, {
    icon: "users",
    label: "Group size",
    value: "12 max"
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: trip.imageTone,
      minHeight: 380,
      display: "flex",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to top, rgba(0,12,36,0.92) 0%, rgba(0,18,51,0.42) 58%, rgba(0,18,51,0.14) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      maxWidth: "var(--layout-content-max)",
      margin: "0 auto",
      padding: "var(--space-16) var(--layout-gutter) var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      marginBottom: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "goldSolid"
  }, trip.badge), /*#__PURE__*/React.createElement(Badge, {
    tone: "onDeep"
  }, trip.season)), /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "goldOnDeep"
  }, trip.region), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--font-display-l)",
      letterSpacing: "var(--tracking-display)",
      textTransform: "uppercase",
      color: "var(--white)",
      margin: "var(--space-5) 0 var(--space-6)",
      maxWidth: 680
    }
  }, trip.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    icon: "clock"
  }, trip.days), /*#__PURE__*/React.createElement(Pill, {
    icon: "mountain-snow"
  }, trip.altitude), /*#__PURE__*/React.createElement(Pill, {
    icon: "activity"
  }, trip.difficulty)))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "1px solid var(--border-subtle)",
      padding: "0 var(--layout-gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--layout-content-max)",
      margin: "0 auto",
      paddingTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ["Overview", "Itinerary", "Inclusions", "Departures"],
    active: tab,
    onChange: setTab,
    style: {
      border: "none"
    }
  }))), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 1fr) 340px",
      gap: "var(--space-16)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, tab === "Overview" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--font-body-l)",
      color: "var(--text-body)",
      maxWidth: 640
    }
  }, trip.blurb), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--font-body-m)",
      color: "var(--text-body)",
      maxWidth: 640
    }
  }, "The route follows the classic north ridge, with three nights under canvas and a pre-dawn summit push on day four. Snow cover is reliable from late December, and microspikes are issued at base camp. Guides carry a satellite messenger and a full trauma kit; the nearest road head is seven hours from the highest camp."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "var(--space-5)"
    }
  }, facts.map(f => /*#__PURE__*/React.createElement(Card, {
    key: f.label,
    padding: "sm",
    surface: "subtle"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: f.icon,
    size: "sm",
    style: {
      color: "var(--gold-600)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, f.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 16,
      fontWeight: 700,
      color: "var(--navy-700)"
    }
  }, f.value)))))) : null, tab === "Itinerary" ? /*#__PURE__*/React.createElement("div", null, d.itinerary.map((s, i) => /*#__PURE__*/React.createElement(ItineraryStep, {
    key: s.day,
    day: s.day,
    title: s.title,
    meta: s.meta,
    last: i === d.itinerary.length - 1
  }, s.body))) : null, tab === "Inclusions" ? /*#__PURE__*/React.createElement(Accordion, {
    items: d.faq
  }) : null, tab === "Departures" ? /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-card)",
      overflow: "hidden"
    }
  }, d.departures.map((dep, i) => /*#__PURE__*/React.createElement(DepartureRow, _extends({
    key: dep.dates
  }, dep, {
    onBook: () => setBooked(dep.dates),
    style: i === d.departures.length - 1 ? {
      borderBottom: "none"
    } : undefined
  })))) : null), /*#__PURE__*/React.createElement(Card, {
    accentTop: true,
    padding: "lg",
    elevation: "md",
    style: {
      position: "sticky",
      top: 108
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "From"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 3,
      margin: "var(--space-2) 0 var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 22,
      fontWeight: 700,
      color: "var(--navy-700)"
    }
  }, "\u20B9"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 40,
      fontWeight: 800,
      letterSpacing: "0.01em",
      color: "var(--navy-700)",
      lineHeight: 1
    }
  }, trip.price), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--font-body-s)",
      color: "var(--text-muted)",
      marginLeft: 4
    }
  }, "per person")), /*#__PURE__*/React.createElement(GoldRule, {
    width: "100%"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      margin: "var(--space-5) 0"
    }
  }, ["Road transfer from Dehradun", "All camping equipment", "Certified lead guide", "Wilderness first-aid cover"].map(x => /*#__PURE__*/React.createElement("span", {
    key: x,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      font: "var(--font-body-s)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: "sm",
    style: {
      color: "var(--gold-600)"
    }
  }), x))), booked ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-4)",
      marginBottom: "var(--space-4)",
      background: "var(--success-100)",
      color: "var(--success-600)",
      borderRadius: "var(--radius-sm)",
      font: "var(--font-body-s)"
    }
  }, "Place held on ", booked, ". We will email to confirm within 24 hours.") : null, /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    fullWidth: true,
    size: "lg",
    onClick: () => setTab("Departures")
  }, "Choose a date"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    fullWidth: true,
    style: {
      marginTop: "var(--space-2)"
    },
    onClick: () => onNavigate("Contact")
  }, "Ask a question")))));
}
Object.assign(window, {
  TripDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TripDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
/* Sample content for the Trikuta website kit.
   Only a logo was supplied, so there is no photography: every image slot falls back
   to a flat navy or gold block. Copy is written to the brand's voice, not lifted
   from any real Trikuta material. */
window.TrikutaData = {
  nav: ["Adventures", "Sports", "About", "Journal", "Contact"],
  hero: {
    eyebrow: "Garhwal Himalaya · Winter 2026",
    title: ["Rise above", "the treeline"],
    body: "Guided treks, high-altitude expeditions and year-round sports programmes, run by people who have spent their lives on these ridges."
  },
  activities: [{
    name: "Trekking",
    count: "18 routes",
    imageTone: "var(--navy-600)"
  }, {
    name: "Expeditions",
    count: "6 peaks",
    imageTone: "var(--navy-800)"
  }, {
    name: "Rafting",
    count: "Ganga · Zanskar",
    imageTone: "var(--navy-500)"
  }, {
    name: "Badminton",
    count: "Academy · all levels",
    imageTone: "var(--gold-700)"
  }],
  crests: [{
    icon: "shield-check",
    label: "Certified guides"
  }, {
    icon: "users",
    label: "Max 12 per group"
  }, {
    icon: "heart-pulse",
    label: "Wilderness first aid"
  }, {
    icon: "leaf",
    label: "Leave no trace"
  }],
  stats: [{
    value: "120",
    suffix: "+",
    label: "Summits led"
  }, {
    value: "14",
    label: "Seasons"
  }, {
    value: "6,150",
    suffix: "m",
    label: "Highest ascent"
  }, {
    value: "100",
    suffix: "%",
    label: "Safety record"
  }],
  trips: [{
    id: "kedarkantha",
    region: "Garhwal Himalaya",
    title: "Kedarkantha Winter Summit",
    days: "6 Days",
    altitude: "3,810 m",
    difficulty: "Moderate",
    price: "18,500",
    badge: "Bestseller",
    imageTone: "var(--navy-600)",
    season: "Winter",
    discipline: "Trekking",
    blurb: "Six days from Dehradun to a 3,810 m ridge, camping in snow-bound clearings on the way up. No prior mountaineering experience required."
  }, {
    id: "chadar",
    region: "Zanskar",
    title: "Chadar Frozen River",
    days: "9 Days",
    altitude: "3,390 m",
    difficulty: "Challenging",
    price: "42,000",
    imageTone: "var(--navy-800)",
    season: "Winter",
    discipline: "Trekking",
    blurb: "Walking the frozen Zanskar between canyon walls, sleeping in caves the Zanskaris have used for centuries."
  }, {
    id: "hampta",
    region: "Himachal",
    title: "Hampta Pass Crossing",
    days: "5 Days",
    altitude: "4,270 m",
    difficulty: "Moderate",
    price: "16,900",
    imageTone: "var(--gold-700)",
    season: "Summer",
    discipline: "Trekking",
    blurb: "A crossing from the green Kullu valley into the desert of Lahaul in a single day's walk."
  }, {
    id: "stok",
    region: "Ladakh",
    title: "Stok Kangri Expedition",
    days: "11 Days",
    altitude: "6,153 m",
    difficulty: "Technical",
    price: "89,000",
    badge: "Expedition",
    badgeTone: "navy",
    imageTone: "var(--navy-700)",
    season: "Summer",
    discipline: "Expeditions",
    blurb: "A guided ascent with a full acclimatisation schedule, fixed lines above the glacier and a 1:2 guide ratio on summit day."
  }, {
    id: "rupin",
    region: "Himachal · Uttarakhand",
    title: "Rupin Pass Traverse",
    days: "8 Days",
    altitude: "4,650 m",
    difficulty: "Challenging",
    price: "24,500",
    imageTone: "var(--navy-500)",
    season: "Spring",
    discipline: "Trekking",
    blurb: "Hanging villages, three waterfalls and a snow gully to the pass. The most varied trail in the western Himalaya."
  }, {
    id: "ganga",
    region: "Rishikesh",
    title: "Ganga Whitewater Week",
    days: "4 Days",
    altitude: "Grade III–IV",
    difficulty: "Beginner",
    price: "12,000",
    imageTone: "var(--gold-600)",
    season: "Autumn",
    discipline: "Rafting",
    blurb: "Four days on the Ganga with progressive instruction, from flatwater ferries to Grade IV lines."
  }],
  itinerary: [{
    day: 1,
    title: "Dehradun to Sankri",
    meta: ["190 km", "7 hrs drive"],
    body: "Road transfer along the Yamuna, climbing through Mussoorie and Purola. Arrive at the trailhead village by evening; gear check after dinner."
  }, {
    day: 2,
    title: "Sankri to Juda ka Talab",
    meta: ["4 km", "+760 m", "5 hrs"],
    body: "Pine and oak forest all morning, then a clearing beside the frozen lake. First night under canvas at 2,700 m."
  }, {
    day: 3,
    title: "Juda ka Talab to Base Camp",
    meta: ["4 km", "+600 m", "4 hrs"],
    body: "The treeline thins and the ridge opens out. Short afternoon session on microspikes and self-arrest."
  }, {
    day: 4,
    title: "Summit day",
    meta: ["6 km", "+510 m", "9 hrs"],
    body: "Pre-dawn start on the north ridge. Summit by mid-morning weather permitting, then the full descent to Juda ka Talab."
  }, {
    day: 5,
    title: "Descent to Sankri",
    meta: ["8 km", "−1,360 m"],
    body: "A long downhill through the forest, back to the village for a hot shower and a proper meal."
  }, {
    day: 6,
    title: "Return to Dehradun",
    meta: ["190 km"],
    body: "Morning departure, arriving in Dehradun by late afternoon."
  }],
  departures: [{
    dates: "14 – 19 Oct 2026",
    duration: "6 days",
    price: "18,500",
    spots: "8",
    status: "open"
  }, {
    dates: "21 – 26 Oct 2026",
    duration: "6 days",
    price: "18,500",
    spots: "3",
    status: "filling"
  }, {
    dates: "28 Oct – 2 Nov 2026",
    duration: "6 days",
    price: "19,500",
    status: "soldOut"
  }, {
    dates: "11 – 16 Nov 2026",
    duration: "6 days",
    price: "19,500",
    spots: "11",
    status: "open"
  }],
  faq: [{
    question: "What fitness level do I need?",
    answer: "You should be able to walk 5 km on undulating ground without stopping. We send a six-week preparation plan once you book, and we would rather you tell us early if you are unsure."
  }, {
    question: "Is equipment provided?",
    answer: "Tents, sleeping bags rated to −10 °C, microspikes, gaiters and all group equipment are included. You bring boots, layers and a daypack. Boots can be hired in Sankri."
  }, {
    question: "What happens if the weather turns?",
    answer: "The guide's decision is final and it is always a safety decision. If a summit attempt is called off we run an alternative day at no extra cost; we do not refund for weather."
  }, {
    question: "How do I get to the start?",
    answer: "All trips begin and end in Dehradun and road transfer is included. Most people take the overnight train or an early flight from Delhi."
  }],
  testimonials: [{
    rating: 5,
    name: "Ananya R.",
    trip: "Kedarkantha Winter Summit",
    quote: "The guides read the weather better than any forecast we had. Turned us back an hour before it closed in, and we still summited the next morning."
  }, {
    rating: 5,
    name: "Vikram S.",
    trip: "Stok Kangri Expedition",
    quote: "Eleven days, and the acclimatisation schedule was the most conservative I have been on. Everyone in the group reached the top."
  }, {
    rating: 4,
    name: "Meera J.",
    trip: "Ganga Whitewater Week",
    quote: "I had never been in a raft. By day three I was leading a line through Golf Course. Patient, unhurried instruction."
  }],
  footerColumns: [{
    title: "Adventures",
    links: ["Treks", "Expeditions", "Rafting", "Custom departures"]
  }, {
    title: "Sports",
    links: ["Badminton academy", "Corporate leagues", "Coaching"]
  }, {
    title: "Company",
    links: ["About us", "Safety standards", "Careers", "Journal"]
  }],
  contact: ["Jammu · Katra · Rishikesh", "+91 98000 00000", "hello@trikuta.in"]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Crest = __ds_scope.Crest;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.GoldRule = __ds_scope.GoldRule;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.TaglineBand = __ds_scope.TaglineBand;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.ActivityTile = __ds_scope.ActivityTile;

__ds_ns.DepartureRow = __ds_scope.DepartureRow;

__ds_ns.ItineraryStep = __ds_scope.ItineraryStep;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.TripCard = __ds_scope.TripCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.CarouselControls = __ds_scope.CarouselControls;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
