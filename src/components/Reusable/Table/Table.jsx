import React from "react";
import PropTypes from "prop-types";
const Table = ({ heads, children }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table table-zebra w-full">
        {/* head */}
        <thead>
          <tr>
            {heads?.map((head) => (
              <th key={head.label}>{head.label}</th>
            ))}
          </tr>
        </thead>
        {/* body */}
        <tbody>
            {
                children
            }
        </tbody>
      </table>
    </div>
  );
};
Table.propTypes = {
  heads: PropTypes.array,
  children:PropTypes.any,
};
export default Table;
