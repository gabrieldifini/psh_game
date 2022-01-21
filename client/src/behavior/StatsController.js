import { useState } from "react";

function handleLoadSection(state, setState) {
  const url = new URL(process.env.REACT_APP_API_URL);
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.success) {
        setState({
          ...state,
          stats: data.result,
          latestTimestamp: data.latestTimestamp
        });
      } else {
        setState({
          ...state,
          notification: {
            type: "error",
            text: "An error ocurred while retrieving the stats.",
          },
        });
        console.log(data);
      }
    })
    .catch((error) => {
      setState({
        ...state,
        loading: false,
        update: { ...state.update, value: false },
      });
      console.log(error);
    });
}

function handleEvent(event, state, setState) {
  if (event === "LOAD_SECTION") handleLoadSection(state, setState);
}

export default function useSetupState() {
  const defaultState = { stats: [] };
  const [state, setState] = useState(defaultState);

  const dispatch = (event) => {
    handleEvent(event, state, setState);
  };

  return { state, dispatch };
}
