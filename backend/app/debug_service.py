def analyze_code(code: str):

    feedback = []

    if "print(" not in code:
        feedback.append("Consider adding print statements for debugging.")

    if "for" in code and "range" not in code:
        feedback.append("Loop detected. Ensure iteration boundaries are correct.")

    if "==" in code:
        feedback.append("Check equality comparisons carefully to avoid logic bugs.")

    if len(code.split("\n")) < 3:
        feedback.append("Code is very short. Try expanding logic for better testing.")

    if not feedback:
        feedback.append(
            "Code looks structurally fine. Try testing edge cases for robustness."
        )

    return "\n".join(feedback)
