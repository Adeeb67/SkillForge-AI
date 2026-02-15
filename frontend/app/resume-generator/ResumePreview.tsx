export default function ResumePreview({ data }: { data: any }) {
  return (
    <div className="font-serif text-black p-8">
      {/* HEADER */}
      <h1 className="text-2xl font-bold text-center">
        {data.name || "Your Name"}
      </h1>

      <p className="text-center text-sm mt-1">
        {data.location || "Location"} • {data.phone || "Phone"} •{" "}
        {data.email || "Email"}
      </p>

      <p className="text-center text-sm mb-4">
        {data.linkedin && <>LinkedIn: {data.linkedin} • </>}
        {data.github && <>GitHub: {data.github} • </>}
        {data.leetcode && <>LeetCode: {data.leetcode}</>}
      </p>

      <Section title="EDUCATION">
        <p className="font-semibold">
          {data.university || "University Name"},{" "}
          {data.eduLocation || "City, Country"}
        </p>
        <p>
          {data.degree || "Degree"} <br />
          {data.eduStart || "Start"} – {data.eduEnd || "End"}
        </p>
        <ul className="list-disc ml-5 text-sm">
          {(data.coursework || "")
            .split("\n")
            .filter(Boolean)
            .map((c: string, i: number) => (
              <li key={i}>{c}</li>
            ))}
        </ul>
      </Section>

      <Section title="TECHNICAL SKILLS">
        <p><b>Programming:</b> {data.programming}</p>
        <p><b>Frameworks:</b> {data.frameworks}</p>
        <p><b>Databases:</b> {data.databases}</p>
        <p><b>Tools:</b> {data.tools}</p>
        <p><b>Languages:</b> {data.languages}</p>
      </Section>

      <Section title="WORK EXPERIENCE">
        <p className="font-semibold">
          {data.experienceCompany || "Company"} — {data.experienceRole || "Role"}
        </p>
        <p className="italic text-sm">
          {data.experienceStart || "Start"} – {data.experienceEnd || "End"}
        </p>
        <ul className="list-disc ml-5 text-sm">
          {(data.experiencePoints || "")
            .split("\n")
            .filter(Boolean)
            .map((p: string, i: number) => (
              <li key={i}>{p}</li>
            ))}
        </ul>
      </Section>

      <Section title="PROJECTS">
        <ul className="list-disc ml-5 text-sm">
          {(data.projects || "")
            .split("\n")
            .filter(Boolean)
            .map((p: string, i: number) => (
              <li key={i}>{p}</li>
            ))}
        </ul>
      </Section>

      <Section title="LEADERSHIP & ACTIVITIES">
        <ul className="list-disc ml-5 text-sm">
          {(data.leadership || "")
            .split("\n")
            .filter(Boolean)
            .map((l: string, i: number) => (
              <li key={i}>{l}</li>
            ))}
        </ul>
      </Section>
    </div>
  );
}

/* ---------- Section Component ---------- */

function Section({ title, children }: any) {
  return (
    <div className="mt-5">
      <h2 className="font-bold border-b border-black mb-2">{title}</h2>
      {children}
    </div>
  );
}
