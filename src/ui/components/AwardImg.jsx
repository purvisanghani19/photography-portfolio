import React from 'react'
import award1 from "../../asset/img/award1.jpg";
import ship from "../../asset/img/ship.jpg";
import award3 from "../../asset/img/award3.jpg";
import award4 from "../../asset/img/award4.jpg";

const AwardImg = ({ awardYear }) => {

    

    const awards = [{
        year: 2015,
        img: award1 ,
        imgHeadingText: "A Quite Afternoon in the Countryside",
        imgText: "As the sun gently descends in the western sky, casting a warm golden glow upon the rolling hills and meadows, the countryside settels into a tranquil serenity."
    },
    {
        year: 2017,
        img:  ship ,
        imgHeadingText: "A Quite Afternoon in the Countryside",
        imgText: "As the sun gently descends in the western sky, casting a warm golden glow upon the rolling hills and meadows, the countryside settels into a tranquil serenity."
    },
    {

        year: 2022,
        img: award3 ,
        imgHeadingText: "A Quite Afternoon in the Countryside",
        imgText: "As the sun gently descends in the western sky, casting a warm golden glow upon the rolling hills and meadows, the countryside settels into a tranquil serenity."

    }, {

        year: 2023,
        img:  award4 ,
        imgHeadingText: "A Quite Afternoon in the Countryside",
        imgText: "As the sun gently descends in the western sky, casting a warm golden glow upon the rolling hills and meadows, the countryside settels into a tranquil serenity."
    },
    ]

    const things = awards.filter((item) => item.year == awardYear)




    return (
        <>
            {
                things.map((item,index) => (
                    // console.log('item.img', item.img)
                    <div key={index}>
                        <img src={item.img} alt='img' height={300} className=" w-75  rounded outer-box" />
                        <h6 className="pt-3">{item.imgHeadingText}</h6>
                        <p>{item.imgText}</p>
                    </div>
                ))
            }
        </>
    )
}

export default AwardImg
