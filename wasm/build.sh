#!/bin/sh

set -ex

wasm-pack build --target nodejs --out-dir pkg-node
wasm-pack build --target web --out-dir pkg-web