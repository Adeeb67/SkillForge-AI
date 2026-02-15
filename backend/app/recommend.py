from fastapi import APIRouter

router = APIRouter()


@router.get("/recommend")
def recommend():
    return {
        "roles": [
            "Data Analyst",
            "Machine Learning Engineer",
            "Backend Developer"
        ],
        "skills_to_learn": [
            "Advanced SQL",
            "System Design",
            "Cloud Deployment"
        ]
    }
