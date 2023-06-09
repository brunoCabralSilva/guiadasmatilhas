import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "../components/Navigation";
import { useSelector } from "react-redux";

export default function Menu() {
  const navigate = useNavigate();
  const globalState = useSelector((state) => state);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (globalState.user.token === '') navigate('/login');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const list = [
    {
      img: 'garou_nordeste.jpg',
      name: 'Garou Nordeste',
      link: '/garou-nordeste',
    },
    {
      img: 'kombi.jpg',
      name: 'Matilha da Kombi',
      link: '/matilha-da-kombi',
    },
    {
      img: 'https://media4.giphy.com/media/S9hmjJG3ZL4gCSWXze/giphy.gif?cid=790b7611a6244ac30bd8cab58718cf6f40efb92a3b78e81a&rid=giphy.gif&ct=g',
      name: 'Blog',
      link: '/blog',
    },
    {
      img: 'https://64.media.tumblr.com/e3a999e989e0f17dac10be8b649707eb/af64a96270ae26f2-dd/s400x600/c1164ced59af1891c7c60ca70613a4d4643d0bb9.gifv',
      name: 'Dons',
      link: '/gifts',
    },
    {
      img: 'https://64.media.tumblr.com/46bfcab063ecc267e34e95f163a55870/8305528fa1608264-22/s640x960/4bf52343deb15f79350bd118c6a2d06fd192f045.gif',
      name: 'Rituais',
      link: '/rituals',
    },
    {
      img: 'https://64.media.tumblr.com/4393e9e60edec4a6e821d5f14892a87a/af64a96270ae26f2-ea/s400x600/e8c3dae337ef0dadb718ac4718cac91631265f5b.gifv',
      name: 'Parceiros',
      link: '/friends',
    },
  ];

  return(
    <section>
      <Navigation />
      <div className="menu">
        <div
          className="menu-presentation"
        >
          <div className="black-color" />
          <img
            src={require('../images/logos/arrow-left.png')}
            alt="Seta para o retorno"
            className="arrow-left"
            onClick={ () => navigate('/') }
          />
          <div className="menu-text-presentation">
            <h3 className="">
              "Que Gaia tenha piedade de nós!"
            </h3>
            <h4 className="">- Lobisomem: O Apocalipse (Ed. Revisada)</h4>
          </div>
        </div>
        <div className="menu-presentation-mobile">
          <div className="black-color" />
          <img
            src={require('../images/logos/arrow-left.png')}
            alt="Seta para o retorno"
            className="arrow-left"
            onClick={ () => navigate('/') }
          />
          <div className="div-imgs">
            <img
              src={require('../images/logos/Garou Nordeste.png')}
              alt="Logo do Garou Nordeste"
            />
            <img
              src={require('../images/logos/Crônicas da Kombi.png')}
              alt="Logo da Matilha da Kombi"
            />
          </div>
        </div>
        <div className="menu-grid">
          {
            list.map((nav, index) => (
              <button onClick={() => navigate(`${nav.link}`) }
                key={index}
                className="menu-grid-item"
              >
                { nav.name === 'Garou Nordeste' || nav.name === "Matilha da Kombi"
                ? 
                  <Link to={nav.link }>
                    <p> {nav.name} </p>
                  </Link>
                :
                  <Link to={nav.link}>
                    <p> {nav.name} </p>
                  </Link>
                  }
              </button>
              ))
            }
        </div>
      </div>
      <Footer />
    </section>
  );
}