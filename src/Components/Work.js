import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Peak meals deliver exceptional flavors, premium ingredients, balanced nutrition, and culinary delight",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Select meal frequency: daily, weekly, or monthly, based on your lifestyle preferences.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Enjoy quick, reliable deliveries, ensuring your meals arrive fresh and on time.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
           foodie lets users discover restaurants, explore menus, read
          reviews, and make reservations or orders. It offers personalized
          recommendations, ratings, social sharing, and deals, enhancing the
          dining experience.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
