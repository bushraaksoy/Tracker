import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { FaBookQuran } from "react-icons/fa6";
import { FaHome, FaPrayingHands } from "react-icons/fa";
import { GiBookCover, GiBookmark } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";

import Sidebar from "./Components/Sidebar/sidebar";
import Activity from "./Components/Activity/Activity";
import Calendar from "react-calendar";
import ListItem from "./Components/ListItem/ListItem";

import "./App.css";

function App() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="app d-flex justify-content-between">
      <Sidebar
        width="180px"
        content={
          <div className="d-flex flex-column gap-3 p-2 ">
            {sidebarItems.map((item, inx) => (
              <ListItem key={inx} icon={item.icon} title={item.title} />
            ))}
          </div>
        }
      />
      <div className="d-flex gap-4 flex-wrap px-4 align-items-center justify-content-center main-sect">
        {activityItems.map((item, inx) => (
          <Activity
            key={inx}
            background={item.background}
            icon={item.icon}
            title={item.title}
            count={item.count}
          />
        ))}
      </div>
      <Sidebar
        width="400px"
        content={
          <Calendar
            value={value}
            onChange={onChange}
            className="custom-calendar-container"
            navigationClassName="custom-calendar-navigation"
            tileClassName="custom-calendar-tile"
          />
        }
      />
    </div>
  );
}

const sidebarItems = [
  {
    icon: <FaHome />,
    title: "Home",
  },
  {
    icon: <GiBookmark />,
    title: "All Ceteles",
  },
  {
    icon: <GiBookCover />,
    title: "Kitap",
  },
  {
    icon: <FaBookQuran />,
    title: "Kuran",
  },
  {
    icon: <FaHome />,
    title: "Teheccud",
  },
  {
    icon: <GiBookmark />,
    title: "Cevsen",
  },
  {
    icon: <IoMdSettings />,
    title: "Settings",
  },
];

const activityItems = [
  {
    background: "#D5B4B4",
    icon: <GiBookCover size="22px" />,
    title: "Book",
    count: "10 Pages",
  },
  {
    background: "#ADC4CE",
    icon: <FaBookQuran size="22px" />,
    title: "Quran",
    count: "3 Pages",
  },
  {
    background: "#F1F0E8",
    icon: <GiBookmark size="22px" />,
    title: "Cevsen",
    count: "25 Bap",
  },
  {
    background: "#FFEEF4",
    icon: <FaPrayingHands size="22px" />,
    title: "Teheccud",
    count: "25miles",
  },
  {
    background: "#F8F6F4",
    icon: <FaBookQuran size="22px" />,
    title: "Translation",
    count: "15 Pages",
  },
  {
    background: "#E3F4F4",
    icon: <FaPrayingHands size="22px" />,
    title: "Dhuha",
    count: "7 Days",
  },
  {
    background: "#E3F4F4",
    icon: <FaPrayingHands size="22px" />,
    title: "Dhuha",
    count: "7 Days",
  },
  {
    background: "#E3F4F4",
    icon: <FaPrayingHands size="22px" />,
    title: "Dhuha",
    count: "7 Days",
  },
  {
    background: "#E3F4F4",
    icon: <FaPrayingHands size="22px" />,
    title: "Dhuha",
    count: "7 Days",
  },
];

export default App;
