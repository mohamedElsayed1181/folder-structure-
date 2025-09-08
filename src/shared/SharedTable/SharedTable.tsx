interface SharedTableProps {
  headers: string[];
  data: Record<string, any>[];
}

export default function SharedTable({ headers, data }: SharedTableProps) {
  return (
    <div className="mt-6">
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse bg-white rounded-2xl shadow-md overflow-hidden min-w-[600px]">
          <thead className="bg-amber-600 text-white">
            <tr>
              <th className="p-3 text-left">#</th>
              {headers.map((header: string, i: number) => (
                <th key={i} className="p-3 text-left capitalize">
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.length > 0 ? (
              data.map((row: Record<string, any>, rowIndex: number) => (
                <tr
                  key={rowIndex}
                  className="text-gray-700 text-sm border-b hover:bg-gray-100 transition"
                >
                  <td className="p-3">{rowIndex + 1}</td>

                  {headers.map((header: string, i: number) => (
                    <td key={i} className="p-3">
                      {header.toLowerCase() === "action" ? (
                        <button className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                          {row[header]}
                        </button>
                      ) : (
                        row[header]
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={headers.length + 1}
                  className="text-center py-6 text-gray-500"
                >
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="grid gap-4 md:hidden">
        {data.length > 0 ? (
          data.map((row: Record<string, any>, rowIndex: number) => (
            <div
              key={rowIndex}
              className="bg-white shadow-md rounded-xl p-4 border hover:shadow-lg transition"
            >
              <div className="font-semibold text-amber-600 mb-2">
                Row #{rowIndex + 1}
              </div>
              <div className="space-y-2">
                {headers.map((header: string, i: number) => (
                  <div
                    key={i}
                    className="flex justify-between text-sm text-gray-700"
                  >
                    <span className="font-medium capitalize">{header}:</span>
                    <span>
                      {header.toLowerCase() === "action" ? (
                        <button className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                          {row[header]}
                        </button>
                      ) : (
                        row[header]
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-6 text-gray-500">No data available</div>
        )}
      </div>
    </div>
  );
}


////////////////
// how to use it    
// import SharedTable from "@/shared/SharedTable/SharedTable";
// import  { useState } from "react";
// import EditModel from "../EditModel/EditModel";

// export default function PostTable() {
//     const [isOpen, setIsOpen ]=useState<boolean>(false)
//    const headers = [ "id", "title", "body", "action"];

//  const data = [
//     {
//       id: 1,
//       title: "fffff",
//       body: "xxxxxxxxx",
//       action: (
//         <button
//           className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
//           onClick={() => setIsOpen(true)}
//         >
//           Edit
//         </button>
//       ),
//     },
//       {
//       id: 2,
//       title: "ccccccc",
//       body: "bbbbbbbbbb",
//       action: (
//         <button
//           className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
//           onClick={() => setIsOpen(true)}
//         >
//           Edit
//         </button>
//       ),
//     },
//         {
//       id: 3,
//       title: "ttttttttt",
//       body: "gggggggggggggg",
//       action: (
//         <button
//           className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
//           onClick={() => setIsOpen(true)}
//         >
//           Edit
//         </button>
//       ),
//     },
//   ];

//   return (
//     <div>
// <SharedTable headers={headers} data={data}/>

// <EditModel isOpen={isOpen} setIsOpen={setIsOpen}/>
//     </div>
//   )
// }
