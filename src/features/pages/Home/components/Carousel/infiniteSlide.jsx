import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { useState } from 'react';
import { cn } from '../utils';

import { Pagination } from 'swiper/modules';

export default function Test() {

    const [index, setIndex] = useState(0)

    const handleSlideChange = (swiper) => {
        setIndex(swiper.realIndex)
    };

    const colors = ['bg-red-600', 'bg-blue-600', 'bg-cyan-600', 'bg-black', 'bg-pink-600', 'bg-orange-600',]

    return (
        <div className={cn('bg-red-200 h-[500px] w-full pt-20 px-10')}>
            <Swiper
                slidesPerView="auto"
                loop={true}
                spaceBetween={20}
                onSlideChange={handleSlideChange}
                pagination={true}
                modules={[Pagination]}
                preventClicksPropagation={false}
                preventClicks={false}
                slideToClickedSlide={true}
            >
                {
                    colors.map((data, _index) => (
                        <SwiperSlide key={_index} className='w-full max-w-fit'>
                            <div className='h-[340px] flex flex-col '>
                                <div className={cn('w-[275px] transition-all delay-150 duration-300 h-[340px] origin-bottom scale-y-100 border border-white',
                                   index !== _index && "mt-auto scale-y-75", data)}>

                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    )
}