import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slid1 from '../../../../assets/home/slide1.jpg'
import slid2 from '../../../../assets/home/slide2.jpg'
import slid3 from '../../../../assets/home/slide3.jpg'
import slid4 from '../../../../assets/home/slide4.jpg'
import slid5 from '../../../../assets/home/slide5.jpg'
// import slid6 from '../../../../assets/home/slide6.jpg'
const Catagory = () => {

    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src={slid1} />
                <h4 className='text-white font-sans -mt-11 text-3xl text-center'>salads</h4>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slid2} />
                <h4 className='text-white font-sans -mt-11 text-3xl text-center'>pizzas</h4>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slid3} />
                <h4 className='text-white font-sans -mt-11 text-3xl text-center'>soups</h4>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slid4} />
                <h4 className='text-white font-sans -mt-11 text-3xl text-center'>desert</h4>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slid5} />
                <h4 className='text-white font-sans -mt-11 text-3xl text-center'>salads</h4>
            </SwiperSlide>

            {/* <SwiperSlide>slid6</SwiperSlide>
            <SwiperSlide>slid7</SwiperSlide>
            <SwiperSlide>slid8</SwiperSlide>
            <SwiperSlide>slid9</SwiperSlide> */}
        </Swiper>
    );
};

export default Catagory;