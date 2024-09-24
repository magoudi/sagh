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
import { Link, useLocation, useNavigate } from "react-router-dom";

interface loginmodel {
  email: string;
  password: string;
}

interface signupmodel {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmpassword: string;
}

const loginvalidationSchema = yup.object().shape({
  email: yup.string().email().required("Required"),
  password: yup
    .string()
    .min(8, "Password must be above 8 characters")
    .required("Required"),
});

const signupvalidationSchema = yup.object().shape({
  firstname: yup
    .string()
    .min(3, "name must be above 3 characters")
    .required("Required"),
  lastname: yup
    .string()
    .min(3, "name must be above 3 characters")
    .required("Required"),
  email: yup.string().email().required("Required"),
  password: yup
    .string()
    .min(8, "Password must be above 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter and one number"
    )
    .required("Required"),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
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
  const navigate = useNavigate();
  const Forget = styled(Link)(({ theme }) => ({
    color: theme.palette.secondary.main,
    textDecoration: "underline",
    fontSize: "15px",
  }));
  return (
    <Form>
      <Grid container rowSpacing={"10px"}>
        <Grid size={{ xs: 0, sm: 1, md: 2 }} />
        <Grid size={{ xs: 12, sm: 10, md: 8 }} textAlign={"center"}>
          <Typography
            onClick={() => {
              navigate("/sagh/", { state: true });
            }}
          >
            Dont have an account? Sign up
          </Typography>
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
            type="password"
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
          <Forget to={"/"}>Forgot password?</Forget>
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
      validationSchema={loginvalidationSchema}
      component={Login}
      onSubmit={(values) => {
        console.log(values);
      }}
    />
  );
};

const Signup = (props: FormikProps<signupmodel>) => {
  const { values, handleChange, handleBlur, errors, touched } = props;
  const navigate = useNavigate();
  return (
    <Form>
      <Grid container rowSpacing={"10px"}>
        <Grid size={{ xs: 0, sm: 1, md: 2 }} />
        <Grid size={{ xs: 12, sm: 10, md: 8 }} textAlign={"center"}>
          <Typography
            onClick={() => {
              navigate("/sagh/", { state: false });
            }}
          >
            Already have an account? Login
          </Typography>
          <Grid container columnSpacing={"40px"}>
            <Grid size={6}>
              <TextField
                variant="standard"
                color="secondary"
                size="medium"
                id="firstname"
                name="firstname"
                label="First Name"
                value={values.firstname}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(errors.firstname) && touched.firstname}
                helperText={touched.firstname && errors.firstname}
              />
            </Grid>
            <Grid size={6}>
              <TextField
                variant="standard"
                color="secondary"
                size="medium"
                id="lastname"
                name="lastname"
                label="Last Name"
                value={values.lastname}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(errors.lastname) && touched.lastname}
                helperText={touched.lastname && errors.lastname}
              />
            </Grid>
          </Grid>
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
            type="password"
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
          <TextField
            fullWidth
            type="password"
            variant="standard"
            color="secondary"
            size="medium"
            id="confirmpassword"
            name="confirmpassword"
            label="Confirm Password"
            value={values.confirmpassword}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(errors.confirmpassword) && touched.confirmpassword}
            helperText={touched.confirmpassword && errors.confirmpassword}
            sx={{ marginBottom: "20px" }}
          />
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
            Signup
          </Button>
        </Grid>
        <Grid size={{ xs: 3, md: 4 }} />
      </Grid>
    </Form>
  );
};

const SignupForm = () => {
  const initialValues: signupmodel = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  return (
    <Formik<signupmodel>
      initialValues={initialValues}
      validationSchema={signupvalidationSchema}
      component={Signup}
      onSubmit={(values) => {
        console.log(values);
      }}
    />
  );
};

const Account = (props: { set: any }) => {
  const location = useLocation();
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
          {location.state ? "Sign up" : "Login"}
        </Typography>
        {location.state ? <SignupForm /> : <LoginForm />}
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
