import builder from "../src/";

it("should return select * ", () => {
  const query = builder({ columns: "*", table: "users", type: "select" });
  expect(query).toEqual("select * from users");
});
