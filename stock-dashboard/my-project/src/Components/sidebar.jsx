import { IoHomeOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoMdBook } from "react-icons/io";
import { BsBookmarkDash } from "react-icons/bs";
import { RiSettingsLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <aside className="bg-black w-20 min-h-screen border-r border-gray-800 flex flex-col justify-center items-center">
      <nav className="p-4 flex flex-col items-center gap-11 ">
        <ul className="flex flex-col items-center size-2">
          <li>
            <a href="#">
              <IoHomeOutline className="text-gray-600 text-2xl" />
            </a>
          </li>
        </ul>

        <ul className="flex flex-col items-center space-y-2 size-2">
          <li>
            <a href="#">
              <FaSearch className="text-gray-600 text-2xl" />
            </a>
          </li>
        </ul>

        <ul className="flex flex-col items-center space-y-2 size-2">
          <li>
            <a href="#">
              <IoMdBook className="text-gray-600 text-2xl" />
            </a>
          </li>
        </ul>

        <ul className="flex flex-col items-center space-y-2 size-2">
          <li>
            <a href="#">
              <BsBookmarkDash className="text-gray-600 text-2xl" />
            </a>
          </li>
        </ul>

        <ul className="flex flex-col items-center space-y-2 size-2">
          <li>
            <a href="#">
              <RiSettingsLine className="text-gray-600 text-2xl" />
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
