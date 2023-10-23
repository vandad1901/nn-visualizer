"use client";

import React from "react";
import Xarrow from "react-xarrows";
import styles from "./neuralNetwork.module.css";
export function NN() {
    const layerCounts = [2, 3, 4, 5, 6, 7, 8, 9];

    const divElements = layerCounts.map((count, index) => (
        <div key={index}>
            {Array.from({ length: count }).map((_, i) => (
                <div key={i} id={`${index}-${i}`} className={styles["nn-node"]}></div>
            ))}
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
                        curveness={0.4}
                        strokeWidth={1}
                        color="grey"
                        startAnchor={"right"}
                        endAnchor={"left"}
                        passProps={{ opacity: 0.3 }}></Xarrow>
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
