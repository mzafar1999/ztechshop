import React from "react";
import styled from "styled-components";
import SidebarItem from "./SidebarItem";
const SideBarDiv = styled.div`
  height: 90vh;
  width: 20vw;
  position: fixed;
  top: 36px;
  left: 40px;
  border-radius: 20px;
  background: rgb(2,187,117);
background: linear-gradient(180deg, rgba(2,187,117,1) 0%, rgba(1,184,104,1) 35%, rgba(0,255,162,1) 100%);
`;

const Sidebar = () => {
  let listItems = [
    {
        id:1,
        text:"profile",
        link:"/profile"
    },
    {
        id:2,
        text:"customers",
        link:"/customers"
    },
    {
        id:3,
        text:"all products",
        link:"/all-products"
    },
    {
        id:4,
        text:"add product",
        link:"/add-product"
    },
    {
        id:5,
        text:"messages",
        link:"/messages"
    },
  ];

  return (
    <SideBarDiv className="p-2 shadow">
      {listItems.map((listItem) => {
        return <SidebarItem {...listItem} />;
      })}
    </SideBarDiv>
  );
};

export default Sidebar;
