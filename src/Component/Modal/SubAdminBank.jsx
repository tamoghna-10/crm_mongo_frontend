import React, { useState, useEffect } from "react";
import TransactionSercvice from "../../Services/TransactionSercvice";
import { useAuth } from "../../Utils/Auth";

const SubAdminBank = () => {
  const [subAdminlist, setSubAdminlist] = useState([]);
  const auth = useAuth();

    useEffect(() => {
      if (auth.user) {
        TransactionSercvice.subAdminList(auth.user).then((res) => {
          setSubAdminlist(res.data);
        });

      }
    }, [auth]);
  const handelsave = () => {
    console.log("Res=>>>>", subAdminlist);
  }
  return (
    <div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Give the Permission SubAdmin Wise
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={handelsave}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubAdminBank;