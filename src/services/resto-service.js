export default class RestoService {
  getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getMenuItems = async () => {
    const res = this.getResource("http://localhost:3000/menu");
    return res;
  };
}
