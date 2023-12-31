from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from typing import List

app = FastAPI()

# 템플릿 엔진 설정
templates = Jinja2Templates(directory="templates")

# 단어 리스트 초기화
word_list = []

# 메이커 페이지 라우터
@app.get("/maker", response_class=HTMLResponse)
async def read_maker(request: Request):
    return templates.TemplateResponse("maker.html", {"request": request})

# 게임 페이지로 이동하는 라우터
@app.post("/start_game")
async def start_game(title: str, description: str, words: List[str]):
    global word_list
    word_list = words
    return {"title": title, "description": description, "words": word_list}

