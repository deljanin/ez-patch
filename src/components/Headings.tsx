export function H1({
  children,
  styles,
}: {
  children: React.ReactNode;
  styles?: string;
}) {
  return (
    <h1
      className={`font-montserrat text-4xl leading-14 whitespace-pre-line sm:text-5xl ${styles}`}
    >
      {children}
    </h1>
  );
}

export function H2({
  children,
  styles,
}: {
  children: React.ReactNode;
  styles?: string;
}) {
  return (
    <h2
      className={`font-montserrat text-4xl leading-14 whitespace-pre-line sm:text-5xl ${styles}`}
    >
      {children}
    </h2>
  );
}

export function H3({
  children,
  styles,
}: {
  children: React.ReactNode;
  styles?: string;
}) {
  return (
    <h3
      className={`font-montserrat text-xl whitespace-pre-line sm:text-3xl ${styles}`}
    >
      {children}
    </h3>
  );
}

export function H4({
  children,
  styles,
}: {
  children: React.ReactNode;
  styles?: string;
}) {
  return (
    <h3 className={`font-montserrat text-xl whitespace-pre-line ${styles}`}>
      {children}
    </h3>
  );
}
