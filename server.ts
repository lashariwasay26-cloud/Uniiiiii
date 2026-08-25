import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client with mandatory telemetry header
const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY environment variable is not configured.");
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
};

// Health Check API
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", appName: "Uni Route" });
});

// AI Profile Analysis Endpoint
app.post("/api/analyze-profile", async (req, res) => {
  try {
    const profile = req.body;
    const ai = getGeminiClient();

    const promptText = `You are Uni Route's lead university admissions and scholarship strategist.
Analyze the following student profile thoroughly:
- GPA: ${profile.gpa} (Scale: ${profile.gpaScale || '4.0'})
- SAT/ACT Score: ${profile.satScore || 'Not provided / Test-Optional'}
- Intended Major: ${profile.intendedMajor || 'Undecided'}
- Preferred Countries/Regions: ${Array.isArray(profile.preferredCountries) ? profile.preferredCountries.join(', ') : profile.preferredCountries || 'Global'}
- Academic Level: ${profile.academicLevel || 'High School Senior'}
- Financial Need: ${profile.financialNeed || 'Moderate'}
- Extracurricular Activities & Leadership: ${profile.extracurriculars || 'General high school participation'}
- Specific Goals or Concerns: ${profile.specificConcerns || 'Seeking full/partial scholarships'}

Please evaluate this profile and return a structured JSON response with:
1. overallRating: (e.g. 'Highly Competitive', 'Strong Candidate', 'Competitive with Strategic Upgrades', 'Needs Foundation Work')
2. ratingScore: an integer from 1 to 100
3. summary: A 2-3 sentence strategic executive summary.
4. reachUniversities: Array of 3 universities (each with name, country, rationale, acceptanceRate). Include a mix of global or Pakistani top institutions based on preferences.
5. targetUniversities: Array of 3 realistic match universities (each with name, country, rationale, acceptanceRate).
6. safetyUniversities: Array of 3 safety universities (each with name, country, rationale, acceptanceRate).
7. strengths: Array of 4 key profile highlights.
8. gapsAndWeaknesses: Array of 3 profile vulnerabilities or areas to improve.
9. actionPlan: Array of 4 chronological steps (step, title, action, timeline) to boost admission & scholarship odds.
10. scholarshipMatchScore: String percentage e.g. "88% Eligibility match".
11. recommendedScholarships: Array of 4 specific scholarship names (e.g., Fulbright, HEC Overseas Phase-III, Ehsaas Undergraduate, DAAD, LUMS NOP, Chevening) relevant to their profile.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: promptText,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            overallRating: { type: Type.STRING },
            ratingScore: { type: Type.INTEGER },
            summary: { type: Type.STRING },
            reachUniversities: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  country: { type: Type.STRING },
                  rationale: { type: Type.STRING },
                  acceptanceRate: { type: Type.STRING },
                },
                required: ["name", "country", "rationale", "acceptanceRate"],
              },
            },
            targetUniversities: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  country: { type: Type.STRING },
                  rationale: { type: Type.STRING },
                  acceptanceRate: { type: Type.STRING },
                },
                required: ["name", "country", "rationale", "acceptanceRate"],
              },
            },
            safetyUniversities: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  country: { type: Type.STRING },
                  rationale: { type: Type.STRING },
                  acceptanceRate: { type: Type.STRING },
                },
                required: ["name", "country", "rationale", "acceptanceRate"],
              },
            },
            strengths: { type: Type.ARRAY, items: { type: Type.STRING } },
            gapsAndWeaknesses: { type: Type.ARRAY, items: { type: Type.STRING } },
            actionPlan: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  step: { type: Type.INTEGER },
                  title: { type: Type.STRING },
                  action: { type: Type.STRING },
                  timeline: { type: Type.STRING },
                },
                required: ["step", "title", "action", "timeline"],
              },
            },
            scholarshipMatchScore: { type: Type.STRING },
            recommendedScholarships: { type: Type.ARRAY, items: { type: Type.STRING } },
          },
          required: [
            "overallRating",
            "ratingScore",
            "summary",
            "reachUniversities",
            "targetUniversities",
            "safetyUniversities",
            "strengths",
            "gapsAndWeaknesses",
            "actionPlan",
            "scholarshipMatchScore",
            "recommendedScholarships",
          ],
        },
      },
    });

    const text = response.text || "{}";
    const resultData = JSON.parse(text);
    res.json(resultData);
  } catch (error: any) {
    console.error("Error analyzing profile:", error);
    res.status(500).json({
      error: "Failed to perform AI analysis.",
      message: error.message || "Ensure GEMINI_API_KEY is configured in Secrets.",
    });
  }
});

// AI Essay Analysis Endpoint
app.post("/api/analyze-essay", async (req, res) => {
  try {
    const { essayText, promptTitle, targetUniversity } = req.body;
    if (!essayText || essayText.trim().length < 20) {
      return res.status(400).json({ error: "Essay text must be at least 20 characters." });
    }

    const ai = getGeminiClient();
    const systemPrompt = `You are a world-class admissions essay editor for elite global and national universities (Ivy League, Oxbridge, Stanford, LUMS, NUST, HEC scholars).
Analyze the following personal essay draft:
- Targeted Prompt/Topic: ${promptTitle || 'Common App Personal Statement'}
- Target University / Goal: ${targetUniversity || 'Top Global & National Universities'}

Essay Content:
"""
${essayText}
"""

Evaluate the essay and return a JSON object:
1. overallScore: integer 1-100
2. hookRating: String e.g. "9/10 - Engaging sensory opener"
3. clarityAndFlow: String e.g. "8/10 - Smooth transitions between paragraphs"
4. toneAnalysis: String describing the voice (e.g., "Authentic, reflective, intellectually curious")
5. strengths: Array of 3 specific positive elements in this draft
6. improvementAreas: Array of 3 actionable areas for improvement
7. revisedExcerpt: Optional string showing a rewritten 2-3 sentence version of the opening or weak section to demonstrate how to elevate it.
8. recommendedNextSteps: Array of 3 bullet points on what to revise next.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: systemPrompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            overallScore: { type: Type.INTEGER },
            hookRating: { type: Type.STRING },
            clarityAndFlow: { type: Type.STRING },
            toneAnalysis: { type: Type.STRING },
            strengths: { type: Type.ARRAY, items: { type: Type.STRING } },
            improvementAreas: { type: Type.ARRAY, items: { type: Type.STRING } },
            revisedExcerpt: { type: Type.STRING },
            recommendedNextSteps: { type: Type.ARRAY, items: { type: Type.STRING } },
          },
          required: [
            "overallScore",
            "hookRating",
            "clarityAndFlow",
            "toneAnalysis",
            "strengths",
            "improvementAreas",
            "recommendedNextSteps",
          ],
        },
      },
    });

    const text = response.text || "{}";
    res.json(JSON.parse(text));
  } catch (error: any) {
    console.error("Error analyzing essay:", error);
    res.status(500).json({
      error: "Failed to analyze essay.",
      message: error.message || "Ensure GEMINI_API_KEY is configured in Secrets.",
    });
  }
});

// AI Counselor Chat Endpoint
app.post("/api/counselor", async (req, res) => {
  try {
    const { message, history } = req.body;
    const ai = getGeminiClient();

    const systemInstruction = `You are 'UniRoute Counselor', an expert educational advisor specializing in higher education, global scholarships (Fulbright, Chevening, DAAD, Erasmus Mundus, MEXT), Pakistani scholarships (HEC Overseas, Ehsaas, PEEF, LUMS NOP, NUST, FAST), SAT preparation strategies, and university essay guidance.
Provide supportive, accurate, concise, and structured advice. Use markdown formatting with bullet points and bold headers when helpful. Always address the user directly with encouragement and clarity.`;

    const formattedHistory = Array.isArray(history)
      ? history.map((item: any) => ({
          role: item.sender === "user" ? "user" : "model",
          parts: [{ text: item.text }],
        }))
      : [];

    const chat = ai.chats.create({
      model: "gemini-3.6-flash",
      config: {
        systemInstruction,
      },
      history: formattedHistory,
    });

    const response = await chat.sendMessage({ message });
    res.json({ reply: response.text });
  } catch (error: any) {
    console.error("Error in counselor chat:", error);
    res.status(500).json({
      error: "Counselor error",
      reply: "I am experiencing a momentary connection issue. Please make sure your Gemini API key is configured or try asking again!",
    });
  }
});

// Start Express Server with Vite Integration
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Uni Route Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
