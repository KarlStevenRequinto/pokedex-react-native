export const IceClass = () => {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="100" fill="lightblue" />

      <g transform="translate(100, 100)">
        <line x1="0" y1="-40" x2="0" y2="40" stroke="white" stroke-width="4" />
        <line x1="-40" y1="0" x2="40" y2="0" stroke="white" stroke-width="4" />
        <line
          x1="-28"
          y1="-28"
          x2="28"
          y2="28"
          stroke="white"
          stroke-width="4"
        />
        <line
          x1="-28"
          y1="28"
          x2="28"
          y2="-28"
          stroke="white"
          stroke-width="4"
        />
        <circle cx="0" cy="0" r="6" fill="white" />
      </g>

      <text
        x="50%"
        y="95%"
        font-family="Arial"
        font-size="24"
        fill="white"
        text-anchor="middle">
        Ice Pokémon
      </text>
    </svg>
  )
}
