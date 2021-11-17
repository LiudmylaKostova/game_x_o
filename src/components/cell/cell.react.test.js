/* первый ознакомительный тест */

// test("cell", () => {
//   expect(false).toEqual(true);
// });

import Cell from "./cell";
import { shallow } from "enzyme";

/* check if Cell renders without an error: */

it("renders without crashing", () => {
  shallow(<Cell />);
});
