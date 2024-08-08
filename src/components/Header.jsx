import Logo from "./assets/images/Logo.svg"

export function Header() {
  return (
    <header>
      <picture>
        <img
          src={Logo}
          alt="To Do Website logo, a little blue rocket on the left site and a text composed by to and do togueder forming a todo."
        />
      </picture>
    </header>
  );
}
