import React from 'react'

export default function AccountDetail() {
  return (
    <section class="ds s-py-90 s-py-xl-150 c-gutter-60">
				<div class="container">
					<div class="row">

						<main class="col-lg-12">
							<article>
								<header class="entry-header">
									<h1 class="entry-title">Account details</h1>
									<span class="edit-link">
										<a class="post-edit-link" href="#">Edit
											<span class="screen-reader-text"> "My account"
											</span>
										</a>
									</span>
								</header>
								
								<div class="entry-content">
									<div class="woocommerce">
										<nav class="woocommerce-MyAccount-navigation">
											<ul>
												<li>
													<a href="shop-account-dashboard.html">Dashboard</a>
												</li>
												<li>
													<a href="shop-account-orders.html">Orders</a>
												</li>
												<li>
													<a href="shop-account-downloads.html">Downloads</a>
												</li>
												<li>
													<a href="shop-account-addresses.html">Addresses</a>
												</li>
												<li class="is-active">
													<a href="shop-account-details.html">Account details</a>
												</li>
												<li>
													<a href="shop-account-login.html">Logout</a>
												</li>
											</ul>
										</nav>


										<div class="woocommerce-MyAccount-content">

											<form class="woocommerce-EditAccountForm edit-account" action="/" method="post">


												<p class="woocommerce-form-row woocommerce-form-row--first form-row form-row-first">
													<label for="account_first_name">First name <span class="required">*</span>
													</label>
													<input type="text" class="woocommerce-Input woocommerce-Input--text input-text" name="account_first_name" id="account_first_name" value=""/>
												</p>
												<p class="woocommerce-form-row woocommerce-form-row--last form-row form-row-last">
													<label for="account_last_name">Last name <span class="required">*</span>
													</label>
													<input type="text" class="woocommerce-Input woocommerce-Input--text input-text" name="account_last_name" id="account_last_name" value=""/>
												</p>
												<div class="clear">

												</div>

												<p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
													<label for="account_email">Email address <span class="required">*</span>
													</label>
													<input type="email" class="woocommerce-Input woocommerce-Input--email input-text" name="account_email" id="account_email" value="admin@test.com"/>
												</p>

												<fieldset>
													<legend>Password change</legend>

													<p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
														<label for="password_current">Current password (leave blank to leave unchanged)</label>
														<input type="password" class="woocommerce-Input woocommerce-Input--password input-text" name="password_current" id="password_current"/>
													</p>
													<p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
														<label for="password_1">New password (leave blank to leave unchanged)</label>
														<input type="password" class="woocommerce-Input woocommerce-Input--password input-text" name="password_1" id="password_1"/>
													</p>
													<p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
														<label for="password_2">Confirm new password</label>
														<input type="password" class="woocommerce-Input woocommerce-Input--password input-text" name="password_2" id="password_2"/>
													</p>
												</fieldset>
												<div class="clear"></div>
												<p>
													<input type="submit" class="woocommerce-Button button" name="save_account_details" value="Save changes"/>
												</p>
											</form>

										</div>
									</div>
								</div>
								
							</article>

						</main>

					</div>

				</div>
			</section>
  )
}
