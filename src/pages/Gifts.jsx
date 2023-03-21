import { useEffect } from "react";
import FilterGifts from "../components/FilterGifts";
import Footer from "../components/Footer";
import TextFromGifts from '../components/TextFromGifts';

export default function Gifts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return(
    <div className="title-carousel">
      <h1 className="title">Dons</h1>
      <TextFromGifts />
      <FilterGifts type="breeds" dir="racas" />
      <FilterGifts type="trybes" dir="tribos" />
      <FilterGifts type="auspices" dir="augurios" />
      {/* <FilterGifts type="ranks" name="Postos" /> */}
      {/* <FilterGifts type="books" name="Livros" /> */}
      <button
        className="search-button-gifts"
        onClick=""
      >
        Realizar Busca
      </button>
      <Footer />
    </div>
  );
}