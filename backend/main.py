from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
import os
from exa_py import Exa

# Load environment variables
load_dotenv()

# Initialize Exa client
exa = Exa(os.getenv("EXA_API_KEY"))

# Create FastAPI app
app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Schema (optional, not used right now)
class Query(BaseModel):
    query: str

# Root route
@app.get("/")
def root():
    return {"message": "Exa Search Engine is running."}

# Debug route
@app.get("/debug")
def debug():
    return {"key": os.getenv("EXA_API_KEY")}

# Mock summary function
def mock_gpt_summary(query):
    return f"""
Here's a summary based on your search for "{query}":
This topic has a wide range of relevant insights. Below are curated links that can guide you further.
"""

# Search route with fallback
@app.get("/search")
def search(query: str):
    try:
        response = exa.search(query, num_results=5)

        return {
            "summary": mock_gpt_summary(query),
            "raw_results": [
                {"title": r.title, "url": r.url} for r in response.results
            ]
        }

    except Exception:
        return {
            "summary": f"Demo mode: results for '{query}'",
            "raw_results": [
                {
                    "title": "Search on Google",
                    "url": f"https://www.google.com/search?q={query}"
                },
                {
                    "title": "Read on Wikipedia",
                    "url": f"https://en.wikipedia.org/wiki/{query}"
                },
                {
                    "title": "Watch on YouTube",
                    "url": f"https://www.youtube.com/results?search_query={query}"
                }
            ]
        }