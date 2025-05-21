import { useState } from "react";
import { ChevronDown, ChevronUp, Plus, Minus } from "lucide-react";
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

  return (
    <div
      fluid
      className="px-0 overflow-hidden"
      style={{ marginTop: "6rem", marginRight: "2rem" }}
    >
      <Row className="mx-0">
        <Col xs={12} md={3}>
          <CategoriesSidebar />
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
