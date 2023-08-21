import React, { useState, useEffect } from "react";
import { useAuth } from "../../Utils/Auth";
import AccountService from "../../Services/AccountService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import {
  faEdit,
  faTrashAlt,
  faPlus,
  faFileAlt,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router";
import ModalAdWbl from "../Modal/ModalAdWbl";
import ModalWthBl from "../Modal/ModalWthBl";
import ModalWbdl from "../Modal/ModalWbdl";

const WebsiteDetails = () => {
  // const { id } = useParams();
  const auth = useAuth();
  const navigate = useNavigate();
  const [website, setWebsite] = useState("");
  const [getWebsite, setGetWebsite] = useState([]);
  const [Id, setId] = useState([]);

  console.log("Auth", auth);
  const handlewebsite = (event) => {
    setWebsite(event.target.value);
  };
  console.log(website);

  const handleSubmit = (e) => {
    e.preventDefault();

    // post api fetch

    AccountService.websitedetails(
      {
        name: website,
      },
      auth.user
    )
      .then((res) => {
        console.log("res", res);
        if (res.status === 200) {
          alert("Website registered successfully!");
        } else {
          alert("Please give a website name to add");
        }
      })

      .catch((err) => {
        if (!err.response) {
          alert(err.message);
          return;
        }
      });
    window.location.reload();
  };

  const handelId = (id) => {
    setId(id);
  };
  console.log(Id);

  // const handeldeletewebsite = (e, name) => {
  //   e.preventDefault();
  //   alert("Are You Sure You Want To Delete This Website?");
  //   const data = {
  //     name: name,
  //   };

  //   // console.log( data)
  //   AccountService.deletewebsite(data, auth.user)
  //     .then((res) => {
  //       // console.log(response.data);
  //       if (res.status === 200) {
  //         alert("Website Deleted successfully!");
  //         window.location.reload();
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       alert.error("e.message");
  //     });
  // };

  // get api  fetch
  useEffect(() => {
    AccountService.website(auth.user).then((res) => setGetWebsite(res.data));
  }, [auth]);
  console.log("Website", getWebsite);

  const handelstatement = () => {
    navigate("/websitestatement");
  };
  return (
    <>
      <div class="card text-center mt-2 mr-5 ml-5">
        <div class="card-header">Website Details</div>
        <div class="card-body">
          <input
            class="form-control mb-2"
            id="inputPassword2"
            placeholder="Name"
            onChange={handlewebsite}
          />
          <a href="#" class="btn btn-primary" onClick={handleSubmit}>
            Add Website
          </a>
        </div>
        <div class="card-footer text-muted">
          <div class="card-body">
            {getWebsite.length > 0 &&
              getWebsite.map((data, index) => {
                return (
                  <div class="card d-flex justify-content-between">
                    <div class="card-body d-flex justify-content-between">
                      <p className="col">{data.name}</p>
                      <div className=" d-flex gap-2">
                        <button
                          type="button"
                          class="btn btn-danger"
                          data-bs-toggle="modal"
                          data-bs-target="#modalWthbl"
                        >
                          <FontAwesomeIcon
                            icon={faMinus}
                            className="add-icon"
                          />
                        </button>
                        <button
                          type="button"
                          class="btn btn-success"
                          data-bs-toggle="modal"
                          data-bs-target="#modalAdWbl"
                        >
                          <FontAwesomeIcon icon={faPlus} className="add-icon" />
                        </button>
                        <button
                          type="button"
                          class="btn btn-info"
                          onClick={handelstatement}
                        >
                          <FontAwesomeIcon
                            icon={faFileAlt}
                            className="add-icon"
                          />
                        </button>
                        <button type="button" class="btn btn-warning ">
                          <FontAwesomeIcon icon={faEdit} />
                        </button>

                        <button type="button" class="btn btn-danger">
                          <FontAwesomeIcon
                            icon={faTrashAlt}
                            className="delete-icon"
                            onClick={() => {
                              handelId(data.name);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#modalWbdl"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <ModalAdWbl />
        <ModalWthBl />
        <ModalWbdl name={Id} />
      </div>
    </>
  );
};

export default WebsiteDetails;
