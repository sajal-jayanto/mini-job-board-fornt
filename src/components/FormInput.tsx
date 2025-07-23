/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldError } from "react-hook-form";

const FormInput = ({
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
      <input
        className="mt-1 h-9 w-full border border-gray-300 rounded-md text-black text-base pl-4"
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

export default FormInput;
