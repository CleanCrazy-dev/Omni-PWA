import * as React from "react";
import { Modal, ModalBody, Row, Col } from "reactstrap";
import "./styles.scss";
export interface ILoginProps {}

export const SignUpPage = () => {
  const [isOpen, setOpen] = React.useState(true);

  return (
    <Row>
      <Modal
        isOpen={isOpen}
        toggle={() => setOpen(!isOpen)}
        className="LoginModal"
      >
        <ModalBody>
          <div className="FormContainer">
            <div className="SignInText">Sign Up</div>
            <Col xs={12} md={12} lg={12}>
              <div className="InputContainer">
                <span>First Name * </span>
                <input className="FormInput" />
              </div>
            </Col>
            <Col xs={12} md={12} lg={12}>
              <div className="InputContainer">
                <span>Last Name * </span>
                <input
                  className="FormInput"
                />
              </div>{" "}
            </Col>
            <Col xs={12} md={12} lg={12}>
              <div className="InputContainer">
                <span>Mobile Number * </span>
                <input
                  className="FormInput"
                />
              </div>{" "}
            </Col>
            <Col xs={12} md={12} lg={12}>
              <div className="InputContainer">
                <span>Email Address * </span>
                <input
                  className="FormInput"
                />
              </div>{" "}
            </Col>
            <Col xs={12} md={12} lg={12}>
              <div className="InputContainer">
                <span>Referral Code: </span>
                <input
                  className="FormInput"
                />
              </div>{" "}
            </Col>
            <Col xs={12} md={12} lg={12}>
              <div className="InputContainer">
                <span>Password * </span>
                <input
                  placeholder="Minimum 8 characters"
                  className="FormInput"
                />
              </div>{" "}
            </Col>
            <Col xs={12} md={12} lg={12}>
              <div className="InputContainer">
                <span>Confirm Your Password * </span>
                <input
                  placeholder="Minimum 8 characters"
                  className="FormInput"
                />
              </div>{" "}
            </Col>
            <div className="FormFooter">
              <div className="SignInButton">
                <button className="Button">Submit</button>
              </div>
              <div className="SingUpText">
                <span>
                  By creating an account, you agree to Fabindia`s &nbsp;
                  <span className="TextRed">term of use and privacy</span>
                </span>
              </div>
            </div>
            <div className="AlreadyHave">
              <div className="NormalText"> Already Have An Account?</div>
              <button className="SimpleBorder">Sign In</button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </Row>
  );
};
