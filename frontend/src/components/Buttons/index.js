import './index.css'
import runImage from "../../images/run.PNG";
import messageImage from "../../images/message.png";

const LoginBtn =()=>{
return(
    <div>
        <button className="all-btn">LOGIN</button>
        <button className="all-btn signup-btn">SIGNUP</button>
        <button className="all-btn signup-btn">CLEAR</button>
        <button className="all-btn run-btn btn-image"><img src={runImage}alt="any" />RUN</button>
        <button className="all-btn run-btn btn-image">
            <img src={messageImage}alt="any" />
            <p>MESSAGES</p>    
        </button>
        <button className="all-btn">LOGOUT</button>
        
    </div>
    
)
}
export default LoginBtn