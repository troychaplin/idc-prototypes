import { idcBlueBg } from "../../utils/colorClasses";

type BgColorKeys = keyof typeof idcBlueBg;

export interface ButtonProps {
  color?: "blue" | "orange" | "white";
  colorStrength?: BgColorKeys;
  textColor?: "light" | "dark";
  label: string;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
  isOutline?: boolean;
  onClick?: () => void;
}

export const Button = ({
  color = "blue",
  colorStrength = 500,
  textColor = "light",
  label,
  type = "button",
  size = "md",
  isOutline = false,
  ...props
}: ButtonProps) => {
  let buttonColor = "";
  switch (color) {
    case "blue":
      buttonColor = isOutline
        ? `border-idc-blue-${String(colorStrength)}`
        : `bg-idc-blue-${String(colorStrength)}`;
      break;
    case "orange":
      buttonColor = isOutline
        ? `border-idc-orange-${String(colorStrength)}`
        : `bg-idc-orange-${String(colorStrength)}`;
      break;
    case "white":
      buttonColor = isOutline ? `border-white` : `bg-white`;
      break;
    default:
      buttonColor = isOutline
        ? `border-idc-blue-${String(colorStrength)}`
        : `bg-idc-blue-${String(colorStrength)}`;
      break;
  }

  const textStyles = textColor === "light" ? "text-white" : "text-black";
  const buttonStyles = isOutline
    ? `idc-button--outline ${buttonColor}`
    : `idc-button--solid ${buttonColor}`;

  return (
    <button
      type={type}
      className={[
        "idc-button",
        `idc-button--${size}`,
        buttonStyles,
        textStyles,
      ].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};
