import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="w-full lg:w-1/2 px-4 py-2">

            <div className="font-semibold  bg-gray-200 rounded-md py-2 px-4" onClick={() => setIsActive(!isActive)}>
                <div>{title}</div>
                <div>{isActive ? '-' : '+'}</div>
            </div>
            {isActive && <div className="px-4 py-2">{content}</div>}
        </div>
    );
};

export default Accordion;