import { useSwiper } from "swiper/react"

export const CustomBtn = () => {
  const swiper = useSwiper()
  return (
    <>
      <button
        className="text-main w-10 h-10 border border-solid border-slate-200 shadow-custom scale-100 hover:scale-105 transition duration-300 ease-in-out rounded-full p-2 bg-white"
        onClick={() => swiper.slidePrev()}
      >
        <svg
          fill="none"
          strokeWidth={1.5}
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </button>
      <button
        className="text-main w-10 h-10 border border-solid border-slate-200 shadow-custom scale-100 hover:scale-105 transition duration-300 ease-in-out rounded-full p-2 bg-white"
        onClick={() => swiper.slideNext()}
      >
        <svg
          fill="none"
          strokeWidth={1.5}
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </>
  )
}
