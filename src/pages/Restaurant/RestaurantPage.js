import axios from "axios";
import { toast } from "react-toastify";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { URL_BASE } from "../../constants/links";
import { GlobalContext } from "../../global/GlobalContext";
import { useProtected } from "../../hooks/useProtected";
import { exemplo } from "./styledRestaurantPage";
import { navigate, useNavigate } from "react-router-dom";
import * as S from "./styledRestaurantPage";

const RestaurantePage = () => {
  const navigate = useNavigate();
  // passei o nome do restaurante pelo path
  const params = useParams();

  const [products, setProducts] = useState();
  const [filterProducts, setFilterProducts] = useState([]);
  const [selectCategory, setSelectCategory] = useState("");
  const [restaurant, setRestaurant] = useState([]);
  // const  [restaurants ,cart , setCart]= useContext(GlobalContext)
  const { states, setters, functions } = useContext(GlobalContext);
  const { restaurants } = states;
  const { setRestaurants } = setters;
  const { addToCart, removeToCart } = functions;

  // está puxando todos os restaurantes do globalState
  // const restaurants = useContext(GlobalContext);

  // filtrando o restautante do estado global pelo nome
  const filterRest = restaurants.filter((restaurantes) => {
    return restaurantes.name === params.name;
  });

  // desistruturei para ficar um objeto em vez de array, obj dos restaurantes
  const [objRestaurante] = filterRest;
  console.log(objRestaurante);

  useEffect(() => {
    const headers = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };
    axios
      .get(`${URL_BASE}/restaurants/${objRestaurante.id}`, headers)
      .then((res) => {
        // console.log(res.data.restaurant.products);
        setRestaurant(res.data.restaurant);
        setProducts(res.data.restaurant.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const notifySucessProduct = () => {
    toast.success(
      "Produto adicionado.",
      { autoClose: 200 },
      {
        position: toast.POSITION.TOP_RIGHT,
      }
    );
  };

  // rederizando todos os productos
  const mapProducts =
    products &&
    products.map((product) => {
      return (
        <S.MainCard key={product.id}>
          <S.Card>
            <S.Img src={product.photoUrl} />
            <S.ContText>
              <S.Title>{product.name}</S.Title>
              <S.Description>{product.description}</S.Description>
              <S.OrgPA>
                <S.Price>R${product.price}</S.Price>
                <S.Add onClick={() => addToCart(product, objRestaurante.id)}>
                  adicionar
                </S.Add>
                {/* <button onClick={()=> removeToCart(product)}>REMOVE</button> */}
              </S.OrgPA>
            </S.ContText>
          </S.Card>
        </S.MainCard>
      );
    });

  //=============================================

  console.log(restaurant);

  // const restaurantsBanner =
  // restaurant && restaurant.map((item)=>{
  // return(
  //   <div>
  //     {item}
  //   </div>
  // )
  // })

  // ==================== filtro =============================

  // estado q pega todas as categorias dos produtos
  const [categoriasProduct, setCategoriasProduct] = useState([]);

  // codigo elimina as repeticões das categorias
  products &&
    products.map((product) => {
      if (categoriasProduct.includes(product.category)) {
        return false;
      } else {
        return setCategoriasProduct([...categoriasProduct, product.category]);
      }
    });

  // para renderizar a mudança dos filtros
  useEffect(() => {
    const array =
      products &&
      products.filter((product) => {
        return product.category === selectCategory;
      });

    setFilterProducts(array);
  }, [selectCategory]);

  // onclick q seta a categoria clicada para o estado
  const getCategory = (category) => {
    if (selectCategory === category) {
      setSelectCategory("");
    } else {
      setSelectCategory(category);
    }
  };

  // rederizando os productos filtrados
  const productsFilter =
    filterProducts &&
    filterProducts.map((product) => {
      return (
        <S.MainCard key={product.id}>
          <S.Card>
            <S.Img src={product.photoUrl} />

            <S.ContText>
              <S.Title>{product.name}</S.Title>
              <S.Description>{product.description}</S.Description>
              <S.OrgPA>
                <S.Price>R${product.price}</S.Price>
                <S.Add onClick={() => notifySucessProduct()}>adicionar</S.Add>
              </S.OrgPA>
            </S.ContText>
          </S.Card>
        </S.MainCard>
      );
    });

  // rederiza as categorias
  const categoriasRedered =
    categoriasProduct &&
    categoriasProduct.map((category) => {
      return <div onClick={() => getCategory(category)}>{category}</div>;
    });

  return (
    <div>
      Restaurante Page
      <button onClick={() => navigate("/shoppingcart")}>carrinho</button>
      {/* {restaurantsBanner} */}
      <S.ContBanner>
        <S.BorderDiv>
          <S.ImgRes src={restaurant.logoUrl} />
          <S.NameRes>{restaurant.name}</S.NameRes>
          <S.GapInfo>
            <div>{restaurant.category}</div>
            {/* ===================== */}
            <S.GapRest>
              {restaurant.deliveryTime}min
              <div>Frete R${restaurant.shipping}</div>
            </S.GapRest>
            {/* ======================= */}
            <S.Edrress>{restaurant.address}</S.Edrress>
          </S.GapInfo>
        </S.BorderDiv>
      </S.ContBanner>
      <S.Menu>{categoriasRedered}</S.Menu>
      <S.Main>{selectCategory ? productsFilter : mapProducts}</S.Main>
    </div>
  );
};

export default RestaurantePage;
