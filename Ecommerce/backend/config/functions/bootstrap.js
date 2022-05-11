"use strict";

module.export = () => {

  var convert = require("xml-js");
  var xml = require("fs").readFileSync("./data/simple.xml", "utf8");

  var result = convert.xml2json(xml, { compact: true, spaces: 2 });
  const data = JSON.parse(result);
  
  data.ROOT.ROW.forEach(entry => {
    strapi.services.row.create({
      description: entry.description_text, 
      vendor: entry.vendor_text, 
      vendorid: entry.vendorid_text, 
      state: entry.state_text
    })
  })
  console.log(data);
};
