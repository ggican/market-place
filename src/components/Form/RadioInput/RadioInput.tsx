import React from "react";
import { Controller } from "react-hook-form"; // Import Controller
import { TRadioButtonProps, TRadioOption } from "@components/Form/RadioInput/RadioInput.types";

const RadioInput: React.FC<TRadioButtonProps> = ({ options, name, control }) => {
  return (
    <div className="flex flex-wrap gap-4 w-full">
      <Controller
        control={control}
        name={name} // Make sure `name` matches the field name in your schema
        render={({ field }) => (
          <>
            {options &&
              options?.length > 0 &&
              options.map((option: TRadioOption) => (
                <button
                  key={option.value}
                  type="button"
                  className={`px-6 py-3 text-sm font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 
                  ${
                    field.value === option.value
                      ? "bg-primary text-white"
                      : "bg-secondary text-primary hover:text-white hover:bg-primary-light"
                  }`}
                  onClick={() => field.onChange(option.value)} // Link to react-hook-form state
                >
                  {option.label}
                </button>
              ))}
          </>
        )}
      />
    </div>
  );
};

export default RadioInput;
