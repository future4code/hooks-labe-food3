import React from "react";
import {exemplo} from "./styledRestaurantePage"
import { useProtected } from "../../hooks/useProtected";


export default function RestaurantePage () {

  useProtected()
  return (
    <div>
        Restaurante Page
    </div>
  );
}