import React from "react";
import './from.scss'

export class Payment_Methods_Menu extends React.Component {
    state = {
        selected: 'credit_card',
        credit_card: {card_number:null,card_name:null,month:null,year:null,cvv:null},
        bank:null,
        upi:null,
        google_pay:null,
        wallet:null,
        loyalty:null,
        emi:{bank:null,card_number:null,card_name:null,month:null,year:null,cvv:null}
    };

    valueChange = (event: any) => {
        console.log(event.target.value)
        const { value } = event.target
        this.setState({
            selected: value
        })
    }
    creditCard = (event: any) => {
        console.log(event.target.value)
        const { name,value } = event.target
        this.setState({
            credit_card: {...this.state.credit_card, [name]:value }
        })
        console.log(this.state.credit_card)
    }
    onChange = (event: any) => {
        console.log(event.target.value)
        const { name,value } = event.target
        this.setState({
            [name]: value 
        })
    }
    emi = (event: any) => {
        console.log(event.target.value)
        const { name,value } = event.target
        this.setState({
            credit_card: {...this.state.emi, [name]:value }
        })
        console.log(this.state.emi)
    }
    render() {
        const {selected} = this.state
        return (
            <div>
                {/*Second page*/}
                <div className="main_payment_wrapper clearfix">
                    <legend className="" id="checkoutGenericPaymentDetails-header">
                        Make Payment
                    </legend>
                    {/*Payment menu*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-3 no-padding ">
                                <div className="payment_desc">
                                    <div className="payment_button">
                                        <button style={{ display: "none" }}>
                                            <span>Saved Card</span>
                                        </button>
                                    </div>
                                    <div className="payment_button">
                                        <button className="nav_button_payment" value="credit_card" onClick={this.valueChange}>
                                            <span>Credit / Debit card</span>
                                        </button>
                                    </div>
                                    <div className="payment_button">
                                        <button className="nav_button_payment" value="net_banking" onClick={this.valueChange}>
                                            <span>Net Banking</span>
                                        </button>
                                    </div>

                                    <div className="payment_button">
                                        <button
                                            className="nav_button_payment"
                                            style={{ display: "none" }}
                                        >
                                            <span>PayPal</span>
                                        </button>
                                    </div>

                                    <div className="payment_button">
                                        <button className="nav_button_payment" value="upi" onClick={this.valueChange}>
                                            <span>UPI</span>
                                        </button>
                                    </div>
                                    <div className="payment_button">
                                        <button className="nav_button_payment" value="google_pay" onClick={this.valueChange}>
                                            <span>Google Pay</span>
                                        </button>
                                    </div>
                                    <div className="payment_button">
                                        <button className="nav_button_payment" value="wallet" onClick={this.valueChange}>
                                            <span>Wallet</span>
                                        </button>
                                    </div>

                                    <div className="pay_section">
                                        <div className="payment_button">
                                            <button className="nav_button_payment" value="loyalty" onClick={this.valueChange}>
                                                <span>Loyalty Points</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div
                                        className="payment_button intiateLazyPay"
                                        style={{ display: "none" }}
                                    >
                                        <button>
                                            <span>LazyPay</span>
                                        </button>
                                    </div>
                                    <div className="payment_button">
                                        <button value="emi" onClick={this.valueChange}>
                                            <span>EMI</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/*First Payment Method*/}
                            <div className="col-md-9 col-sm-9 no-padding ">
                                <div className="payment_desc">
                                    <div className="amex_banner clearfix">
                                        <img
                                            width={80}
                                            style={{ marginRight: "5px" }}
                                            src="https://www.fabindia.com/file/general/logo-hdfc.png"
                                        />
                                        <span className="banner_desc">
                                            Get <strong>10% discount</strong> on{" "}
                                            <strong>Rs. 5000/-</strong> or above with your HDFC card.
                                        T&amp;C apply.
                                        </span>
                                    </div>

                                    <div className="container">
                                        <div className="row justify-content-center">
                                            {selected == 'credit_card' && (
                                                <div id="wi2800002-ppCardDetailsForm-id">
                                                    <div id="checkoutPaymentDetails">
                                                        <legend id="CC-checkoutPaymentDetails-legend">
                                                            Enter your card details
                                                        </legend>

                                                        <fieldset id="paymentDetails">
                                                            <div>
                                                                <div className="form-group col-sm-6">
                                                                    <label
                                                                        className="control-label required-label"
                                                                        id="CC-checkoutPaymentDetails-cardNumber-label"
                                                                        htmlFor="CC-checkoutPaymentDetails-cardNumber"
                                                                    >
                                                                        Card Number*
                              </label>
                                                                    <div className="control clearfix payment_card_num">
                                                                        <input
                                                                            aria-required="true"
                                                                            type="text"
                                                                            className="form-control "
                                                                            id="CC-checkoutPaymentDetails-cardNumber"
                                                                            name="card_number"
                                                                            placeholder="Card Number"
                                                                            onChange={this.creditCard}
                                                                            required
                                                                        />
                                                                        <div className="payment_type_icon">
                                                                            <img />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div>
                                                                <div className="form-group col-sm-6">
                                                                    <label
                                                                        className="control-label required-label"
                                                                        id="CC-checkoutPaymentDetails-nameOnCard-label"
                                                                        htmlFor="CC-checkoutPaymentDetails-nameOnCardLabel"
                                                                    >
                                                                        Name on Card*
                              </label>
                                                                    <div className="control clearfix">
                                                                        <input
                                                                            aria-required="true"
                                                                            type="text"
                                                                            className="form-control "
                                                                            id="CC-checkoutPaymentDetails-nameOnCardLabel"
                                                                            name="card_name"
                                                                            onChange={this.creditCard}
                                                                            placeholder="Name on Card"
                                                                            required
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="form-group expires_label col-sm-12">
                                                                    <label className="control-label required-label">
                                                                        Expires On*
                              </label>
                                                                </div>
                                                                <div className="form-group expire_box col-md-4 col-sm-4">
                                                                    <div className="control clearfix">
                                                                        <select
                                                                            className="form-control "
                                                                            id="CC-checkoutPaymentDetails-endMonth"
                                                                            name="month"
                                                                            onChange={this.creditCard}
                                                                            required
                                                                        >
                                                                            <option>Month</option>
                                                                            <option value={1}>1</option>
                                                                            <option value={2}>2</option>
                                                                            <option value={3}>3</option>
                                                                            <option value={4}>4</option>
                                                                            <option value={5}>5</option>
                                                                            <option value={6}>6</option>
                                                                            <option value={7}>7</option>
                                                                            <option value={8}>8</option>
                                                                            <option value={9}>9</option>
                                                                            <option value={10}>10</option>
                                                                            <option value={11}>11</option>
                                                                            <option value={12}>12</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group expire_box col-md-4 col-sm-4">
                                                                    <div className="control clearfix">
                                                                        <select
                                                                            aria-required="true"
                                                                            className="form-control "
                                                                            id="CC-checkoutPaymentDetails-endYear"
                                                                            name="year"
                                                                            onChange={this.creditCard}
                                                                        >
                                                                            <option>Year</option>
                                                                            <option value={2020}>2020</option>
                                                                            <option value={2021}>2021</option>
                                                                            <option value={2022}>2022</option>
                                                                            <option value={2023}>2023</option>
                                                                            <option value={2024}>2024</option>
                                                                            <option value={2025}>2025</option>
                                                                            <option value={2026}>2026</option>
                                                                            <option value={2027}>2027</option>
                                                                            <option value={2028}>2028</option>
                                                                            <option value={2029}>2029</option>
                                                                            <option value={2030}>2030</option>
                                                                            <option value={2031}>2031</option>
                                                                            <option value={2032}>2032</option>
                                                                            <option value={2033}>2033</option>
                                                                            <option value={2034}>2034</option>
                                                                            <option value={2035}>2035</option>
                                                                            <option value={2036}>2036</option>
                                                                            <option value={2037}>2037</option>
                                                                            <option value={2038}>2038</option>
                                                                            <option value={2039}>2039</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group expire_box col-md-3 col-sm-3">
                                                                    <div className="control clearfix">
                                                                        <div className="col-sm-12 no-padding">
                                                                            <input
                                                                                aria-required="true"
                                                                                type="password"
                                                                                className="form-control "
                                                                                id="CC-checkoutPaymentDetails-cardCVV"
                                                                                name="cvv"
                                                                                onChange={this.creditCard}
                                                                                placeholder="CVV"
                                                                                required
                                                                            />
                                                                        </div>
                                                                        <div className=" cc-checkout-payment-details-cvv-row">
                                                                            <span
                                                                                id="CC-checkoutPaymentDetails-cardCVV-whatsthis"
                                                                                className="cvvPopover"
                                                                                data-toggle="popover"
                                                                                title="CVV"
                                                                                data-content="The last 3 digits found on your card's
                                  signature strip."
                                                                                data-placement="right"
                                                                                tabIndex={0}
                                                                                aria-label="?"
                                                                            >
                                                                                ?
                                  </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </fieldset>
                                                        <div>
                                                            <button
                                                                className="cc-button-payment"
                                                                style={{ backgroundColor: "#e5cc76" }}
                                                            >
                                                                <span>Pay now</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/*Net Banking*/}
                                            {selected == 'net_banking' && (
                                                <div id="wi2800002-ppNetBankingPayment-id">
                                                    <div>
                                                        <div className="mt-5">
                                                            <div className="netbanking_wrapper clearfix">
                                                                <div id="CC-CCAveButtonId" className="col-md-12">
                                                                    <div className="form-group col-sm-6">
                                                                        <label className="control-label required-label">
                                                                            Select a bank:
                                </label>
                                                                    </div>
                                                                    <div className="control clearfix">
                                                                        <select
                                                                            name="bank"
                                                                            className="form-control select_netbanking"
                                                                            onChange={this.onChange}
                                                                        >
                                                                            <option>Select a bank</option>
                                                                            <option value="Airtel Payments Bank">
                                                                                Airtel Payments Bank
                                  </option>
                                                                            <option value="Allahabad Bank">
                                                                                Allahabad Bank
                                  </option>
                                                                            <option value="Andhra Bank">
                                                                                Andhra Bank
                                  </option>
                                                                            <option value="AU Small Finance Bank">
                                                                                AU Small Finance Bank
                                  </option>
                                                                            <option value="Axis Bank">Axis Bank</option>
                                                                            <option value="Bandhan Bank">
                                                                                Bandhan Bank
                                  </option>
                                                                            <option value="Bank of Baharin and Kuwait">
                                                                                Bank of Baharin and Kuwait
                                  </option>
                                                                            <option value="Bank of Baroda Corporate">
                                                                                Bank of Baroda Corporate
                                  </option>
                                                                            <option value="Bank of Baroda Retail">
                                                                                Bank of Baroda Retail
                                  </option>
                                                                            <option value="Bank of India">
                                                                                Bank of India
                                  </option>
                                                                            <option value="Bank of Maharashtra">
                                                                                Bank of Maharashtra
                                  </option>
                                                                            <option value="Canara Bank">
                                                                                Canara Bank
                                  </option>
                                                                            <option value="Catholic Syrian Bank">
                                                                                Catholic Syrian Bank
                                  </option>
                                                                            <option value="Central Bank of India">
                                                                                Central Bank of India
                                  </option>
                                                                            <option value="City Union Bank">
                                                                                City Union Bank
                                  </option>
                                                                            <option value="Corporation Bank">
                                                                                Corporation Bank
                                  </option>
                                                                            <option value="Cosmos Bank">
                                                                                Cosmos Bank
                                  </option>
                                                                            <option value="DCB Bank">DCB Bank</option>
                                                                            <option value="DCB BANK Business">
                                                                                DCB BANK Business
                                  </option>
                                                                            <option value="Deutsche Bank">
                                                                                Deutsche Bank
                                  </option>
                                                                            <option value="Dhanlaxmi Bank">
                                                                                Dhanlaxmi Bank
                                  </option>
                                                                            <option value="Equitas Small Finance Bank">
                                                                                Equitas Small Finance Bank
                                  </option>
                                                                            <option value="Federal Bank">
                                                                                Federal Bank
                                  </option>
                                                                            <option value="HDFC Bank">HDFC Bank</option>
                                                                            <option value="HSBC">HSBC</option>
                                                                            <option value="ICICI Bank">
                                                                                ICICI Bank
                                  </option>
                                                                            <option value="IDBI Bank">IDBI Bank</option>
                                                                            <option value="IDFC FIRST Bank">
                                                                                IDFC FIRST Bank
                                  </option>
                                                                            <option value="Indian Bank">
                                                                                Indian Bank
                                  </option>
                                                                            <option value="Indian Overseas Bank">
                                                                                Indian Overseas Bank
                                  </option>
                                                                            <option value="IndusInd Bank">
                                                                                IndusInd Bank
                                  </option>
                                                                            <option value="Jammu and kashmir Bank">
                                                                                Jammu and kashmir Bank
                                  </option>
                                                                            <option value="Jana Small Finance Bank">
                                                                                Jana Small Finance Bank
                                  </option>
                                                                            <option value="JANATA SAHAKARI BANK LTD PUNE">
                                                                                JANATA SAHAKARI BANK LTD PUNE
                                  </option>
                                                                            <option value="Karnataka Bank">
                                                                                Karnataka Bank
                                  </option>
                                                                            <option value="Karur Vysya Bank">
                                                                                Karur Vysya Bank
                                  </option>
                                                                            <option value="Kotak Mahindra Bank">
                                                                                Kotak Mahindra Bank
                                  </option>
                                                                            <option value="Lakshmi Vilas Bank">
                                                                                Lakshmi Vilas Bank
                                  </option>
                                                                            <option value="NKGSB Co-op Bank Ltd">
                                                                                NKGSB Co-op Bank Ltd
                                  </option>
                                                                            <option value="Oriental Bank Of Commerce">
                                                                                Oriental Bank Of Commerce
                                  </option>
                                                                            <option value="Punjab And Sind Bank">
                                                                                Punjab And Sind Bank
                                  </option>
                                                                            <option value="Punjab National Bank [Corporate]">
                                                                                Punjab National Bank [Corporate]
                                  </option>
                                                                            <option value="Punjab National Bank [Retail]">
                                                                                Punjab National Bank [Retail]
                                  </option>
                                                                            <option value="RBL Bank">RBL Bank</option>
                                                                            <option value="Saraswat Bank">
                                                                                Saraswat Bank
                                  </option>
                                                                            <option value="Shamrao Vithal Bank">
                                                                                Shamrao Vithal Bank
                                  </option>
                                                                            <option value="South Indian Bank">
                                                                                South Indian Bank
                                  </option>
                                                                            <option value="Standard Chartered Bank">
                                                                                Standard Chartered Bank
                                  </option>
                                                                            <option value="State Bank of India">
                                                                                State Bank of India
                                  </option>
                                                                            <option value="Suryoday Small Finance Bank Ltd">
                                                                                Suryoday Small Finance Bank Ltd
                                  </option>
                                                                            <option value="Syndicate Bank">
                                                                                Syndicate Bank
                                  </option>
                                                                            <option value="Tamilnad Mercantile Bank">
                                                                                Tamilnad Mercantile Bank
                                  </option>
                                                                            <option value="UCO Bank">UCO Bank</option>
                                                                            <option value="Ujjivan Small Finance Bank">
                                                                                Ujjivan Small Finance Bank
                                  </option>
                                                                            <option value="Union Bank of India">
                                                                                Union Bank of India
                                  </option>
                                                                            <option value="United Bank of India">
                                                                                United Bank of India
                                  </option>
                                                                            <option value="Vijaya Bank">
                                                                                Vijaya Bank
                                  </option>
                                                                            <option value="YES Bank">YES Bank</option>
                                                                        </select>
                                                                    </div>
                                                                    <div>
                                                                        <button
                                                                            className="cc-button-payment mt-3"
                                                                            style={{ backgroundColor: "#e5cc76" }}
                                                                        >
                                                                            <span>Pay now</span>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {selected == 'upi' && (
                                                <div id="wi2800002-ppGooglePayForm-id">
                                                    <div id="checkoutPaymentDetails">
                                                        <legend id="CC-checkoutPaymentDetails-legend">
                                                            Enter your details
                        </legend>
                                                        <p className="payuUPI-p font-weight-bold">
                                                            Enter your VPA
                        </p>
                                                        <input
                                                            aria-required="true"
                                                            type="text"
                                                            className="form-control"
                                                            name="upi"
                                                            onChange={this.onChange}
                                                            placeholder="yourname@bankname"
                                                            required
                                                        />
                                                        <button
                                                            className="cc-button-payment2 mt-3"
                                                            style={{ backgroundColor: "#e5cc76" }}
                                                        >
                                                            <span>Pay now</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            )}

                                            {selected == 'google_pay' && (
                                                <div id="wi2800002-ppGooglePayForm-id">
                                                    <div id="checkoutPaymentDetails">
                                                        <legend id="CC-checkoutPaymentDetails-legend">
                                                            Enter your details
                      </legend>
                                                        <p className="payuUPI-p font-weight-bold">
                                                            Enter your VPA
                      </p>
                                                        <input
                                                            aria-required="true"
                                                            type="text"
                                                            className="form-control"
                                                            name="google_pay"
                                                            onChange={this.onChange}
                                                            placeholder="yourname@bankname"
                                                            required
                                                        />
                                                        <button
                                                            className="cc-button-payment2 mt-3"
                                                            style={{ backgroundColor: "#e5cc76" }}
                                                        >
                                                            <span>Pay now</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            )}

                                            {selected == 'wallet' && (
                                                <div id="wi2800002-ppNetBankingPayment-id">
                                                    <div>
                                                        <div className="row justify-content-center">
                                                            <div className="netbanking_wrapper clearfix">
                                                                <div id="CC-CCAveButtonId" className="col-md-12">
                                                                    <div className="form-group">
                                                                        <label className="control-label required-label">
                                                                            Select a Wallet:
                                </label>
                                                                    </div>
                                                                    <div className="control clearfix">
                                                                        <select
                                                                            name="wallet"
                                                                            className="form-control select_netbanking"
                                                                            onChange={this.onChange}
                                                                        >
                                                                            <option>Select a Wallet</option>
                                                                            <option value="FREC">Freecharge</option>
                                                                            <option value="AMON">Airtel Money</option>
                                                                            <option value="AMZPAY">Amazon Pay</option>
                                                                            <option value="paytm">Paytm</option>
                                                                            <option value="PHONEPE">PhonePe</option>
                                                                            <option value="AMEXZ">
                                                                                Amex easy click
                                  </option>
                                                                            <option value="ITZC">ItzCash</option>
                                                                            <option value="OLAM">Ola Money</option>
                                                                            <option value="OXICASH">Oxigen</option>
                                                                            <option value="PAYZ">HDFC PayZapp</option>
                                                                            <option value="YESW">Yesbank</option>
                                                                            <option value="PAYCASH">Paycash</option>
                                                                            <option value="JIOM">Jio Money</option>
                                                                            <option value="CPMC">
                                                                                Citibank Reward Points
                                  </option>
                                                                        </select>
                                                                    </div>
                                                                    <div>
                                                                        <button
                                                                            className="cc-button-payment mt-3"
                                                                            style={{ backgroundColor: "#e5cc76" }}
                                                                        >
                                                                            <span>Pay now</span>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {selected == 'loyalty' && (
                                                <div id="wi2800002-ppRedeemPointsPayment-id">
                                                    <div>
                                                        <div>
                                                            <div className="reedem-pts">
                                                                <div className="reedem-pts-info">
                                                                    <span className="your-pts font-weight-bold">
                                                                        Redeem Points
                              </span>
                                                                    <span className="your-pts-info push-right">
                                                                        <span className="your-pts-currency font-weight-bold">
                                                                            Pts.
                                </span>
                                                                        <span className="your-pts-currency font-weight-bold">
                                                                            0
                                </span>
                                                                    </span>
                                                                    <p className="your-pts-balance">
                                                                        Available Balance Pts.
                                <span className="your-pts-balance">0</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <hr />
                                                            <div className="generate_otp">
                                                                <div className="mob_no_cod remove-pts-screen">
                                                                    <div>
                                                                        <span className="font-weight-bold h5">
                                                                            Mobile Number:
                                </span>
                                                                        <span className="h5">6945559994</span>
                                                                        <a className="edit-mobile-no ml-1">
                                                                            <img
                                                                                src="https://www.fabindia.com/file/general/edit-2.png"
                                                                                width="16px"
                                                                            />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div />
                                                    </div>
                                                </div>
                                            )}

                                            {selected == 'emi' && (
                                                <div id="wi2800002-ppCardDetailsForm-id">
                                                    <div id="checkoutPaymentDetails">
                                                        <legend id="CC-checkoutPaymentDetails-legend">
                                                            Enter your card details
                        </legend>

                                                        <fieldset id="paymentDetails">
                                                            <div>
                                                                <div className="form-group col-sm-6">
                                                                    <div className="control clearfix">
                                                                        <select
                                                                            id="emiBank"
                                                                            aria-required="true"
                                                                            className="form-control"
                                                                            name="bank"
                                                                            onChange={this.onChange}
                                                                        >
                                                                            <option disabled>
                                                                                Select Bank..
                                  </option>
                                                                            <option value="AXIS">AXIS</option>
                                                                            <option value="HDFC">HDFC</option>
                                                                            <option value="CITI">CITI</option>
                                                                            <option value="ICICI">ICICI</option>
                                                                            <option value="AMEX">AMEX</option>
                                                                            <option value="AXISD">AXISD</option>
                                                                            <option value="SBI">SBI</option>
                                                                            <option value="KOTAK">KOTAK</option>
                                                                            <option value="BOB">BOB</option>
                                                                            <option value="INDUS">INDUS</option>
                                                                            <option value="SCB">SCB</option>
                                                                            <option value="YES">YES</option>
                                                                            <option value="HDFCD">HDFCD</option>
                                                                            <option value="HSBC">HSBC</option>
                                                                            <option value="RBL">RBL</option>
                                                                            <option value="ZESTMON">ZESTMON</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="form-group col-sm-6">
                                                                    <label
                                                                        className="control-label required-label"
                                                                        id="CC-checkoutPaymentDetails-cardNumber-label"
                                                                        htmlFor="CC-checkoutPaymentDetails-cardNumber"
                                                                    >
                                                                        Card Number*
                              </label>
                                                                    <div className="control clearfix payment_card_num">
                                                                        <input
                                                                            aria-required="true"
                                                                            type="text"
                                                                            className="form-control "
                                                                            id="CC-checkoutPaymentDetails-cardNumber"
                                                                            name="card_number"
                                                                            onChange={this.emi}
                                                                            placeholder="Card Number"
                                                                            required
                                                                        />
                                                                        <div className="payment_type_icon">
                                                                            <img />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div>
                                                                <div className="form-group col-sm-6">
                                                                    <label
                                                                        className="control-label required-label"
                                                                        id="CC-checkoutPaymentDetails-nameOnCard-label"
                                                                        htmlFor="CC-checkoutPaymentDetails-nameOnCardLabel"
                                                                    >
                                                                        Name on Card*
                              </label>
                                                                    <div className="control clearfix">
                                                                        <input
                                                                            aria-required="true"
                                                                            type="text"
                                                                            className="form-control "
                                                                            id="CC-checkoutPaymentDetails-nameOnCardLabel"
                                                                            name="card_name"
                                                                            onChange={this.emi}
                                                                            placeholder="Name on Card"
                                                                            required
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="form-group expires_label col-sm-12">
                                                                    <label className="control-label required-label">
                                                                        Expires On*
                              </label>
                                                                </div>
                                                                <div className="form-group expire_box col-md-4 col-sm-4">
                                                                    <div className="control clearfix">
                                                                        <select
                                                                            className="form-control "
                                                                            id="CC-checkoutPaymentDetails-endMonth"
                                                                            name="month"
                                                                            onChange={this.emi}
                                                                            required
                                                                        >
                                                                            <option>Month</option>
                                                                            <option value={1}>1</option>
                                                                            <option value={2}>2</option>
                                                                            <option value={3}>3</option>
                                                                            <option value={4}>4</option>
                                                                            <option value={5}>5</option>
                                                                            <option value={6}>6</option>
                                                                            <option value={7}>7</option>
                                                                            <option value={8}>8</option>
                                                                            <option value={9}>9</option>
                                                                            <option value={10}>10</option>
                                                                            <option value={11}>11</option>
                                                                            <option value={12}>12</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group expire_box col-md-4 col-sm-4">
                                                                    <div className="control clearfix">
                                                                        <select
                                                                            aria-required="true"
                                                                            className="form-control "
                                                                            id="CC-checkoutPaymentDetails-endYear"
                                                                            name="year"
                                                                            onChange={this.emi}
                                                                        >
                                                                            <option>Year</option>
                                                                            <option value={2020}>2020</option>
                                                                            <option value={2021}>2021</option>
                                                                            <option value={2022}>2022</option>
                                                                            <option value={2023}>2023</option>
                                                                            <option value={2024}>2024</option>
                                                                            <option value={2025}>2025</option>
                                                                            <option value={2026}>2026</option>
                                                                            <option value={2027}>2027</option>
                                                                            <option value={2028}>2028</option>
                                                                            <option value={2029}>2029</option>
                                                                            <option value={2030}>2030</option>
                                                                            <option value={2031}>2031</option>
                                                                            <option value={2032}>2032</option>
                                                                            <option value={2033}>2033</option>
                                                                            <option value={2034}>2034</option>
                                                                            <option value={2035}>2035</option>
                                                                            <option value={2036}>2036</option>
                                                                            <option value={2037}>2037</option>
                                                                            <option value={2038}>2038</option>
                                                                            <option value={2039}>2039</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group expire_box col-md-3 col-sm-3">
                                                                    <div className="control clearfix">
                                                                        <div className="col-sm-12 no-padding">
                                                                            <input
                                                                                aria-required="true"
                                                                                type="password"
                                                                                className="form-control "
                                                                                id="CC-checkoutPaymentDetails-cardCVV"
                                                                                name="cvv"
                                                                                onChange={this.emi}
                                                                                placeholder="CVV"
                                                                                required
                                                                            />
                                                                        </div>
                                                                        <div className=" cc-checkout-payment-details-cvv-row">
                                                                            <span
                                                                                id="CC-checkoutPaymentDetails-cardCVV-whatsthis"
                                                                                className="cvvPopover"
                                                                                data-toggle="popover"
                                                                                title="CVV"
                                                                                data-content="The last 3 digits found on your card's
                                  signature strip."
                                                                                data-placement="right"
                                                                                tabIndex={0}
                                                                                aria-label="?"
                                                                            >
                                                                                ?
                                  </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </fieldset>
                                                        <div>
                                                            <button
                                                                className="cc-button-payment"
                                                                style={{ backgroundColor: "#e5cc76" }}
                                                            >
                                                                <span>Pay now</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}