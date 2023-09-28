import React from 'react';

const RegisterModal = () => {
    return (
        <div className="modal fade popupRegistr" id="popupRegistr" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content ds bs box-shadow bordered overflow-visible s-overlay s-mobile-overlay">
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div className="modal-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h4 className="color-main2 mb-4">Registration</h4>
                                    <form className="form-registration c-mb-20 c-gutter-20" method="post" action="/">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input type="text" name="name" className="form-control" required
                                                           placeholder="login" aria-required="true"/>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input type="password" name="password" className="form-control"
                                                           placeholder="password" aria-required="true" required/>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input type="email" name="email" className="form-control"
                                                           placeholder="email" required aria-required="true"/>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input type="password" name="confirmPassword"
                                                           className="form-control" placeholder="password" required
                                                           aria-required="true"/>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input type="checkbox" id="agreed" name="agreed" value="agreed"
                                                           required aria-required="true"/><label htmlFor="agreed">I agree
                                                        to the rules</label>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-maincolor mt-30 d-block">Registration
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