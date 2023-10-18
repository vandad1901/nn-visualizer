"use client";
import React from "react";
import {
    Navbar,
    Typography,
    Button,
    IconButton,
} from "../material-tailwind";

export const Header = () => {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    return (
        <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
            <div className="container mx-auto flex items-center justify-between">
                <Typography
                    as="a"
                    href="#"
                    className="mr-4 cursor-pointer py-1.5 font-medium text-teal-900"
                >
                    NN Visualizer
                </Typography>
                <a href="https://github.com/vandad1901" rel={"noreferrer"}>
                     <IconButton variant="outlined" size="sm">
                        <i className="fab fa-github" />
                    </IconButton> 
                </a>
            </div>
        </Navbar>
    );
};
