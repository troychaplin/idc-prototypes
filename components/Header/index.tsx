export const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full px-6 py-5 bg-white idc-header ui-max-w-child-5xl md:px-8 md:py-6">
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
