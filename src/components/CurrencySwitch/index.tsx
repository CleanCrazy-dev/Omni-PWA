import * as React from "react";
import "./currencySwitch.scss";
export const CurrencySwitch = () => {
  const [isOpen, setOpen] = React.useState(false);
  const [activeFlag, setActiveFlag] = React.useState({
    className: "flags-India",
    name: "INR",
  });
  return (
    <div className="doubly-wrapper">
      <select className="currency-switcher right" name="doubly-currencies">
        <option
          value="INR"
          data-country="India"
          data-currency-symbol="₹"
          data-display="INR"
        >
          Indian Rupee
        </option>
        <option
          value="USD"
          data-country="United-States"
          data-currency-symbol="$"
          data-display="USD"
        >
          US Dollar
        </option>
      </select>
      <div
        className={`nice-select currency-switcher right slim ${
          isOpen && "open"
        }`}
        onClick={() => setOpen(!isOpen)}
        tabIndex={0}
        id="switcher"
      >
        <span className="current notranslate">
          <span className={`flags ${activeFlag.className}`}></span> &nbsp;
          {activeFlag.name}
        </span>
        <ul className="list">
          <li
            className="option notranslate selected"
            data-value="INR"
            data-country="India"
            data-currency-symbol="₹"
            data-display="INR"
            onClick={() =>
              setActiveFlag({ className: "flags-India", name: "INR" })
            }
          >
            <span className="flags flags-India"></span> &nbsp;INR
          </li>
          <li
            className="option notranslate "
            data-value="USD"
            data-country="United-States"
            data-currency-symbol="$"
            data-display="USD"
            onClick={() =>
              setActiveFlag({ className: "flags-United-States", name: "USD" })
            }
          >
            <span className="flags flags-United-States"></span> &nbsp;USD
          </li>
        </ul>
      </div>
    </div>
  );
};
