fetch("https://api.openweathermap.org/data/3.0/onecall?q='karachi'&appid={3eb5e90e7b2967bdc06f1f1906da667b}")
      .then(respnse => respnse.json())
      .then(data => {
            console.log(data);
      })
      .catch((Error) => {
            console.log(Error + "something is fishy fishy");
      })

