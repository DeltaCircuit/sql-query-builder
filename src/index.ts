interface QueryObject {
  type: "select" | "update" | "delete" | "insert";
  table: string;
  columns: string | Array<string | object>;
}

const buildSelectColumns = (
  selectPart: string | Array<string | object>
): string => {
  if (Array.isArray(selectPart)) {
    const columns = selectPart.map((columnName: any) => {
      if (typeof columnName === "object") {
        const [name] = Object.keys(columnName);
        return `${name} as ${columnName[name]}`;
      }
      return columnName;
    });
    return columns.join(", ");
  }
  return selectPart;
};
const buildQuery = (query: QueryObject) => {
  return `${query.type} ${buildSelectColumns(query.columns)} from ${
    query.table
  }`;
};
export default buildQuery;
