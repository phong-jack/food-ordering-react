import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import SideBar from "./components/nav/SideBar";
import { useSelector } from "react-redux";
import { Route, Router, Routes, redirect } from "react-router-dom";
import { PAGE_ROUTER } from "./router/page.route";
import LoginModal from "./components/modals/LoginModal";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import "./App.scss";
import { ErrorPage } from "./pages/ErrorPage";
import NavBar from "./components/nav/NavBar";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import RegisterModal from "./components/modals/RegisterModal";

function App() {
  //State
  const [isShowLoginModal, setShowLoginModal] = useState(false);
  const [isShowRegisterModal, setShowRegisterModal] = useState(false);

  //Redux
  const user = useSelector((state) => state.auth?.login.currentUser);

  // Handle
  const handleCloseModal = () => {
    setShowLoginModal(false);
    setShowRegisterModal(false);
  };

  return (
    <>
      <Container fluid>
        <Row style={{ minHeight: "1000px" }}>
          <Col xs={12} md={2} lg={2}>
            <SideBar
              setShowLoginModal={setShowLoginModal}
              setShowRegisterModal={setShowRegisterModal}
            />
          </Col>

          <Col xs={12} md={10} lg={10}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop/:id" element={<ShopPage />} />

              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Col>
        </Row>
      </Container>

      <LoginModal
        isShowLoginModal={isShowLoginModal}
        setShowRegisterModal={setShowRegisterModal}
        handleCloseModal={handleCloseModal}
      />

      <RegisterModal
        isShowRegisterModal={isShowRegisterModal}
        handleCloseModal={handleCloseModal}
        setShowLoginModal={setShowLoginModal}
      />

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
