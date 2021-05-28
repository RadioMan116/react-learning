import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    const { content } = tabs[activeTab];

    return (
        <>
            <div>
                {tabs.map(({title}, index) => (
                    <button key={title} onClick={() => setActiveTab(index)}>
                        {title}
                    </button>
                ))}
            </div>
            {content}
        </>
    )
}

export default Tabs;