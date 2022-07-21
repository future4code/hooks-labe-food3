import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { URL_BASE } from "../../constants/links";
import { GlobalContext } from "../../global/GlobalContext";
import { useProtected } from "../../hooks/useProtected";
import { exemplo } from "./styledRestaurantPage";
import { navigate, useNavigate } from "react-router-dom";
import {
  ContainerCategory,
  Card,
  Img,
  MainCard,
  Centralize,
  ContText,
  Title,
  Description,
Price,
Add,
OrgPA,
ContImg,
Main
} from "./styledRestaurantPage";

const RestaurantePage = () => {
  const navigate = useNavigate()
  // passei o nome do restaurante pelo path
  const params = useParams();

  const [products, setProducts] = useState();
  const [filterProducts, setFilterProducts] = useState([]);
  const [selectCategory, setSelectCategory] = useState("");
  // const  [restaurants ,cart , setCart]= useContext(GlobalContext)
  const {states,setters,functions} = useContext(GlobalContext)
  const { restaurants }  =  states
  const  {setRestaurants} = setters
  const  {addToCart, removeToCart} = functions
  
  // está puxando todos os restaurantes do globalState
  // const restaurants = useContext(GlobalContext);

  // filtrando o restautante do estado global pelo nome
  const filterRest = restaurants.filter((restaurantes) => {
    return restaurantes.name === params.name;
  });

  // desistruturei para ficar um objeto em vez de array, obj dos restaurantes
  const [objRestaurante] = filterRest;
console.log(objRestaurante)


  useEffect(() => {
    const headers = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };
    axios
      .get(`${URL_BASE}/restaurants/${objRestaurante.id}`, headers)
      .then((res) => {
        console.log(res.data.restaurant.products);
        setProducts(res.data.restaurant.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  // rederizando todos os productos
  const mapProducts =
    products &&
    products.map((product) => {
      // console.log(product);
      return (
        <MainCard key={product.id}>
          <Card>            
              <Img src={product.photoUrl} />
           
            <ContText>
              <Title>{product.name}</Title>
              <Description>{product.description}</Description>
              <OrgPA>
              <Price>R${product.price}</Price>
              <Add onClick={()=> addToCart(product, objRestaurante.id)}>adicionar</Add>
              <br/>
              <button onClick={()=> removeToCart(product)}>REMOVE</button>
              </OrgPA>
            </ContText>
          </Card>
        </MainCard>
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

  // rederizando os productos filtrados
  const productsFilter =
    filterProducts &&
    filterProducts.map((product) => {
      return (
        <MainCard key={product.id}>
          <Card>            
              <Img src={product.photoUrl} />
           
            <ContText>
              <Title>{product.name}</Title>
              <Description>{product.description}</Description>
              <OrgPA>
              <Price>R${product.price}</Price>
              <Add>adicionar</Add>
              </OrgPA>
            </ContText>
          </Card>
        </MainCard>
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
      <button onClick={()=>navigate('/shoppingcart')}>carrinho</button>
      <ContainerCategory>{categoriasRedered}</ContainerCategory>      
        {selectCategory ? productsFilter : mapProducts}
    </div>
  );
};

export default RestaurantePage;
