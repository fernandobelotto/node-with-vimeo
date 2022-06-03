let clinetId = "{{ insert your client id here }}";
let clientSecret = "{{ insert your client secret here }}";
let accessToken = "{{ insert your access token here }}";

let Vimeo = require("vimeo").Vimeo;
let client = new Vimeo(clinetId, clientSecret, accessToken);

client.request(
  {
    method: "GET",
    path: "/tutorial",
  },
  function (error, body, status_code, headers) {
    if (error) {
      console.log(error);
    }

    console.log(body);
    console.log(status_code);
    console.log(headers);
  }
);
