import React, { useEffect } from "react";

type DokuInsideCellProps = {
  value: string;
};

function DokuInsideCell({ value }: DokuInsideCellProps) {
  return <div>{value}</div>;
}

export default DokuInsideCell;
