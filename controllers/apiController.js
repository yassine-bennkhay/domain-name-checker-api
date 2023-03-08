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
    message:
      "Welcome to the domain name API checker, hit the endpoint /api/v1/domain/ and type your domain name without https:// to get the domain info.",
  });
};
module.exports = {
  getDomainInfo,
  welcome,
};
