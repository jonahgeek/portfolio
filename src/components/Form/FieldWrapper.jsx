import clsx from "clsx";

export const FieldWrapper = (props) => {
  const { label, className, error, children } = props;
  return (
    <div>
      <label
        className={clsx(
          "block text-sm font-medium text-gray-700 dark:text-gray-400",
          className
        )}
      >
        <span className="text-gray-400 dark:text-gray-200">{label}</span>
        <br />
        <div className="mt-2">{children}</div>
      </label>
      {error?.message && (
        <div
          role="alert"
          aria-label={error.message}
          className="text-sm font-semibold text-red-500"
        >
          {error.message}
        </div>
      )}
    </div>
  );
};
