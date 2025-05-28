// Product data array with one image from each product folder
const productData = [
  {
    image: "/Product PNG Files/1740056501673.png",
    title: "83120 - Alum Container"
  },
  {
    image: "/out of order/8325 - Alum Container/7.jpg",
    title: "8325 - Alum Container"
  },
  {
    image: "/out of order/8342 - Aluminium Container/1.jpg",
    title: "8342 - Aluminium Container"
  },
  {
    image: "/out of order/8389 - Alum Container/4.jpg",
    title: "8389 - Alum Container"
  },
  {
    image: "/out of order/Alum Foil 1000 g 30 cm/16.jpg",
    title: "Alum Foil 1000 g 30 cm"
  },
  {
    image: "/out of order/Alum Foil 1000 g 45 cm/8.jpg",
    title: "Alum Foil 1000 g 45 cm"
  },
  {
    image: "/out of order/Alum Foil 1350 g 30 cm/93.jpg",
    title: "Alum Foil 1350 g 30 cm"
  },
  {
    image: "/out of order/Alum Foil 30 cm 25 sq/2.jpg",
    title: "Alum Foil 30 cm 25 sq"
  },
  {
    image: "/out of order/Alum Foil 45 cm 37.5 Sq/5.jpg",
    title: "Alum Foil 45 cm 37.5 Sq"
  },
  {
    image: "/out of order/Alum Foil 75 sq 30 cm/57.jpg",
    title: "Alum Foil 75 sq 30 cm"
  },
  {
    image: "/out of order/Aluminium Foil 1000 g 30 cm/96.jpg",
    title: "Aluminium Foil 1000 g 30 cm"
  },
  {
    image: "/out of order/Anti-Bacterial Wipes 72 sheet/65.jpg",
    title: "Anti-Bacterial Wipes 72 sheet"
  },
  {
    image: "/out of order/Baby Wipes 80 sheet/59.jpg",
    title: "Baby Wipes 80 sheet"
  },
  {
    image: "/out of order/Baby wipes 100 sheet/62.jpg",
    title: "Baby wipes 100 sheet"
  },
  {
    image: "/out of order/Cling FIlm 200 sq 30 cm/78.jpg",
    title: "Cling FIlm 200 sq 30 cm"
  },
  {
    image: "/out of order/Cling Film 100 sq 45 cm/90.jpg",
    title: "Cling Film 100 sq 45 cm"
  },
  {
    image: "/out of order/Cling Film 1000g 45 cm/73.jpg",
    title: "Cling Film 1000g 45 cm"
  },
  {
    image: "/out of order/Cling Film 1300 g 30 cm/84.jpg",
    title: "Cling Film 1300 g 30 cm"
  },
  {
    image: "/out of order/Cling Film 1500 g 45 cm/81.jpg",
    title: "Cling Film 1500 g 45 cm"
  },
  {
    image: "/out of order/Cling Film 30 cm 100 sq/14.jpg",
    title: "Cling Film 30 cm 100 sq"
  },
  {
    image: "/out of order/Cube Box Petals/37.jpg",
    title: "Cube Box Petals"
  },
  {
    image: "/out of order/Cube Box Pink/39.jpg",
    title: "Cube Box Pink"
  },
  {
    image: "/out of order/Interfold Petals/45.jpg",
    title: "Interfold Petals"
  },
  {
    image: "/out of order/Interfold Sheets/69.jpg",
    title: "Interfold Sheets"
  },
  {
    image: "/out of order/Napkin Petals/43.jpg",
    title: "Napkin Petals"
  },
  {
    image: "/out of order/Nylon 500 Sheet/31.jpg",
    title: "Nylon 500 Sheet"
  },
  {
    image: "/out of order/Nylon 600/53.jpg",
    title: "Nylon 600"
  },
  {
    image: "/out of order/Petals FT 100/16.jpg",
    title: "Petals FT 100"
  },
  {
    image: "/out of order/Petals FT 140/19.jpg",
    title: "Petals FT 140"
  },
  {
    image: "/out of order/Petals FT 150/22.jpg",
    title: "Petals FT 150"
  },
  {
    image: "/out of order/Petals FT 200/25.jpg",
    title: "Petals FT 200"
  },
  {
    image: "/out of order/Petals FT 500/25.jpg",
    title: "Petals FT 500"
  },
  {
    image: "/out of order/Petals MR 1400 + 100/47.jpg",
    title: "Petals MR 1400 + 100"
  },
  {
    image: "/out of order/Petals MR 600 + 100/19.jpg",
    title: "Petals MR 600 + 100"
  },
  {
    image: "/out of order/Petals MR TP 1500 + 400/41.jpg",
    title: "Petals MR TP 1500 + 400"
  },
  {
    image: "/out of order/Petals TR 300/39.jpg",
    title: "Petals TR 300"
  },
  {
    image: "/out of order/Petals TR 400/60.jpg",
    title: "Petals TR 400"
  },
  {
    image: "/out of order/Petals Twin Pack/41.jpg",
    title: "Petals Twin Pack"
  },
  {
    image: "/out of order/Pink Cube Box/55.jpg",
    title: "Pink Cube Box"
  },
  {
    image: "/out of order/Rectangle Box/57.jpg",
    title: "Rectangle Box"
  },
  {
    image: "/out of order/Sandwich Paper/84.jpg",
    title: "Sandwich Paper"
  },
  {
    image: "/out of order/SoftCare MR 600 + 150/43.jpg",
    title: "SoftCare MR 600 + 150"
  },
  {
    image: "/out of order/SoftCare TR 400/45.jpg",
    title: "SoftCare TR 400"
  },
  {
    image: "/out of order/Softcare FT 150/28.jpg",
    title: "Softcare FT 150"
  },
  {
    image: "/out of order/Softcare FT 200/13.jpg",
    title: "Softcare FT 200"
  },
  {
    image: "/out of order/Softcare MR 235 Metre/53.jpg",
    title: "Softcare MR 235 Metre"
  },
  {
    image: "/out of order/Softcare MR 800 + 100/51.jpg",
    title: "Softcare MR 800 + 100"
  },
  {
    image: "/out of order/Softcare Maxi Roll/22.jpg",
    title: "Softcare Maxi Roll"
  },
  {
    image: "/out of order/Softcare TR 200/36.jpg",
    title: "Softcare TR 200"
  },
  // {
  //   image: "/out of order/Tissue Box/10.jpg",
  //   title: "Tissue Box"
  // },
  // {
  //   image: "/out of order/Tissue Box Petals/10.jpg",
  //   title: "Tissue Box Petals"
  // },
  // {
  //   image: "/out of order/Tissue Box Pink/10.jpg",
  //   title: "Tissue Box Pink"
  // }
];

// Export the product data
export default productData;