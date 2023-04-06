import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "src/hooks/useAuth";
import Spinner from "src/@core/components/spinner";
interface IHomeProps {}
export const getHomeRoute = (role: string) => {
  if (role === "client") return "/acl";
  else return "/dashboards/crm";
};
const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.user && auth.user.role) {
      const homeRoute = getHomeRoute(auth.user.role);
      console.log(homeRoute);

      // Redirect user to Home URL
      navigate(homeRoute);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <Spinner sx={{ height: "100%" }} />;
};

export default Home;
