import clsx from "clsx"
import { useState } from "react"

const menu = [
  "Giới thiệu",
  "Đối tượng khách hàng",
  "Quy trình",
  "Bảng giá",
  "Cảm nhận của khách hàng",
  "Đội ngũ bác sĩ",
  "Hình ảnh & Video",
]

export const Header = () => {
  const [itemMenu, setItemMenu] = useState(2)
  const [showMenu, setShowMenu] = useState(false)
  const [animation, showAnimation] = useState(false)

  return (
    <div className="container flex justify-between items-center py-3 relative xl:static">
      <div className="cursor-pointer">
        <img src="src/images/png/logo.png" alt="" />
      </div>
      <ul className="hidden xl:flex items-center gap-4 font-bold">
        {menu.map((item, index) => (
          <li
            key={index}
            onClick={() => setItemMenu(index)}
            className={clsx("cursor-pointer hover:text-color", {
              "text-color relative before:block before:w-5 before:h-1 before:bg-linear-green before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2":
                index === itemMenu,
            })}
          >
            {item}
          </li>
        ))}
      </ul>
      <div
        className={clsx("absolute -bottom-full translate-y-3/4 inset-x-0", {
          hidden: !showMenu,
          block: showMenu,
        })}
      >
        <ul
          className={clsx(
            "xl:hidden flex flex-col bg-white transition duration-500 ease-in-out rounded-b-md",
            {
              "-translate-y-full opacity-0": !animation,
              "-translate-y-0 opacity-100 shadow-custom": animation,
            }
          )}
        >
          {menu.map((item, index) => (
            <li
              key={index}
              onClick={() => setItemMenu(index)}
              className={clsx(
                "cursor-pointer hover:text-color text-center px-3 py-2 hover:bg-slate-300",
                {
                  "opacity-60": index !== itemMenu,
                }
              )}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-btn rounded-full hover:opacity-80 cursor-pointer xl:block hidden">
        <a href="tel:1900 1806" className="flex items-center gap-2 px-3 py-2">
          <div className="bg-white rounded-full p-1">
            <img src="src/images/svg/call.svg" alt="" />
          </div>
          <span className="text-white">Gọi 1900 1806</span>
        </a>
      </div>
      <div
        className="xl:hidden cursor-pointer hover:opacity-70"
        onClick={() => {
          if (!showMenu) {
            setShowMenu(!showMenu)
            setTimeout(() => {
              showAnimation(!animation)
            }, 0)
            return
          }
          showAnimation(!animation)
          setTimeout(() => {
            setShowMenu(!showMenu)
          }, 500)
        }}
      >
        {showMenu ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
        )}
      </div>
    </div>
  )
}
