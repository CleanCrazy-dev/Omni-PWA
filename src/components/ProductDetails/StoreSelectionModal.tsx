import * as React from "react";
import { Modal, ModalBody } from "reactstrap";

export const StoreSelectionModal = (props: {
  storeData: any[];
  isOpen: boolean;
  onStoreClick: (store: any) => void;
  onValueChange: (e: any) => void;
  onClickSearch: () => void;
}) => {
  const [isOpen, setModalOpen] = React.useState(false);
  React.useEffect(() => setModalOpen(props.isOpen), [props.isOpen]);

  return (
    <Modal
      className="StoreModal"
      isOpen={isOpen}
      toggle={() => setModalOpen(false)}
    >
      <ModalBody>
        <div className="HeadText">Find a collection point</div>
        <div className="detail-data OnModal pro-details">
          <input
            className="input"
            onChange={props.onValueChange}
            placeholder="Enter a Pincode or Store Name"
          />
          <button onClick={props.onClickSearch} className="add">
            Search
          </button>
        </div>
        {props.storeData.map((store: any) => {
          return (
            <div
              className="StoreDetails"
              onClick={() => {
                setModalOpen(false);
                props.onStoreClick(store);
              }}
            >
              <div className="Manager">{store.storeManager}</div>
              <div className="Contact">
                {" "}
                <span>Contact No. </span>
                {store.phoneNo}
              </div>
              {/* <h4>STORE NAME</h4> */}
              <div className="StoreName">{store.storeName}</div>
              <h4>OPEN TIMIINGS</h4>
              <div className="Timing">
                <span>Customer Entry on</span> {store.operationalDays} -{" "}
                {store.operationalTime}
              </div>
            </div>
          );
        })}
      </ModalBody>
    </Modal>
  );
};
