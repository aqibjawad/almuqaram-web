// Product data array with one image from each product folder
const productData = [
  {
    image: "/out of order/83120 - Alum Container/10.jpg",
    title: "83120 - Alum Container"
  },
  {
    image: "/out of order/8325 - Alum Container/10.jpg",
    title: "8325 - Alum Container"
  },
  {
    image: "/out of order/8342 - Aluminium Container/10.jpg",
    title: "8342 - Aluminium Container"
  },
  {
    image: "/out of order/8389 - Alum Container/10.jpg",
    title: "8389 - Alum Container"
  },
  {
    image: "/out of order/Alum Foil 1000 g 30 cm/10.jpg",
    title: "Alum Foil 1000 g 30 cm"
  },
  {
    image: "/out of order/Alum Foil 1000 g 45 cm/10.jpg",
    title: "Alum Foil 1000 g 45 cm"
  },
  {
    image: "/out of order/Alum Foil 1350 g 30 cm/10.jpg",
    title: "Alum Foil 1350 g 30 cm"
  },
  {
    image: "/out of order/Alum Foil 30 cm 25 sq/10.jpg",
    title: "Alum Foil 30 cm 25 sq"
  },
  {
    image: "/out of order/Alum Foil 45 cm 37.5 Sq/10.jpg",
    title: "Alum Foil 45 cm 37.5 Sq"
  },
  {
    image: "/out of order/Alum Foil 75 sq 30 cm/10.jpg",
    title: "Alum Foil 75 sq 30 cm"
  },
  {
    image: "/out of order/Aluminium Foil 1500 g 45 cm/10.jpg",
    title: "Aluminium Foil 1500 g 45 cm"
  },
  {
    image: "/out of order/Anti-Bacterial Wipes 72 sheet/10.jpg",
    title: "Anti-Bacterial Wipes 72 sheet"
  },
  {
    image: "/out of order/Baby Wipes 80 sheet/10.jpg",
    title: "Baby Wipes 80 sheet"
  },
  {
    image: "/out of order/Baby wipes 100 sheet/10.jpg",
    title: "Baby wipes 100 sheet"
  },
  {
    image: "/out of order/Cling FIlm 200 sq 30 cm/10.jpg",
    title: "Cling FIlm 200 sq 30 cm"
  },
  {
    image: "/out of order/Cling Film 100 sq 45 cm/10.jpg",
    title: "Cling Film 100 sq 45 cm"
  },
  {
    image: "/out of order/Cling Film 1000g 45 cm/10.jpg",
    title: "Cling Film 1000g 45 cm"
  },
  {
    image: "/out of order/Cling Film 1300 g 30 cm/10.jpg",
    title: "Cling Film 1300 g 30 cm"
  },
  {
    image: "/out of order/Cling Film 1500 g 45 cm/10.jpg",
    title: "Cling Film 1500 g 45 cm"
  },
  {
    image: "/out of order/Cling Film 30 cm 100 sq/10.jpg",
    title: "Cling Film 30 cm 100 sq"
  },
  {
    image: "/out of order/Cube Box Petals/10.jpg",
    title: "Cube Box Petals"
  },
  {
    image: "/out of order/Cube Box Pink/10.jpg",
    title: "Cube Box Pink"
  },
  {
    image: "/out of order/Interfold Petals/10.jpg",
    title: "Interfold Petals"
  },
  {
    image: "/out of order/Interfold Sheets/10.jpg",
    title: "Interfold Sheets"
  },
  {
    image: "/out of order/Napkin Petals/10.jpg",
    title: "Napkin Petals"
  },
  {
    image: "/out of order/Nylon 500 Sheet/10.jpg",
    title: "Nylon 500 Sheet"
  },
  {
    image: "/out of order/Nylon 600/10.jpg",
    title: "Nylon 600"
  },
  {
    image: "/out of order/Petals FT 100/10.jpg",
    title: "Petals FT 100"
  },
  {
    image: "/out of order/Petals FT 140/10.jpg",
    title: "Petals FT 140"
  },
  {
    image: "/out of order/Petals FT 150/10.jpg",
    title: "Petals FT 150"
  },
  {
    image: "/out of order/Petals FT 200/10.jpg",
    title: "Petals FT 200"
  },
  {
    image: "/out of order/Petals FT 500/10.jpg",
    title: "Petals FT 500"
  },
  {
    image: "/out of order/Petals MR 1400 + 100/10.jpg",
    title: "Petals MR 1400 + 100"
  },
  {
    image: "/out of order/Petals MR 600 + 100/10.jpg",
    title: "Petals MR 600 + 100"
  },
  {
    image: "/out of order/Petals MR TP 1500 + 400/10.jpg",
    title: "Petals MR TP 1500 + 400"
  },
  {
    image: "/out of order/Petals TR 300/10.jpg",
    title: "Petals TR 300"
  },
  {
    image: "/out of order/Petals TR 400/10.jpg",
    title: "Petals TR 400"
  },
  {
    image: "/out of order/Petals Twin Pack/10.jpg",
    title: "Petals Twin Pack"
  },
  {
    image: "/out of order/Pink Cube Box/10.jpg",
    title: "Pink Cube Box"
  },
  {
    image: "/out of order/Rectangle Box/10.jpg",
    title: "Rectangle Box"
  },
  {
    image: "/out of order/Sandwich Paper/10.jpg",
    title: "Sandwich Paper"
  },
  {
    image: "/out of order/SoftCare MR 600 + 150/10.jpg",
    title: "SoftCare MR 600 + 150"
  },
  {
    image: "/out of order/SoftCare TR 400/10.jpg",
    title: "SoftCare TR 400"
  },
  {
    image: "/out of order/Softcare FT 150/10.jpg",
    title: "Softcare FT 150"
  },
  {
    image: "/out of order/Softcare FT 200/10.jpg",
    title: "Softcare FT 200"
  },
  {
    image: "/out of order/Softcare MR 235 Metre/10.jpg",
    title: "Softcare MR 235 Metre"
  },
  {
    image: "/out of order/Softcare MR 800 + 100/10.jpg",
    title: "Softcare MR 800 + 100"
  },
  {
    image: "/out of order/Softcare Maxi Roll/10.jpg",
    title: "Softcare Maxi Roll"
  },
  {
    image: "/out of order/Softcare TR 200/10.jpg",
    title: "Softcare TR 200"
  },
  {
    image: "/out of order/Tissue Box/10.jpg",
    title: "Tissue Box"
  },
  {
    image: "/out of order/Tissue Box Petals/10.jpg",
    title: "Tissue Box Petals"
  },
  {
    image: "/out of order/Tissue Box Pink/10.jpg",
    title: "Tissue Box Pink"
  }
];

// Export the product data
export default productData;