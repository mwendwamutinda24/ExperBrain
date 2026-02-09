export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, organization, industry, use } = req.body;

    console.log("Data received successfully:", { name, organization, industry, use });

    res.status(200).json({
      success: true,
      message: "Data received successfully",
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
