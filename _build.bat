@echo off
C:\Python312\python.exe -m jupyter_book build .
start _build\html\index.htmlC:\Python312\python.exe -m jupyter_book build . && start _build\html\index.html
