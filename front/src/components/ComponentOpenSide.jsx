import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const EmploymentHeader = ({ sprecified_title, onRemove, id, isExpanded, toggleHeight }) => {
    return (
        <div className="component_open">
            <span className="component_specified_title">
                {sprecified_title !== '' ? sprecified_title : "(Not specified)"}
            </span>
            <button onClick={() => onRemove(id)} className="delete_empl_btn">
                <FontAwesomeIcon icon={faTrash} />
            </button>
            <button onClick={toggleHeight} className="open_empl_btn">
                {isExpanded ? <FontAwesomeIcon icon={faArrowUp} /> : <FontAwesomeIcon icon={faArrowDown} className="fa-beat" />}
            </button>
        </div>
    );
};

export default EmploymentHeader;
