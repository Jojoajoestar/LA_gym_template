import React from "react";
import { FaChevronDown } from "react-icons/fa";

/**
 * The Filter component provides a dropdown menu to filter events by type.
 * @param {string} filter - The current filter value.
 * @param {function} setFilter - Function to set the filter value.
 */
const Filter = ({ filter, setFilter }) => {
  return (
    // Render the dropdown menu with options for all classes, yoga, spin class, pilates, and HIIT.
    <div className="flex justify-center mb-8">
      <div className="relative">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 border rounded-md bg-gray-800 text-white appearance-none pr-8"
        > 
          <option value="">All Classes</option>
          <option value="yoga">Yoga</option>
          <option value="spin class">Spin Class</option>
          <option value="pilates">Pilates</option>
          <option value="hiit">HIIT</option>
        </select>
        <FaChevronDown className="absolute top-2 right-2 text-white pointer-events-none" />
      </div>
    </div>
  );
};
export default Filter;
