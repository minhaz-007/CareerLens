import { NextResponse } from "next/server";
import { getPath } from "pdf-parse/worker";
import { PDFParse } from "pdf-parse";
import { analyseCVText } from "../../../lib/analyse-cv";

PDFParse.setWorker(getPath());

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json(
        { error: "No CV file was provided." },
        { status: 400 }
      );
    }

    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { error: "The CV must be smaller than 10MB." },
        { status: 400 }
      );
    }

    const extension = file.name.split(".").pop()?.toLowerCase();

    if (extension !== "pdf") {
      return NextResponse.json(
        { error: "For this test, please upload a PDF CV." },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const parser = new PDFParse({
      data: buffer,
    });

    const result = await parser.getText();
    await parser.destroy();

    const text = result.text.trim();

    if (!text) {
      return NextResponse.json(
        {
          error:
            "We couldn't extract text from this PDF. It may be an image/scanned CV.",
        },
        { status: 422 }
      );
    }

    const targetRole = String(formData.get("targetRole") || "").trim();

    const analysis = analyseCVText(text, targetRole);

    return NextResponse.json({
      success: true,
      fileName: file.name,
      characters: text.length,
      words: text.split(/\s+/).filter(Boolean).length,
      targetRole,
      analysis,
    });
  } catch (error) {
    console.error("CV analysis error:", error);

    return NextResponse.json(
      { error: "Something went wrong while reading the CV." },
      { status: 500 }
    );
  }
}
