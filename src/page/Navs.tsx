import Grid from "@mui/material/Grid2"
import Header from "../components/header"
import { Outlet } from "react-router-dom"

function Navs() {
  return (
    <>
    <Header />
    <Grid container width={"100vw"}>
        <Outlet />
    </Grid>
    </>
  )
}

export default Navs