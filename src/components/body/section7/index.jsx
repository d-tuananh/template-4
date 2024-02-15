import { useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules"

const data = [
  "image 940.png",
  "image 941.png",
  "image 942.png",
  "image 943.png",
  "image 944.png",
]

export const Section7 = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <section>
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="">
          <h3 className="font-bold text-4xl text-center pb-[1.5rem] border-b border-solid border-[#EBEBEB]">
            Những câu hỏi thường gặp
          </h3>
          {Array(9)
            .fill(1)
            .map((_, index) => (
              <details
                key={index}
                className="cursor-pointer py-[1rem] border-b border-solid border-[#EBEBEB]"
              >
                <summary className="font-semibold mr-[5%]">
                  <span>
                    Cách phân biệt giữa cảm cúm thông thường và covid-19?
                  </span>
                </summary>
                <p className="mt-[.5rem] mr-[5%]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores animi, itaque ut architecto sed sapiente, in
                  distinctio esse aut provident consequuntur ipsa odit ab.
                  Delectus magnam amet incidunt quos? Doloribus neque
                  exercitationem ut quibusdam aliquam?
                </p>
              </details>
            ))}
        </div>
        <div className="">
          <h3 className="font-bold text-4xl text-center pb-[1.5rem]">
            Bảng giá dịch vụ gói Ortho-K
          </h3>
          <div>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              // freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2 mb-4 max-w-full"
            >
              {data.map((_, index) => (
                <SwiperSlide key={index} className=" max-w-fit cursor-pointer">
                  <p className="pb-2">ORTHO K-0{index + 1}</p>
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <img src={item} width="100%" alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}
