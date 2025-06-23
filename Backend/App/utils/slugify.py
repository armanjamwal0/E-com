import re

def generate_slug(text: str) -> str:
    text = text.strip().lower()
    text = re.sub(r"[^\w\s-]", "", text)  # Remove special characters
    return re.sub(r"[\s_]+", "-", text)   # Replace spaces/underscores with dashes
