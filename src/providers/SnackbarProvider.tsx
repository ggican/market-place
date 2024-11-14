import React, { createContext, ReactNode, useCallback, useContext, useState } from "react";

// Define types for Snackbar context and state
interface SnackbarContextType {
  showSnackbar: (message: string, type?: "success" | "error") => void;
}

interface SnackbarState {
  message: string;
  type: "success" | "error";
  isOpen: boolean;
}

// Create the context with a default empty implementation
const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

interface SnackbarProviderProps {
  children?: ReactNode;
}

// Snackbar provider component
export const SnackbarProvider: React.FC<SnackbarProviderProps> = ({ children }) => {
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    message: "",
    type: "success",
    isOpen: false,
  });

  // Function to show the snackbar
  const showSnackbar = useCallback((message: string, type: "success" | "error" = "success") => {
    setSnackbar({ message, type, isOpen: true });
    // Auto-hide the snackbar after 3 seconds
    setTimeout(() => setSnackbar((prev) => ({ ...prev, isOpen: false })), 3000);
  }, []);

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}

      {snackbar.isOpen && (
        <div
          style={{ top: 75, width: 250, right: 24 }}
          className={`py-2 px-4 rounded-md z-50 text-white text-center  w-[250px] fixed flex gap-4 ${
            snackbar.type === "success" ? "bg-success" : "bg-danger"
          }`}
        >
          <p className="snackbar-">{snackbar.message}</p>
        </div>
      )}
    </SnackbarContext.Provider>
  );
};

// Custom hook to use snackbar
export const useSnackbar = (): SnackbarContextType => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
};
