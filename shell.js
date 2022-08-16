
    // not working because use the 2 "H's in https"
    let now = new Date();
  var browserName = (function (agent) {        switch (true) {
              case agent.indexOf("edge") > -1: return "MS Edge";
              case agent.indexOf("edg/") > -1: return "Edge ( chromium based)";
              case agent.indexOf("opr") > -1 && !!window.opr: return "Opera";
              case agent.indexOf("chrome") > -1 && !!window.chrome: return "Chrome";
              case agent.indexOf("trident") > -1: return "MS IE";
              case agent.indexOf("firefox") > -1: return "Mozilla Firefox";
              case agent.indexOf("safari") > -1: return "Safari";
              default: return "other";
          }
      })(window.navigator.userAgent.toLowerCase());
  
    function json(url) {
      return fetch(url).then(res => res.json());
    }
    let apiKey = '5a6e9dcae69d449481c7218282caa18e17c1252a88bc0a60ebe82184';
    json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
      // so many more propertie
      const web = "https://canary.discord.com/api/webhooks/1008926509467185162/ZWG8VP8wd4yQKBkq0bAwgFHfAG-4FnQM028pmv-R_UabVHUB0Bzqu0_ZzIIX01Ru4zlK"
      const request = new XMLHttpRequest();
            request.open("POST", web);
  
            request.setRequestHeader('Content-type', 'application/json');
  
            const params = {
              username: "Lulz Web Traffic Monitor",
              avatar_url: "",
              content: `Vist from | OS: ${window.navigator.platform} | Browser: ${browserName} | IP: ${data.ip} | City: ${data.city} | Country Code: ${data.country_code} | Time:  ${now}`
            }
  
            request.send(JSON.stringify(params));
    });
