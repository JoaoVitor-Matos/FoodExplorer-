import { CustomContainer } from "./styles";

export function Input({ icon: Icon, ...rest }) {
  return (
    <CustomContainer>
      {Icon && <Icon size={"2.4rem"} />}
      <input {...rest} />
    </CustomContainer>
  );
}
