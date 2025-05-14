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
        <Col xs={12} md={3} className="p-2 mt-4">
          <div className="bg-gray-100 p-4 w-64">
            {/* Navigation */}
            <div className="text-sm text-gray-600 mb-2">
              <span>Home</span> / <span>Products</span>
            </div>

            {/* Categories Header */}
            <div className="font-semibold text-gray-700 mb-4 border-b border-gray-300 pb-1">
              CATEGORIES
            </div>

            {/* Tissues Section */}
            <div className="mb-4">
              <div
                className="flex justify-between items-center cursor-pointer mb-2"
                onClick={() => toggleSection("tissues")}
              >
                <span className="font-medium">Tissues</span>
                {expanded.tissues ? <Minus size={20} /> : <Plus size={20} />}
              </div>

              {expanded.tissues && (
                <div className="ml-2 flex flex-col space-y-2">
                  <div className="text-teal-600">Facial Tissue</div>
                  <div>Maxi Rolls</div>
                  <div>Toilet Rolls</div>
                  <div>Private Labels</div>
                </div>
              )}
            </div>

            {/* Other Items Section */}
            <div className="mb-4">
              <div
                className="flex justify-between items-center cursor-pointer mb-2"
                onClick={() => toggleSection("otherItems")}
              >
                <span className="font-medium">Other Items</span>
                {expanded.otherItems ? <Minus size={20} /> : <Plus size={20} />}
              </div>

              {expanded.otherItems && (
                <div className="ml-2 flex flex-col space-y-2">
                  <div>Aluminum Foil</div>
                  <div>Dispensers</div>
                  <div>towels</div>
                </div>
              )}
            </div>

            {/* All Products */}
            <div className="mb-4">
              <div className="flex justify-between items-center cursor-pointer mb-2">
                <span className="font-medium">All products</span>
                <Plus size={20} />
              </div>
            </div>

            {/* Brands Section */}
            <div className="mb-4">
              <div
                className="flex justify-between items-center cursor-pointer mb-2"
                onClick={() => toggleSection("brands")}
              >
                <span className="font-medium">Brands</span>
                {expanded.brands ? <Minus size={20} /> : <Plus size={20} />}
              </div>

              {expanded.brands && (
                <div className="ml-2 flex flex-col space-y-2">
                  <div className="flex justify-between">
                    <span>Softcare</span>
                    <span className="text-gray-500">(08)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Petals</span>
                    <span className="text-gray-500">(08)</span>
                  </div>
                </div>
              )}
            </div>

            {/* Price Section */}
            <div className="mb-4">
              <div
                className="flex justify-between items-center cursor-pointer mb-2"
                onClick={() => toggleSection("price")}
              >
                <span className="font-medium">Price</span>
                {expanded.price ? <Minus size={20} /> : <Plus size={20} />}
              </div>

              {expanded.price && (
                <div className="flex flex-col space-y-4">
                  {/* Price Slider */}
                  <div className="w-full bg-gray-300 h-1 rounded-full relative">
                    <div className="absolute w-1/3 h-1 bg-teal-500"></div>
                    <div className="absolute left-1/3 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white border border-gray-400 rounded-full"></div>
                  </div>

                  {/* Range Inputs */}
                  <div>
                    <div className="text-sm mb-1">Range</div>
                    <div className="flex items-center">
                      <input
                        type="text"
                        className="w-24 p-2 border border-gray-300 rounded text-center"
                        defaultValue="180 AED"
                      />
                      <div className="mx-2">—</div>
                      <input
                        type="text"
                        className="w-24 p-2 border border-gray-300 rounded text-center"
                        defaultValue="180 AED"
                      />
                    </div>
                  </div>

                  {/* Discount */}
                  <div>
                    <div className="text-sm mb-1">Discount</div>
                    <div className="flex items-center">
                      <div className="flex-1"></div>
                      <div className="mx-2">—</div>
                      <div className="w-24 p-2 border border-gray-300 rounded text-center bg-white">
                        45% Off
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Search Button */}
            <button className="w-full bg-teal-500 text-white py-3 rounded font-medium">
              Serach
            </button>
          </div>
        </Col>

        {/* Second column takes more space (9 out of 12 units) */}
        <Col xs={12} md={9} className="p-2">
          <div className="mt-3">
            <Cards products={productData} />
          </div>
        </Col>
      </Row>

      <Row className="mx-0">
        <Col xs={12} md={4} className="p-2"></Col>

        <Col xs={12} md={4} className="p-2">
          <img src="/productPage.png" />
        </Col>

        <Col xs={12} md={4} className="p-2">
          <div></div>
        </Col>
      </Row>
    </div>
  );
};

export default Products;
