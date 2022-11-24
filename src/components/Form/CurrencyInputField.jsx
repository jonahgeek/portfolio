import clsx from "clsx";

import { FieldWrapper } from "./FieldWrapper";

export const CurrencyInputField = (props) => {
  const { label, disabled, value, registration, onChange, error } = props;
  return (
    <FieldWrapper label={label} error={error}>
      <div>
        <div class="relative mt-1 rounded-md shadow-sm">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span class="text-gray-500 sm:text-sm">SHS</span>
          </div>
          <input
            type="text"
            name="price"
            id="price"
            class="block w-full rounded-md border-gray-300 pl-12 pr-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            disabled={disabled}
            value={value}
            {...registration}
            onChange={onChange}
          />
          <div class="absolute inset-y-0 right-0 flex items-center">
            <label for="currency" class="sr-only">
              Currency
            </label>
            <select
              id="currency"
              name="currency"
              class="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option>UGX</option>
            </select>
          </div>
        </div>
      </div>
    </FieldWrapper>
  );
};
