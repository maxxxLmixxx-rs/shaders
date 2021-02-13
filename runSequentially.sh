#!/bin/bash

for shader in "./tutorial"/*
do
  glslViewer -l $shader image.jpg
done

