import React from "react";
import './from.scss'
import axios from 'axios'
export interface IFormProps {
    val: any;
}
export class Form extends React.Component<IFormProps> {
    state = {
        postal: null,
        country: null,
        state: null,
        city: null,
        first_name: null,
        last_name: null,
        address_a: null,
        address_b: null,
        mobile: null,
        states: [{name:'',code:''}],
        country_list: [{ name: 'null', code2: 'null', states: [{ code: 'null', name: 'null' }] }]
    };

    componentDidMount() {
        axios.get('https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json')
            .then((res) => {
                this.setState({
                    country_list: res.data
                })
            })
            .catch(err => console.log(err))
    }

    onChange = (event: any) => {
        console.log(event.target.value)
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
        if (name == 'country') {
            const country_filter = this.state.country_list.filter(country_selected => 
                country_selected.code2 == value
            )
            const states = country_filter[0].states
            this.setState({
                states
            })
        }
    }
    render() {
        const { country_list, country, states } = this.state
        return (
            <div>
                <fieldset>
                    <div className="col-md-7 col-sm-7 col-xs-12 no-padding">
                        <div className="form-group">
                            <div className="row">
                                <div className="col-sm-6 no-padding odd_even_padding">
                                    <div className="control clearfix">
                                        <label
                                            className="control-label"
                                            htmlFor="CC-checkoutAddressBook-szipcode"
                                        >
                                            Pin/Zip Code *
                                        </label>
                                        <input
                                            autoComplete="off"
                                            type="text"
                                            className="form-control"
                                            name="postal"
                                            onChange={this.onChange}
                                            aria-required="true"
                                            required
                                            placeholder="Pin/Zip Code"
                                        />
                                        <span
                                            className="text-danger"
                                            id="CC-checkoutAddressBook-guest-szipcode-error"
                                            role="alert"
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6 no-padding odd_even_padding">
                                    <div className="control clearfix">
                                        <label
                                            className="control-label"
                                            htmlFor="CC-checkoutAddressBook-scountry"
                                        >
                                            Country *
                                        </label>
                                        <select
                                            autoComplete="off"
                                            className="form-control"
                                            name="country"
                                            onChange={this.onChange}
                                            aria-required="true"
                                        >
                                            <option>Country</option>
                                            {country_list.map(country => {
                                                return (
                                                    <option value={country.code2}>{country.name}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6 no-padding odd_even_padding">
                                    <div className="control clearfix">
                                        <label
                                            className="control-label"
                                            htmlFor="CC-checkoutAddressBook-sstate"
                                        >
                                            State *
                                        </label>
                                        <select
                                            autoComplete="off"
                                            className="form-control"
                                            name="state"
                                            onChange={this.onChange}
                                            aria-required="true"
                                        >
                                            <option>State/Region</option>
                                            {states.map(state => {
                                                return(
                                                    <option value={state.code}>{state.name}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6 no-padding odd_even_padding">
                                    <div className="control clearfix">
                                        <label
                                            className="control-label"
                                            htmlFor="CC-checkoutAddressBook-scity"
                                        >
                                            City *
                  </label>
                                        <input
                                            autoComplete="off"
                                            type="text"
                                            className="form-control"
                                            name="city"
                                            onChange={this.onChange}
                                            aria-required="true"
                                            required
                                            placeholder="City"
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6 no-padding odd_even_padding">
                                    <div className="control clearfix">
                                        <label
                                            className="control-label"
                                            htmlFor="CC-checkoutAddressBook-sfirstname"
                                        >
                                            First Name *
                  </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="first_name"
                                            onChange={this.onChange}
                                            aria-required="true"
                                            required
                                            placeholder="First Name"
                                        />
                                        <span
                                            className="text-danger"
                                            id="CC-checkoutAddressBook-guest-sfirstname-error"
                                            role="alert"
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6 no-padding odd_even_padding">
                                    <div className="control clearfix">
                                        <label
                                            className="control-label"
                                            htmlFor="CC-checkoutAddressBook-slastname"
                                        >
                                            Last Name *
                  </label>
                                        <input
                                            autoComplete="off"
                                            type="text"
                                            className="form-control"
                                            name="last_name"
                                            onChange={this.onChange}
                                            aria-required="true"
                                            required
                                            placeholder="Last Name"
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6 no-padding odd_even_padding">
                                    <div className="control clearfix">
                                        <label
                                            className="control-label"
                                            htmlFor="CC-checkoutAddressBook-saddress1"
                                        >
                                            Address Line 1 *
                  </label>
                                        <input
                                            autoComplete="off"
                                            type="text"
                                            className="form-control"
                                            name="address_1"
                                            onChange={this.onChange}
                                            aria-required="true"
                                            required
                                            placeholder="Address Line 1"
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6 no-padding odd_even_padding">
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
                                            name="address_b"
                                            onChange={this.onChange}
                                            placeholder="Address Line 2"
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6 no-padding odd_even_padding">
                                    <div className="control clearfix">
                                        <label
                                            className="control-label"
                                            htmlFor="CC-checkoutAddressBook-sphone"
                                        >
                                            Mobile *
                  </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="mobile"
                                            onChange={this.onChange}
                                            placeholder="Mobile"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="save_continue">
                                <button
                                    type="submit"
                                    className="cc-button-primary"
                                    style={{ backgroundColor: "#e5cc76" }}
                                >
                                    <span>Save &amp; Continue</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
        )
    }

}