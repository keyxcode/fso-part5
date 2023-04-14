import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Blog from "./Blog";

test("renders title and author only by default", () => {
  const blog = {
    title: "testBook",
    author: "testAuthor",
    url: "google",
    likes: 10,
    user: {
      username: "testUser",
      name: "bill",
      id: "456",
    },
    id: "123",
  };

  render(<Blog blog={blog} />);
  screen.debug();

  screen.getByText("testBook", { exact: false });
  screen.getByText("testAuthor", { exact: false });

  expect(screen.queryByText("google", { exact: false })).not.toBeVisible();
  expect(screen.queryByText("10", { exact: false })).not.toBeVisible();
});

// test("clicking the button calls event handler once", async () => {
//   const note = {
//     content: "Component testing is done with react-testing-library",
//     important: true,
//   };

//   const mockHandler = jest.fn();

//   render(<Note note={note} toggleImportance={mockHandler} />);

//   const user = userEvent.setup();
//   const button = screen.getByText("make not important");
//   await user.click(button);

//   expect(mockHandler.mock.calls).toHaveLength(1);
// });
