import React from "react";

export interface ControlsInterface { children: React.ReactNode }

const Controls = ({ children }: { children: React.ReactNode }) => (children as React.ReactElement);

export default Controls;
