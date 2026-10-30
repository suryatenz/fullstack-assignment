import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addSection, moveSection, removeSection } from '../store/layoutSlice';

function LayoutEditor() {
  const sections = useSelector((state) => state.layout.sections);
  const dispatch = useDispatch();

  const handleAddSection = () => {
    dispatch(
      addSection({
        id: Date.now(),
        content: 'New Section',
      })
    );
  };

  const handleMove = (index, direction) => {
    const toIndex = index + direction;
    if (toIndex >= 0 && toIndex < sections.length) {
      dispatch(moveSection({ fromIndex: index, toIndex }));
    }
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <button
        onClick={handleAddSection}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
      >
        Add Section
      </button>
      <div className="space-y-4">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className="p-4 border rounded-md shadow-sm bg-gray-50"
          >
            <p>{section.content}</p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleMove(index, -1)}
                className="bg-gray-200 px-2 py-1 rounded-md"
              >
                Move Up
              </button>
              <button
                onClick={() => handleMove(index, 1)}
                className="bg-gray-200 px-2 py-1 rounded-md"
              >
                Move Down
              </button>
              <button
                onClick={() => dispatch(removeSection(section.id))}
                className="bg-red-500 text-white px-2 py-1 rounded-md"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LayoutEditor;
