import { Link } from "react-router-dom";
import { PAGE_ROUTER } from "../../router/page.route";

const ShopCard = (props) => {
  const { id, name, address, image, isWorking, distance } = props;

  const defaultShopImage =
    "https://mms.img.susercontent.com/vn-11134517-7r98o-lqn24i7chcfw9c@resize_ss120x120!@crop_w120_h120_cT";

  return (
    <>
      <div className="w-80 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <img
          className="w-full h-40 object-cover rounded-t-lg"
          alt="shop image"
          src={image ? image : defaultShopImage}
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold overflow-text">{name}</h2>
          <p className="text-gray-600 overflow-text">{address}</p>
          <div className="flex justify-between items-center mt-4">
            <Link to={`${PAGE_ROUTER.SHOP}/${id}`}>
              <button className="bg-yellow-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
                Xem thêm
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCard;
