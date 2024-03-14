export async function DELETE(
  request: Request,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) {
  const { id } = params;

  const response = await fetch(`http://localhost:4000/todos/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } else {
    return new Response(JSON.stringify({ error: "Failed to delete todo." }), {
      status: 500,
    });
  }
}

export async function PATCH(
  request: Request,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) {
  const { id } = params;
  const { isDone } = await request.json();
  const response = await fetch(`http://localhost:4000/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ isDone }),
  });
  const updatedTodo = await response.json();
  return new Response(JSON.stringify(updatedTodo), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
