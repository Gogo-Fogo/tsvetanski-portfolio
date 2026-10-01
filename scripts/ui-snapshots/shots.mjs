// The screenshots capture.mjs takes and verify.mjs checks. One list so they can't drift.
//
// `scroll: "bottom"` captures the end of the page (footer, related projects, fixed controls).

const VIEWPORTS = {
  desktop: { width: 1440, height: 1000 },
  tablet: { width: 768, height: 1024 },
  mobile: { width: 375, height: 812 },
};

const PAGES = [
  { name: "home", path: "/", viewports: ["desktop", "tablet", "mobile"] },
  { name: "projects", path: "/projects", viewports: ["desktop", "tablet", "mobile"] },
  { name: "about", path: "/about", viewports: ["desktop", "mobile"] },
  { name: "creative", path: "/creative", viewports: ["desktop", "mobile"] },
  { name: "cpse", path: "/cpse", viewports: ["desktop", "mobile"] },
  { name: "mumosa", path: "/projects/mumosa-crisis-response-vr", viewports: ["desktop", "mobile"] },
  { name: "bg3", path: "/projects/bg3-toolkit-modding", viewports: ["desktop", "mobile"] },
  { name: "tur", path: "/projects/tur-workout-tracker", viewports: ["mobile"] },
];

const END_OF_PAGE = [
  { name: "home", path: "/", viewports: ["mobile"] },
  { name: "mumosa", path: "/projects/mumosa-crisis-response-vr", viewports: ["desktop", "mobile"] },
];

export const SHOTS = [];

for (const theme of ["dark", "light"]) {
  for (const page of PAGES) {
    for (const viewport of page.viewports) {
      SHOTS.push({ file: `${page.name}-${viewport}-${theme}.png`, path: page.path, theme, ...VIEWPORTS[viewport] });
    }
  }
  for (const page of END_OF_PAGE) {
    for (const viewport of page.viewports) {
      SHOTS.push({
        file: `${page.name}-${viewport}-${theme}-end.png`,
        path: page.path,
        theme,
        scroll: "bottom",
        ...VIEWPORTS[viewport],
      });
    }
  }
}

/** `node capture.mjs home mumosa` captures only shots whose file name contains a filter. */
export function selectShots(filters) {
  return filters.length ? SHOTS.filter((shot) => filters.some((filter) => shot.file.includes(filter))) : SHOTS;
}
