import React from "react";
import { withRouter } from "react-router";
import "./scss/addAddressForm.scss";
import { IHistory } from "../../../../interfaces";


interface IAddressFormState {}

class AddAddressFormImpl extends React.Component<any, IAddressFormState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <div className="col-md-7 col-sm-7 col-xs-12 ">
          <div className="form-group">
            <div className="row address-form">
              <div className="col-sm-6 odd_even_padding">
                <div className="control clearfix">
                  <label
                    className="control-label"
                    htmlFor="CC-checkoutAddressBook-szipcode"
                  >
                    Pin/Zip Code
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="sZip"
                    id="CC-checkoutAddressBook-szipcode"
                    placeholder="Pin/Zip Code"
                  />
                </div>
              </div>
              <div className="col-sm-6 odd_even_padding">
                <div className="control clearfix">
                  <label
                    className="control-label"
                    htmlFor="CC-checkoutAddressBook-scountry"
                    data-bind="widgetLocaleText:'countryText'"
                  >
                    Country
                  </label>
                  <select className="form-control" name="sCountry">
                    <option value="">Country</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                    <option value="AS">American Samoa</option>
                    <option value="AD">Andorra</option>
                    <option value="AO">Angola</option>
                    <option value="AI">Anguilla</option>
                    <option value="AG">Antigua and Barbuda</option>
                    <option value="AR">Argentina</option>
                    <option value="AM">Armenia</option>
                    <option value="AW">Aruba</option>
                    <option value="AU">Australia</option>
                    <option value="AT">Austria</option>
                    <option value="AZ">Azerbaijan</option>
                    <option value="BS">Bahamas</option>
                    <option value="BH">Bahrain</option>
                    <option value="BD">Bangladesh</option>
                    <option value="BB">Barbados</option>
                    <option value="BY">Belarus</option>
                    <option value="BE">Belgium</option>
                    <option value="BZ">Belize</option>
                    <option value="BJ">Benin</option>
                    <option value="BM">Bermuda</option>
                    <option value="BT">Bhutan</option>
                    <option value="BO">Bolivia</option>
                    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                    <option value="BA">Bosnia and Herzegovina</option>
                    <option value="BW">Botswana</option>
                    <option value="BR">Brazil</option>
                    <option value="BN">Brunei Darussalam</option>
                    <option value="BG">Bulgaria</option>
                    <option value="BF">Burkina Faso</option>
                    <option value="KH">Cambodia</option>
                    <option value="CM">Cameroon</option>
                    <option value="CA">Canada</option>
                    <option value="CV">Cape Verde</option>
                    <option value="KY">Cayman Islands</option>
                    <option value="TD">Chad</option>
                    <option value="CL">Chile</option>
                    <option value="CN">China</option>
                    <option value="CO">Colombia</option>
                    <option value="KM">Comoros</option>
                    <option value="CK">Cook Islands</option>
                    <option value="CR">Costa Rica</option>
                    <option value="CI">Côte d'Ivoire</option>
                    <option value="HR">Croatia</option>
                    <option value="CU">Cuba</option>
                    <option value="CW">Curaçao</option>
                    <option value="CY">Cyprus</option>
                    <option value="CZ">Czech Republic</option>
                    <option value="DK">Denmark</option>
                    <option value="DJ">Djibouti</option>
                    <option value="DM">Dominica</option>
                    <option value="DO">Dominican Republic</option>
                    <option value="EC">Ecuador</option>
                    <option value="EG">Egypt</option>
                    <option value="SV">El Salvador</option>
                    <option value="EE">Estonia</option>
                    <option value="ET">Ethiopia</option>
                    <option value="FK">Falkland Islands</option>
                    <option value="FO">Faroe Islands</option>
                    <option value="FJ">Fiji</option>
                    <option value="FI">Finland</option>
                    <option value="FR">France</option>
                    <option value="GA">Gabon</option>
                    <option value="GM">Gambia</option>
                    <option value="GE">Georgia</option>
                    <option value="DE">Germany</option>
                    <option value="GH">Ghana</option>
                    <option value="GI">Gibraltar</option>
                    <option value="GR">Greece</option>
                    <option value="GL">Greenland</option>
                    <option value="GD">Grenada</option>
                    <option value="GU">Guam</option>
                    <option value="GT">Guatemala</option>
                    <option value="GG">Guernsey</option>
                    <option value="GN">Guinea</option>
                    <option value="GW">Guinea-Bissau</option>
                    <option value="GY">Guyana</option>
                    <option value="HT">Haiti</option>
                    <option value="VA">Holy See (Vatican City State)</option>
                    <option value="HN">Honduras</option>
                    <option value="HK">Hong Kong</option>
                    <option value="HU">Hungary</option>
                    <option value="IS">Iceland</option>
                    <option value="IN">India</option>
                    <option value="ID">Indonesia</option>
                    <option value="IE">Ireland</option>
                    <option value="IT">Italy</option>
                    <option value="JM">Jamaica</option>
                    <option value="JP">Japan</option>
                    <option value="JE">Jersey</option>
                    <option value="JO">Jordan</option>
                    <option value="KE">Kenya</option>
                    <option value="KI">Kiribati</option>
                    <option value="KR">Korea, Republic of</option>
                    <option value="KW">Kuwait</option>
                    <option value="KG">Kyrgyzstan</option>
                    <option value="LA">Lao People's Democratic Rep.</option>
                    <option value="LV">Latvia</option>
                    <option value="LB">Lebanon</option>
                    <option value="LS">Lesotho</option>
                    <option value="LI">Liechtenstein</option>
                    <option value="LT">Lithuania</option>
                    <option value="LU">Luxembourg</option>
                    <option value="MK">Macedonia, Republic of</option>
                    <option value="MG">Madagascar</option>
                    <option value="MW">Malawi</option>
                    <option value="MY">Malaysia</option>
                    <option value="MV">Maldives</option>
                    <option value="MT">Malta</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MR">Mauritania</option>
                    <option value="MU">Mauritius</option>
                    <option value="MX">Mexico</option>
                    <option value="FM">Micronesia, Federated States</option>
                    <option value="MD">Moldova, Republic of</option>
                    <option value="MC">Monaco</option>
                    <option value="MN">Mongolia</option>
                    <option value="ME">Montenegro</option>
                    <option value="MS">Montserrat</option>
                    <option value="MA">Morocco</option>
                    <option value="MZ">Mozambique</option>
                    <option value="MM">Myanmar</option>
                    <option value="NA">Namibia</option>
                    <option value="NR">Nauru</option>
                    <option value="NP">Nepal</option>
                    <option value="NL">Netherlands</option>
                    <option value="NZ">New Zealand</option>
                    <option value="NI">Nicaragua</option>
                    <option value="NG">Nigeria</option>
                    <option value="NU">Niue</option>
                    <option value="NO">Norway</option>
                    <option value="OM">Oman</option>
                    <option value="PW">Palau</option>
                    <option value="PA">Panama</option>
                    <option value="PG">Papua New Guinea</option>
                    <option value="PY">Paraguay</option>
                    <option value="PE">Peru</option>
                    <option value="PH">Philippines</option>
                    <option value="PL">Poland</option>
                    <option value="PT">Portugal</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="QA">Qatar</option>
                    <option value="RO">Romania</option>
                    <option value="RW">Rwanda</option>
                    <option value="BL">Saint-Barthélemy</option>
                    <option value="SH">Saint Helena</option>
                    <option value="KN">Saint Kitts and Nevis</option>
                    <option value="LC">Saint Lucia</option>
                    <option value="WS">Samoa</option>
                    <option value="SM">San Marino</option>
                    <option value="ST">Sao Tome and Principe</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="SN">Senegal</option>
                    <option value="RS">Serbia</option>
                    <option value="SC">Seychelles</option>
                    <option value="SL">Sierra Leone</option>
                    <option value="SG">Singapore</option>
                    <option value="SX">Sint-Maarten</option>
                    <option value="SK">Slovakia</option>
                    <option value="SI">Slovenia</option>
                    <option value="SB">Solomon Islands</option>
                    <option value="ZA">South Africa</option>
                    <option value="ES">Spain</option>
                    <option value="LK">Sri Lanka</option>
                    <option value="VC">St Vincent and the Grenadines</option>
                    <option value="SR">Suriname</option>
                    <option value="SZ">Swaziland</option>
                    <option value="SE">Sweden</option>
                    <option value="CH">Switzerland</option>
                    <option value="TW">Taiwan</option>
                    <option value="TJ">Tajikistan</option>
                    <option value="TZ">Tanzania, United Republic of</option>
                    <option value="TH">Thailand</option>
                    <option value="TL">Timor-Leste</option>
                    <option value="TG">Togo</option>
                    <option value="TO">Tonga</option>
                    <option value="TT">Trinidad and Tobago</option>
                    <option value="TN">Tunisia</option>
                    <option value="TR">Turkey</option>
                    <option value="TM">Turkmenistan</option>
                    <option value="TC">Turks and Caicos Islands</option>
                    <option value="TV">Tuvalu</option>
                    <option value="UG">Uganda</option>
                    <option value="UA">Ukraine</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="GB">United Kingdom</option>
                    <option value="US">United States</option>
                    <option value="UY">Uruguay</option>
                    <option value="UZ">Uzbekistan</option>
                    <option value="VU">Vanuatu</option>
                    <option value="VE">Venezuela</option>
                    <option value="VN">Vietnam</option>
                    <option value="VI">Virgin Islands</option>
                    <option value="VG">Virgin Islands (British)</option>
                    <option value="ZM">Zambia</option>
                    <option value="ZW">Zimbabwe</option>
                  </select>
                  <span
                    className="text-danger"
                    id="CC-checkoutAddressBook-scountry-error"
                    data-bind="validationMessage: country"
                    role="alert"
                  ></span>
                </div>
              </div>
              <div className="col-sm-6 odd_even_padding">
                <div className="control clearfix">
                  <label
                    className="control-label"
                    htmlFor="CC-checkoutAddressBook-sstate"
                  >
                    State
                  </label>
                  <select
                    className="form-control"
                    name="sState"
                    id="CC-checkoutAddressBook-sstate"
                  >
                    <option value="">State/Region</option>
                    <option value="AN">Andaman and Nicobar Islands</option>
                    <option value="AP">Andhra Pradesh</option>
                    <option value="AR">Arunachal Pradesh</option>
                    <option value="AS">Assam</option>
                    <option value="BR">Bihar</option>
                    <option value="CH">Chandigarh</option>
                    <option value="CT">Chhattisgarh</option>
                    <option value="DN">Dadra and Nagar Haveli</option>
                    <option value="DD">Daman and Diu</option>
                    <option value="DL">Delhi</option>
                    <option value="GA">Goa</option>
                    <option value="GJ">Gujarat</option>
                    <option value="HR">Haryana</option>
                    <option value="HP">Himachal Pradesh</option>
                    <option value="JK">Jammu and Kashmir</option>
                    <option value="JH">Jharkhand</option>
                    <option value="KA">Karnataka</option>
                    <option value="KL">Kerala</option>
                    <option value="LD">Lakshadweep</option>
                    <option value="MP">Madhya Pradesh</option>
                    <option value="MH">Maharashtra</option>
                    <option value="MN">Manipur</option>
                    <option value="ML">Meghalaya</option>
                    <option value="MZ">Mizoram</option>
                    <option value="NL">Nagaland</option>
                    <option value="OR">Orissa</option>
                    <option value="PY">Pondicherry</option>
                    <option value="PB">Punjab</option>
                    <option value="RJ">Rajasthan</option>
                    <option value="SK">Sikkim</option>
                    <option value="TN">Tamil Nadu</option>
                    <option value="TS">Telangana</option>
                    <option value="TR">Tripura</option>
                    <option value="UT">Uttarakhand</option>
                    <option value="UP">Uttar Pradesh</option>
                    <option value="WB">West Bengal</option>
                  </select>
                  <span
                    className="text-danger"
                    id="CC-checkoutAddressBook-sstate-error"
                    data-bind="validationMessage: state"
                    role="alert"
                  ></span>
                </div>
              </div>
              <div className="col-sm-6 odd_even_padding">
                <div className="control clearfix">
                  <label
                    className="control-label"
                    htmlFor="CC-checkoutAddressBook-scity"
                    data-bind="widgetLocaleText:'cityText'"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="sCity"
                    id="CC-checkoutAddressBook-scity"
                    placeholder="City"
                  />

                  <span
                    className="text-danger"
                    id="CC-checkoutAddressBook-scity-error"
                    role="alert"
                  ></span>
                </div>
              </div>
              <div className="col-sm-6 odd_even_padding">
                <div className="control clearfix">
                  <label
                    className="control-label"
                    htmlFor="CC-checkoutAddressBook-sfirstname"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="sFirstName"
                    id="CC-checkoutAddressBook-sfirstname"
                    placeholder="First Name"
                  />
                  <span
                    className="text-danger"
                    id="CC-checkoutAddressBook-sfirstname-error"
                    role="alert"
                  ></span>
                </div>
              </div>
              <div className="col-sm-6 odd_even_padding">
                <div className="control clearfix">
                  <label
                    className="control-label"
                    htmlFor="CC-checkoutAddressBook-slastname"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="sLastName"
                    id="CC-checkoutAddressBook-slastname"
                    placeholder="Last Name"
                  />
                  <span
                    className="text-danger"
                    id="CC-checkoutAddressBook-slastname-error"
                  ></span>
                </div>
              </div>
              <div className="col-sm-6 odd_even_padding">
                <div className="control clearfix">
                  <label
                    className="control-label"
                    htmlFor="CC-checkoutAddressBook-saddress1"
                  >
                    Address Line 1
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="sAddressLine1"
                    id="CC-checkoutAddressBook-saddress1"
                    placeholder="Address Line 1"
                  />
                  <span
                    className="text-danger"
                    id="CC-checkoutAddressBook-saddress1-error"
                    role="alert"
                  ></span>
                </div>
              </div>
              <div className="col-sm-6 odd_even_padding">
                <div className="control clearfix">
                  <label
                    className="control-label no_star_label"
                    htmlFor="CC-checkoutAddressBook-saddress2"
                  >
                    Address Line 2
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="sAddressLine2"
                    id="CC-checkoutAddressBook-saddress2"
                    placeholder="Address Line 2"
                  />
                </div>
              </div>
              <div className="col-sm-6  odd_even_padding">
                <div className="control clearfix">
                  <label
                    className="control-label"
                    htmlFor="CC-checkoutAddressBook-sphone"
                  >
                    Mobile
                  </label>
                  <input
                    type="tel"
                    className="form-control CC-checkoutAddressBook-sphone"
                    name="sPhone"
                    id="CC-checkoutAddressBook-sphone"
                    placeholder="Mobile"
                  />
                  <span
                    className="text-danger"
                    id="CC-checkoutAddressBook-sphone-mandatory-error"
                    role="alert"
                  ></span>
                </div>
              </div>
            </div>
            <div className="row add-address-form-action">
              <div className="save_continue_btn">
                <button className="cc-button-primary" onClick={this.props.handleForm}>
                  <span data-bind="widgetLocaleText: 'saveAddressText'">
                    Save &amp; Continue
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const AddAddressForm = withRouter(AddAddressFormImpl);
export default AddAddressForm;
