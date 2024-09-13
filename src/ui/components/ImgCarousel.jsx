import React from 'react'
import france from "../../asset/img/France.jpg";



const ImgCarousel = () => {
    return (
        <>
            <div
                  data-aos="fade-left"
                data-aos-duration="600"
                startevent="scroll"

                className="d-none d-md-flex justify-content-end gap-5 ps-5 pb-5">
                <div className="w-50 d-flex justify-content-end flex-column align-items-end ">
                    <div className="h4">Chasing Clouds at Mont Blanc's Pinnacle</div>
                    <p className="text-white">Mont Blanc France</p>
                </div>

                <div className="w-50">
                    <div className="card-items d-flex align-items-end ">
                        <div className="overflow-hidden d-flex gap-4  ">
                            <img src={france} alt="home" width={800} height={600} style={{ borderRadius: "14px" }} />
                            <img src={france} alt="home" width={800} height={600} style={{ borderRadius: "14px" }} />
                            <img src={france} alt="home" width={800} height={600} style={{ borderRadius: "14px" }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImgCarousel
