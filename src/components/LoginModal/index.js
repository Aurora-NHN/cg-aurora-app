import React from 'react';
import {GoogleLogin, GoogleOAuthProvider} from "@react-oauth/google";

const LoginModal = () => {
    const handleGGLogin = (credential) => {

    }

    return (
        <div className="modal fade popupLogin" id="popupLogin" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content ds bs box-shadow bordered overflow-visible s-overlay s-mobile-overlay">
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div className="modal-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h4 className="color-main2 mb-3">Log in</h4>
                                    <form className="form-registration c-mb-20 c-gutter-20" action="/">
                                        <div className="row mb-4">
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <input type="text" name="name" className="form-control" required
                                                           placeholder="login" aria-required="true"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <input type="password" name="password" className="form-control"
                                                           placeholder="password" aria-required="true" required/>
                                                </div>
                                            </div>
                                        </div>
                                        <a className="registerRedirect " data-dismiss="modal"
                                           data-target="#popupRegistr" data-toggle="modal" href="#">Not a member?
                                            Register!</a>
                                        <button type="submit" className="btn btn-maincolor mt-30 d-block">Sign In
                                        </button>
                                    </form>
                                    <GoogleOAuthProvider clientId={"86930945868-mi125c29avhqlsh88uac5ervmsln3qhd.apps.googleusercontent.com"}>
                                        <GoogleLogin onSuccess={handleGGLogin}/>
                                    </GoogleOAuthProvider>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;