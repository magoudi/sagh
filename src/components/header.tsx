/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  styled,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Form, Formik, FormikProps } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";

interface loginmodel {
  email: string;
  password: string;
}

const validationSchema = yup.object().shape({
  email: yup.string().email().required("Required"),
  password: yup
    .string()
    .min(8, "Password must be above 8 characters")
    .required("Required"),
});

const Menu = () => {
  return (
    <Grid container width={{ xs: "100vw", sm: 200, md: 300 }}>
      <Grid size={{ xs: 12, md: 12 }}>ay 7aga</Grid>
    </Grid>
  );
};

const Login = (props: FormikProps<loginmodel>) => {
  const { values, handleChange, handleBlur, errors, touched } = props;
  const Signup = styled(Link)(({ theme }) => ({
    color: theme.palette.secondary.main,
    textDecoration: "underline",
    fontSize: "15px",
  }));
  return (
    <Form>
      <Grid container rowSpacing={"10px"}>
        <Grid size={{ xs: 0, sm: 1, md: 2 }} />
        <Grid size={{ xs: 12, sm: 10, md: 8 }} textAlign={"center"}>
          <Signup to="/">Dont have an account? Sign up</Signup>
          <TextField
            fullWidth
            variant="standard"
            color="secondary"
            size="medium"
            id="email"
            name="email"
            label="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(errors.email) && touched.email}
            helperText={touched.email && errors.email}
          />
          <TextField
            fullWidth
            variant="standard"
            color="secondary"
            size="medium"
            id="password"
            name="password"
            label="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(errors.password) && touched.password}
            helperText={touched.password && errors.password}
            sx={{ marginBottom: "20px" }}
          />
          <Signup to={"/"}>Forgot password?</Signup>
        </Grid>
        <Grid size={{ xs: 0, sm: 1, md: 2 }} />
        <Grid size={{ xs: 3, md: 4 }} />
        <Grid size={{ xs: 6, md: 4 }}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            size="large"
            type="submit"
            sx={{ color: "white" }}
          >
            Login
          </Button>
        </Grid>
        <Grid size={{ xs: 3, md: 4 }} />
      </Grid>
    </Form>
  );
};

const LoginForm = () => {
  const initialValues: loginmodel = { email: "", password: "" };
  return (
    <Formik<loginmodel>
      initialValues={initialValues}
      validationSchema={validationSchema}
      component={Login}
      onSubmit={(values) => {
        console.log(values);
      }}
    />
  );
};

const Account = (props: { set: any }) => {
  return (
    <Grid
      container
      width={{ xs: "100vw", sm: 400, md: 600 }}
      sx={{ padding: "20px" }}
    >
      <Grid size={12}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton sx={{ padding: 0 }} onClick={() => props.set(false)}>
            <CloseIcon color="secondary" fontSize="large" />
          </IconButton>
          <Typography fontSize="20px" color="secondary">
            Close
          </Typography>
        </div>
      </Grid>
      <Grid size={{ xs: 12, md: 12 }}>
        <Typography
          fontSize="30px"
          variant="h2"
          fontWeight={700}
          color="secondary"
          textAlign={"center"}
          padding="10px 0"
        >
          Login
        </Typography>
        <LoginForm />
      </Grid>
    </Grid>
  );
};

function Header() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  return (
    <>
      <AppBar
        position="static"
        sx={{
          boxShadow: "none",
          borderBottom: "1px solid #ccc",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <Toolbar>
          <Grid container width={"100%"} alignItems={"center"}>
            <Grid size={{ xs: 1, sm: 1 }}>
              <IconButton
                size="large"
                edge="start"
                sx={{ mr: 2 }}
                onClick={() => setOpen(true)}
              >
                <MenuIcon color="secondary" />
              </IconButton>
            </Grid>
            <Grid size={{ xs: 2, sm: 4 }} />
            <Grid size={{ xs: 6, sm: 2 }}>
              <Typography
                variant="h1"
                fontSize="32px"
                textAlign={"center"}
                letterSpacing="24%"
              >
                SAGH
              </Typography>
            </Grid>
            <Grid size={{ sm: 4 }} />
            <Grid size={{ xs: 3, sm: 1 }} textAlign={"right"}>
              <IconButton>
                <FavoriteOutlinedIcon color="secondary" />
              </IconButton>
              <IconButton onClick={() => setOpen1(true)}>
                <AccountCircleOutlinedIcon color="secondary" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Menu />
      </Drawer>
      <Drawer anchor="right" open={open1} onClose={() => setOpen1(false)}>
        <Account set={setOpen1} />
      </Drawer>
    </>
  );
}

export default Header;
