/** @format */

const Service = ({ children, percentage, onSelectPerce }) => {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelectPerce(Number(e.target.value))}
      >
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was Okay(5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="50">Absolutely Amazing(20%)</option>
      </select>
    </div>
  );
};

export default Service;
