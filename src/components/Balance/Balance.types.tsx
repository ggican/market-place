export interface DropDownOption {
  label: string;
  value: string;
}

export interface SelectDropdownProps {
  options: DropDownOption[];
  label?: string;
  size?: "sm" | "md" | "lg"; // Added size prop with three options
}
