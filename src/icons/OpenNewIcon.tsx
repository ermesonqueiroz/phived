import { type DefaultIconProps } from "src/utils/defaultIconProps";

export function OpenNewIcon({ className, squareWidthAndHeight = 20 }: DefaultIconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={squareWidthAndHeight}
      height={squareWidthAndHeight}
      viewBox="0 0 24 24"
    >
      <path
        className={className}
        d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3h-7z"
      />
    </svg>
  );
}
