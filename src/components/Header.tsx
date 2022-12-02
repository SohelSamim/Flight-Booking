import { Switch } from "@material-tailwind/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Header = ({ active, setactive }: any) => {
  useEffect(() => {
    let Type = window.sessionStorage.getItem("Type");
    if (Type != null) {
      setactive(true);
    }
  }, []);
  return (
    <nav className="fixed-top navbar navbar-expand-lg navbar-light">
      <div className="container bg-light">
        <Link className="navbar-brand" to="/">
          Fligthers
        </Link>
        <Switch
          checked={active == true}
          onClick={(e) => {
            if (active == false) {
              window.sessionStorage.setItem("Type", "yes");
            } else {
              window.sessionStorage.removeItem("Type");
            }
            setactive(!active);
          }}
        />
      </div>
    </nav>
  );
};
export default Header;
