//This component was borrowed from https://stackoverflow.com/questions/66390382/how-to-use-bootstrap5-tooltip-in-react
/*import React, { useEffect, useRef } from 'react';
import {Tooltip as BsTooltip} from "bootstrap";

export const Tooltip = (p: {children: JSX.Element, text: string}) => {
    const childRef = useRef(undefined as unknown as Element)
    useEffect(() => {
        const t = new BsTooltip(childRef.current, {
            title: p.text,
            placement: "top",
            trigger: "hover"
        })
        return () => t.dispose()
    }, [p.text])
    return React.cloneElement(p.children, { ref: childRef })
}*/