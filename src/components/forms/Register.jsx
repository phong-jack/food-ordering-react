import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { UserRoleArray } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUserService } from "../../services/auth.service";

const Register = (props) => {
  const { handleCloseModal, setShowLoginModal } = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState();

  const handleClickLogin = () => {
    handleCloseModal();
    setShowLoginModal(true);
  };

  const handleRegisterUser = async () => {
    if (areFieldsEmpty) {
      toast.error("Input can not null");
      return;
    }

    const validPassword = password === confirmPassword;
    if (!validPassword) {
      toast.error("Password does not match");
      return;
    }

    const newUser = {
      firstName,
      lastName,
      email,
      phone,
      username,
      password,
      role,
    };
    try {
      const res = await registerUserService(newUser, dispatch, navigate);

      if (res && res.data) {
        toast.success("Regiser success, check your email!");
        resetFields();
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const resetFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setUserName("");
    setPassword("");
    setConfirmPassword("");
  };

  const areFieldsEmpty = () => {
    return (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      phone === "" ||
      username === "" ||
      password === "" ||
      confirmPassword === ""
    );
  };

  return (
    <>
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Create new account</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="firstName"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="lastName"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="phone"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Form.Select
            aria-label="Default select example "
            className="w-full p-3 rounded mb-4"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            {UserRoleArray.map((role, index) => {
              return (
                <>
                  <option value={role}>{role}</option>
                </>
              );
            })}
          </Form.Select>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => handleRegisterUser()}
            >
              Resister
            </button>
          </div>
        </div>

        <div className="text-grey-dark mt-6">
          Already have an account?
          <button
            className="no-underline border-b border-blue text-blue"
            onClick={handleClickLogin}
          >
            Log in
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
