from fastapi import APIRouter, UploadFile, File
import os

router = APIRouter()

UPLOAD_PATH = "resumes"

os.makedirs(UPLOAD_PATH, exist_ok=True)


@router.post("/upload-resume")
async def upload_resume(file: UploadFile = File(...)):
    file_path = os.path.join(UPLOAD_PATH, file.filename)

    with open(file_path, "wb") as f:
        f.write(await file.read())

    # read text (simple version)
    text = ""
    try:
        with open(file_path, "r", errors="ignore") as f:
            text = f.read()
    except:
        text = "Resume uploaded successfully."

    return {
        "message": "Resume uploaded",
        "resume_text": text[:4000]
    }
