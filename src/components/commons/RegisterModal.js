import React, { useState } from "react";
import { registerUser } from "../../features/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const RegisterModal = () => {
  const [registerData, setRegisterData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(event) {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit() {
    dispatch(registerUser(registerData));
    
    navigate("/");
  }

  return (
    <div
      className="modal fade popupRegistr"
      id="popupRegistr"
      tabIndex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content ds bs box-shadow bordered overflow-visible s-overlay s-mobile-overlay">
          <button
            type="button"
            className="close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <div className="modal-body">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h4 className="color-main2 mb-4">Registration</h4>
                  <form className="form-registration c-mb-20 c-gutter-20">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            type="text"
                            name="fullName"
                            className="form-control"
                            required
                            placeholder="Full Name"
                            aria-required="true"
                            value={registerData.fullName || ""}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            type="text"
                            name="username"
                            className="form-control"
                            placeholder="Username"
                            aria-required="true"
                            required
                            value={registerData.username || ""}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Password"
                            aria-required="true"
                            required
                            value={registerData.password || ""}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            required
                            aria-required="true"
                            value={registerData.email || ""}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            type="text"
                            name="phoneNumber"
                            className="form-control"
                            placeholder="Phone Number"
                            required
                            aria-required="true"
                            value={registerData.phoneNumber || ""}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <select
                            name="gender"
                            className="form-control"
                            required
                            aria-required="true"
                            value={registerData.gender || ""}
                            onChange={handleChange}
                          >
                            <option value="Gender" disabled selected hidden>
                              Gender
                            </option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            type="checkbox"
                            id="agreed"
                            name="agreed"
                            value="agreed"
                            required
                            aria-required="true"
                          />
                          <label htmlFor="agreed">I agree to the rules</label>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-maincolor mt-30 d-block"
                      onClick={handleSubmit}
                    >
                      Registration
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
