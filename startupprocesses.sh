#!/bin/bash

TODAY=$(date)
echo "-----------------------------------------------------"
echo " $TODAY: Starting up Services..."
echo "-----------------------------------------------------"

forever start app.js

