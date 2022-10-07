import { useRouter } from "next/router";

const NavButton = (props: any) => {
  const { isActive, defaultSrc, activeSrc, href } = props;

  const router = useRouter();

  const handleOnClick = () => {
    router.push(href);
  };

  return (
    <div onClick={handleOnClick}>
      <img
        src={isActive ? activeSrc : defaultSrc}
        className={"h-8 w-8 bg-rose-400 object-contain"}
      />
    </div>
  );
};

export default NavButton;
