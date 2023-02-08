import { useNavigate } from "react-router-dom";
import "./header.style.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="headerWrapper">
      <div>Header</div>
      <div className="headerBTN">
        <button onClick={() => navigate("/register")}>Register</button>
        <button onClick={() => navigate("/login")}>Login</button>
      </div>
    </div>
  );
};

export { Header };
