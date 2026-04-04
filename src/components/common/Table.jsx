import React from 'react';

const Table = ({ columns = [], data = [], onRowClick = null, className = '', ...props }) => {
  return (
    <div className={`overflow-x-auto rounded-2xl border border-slate-100 bg-white shadow-sm ${className}`} {...props}>
      <table className="w-full text-left border-collapse">
        <thead className="bg-slate-50 border-b border-slate-100">
          <tr>
            {columns.map((col, idx) => (
              <th 
                key={idx} 
                className={`px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.1em] italic select-none ${col.className || ''}`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {data.length > 0 ? (
            data.map((row, rIdx) => (
              <tr 
                key={rIdx} 
                onClick={() => onRowClick && onRowClick(row)}
                className={`hover:bg-slate-50/50 transition-colors group cursor-pointer ${onRowClick ? 'cursor-pointer' : ''}`}
              >
                {columns.map((col, cIdx) => (
                  <td key={cIdx} className={`px-6 py-4 text-sm ${col.className || ''}`}>
                    {col.cell ? col.cell(row) : row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="px-6 py-12 text-center text-slate-400 text-xs font-bold uppercase tracking-widest italic opacity-50">
                No records found within the current simulation range.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
