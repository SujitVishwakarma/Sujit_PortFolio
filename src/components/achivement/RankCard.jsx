import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import LinkIcon from '@mui/icons-material/Link';
import {ACHIEVEMENT} from '../../utils/data'
const RankCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="bg-gradient-to-r from-[#0e1218] to-[#041421] p-4 md:p-10 text-center">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 text-white">My Achievements</h1>
      <Slider {...settings} className="bg-white rounded-lg p-4 md:p-8">
        {ACHIEVEMENT.map(item => (
          <div key={item.id} className="text-center p-2 md:p-4">
            <div className="bg-gray-200 rounded-lg p-4 md:p-6 mb-4 shadow-lg">
              <img src={item.src} alt={item.title} className="mx-auto mb-4 h-20 w-20 md:h-40 md:w-40 object-cover" />
              <h3 className="w-full text-lg md:text-xl font-bold mb-2 text-black">{item.title}</h3>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                <LinkIcon fontSize="large" />
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RankCard;
