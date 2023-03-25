import './index.css'
import runImage from "../../images/run.PNG";
import messageImage from "../../images/message.png";
import downloadImage from "../../images/download.png";

const LoginBtn =()=>{
return(
    <div>
        <button className="all-btn">LOGIN</button>
        <button className="all-btn">RESET</button>
        <button className="all-btn signup-btn">SIGNUP</button>
        <button className="all-btn signup-btn">CLEAR</button>
        <button className="all-btn run-btn btn-image">
            <img src={runImage} alt="any" />
            <p>RUN</p>
        </button>
        <button className="all-btn run-btn btn-image">
            <img src={messageImage} alt="any" />
            <p>MESSAGES</p>    
        </button>
        
        <button className="all-btn">LOGOUT</button>
        

        <button className="all-btn run-btn btn-image">
            <img src={downloadImage} alt="any" />
            <p>DOWNLOAD</p>    
        </button>
    </div>
    
)
}
export default LoginBtn