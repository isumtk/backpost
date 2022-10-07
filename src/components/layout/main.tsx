import Navbar from "../navbar";

const Main = (props: any) => {
  return (
    <div className="main-layout-wrap">
      <nav className="main-layout-navbar">
        <Navbar />
      </nav>
      <div className="main-layout-content">{props.children}</div>
    </div>
  );
};

export default Main;
