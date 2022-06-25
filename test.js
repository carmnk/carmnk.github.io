let axios = require("axios");

axios
  .get(
    "https://data.lemon.markets/v1/quotes/?isin=US2605661048",

    {
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJsZW1vbi5tYXJrZXRzIiwiaXNzIjoibGVtb24ubWFya2V0cyIsInN1YiI6InVzcl9weVBnYnR0MzNYUmxSZ2I5MnBIUjFnS3loNTd0bG1GNGhNIiwiZXhwIjoxNjY5NDEyMjgzLCJpYXQiOjE2Mzc4NzYyODMsImp0aSI6ImFwa19weVBnYnh4RkY5ZHNRcXdkVk4zbHBHUHpQTmdLcmZLTERQIiwibW9kZSI6InBhcGVyIn0.iR68uCgADpfrIpit1HIEKBTJ44J-0gjEtvYQqmHcTKM",
      },
    }
  )
  .then((response) => {
    console.log(response.data);
  })
  .catch((e) => {
    console.log(e);
  });
