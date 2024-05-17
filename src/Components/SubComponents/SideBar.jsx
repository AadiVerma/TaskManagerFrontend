import { LuLogOut } from "react-icons/lu";
import Image from '../../assets/Image.png';
import { LuLayoutDashboard } from "react-icons/lu";
import { IoGitNetwork } from "react-icons/io5";
import { GiProgression } from "react-icons/gi";
import { IoCloudDoneSharp } from "react-icons/io5";
export default function SideBar(){
    return (
        <div className="text-white w-[15%] bg-[#212121] rounded-lg h-fit p-3 overflow-hidden">
           <div>
          <div className="h-[70%]] w-[70%] bg-[#121212] rounded-full ml-6 mt-6 cursor-pointer">
          <img src={Image} alt="Image" />
          </div>
            <div className="mt-[30%]">
                <h1 className="mb-4 text-xl font-newfont font-bold flex gap-4 hover:text-blue-600 cursor-pointer hover:bg-[#121212] p-4 rounded-lg"><LuLayoutDashboard className="text-xl mt-1"/> All Tasks</h1>
                <h1 className="mb-4 text-xl font-newfont font-bold flex gap-4 hover:text-blue-600 cursor-pointer hover:bg-[#121212] p-4 rounded-lg"><IoGitNetwork className="text-xl mt-1"/> Important</h1>
                <h1 className="mb-4 text-xl font-newfont font-bold flex gap-4 hover:text-blue-600 cursor-pointer hover:bg-[#121212] p-4 rounded-lg"><IoCloudDoneSharp className="text-xl mt-1"/> Completed</h1>
                <h1 className="mb-4 text-xl font-newfont font-bold flex gap-4 hover:text-blue-600 cursor-pointer hover:bg-[#121212] p-4 rounded-lg"><GiProgression className="text-xl mt-1"/>Progress</h1>
            </div>
            <div className="mt-[40%]">
           <h1 className="mb-4 text-xl font-newfont font-bold flex gap-4 hover:text-blue-600 cursor-pointer hover:bg-[#121212] p-4 rounded-lg"><LuLogOut className="text-3xl mt-1"/>Log Out</h1>
            </div>
           </div>
        </div>
    )
}