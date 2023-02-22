import "./header.style.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="headerWrapper">
      <div>Header</div>
      <div className="headerBTN">
        <button onClick={() => navigate("/login")}>Sign in</button>
      </div>
    </div>
  );
};

export { Header };
