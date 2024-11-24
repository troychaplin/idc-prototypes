import { uiMaxWidth } from "../../utils/propClasses";
import { Section } from "../Section";
type maxWidthKeys = keyof typeof uiMaxWidth;

export interface HeaderProps {
  name?: string;
  maxWidth?: maxWidthKeys;
}

export const Header = ({ name = "TBD", maxWidth = "5xl" }: HeaderProps) => {
  return (
    <header className="box-border fixed top-0 z-50 w-full bg-white ui-max-w-child-5xl">
      <div className="flex justify-between bg-slate-200">
        <a href="/" className="idc-logo">
          IDC
        </a>
        <nav>Navigation</nav>
        <aside>Aside</aside>
      </div>
    </header>
  );
};
