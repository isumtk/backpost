import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavButton from "../library/nav_button";

const Navbar = () => {
  const route = useRouter();
  const [activeTab, setActiveTab] = useState<string>("");
  useEffect(() => {
    if (route.pathname.substring(0, 10) === "/") {
      setActiveTab("home");
    } else if (route.pathname.substring(0, 10) === "/messages") {
      setActiveTab("messages");
    }

    console.log("ActiveTab", activeTab);
  }, []);

  return (
    <div className="h-full w-full">
      <div className="container mx-auto flex h-full items-center">
        <h1 className="text-3xl font-bold text-[#080708]">backpost</h1>
        <div className="ml-8 flex">
          <NavButton
            href={"/"}
            isActive={activeTab === "home"}
            defaultSrc={"./icons/home.svg"}
            activeSrc={"./icons/home_active.svg"}
          />

          <NavButton
            href={"/messages"}
            isActive={activeTab === "messages"}
            defaultSrc={"./icons/notification.svg"}
            activeSrc={"./icons/notification_active.svg"}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
