import { useState } from 'react'
import {connect} from 'react-redux'

const CountButton = (props) => {
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
            <h4>{props.user.name}</h4>
        </div>
     );
}

const mapStateToProps = state =>({
    user : state
})
 
export default connect(mapStateToProps) (CountButton);