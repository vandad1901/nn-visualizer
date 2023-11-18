import { Button, Typography } from "../../material-tailwind";

import React from "react";
import clsx from "clsx";

type props = { value: number; onChange: (inc: number) => void };

export function Incrementer({ value, onChange }: props) {
    const buttonClassName = clsx("px-0 w-8 order-1 sm:order-none text-center");
    return (
        <div className={"grid grid-cols-2 sm:grid-cols-3 justify-items-center"}>
            <Button className={buttonClassName} disabled={value <= 1} size="sm" onClick={(e) => onChange(-1)}>
                -
            </Button>
            <Typography key="text" className="py-1 mx-auto col-span-2 sm:col-span-1" variant="h5">
                {value}
            </Typography>
            <Button className={buttonClassName} disabled={value >= 20} size="sm" onClick={(e) => onChange(1)}>
                +
            </Button>
        </div>
    );
}
