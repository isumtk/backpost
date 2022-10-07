import Navbar from "../navbar";

const Main = (props: any) => {
  const { activeTab } = props;
  return (
    <div className="main-layout-wrap">
      <nav className="main-layout-navbar">
        <Navbar activeTab={activeTab} />
      </nav>
      <div className="main-layout-content">{props.children}</div>
    </div>
  );
};

export default Main;
