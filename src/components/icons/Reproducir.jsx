export const Reproducir = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  label,
  ...props
}) => {
  return (
    <svg
      width={size || width || 153}
      height={size || height || 153}
      viewBox="0 0 153 153"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M80.6532 146.789H72.4203L61.765 145.223C35.0082 139.54 13.4789 118.01 7.79604 91.2354L6.22961 80.58C6.33889 77.8479 6.06568 75.0611 6.22961 72.3472C9.76318 10.5825 86.9189 -16.8664 128.702 29.3432C168.246 73.0757 138.939 143.456 80.635 146.789H80.6532Z"
        fill="#EA7D00"
      />
      <polygon points="63,52 63,101 101,76.5" fill="white" />
    </svg>
  );
};
