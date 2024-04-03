import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export const useIsDark = () => {
  const [isDark, setIsDark] = useState(false);
  const { resolvedTheme, theme } = useTheme();

  useEffect(() => {
    setIsDark(resolvedTheme === "dark" || theme === "dark");
  }, [resolvedTheme, theme]);

  return isDark;
};
