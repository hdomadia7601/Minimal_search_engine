from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
import os
from exa_py import Exa

# Load keys from .env
load_dotenv()

# Setup Exa client
exa = Exa(os.getenv("EXA_API_KEY"))

# FastAPI app setup
app = FastAPI()

# CORS for frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Update if you deploy
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Schema for GET endpoint
class Query(BaseModel):
    query: str

@app.get("/")
def root():
    return {"message": "Exa Search Engine is running."}

# Function to fake GPT-like summary
def mock_gpt_summary(query):
    return f"""
Here's a summary based on your search for **"{query}"**:
This topic has a wide range of relevant insights. Below are curated links that can guide you to deeper knowledge, tools, or services.
Start exploring and enjoy your search journey!
"""

# Search endpoint
@app.get("/search")
def search(query: str):
    response = exa.search(query, num_results=5)

    search_results = response.results
    summary = mock_gpt_summary(query)

    return {
        "summary": summary,
        "raw_results": [
            {"title": r.title, "url": r.url} for r in search_results
        ]
    }
