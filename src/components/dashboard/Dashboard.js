
import React from 'react';
import Navbar from '../shared/Navbar';
import { DragDropContext, Draggable } from '@hello-pangea/dnd';
import { DraggableItem, DroppableContainer } from '../dragable/DragableContainer';

const DashboardComponent = () => {
    return (
        <div className=' w-screen h-screen'>
            <Navbar/>
            
            <div>
            {/* <DroppableContainer>
                <DraggableItem id="item1" text="Item 1" />
                <DraggableItem id="item2" text="Item 2" />
            </DroppableContainer> */}
            </div>

        </div>
    );
};

export default DashboardComponent;