#!/usr/bin/env bash
echo '
------------------------------------------------------------
LOKRA STUDIO

- Project: ui-starter
- Description: build script
------------------------------------------------------------
'
rm -rf dist/
echo '
------------------------------------------------------------
Task: Build Product
------------------------------------------------------------
'
./node_modules/.bin/ng build --target=production --environment=prod --aot=true --sourcemap=false

echo '
------------------------------------------------------------
Task: Build Zip File
------------------------------------------------------------
'
cd ..
rm -rf .ui-starter.tmp/
mkdir .ui-starter.tmp
cp -R ui-starter .ui-starter.tmp/
cd .ui-starter.tmp/ui-starter/
rm -rf ./node_modules/ ./.idea/ ./.git/ build.sh ./dist/
cd ..
zip -qr ./ui-starter.zip ./*
mv ./ui-starter.zip ../
cd ..
rm -rf .ui-starter.tmp/
cd ui-starter/
echo '
------------------------------------------------------------
Finished
------------------------------------------------------------
'
