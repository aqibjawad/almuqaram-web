import { useState } from "react";
import { ChevronDown, ChevronUp, Plus, Minus, Menu, X } from "lucide-react";
import Cards from "../../components/cards/Cards";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import productData from "../../components/productData/productData";
import SoftcareSection from "./productCat";
import CategoriesSidebar from "./caetgorySidebar";
import ProductBanner from "./productBanner";

const Products = () => {
  const [expanded, setExpanded] = useState({
    tissues: true,
    otherItems: true,
    brands: true,
    price: true,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar toggle state
  const productsPerPage = 10;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(productData.length / productsPerPage);

  const toggleSection = (section) => {
    setExpanded({
      ...expanded,
      [section]: !expanded[section],
    });
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div
      fluid
      className="px-0 overflow-hidden position-relative"
      style={{ marginTop: "12rem", marginRight: "3rem" }}
    >
      {/* Mobile Sidebar Toggle Button */}
      <button
        className="btn btn-primary d-md-none position-fixed sidebar-toggle-btn"
        style={{
          top: "130px",
          left: sidebarOpen ? "260px" : "15px",
          zIndex: 1050,
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s ease"
        }}
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Backdrop for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="position-fixed w-100 h-100 d-md-none"
          style={{
            top: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1040
          }}
          onClick={toggleSidebar}
        />
      )}

      <Row className="mx-0">
        <Col xs={12} md={3}>
          {/* Desktop Sidebar - Always visible on medium+ screens */}
          <div className="d-none d-md-block">
            <CategoriesSidebar />
          </div>
          
          {/* Mobile Sidebar - Toggleable */}
          <div
            className={`d-md-none position-fixed h-100 bg-white ${
              sidebarOpen ? "d-block" : "d-none"
            }`}
            style={{
              top: 0,
              left: 0,
              width: "250px",
              zIndex: 1045,
              overflowY: "auto",
              paddingTop: "20px",
              boxShadow: "2px 0 5px rgba(0,0,0,0.1)"
            }}
          >
            <CategoriesSidebar />
          </div>
        </Col>
        
        <Col xs={12} md={9} className="p-2">
          <div className="mt-3">
            <ProductBanner />
            <Cards products={currentProducts} />
          </div>
        </Col>
      </Row>

      {/* Pagination */}
      <div className="d-flex justify-content-center align-items-center my-4">
        <button
          className="btn btn-link"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, index) => {
          const pageNum = index + 1;
          return (
            <button
              key={pageNum}
              className={`mx-2 rounded-circle border-0 ${
                currentPage === pageNum
                  ? "bg-dark text-white"
                  : "bg-transparent text-dark"
              }`}
              style={{
                width: "35px",
                height: "35px",
                fontWeight: "500",
              }}
              onClick={() => setCurrentPage(pageNum)}
            >
              {pageNum}
            </button>
          );
        })}

        <button
          className="btn btn-light d-flex align-items-center"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next <span className="ms-1">&#x276F;</span>
        </button>
      </div>

      <SoftcareSection />
    </div>
  );
};

export default Products;