import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <div className={cn("relative min-h-screen transition-all duration-300 ease-in-out", isOpen ? "w-64" : "w-20")}>
      <div className="flex flex-col items-center p-4">
        <Button variant="ghost" onClick={toggleNav} className="mb-4">
          <i className="bi bi-list text-2xl"></i>
        </Button>
        <img
          src={isOpen ? "/uninter-logo.png" : "/logo.jpg"}
          alt="Logo"
          className={cn("transition-all duration-300", isOpen ? "w-32" : "w-12")}
        />
      </div>
      <nav>
        <ul>
          {[
            { path: "/", icon: "house", label: "Home" },
            { path: "/grades", icon: "calculator", label: "Grades" },
          ].map((item) => (
            <li key={item.path}>
              <Button asChild variant={location.pathname === item.path ? "secondary" : "ghost"} className="w-full justify-start">
                <Link to={item.path} className="flex items-center">
                  <i className={cn("bi", `bi-${item.icon}`, "text-2xl", isOpen ? "mr-4" : "mr-0")}></i>
                  {isOpen && <span className="truncate">{item.label}</span>}
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
