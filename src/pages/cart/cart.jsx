import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Initialize navigate hook

  useEffect(() => {
    loadCartItems();
  }, []);

  const loadCartItems = () => {
    try {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error("Error loading cart:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }

    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );

    setCartItems(updatedItems);

    // Update localStorage
    try {
      localStorage.setItem('cart', JSON.stringify(updatedItems));
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  };

  const removeItem = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);

    // Update localStorage
    try {
      localStorage.setItem('cart', JSON.stringify(updatedItems));
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  const clearCart = () => {
    setCartItems([]);
    try {
      localStorage.removeItem('cart');
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = parseInt(item.price);
      return total + price * item.quantity;
    }, 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Handle checkout - redirect to contact page
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    
    // You can also store cart summary in localStorage for the contact page to access
    const orderSummary = {
      items: cartItems,
      totalItems: getTotalItems(),
      totalPrice: getTotalPrice(),
      orderDate: new Date().toISOString()
    };
    
    try {
      localStorage.setItem('orderSummary', JSON.stringify(orderSummary));
    } catch (error) {
      console.error('Error saving order summary:', error);
    }
    
    // Redirect to contact page
    navigate('/contact-us');
  };

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.spinner}></div>
        <p>Loading cart...</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Shopping Cart</h1>
        <div style={styles.cartSummary}>
          <span style={styles.itemCount}>{getTotalItems()} items</span>
          <span style={styles.totalPrice}>₹{getTotalPrice()}</span>
        </div>
      </div>

      {cartItems.length === 0 ? (
        <div style={styles.emptyCart}>
          <div style={styles.emptyIcon}>🛒</div>
          <h2 style={styles.emptyTitle}>Your cart is empty</h2>
          <p style={styles.emptyText}>Add some items to get started!</p>
        </div>
      ) : (
        <>
          <div style={styles.cartItems}>
            {cartItems.map((item) => (
              <div key={item.id} style={styles.cartItem}>
                <div style={styles.itemImage}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={styles.productImage}
                  />
                </div>

                <div style={styles.itemDetails}>
                  <h3 style={styles.itemTitle}>{item.title}</h3>
                  <p style={styles.itemDescription}>{item.description}</p>
                  <p style={styles.itemPacking}>Packing: {item.packing}</p>
                  <p style={styles.itemPrice}>{item.price}</p>
                </div>

                <div style={styles.itemControls}>
                  {/* <div style={styles.quantityControls}>
                    <button
                      style={styles.quantityBtn}
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span style={styles.quantity}>{item.quantity}</span>
                    <button
                      style={styles.quantityBtn}
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div> */}

                  <button
                    style={styles.removeBtn}
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={styles.cartFooter}>
            <button style={styles.clearBtn} onClick={clearCart}>
              Clear Cart
            </button>

            <div style={styles.checkoutSection}>
              <button 
                style={styles.checkoutBtn}
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },

  loadingContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "400px",
    color: "#30AFB8",
  },

  spinner: {
    width: "40px",
    height: "40px",
    border: "4px solid #f3f3f3",
    borderTop: "4px solid #30AFB8",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    marginBottom: "20px",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
    borderBottom: "2px solid #30AFB8",
    paddingBottom: "20px",
  },

  title: {
    color: "#30AFB8",
    fontSize: "32px",
    fontWeight: "bold",
    margin: 0,
  },

  cartSummary: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "5px",
  },

  itemCount: {
    color: "#666",
    fontSize: "14px",
  },

  totalPrice: {
    color: "#30AFB8",
    fontSize: "24px",
    fontWeight: "bold",
  },

  emptyCart: {
    textAlign: "center",
    padding: "80px 20px",
    color: "#666",
  },

  emptyIcon: {
    fontSize: "80px",
    marginBottom: "20px",
  },

  emptyTitle: {
    color: "#30AFB8",
    fontSize: "28px",
    marginBottom: "10px",
  },

  emptyText: {
    fontSize: "16px",
    marginBottom: "30px",
  },

  shopButton: {
    background: "#30AFB8",
    color: "white",
    border: "none",
    padding: "15px 30px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },

  cartItems: {
    marginBottom: "30px",
  },

  cartItem: {
    display: "flex",
    gap: "20px",
    padding: "20px",
    border: "1px solid #e0e0e0",
    borderRadius: "12px",
    marginBottom: "15px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },

  itemImage: {
    flexShrink: 0,
  },

  productImage: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "8px",
    border: "2px solid #30AFB8",
  },

  itemDetails: {
    flex: 1,
  },

  itemTitle: {
    color: "#30AFB8",
    fontSize: "20px",
    fontWeight: "bold",
    margin: "0 0 8px 0",
  },

  itemDescription: {
    color: "#666",
    fontSize: "14px",
    margin: "0 0 5px 0",
  },

  itemPacking: {
    color: "#888",
    fontSize: "13px",
    margin: "0 0 8px 0",
  },

  itemPrice: {
    color: "#30AFB8",
    fontSize: "18px",
    fontWeight: "bold",
    margin: 0,
  },

  itemControls: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
  },

  quantityControls: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    border: "2px solid #30AFB8",
    borderRadius: "8px",
    padding: "5px",
  },

  quantityBtn: {
    background: "#30AFB8",
    color: "white",
    border: "none",
    width: "35px",
    height: "35px",
    borderRadius: "6px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },

  quantity: {
    fontSize: "18px",
    fontWeight: "bold",
    minWidth: "30px",
    textAlign: "center",
    color: "#30AFB8",
  },

  removeBtn: {
    background: "#ff4757",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    fontSize: "14px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },

  cartFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    borderTop: "2px solid #30AFB8",
    paddingTop: "20px",
    marginTop: "30px",
  },

  clearBtn: {
    background: "#ff6b6b",
    color: "white",
    border: "none",
    padding: "12px 20px",
    borderRadius: "8px",
    fontSize: "14px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },

  checkoutSection: {
    textAlign: "right",
  },

  totalSection: {
    marginBottom: "20px",
  },

  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    fontSize: "18px",
  },

  totalAmount: {
    color: "#30AFB8",
    fontSize: "24px",
    fontWeight: "bold",
  },

  checkoutBtn: {
    background: "linear-gradient(135deg, #30AFB8 0%, #2196F3 100%)",
    color: "white",
    border: "none",
    padding: "15px 40px",
    borderRadius: "8px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(48, 175, 184, 0.3)",
  },
};

// Add keyframes for spinner animation
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(styleSheet);

export default CartPage;