# main.py

from fastapi import FastAPI, Form, Request, Body 
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse, RedirectResponse
from typing import List

app = FastAPI()

# 임시로 저장할 게임 정보를 담을 변수
game_info = {}

templates = Jinja2Templates(directory="templates")

@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.post("/submit", response_class=HTMLResponse)
async def submit(request: Request, game_data: dict = Body(...)):
    global game_info
    title = game_data.get("title", "")
    description = game_data.get("description", "")
    words = game_data.get("words", [])

    if title and description and len(words) >= 10:
        # 게임 정보를 저장
        game_info = {'title': title, 'description': description, 'words': words}
        # 게임 페이지로 리다이렉트 (실제 경로에 따라 수정 필요)
        return RedirectResponse(url="/game", status_code=302)
    else:
        return templates.TemplateResponse("error.html", {"request": request, "error_message": "Invalid data. Please check your input."})

@app.get("/game", response_class=HTMLResponse)
async def read_game(request: Request):
    return templates.TemplateResponse("game.html", {"request": request, "game_info": game_info})
