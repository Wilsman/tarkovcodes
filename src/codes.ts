import type { ImageMetadata } from 'astro';
import type en from './i18n/en.json';
// Working
import read80lv from './assets/rewards/read80lv.png';
import inven from './assets/rewards/inven.png';
import ninegag from './assets/rewards/9gag.png';
import gamespark from './assets/rewards/gamespark.png';
import pcgamesn from './assets/rewards/pcgamesn.png';
// Expired
import oneYearOfEscaping from './assets/rewards/1yearofescaping.png';
import undeadtarkov from './assets/rewards/undeadtarkov.png';
import tarkovhalloween from './assets/rewards/tarkovhalloween.png';
import embracepain from './assets/rewards/embracepain.png';
import pveprestige from './assets/rewards/pveprestige.png';
import playyourway from './assets/rewards/playyourway.png';
import lvl1scav from './assets/rewards/lvl1scav.png';
import lvl80boss from './assets/rewards/lvl80boss.png';
import threedmgame from './assets/rewards/3dmgame.png';
import keytool from './assets/rewards/keytool.png';
import wipe from './assets/rewards/wipe.png';
import promocode from './assets/rewards/promocode.png';
import yystv from './assets/rewards/yystv.png';
import polygon from './assets/rewards/polygon.png';
import automaton from './assets/rewards/automaton.png';

export type Status = 'working' | 'expired';
/** pvp = regular PvP, pvps = seasonal PvP character, pve = PvE. */
export type Mode = 'pvp' | 'pvps' | 'pve';

export const modes: Mode[] = ['pvp', 'pvps', 'pve'];
// A code works in every mode unless it's PvE exclusive.
const ALL_MODES: Mode[] = ['pvp', 'pvps', 'pve'];
const PVE_ONLY: Mode[] = ['pve'];

export interface PromoCode {
  code: string;
  status: Status;
  /** Modes the code works in. All three show as one "All modes" badge. */
  modes: Mode[];
  /** Date the code was posted, YYYY-MM-DD. Newest show first. */
  added?: string;
  /** Date the code stopped working, YYYY-MM-DD. Only set on expired codes. */
  expired?: string;
  /** Short line about what it gives or where it works: a key from `codeNotes` in src/i18n/en.json and fr.json. */
  noteKey?: keyof typeof en.codeNotes;
  /** Screenshot of the stash showcase you get for this code. */
  reward?: ImageMetadata;
}

// To add a reward: put the screenshot in src/assets/rewards/, import it above,
// and set `reward` on the code. To retire a code: set status to 'expired' and
// it moves to the expired section at the bottom.
// Order here doesn't matter: the page sorts by `added`, newest first.
export const codes: PromoCode[] = [
  // ---- Working ----
  { code: 'TARKOVFPSPATCH', status: 'working', modes: ALL_MODES, added: '2026-11-25', noteKey: 'tarcoins40k' },
  { code: 'READ80LV', status: 'working', modes: ALL_MODES, added: '2026-11-17', reward: read80lv },
  { code: 'PCGAMESN', status: 'working', modes: ALL_MODES, added: '2026-08-03', noteKey: 'kordBreach', reward: pcgamesn },
  { code: 'GAMESPARK', status: 'working', modes: ALL_MODES, added: '2026-08-03', noteKey: 'kordBreach', reward: gamespark },
  { code: 'INVEN', status: 'working', modes: PVE_ONLY, added: '2026-10-07', reward: inven },
  { code: '9GAG', status: 'working', modes: PVE_ONLY, added: '2026-11-14', reward: ninegag },

  // ---- Expired ----
  {
    code: '1YEAROFESCAPING',
    status: 'expired',
    modes: ALL_MODES,
    added: '2026-11-15',
    expired: '2026-11-21',
    reward: oneYearOfEscaping,
  },
  {
    code: 'EMBRACEPAIN',
    status: 'expired',
    modes: ALL_MODES,
    added: '2026-11-06',
    expired: '2026-11-21',
    noteKey: 'injectors',
    reward: embracepain,
  },
  {
    code: 'PLAYYOURWAY',
    status: 'expired',
    modes: ALL_MODES,
    added: '2026-11-06',
    expired: '2026-11-21',
    noteKey: 'prestigeFigurines',
    reward: playyourway,
  },
  {
    code: 'TARKOVHALLOWEEN',
    status: 'expired',
    modes: ALL_MODES,
    added: '2026-11-05',
    expired: '2026-11-21',
    noteKey: 'halloweenQuote',
    reward: tarkovhalloween,
  },
  {
    code: 'UNDEADTARKOV',
    status: 'expired',
    modes: ALL_MODES,
    added: '2026-10-30',
    expired: '2026-11-21',
    noteKey: 'halloweenMeds',
    reward: undeadtarkov,
  },
  {
    code: 'PVEPRESTIGE',
    status: 'expired',
    modes: PVE_ONLY,
    added: '2026-10-08',
    expired: '2026-11-21',
    reward: pveprestige,
  },
  { code: 'LVL1SCAV', status: 'expired', modes: ALL_MODES, added: '2026-07-19', reward: lvl1scav },
  {
    code: 'FREETARCOINS',
    status: 'expired',
    modes: ALL_MODES,
    added: '2026-07-23',
    noteKey: 'tarcoins20k',
  },
  {
    code: 'LVL80BOSS',
    status: 'expired',
    modes: ALL_MODES,
    added: '2026-07-27',
    noteKey: 'lvl80Boss',
    reward: lvl80boss,
  },
  {
    code: '3DMGAME',
    status: 'expired',
    modes: ['pvps'],
    added: '2026-08-02',
    noteKey: 'seasonStart',
    reward: threedmgame,
  },
  {
    code: 'W2TX-6NU9-UFK1-89RW-M96B',
    status: 'expired',
    modes: ALL_MODES,
    added: '2026-08-03',
    noteKey: 'keyToolKit',
    reward: keytool,
  },
  { code: '6NU9-UFK1-W2TX-89RW-M96B', status: 'expired', modes: ALL_MODES, added: '2026-08-03', noteKey: 'dogtag' },
  { code: '6NU9-W2TX-UFK1-89RW-M96B', status: 'expired', modes: ALL_MODES, added: '2026-08-03', noteKey: 'dogtag' },
  { code: 'UFK1-6NU9-W2TX-89RW-M96B', status: 'expired', modes: ALL_MODES, added: '2026-08-03', noteKey: 'dogtag' },
  { code: 'UFK1-W2TX-6NU9-89RW-M96B', status: 'expired', modes: ALL_MODES, added: '2026-08-03', noteKey: 'dogtag' },
  { code: 'W2TX-UFK1-6NU9-89RW-M96B', status: 'expired', modes: ALL_MODES, added: '2026-08-03', noteKey: 'dogtag' },
  { code: 'WIPE', status: 'expired', modes: ALL_MODES, added: '2026-08-05', reward: wipe },
  { code: 'PROMOCODE', status: 'expired', modes: ['pvp'], added: '2026-08-10', noteKey: 'roubles', reward: promocode },
  {
    code: 'OMG150TARCOINS',
    status: 'expired',
    modes: ALL_MODES,
    added: '2026-08-26',
    noteKey: 'tarcoins30k',
  },
  {
    code: 'SUDAKTUDAK',
    status: 'expired',
    modes: ALL_MODES,
    added: '2026-09-09',
    noteKey: 'sudakTudak',
  },
  { code: 'YYSTV', status: 'expired', modes: PVE_ONLY, added: '2026-10-06', reward: yystv },
  { code: 'POLYGON', status: 'expired', modes: PVE_ONLY, added: '2026-10-06', reward: polygon },
  { code: 'AUTOMATON', status: 'expired', modes: PVE_ONLY, added: '2026-10-06', reward: automaton },
  {
    code: 'JUST150TARCOINS',
    status: 'expired',
    modes: ALL_MODES,
    added: '2026-10-08',
    noteKey: 'tarcoins40k',
  },
];

// Shown at the top of the page and used for sitemap.xml's lastmod. Derived from
// the newest added/expired date, so it moves with the list on its own.
export const updated =
  codes
    .flatMap((c) => [c.added, c.expired])
    .filter((d): d is string => Boolean(d))
    .sort()
    .at(-1) ?? '';
