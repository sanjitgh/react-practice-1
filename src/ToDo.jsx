// conditional rendering 1
// export default function ToDo({task, isDone}){
//     if(isDone){
//         return <li>Finished: {task}</li>
//     }
//     else{
//         return <li>Work on: {task}</li>
//     }
// }

// conditional rendering 2
// export default function ToDo({ task, isDone }) {
//   if (isDone) {
//     return <li>Finished: {task}</li>;
//   }
//   return <li>Work on: {task}</li>;
// }

// conditional rendering 3 ternary operator
// export default function ToDo({ task, isDone }) {
//   return (
//     <li>
//       {isDone? 'Finished': 'Work On'}:{task}
//     </li>
//   );
// }

// conditional rendering 4 &&
// export default function ToDo({ task, isDone }) {
//   return (
//     <li>
//         {task} {isDone && ": Done"}
//     </li>
// )
// }


// conditional rendering 4 ||
// export default function ToDo({ task, isDone }) {
//   return (
//     <li>
//         {task} {isDone || ": Done it!"}
//     </li>
// )
// }


// conditional rendering 5 veriable pass
export default function ToDo({ task, isDone }) {
    let listItem;
    if(isDone){
        listItem = <li>Finished: {task}</li>
    }
    else{
        listItem = <li>Work On: {task}</li>
    }
    return listItem;
}
