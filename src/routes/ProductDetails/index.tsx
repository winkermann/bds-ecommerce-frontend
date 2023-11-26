import "./styles.css";
import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeaderClient from "../../components/HeaderClient";
import ProductDetaislCard from "../../components/ProductDetailsCard";
import { ProductDTO } from "../../models/product";

const product : ProductDTO = {
  id: 2,
  name: "Smart TV",
  description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  imgUrl : "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg",
  price : 2500.99,
  categories : [
    {
      id : 2,
      name : "Eletrônicos"
    },
    {
      id : 3,
      name : "Smart TV"
    },
    {
      id : 4,
      name : "Importados"
    },
  ]
}

export default function ProductDetails() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductDetaislCard product={product} />
          <div className="dsc-btn-page-container">
            <ButtonPrimary />
            <ButtonInverse />
          </div>
        </section>
      </main>
    </>
  );
}
