import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import { CustomBtn } from "../../customSwiper/customBtn"

export const Section3 = () => {
  return (
    <section className="bg-[url('/line.png')] bg-no-repeat bg-bottom">
      <div className="container">
        <div>
          <h3 className="text-4xl font-bold lg:text-start text-center">
            Ai nên sử dụng kính Ortho-K?
          </h3>
          <p className="lg:w-1/2">
            Ortho-K là phương pháp kiểm soát tật khúc xạ tối ưu, an toàn nhất
            hiện nay dành cho người lớn và trẻ em mà không cần phẫu thuật. Đối
            tượng có thể sử dụng kính Ortho K bao gồm:
          </p>
        </div>
        <div className="mt-10">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            modules={[Navigation]}
            className="mySwiper relative"
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
          >
            {Array(6)
              .fill(1)
              .map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="md:even:mt-[5rem] md:odd:mb-[5rem]"
                >
                  <div className="bg-dd/400 overflow-hidden rounded-tl-[16%] rounded-br-[16%] rounded-lg p-3 flex flex-col gap-5 transform text-white">
                    <div className="rounded-tl-[17%] overflow-hidden rounded-lg">
                      <img src="img3.png" width="100%" alt="" />
                    </div>
                    <h4 className="font-semibold text-xl">Người bị cận thị</h4>
                    <p className="">
                      Người bị cận thị (dưới 10 độ) không kèm hoặc kèm loạn thị
                      từ 3 độ trở xuống
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            <div className="absolute lg:top-0 top-1/2 -translate-y-1/2 lg:translate-y-0 right-0 w-full lg:w-fit z-30 flex justify-between gap-3">
              <CustomBtn />
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  )
}
