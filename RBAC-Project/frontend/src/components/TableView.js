// // import React from 'react';

// // const TableView = ({ data, permissions }) => {
// //   if (!data || data.length === 0) return <p>No data available</p>;

// //   const columns = Object.keys(data[0]);

// //   return (
// //     <table className="table table-striped table-bordered">
// //       <thead>
// //         <tr>
// //           {columns.map(col => (
// //             permissions.includes(col) && <th key={col}>{col}</th>
// //           ))}
// //         </tr>
// //       </thead>
// //       <tbody>
// //         {data.map((row, idx) => (
// //           <tr key={idx}>
// //             {columns.map(col => (
// //               permissions.includes(col) && <td key={col}>{row[col]}</td>
// //             ))}
// //           </tr>
// //         ))}
// //       </tbody>
// //     </table>
// //   );
// // };

// // export default TableView;


// import React from 'react';
// import "../styles/global.css";

// const TableView = ({ data, permissions }) => {
//   if (!data || data.length === 0) {
//     return <p className="no-data">No data available</p>;
//   }

//   const columns = Object.keys(data[0]);

//   return (
//     <div className="table-container">
//       <table className="custom-table">
//         <thead>
//           <tr>
//             {columns.map(col =>
//               permissions.includes(col) && <th key={col}>{col}</th>
//             )}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, idx) => (
//             <tr key={idx}>
//               {columns.map(col =>
//                 permissions.includes(col) && <td key={col}>{row[col]}</td>
//               )}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {columns.some(col => !permissions.includes(col)) && (
//         <p className="restricted-message">
//           Some fields are hidden based on your role permissions.
//         </p>
//       )}
//     </div>
//   );
// };

// export default TableView;



import React from 'react';
import "../styles/global.css";

const TableView = ({ data, permissions }) => {
  if (!data || data.length === 0) {
    return <p className="no-data">No data available</p>;
  }

  const columns = Object.keys(data[0]);

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            {columns.map(col =>
              permissions.includes(col) && <th key={col}>{col}</th>
            )}
          </tr>
        </thead>

        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              {columns.map(col =>
                permissions.includes(col) && (
                  <td key={col}>{row[col]}</td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {columns.some(col => !permissions.includes(col)) && (
        <p className="restricted-message">
          Some fields are hidden based on your role permissions.
        </p>
      )}
    </div>
  );
};

export default TableView;
