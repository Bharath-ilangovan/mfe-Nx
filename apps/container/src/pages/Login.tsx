import React, { useState } from "react";
import {
    Box,
    Grid,
    Typography,
    TextField,
    Button,
    InputAdornment,
    IconButton,
    Stack,
} from "@mui/material";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import bgImage from "../assets/bg.png";
import playIcon from "../assets/PlayIcon.svg";
import cantierLoginIcon from "../assets/cantierLoginLogo.svg";
import YoutubeIcon from "../assets/youtube.svg";
import LinkedInIcon from "../assets/linkedIn.svg";
import FacebookIcon from "../assets/facebook.svg";
import passwordUnhide from "../assets/hidePassword.svg";
import passwordhide from "../assets/hidePassword.svg";
import userNameIcon from "../assets/usernameIcon.svg";
import { useAuth } from "../hooks/Auth/AuthProvider";
import { useNavigate } from "react-router-dom";
// import { useAppDispatch, useAppSelector } from "../app/store";
// import { login, selectUser } from "../store/features/User/userSlice";
// import { autoUpdateUserBasedSideBar } from "../store/features/SideBar/sideBarAPI";
const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    // const dispatch = useAppDispatch();
    // const { data, status, errorMessage } = useAppSelector(selectUser);
    const [username, setUsername] = useState<string | undefined>(undefined);
    const [password, setPassword] = useState<string | undefined>(undefined);

    const auth = useAuth();
    const navigate = useNavigate();


    const handleLogin = () => {
        navigate('/dashboard');
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Stack sx={{ backgroundColor: "#FAFAFA" }}>
            <Grid
                container
                spacing={1}
                direction="row"
                justifyContent="center"
                alignItems="center"
                alignContent="center"
                wrap="wrap"
                sx={{ height: "90vh", backgroundColor: "#FAFAFA" }}
            >
                <Grid item md={9}>
                    <img src={cantierLoginIcon} alt="bgLogo" style={{ width: "20vh" }} />
                    <Grid container sx={{ borderBottom: "1vh solid #F15D22" }}>
                        {/* Left Side - Image Section */}
                        <Grid item md={9}>
                            <Box
                                sx={{
                                    height: "100%",
                                    backgroundImage: `url(${bgImage})`, // Add your image here
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "end",
                                    backgroundColor: "#002856",
                                }}
                            >
                                <Typography
                                    component="div"
                                    color="white"
                                    sx={{ padding: "2vh", textAlign: "left" }}
                                >
                                    <span style={{ fontWeight: 700 }}>AN ULTIMATE</span> <br />{" "}
                                    MANUFACTURING EXECUTION SYSTEM
                                </Typography>
                            </Box>
                        </Grid>
                        {/* Right Side - Form Section */}
                        <Grid
                            item
                            md={3}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Stack
                                sx={{
                                    maxWidth: 400,
                                    width: "100%",
                                    padding: 3,
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    alignItem: "flex-end",
                                    justifyItems: "center",
                                }}
                            >
                                <Typography
                                    fontSize={"3vh"}
                                    fontWeight={800}
                                    color={"#4E4E4E"}
                                    gutterBottom
                                >
                                    Login your account
                                </Typography>
                                <TextField
                                    label="Username"
                                    fullWidth
                                    margin="normal"
                                    size="small"
                                    variant="standard"
                                    value={username}
                                    // helperText={errorMessage}
                                    error={status === "error"}
                                    onChange={(e) => setUsername(e.target.value)}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <img src={userNameIcon} style={{ height: "2vh" }} />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <TextField
                                    label="Password"
                                    fullWidth
                                    size="small"
                                    variant="standard"
                                    margin="normal"
                                    error={status === "error"}
                                    // helperText={errorMessage}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type={showPassword ? "text" : "password"}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={handleClickShowPassword}>
                                                    {showPassword ? (
                                                        <img
                                                            src={passwordUnhide}
                                                            style={{ height: "2vh" }}
                                                        />
                                                    ) : (
                                                        <img src={passwordhide} style={{ height: "2vh" }} />
                                                    )}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <Stack direction={"row"}>
                                    <Stack flexGrow={1}></Stack>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        sx={{
                                            mt: 2,
                                            px: 5,
                                            backgroundColor: "#002856",
                                            width: "30%",
                                            textTransform: "capitalize",
                                        }}
                                        onClick={handleLogin}
                                    >
                                        <img
                                            src={`${playIcon}`}
                                            style={{ height: "1.5vh", paddingRight: 5 }}
                                        />
                                        Submit
                                    </Button>
                                </Stack>
                                <Typography
                                    fontSize={"1.5vh"}
                                    color="textSecondary"
                                    sx={{ mt: 2, textAlign: "center" }}
                                >
                                    Not yet registered or having trouble signing in?{" "}
                                    <a
                                        href="#"
                                        style={{ color: "#e56b39", textDecoration: "none" }}
                                    >
                                        Click Here
                                    </a>
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Stack
                spacing={"2vh"}
                sx={{
                    position: "relative",
                    alignItems: "center",
                    justifyContent: "center",
                    alignContent: "center",
                }}
            >
                <p style={{ fontSize: "1.5vh", color: "#4e4e4e", marginTop: "-1vh" }}>
                    Please follow us on
                </p>
                <Stack direction={"row"} spacing={"3vh"}>
                    <img src={FacebookIcon} style={{ height: "2.5vh" }} />
                    <img src={LinkedInIcon} style={{ height: "2.5vh" }} />
                    <img src={YoutubeIcon} style={{ height: "2.3vh" }} />
                </Stack>
                <p style={{ fontSize: "1.5vh", color: "#4e4e4e" }}>
                    © Copyright | 2024 | CANTIER SYSTEMS
                </p>
            </Stack>
        </Stack>
    );
};

export default Login;
