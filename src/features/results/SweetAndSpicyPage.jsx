import React from 'react'
import Template from './components/Template';

export default function SweetAndSpicyPage() {
  return (
      <Template
        flavorName="Sweet and Spicy"
        colorTheme="#e4300b"
        backgroundImage="/sweet-and-spicy-package.png"
        descriptionText="Sweet and Spicy Description goes here"
        descriptionImage="/orange-peppers.png"
        otherFlavors={[
          { name: "Kalamansi", image: "/home-page-image-1.png", color: "#1ea913" },
          { name: "Original", image: "/original-package.png", color: "#e8be04" },
          { name: "Extra Hot Chili", image: "/extra-hot-chili-package.png", color: "#a11b11" },
        ]}
      />
    );
}
