import { useState } from 'react';

const FilterGroup = ({ title, options }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="filter-group">
            <h3 className="filter-group-title" onClick={() => setIsOpen(!isOpen)}>
                {title}
                <span className={`filter-arrow ${isOpen ? 'open' : ''}`}>▼</span>
            </h3>
            {isOpen && (
                <ul className="filter-list">
                    <li>
                        <label>
                            <input type="checkbox" name={title} value="All" />
                            All
                        </label>
                    </li>
                    
                    {options && options.map(option => (
                        <li key={option}>
                            <label>
                                <input type="checkbox" name={title} value={option} />
                                {option}
                            </label>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

const Filters = () => {
    return (
        <aside className="filter-sidebar">
            <div className="filter-group customizable">
                <label>
                    <input type="checkbox" name="customizable" />
                    CUSTOMIZABLE
                </label>
            </div>

            <FilterGroup title="IDEAL FOR" options={['Men', 'Women', 'Baby & Kids']} />
            <FilterGroup title="OCCASION" options={['Work', 'Casual', 'Party']} />
            <FilterGroup title="WORK" options={['Formal', 'Smart Casual']} />
            <FilterGroup title="FABRIC" options={['Cotton', 'Linen', 'Silk']} />
            <FilterGroup title="SEGMENT" options={['Core', 'Premium']} />
            <FilterGroup title="SUITABLE FOR" options={['Formal Wear', 'Casual Wear']} />
            <FilterGroup title="RAW MATERIALS" options={['Cotton', 'Linen']} />
            <FilterGroup title="PATTERN" options={['Solid', 'Striped', 'Checked']} />
        </aside>
    );
};

export default Filters
