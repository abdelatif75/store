const ngrok = require("ngrok")

;(async function () {
  const url = await ngrok.connect({
    authtoken: "2ECovoWoIQAa2q5jVoXjFkkea1I_72kTv2z2dcHL6nxaGJT71",
    addr: 3000,
  })
  console.log(url)
})()
