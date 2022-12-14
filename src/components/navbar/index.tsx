import NavActionButton from "../library/nav_action_button";
import NavButton from "../library/nav_button";
const Navbar = (props: any) => {
  const { activeTab, registred, userdata } = props;
  return (
    <div className="h-full w-full bg-white">
      <div className="container_custom mx-auto flex h-full items-center px-4">
        <h1 className="text-2xl font-semibold text-slate-900">backpost</h1>
        <div className="ml-8 flex w-full items-center justify-end">
          <NavButton
            href={"/"}
            title={"Home"}
            isActive={activeTab === "home"}
          />

          {registred && (
            <NavButton
              href={"/messages"}
              title={"Notifications"}
              isActive={activeTab === "messages"}
            />
          )}

          <NavButton
            href={"/write"}
            title={"Write"}
            isActive={activeTab === "write"}
          />

          <NavButton
            href={"/about"}
            title={"About"}
            isActive={activeTab === "about"}
          />

          {registred ? (
            <div className=" ml-2 flex h-8 w-20 items-center"></div>
          ) : (
            <NavActionButton title={"Sign in"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
