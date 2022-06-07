import React, { FC, useState } from 'react';
import { ConvertorsArray } from '@data/ToolsList';

interface Props {
  onNavigationHandler: (item: any) => void;
}

const AppLeftBar = ({ onNavigationHandler }: Props) => {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <div className="sidebar">
      <div className="accordion" id="accordionExample">
        {ConvertorsArray.map(item => {
          return (
            <div key={item.id} className="accordion-item">
              <h2 className="accordion-header" id={`${item.id}`}>
                <button
                  className={`accordion-button ${!item.active && 'collapsed'}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#_${item.id}`}
                  aria-expanded="true"
                  aria-controls="collapseThree"
                >
                  {item.itemName}
                </button>
              </h2>
              <div
                id={`_${item.id}`}
                className={`accordion-collapse collapse ${
                  item.active && 'show'
                }`}
                aria-labelledby={`${item.id}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  {item.data.map((subItem, index) => {
                    return (
                      <ul key={subItem.id}>
                        <li>
                          <span
                            className={`${
                              subItem.id === activeIndex
                                ? 'active__tool'
                                : activeIndex === 0
                                ? ''
                                : ''
                            }`}
                            onClick={() => {
                              setActiveIndex(subItem.id);
                              onNavigationHandler(subItem);
                            }}
                          >
                            {subItem.title}
                          </span>
                        </li>
                      </ul>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AppLeftBar;
