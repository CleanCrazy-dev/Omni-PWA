import * as React from "react";
import { Modal, ModalBody, Row, Col } from "reactstrap";
import "./styles.scss";
export interface ILoginProps {}

export const Login = (props: any) => {
  const [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => setOpen(props.isOpen), [props.isOpen]);

  return (
    <Row>
      <Modal
        isOpen={isOpen}
        toggle={() => props.setOpen(!isOpen)}
        className="LoginModal"
      >
        <ModalBody>
          <div className="FormContainer">
            <div className="SignInText">Sign In</div>
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
                <button className="Button">Sign In</button>
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
        </ModalBody>
      </Modal>
    </Row>
  );
};
