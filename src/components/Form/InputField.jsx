import clsx from "clsx";

import { FieldWrapper } from "./FieldWrapper";

export const InputField = (props) => {
  const {
    type = "text",
    label,
    className,
    disabled,
    value,
    registration,
    onChange,
    error,
    accept,
  } = props;
  return (
    <FieldWrapper label={label} error={error}>
      <input
        type={type}
        className={clsx(
          `appearance-none block w-full px-6 py-2 border ${
            error
              ? "border-red-300"
              : " dark:bg-gray-700 dark:border-none border-gray-300"
          } rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm`,
          className
        )}
        accept={accept}
        disabled={disabled}
        value={value}
        {...registration}
        onChange={onChange}
      />
    </FieldWrapper>
  );
};
