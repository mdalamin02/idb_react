import React, { useState, useEffect } from 'react';

const FunctionalLifeCycle = () =>
{
	
	const [count, setCount] = useState(0);

	useEffect(()=>
	{
		console.log("Comonent Mounted or Updated");

		return () => {

			console.log("Component will mount");
		};
	}, []);

	return (
			<div>
				<h2>Count: {count}</h2>
				<button onClick={()=> setCount(count + 1 )}>Increment</button>
			</div>
		   );
};

export default FunctionalLifeCycle;