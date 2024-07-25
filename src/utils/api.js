const checkResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(res.status);
  };

  const baseUrl = "https://87ec-67-165-141-227.ngrok-free.app";

  export const userInformationApi = ({firstName,lastName,email,comment}) => {
    return fetch(`${baseUrl}/Promo`,{
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            firstName,
            lastName,
            email,
            comment,
        }),
    }).then((res) => {
        return checkResponse(res);
      });
  }