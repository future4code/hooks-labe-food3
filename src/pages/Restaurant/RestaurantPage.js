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
import MenuBotton from "../../components/MenuBotton";
import Loading from "../../components/Loading";

const RestaurantePage = () => {
  const navigate = useNavigate();
  // passei o nome do restaurante pelo path
  const params = useParams();
  useProtected()
  const [products, setProducts] = useState();
  const [filterProducts, setFilterProducts] = useState([]);
  const [selectCategory, setSelectCategory] = useState("");
  const [restaurant, setRestaurant] = useState([]);
  const { states, setters, functions } = useContext(GlobalContext);
  const { restaurants, cart } = states;
  const { setRestaurants } = setters;
  const { addToCart, removeToCart } = functions;
  
  // está puxando todos os restaurantes do globalState
  // const restaurants = useContext(GlobalContext);
  
  // filtrando o restautante do estado global pelo nome
  const filterRest = restaurants.filter((restaurantes) => {
    return restaurantes.name === params.name;    
  });
  
  
  // desistruturei para ficar um objeto em vez de array, obj dos restaurantes
  restaurants.length === 0 && navigate("/feed")
  
  // requisição de produtos
  useEffect(() => {
    restaurantsPage()
  }, [params.name]);
  
  const [objRestaurante] = filterRest && filterRest;  
  
  // localStorage.setItem('idRes', objRestaurante.id )


  const restaurantsPage = async () =>{
    const url = ` ${URL_BASE}/restaurants/${objRestaurante.id}`
    const headers = {
        headers: {
          auth: localStorage.getItem("token"),
        },
      };
      try {
        const response = await axios.get(url, headers)
        setRestaurant(response.data.restaurant);
            setProducts(response.data.restaurant.products);          
    } catch (error) {
        console.log("Algo deu errado")
        navigate('/feed')
    }
     
  }

  const notifySucessProduct = () => {
    toast.success("Produto adicionado.",{ autoClose: 1000 },     
    );
  };

  // ============ rederizando todos os productos DO RESTAURANTE 

  // cart && cart.map(prod=>{
  //   if(products.includes(prod.name)){
  //     setProducts({...products, prod})
  //   }
  // })

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
              </S.OrgPA>
            </S.ContText>
          </S.Card>
          <S.Buttons>
                <S.Menos onClick={() => removeToCart(product, objRestaurante.id)}>-
                </S.Menos>  
                <S.Mais onClick={() => addToCart(product, objRestaurante.id)}>+
                </S.Mais>  
          </S.Buttons>
                            
        </S.MainCard>
      );
    });

  //=============================================

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
              </S.OrgPA>
            </S.ContText>
          </S.Card>          
          <S.Add onClick={() => addToCart(product, objRestaurante.id)}>adicionar</S.Add>
        </S.MainCard>
      );
    });



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


  // rederiza as categorias MENU scroll
  const categoriasRedered =
    categoriasProduct &&
    categoriasProduct.map((category) => {
      return <div onClick={() => getCategory(category)} key={category}>{category}</div>;
    });

  return (
    <div>     
      {/* {ao clicar em um restaurante essa é a parte de cima com nome e logo do restaurante} */}
      <S.ContBanner>
        <S.BorderDiv>
          <S.ImgRes src={restaurant.logoUrl} />
          <S.NameRes>{restaurant.name}</S.NameRes>
          <S.GapInfo>
            <div>{restaurant.category}</div>          
            <S.GapRest>
              {restaurant.deliveryTime}min
              <div>Frete R${restaurant.shipping}</div>
            </S.GapRest>          
            <S.Edrress>{restaurant.address}</S.Edrress>
          </S.GapInfo>
        </S.BorderDiv>
      </S.ContBanner>
      <S.Menu>
        <S.SubMenu>          
      {categoriasRedered}
      </S.SubMenu>
      </S.Menu>
      {/* renderização das comidas escolhidas atraves de filtros */}
      <S.Main>{ products ? (selectCategory ? productsFilter : mapProducts) : <Loading/> }</S.Main>  
    <MenuBotton/>
     
    </div>
  );
};

export default RestaurantePage;
