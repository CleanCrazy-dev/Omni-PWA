import * as React from "react";
import { Modal, ModalBody, Row, Col } from "reactstrap";
import "./Login.scss";
export interface ILoginProps {}

export const Login = () => {
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
            <div className="SignInText">Sign In</div>
            <Col xs={12} md={12} lg={12}>
              <div className="InputContainer">
                <span>Email Address * </span>
                <input className="FormInput" />
              </div>
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
            <div className="FormFooter">
              <div className="SignInButton">
                <button className="Button">Sign In</button>
              </div>
              <div className="BottomTextContainer">
                <span className="TextRed">Forgot Password?</span>
                <span>
                  New to Omin? &nbsp;
                  <span className="TextRed">Create Account</span>
                </span>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </Row>
  );
};
