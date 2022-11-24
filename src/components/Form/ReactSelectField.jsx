import Select from "react-select";
import { FieldWrapper } from "./FieldWrapper";

export const ReactSelectField = (props) => {
  const {
    label,
    options,
    error,
    editorContent,
    value,
    setValue,
    name,
    defaultValue,
  } = props;

  const onSelectStateChange = (selectState) => {
    setValue(value, selectState.value);
  };

  return (
    <FieldWrapper label={label} error={error}>
      <Select
        className="basic-single"
        classNamePrefix="select"
        isClearable={true}
        isSearchable={true}
        name={name}
        value={editorContent}
        options={options}
        defaultValue={defaultValue}
        onChange={onSelectStateChange}
      />
    </FieldWrapper>
  );
};
