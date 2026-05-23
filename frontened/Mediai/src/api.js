const BASE_URL = "http://localhost:5000/api";


// HEALTH SCORE
export async function getHealthScore(data) {
  const res = await fetch(`${BASE_URL}/healthscore`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return res.json();
}


// ASK AI / MEDICAL QUESTION
export async function askMedical(question) {
  const res = await fetch(`${BASE_URL}/medicalquestion`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ question })
  });

  return res.json();
}


// REPORT ANALYZER
export async function uploadReport(file) {
  const formData = new FormData();
  formData.append("report", file);

  const res = await fetch(`${BASE_URL}/report`, {
    method: "POST",
    body: formData
  });

  return res.json();
}


// EMERGENCY
export async function callEmergency(symptoms) {
  const res = await fetch(`${BASE_URL}/emergency`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ symptoms })
  });

  return res.json();
}