import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/thumbs"

import { Navigation } from "swiper/modules"
import { CustomBtn } from "../../customSwiper/customBtn"

const data = [
  {
    img: "src/images/png/img14.png",
    img_user: "src/images/png/img18.png",
    name: "Nguyễn Minh Ánh",
    star: "src/images/svg/5-star.svg",
    content:
      "Bệnh viện Phương Đông mang đến cho tôi cảm giác vô cùng bình yên và an tâm khi thăm khám tại đây!",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit nulla etiam sed consequat dictumst viverra molestie tortor feugiat. Purus consequat, sapien diam nec. Egestas lacinia scelerisque ultrices vivamus adipiscing diam massa.",
  },
  {
    img: "src/images/png/img15.png",
    img_user: "src/images/png/img19.png",
    name: "Nguyễn Minh Ánh",
    star: "src/images/svg/5-star.svg",
    content:
      "Bệnh viện Phương Đông mang đến cho tôi cảm giác vô cùng bình yên và an tâm khi thăm khám tại đây!",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit nulla etiam sed consequat dictumst viverra molestie tortor feugiat. Purus consequat, sapien diam nec. Egestas lacinia scelerisque ultrices vivamus adipiscing diam massa.",
  },
  {
    img: "src/images/png/img15.png",
    img_user: "src/images/png/img20.png",
    name: "Nguyễn Minh Ánh",
    star: "src/images/svg/5-star.svg",
    content:
      "Bệnh viện Phương Đông mang đến cho tôi cảm giác vô cùng bình yên và an tâm khi thăm khám tại đây!",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit nulla etiam sed consequat dictumst viverra molestie tortor feugiat. Purus consequat, sapien diam nec. Egestas lacinia scelerisque ultrices vivamus adipiscing diam massa.",
  },
  {
    img: "src/images/png/img17.png",
    img_user: "src/images/png/img13.png",
    name: "Nguyễn Minh Ánh",
    star: "src/images/svg/5-star.svg",
    content:
      "Bệnh viện Phương Đông mang đến cho tôi cảm giác vô cùng bình yên và an tâm khi thăm khám tại đây!",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit nulla etiam sed consequat dictumst viverra molestie tortor feugiat. Purus consequat, sapien diam nec. Egestas lacinia scelerisque ultrices vivamus adipiscing diam massa.",
  },
  {
    img: "src/images/png/img14.png",
    img_user: "src/images/png/img18.png",
    name: "Nguyễn Minh Ánh",
    star: "src/images/svg/5-star.svg",
    content:
      "Bệnh viện Phương Đông mang đến cho tôi cảm giác vô cùng bình yên và an tâm khi thăm khám tại đây!",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit nulla etiam sed consequat dictumst viverra molestie tortor feugiat. Purus consequat, sapien diam nec. Egestas lacinia scelerisque ultrices vivamus adipiscing diam massa.",
  },
  {
    img: "src/images/png/img15.png",
    img_user: "src/images/png/img19.png",
    name: "Nguyễn Minh Ánh",
    star: "src/images/svg/5-star.svg",
    content:
      "Bệnh viện Phương Đông mang đến cho tôi cảm giác vô cùng bình yên và an tâm khi thăm khám tại đây!",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit nulla etiam sed consequat dictumst viverra molestie tortor feugiat. Purus consequat, sapien diam nec. Egestas lacinia scelerisque ultrices vivamus adipiscing diam massa.",
  },
  {
    img: "src/images/png/img15.png",
    img_user: "src/images/png/img20.png",
    name: "Nguyễn Minh Ánh",
    star: "src/images/svg/5-star.svg",
    content:
      "Bệnh viện Phương Đông mang đến cho tôi cảm giác vô cùng bình yên và an tâm khi thăm khám tại đây!",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit nulla etiam sed consequat dictumst viverra molestie tortor feugiat. Purus consequat, sapien diam nec. Egestas lacinia scelerisque ultrices vivamus adipiscing diam massa.",
  },
  {
    img: "src/images/png/img17.png",
    img_user: "src/images/png/img13.png",
    name: "Nguyễn Minh Ánh",
    star: "src/images/svg/5-star.svg",
    content:
      "Bệnh viện Phương Đông mang đến cho tôi cảm giác vô cùng bình yên và an tâm khi thăm khám tại đây!",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit nulla etiam sed consequat dictumst viverra molestie tortor feugiat. Purus consequat, sapien diam nec. Egestas lacinia scelerisque ultrices vivamus adipiscing diam massa.",
  },
]

export const Section6 = () => {
  return (
    <section className="">
      <div className="container relative xl:py-[5rem]">
        <div className="bg-dd/400 absolute -left-4 bottom-0 top-0 xl:w-3/5 xl:-translate-x-[10rem] -z-10 rounded-tl-[35%] rounded-br-[35%] rounded-2xl"></div>
        <div className="text-3xl font-bold text-center xl:text-start xl:w-1/3 xl:text-white">
          <span>Cảm nhận của khách hàng sau khi sử dụng dịch vụ</span>
        </div>
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            modules={[Navigation]}
            className="mySwiper relative overflow-y-auto overflow-x-hidden"
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1100: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col gap-3 justify-center items-center border border-solid rounded-xl p-5 bg-white relative text-center mt-5 xl:my-12">
                  <div className="absolute top-0 left-0 right-0 z-0">
                    <img src={item.img} alt="" width="100%" />
                  </div>
                  <div className="w-[5rem] mt-[1rem] h-[5rem] rounded-full overflow-hidden z-10">
                    <img src={item.img_user} alt="" />
                  </div>
                  <h4 className="text-lg font-bold">{item.name}</h4>
                  <div>
                    <img src={item.star} alt="" />
                  </div>
                  <p className="font-bold">{item.content}</p>
                  <p className="opacity-70">{item.text}</p>
                </div>
              </SwiperSlide>
            ))}
            <div className="absolute xl:top-0 right-0 xl:w-fit top-1/2 w-full flex justify-between gap-3 z-20">
              <CustomBtn />
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  )
}
