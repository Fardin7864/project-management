// import { useDrag, useDrop } from 'react-dnd';

// export const ItemTypes = {
//     TASK: 'task',
// };

// export const DraggableItem = ({ id, text }) => {
//     const [{ isDragging }, drag] = useDrag({
//         item: { type: ItemTypes.TASK, id },
//         collect: monitor => ({
//             isDragging: !!monitor.isDragging(),
//         }),
//     });

//     return (
//         <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
//             {text}
//         </div>
//     );
// };

//  export const DroppableContainer = ({ children }) => {
//     const [{ canDrop, isOver }, drop] = useDrop({
//         accept: ItemTypes.ITEM,
//         drop: () => ({ name: 'droppable-container' }),
//         collect: monitor => ({
//             isOver: monitor.isOver(),
//             canDrop: monitor.canDrop(),
//         }),
//     });

//     return (
//         <div ref={drop} style={{ backgroundColor: isOver && canDrop ? 'yellow' : 'transparent' }}>
//             {children}
//         </div>
//     );
// };

