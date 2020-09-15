import * as React from "react";
import { Col, Row } from "reactstrap";
import Logo from "../Navbar/fabLogo.png";
import "./styles.scss";
import { withRouter } from "react-router";
export interface ILoginProps {}

const LoginImpl = (props: any) => {
  const [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => setOpen(props.isOpen), [props.isOpen]);

  return (
    <Row className="LoginRow">
      {/* <Modal
        isOpen={isOpen}
        toggle={() => props.setOpen(!isOpen)}
        className="LoginModal"
      >
        <ModalBody> */}
      <div className="LoginModal">
        <div className="modal-content">
          <div className="modal-body">
            <div className="FormContainer">
              <div className="SignInText">
                <div>
                  <img className="logoImg" alt="LOGO" src={Logo} />
                </div>
                Sign In
              </div>
              <Col xs={12} md={12} lg={12}>
                <div className="InputContainer">
                  <span>Store ID * </span>
                  <input className="FormInput" />
                </div>
              </Col>
              <Col xs={12} md={12} lg={12}>
                <div className="InputContainer">
                  <span>Employee ID * </span>
                  <input className="FormInput" />
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
              <div className="FormFooter">
                <div className="SignInButton">
                  <button
                    onClick={() => props.history.push("/home")}
                    className="Button"
                  >
                    Sign In
                  </button>
                </div>
                <div className="BottomTextContainer">
                  {/* <span>
                  New to Omni? &nbsp; */}
                  <span className="TextRed">Forgot Password?</span>
                  {/* <span className="TextRed">Create Account</span> */}
                  {/* </span> */}
                </div>
              </div>
            </div>
            {/* </ModalBody>
      </Modal> */}
          </div>
        </div>
      </div>
    </Row>
  );
};
export const Login = withRouter(LoginImpl);
