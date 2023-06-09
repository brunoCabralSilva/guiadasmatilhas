import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { queryDataValues } from "../redux/actions";
import { useNavigate } from 'react-router-dom';

export default function Breeds() {
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (globalState.user.token === '') navigate('/login');
    if (globalState.listOfBreeds.length === 0) {
      queryDataValues(dispatch);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return(
    <section>
      <Navigation />
      <div className="title-carousel">
        <h1 className="title">Raças</h1>
        <Carousel
          list={ [...globalState.listOfBreeds, ...globalState.listOfBreeds] }
          dir="racas"
        />
      </div>
      <Footer />
    </section>
  );
}