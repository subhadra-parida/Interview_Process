import React from "react";
import { VscHome } from "react-icons/vsc";
import { SlUser } from "react-icons/sl";
import { SlUserFollow } from "react-icons/sl";
import { BiStreetView } from "react-icons/bi";
import { SiAmazonpay } from "react-icons/si";
import { TfiBag } from "react-icons/tfi";
import { BsCalendar2XFill } from "react-icons/bs";
import { TfiSettings } from "react-icons/tfi";
import { TbTrendingUp } from "react-icons/tb";
function Sidebar(){
    return(
        <div id="container4">
            {/* <td> */}
                <h3 id="font2"><VscHome/> Dashboard{"<"}</h3>
                <h3 id="font3"><SlUser/> Employee{"<"}</h3>
                <h3 id="font4"><SlUserFollow/> Attendance{"<"}</h3>
                <h3 id="font5"><BiStreetView/> Site/Field Track{"<"}</h3>
                <h3 id="font6"><SiAmazonpay/> Payroll{"<"}</h3>
                <h3 id="font7"><TfiBag/> Statustory Compliances{"<"}</h3>
                <h3 id="font8"><BsCalendar2XFill/> Leaves{"<"}</h3>
                <h3 id="font9"><TfiSettings/> Asset Management{"<"}</h3>
                <h3 id="font10"><TbTrendingUp/> Goals & Performance{"<"}</h3>
                <h3 id="font11"><SlUser/> Recruitment</h3>
                <h3 id="font12"> Openings</h3>
                <h3 id="font13"> Candidates</h3>

            {/* </td> */}
        </div>
    );
}
export default Sidebar;