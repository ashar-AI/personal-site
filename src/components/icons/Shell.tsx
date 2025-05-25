import type { SVGProps } from 'react'

export function Shell(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14z" />
      <path d="M5 8h5v2H5zM5 11h5v2H5zM5 14h5v2H5zM12 8h7v2h-7zM12 11h7v2h-7zM12 14h7v2h-7z" />
    </svg>
  )
}
