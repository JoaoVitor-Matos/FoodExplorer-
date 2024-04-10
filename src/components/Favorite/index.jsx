import { Container } from "./styles";

export function Favorite({ data, removeFavorite }) {
  const handleRemoveFavorite = () => {
    removeFavorite(data.id);
  };

  return (
    <Container>
      <img src={`${process.env.REACT_APP_API_URL}/files/${data.image}`} alt="Imagem do prato." />
      
      <div>
        <h2>{data.name}</h2>
        <button onClick={handleRemoveFavorite}>Remover dos Favoritos</button>
      </div>
    </Container>
  );
}
