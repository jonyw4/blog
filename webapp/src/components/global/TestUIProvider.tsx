import React from "react";
import { UIProvider } from "./UIProvider";
export interface TestUIProviderProps {
  children: React.ReactNode;
}

export function TestUIProvider({ children }: TestUIProviderProps) {
  return (
    <UIProvider
      locale={{ 
        locale: "pt-BR", 
        changeLocale: () => null 
      }}
      themeData={{
        initialTheme: 'light',
        callback:() => null
      }}
    >
      {children}
    </UIProvider>
  );
}
