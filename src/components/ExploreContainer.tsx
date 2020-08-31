import React from 'react';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}
const largeContent : JSX.Element[]= [];
for (let i=1;i<100;i++) {
  largeContent.push(<p key={`largeContent${i}`}>some text to cause scrolling {i}</p>);
}
const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      {largeContent}
    </div>
  );
};
// The container class on the outer div prevents some of the top content from being shown
export default ExploreContainer;
