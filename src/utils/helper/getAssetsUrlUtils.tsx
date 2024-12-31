// Usage: <img src={getImageURL('login-image.jpg')} alt="login-image" />
const getImageURL = (name: string): string => {
  return new URL(`../../assets/images/${name}`, import.meta.url).href;
};

// Usage: <img className="menu-icon" src={getIconURL('document.svg')} alt="document" />;
const getIconURL = (name: string): string => {
  return new URL(`../../assets/icons/${name}`, import.meta.url).href;
};

export { getImageURL, getIconURL };
