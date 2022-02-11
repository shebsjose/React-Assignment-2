import { useState } from 'react'

const CountButton = () => {
   const[count, setCount] = useState(0);

   const handleClick = () =>{
       setCount(count + 1 );
   }
    return ( 
        <div className="mt-5 w-50 ml-0 mr-0 mx-auto text-center">
            <h1 className="mt-4">{count}</h1>
            <button className="btn btn-primary"
              onClick={handleClick}
            >
                Increment
            </button>
        </div>
     );
}
 
export default CountButton;