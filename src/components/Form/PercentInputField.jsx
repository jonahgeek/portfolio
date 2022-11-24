import { FieldWrapper } from "./FieldWrapper";

export const PercentInputField = (props) => {
  const { label, disabled, value, registration, onChange, error } = props;
  return (
    <FieldWrapper label={label} error={error}>
      <div>
        <div class="relative mt-1 rounded-md shadow-sm">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span class="text-gray-500 sm:text-sm">%</span>
          </div>
          <input
            type="text"
            class="block w-full rounded-md border-gray-300 pl-12 pr-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            disabled={disabled}
            value={value}
            {...registration}
            onChange={onChange}
          />
        </div>
      </div>
    </FieldWrapper>
  );
};
