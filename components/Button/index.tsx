import { idcBlueBg, idcOrangeBg } from "@/utils/colorClasses";

type BlueBgKeys = keyof typeof idcBlueBg;
type OrangeBgKeys = keyof typeof idcOrangeBg;
type BgColorKeys = BlueBgKeys | OrangeBgKeys;

export interface ButtonProps {
  color?: "blue" | "orange";
  colorStrength?: BgColorKeys;
  textColor?: string;
  label: string;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
  isOutline?: boolean;
  onClick?: () => void;
}

export const Button = ({
  color = "blue",
  colorStrength = 500,
  textColor = "#ffffff",
  label,
  type = "button",
  size = "md",
  isOutline = false,
  ...props
}: ButtonProps) => {
  const buttonStyles = isOutline
    ? `idc-button--outline border-idc-${color}-${colorStrength}`
    : `idc-button--solid bg-idc-${color}-${colorStrength}`;

  // Inline style object to handle both background and text color
  const style = {
    color: textColor,
    backgroundColor: isOutline
      ? "transparent"
      : `bg-idc-${color}-${colorStrength}`,
    borderColor: isOutline ? color : "transparent",
  };

  return (
    <button
      type={type}
      className={["idc-button", `idc-button--${size}`, buttonStyles].join(" ")}
      style={style}
      {...props}
    >
      {label}
    </button>
  );
};
