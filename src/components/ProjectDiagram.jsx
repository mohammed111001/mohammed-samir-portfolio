function AttendanceDrawing() {
  return (
    <>
      <path d="M40 38h14M47 31v14M361 139h14M368 132v14" opacity=".2" />
      <rect
        x="64"
        y="22"
        width="184"
        height="136"
        rx="8"
        fill="currentColor"
        fillOpacity=".035"
      />
      <path d="M64 54h184M104 54v104M190 54v104" opacity=".35" />
      <path d="M64 88h184M64 122h184" opacity=".22" />
      <path d="M82 39h66M209 39h21" strokeWidth="2" />
      <path d="M120 71h51M120 105h42M120 139h51" opacity=".6" />
      <path d="M207 71h24M207 105h17M207 139h24" opacity=".3" />
      <path d="m79 71 4 4 8-9m-12 39 4 4 8-9m-12 39 4 4 8-9" />
      <path d="M248 90h22m-6-5 6 5-6 5" opacity=".6" />
      <circle cx="315" cy="90" r="39" opacity=".15" />
      <circle
        cx="315"
        cy="90"
        r="29"
        fill="currentColor"
        fillOpacity=".055"
      />
      <path d="m301 90 9 9 19-20" strokeWidth="2" />
      <path d="M295 142h40" opacity=".25" />
      <path d="M306 151h18" opacity=".15" />
    </>
  );
}

function AllocationDrawing() {
  return (
    <>
      <path d="M28 36h14M35 29v14M382 143h14M389 136v14" opacity=".2" />
      <rect
        x="42"
        y="58"
        width="92"
        height="64"
        rx="7"
        fill="currentColor"
        fillOpacity=".035"
      />
      <path d="M42 77h92M58 68h31" opacity=".4" />
      <path d="M58 91h8m9 0h41M58 108h8m9 0h29" opacity=".6" />
      <path d="M134 90h38m-6-5 6 5-6 5" opacity=".6" />
      <rect
        x="183"
        y="63"
        width="58"
        height="54"
        rx="12"
        fill="currentColor"
        fillOpacity=".055"
      />
      <path d="M197 90h12m0 0V78h16m-16 12v12h16" />
      <path d="m221 74 4 4-4 4m0 16 4 4-4 4" />
      <path d="M241 90h20m0 0V40h29m-29 50h29m-29 0v50h29" opacity=".45" />
      <path d="m284 35 6 5-6 5m0 40 6 5-6 5m0 40 6 5-6 5" opacity=".6" />
      {[22, 72, 122].map((top) => (
        <g key={top}>
          <rect
            x="302"
            y={top}
            width="70"
            height="36"
            rx="5"
            fill="currentColor"
            fillOpacity=".035"
          />
          <path
            d={`M315 ${top + 11}h10m-10 7h10m17-7h17m-17 7h17`}
            opacity=".45"
          />
          <path d={`M333 ${top}v36`} opacity=".22" />
        </g>
      ))}
    </>
  );
}

export default function ProjectDiagram({ kind = "attendance", caption, labels }) {
  const flowLabels = Array.isArray(labels) ? labels.slice(0, 3) : [];

  return (
    <figure className={`project-diagram project-diagram--${kind}`}>
      <svg
        className="project-diagram__art"
        viewBox="0 0 420 180"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <g
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {kind === "allocation" ? (
            <AllocationDrawing />
          ) : (
            <AttendanceDrawing />
          )}
        </g>
      </svg>
      {flowLabels.length > 0 ? (
        <ol className="diagram-flow">
          {flowLabels.map((label, index) => (
            <li key={`${index}-${label}`}>{label}</li>
          ))}
        </ol>
      ) : null}
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
