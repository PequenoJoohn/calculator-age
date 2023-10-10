interface IIconArrow {
  width: number;
  height: number;
}

export const IconArrow = ({ width, height }: IIconArrow) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 46 44"
    >
      <g fill="none" stroke="#FFF" stroke-width="3">
        <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
      </g>
    </svg>
  );
};
