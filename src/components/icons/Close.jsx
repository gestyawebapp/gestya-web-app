export const Close = ({
  fill = "#ec8c1f",
  filled,
  size,
  height,
  width,
  label,
  ...props
}) => {
  return (
    <svg
      width={size || width || 28}
      height={size || height || 28}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="96"
        y1="96"
        x2="416"
        y2="416"
        stroke={"#ec8c1f"}
        strokeWidth={48}
        strokeLinecap="round"
      />
      <line
        x1="416"
        y1="96"
        x2="96"
        y2="416"
        stroke={"#ec8c1f"}
        strokeWidth={48}
        strokeLinecap="round"
      />
    </svg>
  );
};
