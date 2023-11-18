"use client";

import React, { useCallback } from "react";

import { Incrementer } from "../Incrementer";
import Xarrow from "react-xarrows";
import { useImmer } from "use-immer";

export function NN() {
    const [layerCounts, updateLayerCounts] = useImmer([5, 15, 10, 15, 5]);

    const updateLayers = useCallback(
        (layer: number, value: number) => {
            updateLayerCounts((draft) => {
                draft[layer] = value;
            });
        },
        [updateLayerCounts]
    );

    const divElements = layerCounts.map((count, index) => (
        <div key={index} className="flex flex-col items-center gap-1">
            <div className="flex-grow"></div>
            {Array.from({ length: count }).map((_, i) => (
                <div
                    key={i}
                    id={`${index}-${i}`}
                    className="w-5 h-5 bg-white border border-black mx-1 text-center rounded-full"></div>
            ))}
            <div className="flex-grow"></div>
            <Incrementer
                key="input"
                value={count}
                onChange={(inc: number) => {
                    updateLayers(index, count + inc);
                }}></Incrementer>
        </div>
    ));

    const svgElements: React.JSX.Element[] = [];
    for (let layerIndex = 0; layerIndex < layerCounts.length - 1; layerIndex++) {
        for (let startIndex = 0; startIndex < layerCounts[layerIndex]; startIndex++) {
            for (let endIndex = 0; endIndex < layerCounts[layerIndex + 1]; endIndex++) {
                svgElements.push(
                    <Xarrow
                        key={`${layerIndex}-${startIndex}-${endIndex}`}
                        start={`${layerIndex}-${startIndex}`}
                        end={`${layerIndex + 1}-${endIndex}`}
                        path="smooth"
                        curveness={0.1}
                        strokeWidth={1}
                        color="grey"
                        startAnchor={"right"}
                        endAnchor={"left"}
                        passProps={{ opacity: 0.2 }}></Xarrow>
                );
            }
        }
    }

    return (
        <>
            <div className="container mx-auto flex lg:px-10 py-5 lg:py-10 h-[580px] items-stretch justify-around overflow-hidden">
                {divElements}
            </div>
            {svgElements}
        </>
    );
}
