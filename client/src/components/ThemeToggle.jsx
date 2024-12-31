import { useTheme } from "../Hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-1 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md"
    >
      {theme === "dark" ? "🌞" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
