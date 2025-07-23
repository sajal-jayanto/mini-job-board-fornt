/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldError } from "react-hook-form";

const FormTextarea = ({
  label,
  register,
  error,
}: {
  label: string;
  register: any;
  error: FieldError | undefined;
}) => {
  return (
    <div className="m-2">
      <label>{label} *</label>
      <textarea
        rows={4}
        className="mt-1 w-full border border-gray-300 rounded-md text-black text-base pl-4 pt-2 resize-none"
        {...register}
      />
      {error?.message && (
        <p className="w-full text-[#F23545] text-left text-xs mt-1">
          {error?.message}
        </p>
      )}
    </div>
  );
};

export default FormTextarea;
