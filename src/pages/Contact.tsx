import CloseIcon from "@mui/icons-material/Close";
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { Avatar, Box, Button, Grid, IconButton, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import Header from "../components/HeaderComponent";


export default function Contact() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!name || !email || !message) {
            Swal.fire({
                title: "Error!",
                text: "Please fill in all fields",
                icon: "error",
                confirmButtonColor: "#007bff",
            });
            return;
        }
        const formData = new FormData(event.currentTarget);

        formData.append("access_key", "d1b7ba68-e213-441a-b812-2125afabf36d");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success",
                confirmButtonColor: "#007bff",
            });
        }
    };

    const handleClose = () => {
        navigate("/");
    };

    return (
        <>
            <Header />
            <Grid container component="main" sx={{
                marginTop: 10, marginBottom: 5,
                display: "flex", justifyContent: "center", alignItems: "center"
            }}>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            position: "relative",
                        }}
                    >
                        <IconButton
                            sx={{
                                position: "absolute",
                                top: 8,
                                right: 8,
                            }}
                            onClick={handleClose}
                        >
                            <CloseIcon />
                        </IconButton>
                        <Avatar sx={{ m: 1, bgcolor: "black" }}>
                            <ContactSupportIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Contact Us
                        </Typography>

                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                name="name"
                                autoComplete="name"
                                autoFocus
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="message"
                                label="Message"
                                name="message"
                                multiline
                                rows={4}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, backgroundColor: "black" }}
                            >
                                Send
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}