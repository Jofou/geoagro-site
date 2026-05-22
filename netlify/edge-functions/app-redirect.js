export default async (request) => {
  const url = new URL(request.url);
  if (url.hostname === "app.geoagro.ca") {
    return Response.redirect(
      "https://019e4a9a-9252-3465-af7b-92c46fe0dd38.share.connect.posit.cloud" + url.pathname + url.search,
      302
    );
  }
};

export const config = { path: "/*" };
