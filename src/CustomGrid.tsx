import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { useState } from "react";
import { ColDef } from "ag-grid-community";

type Cars = {
  make: string;
  model: string;
  price: number;
  electric: boolean;
};

type CustomGridProps = {
  cars: Cars[];
};

const CustomGrid = ({cars}: CustomGridProps) => {
  // Row Data: The data to be displayed.
  const [rowData] = useState(cars);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs] = useState<ColDef[]>([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
  ]);

  return (
    <div className="ag-theme-quartz" style={{ height: 500, minWidth: "100em" }}>
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  );
};

export default CustomGrid;
