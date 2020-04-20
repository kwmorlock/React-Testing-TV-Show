import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { fetchShow as mockFetchShow } from "./api/fetchShow";

import {showData} from "./testdata";

// mock the fetchMissions function
jest.mock("./api/fetchShow");



test("renders show data when Select a season is clicked", async () => {
  mockFetchShow.mockResolvedValueOnce({
      data: showData
  });
  const { getByText} = render(<App />);
  expect(mockFetchShow).toHaveBeenCalledTimes(1)

await waitFor(() => getByText(/Select a season/i))
fireEvent.mouseDown(getByText(/Select a season/i))
await waitFor(() => getByText(/Season 4/i))

}); 