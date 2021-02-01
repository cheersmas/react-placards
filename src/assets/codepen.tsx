import * as React from 'react';

function SvgCodepen() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="CodePen"
      viewBox="0 0 512 512"
    >
      <rect width={512} height={512} rx="15%" fill="#111" />
      <g fill="none" stroke="#e6e6e6" strokeWidth={33} strokeLinejoin="round">
        <path d="M81 198v116l175 117 175-117V198L256 81z" />
        <path d="M81 198l175 116 175-116M256 81v117" />
        <path d="M81 314l175-116 175 116M256 431V314" />
      </g>
    </svg>
  );
}

export default SvgCodepen;

