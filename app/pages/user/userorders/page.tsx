import Footer from "@/app/components/sharedcomps/Footer";
import UserOrders from "@/app/components/userdashcomp/UserOrders";
import React from "react";

const UserDash: React.FC = () => {
  return (
    <div>
      <UserOrders />
    </div>
  );
};

export default UserDash;
