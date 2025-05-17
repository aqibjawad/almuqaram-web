import { useState } from "react";
import { ChevronDown, ChevronUp, Plus, Minus } from "lucide-react";
import Cards from "../../components/cards/Cards";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import productData from "../../components/productData/productData";

const Products = () => {
  const [expanded, setExpanded] = useState({
    tissues: true,
    otherItems: true,
    brands: true,
    price: true,
  });

  // Toggle section expansion
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
      style={{ marginTop: "4rem", marginRight: "2rem" }}
    >
      <Row className="mx-0">

        {/* Second column takes more space (9 out of 12 units) */}
        <Col xs={12} md={12} className="p-2">
          <div className="mt-3">
            <Cards products={productData} />
          </div>
        </Col>
      </Row>

      {/* <Row className="mx-0">
        <Col xs={12} md={4} className="p-2"></Col>

        <Col xs={12} md={4} className="p-2">
          <img src="/productPage.png" />
        </Col>

        <Col xs={12} md={4} className="p-2">
          <div></div>
        </Col>
      </Row> */}
    </div>
  );
};

export default Products;
