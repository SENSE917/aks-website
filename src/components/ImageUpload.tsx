import { ChangeEvent } from "react";
import { Image } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function ImageUpload({ value, onChange }: Props) {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => onChange(reader.result as string);
    reader.readAsDataURL(file);
  };

  return (
    <div className="mb-6 flex flex-col gap-4">
      {/* Choose Image Button */}
      <div className="flex justify-start">
        <label
          htmlFor="file-input"
          className="px-6 py-3 bg-[#3fbd9e] text-white font-semibold rounded-lg"
          style={{ background: "linear-gradient(135deg, #253c80 0%, #3fbd9e 100%)" }}
        >
          Choose Image
        </label>
        <input
          id="file-input"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {/* Image preview or placeholder */}
      <div className="flex items-center gap-4 mt-2">
        {value ? (
          <img
            src={value}
            alt="Preview"
            className="w-40 h-40 object-cover rounded-lg border border-gray-300"
          />
        ) : (
          <div className="w-40 h-40 border-2 border-dashed border-gray-300 flex items-center justify-center rounded-lg">
            <Image size={560} className="text-gray-400" />
          </div>
        )}
      </div>
    </div>
  );
}
