import { TbReceipt } from "react-icons/tb";
import { useMediaQuery } from 'react-responsive';
import { Container } from "./styles";

export function Button({ title, loading = false, isCustomer, orderCount, ...rest }) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <Container 
      type="button" 
      disabled={loading} 
      {...rest}
    >
      {isCustomer && <TbReceipt size={"3.2rem"} />}
      {loading ? "Carregando..." : title}
      {isCustomer && (
        <span>
          {isDesktop ? `(${orderCount})` : orderCount}
        </span>
      )}
    </Container>
  );
}
