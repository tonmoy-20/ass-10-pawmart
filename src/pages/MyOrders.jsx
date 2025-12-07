import axios from "axios";
import React, { useEffect, useState } from "react";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    axios
      .get("https://missionscic.vercel.app/orders")
      .then((res) => {
        setMyOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(myOrders);

  return (
    <div>
      <div className="overflow-x-auto py-10">
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Phone</th>
              <th>Address</th>
              <th> Quantity</th>
              <th> Date</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((order, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{order?.productName}</td>
                <td>{order?.price} </td>
                <td>{order?.phoneNum}</td>
                <td>{order?.address}</td>
                <td>{order?.quantity}</td>
                <td>
                  {new Date(order?.date).toLocaleString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
