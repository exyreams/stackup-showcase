// import Image from "next/image";
// import dynamic from "next/dynamic";
// import { FaEdit } from "react-icons/fa";
// import "react-quill/dist/quill.bubble.css";

// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// const Comments = ({
//   userIcon,
//   username,
//   comment,
//   index,
//   onEdit,
//   currentUser,
// }) => {
//   return (
//     <div className="mb-4 flex items-start space-x-4">
//       <Image
//         src={userIcon}
//         alt={username}
//         width={40}
//         height={40}
//         className="rounded-full"
//       />
//       <div className="grow">
//         <div className="flex justify-between">
//           <p className="font-semibold text-black dark:text-white">{username}</p>
//           {currentUser === username && (
//             <div className="flex space-x-2">
//               <button onClick={() => onEdit(index)}>
//                 <FaEdit className="text-blue-500 transition-colors hover:text-blue-700" />
//               </button>
//             </div>
//           )}
//         </div>
//         <div className="mt-2 rounded-lg border border-gray-300 bg-stackup-gray-text/80 p-4 dark:border-gray-700">
//           <ReactQuill
//             value={comment}
//             readOnly={true}
//             theme="bubble"
//             modules={{ toolbar: false }}
//             className="poppins-font"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Comments;

import Image from "next/image";
import dynamic from "next/dynamic";
import { FaEdit, FaTrash } from "react-icons/fa";
import "react-quill/dist/quill.bubble.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Comments = ({
  userIcon,
  username,
  comment,
  index,
  onEdit,
  onDelete,
  currentUser,
}) => {
  return (
    <div className="mb-4 flex items-start space-x-4">
      <Image
        src={userIcon}
        alt={username}
        width={40}
        height={40}
        className="rounded-full"
      />
      <div className="grow">
        <div className="flex justify-between">
          <p className="font-semibold text-black dark:text-white">{username}</p>
          {currentUser === username && (
            <div className="flex space-x-2">
              <button onClick={() => onEdit(index)}>
                <FaEdit className="text-blue-500 transition-colors hover:text-blue-700" />
              </button>
              <button onClick={() => onDelete(index)}>
                <FaTrash className="text-red-500 transition-colors hover:text-red-700" />
              </button>
            </div>
          )}
        </div>
        <div className="mt-2 rounded-lg border border-gray-300 bg-stackup-gray-text/80 p-4 dark:border-gray-700">
          <ReactQuill
            value={comment}
            readOnly={true}
            theme="bubble"
            modules={{ toolbar: false }}
            className="poppins-font"
          />
        </div>
      </div>
    </div>
  );
};

export default Comments;
