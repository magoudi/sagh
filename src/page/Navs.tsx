import Grid from "@mui/material/Grid2";
import Header from "../components/header";
import { Outlet } from "react-router-dom";

function Navs(props: { set: (value: boolean) => void }) {
  return (
    <>
      <Header set={props.set} />
      <Grid container width={"100%"}>
        <Outlet />
      </Grid>
    </>
  );
}

export default Navs;
