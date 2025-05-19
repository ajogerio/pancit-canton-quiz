import React from 'react'
import Template from './components/Template';

export default function OriginalPage() {
  return (
      <Template
        flavorName="Original"
        colorTheme="#e8be04"
        choiceLetter="B"
        backgroundImage="/original-package.png"
        descriptionText="Original flavor description goes here"
        descriptionImage="/noodles.png"
        otherFlavors={[
          { name: "Kalamansi", image: "/home-page-image-1.png", color: "#1ea913"},
          { name: "Sweet and Spicy", image: "/sweet-and-spicy-package.png", color: "#e4300b"},
          { name: "Extra Hot Chili", image: "/extra-hot-chili-package.png", color: "#a11b11" },
        ]}
      />
    );
}
