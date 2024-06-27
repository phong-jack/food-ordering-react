import React, { useEffect, useState } from "react";
import ShopJumbotron from "../components/jumbotrons/ShopJumbotron";
import { getShopDetailService } from "../services/shop.service";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getListCategoryOfShopService } from "../services/category.service";

const ShopPage = () => {
  const { id } = useParams();

  const [shopDetail, setShopDetail] = useState({});
  const [menuList, setMenuList] = useState([]);
  const [foodDrinkList, setFoodDrinkList] = useState([]);

  useEffect(() => {
    console.log("Check id:: ", id);
    getShopDetail(id);
    getShopCategory(id);
  }, []);

  const getShopDetail = async (id) => {
    const res = await getShopDetailService({ id });
    if (res && res.data) {
      console.log("Check id:: ", id);
      console.log("Check data:: ", res.data);
      setShopDetail(res.data);
    }
  };

  const getShopCategory = async (shopId) => {
    const res = await getListCategoryOfShopService(shopId);
    if (res && res.data) {
      setMenuList(res.data);
    }
  };

  return (
    <>
      <Container>
        {shopDetail && (
          <ShopJumbotron
            id={shopDetail.id}
            name={shopDetail.name}
            address={shopDetail.address}
            image={shopDetail.image}
            isWorking={shopDetail.isWorking}
          />
        )}
      </Container>

      <section
        className="shop-product-containter mt-5"
        style={{ minHeight: "800px" }}
      >
        <div className="my-3 container ">
          <div className="row">
            <div className="col-lg-3 mb-4">
              <div className="category">
                <div className="">
                  <div className="px-3 shadow-lg ">
                    <span className="text-uppercase fw-bold fs-1 ">
                      Thực Đơn
                    </span>
                  </div>
                  <ul className="list-group list-group-light">
                    {menuList?.map((menuItem) => (
                      <li key={menuItem.id} className="list-group-item btn">
                        <a
                          href={`#${menuItem.id}`}
                          className="text-decoration-none text-black"
                        >
                          {menuItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-lg-9 "
              style={{ backgroundColor: "rgb(242, 244, 244)" }}
            >
              <div className="input-group mb-3 my-3">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text "
                    id="inputGroup-sizing-default"
                  >
                    <i
                      className="fa-solid fa-magnifying-glass"
                      style={{ fontSize: "24px" }}
                    ></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Tìm món"
                  aria-describedby="inputGroup-sizing-default"
                />

                <div className="foods-container col-12 mt-3 ">
                  {menuList?.map((menuItem) => (
                    <div key={menuItem.id} id={menuItem.id}>
                      <p className="h4 text-uppercase">{menuItem.name}</p>
                      {foodDrinkList?.map((foodDrink) => {
                        if (menuItem.id === foodDrink.categoryId) {
                          if (foodDrink.isAvailable) {
                            return (
                              <FoodCard
                                key={foodDrink.id}
                                shopDetail={shopDetail}
                                id={foodDrink.id}
                                name={foodDrink.name}
                                price={foodDrink.price}
                                imageUrl={foodDrink.image}
                              />
                            );
                          }
                        }
                        return null;
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;
