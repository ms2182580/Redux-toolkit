export default function fetchNotes() {
  try {
    return fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) throw new Error("Unable to fetch Notes!");
        return response.json();
      })
      .then((data) => {
        return data;
      });
  } catch (error) {
    console.log(error, "data is not coming");
    throw error;
  }
}
