// components/Input/Input.tsx
import { TTextInput } from "@components/Form/TextInput/TextInput.types";
import React, { forwardRef } from "react";

// Forward the ref to the input
const TextInput = forwardRef<HTMLInputElement, TTextInput>(({ block = false, ...props }, ref) => {
  return (
    <input
      ref={ref} // Important: this is how you forward the ref to the input
      className={`rounded-[10px] w-full px-4 py-3 text-gray-700 bg-white border border-primary focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-tl-lg ${block ? "w-full" : ""}`}
      {...props} // Spread the props to include all react-hook-form props (like ref, value, onChange)
    />
  );
});

TextInput.displayName = "TextInput"; // For better debugging

export default TextInput;
