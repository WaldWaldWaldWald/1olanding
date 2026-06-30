/* =========================================================================
   1orbit — иконки одним модулем (как в проекте obitel-estate).
   Все на currentColor, наследуют цвет текста. Бренд-глифы упрощены.
   ========================================================================= */

const svg = (props) => ({
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': true,
  focusable: false,
  ...props,
})

/* ---- UI ---------------------------------------------------------------- */
export const MenuIcon = () => (
  <svg {...svg()}>
    <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export const CloseIcon = () => (
  <svg {...svg()}>
    <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export const PlayIcon = () => (
  <svg {...svg()}>
    <path d="M8 5.5v13l11-6.5-11-6.5z" fill="currentColor" />
  </svg>
)

export const ArrowIcon = () => (
  <svg {...svg()}>
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const ChevronDownIcon = () => (
  <svg {...svg()}>
    <path
      d="M6 9l6 6 6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const CheckIcon = () => (
  <svg {...svg()}>
    <path
      d="M20 6L9 17l-5-5"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const PlusIcon = () => (
  <svg {...svg()}>
    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export const MailIcon = () => (
  <svg {...svg()}>
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

export const OrbitMark = () => (
  // Простая орбита: планета + кольцо со спутником. Заменишь на свой лого при наличии.
  <svg {...svg({ viewBox: '0 0 28 28', width: 28, height: 28 })}>
    <circle cx="14" cy="14" r="4.6" fill="currentColor" />
    <ellipse
      cx="14"
      cy="14"
      rx="12"
      ry="5.4"
      transform="rotate(-28 14 14)"
      stroke="currentColor"
      strokeWidth="1.6"
      opacity="0.7"
    />
    <circle cx="24" cy="9.4" r="1.9" fill="currentColor" />
  </svg>
)

/* ---- Платформы --------------------------------------------------------- */
const Apple = () => (
  <svg {...svg()}>
    <path
      d="M17.05 12.55c-.02-2.06 1.68-3.05 1.76-3.1-.96-1.4-2.45-1.6-2.98-1.62-1.27-.13-2.48.75-3.12.75-.64 0-1.64-.73-2.7-.71-1.39.02-2.67.81-3.38 2.05-1.44 2.5-.37 6.2 1.04 8.23.69.99 1.5 2.1 2.57 2.06 1.03-.04 1.42-.67 2.66-.67 1.24 0 1.59.67 2.68.65 1.11-.02 1.81-1.01 2.49-2.01.78-1.15 1.1-2.26 1.12-2.32-.02-.01-2.15-.83-2.17-3.27zM15.0 6.6c.56-.69.94-1.64.84-2.6-.81.03-1.79.54-2.37 1.22-.52.6-.98 1.57-.86 2.5.9.07 1.83-.46 2.39-1.12z"
      fill="currentColor"
    />
  </svg>
)
const Android = () => (
  <svg {...svg()}>
    <path
      d="M7 10a1 1 0 00-1 1v5a1 1 0 002 0v-5a1 1 0 00-1-1zM17 10a1 1 0 00-1 1v5a1 1 0 002 0v-5a1 1 0 00-1-1zM5 11v6a1 1 0 001 1h1v2.2a1 1 0 002 0V18h2v2.2a1 1 0 002 0V18h1a1 1 0 001-1v-6H5z"
      fill="currentColor"
    />
    <path
      d="M8.3 6.2L7.4 4.8a.4.4 0 01.7-.4l.9 1.5a5.6 5.6 0 014 0l.9-1.5a.4.4 0 01.7.4l-.9 1.4A4.7 4.7 0 0116.5 10h-9a4.7 4.7 0 01.8-3.8z"
      fill="currentColor"
    />
    <circle cx="9.5" cy="8" r=".7" fill="var(--bg-1, #0a0c1a)" />
    <circle cx="14.5" cy="8" r=".7" fill="var(--bg-1, #0a0c1a)" />
  </svg>
)
const Desktop = () => (
  <svg {...svg()}>
    <rect x="3" y="4.5" width="18" height="12" rx="1.6" stroke="currentColor" strokeWidth="1.8" />
    <path d="M9 20h6M12 16.5V20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

export const platformIcons = { ios: Apple, android: Android, pc: Desktop }

/* ---- Соцсети ----------------------------------------------------------- */
const Discord = () => (
  <svg {...svg()}>
    <path
      d="M19.3 5.6A16 16 0 0015.3 4.4l-.2.4a12 12 0 013.5 1.8 13.8 13.8 0 00-12-.1A12 12 0 019 4.8l-.2-.4A16 16 0 004.7 5.6 16.6 16.6 0 002 16.7a16 16 0 004.9 2.5l.5-.8a10.4 10.4 0 01-1.6-.8l.4-.3a11.8 11.8 0 0010.4 0l.4.3a10.4 10.4 0 01-1.6.8l.5.8A16 16 0 0022 16.7a16.6 16.6 0 00-2.7-11.1zM9.3 14.5c-.8 0-1.5-.8-1.5-1.7s.7-1.7 1.5-1.7 1.5.8 1.5 1.7-.7 1.7-1.5 1.7zm5.4 0c-.8 0-1.5-.8-1.5-1.7s.7-1.7 1.5-1.7 1.5.8 1.5 1.7-.7 1.7-1.5 1.7z"
      fill="currentColor"
    />
  </svg>
)
const X = () => (
  <svg {...svg()}>
    <path
      d="M17.5 3h2.6l-5.7 6.5L21 21h-5.2l-4-5.3-4.6 5.3H4.5l6.1-7L3.3 3h5.3l3.6 4.8L17.5 3zm-1 16.4h1.4L8 4.5H6.5l10 14.9z"
      fill="currentColor"
    />
  </svg>
)
const YouTube = () => (
  <svg {...svg()}>
    <path
      d="M22 8.2a3 3 0 00-2-2C18.2 5.7 12 5.7 12 5.7s-6.2 0-8 .5a3 3 0 00-2 2C1.5 10 1.5 12 1.5 12s0 2 .5 3.8a3 3 0 002 2c1.8.5 8 .5 8 .5s6.2 0 8-.5a3 3 0 002-2c.5-1.8.5-3.8.5-3.8s0-2-.5-3.8zM10 15.2V8.8l5.2 3.2-5.2 3.2z"
      fill="currentColor"
    />
  </svg>
)
const Telegram = () => (
  <svg {...svg()}>
    <path
      d="M21.8 4.3L2.9 11.6c-1 .4-1 1.5-.1 1.8l4.8 1.5 1.8 5.7c.2.5.4.6.9.4l2.7-2 4.6 3.4c.5.3 1.1.1 1.2-.5l3.3-15.4c.2-.8-.4-1.4-1.3-1.1zM7.9 14.2l8.6-5.4c.4-.3.8.1.5.4l-7 6.4-.3 3-.9-3.9z"
      fill="currentColor"
    />
  </svg>
)
const TikTok = () => (
  <svg {...svg()}>
    <path
      d="M16.5 3c.3 2 1.4 3.5 3.5 3.7v2.4c-1.2.1-2.3-.2-3.4-.8v5.6a5.6 5.6 0 11-5.6-5.6c.3 0 .6 0 .9.1v2.5a2.9 2.9 0 00-.9-.1 3 3 0 103 3V3h2z"
      fill="currentColor"
    />
  </svg>
)
const Twitch = () => (
  <svg {...svg()}>
    <path
      d="M4.3 3L3 6.4v11.3h3.8V20h2.1l2.3-2.3h3.4L20 13V3H4.3zm14 9.4l-2.3 2.3h-3.8l-2 2v-2H7.1V4.7h11.2v7.7z"
      fill="currentColor"
    />
    <path d="M14.8 7.3h1.6v4.1h-1.6zM10.6 7.3h1.6v4.1h-1.6z" fill="currentColor" />
  </svg>
)

export const socialIcons = {
  discord: Discord,
  x: X,
  youtube: YouTube,
  telegram: Telegram,
  tiktok: TikTok,
  twitch: Twitch,
}
