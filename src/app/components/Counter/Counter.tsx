import { Button, Typography } from "../../material-tailwind";

import React from "react";

type props = { value: number; onChange: (inc: number) => void };

export function Counter({ value, onChange }: props) {
    return (
        <div className="flex w-28 justify-between">
            <Button key="decrese" size="sm" onClick={(e) => onChange(-1)}>
                -
            </Button>
            <Typography key="text" className="py-1" variant="h5">
                {value}
            </Typography>
            <Button key="increase" size="sm" onClick={(e) => onChange(1)}>
                +
            </Button>
        </div>
    );
}
