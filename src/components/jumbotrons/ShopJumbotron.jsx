import React from "react";

const ShopJumbotron = (props) => {
  const { name, address, image, isWorking } = props;

  return (
    <>
      <section className="rounded" style={{ backgroundColor: `#f0f0f0` }}>
        <div className="py-3 container ">
          <div className="row">
            <div className="shop-content-image col-lg-6 col-12">
              <img src={image} alt={`${name} shop image`} />
            </div>
            <div className="col-lg-6 col-12 shop-info lh-base">
              <div className="shop-container-info mt-4">
                <h3 className="fs-1 fw-bold">{name}</h3>
                <p className="fst-italic">{address}</p>
                <p>
                  {(isWorking && (
                    <span class="badge bg-success">Đang mở cửa</span>
                  )) || <span class="badge bg-danger">Đã đóng cửa!</span>}
                </p>
                <div>
                  {/* <Rating
                    emptySymbol="fa-regular fa-star"
                    fullSymbol="fa-solid fa-star"
                    initialRating={3}
                  /> */}
                  &nbsp; Có 999 + lượt đánh giá
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopJumbotron;
