import React from 'react';
import Card from './Card';

export default function Store({ onAddToCart, cartItems }) {
  const airPurifyingPlants = [
    {
      title: "Snake Plant",
      imageUrl: "https://m.media-amazon.com/images/I/715ow8JqF8L._AC_UF1000,1000_QL80_.jpg",
      price: 15,
      description: "A resilient plant that purifies air effectively.",
      isOnSale: true,
    },
    {
      title: "Spider Plant",
      imageUrl: "https://www.bhg.com/thmb/LrCakiEVtRCyslgobTNlo-suVMk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/BHG-spider-plant-c0e0fdd5ec6e4c1588998ce3167f6579.jpg",
      price: 12,
      description: "A popular houseplant that is easy to grow.",
      isOnSale: true,
    },
    {
      title: "Peace Lily Plant",
      imageUrl: "https://cakiyo.com/_next/image?url=https%3A%2F%2Fadmin.cakiyo.com%2Fstorage%2F3171%2FBeautiful_Peace_Lily_Plant.jpg&w=3840&q=75",
      price: 18,
      description: "A beautiful plant that blooms with white flowers.",
      isOnSale: true,
    },
    {
      title: "Boston Fern",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtEQnstVaL5LhXEtuodUsAs9pQYPnP7FsxDg&s",
      price: 20,
      description: "Known for its feathery fronds and air-purifying qualities.",
      isOnSale: true,
    },
    {
      title: "Rubber Plant",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyA1X_5_Dl7S67q5Pmnh6KuOGosYF_RarPPA&s",
      price: 17,
      description: "A robust plant with large, shiny leaves.",
      isOnSale: true,
    },
    {
      title: "Aloe Vera",
      imageUrl: "https://m.media-amazon.com/images/I/61vM5XmrW2L._AC_UF1000,1000_QL80_.jpg",
      price: 14,
      description: "A succulent known for its medicinal properties.",
      isOnSale: true,
    }
  ];

  const aromaticFragrantPlants = [
    {
      title: "Lavender",
      imageUrl: "https://myfreshair.in/wp-content/uploads/2021/07/lavender-plant-01.jpg",
      price: 20,
      description: "A fragrant herb with purple flowers.",
      isOnSale: true,
    },
    {
      title: "Jasmine",
      imageUrl: "https://5.imimg.com/data5/SELLER/Default/2024/6/430667139/ZB/XB/NO/24642325/jasmine-flower-plant.png",
      price: 18,
      description: "Known for its sweet-scented white flowers.",
      isOnSale: true,
    },
    {
      title: "Rosemary",
      imageUrl: "https://planaplant.com/cdn/shop/products/RosemaryPlant-2_627x700.jpg?v=1636578445",
      price: 15,
      description: "An aromatic herb used in cooking and fragrance.",
      isOnSale: true,
    },
    {
      title: "Mint",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVnth7YZvb-JtWP5q7mr82OltYLD5559ll6Q&s",
      price: 14,
      description: "A fresh, green herb with a strong aroma.",
      isOnSale: true,
    },
    {
      title: "Lemon Balm",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqHu-mN0h_GrXpURz26SM9cMtSsK4hzsUi2Q&s",
      price: 14,
      description: "A lemon-scented herb with calming properties.",
      isOnSale: true,
    },
    {
      title: "Hyacinth",
      imageUrl: "https://m.media-amazon.com/images/I/61mORmLOS2L.jpg",
      price: 22,
      description: "A flowering plant with a pleasant fragrance.",
      isOnSale: true,
    }
  ];

  return (
    <div className="store">
      <h2><u>Air Purifying Plants</u></h2>
      <section className="store-container">
        {airPurifyingPlants.map((plant) => (
          <Card
            key={plant.title}
            title={plant.title}
            imageUrl={plant.imageUrl}
            price={plant.price}
            description={plant.description}
            onAddToCart={() => onAddToCart(plant)}
            isDisabled={cartItems.some(item => item.title === plant.title)}
            isOnSale={plant.isOnSale}
          />
        ))}
      </section>

      <h2><u>Aromatic Fragrant Plants</u></h2>
      <section className="store-container">
        {aromaticFragrantPlants.map((plant) => (
          <Card
            key={plant.title}
            title={plant.title}
            imageUrl={plant.imageUrl}
            price={plant.price}
            description={plant.description}
            onAddToCart={() => onAddToCart(plant)}
            isDisabled={cartItems.some(item => item.title === plant.title)}
            isOnSale={plant.isOnSale}
          />
        ))}
      </section>
    </div>
  );
}
