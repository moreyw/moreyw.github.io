---
layout: post
title:  "Vote Comparer"
date:   2018-05-07
categories: project
duration: April 2014-May 2014
deck: ""
type: "project"
---


A simple script to compare votes of pairs of Representatives/Senators of the US congress. Prompts user to enter the name of the Rep/Sen that should be searched for. Will output a .csv file with all of the votes that the members voted together on.

Run voteComparer.py using Python 2.7

Currently uses the Sunlight Foundaiton API to access the voting history of different members of the US House and Senate, and then compare their votes on all of the bills that they both voted on.

Requires an Sunlight Foundation API key, which can be obtained at the Snlight Foundation website.

Once an API Key has been obtained, it should be placed in the variable on line 6.

Currently only access votes from 2009-Present.​
