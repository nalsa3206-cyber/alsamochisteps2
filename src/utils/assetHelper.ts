import logoImg from '../assets/images/mochisteps_brand_logo_1791899999020.jpg';
import heroImg from '../assets/images/hero_flatshoes_lifestyle_1791897849729.jpg';
import balletImg from '../assets/images/flatshoes_ballet_maryjane_1791897850132.jpg';
import loafersImg from '../assets/images/flatshoes_beige_loafers_1791897885803.jpg';
import captoeImg from '../assets/images/flatshoes_black_captoe_1791897884831.jpg';
import sliponsImg from '../assets/images/flatshoes_casual_slipons_1791897850899.jpg';
import mulesImg from '../assets/images/flatshoes_pointed_mules_1791897851105.jpg';
import quiltedImg from '../assets/images/flatshoes_quilted_leather_1791897886963.jpg';
import redMaryJaneImg from '../assets/images/flatshoes_red_maryjane_1791897885164.jpg';

export const ASSETS = {
  logo: logoImg,
  hero: heroImg,
  balletMaryJane: balletImg,
  beigeLoafers: loafersImg,
  blackCapToe: captoeImg,
  casualSlipons: sliponsImg,
  pointedMules: mulesImg,
  quiltedLeather: quiltedImg,
  redMaryJane: redMaryJaneImg,
};

const IMAGE_MAP: Record<string, string> = {
  'mochisteps_brand_logo': logoImg,
  'mochisteps_brand_logo_1791899999020.jpg': logoImg,
  'mochisteps_brand_logo_1791899999020': logoImg,
  'hero_flatshoes_lifestyle': heroImg,
  'hero_flatshoes_lifestyle_1791897849729.jpg': heroImg,
  'hero_flatshoes_lifestyle_1791897849729': heroImg,
  'flatshoes_ballet_maryjane': balletImg,
  'flatshoes_ballet_maryjane_1791897850132.jpg': balletImg,
  'flatshoes_ballet_maryjane_1791897850132': balletImg,
  'flatshoes_beige_loafers': loafersImg,
  'flatshoes_beige_loafers_1791897885803.jpg': loafersImg,
  'flatshoes_beige_loafers_1791897885803': loafersImg,
  'flatshoes_black_captoe': captoeImg,
  'flatshoes_black_captoe_1791897884831.jpg': captoeImg,
  'flatshoes_black_captoe_1791897884831': captoeImg,
  'flatshoes_casual_slipons': sliponsImg,
  'flatshoes_casual_slipons_1791897850899.jpg': sliponsImg,
  'flatshoes_casual_slipons_1791897850899': sliponsImg,
  'flatshoes_pointed_mules': mulesImg,
  'flatshoes_pointed_mules_1791897851105.jpg': mulesImg,
  'flatshoes_pointed_mules_1791897851105': mulesImg,
  'flatshoes_quilted_leather': quiltedImg,
  'flatshoes_quilted_leather_1791897886963.jpg': quiltedImg,
  'flatshoes_quilted_leather_1791897886963': quiltedImg,
  'flatshoes_red_maryjane': redMaryJaneImg,
  'flatshoes_red_maryjane_1791897885164.jpg': redMaryJaneImg,
  'flatshoes_red_maryjane_1791897885164': redMaryJaneImg,
};

/**
 * Returns the reliable bundled asset URL for any product or branding image,
 * falling back gracefully so images never break whether in dev, preview, GitHub, or prod.
 */
export function getAssetUrl(pathOrUrl?: string, fallback: string = balletImg): string {
  if (!pathOrUrl || typeof pathOrUrl !== 'string') return fallback;

  const clean = pathOrUrl.trim();
  const filename = clean.split('/').pop()?.split('?')[0] || '';

  // 1. Direct match by filename
  if (IMAGE_MAP[filename]) {
    return IMAGE_MAP[filename];
  }

  // 2. Substring match by known image keys
  for (const [key, value] of Object.entries(IMAGE_MAP)) {
    if (filename.includes(key) || clean.includes(key)) {
      return value;
    }
  }

  // 3. Keyword heuristic match based on shoe models
  const lower = clean.toLowerCase();
  if (lower.includes('logo')) return logoImg;
  if (lower.includes('hero') || lower.includes('banner')) return heroImg;
  if (lower.includes('quilted')) return quiltedImg;
  if (lower.includes('red') || lower.includes('maroon')) return redMaryJaneImg;
  if (lower.includes('captoe') || lower.includes('cap_toe') || lower.includes('cap-toe')) return captoeImg;
  if (lower.includes('loafer') || lower.includes('beige')) return loafersImg;
  if (lower.includes('mule') || lower.includes('pointed')) return mulesImg;
  if (lower.includes('slipon') || lower.includes('slip-on') || lower.includes('casual')) return sliponsImg;
  if (lower.includes('ballet') || lower.includes('maryjane') || lower.includes('ribbon')) return balletImg;

  // 4. Data URI (e.g. SVG QRIS barcodes or data URLs)
  if (clean.startsWith('data:')) {
    return clean;
  }

  // 5. External URL if valid http(s), but fallback if Unsplash fails or isn't responsive
  if (clean.startsWith('http://') || clean.startsWith('https://')) {
    return clean;
  }

  return fallback;
}
