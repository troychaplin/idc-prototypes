import { uiGridColumns } from "../../utils/propClasses";

type GridColumnsKeys = keyof typeof uiGridColumns;

export interface CardGroupProps {
  children?: React.ReactNode;
  cols?: GridColumnsKeys;
}

export const CardGroup = ({ children, cols = 3 }: CardGroupProps) => {
  return (
    <div
      className={`ui-cardgroup idc-component grid ${uiGridColumns[cols]} gap-4 md:gap-8`}
    >
      {children}
    </div>
  );
};
