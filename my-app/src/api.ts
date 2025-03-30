export const fetchMonkeys = async () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = `https://api.api-ninjas.com/v1/animals?name=monkey`;

  try {
    const response = await fetch(apiUrl, {
      headers: { "X-Api-Key": apiKey },
    });

    if (!response.ok) {
      throw new Error(
        `Erreur API: ${response.status} - ${response.statusText}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Erreur lors du chargement des singes :", error);
    return null;
  }
};
