export default function Input({ type, placeholder, name }) {
  return (
    <input
      className="form-input"
      type={type}
      id={name}
      placeholder={placeholder}
    />
  );
}
