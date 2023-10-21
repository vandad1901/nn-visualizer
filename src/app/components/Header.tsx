import { IconButton, Navbar, Tooltip, Typography } from "../material-tailwind";

import React from "react";

export const Header = () => {
    return (
        <Navbar className="mx-auto max-w-full py-2 px-4">
            <div className="container mx-auto lg:px-8 lg:py-4 flex items-center justify-between text-teal-900">
                <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium text-l lg:text-xl">
                    NN Visualizer
                </Typography>
                <div className="flex gap-5">
                    <Typography as="a" href="about" className="place-self-end py-1.5">
                        About Me
                    </Typography>
                    <Tooltip content="Source code">
                        <a href="https://github.com/vandad1901/nn-visualizer" rel={"noreferrer"}>
                            <IconButton size="md">
                                <i className="fa-brands fa-github fa-xl"></i>
                            </IconButton>
                        </a>
                    </Tooltip>
                </div>
            </div>
        </Navbar>
    );
};
