const checkResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(res.status);
  };

  export const userInformationApi = ({firstName,lastName,attendanceFrequency,comment}) => {
    return fetch(`api/promo`,{
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            firstName,
            lastName,
            attendanceFrequency,
            comment,
        }),
    }).then((res) => {
        return checkResponse(res);
      });
  }