import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [LTV, setLTV] = useState(0);
  const [margin, setMargin] = useState(0);
  const [descriptionActive, setDescriptionActive] = useState(false);

  function handleLTVChange(e) {
    setLTV(e.target.value);
    setMargin((100 * (100 - e.target.value)) / e.target.value);
  }

  function handleMarginChange(e) {
    setMargin(e.target.value);
    setLTV((100 * 100) / (100 + e.target.value));
  }

  function handleDescriptionToggle() {
    setDescriptionActive(!descriptionActive);
  }

  return (
    <div className="form-container">
      <div className="form-inputs">
        <label>
          LTV:
          <input type="number" value={LTV} onChange={handleLTVChange} />
        </label>
        <br />
        <label>
          Margin Ratio:
          <input type="number" value={margin} onChange={handleMarginChange} />
        </label>
      </div>
      <div className="toggle" onClick={handleDescriptionToggle}>
        <h2 className="toggle-label">Description</h2>
        <span className={`toggle-arrow ${descriptionActive ? "active" : ""}`}>
          >
        </span>
      </div>
      <div className={`toggle-content ${descriptionActive ? "active" : ""}`}>
        <div class="description">
          <h2>Shorting a Coin in the Spot Market</h2>
          <p>
            Shorting a coin in the spot market can be done through two common
            pathways: taking a loan or using margin trading. Both options have
            the same interest rates in many places like OKX, so the choice comes
            down to which option is the most capital efficient. To determine
            this, pay attention to the LTV ratio when taking a loan, and the
            Margin Ratio when using margin trading.
          </p>

          <h3>Loan Option</h3>
          <ul>
            <li>When taking a loan, the LTV ratio is the metric to watch.</li>
            <li>
              A higher LTV ratio means a user can borrow more money with the
              same amount of collateral.
            </li>
            <li>
              For example, an LTV of 60% means that with $100 collateral, a user
              can borrow $60.
            </li>
            <li>
              The Initial LTV is the relevant metric for opening a position, and
              the Liquidation LTV is important for keeping the position long
              term.
            </li>
          </ul>

          <h3>Margin Trading Option</h3>
          <ul>
            <li>
              When using margin trading, the Margin Ratio is the metric to
              watch.
            </li>
            <li>
              A higher Margin Ratio means a user can sell more of the target
              coin with the same amount of margin.
            </li>
            <li>
              For example, a Margin Ratio of 20% means that with $20 worth of
              margin, the user can sell $100 of the target coin.
            </li>
            <li>
              The Initial Margin Ratio is the relevant metric for opening a
              position, and the Maintenance Margin Ratio is important for
              keeping the position long term.
            </li>
          </ul>

          <p>
            To help make the decision between the two options, a tool can
            calculate the equivalency between the LTV of a loan and a Margin
            Ratio. For example, if the LTV is 80%, a user can deposit $100 and
            get a loan of $80, which locks $20 in the operation. In effect, this
            would be the same as borrowing $80 using $20 of margin, at a 25%
            Margin Ratio. Thus, an 80% LTV ratio is equivalent to a 25% Margin
            Ratio.
          </p>

          <p>
            For most capital efficiency, a user would favor higher LTV ratios
            and lower Margin Ratios. Remember, the goal is to borrow or sell as
            much of the target coin as possible with the least amount of
            collateral or margin.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Form;
