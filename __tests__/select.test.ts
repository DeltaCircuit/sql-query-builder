import builder from "../src/";

describe("Different type of selects", () => {
  it("select * ", () => {
    const query = builder({ columns: "*", table: "users", type: "select" });
    expect(query).toEqual("select * from users");
  });
  it("select array of columns ", () => {
    const query = builder({
      columns: ["id", "name"],
      table: "users",
      type: "select"
    });
    expect(query).toEqual("select id, name from users");
  });
  it("select columns with alias ", () => {
    const query = builder({
      columns: [{ id: "idAlias" }, { name: "nameAlias" }],
      table: "users",
      type: "select"
    });
    expect(query).toEqual("select id as idAlias, name as nameAlias from users");
  });
});
