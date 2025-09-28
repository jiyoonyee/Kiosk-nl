import styled from "styled-components";
import { PageWrapper } from "@/components/layouts/Layout";
import AsdieWrapper from "./components/AsideWrapper";
import CategoryMenuWrapper from "./components/CategoryMenuWrapper";

import { useState } from "react";

const MenuPage = () => {
  const [selected, setSelected] = useState("ALL");
  // console.log(selected);

  return (
    <>
      <PageWrapper style={{ paddingTop: "10vh" }}>
        <MainWrapper>
          <AsdieWrapper value={selected} $onChange={setSelected} />
          <MenuWrapper>
            <CategoryMenuWrapper />
            <CategoryMenuWrapper />
            <CategoryMenuWrapper />
            <CategoryMenuWrapper />
            <CategoryMenuWrapper />
          </MenuWrapper>
        </MainWrapper>
      </PageWrapper>
    </>
  );
};

const MainWrapper = styled.main`
  width: 100%;
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: end;
  border-bottom: 2px solid #009633;

  @media (max-height: 1000px) {
    & {
      border-bottom: 1px solid #009633;
    }
  }
`;

const MenuWrapper = styled.div`
  width: 85%;
  height: 98%;
  padding-bottom: 10px;
  overflow: scroll;
  /* background-color: beige; */
`;

export default MenuPage;
