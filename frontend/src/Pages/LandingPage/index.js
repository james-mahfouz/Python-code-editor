import React, { useState } from 'react';
import DownloadButton from "../../components/Buttons/DownloadButton";
import CodeContainer from "../../components/CodeContainer";
import NavbarTwo from "../../components/NavbarTwo";
import Sidebar from "../../components/SideBar";
import './index.css'

const LandingPage = () => {
    const username = 'JohnDoe';
    const savedFiles = ['file1.txt', 'file2.doc', 'file3.jpg'];
    const [selectedCode, setSelectedCode] = useState(null);
    return(
        <div>
            <NavbarTwo/>
            <div className="landing-body">
                <Sidebar  setSelectedCode={setSelectedCode}/>
                <div>
                    <CodeContainer selectedCode={selectedCode}/>
                    <DownloadButton/>
                </div>
            </div>
        </div> 
    )
}
export default LandingPage