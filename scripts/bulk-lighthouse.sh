#!/usr/bin/env bash

SITEMAP_URL="https://coreyja.com/sitemap.xml"

# $1 - xml url
parse_xml() {
  urls=`curl -s $1 | sed -n 's/^.*<loc>\(.*\)<\/loc>.*$/\1/p'`
  xmls=(`grep -e ".xml$" <<< $urls`)
  for xml_url in "${xmls[@]}"
  do
    parse_xml $xml_url
  done
  pages=(`grep -v -e ".xml$" <<< $urls`)
  printf '%s\n' "${pages[@]}" >&1
}

urls=$(parse_xml $SITEMAP_URL | paste -sd "," -)

yarn run lighthouse-batch -s "$urls"
