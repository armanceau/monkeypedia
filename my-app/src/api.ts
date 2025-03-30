export const fetchMonkeys = async () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const apiUrl = `https://api.api-ninjas.com/v1/animals`;
  
    // Liste des primates
    const primatesNames = [
      "chimpanzee",
      "monkey",
      "bonobo",
      "capuchin",
      "gorilla",
      "macaque"
    ];
  
    const primates: any[] = [];
  
    // On va appeler l'API pour chaque primate de la liste
    try {
      for (const name of primatesNames) {
        const response = await fetch(`${apiUrl}?name=${name}`, {
          headers: { "X-Api-Key": apiKey },
        });
  
        if (!response.ok) {
          throw new Error(
            `Erreur API: ${response.status} - ${response.statusText}`
          );
        }
  
        const data = await response.json();
        
        // Ajouter les données du primate au tableau des primates
        primates.push(...data);
      }
  
      return primates;
    } catch (error) {
      console.error("Erreur lors du chargement des primates :", error);
      return null;
    }
  };
  