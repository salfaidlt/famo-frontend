export async function request<T>(
    url: string,
    options: RequestInit
  ): Promise<T> {
    try {
      const response = await fetch(url, options);
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Request failed with status ${response.status}: ${errorData.message || response.statusText}`
        );
      }
  
      return await response.json();
    } catch (error) {
      console.error("Request Error:", error);
      throw error;
    }
  }
  