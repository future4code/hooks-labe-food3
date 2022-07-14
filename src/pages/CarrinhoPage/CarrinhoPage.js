import React from "react";
import {exemplo} from "./styledCarrinhoPage"
import { useProtected } from "../../hooks/useProtected";


export default function CarrinhoPage () {

  useProtected()
  return (
    <div>
        Carrinho Page
    </div>
  );
}