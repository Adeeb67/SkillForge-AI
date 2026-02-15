"use client";

import { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function ResumeGenerator() {
  const [form, setForm] = useState<any>({
    name: "",
    location: "",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
    leetcode: "",
    university: "",
    uniLocation: "",
    degree: "",
    eduStart: "",
    eduEnd: "",
    programming: "",
    frameworks: "",
    databases: "",
    tools: "",
    languages: "",
  });

  const [experiences, setExperiences] = useState<any[]>([]);
  const [projects, setProjects] = useState<any[]>([]);
  const [saveMessage, setSaveMessage] = useState("");

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  /* ================= PDF DOWNLOAD ================= */
  const downloadPDF = async () => {
    const el = document.getElementById("resume-preview");
    if (!el) return;

    const canvas = await html2canvas(el, { scale: 2 });
    const img = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    pdf.addImage(img, "PNG", 0, 0, 210, (canvas.height * 210) / canvas.width);
    pdf.save("resume.pdf");

    // ✅ Store in resume library as "downloaded"
    const library = JSON.parse(
      localStorage.getItem("resumeLibrary") || "[]"
    );

    library.push({
      id: Date.now().toString(),
      name: form.name || "Downloaded Resume",
      type: "downloaded",
      createdAt: new Date().toISOString(),
      data: { form, experiences, projects },
    });

    localStorage.setItem("resumeLibrary", JSON.stringify(library));
  };

  /* ================= SAVE RESUME ================= */
  const saveResume = () => {
    const library = JSON.parse(
      localStorage.getItem("resumeLibrary") || "[]"
    );

    library.push({
      id: Date.now().toString(),
      name: form.name || "Untitled Resume",
      type: "saved",
      createdAt: new Date().toISOString(),
      data: { form, experiences, projects },
    });

    localStorage.setItem("resumeLibrary", JSON.stringify(library));

    setSaveMessage("Resume saved successfully ✅");
    setTimeout(() => setSaveMessage(""), 2000);
  };

  /* ================= LOAD RESUME ================= */
  const loadResume = () => {
    const saved = JSON.parse(
      localStorage.getItem("resume") || "null"
    );

    if (!saved) {
      alert("No saved resume found");
      return;
    }

    setForm(saved.form || {});
    setExperiences(saved.experiences || []);
    setProjects(saved.projects || []);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-700 to-indigo-700 p-6">
      <h1 className="text-white text-2xl font-bold mb-4">
        AI Resume Generator
      </h1>

      {/* ACTION BUTTONS */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button className="action">CLASSIC</button>
        <button className="action">MODERN</button>
        <button className="action">MINIMAL</button>

        <button className="action green" onClick={downloadPDF}>
          Download PDF
        </button>

        <button className="action blue" onClick={saveResume}>
          Save Resume
        </button>

        <button className="action yellow" onClick={loadResume}>
          Load Resume
        </button>
      </div>

      {saveMessage && (
        <div className="text-white font-bold mb-2">{saveMessage}</div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {/* FORM */}
        <div className="bg-purple-600 p-5 rounded-xl space-y-3 max-h-[85vh] overflow-y-auto">
          {Object.keys(form).map((key) => (
            <input
              key={key}
              name={key}
              value={form[key]}
              onChange={handleChange}
              placeholder={key}
              className="input"
            />
          ))}

          <h3 className="section">Experience</h3>
          <button
            className="action"
            onClick={() =>
              setExperiences([
                ...experiences,
                { company: "", role: "", points: "" },
              ])
            }
          >
            + Add Experience
          </button>

          <h3 className="section">Projects</h3>
          <button
            className="action"
            onClick={() =>
              setProjects([...projects, { title: "", points: "" }])
            }
          >
            + Add Project
          </button>
        </div>

        {/* PREVIEW */}
        <div
          id="resume-preview"
          className="bg-white p-8 rounded-xl text-black"
        >
          <h1 className="text-xl font-bold text-center">{form.name}</h1>
          <p className="text-center text-sm">
            {form.location} | {form.phone} | {form.email}
          </p>

          <hr className="my-2" />
          <h3 className="resume">EDUCATION</h3>
          <p>{form.university}</p>

          <hr className="my-2" />
          <h3 className="resume">TECHNICAL SKILLS</h3>
          <p>Programming: {form.programming}</p>
          <p>Frameworks: {form.frameworks}</p>

          <hr className="my-2" />
          <h3 className="resume">WORK EXPERIENCE</h3>

          <hr className="my-2" />
          <h3 className="resume">PROJECTS</h3>
        </div>
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          padding: 10px;
          border-radius: 6px;
          background: white;
          color: black;
          font-size: 14px;
          font-weight: 600;
        }

        .input::placeholder {
          font-weight: 600;
          color: #555;
        }

        .action {
          padding: 8px 14px;
          background: white;
          color: black;
          border-radius: 6px;
          font-weight: bold;
          cursor: pointer;
        }

        .green {
          background: #22c55e;
          color: white;
        }

        .blue {
          background: #3b82f6;
          color: white;
        }

        .yellow {
          background: #facc15;
          color: black;
        }

        .section {
          color: white;
          font-weight: bold;
          margin-top: 10px;
        }

        .resume {
          font-weight: bold;
          margin-top: 6px;
        }
      `}</style>
    </div>
  );
}
