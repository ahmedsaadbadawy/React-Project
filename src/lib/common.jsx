export function MyCard({ children }) {
  return (
    <div className="card m-4 px-4 py-8  rounded-4xl shadow-lg border border-gray-300">
      {children}
    </div>
  );
}

// OR

// export const MyCard = ({children}) => {
//   return (
//     <div className="card bg-amber-100 m-4 rounded-4xl shadow-md">
//       {children}
//     </div>
//   );
// };

export function BlueButton({ label, fun }) {
  return (
    <button
      className="incrementBtn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={fun}>
      {label}
    </button>
  );
}
