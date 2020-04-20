// import React from "react";
// import { render, fireEvent, waitFor } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import App from "./App";
// import { fetchShow as mockFetchShow } from "./api/fetchShow";

// // mock the fetchMissions function
// jest.mock("./api/fetchShow");
// const showData = {
//   data: [
//       {
//     id: 553946,
//     url: "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
//     name: "Chapter One: The Vanishing of Will Byers",
//     season: 1,
//     number: 1,
//     airdate: "2016-07-15",
//     airtime: "",
//     airstamp: "2016-07-15T12:00:00+00:00",
//     runtime: 60,
//   },
//   {
//     id: 578663,
//     url: "http://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",
//     name: "Chapter Two: The Weirdo on Maple Street",
//     season: 1,
//     number: 2,
//     airdate: "2016-07-15",
//     airtime: "",
//     airstamp: "2016-07-15T12:00:00+00:00",
//     runtime: 60,

//   },

//   ],
// };


// test("renders show data when Select a season is clicked", async () => {
//   mockFetchShow.mockResolvedValueOnce(showData);
//   const { getByText, queryAllByTestId } = render(<App />);
//   const button = getByText(/get data/i);
//   userEvent.click(button);
//   await waitFor(() => expect(queryAllByTestId(/seasons/i)).toHaveLength(2));
// }); 