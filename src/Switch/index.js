import "./Styles.css";
import { useTheme } from "../components/ThemeContext";

const Switch = () => {
  const { theme, toggleTheme} = useTheme();
  return (
    <label className="switch">
      <input
        type="checkbox" onClick={toggleTheme}
        checked={theme === "light"}
      />
      <span className="slider round" />
    </label>
  );
};

export default Switch;
