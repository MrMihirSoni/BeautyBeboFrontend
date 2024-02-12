import React, { useEffect, useState } from "react";
import "./allCategory.css";
import { useNavigate } from "react-router-dom";

const AllCategory = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const navigate = useNavigate()

  const nextSlide = () => {
    if (currentSlide < 3) setCurrentSlide(currentSlide + 1);
    if (currentSlide === 3) setCurrentSlide(1);
  };

  useEffect(() => {
    const interval = setTimeout(nextSlide, 3000); // Change slide every seconds
    return () => clearInterval(interval);
  }, [currentSlide]);

  const renderSlide = (slideNumber) => {
    const slideImages = [
      "https://www.beautybebo.com/pub/media/ads/slidrr.png",
      "https://www.beautybebo.com/pub/media/ads/slider-2.png",
      "https://www.beautybebo.com/pub/media/ads/slider_1.png",
    ];

    return (
      <div key={slideNumber}>
        <img src={slideImages[slideNumber - 1]} alt="" />
      </div>
    );
  };

  const renderCategoryItem = (imgSrc, text, navigateTo) => {
    return (
      <div className="categoriesContentItems" onClick={()=>navigate(navigateTo)} >
        <div>
          <img src={imgSrc} alt="" />
          <p>{text}</p>
        </div>
        <i className="bx bx-chevron-right"></i>
      </div>
    );
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          border: "1px solid #ded9d9",
          borderRadius: "3px",
          padding: "8px 0 8px 1rem",
          height: "28rem",
        }}
      >
        <div className="categoriesWrapper">
          <div className="categories">
            <div className="categoriesTitle">
              <i className="bx bx-menu"></i>
              <h3>All Categories</h3>
            </div>
            <div className="categoriesContent">{renderCategoryItem("https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/makeup-small.png", "Makeup", "/makeup")}
              {renderCategoryItem("https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/skin-small.png", "Skin", "/skin")}
              {renderCategoryItem("https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/hair-small.png", "Hair", "/hair")}
              {renderCategoryItem("https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/personal-care-small.png", "Personal Care", "/personal-care")}
              {renderCategoryItem("https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/mom-baby-care-small.png", "Mom & Baby Care", "/mom-baby-care")}
              {renderCategoryItem("https://www.beautybebo.com/pub/media/fragrance.png", "Fragrance", "/fragrance")}
              {renderCategoryItem("https://www.beautybebo.com/pub/media/ayurveda.png", "Ayurveda", "/ayurveda")}
            </div> 
          </div>
        </div>
        <div className="topCrouselWrapper">
          <div className="topCrousel">
          {renderSlide(currentSlide)}
          </div>
          <div className="topCrouselController">
          {[1, 2, 3].map((slideNumber) => (
              <i
                key={slideNumber}
                className={currentSlide === slideNumber ? "bx bxs-circle" : "bx bx-circle"}
                style={{ color: currentSlide === slideNumber ? "#DD0285" : undefined }}
                onClick={() => setCurrentSlide(slideNumber)}
              ></i>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCategory;
