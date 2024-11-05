import React from 'react';

interface IrregularShapeProps {
  heading: string;
  text: string;
}

const IrregularShape: React.FC<IrregularShapeProps> = ({ heading, text }) => {
  return (
    <section className="irregular-section">
      <div className="content">
        <h2 className="heading">{heading}</h2>
        <p className="text">{text}</p>
      </div>
    </section>
  );
};

export default IrregularShape;
