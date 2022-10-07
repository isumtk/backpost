const NavActionButton = (props: any) => {
  const { title, onClick } = props;

  return (
    <div onClick={onClick} className={"nav_action_button"}>
      <h2 className="text-lg font-medium">{title}</h2>
    </div>
  );
};

export default NavActionButton;
