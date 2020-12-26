const InputField = ({
  label,
  type,
  placeholder,
  value,
  name,
  handleOnChange
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
      }}
    >
      <label htmlFor={label} className="text-gray-600 font-light">
        {label.charAt(0).toUpperCase() + label.slice(1)}
      </label>
      <input
        name={name}
        onChange={handleOnChange}
        id={label}
        type={type}
        min={type === 'number' ? 0 : null}
        placeholder={placeholder}
        value={value}
        className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
      />
    </div>
  );
};

export default InputField;
