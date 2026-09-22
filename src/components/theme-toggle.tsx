"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { SunIcon, MoonIcon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evitar hidratación incorrecta: el tema real solo se conoce en el cliente,
  // así que el primer render debe coincidir con el HTML del servidor.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={`Cambiar a modo ${theme === "dark" ? "claro" : "oscuro"}`}
      className="group"
    >
      {theme === "dark" ? (
        <SunIcon className="h-5 w-5 transition-transform duration-500 ease-out group-hover:rotate-45" />
      ) : (
        <MoonIcon className="h-5 w-5 transition-transform duration-500 ease-out group-hover:-rotate-[30deg]" />
      )}
    </Button>
  );
}
