import React from 'react';
import ReactLoading from 'react-loading';


const Loader = ({ type, color }) => (
    <ReactLoading type='spinningBubbles' color='black' height={64} width={64} />
);
 
export default Loader;