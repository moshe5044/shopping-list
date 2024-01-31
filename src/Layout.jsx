import React from "react";
import Search from "./components/Search";
import Categories from "./components/Categories";
import Header from "./components/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <Search />
      <Categories />
    </>
  );
}
