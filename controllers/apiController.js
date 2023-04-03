const dns = require("dns");
const whois = require("whois-json");
var data;

const getDomainInfo = async (req, res) => {
  const domain = req.params.domain;
  dns.lookup(domain, (err, address) => {
    if (err) {
      res.status(400).json({
        error: err.message,
      });
    }
    data = { domain, address };
  });

  // whois domain info
  const results = await whois(`${domain}`);
  res.status(200).json({
    domain: data.domain,
    ip: data.address,
    registrarUrl: results.registrarUrl,
    nameServer: results.nameServer,
    creationDate: results.creationDate,
    updatedDate: results.updatedDate,
    expirationDate: results.registrarRegistrationExpirationDate,
    registrantName: results.registrantName,
    registrantCountry: results.registrantCountry,
    adminName: results.adminName,
    adminPhone: results.adminPhone,
  });
};

const welcome = (req, res) => {
  res.status(200).json({
  "bannerAdUnitId": "ca-app-pub-3940256099942544/6300978111",
  "interstitialAdUnitId": "ca-app-pub-3940256099942544/1033173712",
  "fbBannerAdUnitId":"IMG_16_9_APP_INSTALL#2312433698835503_2964944860251047",
  "wantToShowAdmob":true,
  "wantToShowFbAds":true
  
});
};
module.exports = {
  getDomainInfo,
  welcome,
};
