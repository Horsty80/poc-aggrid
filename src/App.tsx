import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import { useCallback, useMemo, useState } from "react";
import "./App.css";


// Row Data Interface
interface IRow {
  mission: string;
  company: string;
  location: string;
  date: string;
  rocket: string;
  price: number;
  successful: boolean;
}

// Create new GridExample component
const GridExample = () => {
  const [selectedCompany, setSelectedCompany] = useState<string>("");
  // Row Data: The data to be displayed.

    // Row Data: The data to be displayed.
    const [rowData, setRowData] = useState<IRow[]>([
      { mission: "Voyager", company: "NASA", location: "Cape Canaveral", date: "1977-09-05", rocket: "Titan-Centaur ", price: 86580000, successful: true },
      { mission: "Apollo 13", company: "NASA", location: "Kennedy Space Center", date: "1970-04-11", rocket: "Saturn V", price: 3750000, successful: false },
      { mission: "Falcon 9", company: "SpaceX", location: "Cape Canaveral", date: "2015-12-22", rocket: "Falcon 9", price: 9750000, successful: true },
      {mission: "Falcon 9", company: "SpaceX", location: "Cape Canaveral", date: "2016-05-06", rocket: "Falcon 9", price: 9750000, successful: true },
      {mission: "Uncrewed", company: "Horsty", location: "Cape Canaveral", date: "2019-03-02", rocket: "Falcon 9", price: 9750000, successful: true },
    ]);
    
    // Column Definitions: Defines & controls grid columns.
    const [colDefs, setColDefs] = useState<ColDef[]>([
      { field: "mission" },
      { field: "company", 
      checkboxSelection: true },
      { field: "location" },
      { field: "date" },
      { field: "price" },
      { field: "successful" },
      { field: "rocket" }
    ]);
  // Apply settings across all columns
  const defaultColDef = useMemo<ColDef>(() => {
    return {
      filter: true,
      editable: true,
    };
  }, []);

  const isRowSelectable = rowNode => {
    return selectedCompany ? rowNode?.data?.company === selectedCompany : true;
  };


  const onSelectionChanged = useCallback((event) => {
    const selectedNodes = event.api.getSelectedNodes();
    
    if (selectedNodes.length === 0) {
      setSelectedCompany("");
      return;
    }

    console.log(selectedNodes[0].data.company);
    const selectedCompany = selectedNodes[0].data.company;
    setSelectedCompany(selectedCompany);
  }, []);

  // Container: Defines the grid's theme & dimensions.
  return (
    <div className={"ag-theme-quartz"} style={{ width: "100%", height: "100%" }}>
      <AgGridReact<IRow>
        isRowSelectable={isRowSelectable}
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        rowSelection="multiple"
        onSelectionChanged={onSelectionChanged}
        onCellValueChanged={(event) => console.log(`New Cell Value: ${event.value}`)}
      />
    </div>
  );
};

export default GridExample;
