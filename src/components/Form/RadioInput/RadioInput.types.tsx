import { Control } from "react-hook-form";

export type TRadioOption = {
  value: string | number;
  label: string;
};

export interface TRadioButtonProps {
  options?: TRadioOption[]; // The options for the radio buttons
  name: string; // Name for the radio group
  control: Control<any>;
  onChange?: (value?: string | number) => void; // Callback to send the selected value to parent
}
