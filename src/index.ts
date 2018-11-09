interface QueryObject {
  type: "select" | "update" | "delete" | "insert";
  table: string;
  columns: string | Array<string>;
}
const buildQuery = (query: Partial<QueryObject>) => {
  return `${query.type} ${query.columns} from ${query.table}`;
};
export default buildQuery;
