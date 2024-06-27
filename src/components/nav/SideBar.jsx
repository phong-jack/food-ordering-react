import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DEFAULT_AVATAR_URL } from "../../utils/constants";

const SideBar = (props) => {
  //Props
  const { setShowLoginModal, setShowRegisterModal } = props;

  //Redux
  const user = useSelector((state) => state.auth.login.currentUser?.user);

  const handleFormRegister = () => {};

  return (
    <>
      <Sidebar
        backgroundColor="#e9fac8"
        style={{ height: "100%", width: "100%" }}
      >
        <Menu>
          <MenuItem component={<Link to="/" />}>HomePage (Shops)</MenuItem>
          <SubMenu {...props} label="Shop managerment">
            <MenuItem component={<Link to="/admin/product" />}>
              Product
            </MenuItem>
            <MenuItem component={<Link to="/admin/order" />}>Order</MenuItem>
            <MenuItem component={<Link to="/admin/report" />}>Report</MenuItem>
          </SubMenu>
        </Menu>

        <Nav className="align-items-center">
          {(user && (
            <>
              <img
                src={DEFAULT_AVATAR_URL}
                className="rounded-circle m-2 avatar"
                height={50}
                width={50}
              />
              <NavDropdown title={user.name} className="">
                <li>
                  <Link to="/order-history" className="dropdown-item">
                    Lịch sử đơn hàng
                  </Link>
                </li>
                <li>
                  <Link to="/profile" className="dropdown-item">
                    Cập nhật thông tin
                  </Link>
                </li>

                <NavDropdown.Divider />

                <Link
                  to="/"
                  className="dropdown-item"
                  onClick={() => handleLogout()}
                >
                  Đăng xuất
                </Link>
              </NavDropdown>
            </>
          )) || (
            <>
              <button
                className="btn btn-warning btn-rounded mx-2"
                onClick={() => setShowLoginModal(true)}
              >
                Đăng nhập
              </button>

              <button
                className="btn btn-warning btn-rounded"
                onClick={() => setShowRegisterModal(true)}
              >
                Đăng ký
              </button>
            </>
          )}
        </Nav>
      </Sidebar>
    </>
  );
};

export default SideBar;
