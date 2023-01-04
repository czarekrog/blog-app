import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/user/useAuth";
import { StyledTopSection } from "../routes/Dashboard/StyledDashboard";

export const DashboardLayout = () => {
  const { isAuthenticated, isAdmin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isAdmin) {
      navigate("/");
    }
  }, [isAdmin, isAuthenticated, navigate]);

  return (
    <div>
      <StyledTopSection>
        <div></div>
        <div>
          <Link to="add-new">Add new</Link>
        </div>
      </StyledTopSection>
      <Outlet />
    </div>
  );
};
