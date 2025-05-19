import React from 'react'
import Template from './components/Template';

export default function ExtraHotChiliPage() {
  return (
      <Template
        flavorName="Extra Hot Chili"
        colorTheme="#a11b11"
        choiceLetter="D"
        backgroundImage="/extra-hot-chili-package.png"
        descriptionText="Extra hot chili text goes here"
        descriptionImage="/red-peppers.png"
        otherFlavors={[
          { name: "Kalamansi", image: "/home-page-image-1.png", color: "#1ea913" },
          { name: "Original", image: "/original-package.png", color: "#e8be04" },
          { name: "Sweet and Spicy", image: "/sweet-and-spicy-package.png", color: "#e4300b" },
        ]}
      />
    );
}
