import React, { useEffect } from "react";

const Pagination = ({ handlePage, page, totalPage, totalData }) => {
    let startIndex = Math.min((page - 1) * 10 + 1);
    let endIndex = Math.min(page * 10, totalData);

    let arr = [];
    const handleAdvancepage = () => {
        let rem, pageNumber = 5;
        for (let i = 1; i <= pageNumber; i++) {
            arr.push(i);
        }
        if (totalPage % 5 === 0) {
            pageNumber = pageNumber + 5;
        }
        else {
            rem = totalPage % 5;
            pageNumber = pageNumber + rem;
        }
        return arr
    }

    // useEffect(() => { handleAdvancepage() }, [])
    handleAdvancepage()

    console.log(arr)
    return (
        <div className="text-center">
            <h4>
                Showing {startIndex} to {endIndex} of {totalData} entries
            </h4>
            <div className="d-flex justify-content-center">
                <span className={`m-1 `}>
                    <button
                        className={`btn btn-sm btn-primary ${page === 1 ? "disabled" : ""}`}
                        onClick={() => {
                            handlePage(1);
                        }}
                    >
                        First
                    </button>
                </span>
                <span className={`m-1 `}>
                    <button
                        className={`btn btn-sm btn-primary ${page === 1 ? "disabled" : ""}`}
                        onClick={() => {
                            page > 1 && handlePage(page - 1);
                        }}
                    >
                        Previous
                    </button>
                </span>
                {/* <div className="">
                    <span className={`fs-4 m-1`}>
                        <button
                            onClick={() => {
                                handlePage(1);
                            }}
                            className={`btn btn-sm `}
                        >
                            {page === 1 ? (
                                <button className="btn-primary" style={{ width: "25px" }}>
                                    1
                                </button>
                            ) : (
                                <button style={{ border: "none" }}>1</button>
                            )}
                        </button>
                    </span>
                    <span className={`fs-4 m-1 `}>
                        <button
                            className={`btn btn-sm ${totalPage < 2 ? "disabled" : ""}`}
                            onClick={() => {
                                handlePage(2);
                            }}
                        >
                            {page === 2 ? (
                                <button className="btn-primary" style={{ width: "25px" }}>
                                    2
                                </button>
                            ) : (
                                <button style={{ border: "none" }}>2</button>
                            )}
                        </button>
                    </span>
                    <span className={`fs-4 m-1 `}>
                        <button
                            className={`btn btn-sm ${totalPage < 3 ? "disabled" : ""}`}
                            onClick={() => {
                                handlePage(3);
                            }}
                        >
                            {page === 3 ? (
                                <button className="btn-primary" style={{ width: "25px" }}>
                                    3
                                </button>
                            ) : (
                                <button style={{ border: "none" }}>3</button>
                            )}
                        </button>
                    </span>
                    <span className={`fs-4 m-1 `}>
                        <button
                            className={`btn btn-sm ${totalPage < 4 ? "disabled" : ""}`}
                            onClick={() => {
                                handlePage(4);
                            }}
                        >
                            {page === 4 ? (
                                <button className="btn-primary" style={{ width: "25px" }}>
                                    4
                                </button>
                            ) : (
                                <button style={{ border: "none" }}>4</button>
                            )}
                        </button>
                    </span>
                    <span className={`fs-4 m-1 `}>
                        <button
                            className={`btn btn-sm ${totalPage < 5 ? "disabled" : ""}`}
                            onClick={() => {
                                handlePage(5);
                            }}
                        >
                            {page === 5 ? (
                                <button className="btn-primary" style={{ width: "25px" }}>
                                    5
                                </button>
                            ) : (
                                <button style={{ border: "none" }}>5</button>
                            )}
                        </button>
                    </span>
                </div> */}
                {/* {arr.map((data) => (
                    <span className={`m-1 `}>
                        <button
                            className={`btn btn-sm btn-primary ${totalPage < data ? "disabled" : ""}`}
                            onClick={() => {
                                handlePage(data);
                                handleAdvancepage(data)
                            }}
                        >
                            {data}
                        </button>
                    </span>
                ))} */}
                {/* <div className="m-1">
                    <span className={`m-1 `}>
                        <button
                            className={`btn btn-sm btn-primary ${totalPage < page ? "disabled" : ""}`}
                            onClick={() => {
                                handlePage(page);
                            }}
                        >
                            {page}
                        </button>
                    </span>
                    <span className={`m-1 `}>
                        <button
                            className={`btn btn-sm btn-primary ${totalPage < page + 1 ? "disabled" : ""}`}
                            onClick={() => {
                                handlePage(page + 1);
                            }}
                        >
                            {page + 1}
                        </button>
                    </span>
                    <span className={`m-1 `}>
                        <button
                            className={`btn btn-sm btn-primary ${totalPage < page + 2 ? "disabled" : ""}`}
                            onClick={() => {
                                handlePage(page + 2);
                            }}
                        >
                            {page + 2}
                        </button>
                    </span>
                    <span className={`m-1 `}>
                        <button
                            className={`btn btn-sm btn-primary ${totalPage < page + 3 ? "disabled" : ""}`}
                            onClick={() => {
                                handlePage(page + 3);
                            }}
                        >
                            {page + 3}
                        </button>
                    </span>
                    <span className={`m-1 `}>
                        <button
                            className={`btn btn-sm btn-primary ${totalPage < page + 4 ? "disabled" : ""}`}
                            onClick={() => {
                                handlePage(page + 4);
                                handleAdvancepage()
                            }}
                        >
                            {page + 4}
                        </button>
                    </span>
                </div> */}

                {(page === 1 || page === totalPage) ? (<>
                    {page === 1 ? (<> <span className={`m-1 `}>
                        <button
                            className={`btn btn-sm btn-primary `}
                            onClick={() => {
                                handlePage(page);
                            }}
                        >
                            {page}
                        </button>
                    </span>
                        <span className={`m-1 `}>
                            <button
                                className={`btn btn-sm btn-primary ${(page) === totalPage ? "disabled" : ""}`}
                                onClick={() => {
                                    handlePage(page + 1);
                                }}
                            >
                                {page + 1}
                            </button>
                        </span>
                        <span >....</span></>) : (
                        <>
                            <span>....</span>
                            <span className={`m-1 `}>
                                <button
                                    className={`btn btn-sm btn-primary `}
                                    onClick={() => {
                                        handlePage(totalPage - 1);
                                    }}
                                >
                                    {totalPage - 1}
                                </button>
                            </span>
                            <span className={`m-1 `}>
                                <button
                                    className={`btn btn-sm btn-primary`}
                                    onClick={() => {
                                        handlePage(totalPage);
                                    }}
                                >
                                    {totalPage}
                                </button>
                            </span></>)}
                </>
                ) : (
                    <>
                        {(page === 2 || page === (totalPage - 1)) ? (<>
                            {page === 2 ? (<>

                                <span className={`m-1 `}>
                                    <button
                                        className={`btn btn-sm btn-primary`}
                                        onClick={() => {
                                            handlePage(page - 1);
                                        }}
                                    >
                                        {page - 1}
                                    </button>
                                </span>
                                <span className={`m-1 `}>
                                    <button
                                        className={`btn btn-sm btn-primary`}
                                        onClick={() => {
                                            handlePage(page);
                                        }}
                                    >
                                        {page}
                                    </button>
                                </span>
                                <span className={`m-1 `}>
                                    <button
                                        className={`btn btn-sm btn-primary ${(page + 1) === totalPage ? "disabled" : ""}`}
                                        onClick={() => {
                                            handlePage(page + 1);
                                        }}
                                    >
                                        {page + 1}
                                    </button>
                                </span>
                                <span className={`m-1 `}>....</span></>) : (<><span className={`m-1 `}>....</span>
                                    <span className={`m-1 `}>
                                        <button
                                            className={`btn btn-sm btn-primary`}
                                            onClick={() => {
                                                handlePage(page - 1);
                                            }}
                                        >
                                            {page - 1}
                                        </button>
                                    </span>
                                    <span className={`m-1 `}>
                                        <button
                                            className={`btn btn-sm btn-primary`}
                                            onClick={() => {
                                                handlePage(page);
                                            }}
                                        >
                                            {page}
                                        </button>
                                    </span>
                                    <span className={`m-1 `}>
                                        <button
                                            className={`btn btn-sm btn-primary `}
                                            onClick={() => {
                                                handlePage(page + 1);
                                            }}
                                        >
                                            {page + 1}
                                        </button>
                                    </span></>)}
                        </>) : (<>
                            <span className={`m-1 `}>....</span>
                            <span className={`m-1 `}>
                                <button
                                    className={`btn btn-sm btn-primary`}
                                    onClick={() => {
                                        handlePage(page - 1);
                                    }}
                                >
                                    {page - 1}
                                </button>
                            </span>
                            <span className={`m-1 `}>
                                <button
                                    className={`btn btn-sm btn-primary`}
                                    onClick={() => {
                                        handlePage(page);
                                    }}
                                >
                                    {page}
                                </button>
                            </span>
                            <span className={`m-1 `}>
                                <button
                                    className={`btn btn-sm btn-primary ${(page + 1) === totalPage ? "disabled" : ""}`}
                                    onClick={() => {
                                        handlePage(page + 1);
                                    }}
                                >
                                    {page + 1}
                                </button>
                            </span>
                            <span className={`m-1 `}>....</span>
                        </>)}
                    </>
                )}
                <span className={`m-1 `}>
                    <button
                        className={`btn btn-sm btn-primary ${page === totalPage ? "disabled" : ""}`}
                        onClick={() => {
                            handlePage(page + 1);
                        }}
                    >
                        Next
                    </button>
                </span>
                <span className={`m-1 `}>
                    <button
                        className={`btn btn-sm btn-primary ${page === totalPage ? "disabled" : ""}`}
                        onClick={() => {
                            handlePage(totalPage);
                        }}
                    >
                        Last
                    </button>
                </span>
            </div>
        </div >
    );
};

export default Pagination;