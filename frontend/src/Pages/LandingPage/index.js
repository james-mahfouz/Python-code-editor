import DownloadButton from "../../components/Buttons/DownloadButton";
import CodeContainer from "../../components/CodeContainer";
import NavbarTwo from "../../components/NavbarTwo";
import Sidebar from "../../components/SideBar";
import './index.css'

const LandingPage = () => {
    const username = 'JohnDoe';
    const savedFiles = ['file1.txt', 'file2.doc', 'file3.jpg'];
    return(
        <div>
            {/* <NavbarTwo/>
            <div className="landing-body">
            <Sidebar  username={username} savedFiles={savedFiles}/>
            <CodeContainer/>
           </div>
           <div className="download-btn">
             <DownloadButton/>
           </div> */}


           <NavbarTwo/>
            <div className="landing-body">
            <Sidebar  username={username} savedFiles={savedFiles}/>
            <div>
                <CodeContainer/>
                <DownloadButton/>
            </div>
            
           </div>
       
             
           
          
        </div>

        
    )
}
export default LandingPage