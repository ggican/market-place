import Icon from "@components/Icon";
import { useState } from "react";

const ImageUploadComponent = ({ value, onChange }: any) => {
  const [imagePreview, setImagePreview] = useState(value || null);

  // Handle file selection
  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      // Create a URL for the selected image to preview it
      const imageUrl = URL.createObjectURL(file);
      onChange(imageUrl); // Set the image URL in form state
      setImagePreview(imageUrl); // Set the preview URL
    }
  };

  return (
    <>
      <div className="bg-white flex justify-center">
        {imagePreview ? (
          <div className="relative">
            <img src={imagePreview} alt="Image Preview" className="w-full rounded-md" />
            {/* Button to remove the uploaded image */}
            <button
              type="button"
              onClick={() => {
                setImagePreview(null);
                onChange(""); // Reset the image URL in the form
              }}
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
            >
              ❌
            </button>
          </div>
        ) : (
          <label htmlFor="image-upload" className="cursor-pointer">
            <div className="p-4 bg-gray-200 rounded-full">
              <Icon icon="image" size="extra" color="white-very-light" />
            </div>
          </label>
        )}
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      <div className="font-roboto text-primary text-[20px] font-bold leading-[23.44px] text-center underline decoration-solid decoration-from-font decoration-skip-ink-none mt-4">
        Upload your Image
      </div>
    </>
  );
};
