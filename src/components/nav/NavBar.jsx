import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/react.svg";
import { useSelector } from "react-redux";

const NavBar = () => {
  const user = useSelector((state) => state.auth.login.currentUser);

  const handleFormLogin = () => {};

  const handleFormRegister = () => {};

  const handleClickSearch = () => {};

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="" width="30" height="30" className="" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="" className="btn mx-2">
                Đồ Ăn
              </Link>
              <Link to="" className="btn mx-2">
                Thức uống
              </Link>
              <Link to="" className="btn mx-2">
                Đồ nhậu
              </Link>
            </Nav>
            <Nav className="align-items-center">
              <div className="btn" onClick={() => handleClickSearch()}>
                {" "}
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              {(user && (
                <>
                  <Link to="/order-card">
                    <i
                      className="fa-solid fa-cart-shopping m-2"
                      style={{ color: "orange" }}
                    >
                      <span className="badge rounded-pill badge-notification bg-danger">
                        {order?.orderDetails ? order.orderDetails.length : 0}
                      </span>
                    </i>
                  </Link>
                  <img
                    src={user.image}
                    className="rounded-circle m-2"
                    height={25}
                  />
                  <NavDropdown title={user.fullName} className="">
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
                    onClick={handleFormLogin}
                  >
                    Đăng nhập
                  </button>

                  <button
                    className="btn btn-warning btn-rounded"
                    onClick={handleFormRegister}
                  >
                    Đăng ký
                  </button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
