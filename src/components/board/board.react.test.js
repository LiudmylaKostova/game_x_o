import Board from "./board";
import { shallow, mount } from "enzyme";

/* TypeError: Cannot read property 'map' of undefined  */

// it("renders without crashing", () => {
//   shallow(<Board />);
// });

/* pass the prop cells and check if Board renders without an error: */

it("renders without crashing", () => {
  let cells = Array(9).fill("");
  shallow(<Board cells={cells} />);
});

/*simulate click on the first cell of the board, which has a 0 index in the array of cells. */

it("calls onClick event on click of a board cell", () => {
  let cells = Array(9).fill("");
  const onClick = jest.fn();
  let wrapper = mount(<Board cells={cells} click={onClick} />);
  wrapper.find("button.cell").first().simulate("click");
  expect(onClick).toBeCalledWith(0);
});
