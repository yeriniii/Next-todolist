export async function GET() {
  const response = await fetch(`${process.env.NEXT_SERVER_URL}/todos`);
  const todos = await response.json();
  return new Response(JSON.stringify(todos), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: Request) {
  const { title, body } = await request.json();
  if (!title || !body) {
    return new Response(
      JSON.stringify({ error: "Title and contents are required." }),
      { status: 400 }
    );
  }

  const response = await fetch(`${process.env.NEXT_SERVER_URL}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, body, isDone: false }),
  });
  const newTodo = await response.json();

  return new Response(JSON.stringify(newTodo), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
