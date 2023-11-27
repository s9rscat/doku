import React, { useEffect } from "react";

type DokuFrameCellProps = {
  value: string;
};

function DokuFrameCell({ value }: DokuFrameCellProps) {
  return <div>{value}</div>;
}

export default DokuFrameCell;
