import React from 'react';
import ReactDOM from 'react-dom';

//YOUtube api key
const API_KEY='AIzaSyCaKhEcLpPCRdVRiRRTWPqhHUR5VX_nv28';

//Create a new component and renders HTML
const App=() =>{ //this is more of a class and connt be passed to the Dom hence need an instance of this class and then pass it to the DOM
    //declared a constant in ES6
    return <div>Hello</div>;  
}//this is JSX dialect for javascript typically a react create element syntax


//Take components and render on page
ReactDOM.render(<App />,document.querySelector('.container'));//an instance of APP and pass it to the DOM in the target container the root is the dom