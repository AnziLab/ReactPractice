import React from 'react';
const MyComponent = ({name, children}) =>{
    return (
    <div> 나의 새롭고 멋진 컴포넌트 {name}<br/>
    children value is {children}
     </div>
    );
};

MyComponent.defaultProps = {
    name: 'default name'
}
export default MyComponent;

