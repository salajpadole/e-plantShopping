import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.items);

  const [showCart, setShowCart] = useState(false);
  const [showPlants, setShowPlants] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});

  const cartQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      plants: [
        {
          name: 'Snake Plant',
          image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500',
          description: 'A beautiful low-maintenance plant that helps improve indoor air quality.',
          cost: '$15',
        },
        {
          name: 'Spider Plant',
          image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=500',
          description: 'An attractive plant known for its air-purifying properties.',
          cost: '$12',
        },
        {
          name: 'Peace Lily',
          image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500',
          description: 'An elegant flowering plant suitable for indoor spaces.',
          cost: '$20',
        },
        {
          name: 'Boston Fern',
          image: 'https://images.unsplash.com/photo-1597055181300-e3633a917cdd?w=500',
          description: 'A lush green fern that adds freshness to your home.',
          cost: '$18',
        },
        {
          name: 'Rubber Plant',
          image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500',
          description: 'A striking indoor plant with glossy green leaves.',
          cost: '$25',
        },
        {
          name: 'Aloe Vera',
          image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500',
          description: 'A popular succulent with several traditional uses.',
          cost: '$10',
        },
      ],
    },

    {
      category: 'Aromatic Fragrant Plants',
      plants: [
        {
          name: 'Lavender',
          image: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=500',
          description: 'A fragrant plant known for its calming aroma.',
          cost: '$18',
        },
        {
          name: 'Jasmine',
          image: 'https://images.unsplash.com/photo-1597055181300-e3633a917cdd?w=500',
          description: 'A beautiful flowering plant with a sweet fragrance.',
          cost: '$22',
        },
        {
          name: 'Rosemary',
          image: 'https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=500',
          description: 'An aromatic herb commonly used in cooking.',
          cost: '$14',
        },
        {
          name: 'Mint',
          image: 'https://images.unsplash.com/photo-1628557044797-f21a177c37ec?w=500',
          description: 'A refreshing herb with a distinctive fragrance.',
          cost: '$10',
        },
        {
          name: 'Lemon Balm',
          image: 'https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=500',
          description: 'A pleasant-smelling herb with lemon-like leaves.',
          cost: '$13',
        },
        {
          name: 'Hyacinth',
          image: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=500',
          description: 'A flowering plant known for its strong fragrance.',
          cost: '$20',
        },
      ],
    },

    {
      category: 'Insect Repellent Plants',
      plants: [
        {
          name: 'Oregano',
          image: 'https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=500',
          description: 'A useful aromatic herb for your garden.',
          cost: '$12',
        },
        {
          name: 'Marigold',
          image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=500',
          description: 'A colourful flowering plant often grown in gardens.',
          cost: '$15',
        },
        {
          name: 'Geraniums',
          image: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=500',
          description: 'A decorative flowering plant with a pleasant scent.',
          cost: '$17',
        },
        {
          name: 'Basil',
          image: 'https://images.unsplash.com/photo-1628557044797-f21a177c37ec?w=500',
          description: 'A popular aromatic herb for home gardens.',
          cost: '$11',
        },
        {
          name: 'Catnip',
          image: 'https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=500',
          description: 'A fragrant herb that is easy to grow.',
          cost: '$13',
        },
        {
          name: 'Citronella',
          image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=500',
          description: 'A fragrant grass commonly used in outdoor gardens.',
          cost: '$19',
        },
      ],
    },

    {
      category: 'Medicinal Plants',
      plants: [
        {
          name: 'Aloe Vera',
          image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500',
          description: 'A succulent traditionally used in skincare.',
          cost: '$10',
        },
        {
          name: 'Echinacea',
          image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=500',
          description: 'A flowering plant commonly grown in medicinal gardens.',
          cost: '$16',
        },
        {
          name: 'Peppermint',
          image: 'https://images.unsplash.com/photo-1628557044797-f21a177c37ec?w=500',
          description: 'A refreshing herb with a strong mint aroma.',
          cost: '$12',
        },
        {
          name: 'Chamomile',
          image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=500',
          description: 'A delicate flowering herb commonly used for tea.',
          cost: '$14',
        },
        {
          name: 'Calendula',
          image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=500',
          description: 'A bright flowering plant often grown in herb gardens.',
          cost: '$15',
        },
        {
          name: 'Lemon Balm',
          image: 'https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=500',
          description: 'A fragrant herb traditionally used in herbal preparations.',
          cost: '$13',
        },
      ],
    },

    {
      category: 'Low Maintenance Plants',
      plants: [
        {
          name: 'ZZ Plant',
          image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500',
          description: 'A hardy indoor plant that requires very little care.',
          cost: '$22',
        },
        {
          name: 'Pothos',
          image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=500',
          description: 'A trailing indoor plant that grows well in different conditions.',
          cost: '$15',
        },
        {
          name: 'Cast Iron Plant',
          image: 'https://images.unsplash.com/photo-1597055181300-e3633a917cdd?w=500',
          description: 'A durable plant that tolerates low-light conditions.',
          cost: '$20',
        },
        {
          name: 'Succulents',
          image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500',
          description: 'Compact plants that store water in their leaves.',
          cost: '$9',
        },
        {
          name: 'Aglaonema',
          image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500',
          description: 'A decorative indoor plant with attractive foliage.',
          cost: '$24',
        },
        {
          name: 'Jade Plant',
          image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500',
          description: 'A popular succulent that is easy to maintain.',
          cost: '$12',
        },
      ],
    },
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));

    setAddedToCart((previous) => ({
      ...previous,
      [plant.name]: true,
    }));
  };

  const handlePlantsClick = () => {
    setShowPlants(true);
    setShowCart(false);
  };

  const handleHomeClick = () => {
    setShowPlants(false);
    setShowCart(false);
  };

  const handleCartClick = () => {
    setShowCart(true);
    setShowPlants(false);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
    setShowPlants(true);
  };

  return (
    <div className="product-list-container">
      <nav className="navbar">
        <div className="navbar-title">
          <div className="logo">Paradise Nursery</div>
          <p>Where Green Meets Serenity</p>
        </div>

        <div className="navbar-links">
          <a href="#" onClick={handleHomeClick}>
            Home
          </a>

          <a href="#" onClick={handlePlantsClick}>
            Plants
          </a>

          <a href="#" onClick={handleCartClick}>
            <span className="cart-icon">🛒</span>
            Cart
            <span className="cart-quantity">
              {cartQuantity}
            </span>
          </a>
        </div>
      </nav>

      {!showCart && !showPlants && (
        <div className="welcome-section">
          <h1>Welcome To Paradise Nursery</h1>
          <p>Where Green Meets Serenity</p>

          <button onClick={handlePlantsClick}>
            Get Started
          </button>
        </div>
      )}

      {showPlants && !showCart && (
        <div className="plant-list">
          <h1>Our Plants</h1>

          {plantsArray.map((category, index) => (
            <section
              className="plant-category"
              key={index}
            >
              <h2>{category.category}</h2>

              <div className="product-grid">
                {category.plants.map((plant, plantIndex) => (
                  <div
                    className="plant-card"
                    key={`${plant.name}-${plantIndex}`}
                  >
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="plant-image"
                    />

                    <h3>{plant.name}</h3>

                    <p>{plant.description}</p>

                    <h4>{plant.cost}</h4>

                    <button
                      className="add-to-cart-button"
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedToCart[plant.name]}
                    >
                      {addedToCart[plant.name]
                        ? 'Added to Cart'
                        : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}

      {showCart && (
        <CartItem
          onContinueShopping={handleContinueShopping}
        />
      )}
    </div>
  );
}

export default ProductList;