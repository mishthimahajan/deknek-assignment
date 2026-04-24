// const TaskCard = ({ task, onToggle, onDelete }) => {

//   return (
//     <div className="rounded-2xl bg-white p-5 shadow-md transition hover:shadow-lg">
//       <div className="flex items-start justify-between gap-4">
//         <div>
//           <h3 className="text-lg font-semibold text-slate-800">{task.title}</h3>
//           <p className="mt-1 text-sm text-slate-600">{task.description || "No description"}</p>
//           <span
//             className={`mt-3 inline-block rounded-full px-3 py-1 text-xs font-medium ${
//               task.status === "completed"
//                 ? "bg-green-100 text-green-700"
//                 : "bg-yellow-100 text-yellow-700"
//             }`}
//           >
//             {task.status}
//           </span>
//         </div>
//         <div className="flex flex-col gap-2">
//           <button
//             onClick={() => onToggle(task._id)}
//             className="rounded-lg bg-blue-500 px-3 py-2 text-sm text-white hover:bg-blue-600"
//           >
//             Toggle
//           </button>
//            <button
//             onClick={() => onDelete(task._id)}
//             className="rounded-lg bg-red-500 px-3 py-2 text-sm text-white hover:bg-red-600"
//           >
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskCard;

const TaskCard = ({ task, onToggle, onDelete }) => {
  const isCompleted = task.status === "completed";

  return (
    <div className="group rounded-3xl border border-white/60 bg-white/80 p-5 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900">{task.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            {task.description || "No description added."}
          </p>

          <span
            className={`mt-4 inline-flex rounded-full px-4 py-1 text-xs font-bold ${
              isCompleted
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {isCompleted ? "Completed" : "Pending"}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <button
            onClick={() => onToggle(task._id)}
            className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Toggle
          </button>

          <button
            onClick={() => onDelete(task._id)}
            className="rounded-xl bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-500 hover:text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;