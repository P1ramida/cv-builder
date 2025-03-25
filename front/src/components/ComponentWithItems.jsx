import React, { useEffect, useState } from "react";
import EmploymentComponent from "./EmploymentComponent";
import SkillsComponent from "./SkillsComponent";
import EducationComponent from "./EducationComponent";

const ComponentWithItems = ({ Component, component_name, component_discription, button_text, updatedData }) => {
    const [items, setItems] = useState([]);
    const [nextId, setNextId] = useState(0);
    
    const addItem = () => {
        setItems(prevItems => {
            const isEmploymentComponent = Component === EmploymentComponent;
            const isSkillsComponent = Component === SkillsComponent;
            const isEducationComponent = Component === EducationComponent;
            const maxItems = isEmploymentComponent || isEducationComponent ? 2 : isSkillsComponent ? 5 : Infinity;

            if (prevItems.length >= maxItems) return prevItems;

            const newId = nextId;
            setNextId(prevId => prevId + 1);
            return [...prevItems, { id: newId }];
        });
    };

    const deleteItem = (id) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const updateItemData = (id, data) => {
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, ...data } : item
            )
        );
    };

    useEffect(() => {
        if (updatedData) {
            updatedData(items);
        }
    }, [items, updatedData]);

    return (
        <div className="component_items">
            <span className="stage_name">{component_name}</span>
            <span className="stage_description">{component_discription}</span>
            
            {items.map(item => (
                <Component key={item.id} id={item.id} onRemove={deleteItem} onUpdate={updateItemData} />
            ))}

            {!(Component === EmploymentComponent && items.length >= 2) && !(Component === SkillsComponent && items.length >= 5) && !(Component === EducationComponent && items.length >= 2) && (
                <button className="add_component_btn" onClick={addItem}>
                    {button_text}
                </button>
            )}
        </div>
    );
};

export default ComponentWithItems;
