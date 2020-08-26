import React from "react";
import "./from.scss";
import axios from "axios";
const year = new Date().getFullYear();
export class Payment_Methods_Menu extends React.Component {
    state = {
        selected: "credit_card",
        credit_card: {
            card_number: null,
            card_name: null,
            month: null,
            year: null,
            cvv: null,
        },
        bank: null,
        upi: null,
        google_pay: null,
        wallet: null,
        loyalty: null,
        emi: {
            bank: null,
            card_number: null,
            card_name: null,
            month: null,
            year: null,
            cvv: null,
        },
        emi_banks: [
            "ZESTMON",
            "AXIS",
            "HDFC",
            "CITI",
            "ICICI",
            "AMEX",
            "AXISD",
            "SBI",
            "KOTAK",
            "BOB",
            "INDUS",
            "SCB",
            "YES",
            "HDFCD",
            "HSBC",
            "RBL",
        ],
        wallets: [
            "Freecharge",
            "Airtel Money",
            "Amazon Pay",
            "Paytm",
            "PhonePe",
            "Amex easy click",
            "ItzCash",
            "Ola Money",
            "Oxigen",
            "PayZapp",
            "Yesbank",
            "Paycash",
            "Jio Money",
        ],
        payment_methods: [
            { name: "Credit / Debit card", id: "credit_card" },
            { name: "Net Banking", id: "net_banking" },
            { name: "UPI", id: "upi" },
            { name: "Google Pay", id: "google_pay" },
            { name: "Wallet", id: "wallet" },
            { name: "Loyalty Points", id: "loyalty" },
            { name: "Emi", id: "emi" },
        ],
        banks_list: [{ bank_name: "" }],
        years: Array.from(new Array(20), (val, index) => index + year),
        months: [1,2,3,4,5,6,7,8,9,10,11,12]
    };

    componentDidMount() {
        axios
            .get(
                "https://gist.githubusercontent.com/joshua-rajamani/257899d34e95cf4d7c80fb29ad3161a7/raw/7299e7c0b0b8e59c51be25177f1968f43902b786/bank.json"
            )
            .then((res) => {
                this.setState({
                    banks_list: res.data,
                });
            })
            .catch((err) => console.log(err));
    }

    valueChange = (event: any) => {
        console.log(event.target.value);
        const { value } = event.target;
        this.setState({
            selected: value,
        });
    };
    creditCard = (event: any) => {
        console.log(event.target.value);
        const { name, value } = event.target;
        this.setState({
            credit_card: { ...this.state.credit_card, [name]: value },
        });
        console.log(this.state.credit_card);
    };
    onChange = (event: any) => {
        console.log(event.target.value);
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };
    emi = (event: any) => {
        console.log(event.target.value);
        const { name, value } = event.target;
        this.setState({
            credit_card: { ...this.state.emi, [name]: value },
        });
        console.log(this.state.emi);
    };
    render() {
        const { selected, banks_list, emi_banks, wallets, years,payment_methods, months } = this.state;
        const class_dynamic = selected !== 'wallet'
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
                                    {payment_methods.map(method => {
                                        return (
                                            <div className="payment_button">
                                                <button
                                                    className="nav_button_payment"
                                                    value={method.id}
                                                    onClick={this.valueChange}
                                                >
                                                    <span>{method.name}</span>
                                                </button>
                                            </div>
                                        )
                                    })}

                                </div>
                            </div>
                            {/*Payment Methods*/}
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
                                        <div className={class_dynamic ? "row" : ''}>
                                            {selected == "credit_card" && (
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
                                                                            {months.map(month => {
                                                                                return(
                                                                                    <option value={month}>{month}</option>
                                                                                )
                                                                            })}
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
                                                                            {years.map((year, index) => {
                                                                                return (
                                                                                    <option value={year}>{year}</option>
                                                                                );
                                                                            })}
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
                                            {selected == "net_banking" && (
                                                <div id="wi2800002-ppNetBankingPayment-id">
                                                    <div>
                                                        <div className="mt-5">
                                                            <div className="netbanking_wrapper clearfix">
                                                                <div
                                                                    id="CC-CCAveButtonId"
                                                                    className="col-md-12"
                                                                >
                                                                    <div className="form-group col-sm-6">
                                                                        <label className="control-label required-label">
                                                                            Select a bank:
                                    </label>
                                                                    </div>
                                                                    <div className="control clearfix">
                                                                        <select
                                                                            name="bank"
                                                                            className="form-control"

                                                                            onChange={this.onChange}
                                                                        >
                                                                            <option>Select a bank</option>
                                                                            {banks_list.map((bank) => {
                                                                                return (
                                                                                    <option value={bank.bank_name}>
                                                                                        {bank.bank_name}
                                                                                    </option>
                                                                                );
                                                                            })}
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

                                            {selected == "upi" && (
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
                                                            className="payment-upi"
                                                            name="upi"
                                                            onChange={this.onChange}
                                                            placeholder="yourname@bankname"
                                                            required
                                                        />
                                                        <button
                                                            className="cc-button-payment3 mt-3"
                                                            style={{ backgroundColor: "#e5cc76" }}
                                                        >
                                                            <span>Pay now</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            )}

                                            {selected == "google_pay" && (
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
                                                            className="payment-upi"
                                                            name="google_pay"
                                                            onChange={this.onChange}
                                                            placeholder="yourname@bankname"
                                                            required
                                                        />
                                                        <button
                                                            className="cc-button-payment3 mt-3"
                                                            style={{ backgroundColor: "#e5cc76" }}
                                                        >
                                                            <span>Pay now</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            )}

                                            {selected == "wallet" && (
                                                <div id="wi2800002-ppNetBankingPayment-id">
                                                <div>
                                                    <div className="mt-5">
                                                        <div className="netbanking_wrapper clearfix">
                                                            <div
                                                                id="CC-CCAveButtonId"
                                                                className="col-md-12"
                                                            >
                                                                <div className="form-group col-sm-6">
                                                                    <label className="control-label required-label">
                                                                        Select a bank:
                                </label>
                                                                </div>
                                                                <div className="control clearfix">
                                                                    <select
                                                                        name="bank"
                                                                        className="form-control"

                                                                        onChange={this.onChange}
                                                                    >
                                                                        <option>Select a wallet</option>
                                                                        {wallets.map((bank) => {
                                                                                return (
                                                                                    <option value={bank}>{bank}</option>
                                                                                );
                                                                            })}
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

                                            {selected == "loyalty" && (
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

                                            {selected == "emi" && (
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
                                                                            <option disabled>Select Bank..</option>
                                                                            {emi_banks.map((bank) => {
                                                                                return (
                                                                                    <option value={bank}>{bank}</option>
                                                                                );
                                                                            })}
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
                                                                            {months.map(month => {
                                                                                return(
                                                                                    <option value={month}>{month}</option>
                                                                                )
                                                                            })}
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
                                                                            {years.map((year, index) => {
                                                                                return (
                                                                                    <option value={year}>{year}</option>
                                                                                );
                                                                            })}
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
                                                                                data-content="The last 3 digits found on your card's signature strip."
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
        );
    }
}
