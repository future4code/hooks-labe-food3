import React from "react";
import {exemplo} from "./styledShoppingCartPage"
import { useProtected } from "../../hooks/useProtected";


export default function CarrinhoPage () {

  useProtected()
  return (
    <div>
        Carrinho Page
    </div>
  );
}