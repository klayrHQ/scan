
export const updateTheme = () => {
  switch (getCurrentTheme()) {
    case "dark":
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      document.documentElement.setAttribute("color-theme", "dark");
      break;
    default:
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      document.documentElement.setAttribute("color-theme", "light");
  }
};

export const getCurrentTheme = (): "dark" | "light" => {
  if (
    !window.localStorage.getItem("theme") ||
    window.localStorage.getItem("theme") === "system"
  ) {
    if (window.matchMedia("(prefers-color-scheme: dark").matches) {
      return "dark";
    }
    return "light";
  }
  return window.localStorage.getItem("theme") as "dark" | "light";
};

export const switchThemeMode = () => {
  if (getCurrentTheme() === "dark") {
    setThemeMode("light")
    return
  }
  setThemeMode("dark")
};

export const setThemeMode = (mode: "light" | "dark") => {
  window.localStorage.setItem("theme", mode);
  updateTheme();
};
