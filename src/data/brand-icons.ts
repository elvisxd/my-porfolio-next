import {
  siAndroidstudio,
  siAnthropic,
  siAxios,
  siClaude,
  siCoursera,
  siCss,
  siDocker,
  siDotnet,
  siExpo,
  siExpress,
  siFastapi,
  siFirebase,
  siFreecodecamp,
  siGit,
  siGooglegemini,
  siGraphql,
  siHtml5,
  siJavascript,
  siJest,
  siLanggraph,
  siMeta,
  siMongodb,
  siMysql,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siOllama,
  siOpenjdk,
  siPhp,
  siPostgresql,
  siPython,
  siRailway,
  siReact,
  siRedis,
  siRedux,
  siSupabase,
  siSwagger,
  siTailwindcss,
  siTelegram,
  siTypescript,
  siUdemy,
  siUipath,
  siVercel,
  siVite,
  siVuedotjs,
  siWebassembly,
  siWebpack,
  type SimpleIcon,
} from "simple-icons";

/** Brand marks for the technologies named in skills.ts and projects.ts, keyed
 *  by the exact name used there. A name that is not here gets a monogram, so
 *  the list never shows a hole — C#, AWS, Azure and SQL Server have no icon in
 *  simple-icons (trademark policy), and pgvector or "SSE / AG-UI" have none
 *  anywhere. Icons are CC0; only the ones imported here reach the bundle. */
const TECH: Record<string, SimpleIcon> = {
  JavaScript: siJavascript,
  React: siReact,
  "React 19": siReact,
  "React Native": siReact,
  TypeScript: siTypescript,
  HTML: siHtml5,
  CSS: siCss,
  "Tailwind CSS": siTailwindcss,
  Vue: siVuedotjs,
  "Next.js": siNextdotjs,
  "Next.js 15": siNextdotjs,
  Redux: siRedux,
  "Node.js": siNodedotjs,
  NestJS: siNestjs,
  Express: siExpress,
  "Express.js": siExpress,
  GraphQL: siGraphql,
  Python: siPython,
  FastAPI: siFastapi,
  PHP: siPhp,
  Java: siOpenjdk,
  MongoDB: siMongodb,
  PostgreSQL: siPostgresql,
  MySQL: siMysql,
  Supabase: siSupabase,
  "Entity Framework": siDotnet,
  ".NET C#": siDotnet,
  Docker: siDocker,
  Railway: siRailway,
  Vercel: siVercel,
  "Vercel Blob": siVercel,
  Git: siGit,
  Jest: siJest,
  Webpack: siWebpack,
  Swagger: siSwagger,
  Claude: siClaude,
  "Claude Code": siClaude,
  "Google Gemini API": siGooglegemini,
  "UiPath RPA": siUipath,
  LangGraph: siLanggraph,
  Ollama: siOllama,
  "Pyodide / WASM": siWebassembly,
  Vite: siVite,
  Redis: siRedis,
  "Telegram Bot API": siTelegram,
  Expo: siExpo,
  Firebase: siFirebase,
  Axios: siAxios,
  "Android Studio": siAndroidstudio,
};

export interface Brand {
  icon?: SimpleIcon;
  /** Brand colour as a CSS value. Falls back to the icon's own hex. */
  color?: string;
  /** Two or three characters shown when there is no icon. */
  monogram: string;
}

/** Initials for a name without an icon: "SQL Server" → "SS", "C#" → "C#",
 *  "pgvector" → "pg". Short all-caps names are kept whole ("AWS", "SQL"). */
export function monogramFor(name: string): string {
  const clean = name.replace(/\(.*?\)/g, "").trim();
  if (clean.length <= 3) return clean;
  const words = clean.split(/[\s/.-]+/).filter(Boolean);
  if (words.length === 1) return clean.slice(0, 2);
  if (words[0].length <= 3 && words[0] === words[0].toUpperCase()) return words[0];
  return words
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function techBrand(name: string, color?: string): Brand {
  const icon = TECH[name];
  return {
    icon,
    color: color ?? (icon ? `#${icon.hex}` : undefined),
    monogram: monogramFor(name),
  };
}

/** Who issued each degree or certificate, keyed by the institution string in
 *  education.ts. DevTalles and the universities have no mark in simple-icons,
 *  so they carry a monogram in a colour of their own. */
const ISSUERS: Record<string, Brand> = {
  Udemy: { icon: siUdemy, color: "#A435F0", monogram: "Ud" },
  Anthropic: { icon: siAnthropic, color: "#D97757", monogram: "A" },
  DevTalles: { color: "#F26A2E", monogram: "DT" },
  Coursera: { icon: siCoursera, color: "#0056D2", monogram: "Co" },
  "Coursera (Meta)": { icon: siMeta, color: "#0467DF", monogram: "M" },
  freeCodeCamp: { icon: siFreecodecamp, color: "#0A0A23", monogram: "fCC" },
  Unimar: { color: "#1D4ED8", monogram: "U" },
  "Maria Auxiliadora II": { color: "#7C3AED", monogram: "MA" },
};

export function issuerBrand(institution: string): Brand {
  return ISSUERS[institution] ?? { monogram: monogramFor(institution) };
}

/** Whether a brand colour is too dark to read on the dark theme's ground —
 *  Next.js, Vercel, Express, Anthropic and the like. The chip then uses the
 *  foreground colour instead of the brand's black. */
export function isDarkBrand(color?: string): boolean {
  if (!color) return false;
  const hex = color.replace("#", "");
  if (hex.length !== 6) return false;
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return lum < 0.16;
}
