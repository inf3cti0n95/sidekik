#!/usr/bin/env node
const argv = require("yargs").argv;
const fs = require("fs");
const { source, dest, package } = argv;

if (source && dest && package) {
  fs.readFile(source, "utf-8", function(err, contents) {
    if (err) console.error(err);
    // Regex to find all local urls to update them to the new url.

    regex = /((?<=(\[[^\]]*?\]\())(?:(?!http|www\.|\.com|\.net|\.info|\.org).)*?(?=(\))))/g;
    newDoc = contents.replace(regex, function(link) {
      console.log(`\tModified url ${link} to ${package}-${link}`);
      return `${package}-${link}`;
    });

    fs.writeFile(dest, newDoc, function(err) {
      if (err) console.error(err);
      console.log(`Copied ${source} to ${dest}`);
    });
  });
}
