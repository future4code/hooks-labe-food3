import React from "react";
import { useProtected } from "../../hooks/useProtected";
import { exemplo } from "./styledFeedPage";

export default function FeedPage() {
  useProtected();

  return <div>Feed Page</div>;
}
