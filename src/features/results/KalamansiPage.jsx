import React from 'react'
import Template from './components/Template';

export default function KalamansiPage() {
  return (
      <Template
        flavorName="Kalamansi"
        colorTheme="#1ea913"
        backgroundImage="/home-page-image-1.png"
        descriptionText="Kalamansi is a zesty and citrusy Filipino favorite that packs a flavorful punch. It's refreshing and sharp — just like you!"
        descriptionImage="/kalamansi.png"
        otherFlavors={[
          { name: "Original", image: "/original-package.png", color: "#e8be04" },
          { name: "Sweet and Spicy", image: "/sweet-and-spicy-package.png", color: "#e4300b" },
          { name: "Extra Hot Chili", image: "/extra-hot-chili-package.png", color: "#a11b11" },
        ]}
      />
    );
}
