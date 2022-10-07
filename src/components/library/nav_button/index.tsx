import { useRouter } from "next/router";

const NavButton = (props: any) => {
  const { isActive, href, title } = props;

  const router = useRouter();

  const handleOnClick = () => {
    router.push(href);
  };

  return (
    <div
      onClick={handleOnClick}
      className={`nav_button_default ${
        isActive ? "text-indigo-500" : "text-slate-400 hover:text-slate-600"
      }`}
    >
      <h2 className="text-lg font-medium">{title}</h2>
    </div>
  );
};

export default NavButton;
