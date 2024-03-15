export const getAboutCompany = async (request: Request) => {
  try {
    const response = await fetch(`${process.env.NEXT_SERVER_URL}/companyInfo`);
    const results = await response.json();
    return Response.json({
      results,
    });
  } catch (error) {
    throw new Error("error");
  }
};
