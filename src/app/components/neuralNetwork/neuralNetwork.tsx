"use client";

import { Counter } from "../Counter";
import React from "react";
import Xarrow from "react-xarrows";
import styles from "./neuralNetwork.module.css";
import { useImmer } from "use-immer";

export function NN() {
    const [layerCounts, updateLayerCounts] = useImmer([15, 20, 15, 20, 15, 1]);

    function updateLayers(layer: number, value: number) {
        console.log(layer, value);
        updateLayerCounts((draft) => {
            draft[layer] = value;
        });
    }
    const divElements = layerCounts.map((count, index) => (
        <div key={index} className="flex flex-col items-center gap-1">
            {Array.from({ length: count }).map((_, i) => (
                <div key={i} id={`${index}-${i}`} className={styles["nn-node"]}></div>
            ))}
            <Counter
                key="input"
                value={count}
                onChange={(inc: number) => {
                    updateLayers(index, count + inc);
                }}></Counter>
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
                        curveness={0}
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
            <div className={styles["nn-parent"]}>{divElements}</div>
            {svgElements}
        </>
    );
}
