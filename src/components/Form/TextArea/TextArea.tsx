// components/TextArea/TextArea.tsx
import { TTextAreaProps } from "@components/Form/TextArea/TextArea.types";

const TextArea: React.FC<TTextAreaProps> = ({ block = false, ...props }) => {
  return (
    <textarea
      className={`px-4 py-3 rounded-[10px] p-[16px] bg-white border-primary text-gray-700 bg-gray-50 border focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-tl-lg ${block ? "w-full" : ""}`}
      {...props} // Spread props from react-hook-form (register, value, onChange, etc.)
    />
  );
};

export default TextArea;
