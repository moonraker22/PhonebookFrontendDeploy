const Filter = ({ filter, onFilterChange }) => {
  return (
    <div>
      <label htmlFor="filter">filter shown with:</label>
      <input type="text" value={filter} onChange={onFilterChange} />
    </div>
  );
};

export default Filter;
