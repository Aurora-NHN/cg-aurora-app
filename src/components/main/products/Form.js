import React from "react";

export default function Form() {
  return (
    <>
      <div className="woocommerce-MyAccount-content">
        <form>
          <h3>Shipping address</h3>
          <div className="woocommerce-address-fields">
            <div className="woocommerce-address-fields__field-wrapper">
              <p
                className="form-row form-row-first validate-required"
                id="shipping_first_name_field"
                data-priority="10"
              >
                <label htmlFor="shipping_first_name" className="">
                  First name
                  <abbr className="required" title="required">
                    *
                  </abbr>
                </label>
                <input
                  type="text"
                  className="input-text "
                  name="shipping_first_name"
                  id="shipping_first_name"
                  placeholder=""
                  value=""
                  autoComplete="given-name"
                  autoFocus="autofocus"
                />
              </p>
              <p
                className="form-row form-row-last validate-required"
                id="shipping_last_name_field"
                data-priority="20"
              >
                <label htmlFor="shipping_last_name" className="">
                  Last name
                  <abbr className="required" title="required">
                    *
                  </abbr>
                </label>
                <input
                  type="text"
                  className="input-text "
                  name="shipping_last_name"
                  id="shipping_last_name"
                  placeholder=""
                  value=""
                  autoComplete="family-name"
                />
              </p>
              <p
                className="form-row form-row-wide"
                id="shipping_company_field"
                data-priority="30"
              >
                <label htmlFor="shipping_company" className="">
                  Company name
                </label>
                <input
                  type="text"
                  className="input-text "
                  name="shipping_company"
                  id="shipping_company"
                  placeholder=""
                  value=""
                  autoComplete="organization"
                />
              </p>
              <p
                className="form-row form-row-wide address-field update_totals_on_change validate-required"
                id="shipping_country_field"
                data-priority="40"
              >
                <label htmlFor="shipping_country" className="">
                  Country
                  <abbr className="required" title="required">
                    *
                  </abbr>
                </label>
                <select
                  name="shipping_country"
                  id="shipping_country"
                  className="country_to_state country_select  select2-hidden-accessible"
                  autoComplete="country"
                  tabIndex="-1"
                  aria-hidden="true"
                >
                  <option value="">Select a country...</option>
                  <option value="AX">Åland Islands</option>
                  <option value="AF">Afghanistan</option>
                  <option value="AL">Albania</option>
                  <option value="DZ">Algeria</option>
                  <option value="AS">American Samoa</option>
                  <option value="AD">Andorra</option>
                </select>
              </p>
              <p
                className="form-row form-row-wide address-field validate-required"
                id="shipping_address_1_field"
                data-priority="50"
              >
                <label htmlFor="shipping_address_1" className="">
                  Street address
                  <abbr className="required" title="required">
                    *
                  </abbr>
                </label>
                <input
                  type="text"
                  className="input-text "
                  name="shipping_address_1"
                  id="shipping_address_1"
                  placeholder="House number and street name"
                  value=""
                  autoComplete="address-line1"
                />
              </p>
              <p
                className="form-row form-row-wide address-field"
                id="shipping_address_2_field"
                data-priority="60"
              >
                <input
                  type="text"
                  className="input-text "
                  name="shipping_address_2"
                  id="shipping_address_2"
                  placeholder="Apartment, suite, unit etc. (optional)"
                  value=""
                  autoComplete="address-line2"
                />
              </p>
              <p
                className="form-row form-row-wide address-field validate-required"
                id="shipping_city_field"
                data-priority="70"
                data-o_class="form-row form-row-wide address-field validate-required"
              >
                <label htmlFor="shipping_city" className="">
                  Town / City
                  <abbr className="required" title="required">
                    *
                  </abbr>
                </label>
                <input
                  type="text"
                  className="input-text "
                  name="shipping_city"
                  id="shipping_city"
                  placeholder=""
                  value=""
                  autoComplete="address-level2"
                />
              </p>
              <p
                className="form-row form-row-wide address-field validate-state validate-required"
                id="shipping_state_field"
                data-priority="80"
                data-o_class="form-row form-row-wide address-field validate-required validate-state"
              >
                <label htmlFor="shipping_state" className="">
                  State / County
                  <abbr className="required" title="required">
                    *
                  </abbr>
                </label>
                <input
                  type="text"
                  className="input-text "
                  value=""
                  placeholder=""
                  name="shipping_state"
                  id="shipping_state"
                  autoComplete="address-level1"
                />
              </p>
              <p
                className="form-row form-row-wide address-field validate-postcode validate-required"
                id="shipping_postcode_field"
                data-priority="90"
                data-o_class="form-row form-row-wide address-field validate-required validate-postcode"
              >
                <label htmlFor="shipping_postcode" className="">
                  Postcode / ZIP
                  <abbr className="required" title="required">
                    *
                  </abbr>
                </label>
                <input
                  type="text"
                  className="input-text "
                  name="shipping_postcode"
                  id="shipping_postcode"
                  placeholder=""
                  value=""
                  autoComplete="postal-code"
                />
              </p>
            </div>

            <p>
              <input
                type="submit"
                className="button"
                name="save_address"
                value="Save address"
              />
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
