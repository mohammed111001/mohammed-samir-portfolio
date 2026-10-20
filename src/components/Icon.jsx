export default function Icon({ name = "arrow", size = 20, ...props }) {
  const paths = {
    arrow: <path d="M5 19 19 5M5 5h14v14" />,
    down: <path d="M12 4v16m-6-6 6 6 6-6" />,
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4 19 5" />
      </>
    ),
    moon: <path d="M20.8 13a9 9 0 0 1-9.8-9.8A9 9 0 1 0 20.8 13Z" />,
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    code: <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-14-2 18" />,
    pin: (
      <>
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 6 9 7 9-7" />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="10" width="14" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 10 5-10 5L2 8l10-5Zm-10 9 10 5 10-5M2 16l10 5 10-5" />
      </>
    ),
    branch: (
      <>
        <circle cx="6" cy="5" r="2" />
        <circle cx="18" cy="6" r="2" />
        <circle cx="6" cy="19" r="2" />
        <path d="M6 7v10m12-9v2a5 5 0 0 1-5 5H6" />
      </>
    ),
    people: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 21v-3a6 6 0 0 1 12 0v3m1-16a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 5" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    graduate: (
      <>
        <path d="m2 9 10-6 10 6-10 6L2 9Zm4 3v6c3 3 9 3 12 0v-6m4-3v9" />
      </>
    ),
    github: (
      <path d="M9 19c-4 1-4-2-6-2m12 5v-3.4a3 3 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6a4.7 4.7 0 0 0-1.3-3.2 4.4 4.4 0 0 0-.1-3.2S17.3 3.6 15 5a11 11 0 0 0-6 0C6.7 3.6 5.7 3.9 5.7 3.9a4.4 4.4 0 0 0-.1 3.2A4.7 4.7 0 0 0 4.3 10c0 4.7 2.8 5.7 5.5 6a3 3 0 0 0-.8 2.3V22" />
    ),
    linkedin: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 10v7m0-10v.1M11 17v-7m0 3a3 3 0 0 1 6 0v4" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M21 11.5A9 9 0 0 1 7.5 19.3L3 21l1.5-4.5A9 9 0 1 1 21 11.5Z" />
        <path d="m8 7 2 3-1 1c1 2 2 3 4 4l1-1 3 2c-3 3-10-2-10-6 0-1 .3-2 1-3Z" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name] || paths.arrow}
    </svg>
  );
}
