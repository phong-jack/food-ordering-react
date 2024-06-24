import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getShopFilteredService } from "../../services/shop.service";
import ShopCard from "./ShopCard";
import ReactPaginate from "react-paginate";
import { getTotalPageByCount } from "../../utils";

const ShopCards = () => {
  const [listShop, setListShop] = useState([]);
  const [totalShops, setTotalShops] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [filter, setFilter] = useState("all");
  const [orderBy, setOrderBy] = useState("ASC");
  const [sortBy, setSortBy] = useState("name");
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getShops({ filter, orderBy, sortBy, limit, page });
  }, []);

  const handlePageClick = (event) => {
    const newPage = Number(event.selected + 1);

    getShops({ filter, orderBy, sortBy, limit, page: newPage });
  };

  const getShops = async ({ filter, orderBy, sortBy, limit, page }) => {
    try {
      const res = await getShopFilteredService({
        filter,
        orderBy,
        sortBy,
        limit,
        page,
      });
      if (res && res.data) {
        setListShop(res.data[0]);
        setTotalShops(res.data[1]);
        setTotalPages(getTotalPageByCount(res.data[1], limit));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="shops-container" className="mt-5 ">
      <div className="container">
        <div className="row" style={{ minHeight: "1000px" }}>
          {listShop &&
            listShop.map((shop) => {
              return (
                <div key={`shop ${shop.id}`} className="col-lg-3 mb-4 col-6">
                  <ShopCard
                    id={shop.id}
                    name={shop.name}
                    address={shop.address}
                    image={shop.image}
                    isWorking={shop.isWorking}
                  />
                </div>
              );
            })}
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="Tiếp >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={totalPages}
          previousLabel="< Trước"
          pageClassName="pag`e-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
        />
      </div>
    </section>
  );
};

export default ShopCards;
