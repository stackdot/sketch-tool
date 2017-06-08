#!/bin/bash

wget https://www.sketchapp.com/download/sketch.zip
unzip sketch.zip
mkdir -p sketchtool/bin/
mkdir -p sketchtool/share/
cp -R Sketch.app/Contents/Resources/sketchtool/bin/* ./sketchtool/bin/
cp -R Sketch.app/Contents/Resources/sketchtool/share/* ./sketchtool/share/
rm -rf Sketch.app
rm -rf sketch.zip
rm -rf __MACOSX