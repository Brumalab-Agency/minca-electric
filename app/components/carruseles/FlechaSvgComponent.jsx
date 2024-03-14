import React from 'react'

export const FlechaSvgComponent = ({clases}) => {
  return (
    <div className={clases}>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width={56}
      height={40}
      fill="none"
        >
      <path
        fill="#111"
        fillRule="evenodd"
        d="M2 22a2 2 0 1 1 0-4h14v4H2ZM56 4v32c0 2.208-1.792 4-4 4H20c-2.208 0-4-1.792-4-4V22h29.172L34.686 32.486a2.001 2.001 0 0 0 2.83 2.828l13.798-13.798c.416-.418.594-.972.566-1.516a1.976 1.976 0 0 0-.566-1.514l-13.798-13.8a2.004 2.004 0 0 0-2.83 0c-.78.78-.78 2.048 0 2.83L45.172 18H16V4c0-2.208 1.792-4 4-4h32c2.208 0 4 1.792 4 4Z"
        clipRule="evenodd"
      />
        </svg>
    </div>
  )
}

export default FlechaSvgComponent