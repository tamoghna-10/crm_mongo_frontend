import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../Utils/Auth';
import AccountService from '../../Services/AccountService';
import { toast } from 'react-toastify';

const AdminEditrole = () => {
    const auth = useAuth();
    const { id } = useParams();
    const navigate = useNavigate();
    const [checkedItems, setCheckedItems] = useState([]);
    const [displayEdit, setDisplayEdit] = useState(false);
    const [adminData, setAdminData] = useState({});

    const setData = () => {
        setCheckedItems(adminData.roles);
    };

    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        if (event.target.checked) {
            setCheckedItems((prevCheckedItems) => [...prevCheckedItems, value]);
        } else {
            setCheckedItems((prevCheckedItems) =>
                prevCheckedItems.filter((item) => item !== value)
            );
        }
    };
    console.log(checkedItems)
    useEffect(() => {
        AccountService.getSingleAdmin(
            id,
            auth.user
        ).then((res) => {
            console.log(res.data);
            setAdminData(res.data);
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(checkedItems)
        AccountService.updateSingleAdminPermission(id, { roles: checkedItems }, auth.user)
            .then((res) => {
                console.log(res);
                toast.success("update successfully");
                navigate("/adminlist", { replace: false });

            })
            .catch((err) => {
                if (err.response.data) {
                    toast.error(err.response.data.message);

                }
            });

    };


    const handleUpdate = () => {
        setDisplayEdit(true);
        setData();
    };
    const rolesArray = adminData.roles || [];


    return (
        <>
            {displayEdit === false ? (
                <div>
                    <div className="card">
                        <h5 className="card-header">Sub Admin Data</h5>
                        <div className="card-body">
                            <h5 className="card-title">Name</h5>
                            <p className="card-text">{adminData.firstname} {adminData.lastname}</p>
                            <h5 className="card-title">Email</h5>
                            <p className="card-text">
                                {adminData.email}
                            </p>
                            <h5 className="card-title">Current Permissions</h5>
                            {rolesArray.length > 0 ? (
                                <ul className='card-text'>
                                    {rolesArray.map((role, index) => (
                                        <li key={index}>{role}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className='card-text'>No roles found</p>
                            )}
                            <div>

                            </div>
                            <button onClick={handleUpdate} className="btn btn-primary mb-0">
                                {""}
                                Renew the permissions
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <form>
                        <div className="card" style={{ backgroundColor: '#d9cece' }}>
                            <div className="card-header">
                                <h1 className="h4 card-title mb-0">Renew the permissions</h1>
                            </div>
                            <div className="card-body">
                                <div className='mb-1 input-group-lg'>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value="Dashboard"
                                            checked={checkedItems.includes('Dashboard')}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className='my-1'> Dashboard</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value="BankView"
                                            checked={checkedItems.includes('BankView')}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span> BankView</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value="create-transaction"
                                            checked={checkedItems.includes('create-transaction')}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span> Create Transaction</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value="WebsiteView"
                                            checked={checkedItems.includes('WebsiteView')}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span> WebsiteView</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value="Profile"
                                            checked={checkedItems.includes('Profile')}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span> Profile</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value="EditRequest"
                                            checked={checkedItems.includes('EditRequest')}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span> EditRequest</span>
                                    </label>
                                </div>
                                {/* <div>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value="Slider-Admin"
                                            checked={checkedItems.includes('Slider-Admin')}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span>Slider-Admin</span>
                                    </label>
                                </div> */}
                            </div>
                            <div className="card-footer">
                                <div className="col-12 text-end">
                                    <button
                                        onClick={handleSubmit}
                                        className="btn btn-primary mb-0"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default AdminEditrole;