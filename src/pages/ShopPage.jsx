import React, { useEffect, useState } from "react";
import ShopJumbotron from "../components/jumbotrons/ShopJumbotron";
import { getShopDetailService } from "../services/shop.service";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

const ShopPage = () => {
  const { id } = useParams();

  const [shopDetail, setShopDetail] = useState({});
  const [menuList, setMenuList] = useState([]);
  const [foodDrinkList, setFoodDrinkList] = useState([]);

  useEffect(() => {
    getShopDetail(id);
  }, []);

  const getShopDetail = async (id) => {
    const res = await getShopDetailService({ id });
    if (res && res.data) {
      setShopDetail(res.data);
    }
  };

  return (
    <>
      <Container>
        <ShopJumbotron
          id={shopDetail.id}
          name={shopDetail.name}
          address={shopDetail.address}
          image={shopDetail.image}
          isWorking={shopDetail.isWorking}
        />
      </Container>
    </>
  );
};

export default ShopPage;
