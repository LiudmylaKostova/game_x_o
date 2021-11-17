import GameLogicUseReducer from "./game-logic-useReducer";
import { shallow, mount } from "enzyme";

/* check if GameLogicUseReducer renders without an error: */

it("renders without crashing", () => {
  shallow(<GameLogicUseReducer />);
});

/* check if game status renders correctly */

it("renders game status correctly", () => {
  const wrapper = mount(<GameLogicUseReducer />);
  const firstPlayer = wrapper.find("div.box").children().first().text();
  expect(firstPlayer).toEqual("Next player: X");
  const button = wrapper.find("button.cell").first();
  button.simulate("click");
  const secondPlayer = wrapper.find("div.box").children().first().text();
  expect(secondPlayer).toEqual("Next player: 0");

  /* check the winner when the game is over
  checking the winning combination [0 3 6]
  0 was made at first click on the first cell at index 0 (turn1) */

  const turn2 = wrapper.find("button.cell").at(1);
  turn2.simulate("click");

  const turn3 = wrapper.find("button.cell").at(3);
  turn3.simulate("click");

  const turn4 = wrapper.find("button.cell").at(2);
  turn4.simulate("click");

  const turn5 = wrapper.find("button.cell").at(6);
  turn5.simulate("click");

  const winner = wrapper.find("div.box").children().first().text();
  expect(winner).toEqual("Winner is X");
});
